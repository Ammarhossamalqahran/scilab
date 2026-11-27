# Specimen classification

Every one of the 996 specimens has exactly one subject: the `department` field in `src/data/scientificData.ts`. It drives the filter buttons in the microscope, flashcards and compare. Nothing was classified by looking at a photo. Each decision uses the specimen name and its Wikimedia Commons / Reischig source description.

## Counts

| Subject | Specimens |
| --- | ---: |
| Histology (tissues) | 248 |
| Hematology (blood cells) | 50 |
| Microbiology | 156 |
| Parasitology | 95 |
| Botany | 172 |
| Zoology | 112 |
| Aquatic life (freshwater) | 138 |
| Cell division and genetics | 25 |

Total: 996

Inside each subject the list is sorted alphabetically by specimen name in the current language, so versions of the same organism sit together.

## Rules used

1. **Parasitology**: the name says it is a parasite of humans or animals: parasitic protozoa and helminths (and their eggs, larvae and sections), blood films showing malaria or Babesia/Ehrlichia, and arthropod ectoparasites (lice, fleas, ticks, parasitic mites). Reference: CDC DPDx parasite index and organism pages (https://www.cdc.gov/dpdx/az.html, https://www.cdc.gov/dpdx/diagnosticprocedures/other/organisms.html, which lists ticks, lice, mites and fleas), Laboratory Identification of Arthropod Ectoparasites, Clin Microbiol Rev 2014 (https://journals.asm.org/doi/10.1128/cmr.00008-13), USDA ARS on Varroa as an ectoparasite of honey bees (https://www.ars.usda.gov/pacific-west-area/tucson-az/carl-hayden-bee-research-center/research/varroa/varroa-overview/), Merck Veterinary Manual and Iowa State CFSPH for animal mites.
2. Blood films with a parasite moved to Parasitology but are still offered as blood slides in the exam room blood-film preparation list.
3. **Aquatic life**: free-living protists, diatoms and cyanobacteria. These organisms already existed in both Microbiology and Aquatic life; the 10 that were in Microbiology moved so the same organism is always in one place.
4. Plant tissue (onion epidermis) was filed under Histology and moved to Botany.
5. Not parasites, so they stay in Zoology: mosquitoes and mosquito larvae (vectors, not parasites), spider, clover, gorse, grain, dust, soil, Christmas cactus and bee-nest mites (Commons describes the bee-nest one as an unidentified mite on a dead bee, not a parasite), and the booklouse (Psocoptera, free-living).

## Leftover that could not be verified (3, kept in Zoology)

- `nematode-under-the-microscope`: Commons says only "nematode under microscope", no species, so parasitic or free-living is unknown.
- `nematode-differential-interference-contrast`: same, no species given.
- `mite-acari-265-02`: Commons says only "Acari, total preparation", no species.

## Moved to Parasitology (all)

- `ascaris-egg-early-cell-division`
- `ascaris-female-section-200x`
- `ascaris-infertile-egg`
- `ascaris-larva-hatching`
- `ascaris-section`
- `babesia-canis-in-dog-red-blood-cells`
- `beef-tapeworm-taenia-saginata-scolex-and-neck`
- `bird-blood-smear-with-plasmodium-relictum`
- `bird-louse-265-05`
- `castor-bean-tick-248-14`
- `castor-bean-tick-250-16`
- `castor-bean-tick-265-28`
- `cat-fur-mite-cheyletiella-parasitivorax`
- `cattle-mange-mite-chorioptes-bovis`
- `coccidia-oocysts`
- `crab-louse-250-18`
- `crab-louse-251-23`
- `crab-louse-251-24`
- `demodex-canis-mite-400x`
- `dipylidium-caninum-egg-packet-400x`
- `ear-mite`
- `echinococcus-granulosus-protoscolex-with-hooks`
- `ehrlichia-and-babesia-in-a-dog-blood-film-giemsa`
- `embryonated-hookworm-egg`
- `entamoeba-histolytica-251-32`
- `fasciola-hepatica-and-dicrocoelium-eggs`
- `fasciola-miracidium`
- `female-human-head-louse`
- `fish-tapeworm-diphyllobothrium-latum-egg-with-operculum`
- `flea-251-01`
- `flea-ctenophthalmus-agyrtes`
- `freshwater-amphipod-hyalella-azteca-with-an-acanthocephalan-parasite`
- `giant-roundworm-ascaris-259-23`
- `giant-roundworm-ascaris-263-20`
- `giardia-intestinalis-259-17`
- `giardia-intestinalis-259-18`
- `giardia-lamblia-cyst-in-a-dog-faecal-smear-lugol-s-iodine`
- `guinea-pig-louse`
- `head-louse-250-17`
- `head-louse-251-27`
- `head-louse-251-28`
- `head-louse-egg-nit-on-a-hair`
- `head-of-an-adult-flea-ctenocephalides`
- `hookworm-ancylostoma-caninum-egg-40x`
- `hookworm-ancylostoma-caninum-egg-from-a-dog-fecal-sample`
- `hookworm-ancylostoma-duodenale-female`
- `hookworm-egg-stool-wet-mount`
- `hymenolepis-diminuta-egg-rat-tapeworm`
- `itch-mite-247-32a`
- `leishmania-in-a-skin-lesion-scraping`
- `leishmania-tropica-259-19`
- `leishmania-tropica-259-20`
- `liver-fluke-fasciola-egg`
- `malaria-smear`
- `nematode-heligmosomoides-polygyrus`
- `pinworm-egg-urine-microscopy`
- `pinworm-enterobius-vermicularis-eggs`
- `plasmodium-257-33`
- `plasmodium-257-34`
- `plasmodium-259-16`
- `plasmodium-falciparum-gametocyte-in-a-blood-smear`
- `plasmodium-falciparum-ring-forms-in-red-blood-cells`
- `plasmodium-falciparum-trophozoites`
- `poultry-red-mite-dermanyssus-gallinae`
- `rabbit-ear-mite-psoroptes-cuniculi`
- `strongyloides-stercoralis-larva-stool-wet-mount`
- `taenia-egg`
- `taenia-egg-in-a-faecal-smear-ziehl-neelsen`
- `tapeworm-26-2-14`
- `tapeworm-265-06`
- `tapeworm-265-07`
- `tapeworm-section`
- `thin-blood-smear-with-parasites`
- `toxascaris-egg-from-a-dog-bright-field`
- `toxascaris-leonina-egg`
- `toxocara-canis-egg`
- `toxocara-cati-egg`
- `toxocara-egg-with-a-developed-larva`
- `trematode-cercaria-259-21`
- `trematode-cercaria-259-22`
- `trematode-fluke-265-18`
- `trematode-fluke-265-32`
- `trichinella-in-muscle-265-16`
- `trichinella-spiralis-40x-objective`
- `trichomonas-251-29`
- `trichomonas-vaginalis-gram-stain`
- `trichuris-whipworm-egg`
- `tritrichomonas-foetus-259-26`
- `tritrichomonas-foetus-259-27`
- `trypanosoma-248-09`
- `trypanosoma-251-30`
- `trypanosoma-259-24`
- `varroa-mites`
- `whipworm-egg`
- `whipworm-trichuris-trichiura-egg`

## Moved to Aquatic life

- `amoeba`
- `aphanocapsa-cyanobacteria`
- `cyanobacteria-blue-green-algae-from-a-freshwater-bloom`
- `diatoms`
- `euglena`
- `paramecium`
- `paramecium-bursaria-2`
- `paramecium-bursaria-400x`
- `paramecium-caudatum-ehrenberg`
- `pond-water`
