# Faculty of Science Virtual Lab

A bilingual English/Arabic biology teaching lab for Faculty of Science students. The microscope uses locally bundled specimen photographs, shown directly inside the microscope field. The app is a client-side React + TypeScript single-page application; it has no account system, backend, database, or provider keys. Favorites and the practical notebook are saved only in the current browser's local storage.

## Run locally

Requirements: Node.js 22 LTS and pnpm 11.25.0 (the package manager version is pinned in `package.json`).

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Vite serves the app on `http://localhost:3000`. Create an optimized static build with `corepack pnpm run build`; the output is in `dist/`.

## Learning modules

- **Microscope** (`/microscope`): browse 35 built-in photomicrographs across blood cells, histology, microorganisms, freshwater life, and plant slides. Search the collection, save favorites in this browser, or use a blind identification challenge. The blood collection includes sickle-cell, target-cell, eosinophil, reticulocyte, and malaria films. A blood-stain bench previews Wright-Giemsa, Giemsa, new methylene blue, and brilliant cresyl blue color treatments; these are digital filters, not simulated chemical binding or new scientific evidence. The photos load from the local site bundle and appear directly in the microscope field. Objective, focus, illumination, and drag-to-move controls adjust the view. Zoom is illustrative and is not calibrated; selecting 100× displays a note about immersion oil in real microscopy. Photo credits and licenses are listed in `docs/specimen-photo-credits.md` and the microscope's source dialog.
- **Practical exams** (`/exams`): identify randomized specimens from a microscope field, compare two slides and record observations, answer stain-selection questions, order the general thin-film preparation workflow, and keep/export a browser-local notebook. The schema section links directly to the interactive diagram exams.
- **Scientific schemas** (`/schemas`): four collections—Zoology/Anatomy, Botany, Chemistry/Lab Apparatus, and Cell Biology—with a heart/circulation plate, generalized leaf section, introductory lab-apparatus plate, and typical animal-cell plate. Study mode connects interactive SVG pins and the structure index to bilingual names, functions, and exam notes. Exam mode hides labels and accepts either a structure click or a typed Arabic/English name, with immediate feedback.
- **Preferences**: Arabic/English locale and dark/light theme are switchable and stored locally in browser storage.

## Scientific use and limitations

This is an educational viewer, not a live feed from a microscope or a calibrated measurement system. The source photographs come from teaching and research collections; their stain, illumination, framing, and original magnification vary. On-screen objective and focus controls are visual aids. The photographs should not be used for diagnosis.

Each specimen includes an Academic References dialog. Scientific content and source metadata are centralized in `src/data/scientificData.ts` and `src/data/specimenMedia.ts`.

## Project map

```text
src/app/          Routes and persisted locale/theme preferences
src/components/   App shell, controls, reference dialog, logo mark
src/data/         Bilingual specimen/diagram records and source metadata
src/i18n/         Typed English/Arabic interface strings
src/microscope/   Canvas2D microscope field for bundled slide photographs
src/pages/        Landing, microscope, atlas, and diagram study/exam views
src/schemas/      SVG schema plates and interactive structure pins
public/           Static branding asset and route manifest
```

## Routes

- `/` — overview and learning pathways
- `/microscope` — microscope workspace
- `/exams` — practical exam room and lab notebook
- `/schemas` — schema atlas
- `/schemas/:diagramId` — schema study or exam view

`public/manus-routes.json` mirrors this route set for Manus Preview. There is no public deployment configured. A new GitHub repository has not been created or pushed; request confirmation of the owner, repository name, and visibility before doing so.
