# Cinematic Patterns · Best Practice for Workflow Demo

> Five key patterns for upgrading from "PPT animation" to "conference-level cinematic".
> Distilled from the two cinematic demos (Nuwa workflow + Darwin workflow) of the 2026-04 "Talk Skill" deck, it can be reproduced in actual measurements.

---

## 0 · What problem does this document solve?

When you need to make a "demo animation that demonstrates a workflow" (typical scenarios: skill workflow, product onboarding, API call process, agent task execution), there are two common approaches:

| Paradigm | What it looks like | Consequences |
|---|---|---|
| **PPT animation** (poor) | step 1 fade in → step 2 fade in → step 3 fade in, 4 boxes arranged on the same screen | The audience feels that "it is just a PPT with a fade effect", no wow moment |
| **Cinematic** (good) | scene-based, only focus on one thing at a time, and dissolve / focus pull / morph between scenes | The audience feels "this is a product launch clip" and will want to take screenshots and share |

The root of the difference is not animation technology, but narrative paradigm. This document explains how to upgrade from the former to the latter.

---

## 1 · Five core patterns

### Pattern A · Dashboard + Cinematic Overlay double-layer structure

**Problem**: The default for simple cinematic is a black screen + a ▶ button. If the user turns to this page and does not click on it, he will not see anything.

**solve**:
```
DEFAULT state (always shown): full static workflow dashboard
  └── The audience can see clearly how this skill/workflow works at a glance

POINT ▶ Trigger (overlay floats up): 22 seconds cinematic
  └── Automatically fade back to DEFAULT after running

```

**Implementation Points**:
- `.dash` defaults to visible, `.cinema` defaults to `opacity: 0; pointer-events: none`
- `.play-cta` is the small golden button in the lower right corner (not the big central overlay)
- Click → `cinema.classList.add('show')` + `dash.classList.add('hide')`
- Use `requestAnimationFrame` to run once (not loop), and after the end, `endCinematic()` reverse state

**Anti-pattern**: Default = Central Large ▶ overlay covers everything, and the page is blank before clicking.

---

### Pattern B · Scene-based, NOT Step-based

**Question**: Splitting the animation into "step 1 display → step 2 display →..." is PPT thinking.

**Solution**: Split into 5 scenes, each scene is an **independent lens**, and only focus on one thing in full screen:

| Scene Type | Responsibilities | Duration |
|---|---|---|
| 1 · Invoke | User input trigger (terminal typewriter) | 3-4s |
| 2 · Process | Visualization of core workflows (unique visual language) | 5-6s |
| 3 · Result/Insight | Refined key products (visualization) | 4-5s |
| 4 · Output | Actual product display (file / diff / number) | 3-4s |
| 5 · Hero Reveal | Closing hero moment (big words + value proposition) | 4-5s |

**Total duration ≈ 22 seconds** - This is the tested golden length:
- Shorter than 18 seconds: PM ends before entering the state
- Longer than 25 seconds: Losing patience
- 22 seconds is just enough to "hook → unfold → tighten → leave an impression"

**Implementation Points**:
- `T = { DURATION: 22.0, s1_in: [0, 0.7], s2_in: [3.8, 4.6], ... }` Global Timeline
- A single `requestAnimationFrame(render)` runs all scene opacity / transform calculations
- Do not use setTimeout chain (easy to break, difficult to debug)
- Easing must use `expoOut` / `easeOut` / cubic-bezier, **linear is prohibited**

---

### Pattern C · The visual language of each demo must be independent

**Question**: After finishing the first cinematic, I was too lazy to reuse the same template (same orbit + pentagon + typewriter + hero) when I made the second one, and only changed the copywriting.

**Consequences**: The audience finds that two skills "look exactly the same", which is equivalent to saying "there is no difference between these two skills".

**Solution**: The core metaphor of each workflow is different, so the visual language must be different.

**Contrast case**:

