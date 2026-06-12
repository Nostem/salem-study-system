---
name: Salem Study System
description: Source-traceable NRC RO/SRO study interface for dense technical learning.
colors:
  reactor-slate: "#0a0e17"
  console-surface: "#0d1220"
  procedure-panel: "#111827"
  hover-panel: "#172033"
  rule-border: "#1a2035"
  high-border: "#283252"
  instrument-blue: "#60a5fa"
  procedure-teal: "#22d3ee"
  verification-green: "#10b981"
  draft-yellow: "#eab308"
  review-amber: "#fbbf24"
  trip-red: "#f87171"
  bases-purple: "#a78bfa"
  primary-text: "#e0e4ea"
  body-text: "#c8cdd5"
  muted-text: "#8b95a5"
  light-reading-bg: "#f4f0e7"
  light-reading-surface: "#fbf8f1"
  light-reading-panel: "#ebe4d6"
  light-reading-border: "#d8ccb8"
  light-reading-text: "#242018"
  light-reading-body: "#3f382d"
  light-reading-muted: "#6b5f4f"
  light-reading-blue: "#1f5f8b"
typography:
  display:
    fontFamily: "Instrument Serif, Georgia, serif"
    fontSize: "2.25rem to 3rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "normal"
  headline:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.25
  title:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.625rem to 0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.10em to 0.18em"
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  xxl: "1rem"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.25rem"
  xxl: "1.5rem"
  section: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.instrument-blue}"
    textColor: "#06111f"
    rounded: "{rounded.md}"
    padding: "0.65rem 1rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.body-text}"
    rounded: "{rounded.md}"
    padding: "0.65rem 1rem"
  input-search:
    backgroundColor: "{colors.procedure-panel}"
    textColor: "{colors.primary-text}"
    rounded: "{rounded.md}"
    padding: "0.625rem 1rem"
  article-card:
    backgroundColor: "{colors.procedure-panel}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1rem"
  study-card:
    backgroundColor: "{colors.procedure-panel}"
    textColor: "{colors.body-text}"
    rounded: "{rounded.xxl}"
    padding: "1.25rem"
  nav-pill-active:
    backgroundColor: "#60a5fa1a"
    textColor: "{colors.instrument-blue}"
    rounded: "{rounded.lg}"
    padding: "0.5rem 0.75rem"
---

# Design System: Salem Study System

## 1. Overview

**Creative North Star: "The Digital NRC Binder"**

Salem Study System should feel like a dark, source-traceable technical study console: calm enough for long sessions, dense enough for operator-grade material, and strict enough to preserve confidence in every fact. It is not a marketing surface. It is a working reference, quiz, progress, and study-map environment for serious NRC RO/SRO exam preparation.

The visual system uses a restrained product register. It relies on tonal layering, exact borders, compact typography, and state colors that mean something. Source authority drives the atmosphere: PDFs, Tech Specs, exam metadata, verification state, draft state, mastery state, and review state should remain visible without becoming noisy.

The system has two user-selectable themes. The dark console theme remains the default technical cockpit. A lighter long-reading theme is required as a first-class alternative for extended article study, PDF-adjacent reading, daylight sessions, and users who fatigue in dark interfaces. The light theme must preserve the same source authority and component vocabulary rather than becoming a separate brand.

It explicitly rejects the PRODUCT.md anti-references: generic blue education SaaS, neon AI dashboard styling, gamified Duolingo feel, decorative nuclear gimmicks, card-grid overload, flashy marketing pages, decorative motion, glassmorphism, gradient text, and effects that reduce readability.

**Key Characteristics:**

- Dark technical reading environment with muted navy/slate surfaces.
- Source-first hierarchy for articles, PDFs, Tech Specs, exams, and quiz states.
- Compact, instrument-like controls with clear hover/focus/active behavior.
- Dense layouts that stay scannable through typography, borders, and spacing rhythm.
- Color as state and orientation, not decoration.
- User-selectable dark and light themes with persistent preference.

## 2. Colors

The palette is a restrained two-theme system. Dark mode is the technical console palette: dark slate surfaces, pale desaturated text, one primary instrument blue, and semantic colors for verification, review, warning, and trip/error states. Light mode is a warm paper/technical-manual palette for long reading sessions, using low-glare ivory surfaces, charcoal text, restrained blue accents, and the same semantic state meanings.

