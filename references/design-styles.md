# Design style library: 20 types of web pages + 20 types of PPT (HTML native priority)

> **2026-06 Refactor**. Based on a survey of the world's top 10 website types + 10 presentation types, and the top 5 recognized best designs (a total of 100 real cases).
> The fatal problem of the old version of the 20 "Graphic/Installation Designer Philosophy" library: The bold styles are almost all AI-generated-only (particles/light and shadow/hand-painted). **When the user defaults to no drawing ability and defaults to all HTML, the bold half is directly cleared, leaving only minimalism - this is the root cause of "default sameness"**. Each type in this library is marked with the **reduction degree** under "pure HTML/CSS raw images".
>
> ⚖️ **But remember the positioning**: This is **"ammunition to turn over when you have no ideas", not a list** that "must be chosen from here". The user gives the content/brand/reference, and the design unfolds from there, no matter what the library is. The job of skill is to help users avoid the worst, not to dictate what good design should look like - good design grows out of users' real needs.

## How to use this library

1. **First select half of the area** according to the output type: making a web page/landing page/official website → 20 types of web pages; making a PPT/deck/presentation → 20 types of PPT.
2. **Temperature system**: each labeled `Bold/Neutral/Quiet`. ** Deliberately let bold models account for the majority ** - The deterministic bias of the model is naturally towards quiet and minimalist, and the library ratio should push it towards bold models.
   - Direction A (stable chassis) chooses from quiet/neutral according to needs; direction B takes different temperatures to draw contrast; **direction C is forced to inject bold styles by SKILL's "seconds roulette"**.
   - ❌ Don’t fall into “off-white + white space + an embellishment color” in all three directions - that is the most common failure mode.
3. **Reduction degree**: ≥90%, do it with eyes closed; 70-90%, the main body can be done, individual details are downgraded; <70% (such as Memphis distressed texture) must be **clearly marked in the output which parts are downgraded with solid color blocks**, and do not pretend to be able to create the original texture.
4. **Font**: Each type has an open source alternative (Inter/Geist/Manrope/Space Grotesk/Fraunces/Playfair, etc.), do not write paid fonts (Söhne/Circular, etc.).
5. Package: SKILL "design direction advisor" Phase 3-5 uses this library to push 3 directions; `assets/showcases/` has a pre-made screenshot gallery.

---

## Web style library (20 types)

#### Bold faction

**Media-level Brutalism Editorial Brutalism (large Helvetica presses small text)** `Bold·Restore 98%`
- Reference: Bloomberg Businessweek (revised by Richard Turley 2010-2014, edited by Code and Theory); Neue Haas Grotesk pedigree
- Suitable for: media/content publishing, AI product release, brand official website hero, research report cover, opinion-type long header image
- Visual DNA: Color matching pure black #000 + pure white #FFF + hyperlink blue #0000EE, embellished with signal orange red #FF433D/terminal green #00A33E. The font Helvetica/Neue Haas Grotesk, 120px+large headline, left-aligned and tight spacing directly suppresses the 14px small text, extreme font size contrast. The layout is modular grid + 1px regular line and column cutting, and the high information density deliberately leaves no blank space. Logo elements: rule line columns, blue underline for hyperlinks, and large color blocks on a black and white background.
- HTML implementation: Pure CSS can be restored 1:1. CSS Grid is used for module grid + border is used for regular line columns, clamp() is used for super-large responsive font size + letter-spacing is tightened, the system Helvetica/Arial stack or Inter is used, and hyperlinks are directly underlined with #0000EE. Zero material dependency.
- Font: Inter (replacing Helvetica/Neue Haas Grotesk), code using Geist Mono

**New Brutalism color contrast information flow Neo-Brutalism (thick black stroke card + high saturation contrast color)** `Bold·Restore 95%`
- Reference: The Verge 2022 redesign (in-house team, PolySans + Mānuka)
- Adaptation: media/content station, AI product aggregation page, event landing, community list page, Xiaohongshu style information card
-Visual DNA: color matching of electric purple #5200FF~magenta #E1306C, highly saturated main color + bright yellow #F8E000 for emphasis + pure black #08080D + white, large-area contrasting color blocks are deliberately not soft. Font geometric sans serif headline + serif body text contrast. The layout is card-based feed flow, 2-4px thick black strokes, hard color block partitions, and almost no rounded corners. Logo elements: thick strokes, card hover, contrasting color flipping, and unfinished interface temperament.
- HTML implementation: the strength of pure CSS. border: 3px solid #000 thick stroke + box-shadow hard shadow offset (4px 4px 0 #000) + grid/flex card flow + :hover switch background contrasting color flip. No 3D/light and shadow barriers.
- Font: Space Grotesk (replacement PolySans) + any serif such as Fraunces

**Memphis Maximalism of retro collage (contrast color blocks + misplaced stacking + retro fonts)** `Bold·Restore 72%`
- Reference: Gucci Vault concept store (Alessandro Michele); Memphis design movement / Sagmeister rebellious gene
- Suitable for: e-commerce concept store, creative activity page, brand experiment campaign, Y2K retro theme, holiday marketing page
-Visual DNA: Color matching retro red/mustard yellow/sapphire blue/purple/olive green large area contrasting colors + old cream warm bottom, strong and deliberately disharmonious. The font is a mix of retro serifs and decorative characters, with a printing texture, breaking the grid and stacking them in misplaced positions. The layout is curated by anti-grid collage, with modules of different sizes stacked at random, like walking in a digital room. Logo elements: contrasting color blocks, misplaced stacking, and unconventional navigation Easter eggs.
- HTML implementation: transform:rotate() for misaligned stacking + position:absolute stacking + high saturation background contrasting color blocks + retro Google Fonts. The real distressed texture cannot be restored with CSS and is downgraded to a solid color block + mix-blend-mode/contrast filter to simulate the texture. The geometric collage version is established and the archival distressed version will be downgraded.
- Font: DM Serif Display + Bungee (decoration) + Space Mono

