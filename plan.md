# Faculty of Science Virtual Lab — Approved Plan

## Scope and implementation

Build the approved client-side, responsive React/Vite + TypeScript application for Faculty of Science students. No account system, server, or database is needed. Use a Canvas2D rendering engine for an animated educational microscope rather than a static specimen image; use React controls around that rendering surface. Use SVG for the labeled scientific schemas and quiz targets. Add Tailwind CSS for the responsive interface and Framer Motion for restrained view transitions. Arabic/English strings live in a typed locale dictionary, and Arabic mode sets RTL direction. Theme choice is a persisted light/dark preference.

The landing view branches into Virtual Microscope and Scientific Schemas. Microscope navigation exposes Hematology & Blood Analysis, Histology, Microbiology & Parasitology, and Botany & Plant Anatomy. The hematology study view supports the eight listed ABO/Rh labels (A+, A−, B+, B−, AB+, AB−, O+, O−), normal smear, and Anti-A, Anti-B, and Anti-D reagent demonstrations. A deterministic procedural animation depicts red cells, selected white-cell classes, platelets, and fluid drift. Reagent results are driven by the verified ABO/Rh antigen mapping, not random outcomes. The user can operate 4×, 10×, 40×, and 100× Oil Immersion objectives, coarse/fine focus, stage X/Y, condenser intensity, and the micrometer grid. The rendering aims for a detailed educational simulation, not clinical image interpretation or diagnostic accuracy. Each displayed specimen provides a Scientific Reference dialog and a clear simulation/learning-use note.

The schema library has Zoology/Anatomy, Botany, Chemistry/Lab Apparatus, and Cell Biology categories. Its initial release includes a curated set of representative, separately sourced diagrams, not a complete atlas. Each diagram has SVG structures with English/Arabic labels, functions, and exam notes. Study mode reveals information on hover/click. Exam mode hides labels, accepts a structure click or typed name, and grades immediately. Scientific text and structures are verified against academic or institutional references before inclusion; a source is attached to every specimen/diagram record.

## Technical approach and serving

Use Vite SPA routes/views for the landing, microscope, schema browser, and diagram study/exam experience. Keep source data separate from presentation: typed specimen and reference records, locale dictionaries, diagram definitions, and microscope rendering/control logic occupy dedicated modules. The Canvas engine uses `requestAnimationFrame`, device-pixel-ratio-aware sizing, seeded cell placement, and a single animation loop that responds to selected specimen, objective, focus, lighting, grid, reagent, and stage offset. SVG diagrams use stable structure IDs to connect pins, details, and quiz grading. Respect reduced-motion settings and provide keyboard-focusable controls.

This is a static client-only web app served by the Vite development server on the project's configured port 3000. It needs no managed server, database, Redis, external API key, or private credentials. `public/manus-routes.json` declares the route set before the development server starts. Install dependencies with the pinned pnpm lockfile, then run the production build to emit static files to `dist`. No public deployment is included in this approval.

## Project structure

- `src/app/` — app shell, route/view state, theme, language and navigation.
- `src/components/` — reusable controls, specimen selector, reference dialog, and accessible UI primitives.
- `src/microscope/` — Canvas renderer, cell generation, animation loop, focus/magnification model, stage/light/grid and reagent state.
- `src/schemas/` — SVG diagram renderer, structure interaction, study/exam controls and grading.
- `src/data/` — typed specimen, diagram and scientific-reference content.
- `src/i18n/` — English/Arabic strings and localized scientific names.
- `public/` — static assets and `manus-routes.json`.
- Root config — Vite, TypeScript, Tailwind, package manager/lockfile, project configuration and README.

## Design direction

Three tail-probability options: Swiss scientific instrument panel (0.08); biophilic editorial atlas (0.03); academic print-shop brutalism (0.01). Selected: **Swiss scientific instrument panel**.

- **Design Movement:** Swiss modernist information design applied to a contemporary optical-instrument console.
- **Core Principles:** legible hierarchy; precise, tactile controls; scientific restraint; equally considered RTL/LTR layouts.
- **Color Philosophy:** warm specimen-paper surfaces and ink-dark panels anchor the lab; a bright mineral-cyan accent signals active optical controls, while limited coral and amber distinguish biological structures and reagents.
- **Layout Paradigm:** an offset laboratory bench: a compact vertical navigation rail and specimen ledger frame one large microscope stage or SVG plate, with controls arranged around the working surface rather than in generic cards.
- **Signature Elements:** a fine reticle motif; hairline measurement ticks; specimen-index tabs with bilingual micro-labels.
- **Interaction Philosophy:** controls respond like measured instrument adjustments; direct manipulation updates the specimen immediately, while accessible sliders and buttons provide equivalent inputs.
- **Animation:** slow, seeded cell drift and subtle focus settling; restrained transitions between modules; no decorative perpetual motion outside the specimen stage; honor reduced motion.
- **Typography System:** IBM Plex Sans for interface and readable Arabic fallback with Noto Sans Arabic; IBM Plex Mono for measurements, specimen IDs, and objective markings. Use clear display, section, and micro-label scales with robust Arabic line height.
- **Brand Essence:** a reliable, hands-on visual science lab for Faculty of Science learners; precise, curious, approachable.
- **Brand Voice:** concise, instructional, and evidence-aware. Examples: “Adjust focus to resolve the field.” / “اختر العدسة ثم اضبط البؤرة.”
- **Wordmark & Logo:** compact “FS / LAB” optical mark with a reticle integrated into the letterform, drawn as a simple vector mark rather than plain default text.
- **Signature Brand Color:** mineral cyan, reserved for active instrument states and selection markers.

## Source basis to extend during implementation

Initial research found academic source records for ABO antigen/antibody agglutination, Rh D typing, blood smear elements, and leukocyte/platelet structure. The OpenStax leukocyte and platelet chapter was directly readable. NCBI source pages returned an access-check page in the current fetch path, so claims must be cross-verified from accessible sources before entering the app. Initial source candidates:

- NCBI Bookshelf, *The ABO blood group*: https://www.ncbi.nlm.nih.gov/books/NBK2267/
- Li et al., *Blood Group Testing*, PMC (2022): https://pmc.ncbi.nlm.nih.gov/articles/PMC8873177/
- OpenStax, *Anatomy and Physiology 2e*, “Leukocytes and Platelets”: https://openstax.org/books/anatomy-and-physiology-2e/pages/18-4-leukocytes-and-platelets
- NCBI Bookshelf, *Peripheral Blood Smear*: https://www.ncbi.nlm.nih.gov/books/NBK263/

## Build and delivery workflow

1. Preserve this plan and create `TODO.md` with the full product acceptance criteria before code/configuration changes.
2. Confirm the host-managed TypeScript diagnostics registration; install the project dependencies using a pinned package manager and lockfile.
3. Verify the scientific facts for each initially included specimen/diagram and attach source metadata to each record before writing its scientific labels or reaction outcomes.
4. Implement the responsive bilingual shell, microscope interaction, specimen references, schema viewer, and quiz flows.
5. Run the production build, use code diagnostics, and fix any actionable issues. Confirm the route manifest is served as JSON.
6. Prepare README and `.gitignore`. Do not publish the website or create/push a new GitHub repository until the user confirms the exact repository/visibility details.
