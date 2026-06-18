# Design Philosophy Showcases — Sample asset index

> 8 scenes × 3 styles = 24 pre-made design samples
> When used in Phase 3 to recommend design directions, directly show "what this style will look like"

## Style Notes

| Code name | Genre | Style name | Visual temperament |
|------|------|---------|---------|
| **Pentagram** | Information Architecture School | Pentagram / Michael Bierut | Black and white restraint, Swiss grid, strong font hierarchy, #E63946 red emphasis |
| **Build** | Minimalism | Build Studio | Luxury-grade white space (70%+), subtle font weight (200-600), #D4A574 warm gold, exquisite |
| **Takram** | Eastern philosophy | Takram | Soft sense of technology, natural colors (cream/gray/green), rounded corners, diagrams like art |

## Scene Cheat Sheet

### Content design scenario

| # | Scene | Specs | Pentagram | Build | Takram |
|---|------|------|-----------|-------|--------|
| 1 | WeChat Official Account cover | 1200×510 | `cover/cover-pentagram` | `cover/cover-build` | `cover/cover-takram` |
| 2 | PPT data page | 1920×1080 | `PPT/PPT-pentagram` | `PPT/PPT-build` | `PPT/PPT-takram` |
| 3 | Vertical infographic | 1080×1920 | `infographic/infographic-pentagram` | `infographic/infographic-build` | `infographic/infographic-takram` |

### Website design scenario

| # | Scene | Specs | Pentagram | Build | Takram |
|---|------|------|-----------|-------|--------|
| 4 | Personal homepage | 1440×900 | `website-homepage/homepage-pentagram` | `website-homepage/homepage-build` | `website-homepage/homepage-takram` |
| 5 | AI navigation station | 1440×900 | `website-ai-nav/ainav-pentagram` | `website-ai-nav/ainav-build` | `website-ai-nav/ainav-takram` |
| 6 | AI writing tools | 1440×900 | `website-ai-writing/aiwriting-pentagram` | `website-ai-writing/aiwriting-build` | `website-ai-writing/aiwriting-takram` |
| 7 | SaaSlanding page | 1440×900 | `website-saas/saas-pentagram` | `website-saas/saas-build` | `website-saas/saas-takram` |
| 8 | Developer Documentation | 1440×900 | `website-devdocs/devdocs-pentagram` | `website-devdocs/devdocs-build` | `website-devdocs/devdocs-takram` |

> Each entry has two files: `.html` (source code) and `.png` (screenshot)

## Instructions for use

### Phase 3 Reference when recommending
After recommending the design direction, pre-made screenshots of the corresponding scene can be displayed:
```
"This is the effect of Pentagram style on the cover of WeChat Official Account → [show cover/cover-pentagram.png]"
"This is how it feels to create a PPT data page in Takram style → [Show PPT/PPT-takram.png]"
```

### Scenario matching priority
1. The scene required by the user is accurately matched → the corresponding scene is directly displayed
2. No exact match but similar types → display the most similar scenario (such as "product official website" → display SaaS landing page)
3. Total mismatch → Skip the pre-made samples and go directly to Phase 3.5 for on-site generation

### Horizontal comparison display
The three styles of the same scene are suitable for display side by side to help users make intuitive comparisons:
- "This is the same WeChat Official Account cover, achieved using 3 different styles."
- Display order: Pentagram (rational restraint) → Build (luxury minimalism) → Takram (soft and warm)

## Content details

### WeChat Official Account cover (cover/)
- Content: Claude Code Agent Workflow - 8 Parallel Agent Architectures
- Pentagram: huge red "8" + Swiss grid lines + data bars
- Build: The ultra-fine font weight "Agent" is suspended in 70% white space + warm gold thin line
- Takram: 8-node radial flowchart as artwork + cream base

### PPT data page (PPT/)
- Content: GLM-4.7 open source model Coding capability breakthrough (AIME 95.7 / SWE-bench 73.8% / τ²-Bench 87.4)
- Pentagram: 260px "95.7" anchor point + red/grey/light gray contrast bar chart
- Build: Three groups of 120px ultra-fine digital suspension + warm gold gradient contrast bars
- Takram: SVG radar chart + three-color overlay + rounded corner data card

### Vertical infographic (infographic/)
- Content: AI memory system CLAUDE.md optimized from 93KB to 22KB
- Pentagram: huge "93→22" number + numbered block + CSS data bar
- Build: Extreme white space + soft shadow card + warm gold connecting line
- Takram: SVG donut chart + organic curve flow chart + frosted glass card

### Personal homepage (website-homepage/)
- Content: Home page of independent developer Alex Chen’s portfolio
- Pentagram: 112px name + Swiss grid columns + edit numbers
- Build: glassy navigation + floating statistics card + ultra-fine font weight
- Takram: paper texture + small round avatar + fine hairline dividers + asymmetrical layout

### AI navigation station (website-ai-nav/)
- Content: AI Compass — Directory of 500+ AI tools
- Pentagram: square corner search box + numbered tool list + uppercase category labels
- Build: rounded search box + exquisite white tool card + pill label
- Takram: organic misaligned card layout + soft classification tags + diagrammatic connections

### AI writing tool (website-ai-writing/)
- Content: Inkwell — AI writing assistant
- Pentagram: 86px large title + wireframe editor mockup + grid property column
- Build: Floating Editor Card + Warm Gold CTA + Luxurious Writing Experience
- Takram: Poetic serif titles + organic editor + flowchart

### SaaSlanding page (website-saas/)
- Content: Meridian — Business Intelligence Analytics Platform
- Pentagram: black and white columns + structured dashboard + 140px "3x" anchor point
- Build: floating dashboard card + SVG area chart + warm gold gradient
- Takram: rounded column chart + process node + soft earth color

### Developer documentation (website-devdocs/)
- Content: Nexus API — Unified AI Model Gateway
- Pentagram: left navigation bar + square corner code block + red string highlighting
- Build: Centered floating code card + soft shadow + warm gold icon
- Takram: cream code block + flowchart connection + dotted feature card

## File statistics

- HTML source files: 24
- PNG screenshots: 24
- Total assets: 48 files

---

**Version**: v1.0
**Creation date**: 2026-02-13
**Applies to**: design-philosophy skill Phase 3 recommended link
