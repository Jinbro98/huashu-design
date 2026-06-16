<sub>🌐 <b>English</b> · <a href="README.en.md">English mirror</a></sub>

<div align="center">

# Huashu Design

> *"Type. Hit enter. A finished design lands in your lap."*

[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Agent-Agnostic](https://img.shields.io/badge/Agent-Agnostic-blueviolet)](https://skills.sh)
[![Skills](https://img.shields.io/badge/skills.sh-Compatible-green)](https://skills.sh)

<br>

**Say one sentence to your agent and get back a design that is ready to ship.**

<br>

In 3 to 30 minutes, you can ship a **product launch animation**, a clickable app prototype, an editable PPT deck, or a print-grade infographic.

This is not "pretty good for AI" quality. It should look like it came from a serious design team. Give the skill your brand assets (logo, palette, UI screenshots), and it reads the character of your brand. Give it nothing, and **three parallel direction-advisor logics plus a 40-style native HTML library** still keep it away from AI slop.

**Every animation in this README was made by huashu-design itself.** No Figma, no After Effects: just one prompt plus a skill run. Need a product launch film next time? Now you can make one too.

```
npx skills add alchaincyf/huashu-design
```

Agent-agnostic: install it in Claude Code, Cursor, Codex, OpenClaw, or Hermes.

> 📣 **Relicensed to MIT.** Since 2026-05-14, this skill has been fully open source under the [MIT License](LICENSE). It is free for personal **and** commercial use, with no prior authorization required. The former terms of "free for personal use; commercial enterprise use requires authorization" are no longer valid. ([See the change](#license))

[See it work](#demo-gallery) · [Install](#install) · [What it does](#what-it-does) · [Core mechanics](#core-mechanics) · [Relationship with Claude Design](#relationship-with-claude-design)

</div>

---

<p align="center">
  <img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.gif" alt="huashu-design Hero · Type → Choose a direction → Gallery expands → Focus → Brand revealed" width="100%">
</p>

<p align="center"><sub>
  ▲ 25 seconds · Terminal → 4 directions → Gallery ripple → 4 focus passes → Brand reveal<br>
  👉 <a href="https://www.huasheng.ai/huashu-design-hero/">Open the interactive HTML version with sound</a> ·
  <a href="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/hero-animation-v10-en.mp4">Download MP4 with BGM + SFX, 10 MB</a>
</sub></p>

---

## 📺 Beginner Tutorial, Recorded by Huashu

Not sure how to use it? Watch Huashu's getting-started tutorial for huashu-design:

<p align="center">
  <a href="https://www.youtube.com/watch?v=m-_BlUdcIvw"><img src="https://img.youtube.com/vi/m-_BlUdcIvw/maxresdefault.jpg" alt="huashu-design tutorial" width="70%"></a>
</p>

<p align="center"><sub>👉 <a href="https://www.youtube.com/watch?v=m-_BlUdcIvw">Watch the full tutorial on YouTube</a></sub></p>

---

## Install

```bash
npx skills add alchaincyf/huashu-design
```

Then talk directly in Claude Code:

```
"Make a presentation deck about AI psychology. Recommend 3 style directions for me to choose from."
"Build an iOS prototype for an AI Pomodoro app, with 4 core screens that are actually clickable."
"Turn this logic into a 60-second animation, then export MP4 and GIF."
"Run a 5-dimension review on this design."
```

No buttons, no panels, no Figma plugin.

---

## Star Trend

<p align="center">
  <a href="https://star-history.com/#alchaincyf/huashu-design&Date">
    <img src="https://api.star-history.com/svg?repos=alchaincyf/huashu-design&type=Date" alt="huashu-design Star History" width="80%">
  </a>
</p>

---

## What it does

| Capability | Deliverable | Typical time |
|------|--------|----------|
| Interactive prototypes (App / Web) | Single-file HTML · real iPhone bezel · clickable · Playwright-verified | 10–15 min |
| Presentation slides | HTML deck for browser presentation + editable PPTX with text boxes preserved | 15–25 min |
| Timeline animation | MP4 (25 fps / 60 fps interpolation) + GIF (palette optimized) + BGM | 8–12 min |
| Design variations | 3+ side-by-side options · live Tweaks parameters · cross-dimensional exploration | 10 min |
| Infographics / visualization | Print-grade typography · exportable PDF/PNG/SVG | 10 min |
| Design direction advisor | **Three parallel logics**: seconds roulette + real-world award-site references + best-designer logic · directly outputs 3 real visual directions | 5 min |
| 5-dimension expert review | Radar chart + Keep/Fix/Quick Wins · actionable repair checklist | 3 min |

---

## Demo Gallery

### Design Direction Advisor

The fallback for vague briefs: **three complementary logics run in parallel**: seconds roulette (1 of 20 to break inertia), real-world references (transfer from world-class award-winning sites), and best designer (top-studio philosophy). It directly outputs 3 versions of **real visuals** so you can choose by looking, instead of blindly picking a style from text. Under the hood is a **40-style native HTML library** (20 web + 20 PPT, pure CSS with no image generation required).

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w3-fallback-advisor.gif" width="100%"></p>

### iOS App Prototype

Pixel-accurate iPhone 15 Pro body (Dynamic Island / status bar / Home Indicator) · state-driven multi-screen transitions · real images pulled from Wikimedia/Met/Unsplash · automated Playwright click tests.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c1-ios-prototype.gif" width="100%"></p>

### Motion Design Engine

Stage + Sprite time-slice model · four APIs (`useTime` / `useSprite` / `interpolate` / `Easing`) cover all animation needs · one command exports MP4 / GIF / 60 fps interpolation / a final video with BGM.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c3-motion-design.gif" width="100%"></p>

### HTML Slides → Editable PPTX

HTML deck for browser presentation · `html2pptx.js` reads DOM `computedStyle` and translates each element into PowerPoint objects · the export contains **real text boxes** that you can double-click and edit in PowerPoint.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c2-slides-pptx.gif" width="100%"></p>

### Tweaks · Live Variation Switching

Parameterized color / typeface / information density · side-panel switching · pure frontend + `localStorage` persistence · survives refresh.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c4-tweaks.gif" width="100%"></p>

### Infographics / Data Visualization

Magazine-grade layout · precise CSS Grid columns · `text-wrap: pretty` typographic details · real-data driven · exportable vector PDF / 300 dpi PNG / SVG.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c5-infographic.gif" width="100%"></p>

### 5-Dimension Expert Review

Philosophical coherence · visual hierarchy · execution craft · functionality · innovation, each scored 0–10 · radar-chart visualization · outputs Keep / Fix / Quick Wins lists.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/c6-expert-review.gif" width="100%"></p>

### Junior Designer Workflow

Do not disappear and attempt one giant move: first write assumptions + placeholders + reasoning, show the user early, then iterate. Fixing a misunderstanding early is 100× cheaper than fixing it late.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w2-junior-designer.gif" width="100%"></p>

### 5-Step Hard Brand Asset Protocol

Mandatory for any concrete brand: ask → search → download through three fallback paths → grep color values → write `brand-spec.md`.

<p align="center"><img src="https://github.com/alchaincyf/huashu-design/releases/download/v2.0/w1-brand-protocol.gif" width="100%"></p>

---

## Showcase · Real Cases

### Parrot Evolution Website · Three-Logic Design Direction Advisor in Practice (2.0)

> **Live demo · [https://www.huasheng.ai/parrots/](https://www.huasheng.ai/parrots/)**

Given only "make a website introducing parrot evolution" and no extra requirements, the skill automatically runs the full 2.0 advisor flow: first determine that images are content-critical → collect public-domain natural-history illustrations (parrot plates by Edward Lear / John Gould) → run **three parallel logics** (seconds roulette + real-world award-site references + Kenya Hara's philosophy of "white") and output one real visual version from each. **Gather the materials before designing; do not design while filling with colored-block placeholders.**

### "Talking About Skills" · PM After-Party Presentation Deck

> **Live demo · [https://skill-huasheng.vercel.app](https://skill-huasheng.vercel.app)**

A 13-page HTML deck, **completed entirely with huashu-design**:

- Black-background minimalist serif visual system (cover / about / hook / what / why / closing)
- Two 22-second cinematic demos with BGM + SFX (Nuwa skill workflow + Darwin skill workflow), each using a **fully independent visual language**:
  - **Nuwa**: 3D knowledge orbit + Pentagon distillation + SKILL.md typewriter + "21 minutes" hero reveal
  - **Darwin**: autoresearch loop spin + v1/v5 side-by-side diff + Hill-Climb full-screen curve + Ratchet gear lock
- Each cinematic shows a **complete static workflow dashboard** by default, so the audience can always understand how the skill runs. Click ▶ to trigger the animation; when it finishes, it automatically fades back to the dashboard.
- Embeds the 25-second huasheng.ai hero animation, with localized iframe fallback
- Real data: the real 14,495-stargazer curve fetched via the GitHub API + real DeepSeek V4 specs verified with WebSearch
- Real AI assets: use `huashu-gpt-image` to generate a 4×2 grid image, then use `extract_grid.py` to cut out 8 independent transparent PNGs for a floating 3D orbit

**Useful reference pages**:
- `/slides/slide-04b-nuwa-flow.html` · static dashboard + cinematic overlay two-layer architecture
- `/slides/slide-06b-darwin-flow.html` · contrast case with a fully independent visual language
- `/slides/slide-03b-deepseek-cover.html` · comparison page for AI slop vs. a real designer's perspective

For detailed cinematic patterns, see `references/cinematic-patterns.md`.

---

## Core Mechanics

### Brand Asset Protocol

The hardest rule in the skill. When the work involves a specific brand (Stripe, Linear, Anthropic, your own company, etc.), it enforces five steps:

| Step | Action | Purpose |
|------|------|------|
| 1 · Ask | Does the user have brand guidelines? | Respect existing resources |
| 2 · Search official brand pages | `<brand>.com/brand` · `brand.<brand>.com` · `<brand>.com/press` | Capture authoritative color values |
| 3 · Download assets | SVG files → full official-site HTML → sample product screenshots for colors | Three fallback paths; if the previous path fails, immediately take the next |
| 4 · Grep color values | Extract all `#xxxxxx` values from assets, sort by frequency, filter black/white/gray | **Never guess brand colors from memory** |
| 5 · Freeze the spec | Write `brand-spec.md` + CSS variables; all HTML references `var(--brand-*)` | If it is not frozen, it will be forgotten |

A/B test (v1 vs. v2, 6 agents each): **v2 had 5× lower stability variance than v1**. Stability of stability: that is the skill's real moat.

### Design Direction Advisor (Fallback)

Triggered when the user's request is too vague to start (rebuilt in 2.0):

- Clarify through conversation first and actively request references (names / logo / brand colors / favorite reference sites)
- Gather content-critical real images (public domain / royalty-free, collected with a one-command script) before starting
- Run **three complementary subagents in parallel**, each producing one version of **real visuals**: ① seconds roulette (`date +%S`, choose 1 of 20, breaking the model's habit of secretly choosing minimalism) ② real-world references (transfer from world-class award-winning sites / PPT decks / iOS prototypes) ③ best designer (the most suitable studio philosophy when budget is unlimited)
- **Never make the user choose a style blindly before seeing visuals**: put the three versions on the table and let them choose by looking
- After a direction is chosen, enter the main Junior Designer flow
- The underlying ammunition is a **40-style native HTML library** (20 web + 20 PPT, graded as bold / neutral / quiet, pure CSS without image generation), not a doctrine

### Junior Designer Workflow

The default work mode across all tasks:

- Before starting, show the full question list to the user once and wait for the batch of answers
- First write assumptions + placeholders + reasoning comments in the HTML
- Show the user early, even if it is only gray blocks
- Show again at each step: real content → variations → Tweaks
- Before delivery, inspect the browser visually with Playwright

### Anti AI-Slop Rules

Avoid the visual common denominator that reads as AI at a glance (purple gradients / emoji icons / rounded cards with left-border accents / SVG people / Inter as display type). Use `text-wrap: pretty` + CSS Grid + carefully selected serif display faces and oklch colors.

---

## Relationship with Claude Design

I will say it openly: the philosophy behind the Brand Asset Protocol learned a lot from the prompts that circulated from Claude Design. Those prompts repeatedly emphasize that **good high-fidelity design does not start from a blank page; it grows from existing design context**. That principle is the dividing line between a 65-point piece and a 90-point piece.

Positioning differences:

| | Claude Design | huashu-design |
|---|---|---|
| Form | Web product used in the browser | Skill used in Claude Code |
| Quota | Subscription quota | API usage · parallel agents are not blocked by quota |
| Deliverables | In-canvas work + Figma export | HTML / MP4 / GIF / editable PPTX / PDF |
| Operation | GUI: click, drag, edit | Conversation: tell the agent, then wait |
| Complex animation | Limited | Stage + Sprite timeline · 60 fps export |
| Cross-agent use | Claude.ai only | Any skill-compatible agent |

Claude Design is **a better graphics tool**. Huashu-design **makes the graphics-tool layer disappear**. Two paths, different audiences.

---

## Limitations

- **No layer-level editable PPTX-to-Figma round trip.** The output is HTML: screenshot-ready, recordable, image-exportable, but not draggable into Keynote for text-position tweaks.
- **Framer Motion-level complex animation is out of scope.** 3D, physics simulation, and particle systems exceed the skill boundary.
- **Brand-from-zero design quality drops to 60–65 points.** Drawing high-fidelity work from nothing was always the last resort.

This is an 80-point skill, not a 100-point product. For people who do not want to open a graphical UI, an 80-point skill is more useful than a 100-point product.

---

## Repository Structure

```
huashu-design/
├── SKILL.md                 # Main document read by the agent
├── README.md                # English README, default file
├── README.en.md             # English mirror
├── assets/                  # Starter Components
│   ├── animations.jsx       # Stage + Sprite + Easing + interpolate
│   ├── ios_frame.jsx        # iPhone 15 Pro bezel
│   ├── android_frame.jsx
│   ├── macos_window.jsx
│   ├── browser_window.jsx
│   ├── deck_stage.js        # HTML slide engine
│   ├── deck_index.html      # Multi-file deck assembler
│   ├── design_canvas.jsx    # Side-by-side variation display
│   ├── showcases/           # 24 prebuilt examples: 8 scenes × 3 styles
│   └── bgm-*.mp3            # 6 scene-specific background tracks
├── references/              # Deeper task-specific reference docs
│   ├── animation-pitfalls.md
│   ├── design-styles.md     # 40 native HTML styles: 20 web + 20 PPT
│   ├── slide-decks.md
│   ├── editable-pptx.md
│   ├── critique-guide.md
│   ├── video-export.md
│   └── ...
├── scripts/                 # Export toolchain
│   ├── render-video.js      # HTML → MP4
│   ├── convert-formats.sh   # MP4 → 60 fps + GIF
│   ├── add-music.sh         # MP4 + BGM
│   ├── export_deck_pdf.mjs
│   ├── export_deck_pptx.mjs
│   ├── html2pptx.js
│   └── verify.py
└── demos/                   # 9 capability demos (c*/w*), bilingual GIF/MP4/HTML + hero v10
```

---

## Origin

On the day Anthropic launched Claude Design, I played with it until 4 a.m. A few days later I realized I had not opened it again. Not because it is bad; it is the most mature product in this category. It is because I would rather have an agent work for me in the terminal than open any graphical interface.

So I asked an agent to dissect Claude Design itself, including the system prompts circulating in the community, the brand asset protocol, and the component mechanics; distill that into a structured spec; and write it as a skill installed into my own Claude Code.

Thanks to Anthropic for writing the Claude Design prompts so clearly. This kind of derivative creation inspired by other products is a new form of open-source culture in the AI era.

---

## License

**Relicensed to MIT on 2026-05-14.** Earlier versions used a Personal Use License: personal use was free, while commercial enterprise use required authorization. That restriction is now fully removed.

Under the [MIT License](LICENSE), you may **freely use, modify, and distribute** this skill for any purpose, **including commercial use**: internal company use, client deliverables, paid products, anything. No prior authorization, fee, or notification is required. Attribution is appreciated but not mandatory.

---

## Connect · Huasheng / Huashu

Huasheng is an AI-native coder, independent developer, and AI media creator. Notable work: Cat Fill Light (App Store Top 1 in Paid category), *A Book on DeepSeek*, and Nuwa.skill (12,000+ GitHub stars). Across all media platforms, Huasheng has 300,000+ followers.

| Platform | Handle | Link |
|---|---|---|
| X / Twitter | @AlchainHust | https://x.com/AlchainHust |
| WeChat Official Account | Huashu | Search "Huashu" in WeChat |
| Bilibili | Huashu | https://space.bilibili.com/14097567 |
| YouTube | Huashu | https://www.youtube.com/@Alchain |
| Xiaohongshu | Huashu | https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf |
| Official site | huasheng.ai | https://www.huasheng.ai/ |
| Developer homepage | bookai.top | https://bookai.top |

For collaboration inquiries or sponsored media work, DM Huasheng on any platform above.