| Dimension | Nuwa (distiller) | Darwin (optimization skill) |
|---|---|---|
| Core Metaphor | Collect → Refine → Write | Loop → Evaluate → Ratchet |
| visual movement | floating / radiating / pentagon | circulation / rising / contrast |
| Scene 2 | 3D Orbit · 8 files floating in perspective ellipse | Spin Loop · token runs 5 times along a 6-node ring |
| Scene 3 | Pentagon · 5 tokens radiating from the center | v1 vs v5 · Side-by-side diff (red vs gold) |
| Scene 4 | SKILL.md typewriter | Hill-Climb · Full-screen curve drawing |
| Scene 5 hero | "21 Minutes"serif italic large characters | Rotating gear ⚙ +"KEPT +1.1"gold tag |

**Judgment Criteria**: Cover the copy and only look at the visuals. Can you tell which demo this is? Not being able to tell the difference is just laziness.

---

### Pattern D · Real material generated with AI, no emoji or SVG hand-drawn

**Problems**: The 3D orbit/gallery requires fragments of material to float, the emoji (📚🎤) are ugly and unbranded, and the SVG hand-drawn spine never looks like a real book.

**Solution**: Use `huashu-gpt-image` to run a 4×2 grid large image (8 theme-related items · white background · 60px breathing space · unified style), and use `extract_grid.py --mode bbox` to cut it into 8 independent transparent PNGs.

**Prompt points** (see `huashu-gpt-image` skill for detailed prompt patterns):
- IP anchoring ("1960s Caltech archive aesthetic" / "Hearthstone-style consistent treatment")
- White background (easy to cut out pictures, gray background has good atmosphere but it is difficult to cut out transparent background)
- 4×2 not 5×5 (to avoid last row compression bug)
- Persona finishing ("You are a Wired magazine curator preparing an exhibition photo")

**Anti-pattern**: Use emoji as icon and use CSS silhouette instead of product image.

---

### Pattern E · BGM + SFX dual-track system

**Problem**: There is only animation and no sound, and the audience subconsciously feels that "this thing looks like a poor demo".

**SOLVED**: BGM pad + 11 SFX cues.

**Generic SFX cue recipe** (for workflow demo):

| Timing | SFX | Trigger scene |
|---|---|---|
| 0.10s | whoosh | terminal rises from below |
| 3.0s | enter | typewriter completes, press enter |
| 4.0s | slide-in | scene 2 element entry |
| 5-9s × 5 times | sparkle | Key process nodes (per generation/per token/per data point)|
| 14s | click | switch to output scene |
| 17.8s | logo-reveal | hero reveal moment |
| typewriter | type | triggers every 2 characters (don’t let the density be too high) |

**Frequency band isolation**: BGM volume 0.32 (low-frequency noise floor), SFX volume 0.55 (mid-high frequency punch), sparkle 0.7 (be eye-catching), logo-reveal 0.85 (the strongest hero moment).

**User Controls**:
- Must have ▶ startup overlay (browser autoplay limitation)
- Small mute button in the upper right corner (user can mute at any time)
- Don't make it a "forced beep when you turn this page"

---

## 2 · Static Dashboard design points

Dashboard is Layer 1 with a two-layer structure. PM can understand this skill without clicking ▶.

**Layout**: 3 column grid (or 1 large + 2 small), each panel solves a problem:

| Panel type | What problem is solved | Case |
|---|---|---|
| **Pipeline / Flow Diagram** | "What is the workflow of this skill?" | Nuwa 4-stage pipeline · Darwin autoresearch loop |
| **Snapshot / State** | "What does the real data that comes out look like?" | Darwin 8-dimensional rubric snapshot |
| **Trajectory / Evolution** | "How does it change after running multiple times?" | Darwin 5th generation hill-climb curve |
| **Examples / Gallery** | "What have you produced?" | Nuwa 21 personas gallery |
| **Strip · Example I/O** | "What is input → what is output" | Nuwa example strip:`› nuwa distillation Feynman → feynman.skill (21 min)` |

**Key Constraints**:
- The information density must be sufficient (each panel must carry differentiated information)
- But not data slop (every number must be meaningful)
- The color scheme is consistent with cinematic (same color system, easy to switch without being abrupt)

---

## 3 · Debugging and Development Tools

Any long animation must be equipped with three dev tools, otherwise debugging will explode.

### Tool 1 · `?seek=N` Freeze to Nth second