**Candy-colored raised three-dimensional button gamification Friendly Geometric Candy** `Bold·Restore 85%`
- Reference: Duolingo (Johnson Banks + Monotype, Feather Bold font); anti-Silicon Valley minimalism
- Adaptation: educational language learning, consumer App landing, gamification products, mass-friendly products, event registration pages
- Visual DNA: Color matching Duo Green #58CC02 + Duck Yellow #FFC800 + Sky Blue #1CB0F6 candy high saturation + white background, round and friendly. The font is super bold and round (feather bold). Layout cards with large rounded corners, raised 3D buttons (hard shadow at the bottom = pressable feeling), mascot position + progress bubble. Logo elements: 3px solid bottom shadow three-dimensional button, press displacement animation, super rounded corners.
- HTML implementation: pure CSS. box-shadow: 0 4px 0 hard bottom shadow to make raised button +: active translateY (4px) elimination shadow to simulate pressing, border-radius large rounded corner, solid color block. When the mascot does not have a picture, use CSS geometry or emoji as a placeholder (slight downgrade).
- Font: Baloo 2 / Nunito (super bold round instead of Feather)

**Pure CSS geometric illustration + responsive deformed easter egg Pure-CSS Art** `Bold·Restore 80%`
- Reference: Lynn Fisher (lynnandtonic.com, pure CSS art legend, Adobe special article report)
- Suitable for: personal homepage, creative 404/Easter egg page, brand landing, technology blog header image, designer self-presentation
-Visual DNA: 2-4 color high-contrast flat surfaces (change colors at each breakpoint). Font bold geometric sans serif title. The core of the layout is "image deformation with the viewport" - a group of CSS shapes are reorganized into different pictures at different breakpoints (such as the number of layers of a building changing with the screen width). Logo elements: geometric illustrations drawn with pure CSS, breakpoint-driven reflow Easter eggs, and zero images.
- HTML implementation: pure CSS dazzling battlefield, zero material is the advantage. div+border-radius/clip-path/transform/box-shadow stacks geometric shapes, and @media breakpoints change the shape, size and position to achieve deformation. The difficulty lies in the design concept rather than the technology, but each shape needs to be carefully hand-crafted.
- Font: Rubik / Archivo (bold geometry is customized)

