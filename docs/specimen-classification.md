# Specimen classification

Every one of the 996 specimens has exactly one subject. The subject is the `department` field in `src/data/scientificData.ts`. It decides the filter chips in the microscope and flashcards.

Rules: the subject was kept as it was unless the specimen name itself says it is a parasitic protozoan or helminth (Plasmodium excluded when it is a blood smear, see below). Those 62 moved to Parasitology. One plant tissue slide (onion epidermis) was moved from Histology to Botany. Nothing else was changed, and nothing was guessed from a photo.

## Counts

| Subject | Specimens |
| --- | ---: |
| Histology (tissues) | 248 |
| Hematology (blood cells) | 58 |
| Microbiology | 166 |
| Parasitology | 62 |
| Botany | 172 |
| Zoology | 137 |
| Aquatic life (freshwater) | 128 |
| Cell division and genetics | 25 |

Total: 996

Inside each subject the list is sorted alphabetically by the specimen name in the current language, so versions of the same organism sit together.

## Uncertain, left where they were (needs a lecturer or your decision)

| Id | Current subject | Name | Why |
| --- | --- | --- | --- |
| `malaria-smear` | hematology | Plasmodium falciparum · gametocyte | parasite seen in blood, kept in Hematology |
| `onion-epidermis` | botany | Onion bulb epidermis | moved by hand: plant tissue, was filed under Histology |
| `pond-water` | microbiology | Pond-water drop | free-living or mixed microbe/protist, could also be Aquatic life |
| `paramecium` | microbiology | Paramecium | free-living or mixed microbe/protist, could also be Aquatic life |
| `euglena` | microbiology | Euglena | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatoms` | microbiology | Diatoms from sea ice | free-living or mixed microbe/protist, could also be Aquatic life |
| `amoeba` | microbiology | Amoeba proteus | free-living or mixed microbe/protist, could also be Aquatic life |
| `mite-acari-265-02` | zoology | Mite (Acari) · Total preparation | arthropod ectoparasite or pest, kept in Zoology |
| `aedes-mosquito-247-27a` | zoology | Aedes mosquito · With biting lice | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `castor-bean-tick-248-14` | zoology | Castor bean tick · Total preparation - larva and egg | arthropod ectoparasite or pest, kept in Zoology |
| `house-mosquito-larva-247-26a` | zoology | House mosquito larva · Total preparation; larva | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `crab-louse-250-18` | zoology | Crab louse · Male adult, from a human host | arthropod ectoparasite or pest, kept in Zoology |
| `cyanobacteria-248-07` | aquatic-life | Cyanobacteria · Mixture; native preparation; green filter | free-living or mixed microbe/protist, could also be Aquatic life |
| `daphnia-water-flea-248-29` | aquatic-life | Daphnia (water flea) · Total preparation | arthropod ectoparasite or pest, kept in Zoology |
| `diatomaceous-earth-251-10` | aquatic-life | Diatomaceous earth · Diatomaceous earth | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatoms-248-05` | aquatic-life | Diatoms · Various diatoms | free-living or mixed microbe/protist, could also be Aquatic life |
| `euglena-250-19` | aquatic-life | Euglena · Euglena sp. (protozoan) | free-living or mixed microbe/protist, could also be Aquatic life |
| `flea-251-01` | zoology | Flea · Aphaniptera; total preparation | arthropod ectoparasite or pest, kept in Zoology |
| `head-louse-250-17` | zoology | Head louse · Adult, from a human host | arthropod ectoparasite or pest, kept in Zoology |
| `itch-mite-247-32a` | zoology | Itch mite | arthropod ectoparasite or pest, kept in Zoology |
| `bird-louse-265-05` | zoology | Bird louse · Columbicola columbae (Mallophaga) | arthropod ectoparasite or pest, kept in Zoology |
| `paramecium-caudatum-248-06` | aquatic-life | Paramecium caudatum · Native preparation | free-living or mixed microbe/protist, could also be Aquatic life |
| `onion-epidermis-248-04` | botany | Onion epidermis · Epidermis of onion bulb; dry | other |
| `psocopteran-booklouse-265-04` | zoology | Psocopteran (booklouse) · specimen of Psocoptera | arthropod ectoparasite or pest, kept in Zoology |
| `red-spider-mite-265-01` | zoology | Red spider mite · Total preparation | arthropod ectoparasite or pest, kept in Zoology |
| `aedes-mosquito-257-00k` | zoology | Aedes mosquito · With biting lice | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `castor-bean-tick-250-16` | zoology | Castor bean tick · Adult | arthropod ectoparasite or pest, kept in Zoology |
| `house-mosquito-larva-257-00f` | zoology | House mosquito larva · Total preparation; larva | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `crab-louse-251-23` | zoology | Crab louse · Female, from a human host | arthropod ectoparasite or pest, kept in Zoology |
| `cyanobacteria-248-08` | aquatic-life | Cyanobacteria · Mixture; native preparation; green filter | free-living or mixed microbe/protist, could also be Aquatic life |
| `daphnia-water-flea-250-15` | aquatic-life | Daphnia (water flea) · Total preparation | arthropod ectoparasite or pest, kept in Zoology |
| `euglena-947-12` | aquatic-life | Euglena | free-living or mixed microbe/protist, could also be Aquatic life |
| `head-louse-251-27` | zoology | Head louse · Adult and egg, from a human host | arthropod ectoparasite or pest, kept in Zoology |
| `paramecium-caudatum-250-20` | aquatic-life | Paramecium caudatum · Cultured | free-living or mixed microbe/protist, could also be Aquatic life |
| `onion-epidermis-255-19` | botany | Onion epidermis · Epidermis of onion bulb ; wet | other |
| `castor-bean-tick-265-28` | zoology | Castor bean tick · Total preparation - larva and part of an egg | arthropod ectoparasite or pest, kept in Zoology |
| `crab-louse-251-24` | zoology | Crab louse · Female adult and eggs, from a human host | arthropod ectoparasite or pest, kept in Zoology |
| `cyanobacteria-250-22` | aquatic-life | Cyanobacteria · Native preparation | free-living or mixed microbe/protist, could also be Aquatic life |
| `head-louse-251-28` | zoology | Head louse · Larva and eggs, from a human host | arthropod ectoparasite or pest, kept in Zoology |
| `onion-epidermis-255-20` | botany | Onion epidermis · Epidermis of onion bulb; dry | other |
| `staphylococcus-gram-stain-with-scale-ticks` | microbiology | Staphylococcus (Gram stain, with scale ticks) | arthropod ectoparasite or pest, kept in Zoology |
| `cat-fur-mite-cheyletiella-parasitivorax` | zoology | Cat-fur mite (Cheyletiella parasitivorax) | arthropod ectoparasite or pest, kept in Zoology |
| `cattle-mange-mite-chorioptes-bovis` | zoology | Cattle mange mite (Chorioptes bovis) | arthropod ectoparasite or pest, kept in Zoology |
| `poultry-red-mite-dermanyssus-gallinae` | zoology | Poultry red mite (Dermanyssus gallinae) | arthropod ectoparasite or pest, kept in Zoology |
| `cyanobacteria-blue-green-algae-from-a-freshwater-bloom` | microbiology | Cyanobacteria (blue-green algae) from a freshwater bloom | free-living or mixed microbe/protist, could also be Aquatic life |
| `ehrlichia-and-babesia-in-a-dog-blood-film-giemsa` | hematology | Ehrlichia and Babesia in a dog blood film (Giemsa) | parasite seen in blood, kept in Hematology |
| `diatom-chain-guinardia-sp` | aquatic-life | Diatom chain: Guinardia sp. | free-living or mixed microbe/protist, could also be Aquatic life |
| `freshwater-amphipod-hyalella-azteca-with-an-acanthocephalan-parasite` | zoology | Freshwater amphipod Hyalella azteca with an acanthocephalan parasite | parasite of a crustacean, kept in Zoology |
| `grain-mite-glycyphagus-sp` | zoology | Grain mite (Glycyphagus sp.) | arthropod ectoparasite or pest, kept in Zoology |
| `diatom-eucampia-zodiacus-light-and-electron-microscopy` | aquatic-life | Diatom Eucampia zodiacus, light and electron microscopy | free-living or mixed microbe/protist, could also be Aquatic life |
| `paramecium-forming-a-cyst-safranin-stain` | aquatic-life | Paramecium forming a cyst, safranin stain | free-living or mixed microbe/protist, could also be Aquatic life |
| `cyanobacterium-anabaena-circinalis` | aquatic-life | Cyanobacterium Anabaena circinalis | free-living or mixed microbe/protist, could also be Aquatic life |
| `cyanobacterium-microcystis-stagnalis` | aquatic-life | Cyanobacterium Microcystis stagnalis | free-living or mixed microbe/protist, could also be Aquatic life |
| `navicula-diatoms-polarised-light-400x` | aquatic-life | Navicula diatoms, polarised light, 400x | free-living or mixed microbe/protist, could also be Aquatic life |
| `cyanobacterium-oscillatoria-sp` | aquatic-life | Cyanobacterium Oscillatoria sp. | free-living or mixed microbe/protist, could also be Aquatic life |
| `paramecium-bursaria` | aquatic-life | Paramecium bursaria | free-living or mixed microbe/protist, could also be Aquatic life |
| `amoeba-of-the-genus-cochliopodium-phase-contrast` | aquatic-life | Amoeba of the genus Cochliopodium, phase contrast | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatomaceous-earth-phase-contrast` | aquatic-life | Diatomaceous earth, phase contrast | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatoms-under-fluorescent-light` | aquatic-life | Diatoms under fluorescent light | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatoms-among-debris-light-microscope-40x` | aquatic-life | Diatoms among debris, light microscope, 40x | free-living or mixed microbe/protist, could also be Aquatic life |
| `nematode-under-the-microscope` | zoology | Nematode under the microscope | unspecified nematode, kept in Zoology |
| `nematode-differential-interference-contrast` | zoology | Nematode, differential interference contrast | unspecified nematode, kept in Zoology |
| `cyanobacteria-light-microscope-40x` | aquatic-life | Cyanobacteria, light microscope, 40x | free-living or mixed microbe/protist, could also be Aquatic life |
| `cyanobacterium-dolichospermum` | aquatic-life | Cyanobacterium Dolichospermum | free-living or mixed microbe/protist, could also be Aquatic life |
| `cyanobacterium-microcystis-aeruginosa-colonies` | aquatic-life | Cyanobacterium Microcystis aeruginosa colonies | free-living or mixed microbe/protist, could also be Aquatic life |
| `rotifer-and-diatoms-from-a-pond` | aquatic-life | Rotifer and diatoms from a pond | free-living or mixed microbe/protist, could also be Aquatic life |
| `christmas-cactus-mite` | zoology | Christmas cactus mite | arthropod ectoparasite or pest, kept in Zoology |
| `mosquito-wing-under-the-microscope` | zoology | Mosquito wing under the microscope | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `paramecium-caudatum-light-microscope` | aquatic-life | Paramecium caudatum, light microscope | free-living or mixed microbe/protist, could also be Aquatic life |
| `euglena-with-scale` | aquatic-life | Euglena with scale | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatoms-light-microscope` | aquatic-life | Diatoms, light microscope | free-living or mixed microbe/protist, could also be Aquatic life |
| `mixed-diatoms-40x` | aquatic-life | Mixed diatoms, 40x | free-living or mixed microbe/protist, could also be Aquatic life |
| `daphnia-water-flea-light-microscope` | aquatic-life | Daphnia (water flea), light microscope | arthropod ectoparasite or pest, kept in Zoology |
| `head-of-an-adult-flea-ctenocephalides` | zoology | Head of an adult flea (Ctenocephalides) | arthropod ectoparasite or pest, kept in Zoology |
| `flea-ctenophthalmus-agyrtes` | zoology | Flea Ctenophthalmus agyrtes | arthropod ectoparasite or pest, kept in Zoology |
| `mite-from-a-honey-bee-nest` | zoology | Mite from a honey bee nest | arthropod ectoparasite or pest, kept in Zoology |
| `clover-mite-bryobia-praetiosa` | zoology | Clover mite (Bryobia praetiosa) | arthropod ectoparasite or pest, kept in Zoology |
| `demodex-canis-mite-400x` | zoology | Demodex canis mite, 400x | arthropod ectoparasite or pest, kept in Zoology |
| `dust-mite-under-the-microscope` | zoology | Dust mite under the microscope | arthropod ectoparasite or pest, kept in Zoology |
| `gorse-spider-mite` | zoology | Gorse spider mite | arthropod ectoparasite or pest, kept in Zoology |
| `house-dust-mite-dermatophagoides-pteronyssinus` | zoology | House dust mite (Dermatophagoides pteronyssinus) | arthropod ectoparasite or pest, kept in Zoology |
| `varroa-mites` | zoology | Varroa mites | arthropod ectoparasite or pest, kept in Zoology |
| `soil-mite-differential-interference-contrast` | zoology | Soil mite, differential interference contrast | arthropod ectoparasite or pest, kept in Zoology |
| `babesia-canis-in-dog-red-blood-cells` | hematology | Babesia canis in dog red blood cells | parasite seen in blood, kept in Hematology |
| `female-human-head-louse` | zoology | Female human head louse | arthropod ectoparasite or pest, kept in Zoology |
| `head-louse-egg-nit-on-a-hair` | zoology | Head louse egg (nit) on a hair | arthropod ectoparasite or pest, kept in Zoology |
| `bird-blood-smear-with-plasmodium-relictum` | hematology | Bird blood smear with Plasmodium relictum | parasite seen in blood, kept in Hematology |
| `plasmodium-falciparum-ring-forms-in-red-blood-cells` | hematology | Plasmodium falciparum ring forms in red blood cells | parasite seen in blood, kept in Hematology |
| `plasmodium-falciparum-gametocyte-in-a-blood-smear` | hematology | Plasmodium falciparum gametocyte in a blood smear | parasite seen in blood, kept in Hematology |
| `plasmodium-falciparum-trophozoites` | hematology | Plasmodium falciparum trophozoites | parasite seen in blood, kept in Hematology |
| `onion-epidermis-cells-40x` | botany | Onion epidermis cells, 40x | other |
| `onion-epidermis-deplasmolysis` | botany | Onion epidermis, deplasmolysis | other |
| `mosquito-larva-under-the-microscope` | zoology | Mosquito larva under the microscope | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `mosquito-larva-dark-field` | zoology | Mosquito larva, dark field | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `blood-sucking-mosquito-larva-dark-field-and-polarisation` | zoology | Blood-sucking mosquito larva, dark field and polarisation | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `thin-blood-smear-with-parasites` | hematology | Thin blood smear with parasites | parasite seen in blood, kept in Hematology |
| `mosquito-whole-mount` | zoology | Mosquito whole mount | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `plasmolysis-in-red-onion-epidermis` | botany | Plasmolysis in red onion epidermis | other |
| `paramecium-bursaria-2` | microbiology | Paramecium bursaria | free-living or mixed microbe/protist, could also be Aquatic life |
| `aphanocapsa-cyanobacteria` | microbiology | Aphanocapsa cyanobacteria | free-living or mixed microbe/protist, could also be Aquatic life |
| `onion-epidermis-cells` | botany | Onion epidermis cells | other |
| `ear-mite` | zoology | Ear mite | arthropod ectoparasite or pest, kept in Zoology |
| `grain-mite` | zoology | Grain mite | arthropod ectoparasite or pest, kept in Zoology |
| `guinea-pig-louse` | zoology | Guinea pig louse | arthropod ectoparasite or pest, kept in Zoology |
| `paramecium-caudatum-ehrenberg` | microbiology | Paramecium caudatum Ehrenberg | free-living or mixed microbe/protist, could also be Aquatic life |
| `rabbit-ear-mite-psoroptes-cuniculi` | zoology | Rabbit ear mite Psoroptes cuniculi | arthropod ectoparasite or pest, kept in Zoology |
| `snowella-cyanobacteria-colony` | aquatic-life | Snowella cyanobacteria colony | free-living or mixed microbe/protist, could also be Aquatic life |
| `daphnia-water-fleas` | aquatic-life | Daphnia water fleas | arthropod ectoparasite or pest, kept in Zoology |
| `cylindrotheca-closterium-diatom` | aquatic-life | Cylindrotheca closterium diatom | free-living or mixed microbe/protist, could also be Aquatic life |
| `woronichinia-cyanobacteria` | aquatic-life | Woronichinia cyanobacteria | free-living or mixed microbe/protist, could also be Aquatic life |
| `hemiaulus-membranaceus-diatom-chain` | aquatic-life | Hemiaulus membranaceus diatom chain | free-living or mixed microbe/protist, could also be Aquatic life |
| `hemiaulus-membranaceus-diatom-cell` | aquatic-life | Hemiaulus membranaceus diatom cell | free-living or mixed microbe/protist, could also be Aquatic life |
| `climacodium-frauenfeldianum-diatom` | aquatic-life | Climacodium frauenfeldianum diatom | free-living or mixed microbe/protist, could also be Aquatic life |
| `licmophora-diatoms-1` | aquatic-life | Licmophora diatoms 1 | free-living or mixed microbe/protist, could also be Aquatic life |
| `licmophora-diatoms-2` | aquatic-life | Licmophora diatoms 2 | free-living or mixed microbe/protist, could also be Aquatic life |
| `mosquito-larva-dark-field-2` | zoology | Mosquito larva dark field | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `pleurosigma-angulatum-diatoms` | aquatic-life | Pleurosigma angulatum diatoms | free-living or mixed microbe/protist, could also be Aquatic life |
| `paramecium-and-litonotus-dark-field` | aquatic-life | Paramecium and Litonotus dark field | free-living or mixed microbe/protist, could also be Aquatic life |
| `diatom-in-rheinberg-illumination` | aquatic-life | Diatom in Rheinberg illumination | free-living or mixed microbe/protist, could also be Aquatic life |
| `cyanobacteria-colony` | aquatic-life | Cyanobacteria colony | free-living or mixed microbe/protist, could also be Aquatic life |
| `bloodsucking-mosquito-larva` | zoology | Bloodsucking mosquito larva | mosquito stage (vector, not a parasite itself), kept in Zoology |
| `paramecium-bursaria-400x` | microbiology | Paramecium bursaria 400x | free-living or mixed microbe/protist, could also be Aquatic life |

