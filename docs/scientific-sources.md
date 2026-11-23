# Scientific content sources

The microscope page displays locally bundled microscope photographs. It does not draw simulated cells or show reagent reactions. Photo authors, licenses, original source pages, and crop notes are in [specimen-photo-credits.md](specimen-photo-credits.md). The bilingual specimen descriptions and academic references used in the app are in `src/data/scientificData.ts`.

The objective buttons, focus controls, and illumination slider adjust the photograph on screen. They are visual teaching controls: they do not change the original sample, provide calibrated measurements, or represent a live microscope feed.

The older `/schemas` study route still contains labeled vector diagrams. Its records and references are in `src/data/diagramData.ts`; those diagrams are separate from the microscope photographs.