### Primary

- **Instrument Blue** (`#60a5fa`): The primary action and orientation color. Use for active navigation, search focus, current selection, primary buttons, links, and high-confidence actionable affordances.

### Secondary

- **Procedure Teal** (`#22d3ee`): A supporting technical accent for sidebar glyphs, low-emphasis structure, and rare cross-reference cues. Do not let it compete with Instrument Blue.
- **Verification Green** (`#10b981`): Verified source state, normal/good values, and success feedback. Use with text labels, never as color-only meaning.

### Tertiary

- **Review Amber** (`#fbbf24`): Review, exam-highlight, learning, and mid-mastery states. It signals attention without implying danger.
- **Trip Red** (`#f87171`): Error, trap, trip, weak mastery, and high-risk states. Use sparingly and pair with explicit copy.
- **Bases Purple** (`#a78bfa`): Bases, explanatory context, and specialized secondary callouts.

### Neutral

- **Reactor Slate** (`#0a0e17`): Dark-theme root page background. It is the deepest canvas and should remain dominant in console mode.
- **Console Surface** (`#0d1220`): Dark-theme top bars, modal surfaces, and elevated static regions.
- **Procedure Panel** (`#111827`): Dark-theme cards, code blocks, inputs, quiz choices, and article callout surfaces.
- **Hover Panel** (`#172033`): Dark-theme hover and active panel states.
- **Rule Border** (`#1a2035`): Dark-theme default divider and component border.
- **High Border** (`#283252`): Dark-theme stronger divider or selected-state border when Instrument Blue would be too loud.
- **Primary Text** (`#e0e4ea`): Dark-theme headings and highest-priority labels.
- **Body Text** (`#c8cdd5`): Dark-theme article body, quiz text, and normal UI copy.
- **Muted Text** (`#8b95a5`): Dark-theme secondary labels, metadata, shortcuts, and low-emphasis navigation.

### Light Reading Theme

- **Binder Paper** (`#f4f0e7`): Light-theme root background. Warm, low-glare, and deliberately not pure white.
- **Clean Page** (`#fbf8f1`): Light-theme article page, modal, card, and main reading surface.
- **Manila Panel** (`#ebe4d6`): Light-theme sidebar, code block, table header, and secondary panel surface.
- **Soft Rule** (`#d8ccb8`): Light-theme divider and border color.
- **Ink Text** (`#242018`): Light-theme headings and highest-priority labels.
- **Body Ink** (`#3f382d`): Light-theme long-form body copy.
- **Archive Muted** (`#6b5f4f`): Light-theme metadata, secondary labels, and disabled text.
- **Blueprint Blue** (`#1f5f8b`): Light-theme primary action, link, focus, and active-state accent.

### Theme Behavior

- **Toggle:** Users can choose dark or light from a visible theme toggle in the global shell. Persist the choice locally and respect system preference only as the initial default.
- **Scope:** The toggle applies to the whole site: homepage/study dashboard, article layout, search modal, sidebar, quiz surfaces, graph/study-map shell, progress/history pages, tables, callouts, and source/PDF affordances.
- **Reading bias:** Light mode is optimized for long article reading and daylight study. It should feel like a technical manual or NRC binder page, not a generic blog.
- **Semantic parity:** State meanings do not change between themes. Blue still orients, Green verifies, Amber reviews, Red warns.

### Named Rules

**The Color Means State Rule.** Instrument Blue or Blueprint Blue orients; Green verifies; Amber reviews; Red warns. Do not use these colors as decoration when no state or action exists.

**The Two Binders Rule.** Dark mode is the control-room console; light mode is the paper NRC binder. They share hierarchy, components, status language, and source authority. Only surface and contrast tokens change.

**The No Pure White Rule.** The light reading theme must not use pure white as the reading canvas. Use warm, low-glare paper tones so long study sessions stay comfortable.

**The No Color-Only Meaning Rule.** Every verification, warning, draft, review, mastery, and error signal must pair color with a label, icon, or shape.

## 3. Typography

**Display Font:** Instrument Serif, with Georgia fallback.
**Body Font:** IBM Plex Sans, with system-ui and Apple system fallbacks.
**Label/Mono Font:** JetBrains Mono, with ui-monospace and SFMono fallbacks.