## Moved to Parasitology

- `ascaris-egg-early-cell-division`
- `ascaris-female-section-200x`
- `ascaris-infertile-egg`
- `ascaris-larva-hatching`
- `ascaris-section`
- `beef-tapeworm-taenia-saginata-scolex-and-neck`
- `coccidia-oocysts`
- `dipylidium-caninum-egg-packet-400x`
- `echinococcus-granulosus-protoscolex-with-hooks`
- `embryonated-hookworm-egg`
- `entamoeba-histolytica-251-32`
- `fasciola-hepatica-and-dicrocoelium-eggs`
- `fasciola-miracidium`
- `fish-tapeworm-diphyllobothrium-latum-egg-with-operculum`
- `giant-roundworm-ascaris-259-23`
- `giant-roundworm-ascaris-263-20`
- `giardia-intestinalis-259-17`
- `giardia-intestinalis-259-18`
- `giardia-lamblia-cyst-in-a-dog-faecal-smear-lugol-s-iodine`
- `hookworm-ancylostoma-caninum-egg-40x`
- `hookworm-ancylostoma-caninum-egg-from-a-dog-fecal-sample`
- `hookworm-ancylostoma-duodenale-female`
- `hookworm-egg-stool-wet-mount`
- `hymenolepis-diminuta-egg-rat-tapeworm`
- `leishmania-in-a-skin-lesion-scraping`
- `leishmania-tropica-259-19`
- `leishmania-tropica-259-20`
- `liver-fluke-fasciola-egg`
- `nematode-heligmosomoides-polygyrus`
- `pinworm-egg-urine-microscopy`
- `pinworm-enterobius-vermicularis-eggs`
- `plasmodium-257-33`
- `plasmodium-257-34`
- `plasmodium-259-16`
- `strongyloides-stercoralis-larva-stool-wet-mount`
- `taenia-egg`
- `taenia-egg-in-a-faecal-smear-ziehl-neelsen`
- `tapeworm-26-2-14`
- `tapeworm-265-06`
- `tapeworm-265-07`
- `tapeworm-section`
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
- `whipworm-egg`
- `whipworm-trichuris-trichiura-egg`