**Bold Big-Type Editorial** `Bold·Restore 88%`
- Reference: Jacquemus official website / Rik Oostenbroek / Domestika; fashion magazine big-character posters
- Suitable for: e-commerce fashion, portfolios, media special topics, brand declaration pages, video course covers, large-print version of research reports
-Visual DNA: minimalist black and white color + single restrained embellishment color (nude pink #E8C4C0 or true red). Display sans serif/high contrast serif font is very large, and the title takes up the entire screen. The layout is full grid, giant characters play with negative space, and pictures and text are divided into 1:1. Logo elements: giant headline with screen-to-body ratio, luxurious white space, left and right counterpoint typesetting.
- HTML implementation: pure CSS restores perfectly. clamp() giant font + CSS Grid full width segmentation + lots of padding + vh unit to make the title fill the viewport. When there are no pictures, use solid color blocks/text blocks to replace the fashion blockbusters (slightly downgraded but the format remains intact).
- Font: Archivo Expanded / Anton (Display) + Playfair Display (high contrast serif)

**Cosmic Retro-Futurism** `Bold·Restore 75%`
- Reference: Perplexity Comet browser publishing station (The Brand Identity: Black/Blue/Cream; "2001: A Space Odyssey" temperament)
- Adaptation: AI product release station, technology brand declaration page, event countdown page, futuristic landing, concept conference
- Visual DNA: Color matching pure black #0A0A0A + cream paper white cream #F0EAD8 + a touch of cobalt blue - peacock blue #2B4F91, low saturation like an old-fashioned astronomical atlas. The font is high-contrast serif (classical astronomy atlas style) + white space. Layout line drawing orbit/parabola SVG, planetary dots, cream background with black text, ancient book style typography. Logo elements: SVG celestial orbit lines, cream + blue + black colors, retro serif large characters, astronomical catalog texture.
- HTML implementation: Pure CSS+SVG restores 80% of the temperament of the static version. SVG path draws an orbital parabola + CSS radially positioned planet dots + three-color variables + high-contrast serifs. The gap is the full-screen video transition (soul part) of "Falling from Space to Earth" - downgraded to CSS scroll parallax + SVG orbit rotation approximation.
- Font: Cormorant Garamond / EB Garamond (high contrast serif) + Space Mono

**Cinematic Sound-Viz Dark** `Bold·Restore 72%`
- Reference: ElevenLabs; movie title sequence (Saul Bass-style minimalist dynamics) × audio engineering interface
- Adaptation: audio/voice AI products, music technology stations, podcast platforms, media release pages, cinema-level brand hero
- Visual DNA: Color matching pure black #000 base + pure white text + blue and purple gradient accent waveform. Large sans serif title Saul Bass style minimalist. Layout full-frame dark field, sound wave/spectrum visualization penetration, giant header pressure waveform, and card ribbon. Logo elements: colorful audio-waveform band, minimalist movie title style, high contrast black and white + single gradient, sound visualization motif.
- HTML implementation: Pure CSS+SVG restores 70% of the temperament (the skeleton is perfect, the waveform is a degradation point). SVG polyline draws static waveforms or multiple div column arrays of different heights + CSS animation to create a "fake waveform" beating approximation. Gap: The Web Audio/Canvas spectrum that beats in real time with the sound cannot be restored by pure CSS, and the static image and dynamic soul cannot be restored.
- Font: Inter / Sora (large sans serif)

**Pixel Game Side-Scroller** `Bold·Restore 70%`
- Reference: Robby Leonardi Interactive Resume (8/16-bit platform action game narrative, a tribute to Nintendo SNES)
- Suitable for: creative resume/portfolio, brand fun campaign, gamification landing, event Easter egg page, personal fun homepage
-Visual DNA: Color matching retro game multi-section partition - forest green #4CAF50 grass + sky blue #5DADE2, transitional space purple #2C2A4A, volcanic orange red #E8743B, submarine green #1ABC9C, each "level" changes to a set of highly saturated cartoon colors. Font Pixel font (8-bit feel) + thick sans serif. Layout horizontal/vertical scrolling divided into level scenes, parallax layering, scroll trigger displacement. Logo elements: color changing by level, pixel aesthetics, parallax scrolling, game HUD style UI.
- HTML implementation: pure CSS + a small amount of JS to restore the skeleton (the original is HTML + CSS + jQuery without WebGL). Parallax layering position+scroll displacement, image-rendering:pixelated, CSS frame-by-frame background-position for sprite animation, segmented background color. Gap: Original hand-drawn pixel illustrations of characters/scenes - when there are no original illustrations, use CSS squares to create simple pixel icons instead (the art will be downgraded, but the technology will not be downgraded).
- Font: Press Start 2P / VT323 (pixel font) + Inter


#### Neutral faction

**Bauhaus geometric logo + flat illustration system Bauhaus Geometric** `Neutral·Restore 90%`
- Reference: Khan Academy rebrand (hexagon + petal logomark + Wonder Blocks design system); Bauhaus geometric composition
- Adaptation: Educational course sites, brand logo systems, infographics, children-friendly products, event KV
-Visual DNA: Three primary color spectrum - Bauhaus red #E63946/yellow #FFB703/blue #0077B6 + black and white, solid color block splicing. The font is geometric sans serif (rounded and geometric). Lay out circle/triangle/square basic geometric units to build illustrations, align grids, and modular puzzles. Logo elements: pure geometric logomark, flat illustration without gradient, and primary color blocks.
- HTML implementation: Pure CSS geometry is omnipotent. border-radius: 50% to create circles, clip-path/border triangles, square divs to create geometric illustrations, CSS Grid alignment, and solid color fill without materials. Illustrations are hand-rubbed with CSS shapes or inline SVG geometric paths.
- Font: Poppins / Manrope (Geometric rounded instead of Wonder Blocks)

**Dark two-color sidebar developer portfolio Dark Editorial (dark bottom + single fluorescent accent + monospaced font) ** `Neutral·Restore 96%`
- Reference: Brittany Chiang (brittanychiang.com v4, dev portfolio de facto standard)
- Adaptation: Portfolio personal homepage, developer-oriented products, technology brand site, resume page, AI tool landing
-Visual DNA: color matching dark green/navy base #0A192F + slate gray text #8892B0 + single fluorescent green accent #64FFDA. Font sans serif body text + monospaced font (numbering/labeling). The layout has left fixed sidebar navigation + right scrolling main area with double columns, section number 01/02, link hover underline slide in. Logo elements: single accent color, equal-width numbered labels, and sidebar anchor highlighting.
- HTML implementation: pure CSS completely restored. position:sticky to make fixed side column + CSS Grid double column + single accent variable + equal width word label + :hover underline transform to slide in. Zero material, pure layout and micro-interaction.
- Font: Inter + JetBrains Mono (monospaced)

**Warm Editorial (cream paper base + terra cotta orange + serif sans serif mixed layout) ** `Neutral·Restore 97%`
- Reference: Anthropic/Claude (DBCo + Geist Studio, Styrene × Tiempos); Penguin/Pelican paperback typography
- Adaptation: AI product website, brand official website, long article reading page, Orange Book e-book, research report, training materials
- Visual DNA: Color matching cream paper base #F5F0E8 + terracotta orange #CC785C/#D97757 embellishment + nearly black text #191919, warm and low saturation. The font is a mix of serif title (Tiempos feel) and sans-serif body text (Styrene feel). Lay out book-style single-column reading flow, comfortable row height, and controlled dividing lines. Logo elements: paper-like warm bottom, terracotta orange, publication-grade typography rhythm.
- HTML implementation: pure CSS 100% restoration, zero material. Background color variable + serif sans-serif font stack mixing + max-width limit reading width + line-height 1.7 comfortable line height. This is a safe home for the warm version of Anthropic Terracotta Orange.
- Font: Fraunces / Newsreader (for Tiempos serif) + Inter (for Styrene)

**Linear Dark Glow+Bento Mesh Glassmorphism Bento** `Neutral·Restore 85%`
- Reference: Linear / Cursor ('The Linear Look' phenomenal genre, Frontend Horse has code formula)
- Adaptation: SaaS/AI product site, developer tools, technology brand hero, product function display, dark dashboard demonstration
-Visual DNA: Color matching near black base #08090A + desaturated blue and purple brand #5E6AD2 + low saturation blue and purple shimmer gradient #4EA7FC → #B59AFF. Font geometric sans serif negative spacing compact. The layout of the bento box is divided into grid blocks, hair dividing lines, and glass mimic cards. Logo elements: dark background glowing gradient border, bento block, streamer, frosted glass.
- HTML implementation: pure CSS strong restoration. box-shadow/filter blur+radial-gradient makes glowing halo, background-filter:blur glass mimicry, conic/linear-gradient border, CSS Grid spells bento. The gap is only "real product UI screenshot" - replaced by a simplified fake UI with color blocks + text spelling (this part is downgraded).
- Font: Inter / Geist (negative kerning) + Geist Mono

**Angled Fluid Gradient** `Neutral·Reduction 92%`
- Reference: Stripe (iconic angled gradient banner, Klim customized Söhne font)
- Adaptation: SaaS/Fintechlanding page, brand official website hero, product release page, event banner, AI product marketing page
- Visual DNA: Color matching multi-color fluid gradient (indigo #635BFF → cyan → pink → orange warm tone) as hero background + pure white content area + nearly black text. The font is sophisticated sans serif (Söhne feel). The layout is divided into oblique color blocks (skew corner partitions) and gradient hero pressed structured grid text. Logo elements: angled beveled border, multi-color fluid gradient, rational grid pressure expression gradient.
- HTML implementation: pure CSS. transform:skewY() or clip-path:polygon() makes oblique partitions, linear-gradient multi-color overlay (CSS animation can be added to slow the flow) makes fluid gradient strips, and Grid makes the structured text below. Zero material.
- Font: Inter / Hanken Grotesk (for Söhne)

**Utility-First Colorful Docs** `Neutral·Restore 98%`
- Reference: Tailwind CSS Docs (Sky/Cyan brand color + functional classification rainbow color bar)
- Adaptation: technical documentation, API reference, design system site, tutorial site, developer knowledge base, SaaS help center
- Visual DNA: color matching Sky blue #38BDF8 brand + teaal → cyan → sky blue gradient + Slate gray scale #0F172A/#64748B/#F8FAFC. The document uses rainbow color strips to distinguish functional categories (pink #EC4899/purple #A855F7/green #10B981/orange). The font is crisp sans serif + monospaced code. The layout has three columns of left column navigation + middle text + right TOC, color highlighted code blocks, and classification color labels. Logo elements: cyan gradient hero, rainbow classification color, three-column document skeleton, syntax highlighted code block.
- HTML implementation: pure CSS 98% reduction (itself a CSS framework document). Grid three columns + linear-gradient cyan hero + categorical color variables + code block syntax color is colored with span. Inter is open source, only dark switching/copy requires lightweight JS. Zero light and shadow/3D/hand-painted.
- Font: Inter + JetBrains Mono / Fira Code (code)

**Terminal-Core Soft-Futurism (equal-width characters + equidistant cubes)** `Neutral·Restore 80%`
- Reference: Cursor (Anysphere); Developer Terminal Aesthetics × Teenage Engineering Industrial Minimalism
- Adaptation: AI programming tool station, CLI product landing, developer infrastructure, technology brand hero, terminal products
-Visual DNA: Color matching carbon black #0B0D14 base + warm white text #F2F0EF + restrained blue and purple gradient accent to embellished buttons and halo. The font is monospaced as the protagonist (command line feel) + sans serif as the auxiliary. Layout the command line/code block foreground, bento partition, and 2.5D isometric cube representation. Logo elements: monospaced command line, isometric projection cube, warm white × carbon black, restrained gradient halo, industrial minimalism.
- HTML implementation: pure CSS 80% restoration. Equal-width font code block + dark bento + box-shadow halo; 2.5D isometric cube is hand-rolled with CSS 3D transform (rotateX/Y+skew) or SVG isometric projection. Gap: The multi-interface demo that can be clicked and switched requires JS + fake UI splicing. No WebGL required.
- Font: Geist Mono / JetBrains Mono (main character) + Inter (auxiliary)


#### Quiet faction

**Functional Brutalism Grid Community Functional Brutalism (gray line division + system word + blue link) ** `Quiet·Restore 98%`
- Reference: Are.na / Lobsters / Quartz; Müller-Brockmann grid digital implementation + Tufte information density
- Adaptation: community/UGC platform, content aggregation site, document knowledge base, mobile-first content flow, geek-oriented products
-Visual DNA: color matching near white background #FBFBFB+black text+1px gray dividing line #E0E0E0+classic link blue #0000EE/visited purple. Font system font stack (-apple-system/no decoration). Layout high-density information lists, thin gray lines in columns, minimal white space, and tight line spacing. Logo elements: hair gray dividing line, blue link, system word, information density priority.
- HTML implementation: Pure CSS is the easiest to restore, which is the true nature of Brutalist Web. border-bottom: 1px gray line list + system-ui word stack + compact padding + blue link. Almost no materials or JS required, pure structure.
- Font: system-ui system font stack / IBM Plex Sans (cover)

**Dark gallery framed Gallery Dark (dark black negative space + single column large image + EXIF ​​small text)** `Quiet·Restore 75%`
- Reference: Glass (glass.photo) / Bottega Veneta; Art Museum Darkroom + Apple Photos Content First
- Suitable for: photography portfolio, luxury e-commerce, immersive display of visual content, personal gallery page, high-end product display
-Visual DNA: color matching pure black background #0A0A0A + the only color provided by the artwork itself + very light gray EXIF ​​small letters #666. Very thin sans serif small font. The layout features a single-column, centered large picture, a huge negative space frame, and small metadata text under the picture. Logo elements: darkroom black background, content-first UI retreat, EXIF-style small font footnotes, and exclusive viewport for large images.
- HTML implementation: Pure CSS restores the style skeleton. Pure black background + centered max-width single column + huge padding framed white space + small text metadata. The gap is the "real photography" itself - replacing it with a placeholder image/solid color block will lose its soul, but the darkroom atmosphere and layout are 100% compatible.
- Font: Inter (fine weight 300) / Cormorant (serif luxury feel optional)

**Swiss ultimate black and white Swiss Monochrome (Vercel style pure black and white + Geist + sharp corners) ** `Quiet and 98% restored`
- Reference: Vercel / Next.js Docs (self-developed Geist has been open source); Massimo Vignelli less is more
- Adaptation: developer tool documentation, technology brand official website, AI product site, SaaSlanding page, minimalist research report
- Visual DNA: Color matching pure black #000 + pure white #FFF + grayscale #888, zero color or just a touch of blue link. Font Geist geometric sans serif + Geist Mono. The layout has sharp right angles (no or minimal rounded corners), high contrast, precise grid, and limited white space. Logo elements: pure black and white, sharp corners, Geist font, triangle/arrow geometric mark.
- HTML implementation: pure CSS 100% restored, Geist open source can be directly quoted. CSS Grid precision grid + pure black and white variable + border-radius: 0 acute angle + hairline border. This is the most comfortable and minimalist home of HTML, with zero dependence on materials.
- Font: Geist + Geist Mono (Vercel open source original version)

**Japanese style white box gallery Kenya Hara White Gallery** `Quiet·Restore 80%`
- Reference: Cosmos (cosmos.so) / Aesop official website; Kenya Hara "white" emptiness + Swiss grid hybrid
- Suitable for: high-end e-commerce, creative galleries, content curation platforms, designer portfolios, brand boutiques, moodboard sites
- Visual DNA: The color scheme is almost all white #FAFAFA base + pure black text #0A0A0A + very light gray segmentation #EFEFEF. The content image provides all colors and the UI retreats to the background. Minimalist font system/geometric sans-serif, small fonts, large kerning. The layout is masonry waterfall grid, extreme white space, light gray hair separation, and oriental emptiness. Logo elements: white box aesthetics, luxurious white space, content-first UI retreat, waterfall flow curation.
- HTML implementation: Pure CSS restores the static layout (differentiated from the dark gallery in "white"). CSS columns or Grid do masonry + near white variable + large padding white space + light gray separation. The gaps are Lenis/GSAP silky inertial scrolling and image entry easing (60% of the high-end feel is here), CSS is only basic transition, and the dynamic effect layer is downgraded.
- Font: Inter (fine weight)/Cooper Hewitt (same open source as Aesop)


## PPT style library (20 types)

#### Bold faction

**Neo-Swiss Billboard Editorial** `Bold·Restore 98%`
- Reference: Big-Number Editorial genre of Scribe $75M, Flock Safety $47M and other AI/SaaS roadshow decks; Bloomberg Businessweek infographic; Pentagram
- Adaptation: Financing roadshow, QBR/business review, annual trend review, product release key pages
- Visual DNA: Color matching = pure white (#FFFFFF) or nearly black (#0A0A0A) base + single highly saturated accent color (electric blue #2D5BFF/fluorescent green #00E676/brand orange #FF6B2C) + neutral grid line #E5E5E5. Font = extra large bold sans serif, title takes up half the screen, numbers tabular-nums are of equal width and tight spacing. Master = ① Large color block chapter page with one word ② Giant numbers occupying half the screen (3.2x) + small notes ③ Left and right column comparison ④ Full width flat polyline/column. Logo = billboarding large characters, strict baseline grid, large color block chapter pages
- HTML implementation: use clamp() for super large numbers; use CSS Grid for strict grids; background-color for large color block chapter pages; use pure div+CSS or inline SVG for polyline columns (sharper than textures); number alignment font-variant-numeric:tabular-nums. Zero Illustration Zero 3D
- Font: Inter/Geist/Söhne instead of Neue Haas Grotesk; numbers with Geist Mono

**Black Big-Number Stage** `Bold·Restore 97%`
- Reference: Steve Jobs 2007 iPhone Keynote, Xiaomi SU7 Ultra Lei Jun press conference, Spotify Wrapped, Presentation Zen (Garr Reynolds)
- Adaptation: product release theme presentations, idea demonstrations, all-staff town hall, emotional annual reviews
- Visual DNA: color matching = pure black #000000 base + pure white #FFFFFF with high contrast, and only one brand accent color highlighted on one page (Xiaomi Orange #FF6900/Spotify Green #1ED760/Apple Blue #2997FF). Font = geometric sans-serif bold, one word or a large number on the screen fills the field of view, and the font spacing is tightened. Master = ① Title page with a black background and a line of large characters in the center ② Data climax page with giant numbers + units + a line of notes ③ Left and right parameter comparison double columns (emphasis color vs gray) ④ Slogan single page. Lots of negative space
- HTML implementation: several lines of CSS with white text on a black background; giant number clamp() + flex in the center; accent color highlight alone span; left and right contrast CSS Grid two columns + bar highlight; tabular-nums. Removing the product photos and replacing them with pure text is closer to the essence of Zen.
- Font: Geist / Inter / Siyuan Black instead of SF Pro

**Highly saturated monochrome brand contrast poster / Mono-Brand Type-as-Hero** `Bold·Restore 96%`
- Reference: Spotify Wrapped visual system, Mailchimp Brand Book (Collins), Netflix red and black modern replica, COLLINS brand system
- Adaptation: brand/marketing strategy, campaign presentation, town hall cultural page, event key visual
-Visual DNA: Color matching = a single main color of the brand for the full base (Spotify green #1ED760/Mailchimp yellow #FFE01B/Netflix red #E50914) + black or white contrasting words, two layers of contrasting colors. Font = Extra large font is the main visual (type-as-hero). Master version = ① full color block base + white giant characters ② double color blocks divided up and down/left and right ③ full of giant numbers. Logo = monochrome full page, font as picture, high contrast and contrasting colors
- HTML implementation: full background-color; super large font clamp() fills up; two 100vh color blocks are used for two colors; font-weight900+negative letter-spacing is used for font images. Solid color blocks with zero material, native HTML is the best
- Font: Inter / Manrope / Archivo (extra bold) instead of Circular/Cavendish

**Full-Bleed Gradient Manifesto** `Bold·Restore 82%`
- Reference: Zuora "Tell a Different Story" sales deck (disassembled by Andy Raskin), Nike "Just Do It" campaign, National Geographic spread
- Adaptation: sales proposal vision page, brand declaration, keynote transition page, mission and vision single page
-Visual DNA: Color matching = full-page CSS gradient (warm orange → magenta/dark blue → cyan) or solid color bleeding + anti-white statement large characters + hashtag slogan (#shifthappens). Font = Heavy sans serif all caps slogan across. Master = ① Full-width gradient + centered highlight declaration ② Promised Land vision page ③ Customer logo wall. Logo = full-bleed bleeding, anti-white slogan, hashtag slogan
- HTML implementation: linear-gradient/radial-gradient full version (no particles/light and shadow, pure CSS gradient is allowed); anti-white text position is centered; logo wall uses grid grayscale SVG/text placeholder. The part that originally relied on large documentary photos was downgraded to CSS gradient background + large characters. The lack of photos reduced the restoration degree by about 15%.
- Font: Archivo / Anton / Manrope (extra bold)

**CS50 Single Concept Candy Stage / Candy-Color Lecture Stage** `Bold·Restore 94%`
- Reference: Harvard CS50 (David Malan), Lessig Method/Takahashi-ryu, Presentation Zen
- Adaptation: educational courseware, technical lectures, concept explanations, code teaching
- Visual DNA: color matching = dark black background #0A0A0A + high saturation candy color large character rotation (magenta #FF2D95/cyan #00E5FF/bright yellow #FFD500/green #39FF14). Font = sans serif, super large fonts floating in the center, one concept per screen, very little text. Master = ① A single candy-colored big word on a dark black background ② Syntax highlighting of equal-width code blocks ③ Big words with a spotlight on the stage. Logo = dark black floating candy-colored large characters, constant-width code highlighting, strong stage spotlight, very little text
- HTML implementation: dark black background + monochrome super large font clamp() in the center; code blocks use pre + monospaced fonts + span coloring for syntax highlighting; light radial-gradient vignetting (non-particle light effect) is used for spotlighting. High degree of restoration
- Font: Inter Ultra Bold + JetBrains Mono (code)

**Playful hand-drawn minimalism / Playful Maximalist Editorial (Collins style)** `Bold·Restore 75%`
- Reference: Mailchimp Brand Book (Collins 2018), New Yorker comic temperament, Cooper rounded serif, Cavendish fluorescent yellow
- Adaptation: brand deck with attitude, creative agency proposal, cultural town hall, anti-SaaS minimalist marketing page
- Visual DNA: Color matching = Cavendish fluorescent yellow #FFE01B large area + black + a small amount of contrasting colors, anti-SaaS minimalism. Font = Cooper-style rounded serif headline (playful) + magazine-style blank layout. Master page = ① Fluorescent yellow full background + weird title ② Magazine-style irregular white space layout ③ Large characters and funny copywriting. Logo = Fluorescent yellow, rounded serifs, playful layout, weird hand-drawn temperament (downgraded to geometric color blocks/emoji instead of real illustrations)
- HTML implementation: Fluorescent yellow background; rounded serif font-family; magazine blank space using asymmetric Grid. The core element of hand-drawn orangutans/illustrations cannot be produced without AI. It is downgraded to CSS geometric color blocks + large emoji + irregularly transformed and rotated text blocks. The restoration degree of missing illustrations is reduced by about 20%.
- Font: Fraunces (adjustable rounded)/Bree Serif instead of Cooper; text Inter

**Irreverent Pop (Reddit style)** `Bold·Restore 80%`
- Reference: Reddit Ads sales deck (listed as the most unique by Dock), David Carson-style uninhibited typography, 90s web retro, Memphis playful
- Suitable for: Generation Z brands, meme marketing decks, community/creator orientation, daring to make irregular proposals
-Visual DNA: Color matching=Reddit orange red #FF4500+ contrasting color, 90s web retro color. Font = mixed typesetting/David Carson style typesetting that breaks the grid, playing with the spoken word copy. Master version = ① Fun page with fun jokes and big characters ② Facts page with rhythm and serious data ③ Spoken title. Logo = breaking the grid, orange and red, funny spoken language, fun→facts rhythm reversal, retro web texture
- HTML implementation: Deliberately break the grid and use transform rotation/overlapping positioning/mixed font sizes; orange-red + contrasting color blocks; retro texture using thick black border + hard shadow box-shadow (no blur). The custom meme illustration is downgraded to emoji+geometric collage, but the mixed typesetting itself can be restored by HTML
- Font: Archivo / Space Grotesk + Mix and match Inter to create contrast

**Y2K expanded large characters / Maximalist 3D-Type (Wrapped style)** `Bold·Restore 78%`
- Reference: Spotify Wrapped 2022/2023/2025, Memphis color contrast, Y2K/Maximalism, duotone portrait gradient
- Adaptation: annual review (emotional out-of-circle direction), personalized data card, social sharing vertical screen card, brand year-end
-Visual DNA: color matching = highly saturated contrasting full-color background (magenta + cyan + orange) + Spotify green accent + duotone two-color gradient. Font = giant numbers that stand tall and tall, and the year/numbers are 3D expanded/metallic. Master version = ① Contrast color full version + giant inflated numbers ② Duotone portrait/color block base + reversed white characters ③ Vertical screen shareable card. Logo = giant expanded 3D numbers, contrasting color full page, duotone gradient, vintage metal texture, vertical screen story card
- HTML implementation: contrasting color full-page background; 3D expanded numbers use CSS text-shadow multi-layer superposition + transform: perspective or SVG+stroke to create a three-dimensional (not true 3D rendering); duotone uses mix-blend-mode + gradient to superimpose on the grayscale image placeholder block. The metallic texture is downgraded to gradient filled text background-clip:text, and the restoration degree is reduced by about 15%.
- Font: Archivo Black / Anton Ultra Bold + Digital Clash Display


#### Neutral faction

**Bento Lunch Box Module Grid / Bento Grid** `Neutral·Restore 95%`
- Reference: Apple Keynote Bento Grid era, new generation MBB Bento/Big-Type deck (2024-2026), Stripe annual report indicator card matrix, Pitch.com QBR template
- Adaptation: product function summary, consultation/QBR data report, sales results page, town hall indicator page
-Visual DNA: Color matching = light gray/milk white base (#F5F5F7/cream) or nearly black base + brand main color + 1-2 accent colors, light color partition base of the card + rounded corners + micro strokes/micro shadows. Font = super large display title + regular text, strong contrast in font weight, KPI tabular figures. Master = ① Title page with a giant single sentence + blank space ② bento page with 2 × 2/3 columns of cards of varying heights. Each card has one insight (number/linear icon/sparkline) ③ one-insight super large digital page. Logo = unequal height card grid, rounded corners and micro strokes, breathing sense
- HTML implementation: grid-template-areas of CSS Grid uses unequal height bento; card border-radius+box-shadow micro-shadow+1px hairline; sparkline uses inline SVG; linear icon uses inline SVG stroke. Zero map
- Font: Inter/Geist + Number Geist Mono

**Neo-Swiss Dark Hairline Terminal Aesthetics / Dark Hairline Terminal** `Neutral·Restore 94%`
- Reference: Linear pitch deck, Vercel design language, CS50 deep black stage courseware; font Inter Tight+JetBrains Mono
- Adaptation: developer tools/technical product releases, technical roadshows, and engineering reports
-Visual DNA: color matching = near black base (#0D0D0F/#111113) + hairline #262629 grid + single purple and blue accent (#5B5BD6/#7C7CFF). Font = Inter Tight headline + JetBrains Mono for label/data. Master = ① minimalist title page with one sentence + mono tag ② hairline separated data grid ③ feature list of mono tag. Logo = 1px thin line grid, mono single width label, extreme white space, near black but not pure black
- HTML implementation: nearly black background + border: 1px solid hairline grid; mono tag uses constant width font-family; low light uses extremely light box-shadow/border highlight instead of true light effect (downgrade to avoid cyberneon restricted area). Be careful to avoid #0D1117 dark blue restricted area, use neutral near black
- Font: Inter Tight + JetBrains Mono / IBM Plex Mono

**Two-Font Consulting (Bower style)** `Neutral·Restore 90%`
- Reference: McKinsey 2019 brand system (designed by Wolff Olins, Bower serif + sans serif), BCG Executive Perspectives, dark blue thin line pattern
- Adaptation: consulting reports, executive reports, industry research, proposals from authoritative organizations
-Visual DNA: color matching = dark blue (#051C2C/McKinsey dark blue) × white binary + single brand color highlight (BCG green #00805A), warm gray bottom with a breathable feel. Font = characterful serif headlines (Bower style) juxtaposed with high contrast sans serif text. Master = ① Conclusion-style action-title in the upper left corner ② Blue thin line pattern decoration ③ Magazine-style left and right division of labor (conclusion text + visual) ④ Large digital data-point card. Logo = serif × sans serif high contrast, dark blue thin line pattern, action-title, warm gray high-end feel
- HTML implementation: double font-family juxtaposition (serif title + sans-serif body); thin line pattern using repeating-linear-gradient or SVG line; data-point card pure CSS; photo grayscale processing does not require photos. The blue-purple edge shimmer is downgraded to a solid color edge.
- Font: Playfair Display / Fraunces serif title + Inter text (replaces Bower)

**Diagram-Driven Isotype** `Neutral·Restore 88%`
- Reference: Salesforce sales deck, Isotype (Otto Neurath) pedigree, Gene Zelazny's "Say It With Charts", Hans Rosling/Gapminder
- Adaptation: platform/architecture explanation, customer journey, process methodology, ecological map
- Visual DNA: color matching = corporate blue block + product line color separation + iconized capability grid. Font = clear sans serif. Master = ① Horizontal customer journey arrow flow ② Layered platform architecture diagram ③ Iconized capability grid ④ 2×2/waterfall/pyramid structure diagram. Logo = arrow process, layered architecture box, Isotype icon grid, process as narrative
- HTML implementation: Use Flexbox+CSS clip-path triangle or SVG arrow for arrow flow; use nested bordered divs for architectural layering; use inline SVG stroke for icons to uniformly stroke; use Grid+bevel for waterfalls/pyramids. Bubble charts can use CSS circle + positioning. Pure vector drawing
- Font: Inter/IBM Plex Sans (chart-friendly)

**Single picture master picture concept diagram / Diagrammatic Minimalism** `Neutral·Restore 95%`
- Reference: Simon Sinek Golden Circle TED, Bauhaus geometric abstraction, information architecture "One picture determines the whole scene"
- Adaptation: theoretical framework explanation, TED-style thought dissemination, model/methodology visualization, single concept keynote
-Visual DNA: Color matching = minimalist white/light base + black + 1 accent color, geometric solid color. Font = sans serif, label caps embedded graphics. Master = ① The unique geometric master diagram (concentric circles/triangles/matrix) carries all concepts ② Arrows from inside to outside ③ Comparison cases. Logo = single geometric master image, nested concentric circles/triangles, uppercase label, one image carries the concept
- HTML implementation: Concentric circles use border-radius: 50% nested div or SVG circle; triangles use clip-path/SVG polygon; arrow SVG marker; label absolute positioning is attached to the graphic. Pure geometry, perfectly restored by HTML
- Font: Manrope/Futura series (Jost open source alternative) geometric feel

**Sparkline narrative waveform / Narrative Sparkline (Duarte style)** `Neutral·Restore 91%`
- Reference: Nancy Duarte's "Resonate" Sparkline Narrative Map, Al Gore's "An Inconvenient Truth", Duarte Inc. Data Storytelling
- Adaptation: presentation structure design, change narrative, before/after comparison, data story arc
-Visual DNA: color matching = dark background or white background + brand orange to emphasize turning points + gray contrast. Font = sans serif, annotation point. Master = ① Oscillating waveform line across the full screen ② Text mark points on the waveform ③ Juxtaposition of upper and lower control waveforms ④ A single data line hanging on a black background ⑤ Gradually revealed. Logo=crossing waveform line, waveform label point, orange transition, control waveform, curve climbing out of the screen
- HTML implementation: use inline SVG path (smooth Bezier) for waveform lines; use SVG circle+text to position label points; compare the upper and lower paths of the waveform; use CSS animation stroke-dashoffset for reveal. Pure SVG drawing without material
- Font: Inter + Number Geist Mono


#### Quiet faction

**Assertion-Evidence / Tufte Information Design** `Quiet·Restore 93%`
- Reference: Michael Alley Assertion-Evidence (Penn State Evidence), McKinsey/BCG action-title, Edward Tufte data ink ratio, Barbara Minto pyramid principle
- Adaptation: academic/engineering reports, data-critical consultation pages, policy research reports, technical reviews
- Visual DNA: Color matching = white/very light gray background + black text + single restrained accent color (dark blue/brick red). Font = whole sentence title (not noun phrase), there is a picture under the title, and the text label is embedded in the picture. Master = ① Entire sentence action-title ② Title order picture evidence ③ Zero bullet. Flags = full sentence title, single image evidence, embedded annotation, zero chartjunk, high data to ink ratio
- HTML implementation: the entire title depends on the layout level; the chart uses pure CSS/inline SVG to draw minimalist polyline scatter points (remove the grid lines and legend, and mark the text directly next to the data point); zero decoration. Tufte's restraint is HTML's strength
- Font: Source Serif / Lora title + Inter text (dual font reading level)

**Institutional Swiss Minimal** `Quiet·Restore 96%`
- Reference: Sequoia official 10-page pitch template, Airbnb 2009 seed round deck, Müller-Brockmann grid, Massimo Vignelli
- Adaptation: investment roadshows, standard business proposals, problem-solution narratives, brand de-decoration proposals
- Visual DNA: Color matching = pure white background + black and gray text + single brand accent color (Airbnb coral red #FF5A3C/neutral blue). Font = Helvetica is sans serif, the title is one sentence in medium size and bold, and the text is short and has large spacing. Master = ① Centered logo + slogan ② One sentence title at the top + 3 columns of contrast below (Problem/Solution three points) ③ TAM large number layering ④ 2×2 competitive product matrix. Logo = top title strip, three-column contrast, monochrome accent, 2×2 matrix
- HTML implementation: Flexbox three-column confrontation; 2×2 matrix pure CSS Grid+border drawing; TAM layering using nested divs or concentric squares; one information per page. Almost pure typography grid, ideal for HTML
- Font: Inter/Helvetica Now replaces Helvetica; main text Inter

**Magazine Editorial Longform** `Quiet·Restore 95%`
- Reference: Stripe Annual Letter ($1.9T), Amazon six-page narrative memo, Benedict Evans "X eats the world", Stripe Press
- Suitable for: annual letters/review narratives, in-depth thought articles, internal updates, research and report-type reading materials
-Visual DNA: color matching = milk white/off-white base (#FBFAF8) + dark ink lettering + brand color finishing touch (Stripe purple #635BFF). Font = serif or high-quality sans serif, prose paragraphs + inline data cards, oversized display numbers interspersed. Master = ① Masthead headline ② Multi-column prose + inline indicator card ③ Super large number paragraph anchor. Signs = publication reading rhythm, inline data cards, restrained white space, prose rather than bullet
- HTML implementation: multi-column column-count or Grid; inline data card float/inline-block embedded text; serif text max-width controls line width 65ch; super large numbers interspersed. Pure typesetting, zero material
- Font: Newsreader / Source Serif text + Inter auxiliary; digital tabular

**Humanist Rounded Cards (Khan style)** `Quiet·Restore 80%`
- References: Khan Academy Wonder Blocks Design System, Source Serif Pro, Forest Green Branding, Friendly Humanism
- Adaptation: educational products, affinity courseware, charity/non-profit deck, warm brand proposals
-Visual DNA: color matching = forest green #14BF96/#0A5C4B + off-white base + warm color auxiliary, soft and not dazzling. Font = Source Serif serif title (humanistic style) + sans serif body text. Master = ① Rounded corner card component set ② Serif title + friendly text ③ Real photography position (downgraded to green geometry/round character block). Logo = forest green, serif title, large rounded corner card, humanistic warmth, imperfect and friendly texture
- HTML implementation: large rounded border-radius card + soft box-shadow; serif title font-family; warm beige white background. Real teacher and student photography, which does not have AI-enabled pictures, is downgraded to green geometric illustration blocks/large rounded solid color placeholders + emoji characters. The restoration degree of missing photos is reduced by about 18%.
- Font: Source Serif 4 title + Nunito Sans / Inter text (Nunito roundness echoes humanities)

**Dense Research Report (Meeker style)** `Quiet·Restore 92%`
- Reference: Mary Meeker "Internet Trends" (BOND), CB Insights "State of AI", McKinsey Global Institute "Year in Charts", FT/Bloomberg data news
- Adaptation: trend research reports, industry data reviews, intensive data reports, market maps
-Visual DNA: Color matching = white background + brand color (BOND/CB Insights bright blue #0066FF) stepped monochrome highlight and the rest gray, with almost zero white space. Font = concluding sentence title, 1 figure density per page, minimal source footnotes. Master = ① Conclusion sentence title + full page single image ② logo grid market map ③ large digital KPI card ④ dense multi-image grid + footnotes. Logo = concluding sentence title, zero white space research report feel, monochrome ladder highlighting, logo market map, source footnote specifications
- HTML implementation: dense charts are all drawn with pure CSS/inline SVG (column/line/stacked/scattered points); logo market map uses Grid+text/SVG placeholder; KPI card CSS; footnotes with small fonts. Extreme information density is what HTML is good at, zero material
- Font:Inter + IBM Plex Sans + digital tabular Geist Mono

**Pure text manifesto memo / All-Text Manifesto (Netflix/Amazon style)** `Quiet·Restore 97%`
- References: Netflix Culture Deck (2009, 125 pages), Amazon six-page narrative memo (Bezos), Tufte’s anti-PowerPoint proposition, Matthew Carter reading-level typography
- Adaptation: Cultural declaration, value promotion, in-depth memo, anti-PPT pure document presentation
-Visual DNA: Color matching = pure white or pure black background + a single accent color (Netflix red #E50914) as the only highlight, extremely restrained. Font = reading-level typography, one opinion statement per page/pure prose, zero bullet, and zero pictures. Master version = ① full bottom + golden assertions ② colloquial and candid paragraphs ③ institutional nouns highlighted (Keeper Test) ④ six pages of prose + appendix table. Logo = pure text, one opinion per page, zero pictures and zero bullets, single-color highlighted golden sentences, frank spoken language, silent-read document feel
- HTML implementation: pure typesetting: golden sentences are left-aligned with large characters clamp(); prose max-width controls line width; the only emphasis color span highlights key phrases; appendices use a minimalist table. Zero material, zero pictures, pure text is the most stable restoration of HTML
- Font: Newsreader / Source Serif (reading level) or Inter (declaration style); the title can be Archivo super bold


---

## ⚠️ Dedicated style for AI image generation (only recommended when the user is confirmed to have the ability to generate images, default is not optional)

The souls of the following styles can only make severely degraded mocks under **dynamically generated visuals/3D/particles/movie-level light and shadow/hand-drawn illustrations** and pure HTML/CSS raw images, and are **removed from the default recommendation pool**. Only when the user clearly has the ability to generate images (using `huashu-gpt-image`) can he be considered a candidate:

| Style | Soul | Why HTML can’t do it |
|------|------|------------------|
| Active Theory (WebGL particles) | 3D particle systems/real-time rendering | Not possible with pure CSS |
| Field.io (Generative Art) | Algorithm-generated graphics | Static SVG can only be a rigid and simplified version |
| Resn (illustration interaction) | Character illustration + gamification | Rely on hand-painted materials |
| Zach Lieberman (real-time generation) | creative coding strokes | rely on real-time generation |
| Raven Kwok (fractal parameters) | Recursive fractals | CSS cannot do complexity |
| Ash Thorp (movie light and shadow) | Film-level volumetric light/concept art | CSS light and shadow is degradation |
| Territory Studio (FUI holographic) | Sci-fi holographic interface | Relying on a large number of luminous layered materials |
| Neo Shen (ink blending) | Ink organic blending | CSS gradient ≠ ink |
| Sagmeister & Walsh (Color Explosion) | Hand-made objects + experimental typesetting | Contrast color skeletons can be made (already incorporated into the website "Memphis/Memphis" and PPT "Single Color Contrast Poster"), but hand-made textures cannot be made |

> These models are not "bad", but "the carrier is wrong" - their native carrier is AI direct graphics, not the browser DOM.

---

## Default aesthetic restricted area (users can override according to their own brand)

- ❌ **GitHub-dark lazy solution**: uniform dark blue background (#0D1117) + universal cyan/purple neon glow - only this bad combination is banned, not "all dark colors are banned"
- ✅ **Not in the restricted area**: Film-level dramatic light and shadow, warm color cyber (Ash Thorp orange/green), movement poetry dark scene narrative - dark colors reserved with the author's intention (this library "Linear Dark Glow", "Black Bottom Digital Theater" and "CS50 Candy Stage" are all legal dark colors)
- ❌ Radical purple gradient universal formula, emoji as icon, rounded corner card + left color border accent (unless used by the brand itself)
- ❌ Add personal signature/watermark to the cover image

---

## Tip words when you have the ability to draw pictures (Mood, Not Layout)

> Only applicable when taking the AI ​​mapping path; for the HTML path, write code directly according to the "HTML implementation" of each style above.

Short cue words > Long cue words. Describing mood and content is more effective than stacking 30 lines of layout details.

| Writing that kills diversity | Writing that inspires creativity |
|----------------|----------------|
| Specify the color ratio (60%/25%/15%) | Describe the mood ("warm like Sunday morning") |
| Specify layout placement | Reference specific aesthetics ("Pentagram editorial feel") |
| List all visual elements | Describe what the audience should feel |

Complete AI image generation methodology → `huashu-gpt-image` skill.

---

**Version**: v3.0 (2026-06 Comprehensive reconstruction into HTML native 40 libraries)
**Applicable**: default HTML path for all visual designs such as web pages/PPT/PDF/infographics/covers/Apps
