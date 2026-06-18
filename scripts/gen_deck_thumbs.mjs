#!/usr/bin/env node
/**
 * gen_deck_thumbs.mjs — Generate thumbnails for each page of a multi-file deck (for use in deck_index.html's "infinite gallery" overview).
 *
 * Background: deck_index.html has two overviews -
 * · Grid grid (default 60%): Use iframe to render real subpages, clear, WYSIWYG, no thumbnails required.
 * · Infinite gallery gallery (40%): Seamlessly and infinitely tile all pages + slow drift. If dozens to hundreds of tiles are all using iframe, it will be very stuck.
 * So the gallery uses <img> thumbnails instead - the same image is reused multiple times and the browser only decodes it once, which is smooth.
 * This script is to prepare these thumbnails for the gallery. Grid mode doesn't require it.
 *
 * Usage (copy to the deck project root directory, install dependencies and run):
 *   npm install playwright sharp
 *   node gen_deck_thumbs.mjs --slides slides --out thumbs [--width 1600] [--quality 86]
 *
 * Then add thumb to each item in MANIFEST of index.html (same name as file. jpg):
 * { file: "slides/01-cover.html", thumb: "thumbs/01-cover.jpg", label: "Cover" }
 * deck_index.html Use thumb only in gallery mode; always use file(iframe) in grid mode. Gallery falls back to iframe when there is no thumb.
 *
 * Tip: Don’t set the thumbnail resolution too low (default 1600px), otherwise the cards in the gallery will look blurry when hovered and enlarged.
 */
import { chromium } from 'playwright';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const arg = (n, d) => { const i = process.argv.indexOf('--' + n); return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : d; };
const slidesDir = arg('slides', 'slides');
const outDir = arg('out', 'thumbs');
const width = parseInt(arg('width', '1600'), 10);
const quality = parseInt(arg('quality', '86'), 10);
const W = parseInt(arg('canvas-w', '1920'), 10);
const H = parseInt(arg('canvas-h', '1080'), 10);

if (!fs.existsSync(slidesDir)) { console.error('Cannot find slides directory: ' + slidesDir); process.exit(1); }
fs.mkdirSync(outDir, { recursive: true });
const files = fs.readdirSync(slidesDir).filter(f => f.endsWith('.html')).sort();
if (!files.length) { console.error('slides directory does not contain .html'); process.exit(1); }

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
let ok = 0;
for (const f of files) {
  const base = f.replace(/\.html$/, '');
  const out = path.join(outDir, base + '.jpg');
  try {
    await page.goto('file://' + path.resolve(slidesDir, f), { waitUntil: 'load' });
    await page.waitForTimeout(2800); // Wait for webfont / picture paint
    const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: W, height: H } });
    await sharp(buf).resize(width).jpeg({ quality }).toFile(out);
    ok++; console.log('[ok] ' + out);
  } catch (e) { console.error('[FAIL] ' + f + ': ' + e.message); }
}
await browser.close();
console.log(`\n=== ${ok}/${files.length} thumbnails → ${outDir}/ ===`);
console.log('Add thumb: "' + outDir + '/<same name>.jpg" to each item in MANIFEST of index.html (only used in gallery mode)');