**Character:** The type system mixes serious technical legibility with a small amount of institutional gravitas. IBM Plex Sans carries the product UI and long reading. JetBrains Mono carries metadata, filters, setpoints, labels, and source-like material. Instrument Serif is a controlled accent for study-hub display moments only, not article labels or dense controls.

### Hierarchy

- **Display** (500, `2.25rem` to `3rem`, `1.1`): Study hub titles and occasional orientation pages. Use sparingly.
- **Headline** (600, `1.5rem`, `1.25`): Article titles, section hero headings, and primary page headers.
- **Title** (600, `1rem`, `1.35`): Card titles, panel titles, quiz section titles, modal titles.
- **Body** (400, `0.9375rem`, `1.7`): Article prose and study explanations. Keep prose lines around 65 to 75 characters where possible.
- **Compact Body** (400, `0.8125rem` to `0.875rem`, `1.5` to `1.6`): Quiz controls, explanations, sidebar content, dense metadata blocks.
- **Label** (600, `0.625rem` to `0.75rem`, `0.10em` to `0.18em`, uppercase): Navigation groups, status labels, filters, metadata, and machine-like panel headings.
- **Value / Code** (500 to 700, `0.75rem` to `0.9em`, JetBrains Mono): Setpoints, answer labels, source identifiers, and fill-in-the-blank markers.

### Named Rules

**The Serif Is a Study-Hub Accent Rule.** Instrument Serif may give orientation pages some gravity, but it must not appear in dense product labels, controls, tables, or status UI.

**The Metadata Is Mono Rule.** Source IDs, status labels, filters, setpoints, and compact navigation labels use JetBrains Mono to reinforce traceability.

**The Long-Session Rule.** Body copy needs generous line height and controlled line length. Dense does not mean cramped.

## 4. Elevation

The system is flat by default and uses tonal layering instead of shadows. Depth comes from surface steps, borders, sticky regions, and state transitions. Shadows should be rare, structural, and limited to overlays such as the search modal where separation from the page is required.

### Shadow Vocabulary

- **Overlay Shadow** (`shadow-2xl` in the current search modal): Use only for modal overlays or floating search surfaces that must separate from the article canvas.

### Named Rules

**The Flat Binder Rule.** Article surfaces, cards, filters, sidebars, and quiz panels are flat at rest. Do not add ambient shadows to make them feel like marketing cards.

**The Border Does the Work Rule.** Use Rule Border (`#1a2035`), High Border (`#283252`), and active-state borders before reaching for shadows.

## 5. Components

### Buttons

- **Shape:** Compact rounded rectangle (`0.375rem`).
- **Primary:** Instrument Blue background (`#60a5fa`), dark text (`#06111f`), semibold label, `0.65rem 1rem` padding.
- **Hover / Focus:** Primary hover brightens to `#93c5fd`. Focus should be visible through border/ring treatment, not animation.
- **Secondary:** Transparent background, Rule Border, Body Text, same padding and radius. Hover shifts border/text to Instrument Blue.
- **Disabled:** Lower opacity and not-allowed cursor; do not rely on color alone.

### Chips

- **Style:** Small, compact labels with muted tonal backgrounds, border, and mono or compact sans text.
- **State:** Selected chips use Instrument Blue tint plus explicit selected/active context. Unselected chips remain neutral.
- **Meaning:** Chips are for filters, source tags, categories, and status. Avoid decorative tag clouds.

### Cards / Containers

- **Corner Style:** Small to medium rounding for article cards (`0.375rem` to `0.5rem`); larger rounding for study cards (`1rem`) where the surface is an entry choice.
- **Background:** Procedure Panel on Reactor Slate or Console Surface.
- **Shadow Strategy:** Flat by default; depth through border and tonal shift.
- **Border:** Rule Border by default, Instrument Blue only for active or recommended states.
- **Internal Padding:** Dense article/callout surfaces use `0.75rem 1rem`; larger study choices use `1.25rem`.

### Inputs / Fields

- **Style:** Procedure Panel background, Rule Border, `0.375rem` radius, Primary Text input, Muted Text placeholder.
- **Focus:** Border shifts to the technical accent (`#2a6f97` in the current search input, Instrument Blue in dark mode, or Blueprint Blue in light mode). Focus must be keyboard-visible.
- **Error / Disabled:** Error pairs Trip Red with explicit copy. Disabled fields reduce opacity and preserve label readability.