```js
const seek = parseFloat(params.get('seek'));
if (!isNaN(seek)) {
  started = true; muted = true;
  frozenT = seek; // render() uses this t instead of elapsed
  cinema.classList.add('show'); dash.classList.add('hide');
}

// inside render():
let t = frozenT !== null ? frozenT : (elapsed % T.DURATION);
```

Usage: `http://.../slide.html?seek=12` Directly watch the 12th second without waiting for playback.

### Tool 2 · `?autoplay=1` skip ▶ overlay

It is convenient for playwright to automatically take screenshots and test, and it is also convenient for force startup when embedding an iframe.

### Tool 3 · Manual REPLAY button

The small button in the upper right corner allows the user/debugging to replay any number of times. CSS:

```css
.replay{position:absolute;top:18px;right:18px;background:rgba(212,165,116,0.1);
  border:1px solid rgba(212,165,116,0.3);color:#D4A574;
  font-family:monospace;font-size:10px;letter-spacing:.28em;text-transform:uppercase;
  padding:6px 12px;border-radius:1px;cursor:pointer;backdrop-filter:blur(6px);z-index:6}
```

---

## 4 · iframe embedding pit (if cinematic is embedded in deck)

### Pit 1 · The click zone of the parent window intercepts the buttons in the iframe

If "left and right 22vw transparent click zone page turning" is added to deck index.html, it will cover the ▶ play button in the iframe - when the user clicks the button, it will be swallowed into the "next page".

**Fix**: Add `top: 12vh; bottom: 25vh` to the click zone, giving the top and bottom 25% no interception, so that the center ▶ and the lower right corner ▶ in the iframe can be clicked.

### Pit 2 · Keyboard events are lost after iframe grabs focus

After the user clicks on the iframe, the focus is in the iframe, and the ←/→ keyboard events of the parent window cannot be received.

**repair**:
```js
iframe.addEventListener('load', () => {
  //Inject keyboard repeater
  const doc = iframe.contentDocument;
  doc.addEventListener('keydown', (e) => {
    window.dispatchEvent(new KeyboardEvent('keydown', { key: e.key, ... }));
  });
  // After clicking, the focus is pulled back to the parent window
  doc.addEventListener('click', () => setTimeout(() => window.focus(), 0));
});
```

### Pit 3 · file:// vs https:// behavior differences

The local file:// measured cinematic may crash after deployment because:
- iframe contentDocument under file:// has the same origin
- https:// also has the same origin (if it is the same host), but the audio autoplay restrictions are stricter

**repair**:
- Use `python3 -m http.server` to start local HTTP test before deployment
- BGM must wait for the user to click ▶ before `bgm.play()`, do not page-load and play immediately

---

## 5 · Anti-pattern cheat sheet

| ❌ reverse pattern | ✅ positive pattern |
|---|---|
| Default = black screen ▶ overlay | Default = static dashboard, ▶ is auxiliary |
| 4 steps to fade in horizontally on the same screen | 5 scenes to switch to full screen, each scene only focuses on one thing |
| Reuse templates and change copy to create different demos | Each demo has an independent visual language (copy can distinguish) |
| emoji / SVG hand-drawn material | gpt-image-2 large image + extract_grid cutout |
| No BGM No SFX | BGM + 11 SFX cues dual track |
| chain schedule with setTimeout | requestAnimationFrame + global timeline T object |
| linear animation | Expo / cubic-bezier easing |
| No dev tools | `?seek=N` + `?autoplay=1` + REPLAY button |
| The button in the iframe is swallowed by the parent click zone | The click zone adds top/bottom margin to make way for the button |

---

## 6 · Time Budget

According to this pattern, a complete cinematic demo (including dashboard):

| Task | Time |
|---|---|
| Design 5-scene narrative + visual language | 30 minutes (be careful and decide on independence) |
| Dashboard static layout + content | 1 hour |
| Cinematic 5 scenes implementation | 1.5 hours |
| Audio cues timing + replay button | 30 minutes |
| Playwright Screenshot Verification 5 Key Moments | 15 Minutes |
| **Total single demo** | **3-4 hours** |

The second demo reuses the framework but **the visual language must be independent** and takes about 2-3 hours.
