#!/usr/bin/env python3
"""
Real pictures (Public Domain/CC) grabbed from Wikimedia Commons for use by huashu-design "Content-based Design Real Pictures" (Phase 3.5).

Why is there this script: Content-based design (Parrot/Coffee/Malaysia...) must use real images and cannot be fooled by CSS color blocks.
Having the model write the capture logic every time is slow and prone to leaks (forgetting to clear the proxy→TLS explosion/forgetting to comply with UA→429). It’s solidified here, I’ll just change the keywords next time.

usage:
  python3 scripts/fetch_images.py --query "Petronas Towers" "Langkawi beach" "George Town street" \
      --out project/assets/img --count 2 --width 1600

Each query takes the first count pictures, zooms to width, downloads to out, and prints a list (path | license | author | source page) for honesty checking.
All cannot be caught → Exit code 1, prompting to go to Phase 3.5 to take the third-level picture (Unsplash/Pexels → generate pictures → honest placeholder).
"""
import argparse, json, os, re, sys, urllib.parse, urllib.request

# ① Clear the proxy: If the local curl/urllib uses a proxy, TLS will explode (see memory feedback_gemini_proxy)
for _k in ("ALL_PROXY", "all_proxy", "HTTP_PROXY", "http_proxy", "HTTPS_PROXY", "https_proxy"):
    os.environ.pop(_k, None)

API = "https://commons.wikimedia.org/w/api.php"
# ② Compliance User-Agent is a mandatory requirement, otherwise Wikimedia will return 429
UA = "huashu-design-image-fetcher/1.0 (https://huasheng.ai; skill contact)"


def _api_get(params):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.load(r)


def _safe(name):
    return re.sub(r"[^\w\-.]", "_", name)[:60]


def fetch(query, out, count, width):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": query, "gsrnamespace": 6, "gsrlimit": count,
        "prop": "imageinfo", "iiprop": "url|extmetadata", "iiurlwidth": width,
    }
    try:
        data = _api_get(params)
    except Exception as e:
        print(f"[FAIL search] {query}: {e}", file=sys.stderr)
        return []
    pages = (data.get("query", {}) or {}).get("pages", {})
    got = []
    for p in list(pages.values())[:count]:
        ii = (p.get("imageinfo") or [{}])[0]
        thumb = ii.get("thumburl") or ii.get("url")
        if not thumb:
            continue
        meta = ii.get("extmetadata", {}) or {}
        lic = (meta.get("LicenseShortName", {}) or {}).get("value", "?")
        artist = re.sub("<[^>]+>", "", (meta.get("Artist", {}) or {}).get("value", "?")).strip()
        ext = os.path.splitext(thumb)[1].split("?")[0] or ".jpg"
        fn = _safe(query) + "_" + _safe(p.get("title", "img").replace("File:", ""))
        fn = os.path.splitext(fn)[0][:55] + ext
        path = os.path.join(out, fn)
        try:
            req = urllib.request.Request(thumb, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r, open(path, "wb") as f:
                f.write(r.read())
            got.append(path)
            print(f"[OK] {path}  | {lic} | {artist} | {ii.get('descriptionurl','')}")
        except Exception as e:
            print(f"[FAIL dl] {thumb}: {e}", file=sys.stderr)
    if not got:
        print(f"[EMPTY] No images found for \"{query}\" - change keywords or use the Phase 3.5 fallback path", file=sys.stderr)
    return got


def main():
    ap = argparse.ArgumentParser(description="Wikimedia Commons real image capture (huashu-design Phase 3.5)")
    ap.add_argument("--query", nargs="+", required=True, help="One or more English keywords (English hit rate is high)")
    ap.add_argument("--out", required=True, help="Output directory (recommended project/assets/img)")
    ap.add_argument("--count", type=int, default=2, help="How many pictures to capture for each keyword (default 2)")
    ap.add_argument("--width", type=int, default=1600, help="Scale width px (default 1600)")
    a = ap.parse_args()
    os.makedirs(a.out, exist_ok=True)
    allgot = []
    for q in a.query:
        allgot += fetch(q, a.out, a.count, a.width)
    print(f"\n=== A total of {len(allgot)} sheets were downloaded to {a.out} ===")
    print("⚠️ Honesty check: Is removing the information of each picture damaging? Does the license allow the use? Delete inappropriate ones.")
    if not allgot:
        print("❌ All failed → go to Phase 3.5 to take the three-level picture (Unsplash/Pexels → generate pictures → honest placeholder, no stuck process)", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