### Navigation

- **Top Bar:** Sticky, compact, Console Surface in dark mode or Clean Page/Manila Panel in light mode, with a bottom border. It should stay quiet and task-first.
- **Sidebar:** Dense, collapsible category navigation with mono uppercase section labels and active item highlighting. In light mode it should feel like binder tabs and a technical table of contents, not a marketing nav.
- **Active State:** Instrument Blue or Blueprint Blue text/tint, not heavy fills. Current article/category must be obvious.
- **Theme Toggle:** A global, keyboard-accessible toggle belongs in the shell near search/account controls. It must expose current state, persist the user choice, and avoid resetting during Astro page transitions.
- **Mobile:** Navigation becomes drawer/top navigation. Touch targets should meet 44px minimum on learner flows.

### Search Modal

- **Role:** Primary way to traverse the knowledge base quickly.
- **Style:** Centered overlay, dark Console Surface, Rule Border, rounded-lg, clear input focus, Pagefind results as compact rows.
- **Keyboard:** Cmd/Ctrl-K opens; Escape closes; Enter selects the first result; arrows move through results. Preserve this behavior.

### Article Prose

- **Headings:** H1 in Primary Text, H2 as small uppercase label, H3 as compact title. This supports dense technical scanning.
- **Tables:** Full-width, compact, low-border tables with muted headers and mono values.
- **Callouts:** Use semantic callout color roles, but avoid side-stripe borders greater than 1px in future redesigns. Prefer full border, label, icon, background tint, or structured header treatment.

### Quiz Controls

- **Choices:** Procedure Panel or Reactor Slate background, Rule Border, generous click target, selected state through Instrument Blue border/text.
- **Primary Action:** Instrument Blue button with dark text.
- **Explanations:** Compact body text with enough line height to support learning, not just grading.

## 6. Do's and Don'ts

### Do:

- **Do** preserve the PRODUCT.md promise of a source-traceable NRC RO/SRO study environment.
- **Do** provide both a dark console theme and a warm light reading theme with a visible, persistent user toggle.
- **Do** use Reactor Slate (`#0a0e17`) as the dominant dark-theme page background and Procedure Panel (`#111827`) for dark-theme cards, inputs, code blocks, and quiz choices.
- **Do** use Binder Paper (`#f4f0e7`) and Clean Page (`#fbf8f1`) for light-theme long-reading surfaces.
- **Do** use Instrument Blue (`#60a5fa`) in dark mode and Blueprint Blue (`#1f5f8b`) in light mode for current location, primary action, links, focus, and active selection.
- **Do** pair every state color with text, label, icon, or shape.
- **Do** keep article prose readable for long sessions: body around `0.9375rem`, line-height around `1.7`, and controlled line length.
- **Do** keep tables, setpoints, source IDs, and quiz metadata compact and scannable.
- **Do** prefer flat tonal layers, precise borders, and sticky orientation rails over shadows.
- **Do** make source PDFs, Tech Spec references, draft/verified state, and exam metadata feel first-class.

### Don't:

- **Don't** make this a generic blue education SaaS interface.
- **Don't** use neon AI dashboard styling, cyberpunk visuals, or purple-gradient glassmorphism.
- **Don't** make it feel like a gamified Duolingo-style learning app.
- **Don't** use decorative nuclear gimmicks, warning-symbol wallpaper, or radiation-sign branding.
- **Don't** turn the homepage or study hub into card-grid overload where every concept is the same icon-heading-text block.
- **Don't** make flashy marketing pages where design competes with study work.
- **Don't** use decorative motion, gradient text, or effects that reduce readability.
- **Don't** add ambient card shadows to ordinary article, quiz, or sidebar surfaces.
- **Don't** use side-stripe borders greater than 1px as the main accent on future callout/card designs; use structured labels, full borders, or tonal headers instead.
- **Don't** let Instrument Serif leak into dense controls, tables, labels, or status UI.
- **Don't** make light mode a plain inverted copy of dark mode. It needs purpose-built reading tokens, low-glare surfaces, and preserved semantic state colors.
- **Don't** use pure white (`#ffffff`) or pure black (`#000000`) as theme primitives.
