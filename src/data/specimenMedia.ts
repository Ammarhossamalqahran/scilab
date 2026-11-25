export type SpecimenMedia = {
  src: string;
  title: string;
  author: string;
  license: string;
  sourceUrl: string;
  adaptation?: string;
};

// Bundled photographs keep specimen viewing inside the lab. Credits and license
// links remain available from the microscope page without loading remote media.
export const specimenMedia: Record<string, SpecimenMedia> = {
  'blood-smear': {
    src: '/specimens/blood-smear.webp', title: 'Peripheral blood smear.jpg', author: 'Microrao', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Peripheral_blood_smear.jpg',
    adaptation: 'Captured from the full-size source image; surrounding browser margins are cropped.',
  },
  'sickle-cell-smear': {
    src: '/specimens/sickle-cell-smear.webp', title: 'Sickle cells in blood.jpg', author: 'Dr Graham Beards', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sickle_cells_in_blood.jpg',
  },
  'target-cells': {
    src: '/specimens/target-cells.webp', title: 'Target cells.jpg', author: 'Prof. Osaro Erhabor', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Target_cells.jpg',
    adaptation: 'Cropped to remove the source scale annotation, which was mislabelled.',
  },
  'eosinophil-smear': {
    src: '/specimens/eosinophil-smear.webp', title: 'Eosinophil blood smear.JPG', author: 'Bobjgalindo', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eosinophil_blood_smear.JPG',
  },
  'reticulocyte-smear': {
    src: '/specimens/reticulocyte-smear.webp', title: 'Reticulocytes Human Blood Supravital Stain.jpg', author: 'Ed Uthman, MD', license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reticulocytes_Human_Blood_Supravital_Stain.jpg',
  },
  'malaria-smear': {
    src: '/specimens/malaria-smear.webp', title: 'Plasmodium falciparum malaria, 1000x.jpg', author: 'Department of Pathology, Calicut Medical College', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_malaria,_1000x.jpg',
  },
  'onion-epidermis': {
    src: '/specimens/onion-epidermis.webp', title: 'Onion epidermis high power.jpg', author: 'Mccloughlin', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Onion_epidermis_high_power.jpg',
  },
  'cheek-cells': {
    src: '/specimens/cheek-cells.webp', title: 'Microscopic Image of Human Cheek Cells.jpg', author: 'Aholderfield', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microscopic_Image_of_Human_Cheek_Cells.jpg',
  },
  'skeletal-muscle': {
    src: '/specimens/skeletal-muscle.webp', title: 'Skeletal Muscle Tissue.jpg', author: 'Community College Bioscience', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Skeletal_Muscle_Tissue.jpg',
  },
  'budding-yeast': {
    src: '/specimens/yeast.webp', title: 'Yeast Cells in Wet Mount Microscopy of Culture.jpg', author: 'Ajay Kumar Chaurasiya', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yeast_Cells_in_Wet_Mount_Microscopy_of_Culture.jpg',
  },
  'bacteria-morphology': {
    src: '/specimens/gram-stain.webp', title: 'Gram stain 01.jpg', author: 'Y tambe', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gram_stain_01.jpg',
  },
  'pond-water': {
    src: '/specimens/pond-water.webp', title: 'Pond Water Under the Microscope.jpg', author: 'syed sajidul islam', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pond_Water_Under_the_Microscope.jpg',
    adaptation: 'Cropped to the original eyepiece field; part of the dark microscope frame remains visible.',
  },
  'dicot-leaf': {
    src: '/specimens/lemon-leaf-cross-section.webp', title: 'Limonero-al-microscopio2.jpg', author: 'Luke29', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Limonero-al-microscopio2.jpg',
    adaptation: 'Cropped to the original eyepiece field; part of the dark microscope frame remains visible.',
  },
  'leaf-stomata': {
    src: '/specimens/leaf-stomata.webp', title: 'Leaf epithelium, stomata and guard cells.jpg', author: 'Emilio Ermini', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Leaf_epithelium,_stomata_and_guard_cells.jpg',
  },
  'onion-root-tip': {
    src: '/specimens/onion-root-tip-mitosis.webp', title: 'Onion Root Mitosis.jpg', author: 'Johnathan Gutierrez', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Onion_Root_Mitosis.jpg',
  },
  'pollen-grains': {
    src: '/specimens/pollen.webp', title: 'Pollen - Dark-field microscopy.jpg', author: 'Juan Carlos Fonseca Mata', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pollen_-_Dark-field_microscopy.jpg',
  },
  paramecium: {
    src: '/specimens/paramecium.webp', title: 'Paramecium.jpg', author: 'Barfooz', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paramecium.jpg',
  },
  euglena: {
    src: '/specimens/euglena.webp', title: 'Euglena sp (26 2 95).jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Euglena_sp_(26_2_95).jpg',
  },
  daphnia: {
    src: '/specimens/daphnia.webp', title: 'Daphnia micrograph. Red x40.jpg', author: 'Kamil Kulawik', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Daphnia_micrograph._Red_x40.jpg',
    adaptation: 'Cropped to remove the source scale annotation.',
  },
  hydra: {
    src: '/specimens/hydra.webp', title: 'Hydra vulgaris micrograph x100.jpg', author: 'Kamil Kulawik', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hydra_vulgaris_micrograph_x100.jpg',
  },
  diatoms: {
    src: '/specimens/diatoms.webp', title: 'Diatoms through the microscope.jpg', author: 'Prof. Gordon T. Taylor · NOAA Corps Collection', license: 'Public domain (US NOAA)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Diatoms_through_the_microscope.jpg',
  },
  spirogyra: {
    src: '/specimens/spirogyra.webp', title: 'Spirogyra Under Light Microscope 40 X Mag.jpg', author: 'Iceclanl', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spirogyra_Under_Light_Microscope_40_X_Mag.jpg',
    adaptation: 'Cropped to the filament field; source scale and caption are removed.',
  },
  'fern-sporangium': {
    src: '/specimens/fern-spores.webp', title: 'Sporangium (255 33) Male fern (Dryopteris filix-mas); total preparation.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sporangium_(255_33)_Male_fern_(Dryopteris_filix-mas);_total_preparation.jpg',
  },
  'compact-bone': {
    src: '/specimens/compact-bone.webp', title: 'Bone (247 29A) Human bone cross-section.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bone_(247_29A)_Human_bone_cross-section.jpg',
    adaptation: 'Downscaled for web display; bright-field photomicrograph of a human bone cross-section.',
  },
  fibrocartilage: {
    src: '/specimens/fibrocartilage.webp', title: 'Microscopic Image of Mammal Fibrocartilage Tissue.jpg', author: 'Magda Yurchishin', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microscopic_Image_of_Mammal_Fibrocartilage_Tissue.jpg',
  },
  'cardiac-muscle': {
    src: '/specimens/cardiac-muscle.webp', title: 'Muscle Tissue Cardiac Muscle (27187637147).jpg', author: 'Berkshire Community College Bioscience Image Library', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Cardiac_Muscle_(27187637147).jpg',
  },
  amoeba: {
    src: '/specimens/amoeba.webp', title: 'Amoeba proteus.jpg', author: 'Cymothoa exigua', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amoeba_proteus.jpg',
  },
  rotifer: {
    src: '/specimens/rotifer.webp', title: 'Rotifera 01.jpg', author: 'Paranzem Yatsko', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rotifera_01.jpg',
  },
  'hyaline-cartilage': {
    src: '/specimens/hyaline-cartilage.webp', title: 'Hyaline cartilage (254 01) Mammal; section.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyaline_cartilage_(254_01)_Mammal;_section.jpg',
  },
  'adipose-tissue': {
    src: '/specimens/adipose-tissue.webp', title: 'Adipose tissue.jpg', author: 'Chalova.lina', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Adipose_tissue.jpg',
  },
  'smooth-muscle': {
    src: '/specimens/smooth-muscle.webp', title: 'Smooth muscle 400x.jpg', author: 'Alexander G. Cheroske', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Smooth_muscle_400x.jpg',
  },
  'lung-alveoli': {
    src: '/specimens/lung-alveoli.webp', title: 'Normal lung (5414785258).jpg', author: 'Yale Rosen', license: 'CC BY-SA 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Normal_lung_(5414785258).jpg',
  },
  'kidney-section': {
    src: '/specimens/kidney-section.webp', title: 'Kidney (254 16) Human.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kidney_(254_16)_Human.jpg',
  },
  'pine-needle': {
    src: '/specimens/pine-needle.webp', title: 'Scots pine needle cross sectionl age 6 weeks healthy plant.JPG', author: 'Biooid 99', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Scots_pine_needle_cross_sectionl_age_6_weeks_healthy_plant.JPG',
  },
  'lily-anther': {
    src: '/specimens/lily-anther.webp', title: 'Lilium mature anther XS.jpg', author: 'Curtis Clark', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lilium_mature_anther_XS.jpg',
  },
  'maize-stem': {
    src: '/specimens/maize-stem.webp', title: "Plant stem (255 04) Cross-section of maize stem.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(255_04)_Cross-section_of_maize_stem.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'pine-needle-brightfield': {
    src: '/specimens/pine-needle-brightfield.webp', title: "Pinus nigra needle (255 22) Needle cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(255_22)_Needle_cross_section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'broad-bean-root': {
    src: '/specimens/broad-bean-root.webp', title: "Root (255 00F) Cross-section; broad bean; Vicia faba.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Root_(255_00F)_Cross-section;_broad_bean;_Vicia_faba.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'tilia-woody-stem': {
    src: '/specimens/tilia-woody-stem.webp', title: "Plant stem (250 29) Cross-section of woody stem of Tilia.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(250_29)_Cross-section_of_woody_stem_of_Tilia.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'medicago-stem': {
    src: '/specimens/medicago-stem.webp', title: "Plant stem (255 05) Cross-section of stem of Medicago.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(255_05)_Cross-section_of_stem_of_Medicago.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'ascaris-section': {
    src: '/specimens/ascaris-section.webp', title: "Giant roundworm (265 11) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(265_11)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'earthworm-section': {
    src: '/specimens/earthworm-section.webp', title: "Common earthworm (250 13) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(250_13)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'leech-section': {
    src: '/specimens/leech-section.webp', title: "Leech (265 10) Cross-section of leech (Hirudinea).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leech_(265_10)_Cross-section_of_leech_(Hirudinea).jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'tapeworm-section': {
    src: '/specimens/tapeworm-section.webp', title: "Tapeworm (265 15) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_15)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'medusa-whole-mount': {
    src: '/specimens/medusa-whole-mount.webp', title: "Medusa (265 13).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Medusa_(265_13).jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'fish-scale': {
    src: '/specimens/fish-scale.webp', title: "Fish scale (250 02) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_scale_(250_02)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'testis-section': {
    src: '/specimens/testis-section.webp', title: "Testicles (26 2 11) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(26_2_11)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'liver-section': {
    src: '/specimens/liver-section.webp', title: "Liver (26 2 07) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Liver_(26_2_07)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'duodenum-section': {
    src: '/specimens/duodenum-section.webp', title: "Duodenum (26 2 08) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenum_(26_2_08)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'spinal-cord-section': {
    src: '/specimens/spinal-cord-section.webp', title: "Spinal cord (254 21) Mammal; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_21)_Mammal;_cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'spleen-section': {
    src: '/specimens/spleen-section.webp', title: "Spleen (254 07) Section; mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spleen_(254_07)_Section;_mammal.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'tongue-section': {
    src: '/specimens/tongue-section.webp', title: "Human tongue (251 09) Section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tongue_(251_09)_Section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'trachea-section': {
    src: '/specimens/trachea-section.webp', title: "Trachea (26 2 06) Mouse trachea cross-section, embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trachea_(26_2_06)_Mouse_trachea_cross-section,_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'cerebellum-section': {
    src: '/specimens/cerebellum-section.webp', title: "Cerebellum (254 24) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerebellum_(254_24)_Mammal.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'mite-acari-265-02': {
    src: '/specimens/mite-acari-265-02.webp', title: "Acari (265 02) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acari_(265_02)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aedes-mosquito-247-27a': {
    src: '/specimens/aedes-mosquito-247-27a.webp', title: "Aedes mosquito (247 27A) With biting lice.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aedes_mosquito_(247_27A)_With_biting_lice.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aerial-root-255-01': {
    src: '/specimens/aerial-root-255-01.webp', title: "Aerial root (255 01).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerial_root_(255_01).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ant-leg-250-09': {
    src: '/specimens/ant-leg-250-09.webp', title: "Ant leg (250 09) Ant leg (Formicidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ant_leg_(250_09)_Ant_leg_(Formicidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'articular-head-joint-254-03': {
    src: '/specimens/articular-head-joint-254-03.webp', title: "Articular head (254 03) Section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Articular_head_(254_03)_Section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aspergillus-fumigatus-257-15': {
    src: '/specimens/aspergillus-fumigatus-257-15.webp', title: "Aspergillus fumigatus (257 15).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aspergillus_fumigatus_(257_15).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-248-28': {
    src: '/specimens/airborne-bacteria-248-28.webp', title: "Bacteria (248 28) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(248_28)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basidiobolus-257-20': {
    src: '/specimens/basidiobolus-257-20.webp', title: "Basidiobolus (257 20).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basidiobolus_(257_20).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basidiocarp-hymenium-257-26': {
    src: '/specimens/basidiocarp-hymenium-257-26.webp', title: "Basidiocarp hymenium (257 26) Basidiomycota; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basidiocarp_hymenium_(257_26)_Basidiomycota;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bed-bug-265-17': {
    src: '/specimens/bed-bug-265-17.webp', title: "Bed bug (265 17).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bed_bug_(265_17).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bird-feather-248-20': {
    src: '/specimens/bird-feather-248-20.webp', title: "Bird feather (248 20).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bird_feather_(248_20).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-248-36': {
    src: '/specimens/blood-smear-248-36.webp', title: "Blood smear (248 36) Fish.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(248_36)_Fish.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bone-section-248-12': {
    src: '/specimens/bone-section-248-12.webp', title: "Bone (248 12) Bone cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bone_(248_12)_Bone_cross_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-brain-section-247-28a': {
    src: '/specimens/rat-brain-section-247-28a.webp', title: "Brain (247 28A) Rat brain.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_(247_28A)_Rat_brain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bud-lilac-255-28': {
    src: '/specimens/bud-lilac-255-28.webp', title: "Bud (255 28) Longitudal section of lilac (Syringa vulgaris).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bud_(255_28)_Longitudal_section_of_lilac_(Syringa_vulgaris).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'candida-albicans-248-35': {
    src: '/specimens/candida-albicans-248-35.webp', title: "Candida albicans (248 35).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(248_35).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'caryopsis-grain-255-31': {
    src: '/specimens/caryopsis-grain-255-31.webp', title: "Caryopsis (grain) (255 31) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caryopsis_(grain)_(255_31)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-bean-tick-248-14': {
    src: '/specimens/castor-bean-tick-248-14.webp', title: "Castor bean tick (248 14) Total preparation - larva and egg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castor_bean_tick_(248_14)_Total_preparation_-_larva_and_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fetus-section-247-30a': {
    src: '/specimens/cat-fetus-section-247-30a.webp', title: "Cat fetus (247 30A) Cat fetus section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cat_fetus_(247_30A)_Cat_fetus_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cultured-cells-261-20': {
    src: '/specimens/cultured-cells-261-20.webp', title: "Cell culture (fibroblasts) (261 20) Fibroblasts (metaphase, anaphase).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cell_culture_(fibroblasts)_(261_20)_Fibroblasts_(metaphase,_anaphase).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-cercaria-259-21': {
    src: '/specimens/trematode-cercaria-259-21.webp', title: "Cercaria of trematode (259 21) Cercaria of trematode.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cercaria_of_trematode_(259_21)_Cercaria_of_trematode.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cerebellum-26-2-12': {
    src: '/specimens/cerebellum-26-2-12.webp', title: "Cerebellum (26 2 12) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerebellum_(26_2_12)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'chromatin-fibres-261-19': {
    src: '/specimens/chromatin-fibres-261-19.webp', title: "Chromatin fibers (261 19) Mitosis; Xenopus egg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chromatin_fibers_(261_19)_Mitosis;_Xenopus_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ciliates-250-21': {
    src: '/specimens/ciliates-250-21.webp', title: "Ciliates (250 21).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ciliates_(250_21).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'earthworm-section-26-2-18': {
    src: '/specimens/earthworm-section-26-2-18.webp', title: "Common earthworm (26 2 18) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(26_2_18)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'house-mosquito-larva-247-26a': {
    src: '/specimens/house-mosquito-larva-247-26a.webp', title: "Common house mosquito (247 26A) Total preparation; larva.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_house_mosquito_(247_26A)_Total_preparation;_larva.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'corynebacterium-257-29': {
    src: '/specimens/corynebacterium-257-29.webp', title: "Corynebacterium pseudodiphteriae (257 29).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Corynebacterium_pseudodiphteriae_(257_29).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-larva-265-08': {
    src: '/specimens/crab-larva-265-08.webp', title: "Crab larva (265 08).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_larva_(265_08).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-louse-250-18': {
    src: '/specimens/crab-louse-250-18.webp', title: "Crab louse (250 18) Male adult, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_louse_(250_18)_Male_adult,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-248-07': {
    src: '/specimens/cyanobacteria-248-07.webp', title: "Cyanobacteria (248 07) Mixture; native preparation; green filter.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_(248_07)_Mixture;_native_preparation;_green_filter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'daphnia-water-flea-248-29': {
    src: '/specimens/daphnia-water-flea-248-29.webp', title: "Daphnia (248 29) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daphnia_(248_29)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'diatomaceous-earth-251-10': {
    src: '/specimens/diatomaceous-earth-251-10.webp', title: "Diatomaceous earth (251 10) Diatomaceous earth.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatomaceous_earth_(251_10)_Diatomaceous_earth.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'diatoms-248-05': {
    src: '/specimens/diatoms-248-05.webp', title: "Diatoms (248 05) Various diatoms.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatoms_(248_05)_Various_diatoms.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'duodenum-254-14': {
    src: '/specimens/duodenum-254-14.webp', title: "Duodenum (254 14).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenum_(254_14).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'entamoeba-histolytica-251-32': {
    src: '/specimens/entamoeba-histolytica-251-32.webp', title: "Entamoeba histolytica (251 32).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Entamoeba_histolytica_(251_32).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'escherichia-coli-257-06': {
    src: '/specimens/escherichia-coli-257-06.webp', title: "Escherichia coli (257 06) Gramnegative rods.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_(257_06)_Gramnegative_rods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'eubacteria-257-04': {
    src: '/specimens/eubacteria-257-04.webp', title: "Eubacteria (257 04) Various eubacteria.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eubacteria_(257_04)_Various_eubacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'euglena-250-19': {
    src: '/specimens/euglena-250-19.webp', title: "Euglena sp (250 19) Euglena sp. (protozoan).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Euglena_sp_(250_19)_Euglena_sp._(protozoan).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fish-scale-248-33': {
    src: '/specimens/fish-scale-248-33.webp', title: "Fish scale (248 33) Ctenoid scale; total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_scale_(248_33)_Ctenoid_scale;_total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'flea-251-01': {
    src: '/specimens/flea-251-01.webp', title: "Flea (251 01) Aphaniptera; total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Flea_(251_01)_Aphaniptera;_total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lily-flower-bud-250-30': {
    src: '/specimens/lily-flower-bud-250-30.webp', title: "Flower bud (250 30) Cross-section through a flower bud of Lilium martagon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Flower_bud_(250_30)_Cross-section_through_a_flower_bud_of_Lilium_martagon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'foraminifera-251-02': {
    src: '/specimens/foraminifera-251-02.webp', title: "Foraminifera (251 02) Mediterranean Sea.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Foraminifera_(251_02)_Mediterranean_Sea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fusarium-solani-257-25': {
    src: '/specimens/fusarium-solani-257-25.webp', title: "Fusarium solani (257 25) Cultured and stained deuteromycetes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fusarium_solani_(257_25)_Cultured_and_stained_deuteromycetes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'germinating-pollen-255-27': {
    src: '/specimens/germinating-pollen-255-27.webp', title: "Germination of pollen (255 27) Total preparation (pollen tube visible).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Germination_of_pollen_(255_27)_Total_preparation_(pollen_tube_visible).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giant-roundworm-ascaris-259-23': {
    src: '/specimens/giant-roundworm-ascaris-259-23.webp', title: "Giant roundworm (259 23) Eggs.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(259_23)_Eggs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giardia-intestinalis-259-17': {
    src: '/specimens/giardia-intestinalis-259-17.webp', title: "Giardia intestinalis (259 17).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giardia_intestinalis_(259_17).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'head-louse-250-17': {
    src: '/specimens/head-louse-250-17.webp', title: "Head louse (250 17) Adult, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Head_louse_(250_17)_Adult,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'heart-muscle-section-254-11': {
    src: '/specimens/heart-muscle-section-254-11.webp', title: "Heart (254 11) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Heart_(254_11)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'snail-radula-helix-250-14': {
    src: '/specimens/snail-radula-helix-250-14.webp', title: "Helix pomatia radula (250 14) radula.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Helix_pomatia_radula_(250_14)_radula.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'honeybee-leg-250-10': {
    src: '/specimens/honeybee-leg-250-10.webp', title: "Honeybee leg (250 10) Honeybee (Apis mellifera) leg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Honeybee_leg_(250_10)_Honeybee_(Apis_mellifera)_leg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'housefly-leg-250-11': {
    src: '/specimens/housefly-leg-250-11.webp', title: "Housefly leg (250 11) Housefly leg (Musca domestica).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Housefly_leg_(250_11)_Housefly_leg_(Musca_domestica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-karyotype-248-26': {
    src: '/specimens/human-karyotype-248-26.webp', title: "Human karyotype (248 26) Karyotype Human, green filter.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_karyotype_(248_26)_Karyotype_Human,_green_filter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-tongue-254-12': {
    src: '/specimens/human-tongue-254-12.webp', title: "Human tongue (254 12) Section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tongue_(254_12)_Section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-tonsil-26-2-05': {
    src: '/specimens/human-tonsil-26-2-05.webp', title: "Human tonsils (26 2 05) Cross-section; embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tonsils_(26_2_05)_Cross-section;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'iceland-moss-lichen-thallus-255-37r': {
    src: '/specimens/iceland-moss-lichen-thallus-255-37r.webp', title: "Iceland moss thallus (255 37R) Thallus of iceland moss (Cetraria islandica).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Iceland_moss_thallus_(255_37R)_Thallus_of_iceland_moss_(Cetraria_islandica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-compound-eye-250-07': {
    src: '/specimens/insect-compound-eye-250-07.webp', title: "Insect eye (250 07) Composite eye of insects.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_eye_(250_07)_Composite_eye_of_insects.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-wing-250-04': {
    src: '/specimens/insect-wing-250-04.webp', title: "Insect wing (250 04) Butterfly wing.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_wing_(250_04)_Butterfly_wing.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'intestinal-smooth-muscle-26-2-01': {
    src: '/specimens/intestinal-smooth-muscle-26-2-01.webp', title: "Intestinal smooth muscle (26 2 01) Longitudal section through the muscle, cross-section through intestine.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Intestinal_smooth_muscle_(26_2_01)_Longitudal_section_through_the_muscle,_cross-section_through_intestine.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'itch-mite-247-32a': {
    src: '/specimens/itch-mite-247-32a.webp', title: "Itch mite (247 32A).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Itch_mite_(247_32A).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'kidney-cortex-947-21': {
    src: '/specimens/kidney-cortex-947-21.webp', title: "Kidney cortex (947 21) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kidney_cortex_(947_21)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-251-33': {
    src: '/specimens/lactobacillus-acidophilus-251-33.webp', title: "Lactobacillus acidophilus (251 33) Lactobacillus acidophilus (D\u00f6derlein bacillus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_acidophilus_(251_33)_Lactobacillus_acidophilus_(D\u00f6derlein_bacillus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine-248-21': {
    src: '/specimens/large-intestine-248-21.webp', title: "Large intestine (248 21) Mouse; embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_(248_21)_Mouse;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-section-251-13': {
    src: '/specimens/leaf-section-251-13.webp', title: "Leaf (251 13) Leaf of Sphagnum.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_(251_13)_Leaf_of_Sphagnum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-stalk-petiole-255-24': {
    src: '/specimens/leaf-stalk-petiole-255-24.webp', title: "Leaf stalk (255 24) Cross-section Syringa vulgaris.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_stalk_(255_24)_Cross-section_Syringa_vulgaris.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leech-section-26-2-29': {
    src: '/specimens/leech-section-26-2-29.webp', title: "Leech (26 2 29) Cross-section of leech (Hirudinea).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leech_(26_2_29)_Cross-section_of_leech_(Hirudinea).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leishmania-tropica-259-19': {
    src: '/specimens/leishmania-tropica-259-19.webp', title: "Leishmania tropica (259 19) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leishmania_tropica_(259_19)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'liver-254-13': {
    src: '/specimens/liver-254-13.webp', title: "Liver (254 13).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Liver_(254_13).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bird-louse-265-05': {
    src: '/specimens/bird-louse-265-05.webp', title: "Louse (265 05) Columbicola columbae (Mallophaga).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Louse_(265_05)_Columbicola_columbae_(Mallophaga).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lung-265-24': {
    src: '/specimens/lung-265-24.webp', title: "Lung (265 24) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lung_(265_24)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lymph-node-254-06': {
    src: '/specimens/lymph-node-254-06.webp', title: "Lymph node (254 06) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lymph_node_(254_06)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mammal-hair-250-00f': {
    src: '/specimens/mammal-hair-250-00f.webp', title: "Mammal hair (250 00F) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mammal_hair_(250_00F)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'meiosis-248-22': {
    src: '/specimens/meiosis-248-22.webp', title: "Meiosis (248 22).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Meiosis_(248_22).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'metaphase-onion-root-tip-261-04': {
    src: '/specimens/metaphase-onion-root-tip-261-04.webp', title: "Metaphase (261 04) Pressed; meristem of root; onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase_(261_04)_Pressed;_meristem_of_root;_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'microsporum-gypseum-257-16': {
    src: '/specimens/microsporum-gypseum-257-16.webp', title: "Microsporum gypseum (257 16) Microculture.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microsporum_gypseum_(257_16)_Microculture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-root-tip-248-17': {
    src: '/specimens/mitosis-root-tip-248-17.webp', title: "Mitosis (248 17) Pressed; root meristem of Vicia faba.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_(248_17)_Pressed;_root_meristem_of_Vicia_faba.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'housefly-mouthparts-250-12': {
    src: '/specimens/housefly-mouthparts-250-12.webp', title: "Mouthparts (250 12) Housefly (Musca domestica).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mouthparts_(250_12)_Housefly_(Musca_domestica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mucor-257-22': {
    src: '/specimens/mucor-257-22.webp', title: "Mucor (257 22) Fungus (genus Mucor).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mucor_(257_22)_Fungus_(genus_Mucor).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'nasal-mucosa-26-2-17': {
    src: '/specimens/nasal-mucosa-26-2-17.webp', title: "Nasal mucosa (26 2 17) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nasal_mucosa_(26_2_17)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-nasal-mucosa-254-09': {
    src: '/specimens/human-nasal-mucosa-254-09.webp', title: "Nasal mucosa - human (254 09).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nasal_mucosa_-_human_(254_09).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sponge-coral-and-sea-cucumber-ossicles-265-12': {
    src: '/specimens/sponge-coral-and-sea-cucumber-ossicles-265-12.webp', title: "Ossicles and sclerites - various (265 12) From bodies of Porifera, sea corals and holuthureans.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ossicles_and_sclerites_-_various_(265_12)_From_bodies_of_Porifera,_sea_corals_and_holuthureans.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tulip-ovary-255-30': {
    src: '/specimens/tulip-ovary-255-30.webp', title: "Ovary (botany) (255 30) Tulip; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ovary_(botany)_(255_30)_Tulip;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'paramecium-caudatum-248-06': {
    src: '/specimens/paramecium-caudatum-248-06.webp', title: "Paramecium caudatum (248 06) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_caudatum_(248_06)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pearl-mussel-shell-265-09': {
    src: '/specimens/pearl-mussel-shell-265-09.webp', title: "Pearl mussel (265 09) Shell wall.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pearl_mussel_(265_09)_Shell_wall.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bryozoan-statoblast-263-23': {
    src: '/specimens/bryozoan-statoblast-263-23.webp', title: "Pectinatella magnifica statoblasts (263 23) Statoblast of Pectinatella magnifica, a species of Bryozoa.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pectinatella_magnifica_statoblasts_(263_23)_Statoblast_of_Pectinatella_magnifica,_a_species_of_Bryozoa.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'penicillium-257-14': {
    src: '/specimens/penicillium-257-14.webp', title: "Penicillium sp (257 14) Microculture.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Penicillium_sp_(257_14)_Microculture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-needle-248-31': {
    src: '/specimens/pine-needle-248-31.webp', title: "Pinus nigra needle (248 31) Needle cross section; fluorescence B Exc.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(248_31)_Needle_cross_section;_fluorescence_B_Exc.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-placenta-254-17': {
    src: '/specimens/human-placenta-254-17.webp', title: "Placenta (254 17) Section of human placenta.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(254_17)_Section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-epidermis-248-04': {
    src: '/specimens/onion-epidermis-248-04.webp', title: "Plant epidermis (248 04) Epidermis of onion bulb; dry.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_epidermis_(248_04)_Epidermis_of_onion_bulb;_dry.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-248-34': {
    src: '/specimens/leaf-epidermis-248-34.webp', title: "Plant leaf epidermis (248 34) Tulip leaf epidermis.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_leaf_epidermis_(248_34)_Tulip_leaf_epidermis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plant-stem-section-248-01': {
    src: '/specimens/plant-stem-section-248-01.webp', title: "Plant stem (248 01) Cross-section of stem of Berberis; autofluorescence.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(248_01)_Cross-section_of_stem_of_Berberis;_autofluorescence.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plasmodium-257-33': {
    src: '/specimens/plasmodium-257-33.webp', title: "Plasmodium (257 33).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_(257_33).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pneumococcus-259-06': {
    src: '/specimens/pneumococcus-259-06.webp', title: "Pneumococcus (259 06).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pneumococcus_(259_06).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pollen-grains-251-20': {
    src: '/specimens/pollen-grains-251-20.webp', title: "Pollen grains (251 20) Pollen grains of common hazel (Corylus avellana); total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pollen_grains_(251_20)_Pollen_grains_of_common_hazel_(Corylus_avellana);_total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'polytene-chromosomes-248-30': {
    src: '/specimens/polytene-chromosomes-248-30.webp', title: "Polytene chromosomes (248 30) Salivary glands of nonbiting midges larvae (Chironomidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polytene_chromosomes_(248_30)_Salivary_glands_of_nonbiting_midges_larvae_(Chironomidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'potato-tuber-248-03': {
    src: '/specimens/potato-tuber-248-03.webp', title: "Potato tuber (248 03) Potato tuber cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Potato_tuber_(248_03)_Potato_tuber_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-prostate-238-13a': {
    src: '/specimens/human-prostate-238-13a.webp', title: "Prostate (238 13A) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Prostate_(238_13A)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'psocopteran-booklouse-265-04': {
    src: '/specimens/psocopteran-booklouse-265-04.webp', title: "Psocoptera (265 04) specimen of Psocoptera.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Psocoptera_(265_04)_specimen_of_Psocoptera.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pythium-248-24': {
    src: '/specimens/pythium-248-24.webp', title: "Pythium (248 24).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pythium_(248_24).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-fetus-section-263-24a': {
    src: '/specimens/rat-fetus-section-263-24a.webp', title: "Rat fetus (263 24A) Rat; section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rat_fetus_(263_24A)_Rat;_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'red-spider-mite-265-01': {
    src: '/specimens/red-spider-mite-265-01.webp', title: "Red spider mite (265 01) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_spider_mite_(265_01)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizome-251-17': {
    src: '/specimens/rhizome-251-17.webp', title: "Rhizome (251 17) Male fern (Dryopteris filix-mas); cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizome_(251_17)_Male_fern_(Dryopteris_filix-mas);_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizopus-257-21': {
    src: '/specimens/rhizopus-257-21.webp', title: "Rhizopus (257 21).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizopus_(257_21).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-salivary-gland-254-10': {
    src: '/specimens/human-salivary-gland-254-10.webp', title: "Salivary gland (254 10) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Salivary_gland_(254_10)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sensory-epithelium-254-08': {
    src: '/specimens/sensory-epithelium-254-08.webp', title: "Sensory epithelium (254 08).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sensory_epithelium_(254_08).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'skin-with-hair-265-27': {
    src: '/specimens/skin-with-hair-265-27.webp', title: "Skin with hair (265 27).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Skin_with_hair_(265_27).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mouse-skin-with-hairs-254-00f': {
    src: '/specimens/mouse-skin-with-hairs-254-00f.webp', title: "Skin with hairs (254 00F) House mouse (Mus musculus); skin with hairs.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Skin_with_hairs_(254_00F)_House_mouse_(Mus_musculus);_skin_with_hairs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sludge-worm-265-31': {
    src: '/specimens/sludge-worm-265-31.webp', title: "Sludge worm (265 31) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sludge_worm_(265_31)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-small-intestine-265-23': {
    src: '/specimens/human-small-intestine-265-23.webp', title: "Small intestine (265 23) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Small_intestine_(265_23)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'smooth-muscle-251-08': {
    src: '/specimens/smooth-muscle-251-08.webp', title: "Smooth muscle (251 08) Smooth muscle.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Smooth_muscle_(251_08)_Smooth_muscle.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-sperm-254-19': {
    src: '/specimens/human-sperm-254-19.webp', title: "Sperm (254 19) human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperm_(254_19)_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spider-leg-250-08': {
    src: '/specimens/spider-leg-250-08.webp', title: "Spider leg (250 08) Spider leg (Arachnida).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spider_leg_(250_08)_Spider_leg_(Arachnida).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-254-22': {
    src: '/specimens/spinal-cord-254-22.webp', title: "Spinal cord (254 22) Mammal; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_22)_Mammal;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spirogyra-248-00': {
    src: '/specimens/spirogyra-248-00.webp', title: "Spirogyra (248 00) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_(248_00)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spleen-26-2-04': {
    src: '/specimens/spleen-26-2-04.webp', title: "Spleen (26 2 04) Semi-thick section; embedded in Epon; mouse.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spleen_(26_2_04)_Semi-thick_section;_embedded_in_Epon;_mouse.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'staphylococcus-257-08': {
    src: '/specimens/staphylococcus-257-08.webp', title: "Staphylococcus (257 08) Staphylococcus (grampositive bacterium).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Staphylococcus_(257_08)_Staphylococcus_(grampositive_bacterium).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'arachnid-spiracle-250-03': {
    src: '/specimens/arachnid-spiracle-250-03.webp', title: "Stigma of arachnid trachea (250 03) Stigma of arachnid trachea.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stigma_of_arachnid_trachea_(250_03)_Stigma_of_arachnid_trachea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'streptococcus-251-34': {
    src: '/specimens/streptococcus-251-34.webp', title: "Streptococcus (251 34) grampositive bacterium.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococcus_(251_34)_grampositive_bacterium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'swan-mussel-glochidium-263-21': {
    src: '/specimens/swan-mussel-glochidium-263-21.webp', title: "Swan mussel (263 21) Glochidium (larva).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Swan_mussel_(263_21)_Glochidium_(larva).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tapeworm-26-2-14': {
    src: '/specimens/tapeworm-26-2-14.webp', title: "Tapeworm (26 2 14) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(26_2_14)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'testis-254-18': {
    src: '/specimens/testis-254-18.webp', title: "Testicles (254 18).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(254_18).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thamnidium-257-27': {
    src: '/specimens/thamnidium-257-27.webp', title: "Thamnidium (257 27).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thamnidium_(257_27).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thrips-265-03': {
    src: '/specimens/thrips-265-03.webp', title: "Thrips (265 03).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thrips_(265_03).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thymus-265-25': {
    src: '/specimens/thymus-265-25.webp', title: "Thymus (265 25) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thymus_(265_25)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tongue-26-2-02': {
    src: '/specimens/tongue-26-2-02.webp', title: "Tongue (26 2 02) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tongue_(26_2_02)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tooth-248-15': {
    src: '/specimens/tooth-248-15.webp', title: "Tooth (248 15) Histologic section of tooth.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tooth_(248_15)_Histologic_section_of_tooth.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-fluke-265-18': {
    src: '/specimens/trematode-fluke-265-18.webp', title: "Trematode (265 18) Dicrocoelium lanceolatum.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trematode_(265_18)_Dicrocoelium_lanceolatum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichinella-in-muscle-265-16': {
    src: '/specimens/trichinella-in-muscle-265-16.webp', title: "Trichinella spiralis in muscle tissue (265 16) In skeletal (striated) muscle tissue.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichinella_spiralis_in_muscle_tissue_(265_16)_In_skeletal_(striated)_muscle_tissue.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichomonas-251-29': {
    src: '/specimens/trichomonas-251-29.webp', title: "Trichomonas (251 29) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichomonas_(251_29)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichophyton-mentagrophytes-257-18': {
    src: '/specimens/trichophyton-mentagrophytes-257-18.webp', title: "Trichophyton mentagrophytes (257 18) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichophyton_mentagrophytes_(257_18)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tritrichomonas-foetus-259-26': {
    src: '/specimens/tritrichomonas-foetus-259-26.webp', title: "Tritrichomonas foetus (259 26) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tritrichomonas_foetus_(259_26)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trypanosoma-248-09': {
    src: '/specimens/trypanosoma-248-09.webp', title: "Trypanosoma (248 09) Trypanosoma equiperdum.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trypanosoma_(248_09)_Trypanosoma_equiperdum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'umbilical-cord-254-20': {
    src: '/specimens/umbilical-cord-254-20.webp', title: "Umbilical cord (254 20).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Umbilical_cord_(254_20).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stream-water-protists-247-33a': {
    src: '/specimens/stream-water-protists-247-33a.webp', title: "Unknown protists (247 33A) From a stream water.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Unknown_protists_(247_33A)_From_a_stream_water.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'venule-with-valve-238-10a': {
    src: '/specimens/venule-with-valve-238-10a.webp', title: "Venule (238 10A) With a vein valve; cross-section; human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Venule_(238_10A)_With_a_vein_valve;_cross-section;_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'verticillium-257-24': {
    src: '/specimens/verticillium-257-24.webp', title: "Verticillium (257 24).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Verticillium_(257_24).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'vessels-cross-section-248-18': {
    src: '/specimens/vessels-cross-section-248-18.webp', title: "Vessels (248 18) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vessels_(248_18)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'volvox-250-23': {
    src: '/specimens/volvox-250-23.webp', title: "Volvox (250 23) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Volvox_(250_23)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'white-worms-265-30': {
    src: '/specimens/white-worms-265-30.webp', title: "White worms (265 30) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:White_worms_(265_30)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'yeast-257-11': {
    src: '/specimens/yeast-257-11.webp', title: "Yeast (257 11).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yeast_(257_11).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aedes-mosquito-257-00k': {
    src: '/specimens/aedes-mosquito-257-00k.webp', title: "Aedes mosquito (257 00K) With biting lice.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aedes_mosquito_(257_00K)_With_biting_lice.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-251-31': {
    src: '/specimens/airborne-bacteria-251-31.webp', title: "Bacteria (251 31) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(251_31)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basidiocarp-hymenium-257-35': {
    src: '/specimens/basidiocarp-hymenium-257-35.webp', title: "Basidiocarp hymenium (257 35) Basidiomycota; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basidiocarp_hymenium_(257_35)_Basidiomycota;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bird-feather-250-01': {
    src: '/specimens/bird-feather-250-01.webp', title: "Bird feather (250 01).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bird_feather_(250_01).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-251-03': {
    src: '/specimens/blood-smear-251-03.webp', title: "Blood smear (251 03) Amphibian.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(251_03)_Amphibian.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bone-section-254-02': {
    src: '/specimens/bone-section-254-02.webp', title: "Bone (254 02) Bird bone cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bone_(254_02)_Bird_bone_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-brain-section-248-13': {
    src: '/specimens/rat-brain-section-248-13.webp', title: "Brain (248 13) Rat brain.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_(248_13)_Rat_brain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'candida-albicans-251-12': {
    src: '/specimens/candida-albicans-251-12.webp', title: "Candida albicans (251 12).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(251_12).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'caryopsis-grain-255-32': {
    src: '/specimens/caryopsis-grain-255-32.webp', title: "Caryopsis (grain) (255 32) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caryopsis_(grain)_(255_32)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-bean-tick-250-16': {
    src: '/specimens/castor-bean-tick-250-16.webp', title: "Castor bean tick (250 16) Adult.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castor_bean_tick_(250_16)_Adult.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fetus-section-247-31a': {
    src: '/specimens/cat-fetus-section-247-31a.webp', title: "Cat fetus (247 31A) Cat fetus section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cat_fetus_(247_31A)_Cat_fetus_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cultured-cells-261-16': {
    src: '/specimens/cultured-cells-261-16.webp', title: "Cell culture (HeLa cells) (261 16) Cell culture (HeLa cells) - metaphase, prophase.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cell_culture_(HeLa_cells)_(261_16)_Cell_culture_(HeLa_cells)_-_metaphase,_prophase.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-cercaria-259-22': {
    src: '/specimens/trematode-cercaria-259-22.webp', title: "Cercaria of trematode (259 22).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cercaria_of_trematode_(259_22).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'earthworm-section-265-14': {
    src: '/specimens/earthworm-section-265-14.webp', title: "Common earthworm (265 14) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(265_14)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'house-mosquito-larva-257-00f': {
    src: '/specimens/house-mosquito-larva-257-00f.webp', title: "Common house mosquito (257 00F) Total preparation; larva.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_house_mosquito_(257_00F)_Total_preparation;_larva.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-louse-251-23': {
    src: '/specimens/crab-louse-251-23.webp', title: "Crab louse (251 23) Female, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_louse_(251_23)_Female,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-248-08': {
    src: '/specimens/cyanobacteria-248-08.webp', title: "Cyanobacteria (248 08) Mixture; native preparation; green filter.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_(248_08)_Mixture;_native_preparation;_green_filter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'daphnia-water-flea-250-15': {
    src: '/specimens/daphnia-water-flea-250-15.webp', title: "Daphnia (250 15) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daphnia_(250_15)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'escherichia-coli-259-02': {
    src: '/specimens/escherichia-coli-259-02.webp', title: "Escherichia coli (259 02) Gramnegative rods.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_(259_02)_Gramnegative_rods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'eubacteria-259-00f': {
    src: '/specimens/eubacteria-259-00f.webp', title: "Eubacteria (259 00F) Micrococcus luteus bacteria.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eubacteria_(259_00F)_Micrococcus_luteus_bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'euglena-947-12': {
    src: '/specimens/euglena-947-12.webp', title: "Euglena sp (947 12).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Euglena_sp_(947_12).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fish-scale-250-36': {
    src: '/specimens/fish-scale-250-36.webp', title: "Fish scale (250 36) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_scale_(250_36)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lily-flower-bud-255-29': {
    src: '/specimens/lily-flower-bud-255-29.webp', title: "Flower bud (255 29) Cross-section through a flower bud of Lilium martagon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Flower_bud_(255_29)_Cross-section_through_a_flower_bud_of_Lilium_martagon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'foraminifera-265-36': {
    src: '/specimens/foraminifera-265-36.webp', title: "Foraminifera (265 36) Various.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Foraminifera_(265_36)_Various.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giant-roundworm-ascaris-263-20': {
    src: '/specimens/giant-roundworm-ascaris-263-20.webp', title: "Giant roundworm (263 20) Cross-section of uterus with eggs.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(263_20)_Cross-section_of_uterus_with_eggs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giardia-intestinalis-259-18': {
    src: '/specimens/giardia-intestinalis-259-18.webp', title: "Giardia intestinalis (259 18).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giardia_intestinalis_(259_18).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'head-louse-251-27': {
    src: '/specimens/head-louse-251-27.webp', title: "Head louse (251 27) Adult and egg, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Head_louse_(251_27)_Adult_and_egg,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'heart-muscle-section-265-22': {
    src: '/specimens/heart-muscle-section-265-22.webp', title: "Heart (265 22) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Heart_(265_22)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-karyotype-248-27': {
    src: '/specimens/human-karyotype-248-27.webp', title: "Human karyotype (248 27) Human karyotype.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_karyotype_(248_27)_Human_karyotype.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-wing-250-05': {
    src: '/specimens/insect-wing-250-05.webp', title: "Insect wing (250 05) Housefly (Musca domestica) wing.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_wing_(250_05)_Housefly_(Musca_domestica)_wing.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'kidney-cortex-947-22': {
    src: '/specimens/kidney-cortex-947-22.webp', title: "Kidney cortex (947 22) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kidney_cortex_(947_22)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-259-08': {
    src: '/specimens/lactobacillus-acidophilus-259-08.webp', title: "Lactobacillus acidophilus (259 08) Lactobacillus acidophilus (D\u00f6derlein bacillus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_acidophilus_(259_08)_Lactobacillus_acidophilus_(D\u00f6derlein_bacillus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine-254-15': {
    src: '/specimens/large-intestine-254-15.webp', title: "Large intestine (254 15) Human large intestine.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_(254_15)_Human_large_intestine.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-section-255-14': {
    src: '/specimens/leaf-section-255-14.webp', title: "Leaf (255 14) Leaf semi-thick section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_(255_14)_Leaf_semi-thick_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-stalk-petiole-255-25': {
    src: '/specimens/leaf-stalk-petiole-255-25.webp', title: "Leaf stalk (255 25) Cross-section Syringa vulgaris.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_stalk_(255_25)_Cross-section_Syringa_vulgaris.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leishmania-tropica-259-20': {
    src: '/specimens/leishmania-tropica-259-20.webp', title: "Leishmania tropica (259 20) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leishmania_tropica_(259_20)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lymph-node-265-34': {
    src: '/specimens/lymph-node-265-34.webp', title: "Lymph node (265 34) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lymph_node_(265_34)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'meiosis-248-23': {
    src: '/specimens/meiosis-248-23.webp', title: "Meiosis (248 23).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Meiosis_(248_23).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'metaphase-onion-root-tip-261-05': {
    src: '/specimens/metaphase-onion-root-tip-261-05.webp', title: "Metaphase (261 05) Pressed; meristem of root; onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase_(261_05)_Pressed;_meristem_of_root;_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'microsporum-gypseum-257-17': {
    src: '/specimens/microsporum-gypseum-257-17.webp', title: "Microsporum gypseum (257 17) Microculture.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microsporum_gypseum_(257_17)_Microculture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-root-tip-251-21': {
    src: '/specimens/mitosis-root-tip-251-21.webp', title: "Mitosis (251 21) Pressed; root meristem of Vicia faba.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_(251_21)_Pressed;_root_meristem_of_Vicia_faba.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'paramecium-caudatum-250-20': {
    src: '/specimens/paramecium-caudatum-250-20.webp', title: "Paramecium caudatum (250 20) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_caudatum_(250_20)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-needle-251-14': {
    src: '/specimens/pine-needle-251-14.webp', title: "Pinus nigra needle (251 14) Needle cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(251_14)_Needle_cross_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-placenta-26-2-10': {
    src: '/specimens/human-placenta-26-2-10.webp', title: "Placenta (26 2 10) Cross-section of human placenta.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(26_2_10)_Cross-section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-epidermis-255-19': {
    src: '/specimens/onion-epidermis-255-19.webp', title: "Plant epidermis (255 19) Epidermis of onion bulb ; wet.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_epidermis_(255_19)_Epidermis_of_onion_bulb_;_wet.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-251-15': {
    src: '/specimens/leaf-epidermis-251-15.webp', title: "Plant leaf epidermis (251 15) Upper epidermis of lime tree (Tilia).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_leaf_epidermis_(251_15)_Upper_epidermis_of_lime_tree_(Tilia).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plant-stem-section-248-02': {
    src: '/specimens/plant-stem-section-248-02.webp', title: "Plant stem (248 02) Aristolochia stem cross-section; visualised by fluorescence.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(248_02)_Aristolochia_stem_cross-section;_visualised_by_fluorescence.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plasmodium-257-34': {
    src: '/specimens/plasmodium-257-34.webp', title: "Plasmodium (257 34).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_(257_34).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pneumococcus-259-07': {
    src: '/specimens/pneumococcus-259-07.webp', title: "Pneumococcus (259 07).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pneumococcus_(259_07).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pollen-grains-255-26': {
    src: '/specimens/pollen-grains-255-26.webp', title: "Pollen grains (255 26) Pine tree.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pollen_grains_(255_26)_Pine_tree.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'polytene-chromosomes-26-2-97': {
    src: '/specimens/polytene-chromosomes-26-2-97.webp', title: "Polytene chromosomes (26 2 97) Salivary glands of nonbiting midges larvae (Chironomidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polytene_chromosomes_(26_2_97)_Salivary_glands_of_nonbiting_midges_larvae_(Chironomidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'potato-tuber-250-35': {
    src: '/specimens/potato-tuber-250-35.webp', title: "Potato tuber (250 35) Potato tuber cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Potato_tuber_(250_35)_Potato_tuber_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pythium-257-23': {
    src: '/specimens/pythium-257-23.webp', title: "Pythium (257 23).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pythium_(257_23).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizome-254-27': {
    src: '/specimens/rhizome-254-27.webp', title: "Rhizome (254 27) Lily of the Valley (Convallaria majalis).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizome_(254_27)_Lily_of_the_Valley_(Convallaria_majalis).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-sperm-265-33': {
    src: '/specimens/human-sperm-265-33.webp', title: "Sperm (265 33) human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperm_(265_33)_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-254-23': {
    src: '/specimens/spinal-cord-254-23.webp', title: "Spinal cord (254 23) Lower end; rabbit (Oryctolagus cuniculus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_23)_Lower_end;_rabbit_(Oryctolagus_cuniculus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spirogyra-250-24': {
    src: '/specimens/spirogyra-250-24.webp', title: "Spirogyra (250 24) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_(250_24)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spleen-265-19': {
    src: '/specimens/spleen-265-19.webp', title: "Spleen (265 19) Section; mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spleen_(265_19)_Section;_mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'streptococcus-257-32': {
    src: '/specimens/streptococcus-257-32.webp', title: "Streptococcus (257 32) grampositive bacterium.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococcus_(257_32)_grampositive_bacterium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'swan-mussel-glochidium-263-22': {
    src: '/specimens/swan-mussel-glochidium-263-22.webp', title: "Swan mussel (263 22) Glochidium (larva).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Swan_mussel_(263_22)_Glochidium_(larva).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tapeworm-265-06': {
    src: '/specimens/tapeworm-265-06.webp', title: "Tapeworm (265 06) Body segment.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_06)_Body_segment.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'testis-26-2-15': {
    src: '/specimens/testis-26-2-15.webp', title: "Testicles (26 2 15) Testicles cross-section (mouse).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(26_2_15)_Testicles_cross-section_(mouse).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-fluke-265-32': {
    src: '/specimens/trematode-fluke-265-32.webp', title: "Trematode (265 32) Eggs in liver.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trematode_(265_32)_Eggs_in_liver.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichophyton-mentagrophytes-257-19': {
    src: '/specimens/trichophyton-mentagrophytes-257-19.webp', title: "Trichophyton mentagrophytes (257 19) From a microculture and an infected hair.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichophyton_mentagrophytes_(257_19)_From_a_microculture_and_an_infected_hair.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tritrichomonas-foetus-259-27': {
    src: '/specimens/tritrichomonas-foetus-259-27.webp', title: "Tritrichomonas foetus (259 27) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tritrichomonas_foetus_(259_27)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trypanosoma-251-30': {
    src: '/specimens/trypanosoma-251-30.webp', title: "Trypanosoma (251 30).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trypanosoma_(251_30).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'venule-with-valve-238-11a': {
    src: '/specimens/venule-with-valve-238-11a.webp', title: "Venule (238 11A) With a vein valve; cross-section; human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Venule_(238_11A)_With_a_vein_valve;_cross-section;_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-259-04': {
    src: '/specimens/airborne-bacteria-259-04.webp', title: "Bacteria (259 04) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(259_04)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-251-04': {
    src: '/specimens/blood-smear-251-04.webp', title: "Blood smear (251 04) Bird.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(251_04)_Bird.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bone-section-26-2-20': {
    src: '/specimens/bone-section-26-2-20.webp', title: "Bone (26 2 20) Human bone cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bone_(26_2_20)_Human_bone_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-brain-section-254-25': {
    src: '/specimens/rat-brain-section-254-25.webp', title: "Brain (254 25) Rat brain.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_(254_25)_Rat_brain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'candida-albicans-257-12': {
    src: '/specimens/candida-albicans-257-12.webp', title: "Candida albicans (257 12).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(257_12).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-bean-tick-265-28': {
    src: '/specimens/castor-bean-tick-265-28.webp', title: "Castor bean tick (265 28) Total preparation - larva and part of an egg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castor_bean_tick_(265_28)_Total_preparation_-_larva_and_part_of_an_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fetus-section-26-2-03': {
    src: '/specimens/cat-fetus-section-26-2-03.webp', title: "Cat fetus (26 2 03) Cat embryo longitudal section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cat_fetus_(26_2_03)_Cat_embryo_longitudal_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cultured-cells-261-17': {
    src: '/specimens/cultured-cells-261-17.webp', title: "Cell culture (HeLa cells) (261 17) Cell culture (HeLa cells) - anaphase, metaphase.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cell_culture_(HeLa_cells)_(261_17)_Cell_culture_(HeLa_cells)_-_anaphase,_metaphase.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-louse-251-24': {
    src: '/specimens/crab-louse-251-24.webp', title: "Crab louse (251 24) Female adult and eggs, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_louse_(251_24)_Female_adult_and_eggs,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-250-22': {
    src: '/specimens/cyanobacteria-250-22.webp', title: "Cyanobacteria (250 22) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_(250_22)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'escherichia-coli-259-03': {
    src: '/specimens/escherichia-coli-259-03.webp', title: "Escherichia coli (259 03) Gramnegative rods.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_(259_03)_Gramnegative_rods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'eubacteria-259-01': {
    src: '/specimens/eubacteria-259-01.webp', title: "Eubacteria (259 01) Micrococcus luteus bacteria.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eubacteria_(259_01)_Micrococcus_luteus_bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'head-louse-251-28': {
    src: '/specimens/head-louse-251-28.webp', title: "Head louse (251 28) Larva and eggs, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Head_louse_(251_28)_Larva_and_eggs,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-karyotype-259-28': {
    src: '/specimens/human-karyotype-259-28.webp', title: "Human karyotype (259 28) Karyotype Human, 46,XY t15-20.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_karyotype_(259_28)_Karyotype_Human,_46,XY_t15-20.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-wing-250-06': {
    src: '/specimens/insect-wing-250-06.webp', title: "Insect wing (250 06) Honeybee (Apis mellifera) wing.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_wing_(250_06)_Honeybee_(Apis_mellifera)_wing.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-259-09': {
    src: '/specimens/lactobacillus-acidophilus-259-09.webp', title: "Lactobacillus acidophilus (259 09) Lactobacillus acidophilus (D\u00f6derlein bacillus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_acidophilus_(259_09)_Lactobacillus_acidophilus_(D\u00f6derlein_bacillus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine-26-2-09': {
    src: '/specimens/large-intestine-26-2-09.webp', title: "Large intestine (26 2 09) Mouse; embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_(26_2_09)_Mouse;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-section-255-21': {
    src: '/specimens/leaf-section-255-21.webp', title: "Leaf (255 21) Cross-section through a leaf of Iris plant.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_(255_21)_Cross-section_through_a_leaf_of_Iris_plant.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-stalk-petiole-255-34': {
    src: '/specimens/leaf-stalk-petiole-255-34.webp', title: "Leaf stalk (255 34) Cross-section Nuphar lutea.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_stalk_(255_34)_Cross-section_Nuphar_lutea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'meiosis-254-30': {
    src: '/specimens/meiosis-254-30.webp', title: "Meiosis (254 30).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Meiosis_(254_30).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'metaphase-onion-root-tip-261-06': {
    src: '/specimens/metaphase-onion-root-tip-261-06.webp', title: "Metaphase (261 06) Pressed; meristem of root; onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase_(261_06)_Pressed;_meristem_of_root;_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-root-tip-251-22': {
    src: '/specimens/mitosis-root-tip-251-22.webp', title: "Mitosis (251 22) Pressed; root meristem of onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_(251_22)_Pressed;_root_meristem_of_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-needle-255-23': {
    src: '/specimens/pine-needle-255-23.webp', title: "Pinus nigra needle (255 23) Needle cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(255_23)_Needle_cross_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-placenta-265-26': {
    src: '/specimens/human-placenta-265-26.webp', title: "Placenta (265 26) Section of human placenta.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(265_26)_Section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-epidermis-255-20': {
    src: '/specimens/onion-epidermis-255-20.webp', title: "Plant epidermis (255 20) Epidermis of onion bulb; dry.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_epidermis_(255_20)_Epidermis_of_onion_bulb;_dry.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-251-16': {
    src: '/specimens/leaf-epidermis-251-16.webp', title: "Plant leaf epidermis (251 16) Lower epidermis of lime tree (Tilia).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_leaf_epidermis_(251_16)_Lower_epidermis_of_lime_tree_(Tilia).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plant-stem-section-248-19': {
    src: '/specimens/plant-stem-section-248-19.webp', title: "Plant stem (248 19) Longitudal tangential section - woody stem.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(248_19)_Longitudal_tangential_section_-_woody_stem.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plasmodium-259-16': {
    src: '/specimens/plasmodium-259-16.webp', title: "Plasmodium (259 16).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_(259_16).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'polytene-chromosomes-260-02': {
    src: '/specimens/polytene-chromosomes-260-02.webp', title: "Polytene chromosomes (260 02) Salivary glands of nonbiting midges larvae (Chironomidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polytene_chromosomes_(260_02)_Salivary_glands_of_nonbiting_midges_larvae_(Chironomidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizome-254-28': {
    src: '/specimens/rhizome-254-28.webp', title: "Rhizome (254 28) Lily of the Valley (Convallaria majalis).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizome_(254_28)_Lily_of_the_Valley_(Convallaria_majalis).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-26-2-16': {
    src: '/specimens/spinal-cord-26-2-16.webp', title: "Spinal cord (26 2 16) Rat; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(26_2_16)_Rat;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spirogyra-251-11': {
    src: '/specimens/spirogyra-251-11.webp', title: "Spirogyra (251 11) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_(251_11)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'streptococcus-259-14': {
    src: '/specimens/streptococcus-259-14.webp', title: "Streptococcus (259 14) grampositive bacterium.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococcus_(259_14)_grampositive_bacterium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tapeworm-265-07': {
    src: '/specimens/tapeworm-265-07.webp', title: "Tapeworm (265 07) Body segment.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_07)_Body_segment.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'testis-265-20': {
    src: '/specimens/testis-265-20.webp', title: "Testicles (265 20) Cross-section; mouse.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(265_20)_Cross-section;_mouse.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trypanosoma-259-24': {
    src: '/specimens/trypanosoma-259-24.webp', title: "Trypanosoma (259 24).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trypanosoma_(259_24).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'venule-with-valve-238-12a': {
    src: '/specimens/venule-with-valve-238-12a.webp', title: "Venule (238 12A) With a vein valve; cross-section; human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Venule_(238_12A)_With_a_vein_valve;_cross-section;_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-259-05': {
    src: '/specimens/airborne-bacteria-259-05.webp', title: "Bacteria (259 05).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(259_05).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-254-05': {
    src: '/specimens/blood-smear-254-05.webp', title: "Blood smear (254 05) Amphibian.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(254_05)_Amphibian.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-26-2-27': {
    src: '/specimens/airborne-bacteria-26-2-27.webp', title: "Bacteria (26 2 27) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(26_2_27)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'yew-leaf-epidermis-and-stomata-10x': {
    src: '/specimens/yew-leaf-epidermis-and-stomata-10x.webp', title: "05-Stack 75 Yew 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:05-Stack_75_Yew_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'yew-leaf-epidermis-and-stomata-40x': {
    src: '/specimens/yew-leaf-epidermis-and-stomata-40x.webp', title: "05-Stack 76 Yew 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:05-Stack_76_Yew_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-stacked-photograph': {
    src: '/specimens/spinal-cord-stacked-photograph.webp', title: "20180427SpinalCord11stack (26875138687).jpg", author: "MostlyDross from Springfield, VA, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20180427SpinalCord11stack_(26875138687).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'acinar-cells-of-an-exocrine-gland': {
    src: '/specimens/acinar-cells-of-an-exocrine-gland.webp', title: "Acinar cells.JPG", author: "Jpogi at English Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acinar_cells.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'active-mammary-gland': {
    src: '/specimens/active-mammary-gland.webp', title: "Active mammary gland.jpg", author: "Abdulrazakca", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Active_mammary_gland.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'garlic-mustard-alliaria-petiolata-stalk-longitudinal-section': {
    src: '/specimens/garlic-mustard-alliaria-petiolata-stalk-longitudinal-section.webp', title: "Alliaria petiolata, stalk, longitudinal section, Etzold green.jpg", author: "User:Micropix", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alliaria_petiolata,_stalk,_longitudinal_section,_Etzold_green.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'arabidopsis-shoot-apical-meristem-flat': {
    src: '/specimens/arabidopsis-shoot-apical-meristem-flat.webp', title: "Arabidopsis flat SAM.jpg", author: "Kingfiser", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Arabidopsis_flat_SAM.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'arabidopsis-shoot-apical-meristem-rounded': {
    src: '/specimens/arabidopsis-shoot-apical-meristem-rounded.webp', title: "Arabidopsis round SAM.jpg", author: "Kingfiser", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Arabidopsis_round_SAM.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-cells-under-the-microscope': {
    src: '/specimens/blood-cells-under-the-microscope.webp', title: "Blood cells under the microscope 01.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_cells_under_the_microscope_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-breast-tissue-normal': {
    src: '/specimens/rat-breast-tissue-normal.webp', title: "Breast of rat (normal).jpg", author: "Farahamar", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Breast_of_rat_(normal).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-thyroid-gland-capsule': {
    src: '/specimens/human-thyroid-gland-capsule.webp', title: "Capsule of the Human Thyroid Gland (32534056467).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Capsule_of_the_Human_Thyroid_Gland_(32534056467).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'choroid-plexus-human': {
    src: '/specimens/choroid-plexus-human.webp', title: "Choroid plexus (human).jpg", author: "Tulemo", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Choroid_plexus_(human).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'circumvallate-papilla': {
    src: '/specimens/circumvallate-papilla.webp', title: "Circumvallate.jpg", author: "Abdulrazakca", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Circumvallate.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'coleus-stem-tip-longitudinal-section': {
    src: '/specimens/coleus-stem-tip-longitudinal-section.webp', title: "Coleus stemtip.jpg", author: "Jon Houseman", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Coleus_stemtip.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thyroid-follicles-with-colloid': {
    src: '/specimens/thyroid-follicles-with-colloid.webp', title: "Colloid Filled Lumens in Human Thyroid Gland (32546734627).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Colloid_Filled_Lumens_in_Human_Thyroid_Gland_(32546734627).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cuboidal-epithelium': {
    src: '/specimens/cuboidal-epithelium.webp', title: "Cuboidal Epithelium Lining Intralobular Duct by Phase Contrast (33859250438).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuboidal_Epithelium_Lining_Intralobular_Duct_by_Phase_Contrast_(33859250438).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-cuticle-and-upper-epidermis': {
    src: '/specimens/leaf-cuticle-and-upper-epidermis.webp', title: "Cuticle overlying upper epidermis in mesophyte leaf (35103215772).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuticle_overlying_upper_epidermis_in_mesophyte_leaf_(35103215772).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-cuticle-and-upper-epidermis-second-field': {
    src: '/specimens/leaf-cuticle-and-upper-epidermis-second-field.webp', title: "Cuticle overlying upper epidermis of mesophyte leaf (34686901852).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuticle_overlying_upper_epidermis_of_mesophyte_leaf_(34686901852).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'peritoneal-fluid-cells-cytospin': {
    src: '/specimens/peritoneal-fluid-cells-cytospin.webp', title: "Cytospin slide of peritoneal fluid (Wright Giemsa stain).jpg", author: "SpicyMilkBoy", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cytospin_slide_of_peritoneal_fluid_(Wright_Giemsa_stain).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'decalcified-compact-bone': {
    src: '/specimens/decalcified-compact-bone.webp', title: "Decalcified Compact Bone slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Decalcified_Compact_Bone_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thyroid-gland-septated-lobes': {
    src: '/specimens/thyroid-gland-septated-lobes.webp', title: "Deeply Septated Lobes of the Human Thyroid Gland (32546733667).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deeply_Septated_Lobes_of_the_Human_Thyroid_Gland_(32546733667).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'slug-deroceras-laeve-epithelium-400x': {
    src: '/specimens/slug-deroceras-laeve-epithelium-400x.webp', title: "Deroceras laeve epithelium 400 saturn.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_epithelium_400_saturn.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'slug-deroceras-laeve-muscle-h-e-200x': {
    src: '/specimens/slug-deroceras-laeve-muscle-h-e-200x.webp', title: "Deroceras laeve muscle 200 HE.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_muscle_200_HE.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'slug-deroceras-laeve-muscle-orcein-400x': {
    src: '/specimens/slug-deroceras-laeve-muscle-orcein-400x.webp', title: "Deroceras laeve muscle 400 orcein.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_muscle_400_orcein.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'male-fern-dryopteris-filix-mas-dictyostele': {
    src: '/specimens/male-fern-dryopteris-filix-mas-dictyostele.webp', title: "Dryopteris filix-mas Dictyostele.jpg", author: "Chernova & Ageeva", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dryopteris_filix-mas_Dictyostele.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'barnyard-grass-echinochloa-crus-galli-stem': {
    src: '/specimens/barnyard-grass-echinochloa-crus-galli-stem.webp', title: "Echinochloa crus-galli - stem, longitudinal section.jpg", author: "Pawe\u0142 Jarzembowski", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Echinochloa_crus-galli_-_stem,_longitudinal_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thick-skin-epidermis-100x': {
    src: '/specimens/thick-skin-epidermis-100x.webp', title: "Epidermis histology 2014.jpg", author: "Athikhun.suw", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epidermis_histology_2014.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'simple-squamous-epithelium': {
    src: '/specimens/simple-squamous-epithelium.webp', title: "Epithelial Tissues Simple Squamous Epithelium (40823230315).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Simple_Squamous_Epithelium_(40823230315).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'horsetail-equisetum-apical-cell-longitudinal-section': {
    src: '/specimens/horsetail-equisetum-apical-cell-longitudinal-section.webp', title: "Equisetum apical cell L.jpg", author: "Jon Houseman", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Equisetum_apical_cell_L.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'female-urethra-transitional-epithelium-40x': {
    src: '/specimens/female-urethra-transitional-epithelium-40x.webp', title: "Female urethra histology.jpg", author: "Athikhun.suw", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Female_urethra_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'globus-pallidus-and-putamen': {
    src: '/specimens/globus-pallidus-and-putamen.webp', title: "Globus pallidus and putamen - very low mag.jpg", author: "Nephron", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Globus_pallidus_and_putamen_-_very_low_mag.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'renal-glomerulus': {
    src: '/specimens/renal-glomerulus.webp', title: "Glomerulus.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Glomerulus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-two-needle-leaf-phloem': {
    src: '/specimens/pine-two-needle-leaf-phloem.webp', title: "Gymnosperm Leaves Phloem Two Needle Pinus (36363883221).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gymnosperm_Leaves_Phloem_Two_Needle_Pinus_(36363883221).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-two-needle-leaf-xylem': {
    src: '/specimens/pine-two-needle-leaf-xylem.webp', title: "Gymnosperm Leaves Xylem in Two Needle Pinus (36501130325).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gymnosperm_Leaves_Xylem_in_Two_Needle_Pinus_(36501130325).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hale-s-colloidal-iron-stain': {
    src: '/specimens/hale-s-colloidal-iron-stain.webp', title: "Hales colloidal iron staining.jpg", author: "Mark ong", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hales_colloidal_iron_staining.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-ricinus-stem-xylem-vessels': {
    src: '/specimens/castor-ricinus-stem-xylem-vessels.webp', title: "Herbaceoaus Dicot Stem Xylem Vessels in Older Richinus (35474133884).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbaceoaus_Dicot_Stem_Xylem_Vessels_in_Older_Richinus_(35474133884).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pumpkin-cucurbita-stem-cambium-and-phloem': {
    src: '/specimens/pumpkin-cucurbita-stem-cambium-and-phloem.webp', title: "Herbaceous Dicot Stem Cambium and Phloem in Cucurbita (37411755521).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Cambium_and_Phloem_in_Cucurbita_(37411755521).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'liver-histology-slide': {
    src: '/specimens/liver-histology-slide.webp', title: "Histologi Hepar.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_Hepar.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'muscle-histology-slide': {
    src: '/specimens/muscle-histology-slide.webp', title: "Histologi Otot.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_Otot.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gland-histology-slide': {
    src: '/specimens/gland-histology-slide.webp', title: "Histologi kelenjar.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_kelenjar.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lung-histology-slide': {
    src: '/specimens/lung-histology-slide.webp', title: "Histologi paru-paru.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_paru-paru.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'digestive-system-histology-slide': {
    src: '/specimens/digestive-system-histology-slide.webp', title: "Histologi sistem pencernaan.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_sistem_pencernaan.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mesothelial-lining-of-a-hernia-sac': {
    src: '/specimens/mesothelial-lining-of-a-hernia-sac.webp', title: "Histology of the mesothelial lining of a hernia sac.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histology_of_the_mesothelial_lining_of_a_hernia_sac.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-ovarian-follicle': {
    src: '/specimens/human-ovarian-follicle.webp', title: "Human Ovarian Follicle with Growing oocyte seen through Compound Microscope at 400x Magnification.jpg", author: "C.Abare8624", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_Ovarian_Follicle_with_Growing_oocyte_seen_through_Compound_Microscope_at_400x_Magnification.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-blood': {
    src: '/specimens/human-blood.webp', title: "Human blood.jpg", author: "Olena Hohulia, \u041a\u0443\u0446\u0438\u043a \u0412\u043b\u0430\u0434\u0430, \u041a\u0440\u0435\u043c\u0456\u043d\u044c \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u0430, Ivanchik Marya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_blood.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-tonsil': {
    src: '/specimens/human-tonsil.webp', title: "Human tonsils (26 2 05) Cross-section; embedded in Epon.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tonsils_(26_2_05)_Cross-section;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-skin-with-sweat-glands-100x': {
    src: '/specimens/human-skin-with-sweat-glands-100x.webp', title: "Humanskinsweatglands100x1.jpg", author: "John Alan Elson", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Humanskinsweatglands100x1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-skin-with-sweat-glands-400x': {
    src: '/specimens/human-skin-with-sweat-glands-400x.webp', title: "Humanskinsweatglands400x6.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Humanskinsweatglands400x6.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-skin-with-sweat-glands-40x': {
    src: '/specimens/human-skin-with-sweat-glands-40x.webp', title: "Humanskinsweatglands40x8.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Humanskinsweatglands40x8.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hydra-cross-section-100x': {
    src: '/specimens/hydra-cross-section-100x.webp', title: "Hydracs100x.jpg", author: "John Alan Elson", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydracs100x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hydra-cross-section-40x': {
    src: '/specimens/hydra-cross-section-40x.webp', title: "Hydracs40x.jpg", author: "John Alan Elson", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydracs40x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hypersegmented-neutrophil': {
    src: '/specimens/hypersegmented-neutrophil.webp', title: "Hypersegmented PMN.JPG", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hypersegmented_PMN.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mouse-hypothalamus-immunohistochemistry': {
    src: '/specimens/mouse-hypothalamus-immunohistochemistry.webp', title: "Hypothalamus of a mouse tissue stained by ABC-Immunohistochemistry.jpg", author: "zabbn", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hypothalamus_of_a_mouse_tissue_stained_by_ABC-Immunohistochemistry.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ileum-with-peyer-patch-azan-stain': {
    src: '/specimens/ileum-with-peyer-patch-azan-stain.webp', title: "Ileon-Payer-AZAN.jpg", author: "J3D3", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ileon-Payer-AZAN.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'kidney-cortex': {
    src: '/specimens/kidney-cortex.webp', title: "Kidney-Cortex.JPG", author: "Jpogi at English Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kidney-Cortex.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-artery': {
    src: '/specimens/large-artery.webp', title: "Large artery.jpg", author: "Pottella kavyasree", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_artery.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine': {
    src: '/specimens/large-intestine.webp', title: "Large intestine histology.jpg", author: "Juan Carlos Fonseca Mata", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-vein': {
    src: '/specimens/large-vein.webp', title: "Large vein histology.jpg", author: "Pottella kavyasree", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_vein_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-vein-second-field': {
    src: '/specimens/large-vein-second-field.webp', title: "Large vein.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_vein.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'medium-sized-artery': {
    src: '/specimens/medium-sized-artery.webp', title: "Medium sized artery.jpg", author: "Pottella kavyasree", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Medium_sized_artery.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'megakaryocyte-bone-marrow': {
    src: '/specimens/megakaryocyte-bone-marrow.webp', title: "Megakaryocyte.jpg", author: "Simon Caulton", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Megakaryocyte.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mixed-salivary-gland': {
    src: '/specimens/mixed-salivary-gland.webp', title: "Mixed salivary gland.jpg", author: "Sushma sri. mande", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mixed_salivary_gland.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'nasal-mucosa-cross-section': {
    src: '/specimens/nasal-mucosa-cross-section.webp', title: "Nasal mucosa (26 2 17) Cross-section.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nasal_mucosa_(26_2_17)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'nissl-bodies-in-neurons': {
    src: '/specimens/nissl-bodies-in-neurons.webp', title: "Nissl bodies in neurons of the spinal cord.jpg", author: "Tulemo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nissl_bodies_in_neurons_of_the_spinal_cord.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'normal-breast-acinus': {
    src: '/specimens/normal-breast-acinus.webp', title: "Normal breast acinus.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Normal_breast_acinus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'oesophagus': {
    src: '/specimens/oesophagus.webp', title: "Oesophagus.jpg", author: "\u0414\u0438\u043c\u0438\u0442\u044a\u0440 \u041c\u0438\u0442\u0435\u0432", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oesophagus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'muscle-transverse-section': {
    src: '/specimens/muscle-transverse-section.webp', title: "Otot transversal.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Otot_transversal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ovary': {
    src: '/specimens/ovary.webp', title: "Ovary slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ovary_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-xylem-ducts': {
    src: '/specimens/pine-xylem-ducts.webp', title: "Pine tree xylem ducts.jpg", author: "thuggyec", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pine_tree_xylem_ducts.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'monocot-stem': {
    src: '/specimens/monocot-stem.webp', title: "Plant Specimen - Monocot Stem - Metaxylem and Protoxylem.jpg", author: "Soumyajits42", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_Specimen_-_Monocot_Stem_-_Metaxylem_and_Protoxylem.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'uterus-proliferative-phase': {
    src: '/specimens/uterus-proliferative-phase.webp', title: "Prolifrative Uterus slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Prolifrative_Uterus_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rubricyte-nucleated-red-cell-precursor': {
    src: '/specimens/rubricyte-nucleated-red-cell-precursor.webp', title: "Rubricyte.jpg", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rubricyte.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'butcher-s-broom-ruscus-hypophyllum-stem-cross-section': {
    src: '/specimens/butcher-s-broom-ruscus-hypophyllum-stem-cross-section.webp', title: "Ruscus hypophyllum - cross section of phylloclade.jpg", author: "TCdeOLiveira", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ruscus_hypophyllum_-_cross_section_of_phylloclade.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ruscus-hypophyllum-root-cross-section': {
    src: '/specimens/ruscus-hypophyllum-root-cross-section.webp', title: "Ruscus hypophyllum root - cross section detail.jpg", author: "TCdeOLiveira", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ruscus_hypophyllum_root_-_cross_section_detail.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ruscus-hypophyllum-root-cross-section-second-field': {
    src: '/specimens/ruscus-hypophyllum-root-cross-section-second-field.webp', title: "Ruscus hypophyllum root - cross section surface detail.jpg", author: "TCdeOLiveira", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ruscus_hypophyllum_root_-_cross_section_surface_detail.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-40x': {
    src: '/specimens/blood-smear-40x.webp', title: "SangPouleMicroscopeX40.jpg", author: "Patbio", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:SangPouleMicroscopeX40.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'seminal-vesicle': {
    src: '/specimens/seminal-vesicle.webp', title: "Seminal vesicle slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Seminal_vesicle_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bud-stem-tip-longitudinal-section': {
    src: '/specimens/bud-stem-tip-longitudinal-section.webp', title: "SeminalBudStemTipls40x2.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:SeminalBudStemTipls40x2.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sperm-in-a-giemsa-stained-smear': {
    src: '/specimens/sperm-in-a-giemsa-stained-smear.webp', title: "Sperms in Giemsa Stained smear of Semen.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperms_in_Giemsa_Stained_smear_of_Semen.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stem-collenchyma-100x': {
    src: '/specimens/stem-collenchyma-100x.webp', title: "Stem-Collenchyma100x6.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stem-Collenchyma100x6.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stem-collenchyma-400x': {
    src: '/specimens/stem-collenchyma-400x.webp', title: "Stem-Collenchyma400x5.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stem-Collenchyma400x5.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stomach': {
    src: '/specimens/stomach.webp', title: "Stomaco.JPG", author: "Etinterra", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stomaco.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'water-lily-nymphaea-stem-xylem-elements': {
    src: '/specimens/water-lily-nymphaea-stem-xylem-elements.webp', title: "Submerged Dicot Stem Xylem Elements in Nymphaea (35487609682).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Submerged_Dicot_Stem_Xylem_Elements_in_Nymphaea_(35487609682).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-ligilactobacillus-1000x': {
    src: '/specimens/gram-stain-ligilactobacillus-1000x.webp', title: "1000x Magnification of Gram Stain of Ligilactobacillus animalis Under Brightfield Microscopy.jpg", author: "Varun Punnam", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:1000x_Magnification_of_Gram_Stain_of_Ligilactobacillus_animalis_Under_Brightfield_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-staphylococcus-xylosus-1000x': {
    src: '/specimens/gram-stain-staphylococcus-xylosus-1000x.webp', title: "1000x Magnification of Gram Stain of Staphylococcus xylosus Under Brightfield Microscopy.jpg", author: "Varun Punnam", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:1000x_Magnification_of_Gram_Stain_of_Staphylococcus_xylosus_Under_Brightfield_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-alcaligenes-faecalis': {
    src: '/specimens/gram-stain-alcaligenes-faecalis.webp', title: "11G0002 lores.jpg", author: "CDC/ Dr. W.A. Clark", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:11G0002_lores.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'three-basophil-granulocytes': {
    src: '/specimens/three-basophil-granulocytes.webp', title: "20100313 005313 BasophilGranulocytes.jpg", author: "Bob Blaylock (talk)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20100313_005313_BasophilGranulocytes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'staphylococcus-gram-stain-with-scale-ticks': {
    src: '/specimens/staphylococcus-gram-stain-with-scale-ticks.webp', title: "20101017 231210 Staphylococcus.jpg", author: "Bob Blaylock", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20101017_231210_Staphylococcus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-gram-stain': {
    src: '/specimens/lactobacillus-acidophilus-gram-stain.webp', title: "20101212 205549 LactobacillusAcidophilus.jpg", author: "Bob Blaylock", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20101212_205549_LactobacillusAcidophilus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-aerococcus-urinae-gram-positive-cocci': {
    src: '/specimens/gram-stain-aerococcus-urinae-gram-positive-cocci.webp', title: "Aerococcus urinae - microscopy.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerococcus_urinae_-_microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-aeromonas-veronii-gram-negative-rods': {
    src: '/specimens/gram-stain-aeromonas-veronii-gram-negative-rods.webp', title: "Aeromonas veronii biovar sobria Gram Stain on Microscope Slide.jpg", author: "B. Domangue", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aeromonas_veronii_biovar_sobria_Gram_Stain_on_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-allium-cepa-root-tip-longitudinal-section-differentiation-zone': {
    src: '/specimens/onion-allium-cepa-root-tip-longitudinal-section-differentiation-zone.webp', title: "Allium-Differenzierung02-DM100x HF ba1.jpg", author: "Dr. phil.nat Thomas Geier, Fachgebiet Botanik der Forschungsanstalt Geisenheim.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Allium-Differenzierung02-DM100x_HF_ba1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-in-onion-root-meristem-anaphase': {
    src: '/specimens/mitosis-in-onion-root-meristem-anaphase.webp', title: "Anafase Mitosis Cebolla.jpg", author: "Viascos", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anafase_Mitosis_Cebolla.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'anaphase-of-plant-cell-mitosis': {
    src: '/specimens/anaphase-of-plant-cell-mitosis.webp', title: "Anaphase of plant cell mitosis.jpg", author: "\u0414\u0430\u0432\u0438\u0434 \u0410\u043d\u0434\u0440\u043e\u043d\u043e\u0432", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anaphase_of_plant_cell_mitosis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacillus-anthracis': {
    src: '/specimens/gram-stain-bacillus-anthracis.webp', title: "Bacillus anthracis Gram.jpg", author: "Photo Credit:", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_anthracis_Gram.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacillus-coagulans': {
    src: '/specimens/gram-stain-bacillus-coagulans.webp', title: "Bacillus coagulans 01.jpg", author: "Dr. William A. Clark", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_coagulans_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacillus-subtilis': {
    src: '/specimens/gram-stain-bacillus-subtilis.webp', title: "Bacillus subtilis Gram stain.jpg", author: "Riraq25", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_subtilis_Gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacteroides-fragilis': {
    src: '/specimens/gram-stain-bacteroides-fragilis.webp', title: "BacteroidesFragilis Gram.jpg", author: "Content Providers(s): CDC/Dr. V.R. Dowell, Jr.", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BacteroidesFragilis_Gram.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'band-neutrophil-in-a-wright-stained-blood-smear': {
    src: '/specimens/band-neutrophil-in-a-wright-stained-blood-smear.webp', title: "Band form neutrophil in Wright stained PBS microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Band_form_neutrophil_in_Wright_stained_PBS_microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'band-neutrophil-in-a-blood-smear-40x': {
    src: '/specimens/band-neutrophil-in-a-blood-smear-40x.webp', title: "Band neutrophil.JPG", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Band_neutrophil.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'moss-barbula-unguiculata-leaf-cells-400x': {
    src: '/specimens/moss-barbula-unguiculata-leaf-cells-400x.webp', title: "Barbula unguiculata lamina.jpeg", author: "Kristian Peters -- Fabelfroh 13:26, 29 December 2006 (UTC)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Barbula_unguiculata_lamina.jpeg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'moss-bartramia-ithyphylla-leaf-sheath-125x': {
    src: '/specimens/moss-bartramia-ithyphylla-leaf-sheath-125x.webp', title: "Bartramia ithyphylla blattscheide.jpeg", author: "Kristian Peters -- Fabelfroh 13:24, 23 September 2007 (UTC)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bartramia_ithyphylla_blattscheide.jpeg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stained-plant-section-xylem-with-secondary-thickening': {
    src: '/specimens/stained-plant-section-xylem-with-secondary-thickening.webp', title: "Barwiony preparat ro\u015blinny.jpg", author: "Figafiga888", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Barwiony_preparat_ro\u015blinny.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basophil-in-blood-giemsa-stain': {
    src: '/specimens/basophil-in-blood-giemsa-stain.webp', title: "Basophil in blood.jpg", author: "Animalculist", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basophil_in_blood.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'binucleated-neutrophil-in-a-blood-smear': {
    src: '/specimens/binucleated-neutrophil-in-a-blood-smear.webp', title: "Binucleated neutrophil smear 2009-11-16.JPG", author: "Paulo Henrique Orlandi Mourao", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Binucleated_neutrophil_smear_2009-11-16.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-blood-smear': {
    src: '/specimens/human-blood-smear.webp', title: "Blood smear (265 21) Human.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(265_21)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-erythrocytes-and-platelets-1': {
    src: '/specimens/blood-erythrocytes-and-platelets-1.webp', title: "Blood1.jpg", author: "Echinaceapallida", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-equisetum-arvense-horsetail': {
    src: '/specimens/leaf-epidermis-and-stomata-print-equisetum-arvense-horsetail.webp', title: "01-Stack 201 Equisetum 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:01-Stack_201_Equisetum_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-dryopteris-sp-fern': {
    src: '/specimens/leaf-epidermis-and-stomata-print-dryopteris-sp-fern.webp', title: "02-Stack 174 Fern 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:02-Stack_174_Fern_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-ginkgo-biloba': {
    src: '/specimens/leaf-epidermis-and-stomata-print-ginkgo-biloba.webp', title: "03-Stack 175 Ginkgo 10x obj leaf print 01.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:03-Stack_175_Ginkgo_10x_obj_leaf_print_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-araucaria-araucana': {
    src: '/specimens/leaf-epidermis-and-stomata-print-araucaria-araucana.webp', title: "04-Stack 101 Monkeypuzzle 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:04-Stack_101_Monkeypuzzle_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-picea-abies': {
    src: '/specimens/leaf-epidermis-and-stomata-print-picea-abies.webp', title: "07-Stack 98 Norway spruce 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:07-Stack_98_Norway_spruce_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-hordeum-murinum': {
    src: '/specimens/leaf-epidermis-and-stomata-print-hordeum-murinum.webp', title: "09-Stack 28 Wall Barley 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:09-Stack_28_Wall_Barley_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-triticum-aestivum': {
    src: '/specimens/leaf-epidermis-and-stomata-print-triticum-aestivum.webp', title: "10-Stack 31 Wheat 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:10-Stack_31_Wheat_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-zea-mays': {
    src: '/specimens/leaf-epidermis-and-stomata-print-zea-mays.webp', title: "13-Stack 199 Maize 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:13-Stack_199_Maize_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-ananas-comosus': {
    src: '/specimens/leaf-epidermis-and-stomata-print-ananas-comosus.webp', title: "14-Stack 133 Pineapple 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:14-Stack_133_Pineapple_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-iris-sp': {
    src: '/specimens/leaf-epidermis-and-stomata-print-iris-sp.webp', title: "15-Stack 01 Iris 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:15-Stack_01_Iris_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-zantedeschia-aethiopica': {
    src: '/specimens/leaf-epidermis-and-stomata-print-zantedeschia-aethiopica.webp', title: "15-Stack 104 Arum lily 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:15-Stack_104_Arum_lily_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-holly-ilex-aquifolium': {
    src: '/specimens/leaf-epidermis-and-stomata-print-holly-ilex-aquifolium.webp', title: "151 Holly Ilex aquifolium LEAF print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:151_Holly_Ilex_aquifolium_LEAF_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-brassica-oleracea-green-cabbage': {
    src: '/specimens/leaf-epidermis-and-stomata-print-brassica-oleracea-green-cabbage.webp', title: "158 Brassica oleracea Green Cabbage LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:158_Brassica_oleracea_Green_Cabbage_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-eucalyptus-gunni-lower-side': {
    src: '/specimens/leaf-epidermis-and-stomata-print-eucalyptus-gunni-lower-side.webp', title: "166 Eucalyptus gunni lower side LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:166_Eucalyptus_gunni_lower_side_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-ricinus-communis-castor-oil': {
    src: '/specimens/leaf-epidermis-and-stomata-print-ricinus-communis-castor-oil.webp', title: "167 Ricinus communis Castor oil LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:167_Ricinus_communis_Castor_oil_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-allium-cepa-spring-onion-outer': {
    src: '/specimens/leaf-epidermis-and-stomata-print-allium-cepa-spring-onion-outer.webp', title: "169 Allium cepa Spring Onion outer LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:169_Allium_cepa_Spring_Onion_outer_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-brucella-gram-negative-coccobacilli': {
    src: '/specimens/gram-stain-brucella-gram-negative-coccobacilli.webp', title: "Brucella spp.JPG", author: "Photo Credit:", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brucella_spp.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'moss-bryum-caespiticium-leaf-cells-400x': {
    src: '/specimens/moss-bryum-caespiticium-leaf-cells-400x.webp', title: "Bryum caespiticium lamina.jpg", author: "Kristian Peters -- Fabelfroh 06:26, 17 June 2007 (UTC)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bryum_caespiticium_lamina.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'liverwort-cephalozia-connivens-side-leaf-250x': {
    src: '/specimens/liverwort-cephalozia-connivens-side-leaf-250x.webp', title: "Cephalozia connivens flankenblatt.jpeg", author: "Kristian Peters -- Fabelfroh 12:17, 8 February 2007 (UTC)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cephalozia_connivens_flankenblatt.jpeg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-candida-dubliniensis-yeast-1000x': {
    src: '/specimens/gram-stain-candida-dubliniensis-yeast-1000x.webp', title: "Candida dubliniensis.jpg", author: "Stefan Walkowski", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_dubliniensis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hookworm-ancylostoma-caninum-egg-from-a-dog-fecal-sample': {
    src: '/specimens/hookworm-ancylostoma-caninum-egg-from-a-dog-fecal-sample.webp', title: "Canine hookworm egg 1.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Canine_hookworm_egg_1.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fur-mite-cheyletiella-parasitivorax': {
    src: '/specimens/cat-fur-mite-cheyletiella-parasitivorax.webp', title: "Cheyletiella-parasitivorax-mite.jpg", author: "Daktaridudu", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cheyletiella-parasitivorax-mite.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cattle-mange-mite-chorioptes-bovis': {
    src: '/specimens/cattle-mange-mite-chorioptes-bovis.webp', title: "Chorioptes-bovis-mite.jpg", author: "Daktaridudu", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chorioptes-bovis-mite.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'poultry-red-mite-dermanyssus-gallinae': {
    src: '/specimens/poultry-red-mite-dermanyssus-gallinae.webp', title: "Dermanyssus mite of birds.jpg", author: "Daktaridudu", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dermanyssus_mite_of_birds.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fungus-choanephora-sporangia-with-spores': {
    src: '/specimens/fungus-choanephora-sporangia-with-spores.webp', title: "Choanephhora sporangia.jpg", author: "Vmeashi", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Choanephhora_sporangia.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fungus-choanephora-sporangiophore-bearing-sporangiola': {
    src: '/specimens/fungus-choanephora-sporangiophore-bearing-sporangiola.webp', title: "Choanephora.jpg", author: "Vmeashi", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Choanephora.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ciliate-protozoan-cinetochilum-margaritaceum-400x': {
    src: '/specimens/ciliate-protozoan-cinetochilum-margaritaceum-400x.webp', title: "Cinetochilium magaritaceum - 400x (13895749243).jpg", author: "Picturepest", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cinetochilium_magaritaceum_-_400x_(13895749243).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-citrobacter-freundii-gram-negative-rods': {
    src: '/specimens/gram-stain-citrobacter-freundii-gram-negative-rods.webp', title: "Citrobacter freundii Gram stain.jpg", author: "Riraq25", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Citrobacter_freundii_Gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-corynebacterium-xerosis-1000x': {
    src: '/specimens/gram-stain-corynebacterium-xerosis-1000x.webp', title: "Corynebacterium xerosis Gram stain.jpg", author: "Wen F, Xing X, Bao S, Hu Y, Hao BC", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Corynebacterium_xerosis_Gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'red-cell-agglutination-by-cold-agglutinins': {
    src: '/specimens/red-cell-agglutination-by-cold-agglutinins.webp', title: "Crioaglutininas.jpg", author: "DaFerRod", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crioaglutininas.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cryptococcus-in-india-ink-capsule-visible': {
    src: '/specimens/cryptococcus-in-india-ink-capsule-visible.webp', title: "Cryptococcus in India Ink.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cryptococcus_in_India_Ink.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-blue-green-algae-from-a-freshwater-bloom': {
    src: '/specimens/cyanobacteria-blue-green-algae-from-a-freshwater-bloom.webp', title: "Cyanoprocaryota.JPG", author: "Riparia1977", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanoprocaryota.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'umbrella-plant-cyperus-alternifolius-stalk-etzold-green': {
    src: '/specimens/umbrella-plant-cyperus-alternifolius-stalk-etzold-green.webp', title: "Cyperus alternifolius, stalk, Etzold green 9.jpg", author: "User:Micropix", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyperus_alternifolius,_stalk,_Etzold_green_9.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'b-lymphoblastic-cell-line-in-culture-phase-contrast-100x': {
    src: '/specimens/b-lymphoblastic-cell-line-in-culture-phase-contrast-100x.webp', title: "C\u00e9lulas B-linfobl\u00e1sticas 100x.jpg", author: "Ca.garcia.s", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C\u00e9lulas_B-linfobl\u00e1sticas_100x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fish-tapeworm-diphyllobothrium-latum-egg-with-operculum': {
    src: '/specimens/fish-tapeworm-diphyllobothrium-latum-egg-with-operculum.webp', title: "Diphyllobothrium latum egg.jpg", author: "Stefan Walkowski", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diphyllobothrium_latum_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'echinococcus-granulosus-protoscolex-with-hooks': {
    src: '/specimens/echinococcus-granulosus-protoscolex-with-hooks.webp', title: "E.granulosus-protoscolex.jpg", author: "Stefan Walkowski", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:E.granulosus-protoscolex.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'liver-fluke-fasciola-egg': {
    src: '/specimens/liver-fluke-fasciola-egg.webp', title: "Egg of Liver Fluke.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Egg_of_Liver_Fluke.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pinworm-egg-urine-microscopy': {
    src: '/specimens/pinworm-egg-urine-microscopy.webp', title: "Egg of Pinworm found during Urine Microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Egg_of_Pinworm_found_during_Urine_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'whipworm-trichuris-trichiura-egg': {
    src: '/specimens/whipworm-trichuris-trichiura-egg.webp', title: "Egg of Trichuris trichiura.jpg", author: "Microrao", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Egg_of_Trichuris_trichiura.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'chlamydia-in-a-cervical-smear-giemsa-stain': {
    src: '/specimens/chlamydia-in-a-cervical-smear-giemsa-stain.webp', title: "Chlamydia-22Feb25.jpg", author: "Bondarev.gal", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chlamydia-22Feb25.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'chicken-embryo-trunk-fold-stage': {
    src: '/specimens/chicken-embryo-trunk-fold-stage.webp', title: "Chicken embryo at the stage of formation of trunk and amniotic folds.jpg", author: "Agentkot", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chicken_embryo_at_the_stage_of_formation_of_trunk_and_amniotic_folds.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ehrlichia-and-babesia-in-a-dog-blood-film-giemsa': {
    src: '/specimens/ehrlichia-and-babesia-in-a-dog-blood-film-giemsa.webp', title: "Ehrlichia-and-babesia-dog-South-Africa.jpg", author: "Alan R Walker", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ehrlichia-and-babesia-dog-South-Africa.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-enterobacter-aerogenes': {
    src: '/specimens/gram-stain-enterobacter-aerogenes.webp', title: "Enterobacter aerogenes.jpg", author: "Riraq25", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Enterobacter_aerogenes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-of-tall-fescue-grass-festuca-arundinacea': {
    src: '/specimens/leaf-epidermis-of-tall-fescue-grass-festuca-arundinacea.webp', title: "Epidermis of Festuca arundinacea.jpg", author: "Plantsurfer", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epidermis_of_Festuca_arundinacea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'schistocytes-in-haemolytic-anaemia': {
    src: '/specimens/schistocytes-in-haemolytic-anaemia.webp', title: "Esquistocitos.jpg", author: "DaFerRod", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Esquistocitos.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'xylem-vessels-of-fig-ficus-sp': {
    src: '/specimens/xylem-vessels-of-fig-ficus-sp.webp', title: "Ficusxylem.jpg", author: "The original uploader was Zaoui58 at English Wikipedia.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ficusxylem.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'firebrat-thermobia-domestica-whole-mount': {
    src: '/specimens/firebrat-thermobia-domestica-whole-mount.webp', title: "Firebrat (Thermobia domestica).jpg", author: "KyleCMSmith", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Firebrat_(Thermobia_domestica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fibroblast-and-endothelial-co-culture-forming-new-blood-vessels': {
    src: '/specimens/fibroblast-and-endothelial-co-culture-forming-new-blood-vessels.webp', title: "Formation of the new blood vessels.jpg", author: "Piotr Cywoniuk, Foundation of Research and Science Development, Poland Fundacja Bada\u0144 i Rozwoju Nauki", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Formation_of_the_new_blood_vessels.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cypress-pollen-grain-in-a-nasal-cytology-smear': {
    src: '/specimens/cypress-pollen-grain-in-a-nasal-cytology-smear.webp', title: "Foto granul of cypress pollen. Nasal citology. Ottical microscopic 100X.jpg", author: "Pietro Pecoraro", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Foto_granul_of_cypress_pollen._Nasal_citology._Ottical_microscopic_100X.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fungal-hyphae-in-a-urine-sample': {
    src: '/specimens/fungal-hyphae-in-a-urine-sample.webp', title: "Fungal hyphae in Urine sample.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fungal_hyphae_in_Urine_sample.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'branching-gram-positive-filaments-in-sputum': {
    src: '/specimens/branching-gram-positive-filaments-in-sputum.webp', title: "Gram-Positive Fungal Hyphae Observed in Gram-Stained Sputum.jpg", author: "Ajay Kumar Chaurasiya", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram-Positive_Fungal_Hyphae_Observed_in_Gram-Stained_Sputum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'oomycete-spores-among-fungicide-crystals': {
    src: '/specimens/oomycete-spores-among-fungicide-crystals.webp', title: "Fungicidecrystals vsoomyctespores.jpg", author: "Irenemaja.nanni", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fungicidecrystals_vsoomyctespores.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-clostridium-perfringens': {
    src: '/specimens/gram-stain-clostridium-perfringens.webp', title: "Gasbrand02.JPG", author: "Andreas Zautner", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gasbrand02.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gonococcal-urethritis-pus-cells-with-gram-negative-diplococci': {
    src: '/specimens/gonococcal-urethritis-pus-cells-with-gram-negative-diplococci.webp', title: "Gonococcal urethritis PHIL 4085 lores.jpg", author: "CDC/ Joe Millar", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gonococcal_urethritis_PHIL_4085_lores.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-positive-and-gram-negative-bacilli-with-pus-cells': {
    src: '/specimens/gram-positive-and-gram-negative-bacilli-with-pus-cells.webp', title: "Gram positive and negative bacteria and pus cells in Gram staining of sputum.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_positive_and_negative_bacteria_and_pus_cells_in_Gram_staining_of_sputum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-positive-cocci-in-chains-gemella': {
    src: '/specimens/gram-positive-cocci-in-chains-gemella.webp', title: "Gram positive cocci in chains of Streptococcus agalactiae.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_positive_cocci_in_chains_of_Streptococcus_agalactiae.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-pseudoglutamicibacter-cumminsii': {
    src: '/specimens/gram-stain-pseudoglutamicibacter-cumminsii.webp', title: "Gram stain of Pseudoglutamicibacter cumminsii.jpg", author: "Gustavo Saint-Pierre, Leonardo Chanqueo, Alejandra C\u00e9spedes", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_stain_of_Pseudoglutamicibacter_cumminsii.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-rothia-dentocariosa': {
    src: '/specimens/gram-stain-rothia-dentocariosa.webp', title: "Gram stain of Rothia dentocariosa.jpg", author: "Alan Ytzeen Mart\u00ednez Castellanos, Mariel Idalid Dom\u00ednguez Zepahua, Mar\u00eda Leticia Acosta Monreal, Armando Rodr\u00edguez Rodr\u00edguez, Luis Fernando P\u00e9rez Gonz\u00e1lez, Lilia Esperanza Fragoso Morales", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_stain_of_Rothia_dentocariosa.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-streptococcus-pneumoniae': {
    src: '/specimens/gram-stain-streptococcus-pneumoniae.webp', title: "Gram stain of Streptococcus pneumoniae.jpg", author: "Arnold Kaufman", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_stain_of_Streptococcus_pneumoniae.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-of-saliva': {
    src: '/specimens/gram-stain-of-saliva.webp', title: "Gram stain saliva.jpg", author: "Microrao", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_stain_saliva.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-variability-in-cocci': {
    src: '/specimens/gram-variability-in-cocci.webp', title: "Gram variability.jpg", author: "Microrao", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_variability.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-positive-cocci-probable-staphylococcus-aureus': {
    src: '/specimens/gram-positive-cocci-probable-staphylococcus-aureus.webp', title: "Gram-positive stain.jpg", author: "Patho", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram-positive_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sputum-gram-stain-haemophilus-influenzae': {
    src: '/specimens/sputum-gram-stain-haemophilus-influenzae.webp', title: "Haemophilus influenzae sputum 1000x edited.jpg", author: "Microman12345", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Haemophilus_influenzae_sputum_1000x_edited.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'filamentous-green-alga': {
    src: '/specimens/filamentous-green-alga.webp', title: "Green algae .jpg", author: "User:Micropix", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Green_algae_.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'diatom-chain-guinardia-sp': {
    src: '/specimens/diatom-chain-guinardia-sp.webp', title: "Guinardia sp.@ALA.jpg", author: "ala.org.au", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Guinardia_sp.@ALA.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'dinoflagellates-of-the-genus-ostreopsis': {
    src: '/specimens/dinoflagellates-of-the-genus-ostreopsis.webp', title: "Imag 1 29216c.jpg", author: "Suliman S.\u00a0S. Abuaziz, Suraboyina Pavani, Kanchan Singh", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Imag_1_29216c.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ivy-hedera-helix-leaf-epidermis-and-stomata-print': {
    src: '/specimens/ivy-hedera-helix-leaf-epidermis-and-stomata-print.webp', title: "Hedera helix (Ivy) leaf epidermis and stomata print 100x.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hedera_helix_(Ivy)_leaf_epidermis_and_stomata_print_100x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hyacinth-leaf-epidermis-print-with-stomata': {
    src: '/specimens/hyacinth-leaf-epidermis-print-with-stomata.webp', title: "Hyacinth var L'Ophir (1770) leaf epidermis print with stomata 10x objective.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hyacinth_var_L'Ophir_(1770)_leaf_epidermis_print_with_stomata_10x_objective.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ragwort-jacobaea-vulgaris-leaf-epidermis-and-stomata-400x': {
    src: '/specimens/ragwort-jacobaea-vulgaris-leaf-epidermis-and-stomata-400x.webp', title: "Jacobaea vulgaris leaf epidermis and stomata print 400x.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Jacobaea_vulgaris_leaf_epidermis_and_stomata_print_400x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'toxascaris-egg-from-a-dog-bright-field': {
    src: '/specimens/toxascaris-egg-from-a-dog-bright-field.webp', title: "Huevo de toascaris en campo claro.jpg", author: "Brandon Antonio Segura Torres & Priscilla Vieto Bonilla", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Huevo_de_toascaris_en_campo_claro.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hortaea-werneckii-the-fungus-of-tinea-nigra': {
    src: '/specimens/hortaea-werneckii-the-fungus-of-tinea-nigra.webp', title: "Hortaea-werneckii-fungus--causes-tinea-nigra.jpg", author: "CDC/Dr. Lucille K. Georg", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hortaea-werneckii-fungus--causes-tinea-nigra.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-peripheral-blood-smear-may-grunwald-stain': {
    src: '/specimens/human-peripheral-blood-smear-may-grunwald-stain.webp', title: "Human peripheral blood smear, May-Gr\u00fcnwald stain.jpg", author: "Bondarev.gal", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_peripheral_blood_smear,_May-Gr\u00fcnwald_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hyalomma-female-tick-dorsal-view': {
    src: '/specimens/hyalomma-female-tick-dorsal-view.webp', title: "Hyalomma tick female dorsal.jpg", author: "Acarologiste", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hyalomma_tick_female_dorsal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hyalomma-rufipes-ticks-female-and-male': {
    src: '/specimens/hyalomma-rufipes-ticks-female-and-male.webp', title: "Hyalomma-rufipes-female-male.jpg", author: "Daktaridudu", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hyalomma-rufipes-female-male.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'freshwater-amphipod-hyalella-azteca-with-an-acanthocephalan-parasite': {
    src: '/specimens/freshwater-amphipod-hyalella-azteca-with-an-acanthocephalan-parasite.webp', title: "IMGP7610-Hyalella azteca with acanthocephalan in body cavity!.jpg", author: "Nemataslg", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:IMGP7610-Hyalella_azteca_with_acanthocephalan_in_body_cavity!.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'elodea-leaf-cells': {
    src: '/specimens/elodea-leaf-cells.webp', title: "Elodea cells under microscope.jpg", author: "~delta", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Elodea_cells_under_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'moth-wing-scales-with-pollen': {
    src: '/specimens/moth-wing-scales-with-pollen.webp', title: "Escamas de ala de polilla con polen.jpg", author: "Brandon Antonio Segura Torres & Priscilla Vieto Bonilla", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escamas_de_ala_de_polilla_con_polen.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichogramma-parasitoid-wasps-on-host-eggs': {
    src: '/specimens/trichogramma-parasitoid-wasps-on-host-eggs.webp', title: "Females of Trichogramma dendrolimi on eggs of hawkmoth (Sphingidae), photo was taken by Dr Victor Fursov.jpg", author: "Dr Victor Fursov", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Females_of_Trichogramma_dendrolimi_on_eggs_of_hawkmoth_(Sphingidae),_photo_was_taken_by_Dr_Victor_Fursov.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mouse-embryos-at-the-4-8-and-16-cell-stage': {
    src: '/specimens/mouse-embryos-at-the-4-8-and-16-cell-stage.webp', title: "Geometric Progression.jpg", author: "Vitalii Kyryk", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Geometric_Progression.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'glandular-hairs-on-a-geranium-pedicel-geranium-dissectum': {
    src: '/specimens/glandular-hairs-on-a-geranium-pedicel-geranium-dissectum.webp', title: "Geranium dissectum sl10.jpg", author: "Stefan.lefnaer", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Geranium_dissectum_sl10.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gynoecium-and-androecium-of-a-prickly-pear-flower-opuntia': {
    src: '/specimens/gynoecium-and-androecium-of-a-prickly-pear-flower-opuntia.webp', title: "Gineceo y androceo en flor de nopal (Opuntia sp.).jpg", author: "Juan Carlos Fonseca Mata", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gineceo_y_androceo_en_flor_de_nopal_(Opuntia_sp.).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'grain-mite-glycyphagus-sp': {
    src: '/specimens/grain-mite-glycyphagus-sp.webp', title: "Glycyphagus-spp-mite.jpg", author: "Daktaridudu", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Glycyphagus-spp-mite.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tsetse-fly-glossina-adult-and-puparium': {
    src: '/specimens/tsetse-fly-glossina-adult-and-puparium.webp', title: "Glossina adult puparium.jpg", author: "Acarologiste", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Glossina_adult_puparium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'amaryllis-hippeastrum-pollen-on-a-stamen': {
    src: '/specimens/amaryllis-hippeastrum-pollen-on-a-stamen.webp', title: "Hippeastrum - py\u0142ek.jpg", author: "Kruczy89", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hippeastrum_-_py\u0142ek.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'howell-jolly-bodies-in-red-blood-cells': {
    src: '/specimens/howell-jolly-bodies-in-red-blood-cells.webp', title: "Howell-Jolly smear 2010-11-17.JPG", author: "Paulo Henrique Orlandi Mourao", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Howell-Jolly_smear_2010-11-17.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hydrurus-foetidus-a-cold-water-chrysophyte-alga': {
    src: '/specimens/hydrurus-foetidus-a-cold-water-chrysophyte-alga.webp', title: "Hydrurus foetidius.jpg", author: "Dionaea-muscipula-meow", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydrurus_foetidius.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'root-hairs-of-a-monocot-root': {
    src: '/specimens/root-hairs-of-a-monocot-root.webp', title: "IMG-b6ca6ae6158644399cb0c153d19c1aa4-V.jpg", author: "Babdou ahmed", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:IMG-b6ca6ae6158644399cb0c153d19c1aa4-V.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ideal-blood-smear-head-body-and-tail': {
    src: '/specimens/ideal-blood-smear-head-body-and-tail.webp', title: "Ideal blood smear showing tongue shape having head, body and tail portions.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ideal_blood_smear_showing_tongue_shape_having_head,_body_and_tail_portions.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sputum-smear-with-pus-cells-quality-check': {
    src: '/specimens/sputum-smear-with-pus-cells-quality-check.webp', title: "Ideal smear of Sputum.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ideal_smear_of_Sputum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stem-and-leaf-of-dame-s-rocket-hesperis-sylvestris': {
    src: '/specimens/stem-and-leaf-of-dame-s-rocket-hesperis-sylvestris.webp', title: "Hesperis sylvestris sl15.jpg", author: "Stefan.lefnaer", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hesperis_sylvestris_sl15.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'diatom-eucampia-zodiacus-light-and-electron-microscopy': {
    src: '/specimens/diatom-eucampia-zodiacus-light-and-electron-microscopy.webp', title: "Img09-03-v2.jpg", author: "Patricio Rivera, Sergio Avaria, Fabiola Cruces", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Img09-03-v2.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'foraminifera-globigerinidae-in-mudstone-polarised-light': {
    src: '/specimens/foraminifera-globigerinidae-in-mudstone-polarised-light.webp', title: "Globigerine.JPG", author: "Strekeisen", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Globigerine.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mould-growth-under-the-microscope-200x': {
    src: '/specimens/mould-growth-under-the-microscope-200x.webp', title: "Grzyb i ple\u015b\u0144 w \u0142azience.jpg", author: "Cent9", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Grzyb_i_ple\u015b\u0144_w_\u0142azience.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gram-negative-rods-and-gram-positive-cocci": {
    src: '/specimens/gram-negative-rods-and-gram-positive-cocci.webp', title: "Gram negative rods and gram positive cocci 1.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_negative_rods_and_gram_positive_cocci_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "macrophage-with-ingested-staphylococcus-epidermidis-gram-stain": {
    src: '/specimens/macrophage-with-ingested-staphylococcus-epidermidis-gram-stain.webp', title: "Gram stain of a macrophage with ingested S epidermidis bacteria.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_stain_of_a_macrophage_with_ingested_S_epidermidis_bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "paramecium-forming-a-cyst-safranin-stain": {
    src: '/specimens/paramecium-forming-a-cyst-safranin-stain.webp', title: "Paramecium undergoing Cyst Formation.jpg", author: "Sayanur Rahaman", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_undergoing_Cyst_Formation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ochroconis-gallopava-conidia-lactophenol-cotton-blue": {
    src: '/specimens/ochroconis-gallopava-conidia-lactophenol-cotton-blue.webp', title: "The microscopic morphology of Ochroconis gallopava stained with lactophenol cotton blue (LPCB) two celled conidia produced on narrow cylindrical denticles.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_microscopic_morphology_of_Ochroconis_gallopava_stained_with_lactophenol_cotton_blue_(LPCB)_two_celled_conidia_produced_on_narrow_cylindrical_denticles.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "crystals-in-joint-tissue-polarised-light-pseudogout": {
    src: '/specimens/crystals-in-joint-tissue-polarised-light-pseudogout.webp', title: "Birefringence microscopy of pseudogout.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Birefringence_microscopy_of_pseudogout.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lipofuscin-in-cardiac-muscle-h-e": {
    src: '/specimens/lipofuscin-in-cardiac-muscle-h-e.webp', title: "Myocardial lipofuscin (original).jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Myocardial_lipofuscin_(original).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cyanobacterium-anabaena-circinalis": {
    src: '/specimens/cyanobacterium-anabaena-circinalis.webp', title: "Anabaena circinalis phv.jpg", author: "Dr. Imre Oldal", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anabaena_circinalis_phv.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "green-alga-draparnaldia-100x": {
    src: '/specimens/green-alga-draparnaldia-100x.webp', title: "Draparnaldia.jpg", author: "MarekMi\u015b", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Draparnaldia.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "helicosporidium-cells-light-microscopy": {
    src: '/specimens/helicosporidium-cells-light-microscopy.webp', title: "Helicosporidium LM.png", author: "Aur\u00e9lien Tatar", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Helicosporidium_LM.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "filamentous-microalgae-polarised-light-and-dark-field": {
    src: '/specimens/filamentous-microalgae-polarised-light-and-dark-field.webp', title: "Microalgas filamentosas vista con microscopio de luz polarizada y campo oscuro.jpg", author: "Brandon Antonio Segura Torres & Priscilla Vieto Bonilla", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microalgas_filamentosas_vista_con_microscopio_de_luz_polarizada_y_campo_oscuro.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cyanobacterium-microcystis-stagnalis": {
    src: '/specimens/cyanobacterium-microcystis-stagnalis.webp', title: "Microcystis stagnalis phv.jpg", author: "Dr. Imre Oldal", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microcystis_stagnalis_phv.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "navicula-diatoms-polarised-light-400x": {
    src: '/specimens/navicula-diatoms-polarised-light-400x.webp', title: "Okrzemki.jpg", author: "MarekMi\u015b", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Okrzemki.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cyanobacterium-oscillatoria-sp": {
    src: '/specimens/cyanobacterium-oscillatoria-sp.webp', title: "Oscillatoria sp. phv.jpg", author: "Dr. Imre Oldal", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oscillatoria_sp._phv.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "paramecium-bursaria": {
    src: '/specimens/paramecium-bursaria.webp', title: "Paramecium bursaria.jpg", author: "Anatoly Mikhaltsov", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_bursaria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "green-alga-pediastrum-duplex": {
    src: '/specimens/green-alga-pediastrum-duplex.webp', title: "Pediastrum duplex phv.jpg", author: "Dr. Imre Oldal", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pediastrum_duplex_phv.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "amoeba-of-the-genus-cochliopodium-phase-contrast": {
    src: '/specimens/amoeba-of-the-genus-cochliopodium-phase-contrast.webp', title: "\u0410\u043c\u0435\u0431\u0430 \u0440\u043e\u0434\u0430 Cochliopodium.jpg", author: "Andrei Savitsky", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0410\u043c\u0435\u0431\u0430_\u0440\u043e\u0434\u0430_Cochliopodium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "diatomaceous-earth-phase-contrast": {
    src: '/specimens/diatomaceous-earth-phase-contrast.webp', title: "Diatomaceous Earth PhaseContrast.jpg", author: "Zephyris", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatomaceous_Earth_PhaseContrast.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "diatoms-under-fluorescent-light": {
    src: '/specimens/diatoms-under-fluorescent-light.webp', title: "Diatomeas vistas bajo microscopio de luz fluorescente.jpg", author: "Brandon Antonio Segura Torres & Priscilla Vieto Bonilla", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatomeas_vistas_bajo_microscopio_de_luz_fluorescente.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "diatoms-among-debris-light-microscope-40x": {
    src: '/specimens/diatoms-among-debris-light-microscope-40x.webp', title: "Diatoms Under Light Microscope 40x Mag.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatoms_Under_Light_Microscope_40x_Mag.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "picoplankton-by-epifluorescence-pacific-ocean": {
    src: '/specimens/picoplankton-by-epifluorescence-pacific-ocean.webp', title: "Picoplancton fluorescence Pacific.jpg", author: "Daniel Vaulot, CNRS, Station Biologique de Roscoff", license: "CC BY-SA 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Picoplancton_fluorescence_Pacific.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hookworm-ancylostoma-duodenale-female": {
    src: '/specimens/hookworm-ancylostoma-duodenale-female.webp', title: "Ancylostoma duodenale female, Under microscope 2024.jpg", author: "Nour Dawod", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ancylostoma_duodenale_female,_Under_microscope_2024.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nematode-heligmosomoides-polygyrus": {
    src: '/specimens/nematode-heligmosomoides-polygyrus.webp', title: "Heligmosomoides.jpg", author: "User:Naldo-Crocoduck", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Heligmosomoides.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nematode-under-the-microscope": {
    src: '/specimens/nematode-under-the-microscope.webp', title: "Nematoda.jpg", author: "Dominik1232", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nematoda.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "caenorhabditis-elegans-under-the-microscope": {
    src: '/specimens/caenorhabditis-elegans-under-the-microscope.webp', title: "Nematode Caenorhabditis Elegans.jpg", author: "\u0413\u041f", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nematode_Caenorhabditis_Elegans.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "strongyloides-stercoralis-larva-stool-wet-mount": {
    src: '/specimens/strongyloides-stercoralis-larva-stool-wet-mount.webp', title: "Strongyloides stercoralis in Stool Wet Mount Microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Strongyloides_stercoralis_in_Stool_Wet_Mount_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "trichinella-spiralis-40x-objective": {
    src: '/specimens/trichinella-spiralis-40x-objective.webp', title: "Trichinella spiralis (01).jpg", author: "MostlyDross", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichinella_spiralis_(01).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nematode-differential-interference-contrast": {
    src: '/specimens/nematode-differential-interference-contrast.webp', title: "\u041d\u0435\u043c\u0430\u0442\u043e\u0434\u0430.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041d\u0435\u043c\u0430\u0442\u043e\u0434\u0430.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "colorectal-cancer-cells-annexin-stain": {
    src: '/specimens/colorectal-cancer-cells-annexin-stain.webp', title: "Anexin stain (9734833573).jpg", author: "Enzymlogic", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anexin_stain_(9734833573).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cervical-cytology-atypical-squamous-cells-probable-lsil-600x": {
    src: '/specimens/cervical-cytology-atypical-squamous-cells-probable-lsil-600x.webp', title: "Atipia de c\u00e9lulas escamosas, probable LSIL, con vaginosis. (9130291917).jpg", author: "Manuel Medina from Osuna, Espa\u00f1a", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Atipia_de_c\u00e9lulas_escamosas,_probable_LSIL,_con_vaginosis._(9130291917).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "basal-cell-carcinoma-of-the-skin": {
    src: '/specimens/basal-cell-carcinoma-of-the-skin.webp', title: "Basal cell carcinoma histology image.jpg", author: "Donela lahari", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basal_cell_carcinoma_histology_image.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cic-dux4-sarcoma-h-e": {
    src: '/specimens/cic-dux4-sarcoma-h-e.webp', title: "CIC-DUX-sarcoma.jpg", author: "Jensflorian", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:CIC-DUX-sarcoma.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "intrahepatic-cholangiocarcinoma-pcna-stain": {
    src: '/specimens/intrahepatic-cholangiocarcinoma-pcna-stain.webp', title: "Colangiocarcinoma intrahep\u00e1tico.jpg", author: "Alfonso Mora", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Colangiocarcinoma_intrahep\u00e1tico.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "atypical-endocervical-glandular-cells-adenocarcinoma": {
    src: '/specimens/atypical-endocervical-glandular-cells-adenocarcinoma.webp', title: "C\u00e9lulas glandulares at\u00edpicas (adenocarcinoma de cuello uterino) (9454839401).jpg", author: "Manuel Medina from Osuna, Espa\u00f1a", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C\u00e9lulas_glandulares_at\u00edpicas_(adenocarcinoma_de_cuello_uterino)_(9454839401).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "elastic-connective-tissue-h-e": {
    src: '/specimens/elastic-connective-tissue-h-e.webp', title: "Elastic CT H&E.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Elastic_CT_H&E.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "archaeological-bone-thin-section-crossed-polars": {
    src: '/specimens/archaeological-bone-thin-section-crossed-polars.webp', title: "GAFA 1996-01-3-1 Str 51 Bone 200fach XPL.jpg", author: "MicroArch", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:GAFA_1996-01-3-1_Str_51_Bone_200fach_XPL.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "stomach-tissue-light-microscopy": {
    src: '/specimens/stomach-tissue-light-microscopy.webp', title: "Gastric Cells.png", author: "Dr. Gangarosa", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gastric_Cells.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hepg2-liver-cell-line-phase-contrast": {
    src: '/specimens/hepg2-liver-cell-line-phase-contrast.webp', title: "HepG2.jpg", author: "User:SubtleGuest", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:HepG2.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mouse-liver-section": {
    src: '/specimens/mouse-liver-section.webp', title: "Histologi Hepar.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_Hepar.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-muscle-section": {
    src: '/specimens/human-muscle-section.webp', title: "Histologi Otot.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_Otot.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-lung-section": {
    src: '/specimens/human-lung-section.webp', title: "Histologi paru-paru.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_paru-paru.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rosette-forming-glioneuronal-tumour-h-e": {
    src: '/specimens/rosette-forming-glioneuronal-tumour-h-e.webp', title: "Histology RGNT HE.jpg", author: "Jensflorian", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histology_RGNT_HE.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rickettsia-rickettsii-in-endothelial-cells-immunostain": {
    src: '/specimens/rickettsia-rickettsii-in-endothelial-cells-immunostain.webp', title: "Immunohistochemical Stain of Rickettsia rickettsii.png", author: "US Centers of Disease Control", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Immunohistochemical_Stain_of_Rickettsia_rickettsii.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "anaplastic-meningioma-with-mitoses-h-e-200x": {
    src: '/specimens/anaplastic-meningioma-with-mitoses-h-e-200x.webp', title: "Mitoses anaplastic meningioma.jpg", author: "Jensflorian", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitoses_anaplastic_meningioma.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nissl-bodies-in-spinal-cord-neurons": {
    src: '/specimens/nissl-bodies-in-spinal-cord-neurons.webp', title: "Nissl bodies in neurons of the spinal cord.jpg", author: "Tulemo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nissl_bodies_in_neurons_of_the_spinal_cord.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "granulosa-cell-clusters-in-squirrel-monkey-ovary": {
    src: '/specimens/granulosa-cell-clusters-in-squirrel-monkey-ovary.webp', title: "Ovarian granulosa cell clusters in an 18-year-old squirrel monkey.jpg", author: "Tulemo", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ovarian_granulosa_cell_clusters_in_an_18-year-old_squirrel_monkey.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "raji-cell-line-in-culture": {
    src: '/specimens/raji-cell-line-in-culture.webp', title: "Raji cell lines.jpg", author: "22Kartika", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Raji_cell_lines.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "chicken-blood-smear-40x": {
    src: '/specimens/chicken-blood-smear-40x.webp', title: "SangPouleMicroscopeX40.jpg", author: "Patbio", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:SangPouleMicroscopeX40.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "sclerosing-mesenteritis-h-e": {
    src: '/specimens/sclerosing-mesenteritis-h-e.webp', title: "Sclerosing Mesenteritis Histology.jpg", author: "Niels Olson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sclerosing_Mesenteritis_Histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "adrenal-gland-silver-stain": {
    src: '/specimens/adrenal-gland-silver-stain.webp', title: "Suprarenal silver stain.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Suprarenal_silver_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pig-thyroid-gland-10x": {
    src: '/specimens/pig-thyroid-gland-10x.webp', title: "ThyroidePorc Microscope10x.jpg", author: "Patbio", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:ThyroidePorc_Microscope10x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "trachea-epithelium-h-e-400x": {
    src: '/specimens/trachea-epithelium-h-e-400x.webp', title: "Traqueia \u2013 HE \u2013 400x.png", author: "Guido Fregapani", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Traqueia_\u2013_HE_\u2013_400x.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-vas-deferens": {
    src: '/specimens/human-vas-deferens.webp', title: "Vas deferens.jpg", author: "Jpogi at English Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vas_deferens.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "paraganglioma-reticulin-stain": {
    src: '/specimens/paraganglioma-reticulin-stain.webp', title: "Zellballen paraganglioma.jpg", author: "Jensflorian", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Zellballen_paraganglioma.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-spinal-cord-neuron-2000x": {
    src: '/specimens/human-spinal-cord-neuron-2000x.webp', title: "\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439 \u043d\u0435\u0439\u0440\u043e\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430.jpg", author: "Gribkov", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041e\u0434\u0438\u043d\u043e\u0447\u043d\u044b\u0439_\u043d\u0435\u0439\u0440\u043e\u043d_\u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rabbit-primary-ovarian-follicles-h-e": {
    src: '/specimens/rabbit-primary-ovarian-follicles-h-e.webp', title: "\u521d\u7ea7\u5375\u6ce1-\u5154.png", author: "Heihaheihaha", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u521d\u7ea7\u5375\u6ce1-\u5154.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "antipathozoanthus-hickmani-body-wall-section": {
    src: '/specimens/antipathozoanthus-hickmani-body-wall-section.webp', title: "Antipathozoanthus hickmani body wall.png", author: "James Davis Reimer, Takuma Fujii", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Antipathozoanthus_hickmani_body_wall.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "endocervical-glands-with-inflammation-h-e": {
    src: '/specimens/endocervical-glands-with-inflammation-h-e.webp', title: "Endocervical glands and stroma with inflammatory infiltrate.jpg", author: "Adel.stoyanova", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Endocervical_glands_and_stroma_with_inflammatory_infiltrate.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hpv-infected-cervical-cell-koilocyte-pap-stain": {
    src: '/specimens/hpv-infected-cervical-cell-koilocyte-pap-stain.webp', title: "HPV-Infected Squamous Cell (Koilocyte) of the Cervix (44001403165).jpg", author: "Ed Uthman from Houston, TX, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:HPV-Infected_Squamous_Cell_(Koilocyte)_of_the_Cervix_(44001403165).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "monosodium-urate-crystals-polarised-light": {
    src: '/specimens/monosodium-urate-crystals-polarised-light.webp', title: "Monosodium Urate Crystals in Elbow Joint Fluid (43911233991).jpg", author: "Ed Uthman from Houston, TX, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Monosodium_Urate_Crystals_in_Elbow_Joint_Fluid_(43911233991).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bipolaris-hyphae-in-bronchial-mucus-gms-stain": {
    src: '/specimens/bipolaris-hyphae-in-bronchial-mucus-gms-stain.webp', title: "Mucoid impaction of bronchi associated with Bipolaris sp. (5136249993).jpg", author: "Yale Rosen from USA", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mucoid_impaction_of_bronchi_associated_with_Bipolaris_sp._(5136249993).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "type-2-pneumocytes-surfactant-immunostain": {
    src: '/specimens/type-2-pneumocytes-surfactant-immunostain.webp', title: "Surfactant immunostain (3734400705).jpg", author: "Yale Rosen from USA", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Surfactant_immunostain_(3734400705).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "tripolar-mitosis-in-a-bronchial-wash": {
    src: '/specimens/tripolar-mitosis-in-a-bronchial-wash.webp', title: "Tripolar Mitosis - bronchial wash.jpg", author: "Ed Uthman from Houston, TX, USA", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tripolar_Mitosis_-_bronchial_wash.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pineal-gland-phase-contrast-200x": {
    src: '/specimens/pineal-gland-phase-contrast-200x.webp', title: "Pinealocytes and Astrocytes in Older Human Pituitary by Phase Contrast (46684388614).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinealocytes_and_Astrocytes_in_Older_Human_Pituitary_by_Phase_Contrast_(46684388614).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-ureter": {
    src: '/specimens/human-ureter.webp', title: "Ureter.JPG", author: "Jpogi at English Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ureter.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hepatocellular-carcinoma-heppar-1-stain": {
    src: '/specimens/hepatocellular-carcinoma-heppar-1-stain.webp', title: "HCC HepPar-1.jpg", author: "Marvin 101", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:HCC_HepPar-1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "astrocytes-gfap-immunostain": {
    src: '/specimens/astrocytes-gfap-immunostain.webp', title: "NP astrocyte GFAP.jpg", author: "Jensflorian", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:NP_astrocyte_GFAP.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "schwannoma-s-100-immunostain": {
    src: '/specimens/schwannoma-s-100-immunostain.webp', title: "Schwannoma Histopathology S100.jpg", author: "Marvin 101", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Schwannoma_Histopathology_S100.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "canine-lymphoma-needle-aspirate-cytology": {
    src: '/specimens/canine-lymphoma-needle-aspirate-cytology.webp', title: "Canine lymphoma 1.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Canine_lymphoma_1.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "slug-digestive-gland-cells-deroceras-laeve-400x": {
    src: '/specimens/slug-digestive-gland-cells-deroceras-laeve-400x.webp', title: "Deroceras laeve hepatopancreas 400 saturn.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_hepatopancreas_400_saturn.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "slug-radula-deroceras-laeve-orcein-stain-400x": {
    src: '/specimens/slug-radula-deroceras-laeve-orcein-stain-400x.webp', title: "Deroceras laeve radula 400 orcein.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_radula_400_orcein.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fungal-elements-in-a-koh-mount-of-sputum-1600x": {
    src: '/specimens/fungal-elements-in-a-koh-mount-of-sputum-1600x.webp', title: "Fungal elements in KOH mount of sputum.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fungal_elements_in_KOH_mount_of_sputum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "giardia-lamblia-cyst-in-a-dog-faecal-smear-lugol-s-iodine": {
    src: '/specimens/giardia-lamblia-cyst-in-a-dog-faecal-smear-lugol-s-iodine.webp', title: "Giardia cyst.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giardia_cyst.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gram-positive-cocci-in-singles-pairs-and-chains": {
    src: '/specimens/gram-positive-cocci-in-singles-pairs-and-chains.webp', title: "Gram positive cocci in singles, pairs and chains.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_positive_cocci_in_singles,_pairs_and_chains.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "microsporum-canis-macroconidium-1000x": {
    src: '/specimens/microsporum-canis-macroconidium-1000x.webp', title: "Microsporum canis 1.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microsporum_canis_1.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pus-cells-in-urine-microscopy-400x": {
    src: '/specimens/pus-cells-in-urine-microscopy-400x.webp', title: "Plenty of pus cells in Urine Microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plenty_of_pus_cells_in_Urine_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "red-blood-cells-and-yeasts-in-urine-microscopy": {
    src: '/specimens/red-blood-cells-and-yeasts-in-urine-microscopy.webp', title: "RBCs and Yeasts in Urine Microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:RBCs_and_Yeasts_in_Urine_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "sperm-viability-test-stained-and-unstained-heads": {
    src: '/specimens/sperm-viability-test-stained-and-unstained-heads.webp', title: "Sperm viability test.jpg", author: "Ghadeer Bustani", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperm_viability_test.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spermatozoa-in-a-ziehl-neelsen-stained-semen-smear-1000x": {
    src: '/specimens/spermatozoa-in-a-ziehl-neelsen-stained-semen-smear-1000x.webp', title: "Spermatozoa in Ziehl-Neelsen stained smear of Semen.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spermatozoa_in_Ziehl-Neelsen_stained_smear_of_Semen.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "thymus-section-h-e": {
    src: '/specimens/thymus-section-h-e.webp', title: "\u0422\u0438\u043c\u0443\u0441.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0422\u0438\u043c\u0443\u0441.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "adipose-tissue-200x": {
    src: '/specimens/adipose-tissue-200x.webp', title: "Connective Tissue Adipose (41066512834).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Adipose_(41066512834).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "elastic-tissue-100x": {
    src: '/specimens/elastic-tissue-100x.webp', title: "Connective Tissue Human Elastic Tissue (40049096890).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Human_Elastic_Tissue_(40049096890).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "loose-areolar-connective-tissue-spread-40x": {
    src: '/specimens/loose-areolar-connective-tissue-spread-40x.webp', title: "Connective Tissue Loose Aerolar (39977986150).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Loose_Aerolar_(39977986150).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "reticular-connective-tissue-40x": {
    src: '/specimens/reticular-connective-tissue-40x.webp', title: "Connective Tissue Reticular (40885191255).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Reticular_(40885191255).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "teased-tendon-200x": {
    src: '/specimens/teased-tendon-200x.webp', title: "Connective Tissue Tendon (26987380607).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Connective_Tissue_Tendon_(26987380607).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "boar-testis-seminiferous-tubules": {
    src: '/specimens/boar-testis-seminiferous-tubules.webp', title: "Testicle-histology-boar.jpg", author: "User:Uwe Gille", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicle-histology-boar.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "parathyroid-chief-and-oxyphil-cells-phase-contrast": {
    src: '/specimens/parathyroid-chief-and-oxyphil-cells-phase-contrast.webp', title: "Cheif Cells and Oyyphilic Cells in Preadolescent Parathyroid Gland by Phase Contrast (47536687311).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cheif_Cells_and_Oyyphilic_Cells_in_Preadolescent_Parathyroid_Gland_by_Phase_Contrast_(47536687311).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "reticular-dermis-collagen-at-high-magnification": {
    src: '/specimens/reticular-dermis-collagen-at-high-magnification.webp', title: "Histology of collagen of skin - high magnification.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histology_of_collagen_of_skin_-_high_magnification.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "epidermis-and-dermis-with-an-intradermal-naevus-10x": {
    src: '/specimens/epidermis-and-dermis-with-an-intradermal-naevus-10x.webp', title: "Normal Epidermis and Dermis with Intradermal Nevus 10x.JPG", author: "Kilbad", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Normal_Epidermis_and_Dermis_with_Intradermal_Nevus_10x.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lacrimal-gland-under-the-microscope": {
    src: '/specimens/lacrimal-gland-under-the-microscope.webp', title: "\u0421\u043b\u0451\u0437\u043d\u0430\u044f \u0436\u0435\u043b\u0435\u0437\u0430.jpg", author: "Pathologist without beard", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0421\u043b\u0451\u0437\u043d\u0430\u044f_\u0436\u0435\u043b\u0435\u0437\u0430.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pine-leaf-needle-cross-section-prepared-slide": {
    src: '/specimens/pine-leaf-needle-cross-section-prepared-slide.webp', title: "20180315pine leaf detail 6284 (26961242978).jpg", author: "MostlyDross from Springfield, VA, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20180315pine_leaf_detail_6284_(26961242978).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cycas-leaflet-cross-section-safranin-stain": {
    src: '/specimens/cycas-leaflet-cross-section-safranin-stain.webp', title: "CS of cycas leaflet.jpg", author: "Adarshjchandran", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:CS_of_cycas_leaflet.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "chestnut-leaf-cross-section": {
    src: '/specimens/chestnut-leaf-cross-section.webp', title: "Coupe tranversale d'une feuille de chataignier vue au microscope avec un grossissement x10.jpg", author: "Skythes2colors", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Coupe_tranversale_d'une_feuille_de_chataignier_vue_au_microscope_avec_un_grossissement_x10.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hydrophyte-leaf-cross-section-stained": {
    src: '/specimens/hydrophyte-leaf-cross-section-stained.webp', title: "Hydrophytic Leaf Cross Section Stained Microscope Slide.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydrophytic_Leaf_Cross_Section_Stained_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lemon-leaf-cross-section-10x": {
    src: '/specimens/lemon-leaf-cross-section-10x.webp', title: "Limonero-al-microscopio.jpg", author: "Luke29", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Limonero-al-microscopio.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mesophyte-leaf-cross-section-stained": {
    src: '/specimens/mesophyte-leaf-cross-section-stained.webp', title: "Mesophytic Leaf Cross Section Microscope Image.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mesophytic_Leaf_Cross_Section_Microscope_Image.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bracken-fern-pteridium-aquilinum-section-calcofluor-white-confocal": {
    src: '/specimens/bracken-fern-pteridium-aquilinum-section-calcofluor-white-confocal.webp', title: "Pteridium aquilinum Dictyostele.jpg", author: "Chernova & Ageeva", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pteridium_aquilinum_Dictyostele.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "xerophyte-leaf-cross-section-stained": {
    src: '/specimens/xerophyte-leaf-cross-section-stained.webp', title: "Xerophytic Leaf Cross Section Stained Microscope Slide.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Xerophytic_Leaf_Cross_Section_Stained_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lily-of-the-valley-convallaria-rhizome-cross-section-fluorescence": {
    src: '/specimens/lily-of-the-valley-convallaria-rhizome-cross-section-fluorescence.webp', title: "Convallaria rhizom.jpg", author: "Steffen Dietzel, Dietzel65", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Convallaria_rhizom.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "roselle-hibiscus-sabdariffa-stem-cross-section": {
    src: '/specimens/roselle-hibiscus-sabdariffa-stem-cross-section.webp', title: "Cross section of Hibiscus sabdariffa caulis.jpg", author: "Theofilus Christian", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cross_section_of_Hibiscus_sabdariffa_caulis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pinus-merkusii-stem-cross-section-safranin": {
    src: '/specimens/pinus-merkusii-stem-cross-section-safranin.webp', title: "Cross section of Pinus merkusii caulis.jpg", author: "Theofilus Christian", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cross_section_of_Pinus_merkusii_caulis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lycopodium-annotinum-stem-section-calcofluor-white-confocal": {
    src: '/specimens/lycopodium-annotinum-stem-section-calcofluor-white-confocal.webp', title: "Lycopodium annotinum Plectostele.jpg", author: "Chernova & Ageeva", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lycopodium_annotinum_Plectostele.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lycopodium-complanatum-stem-section-calcofluor-white-confocal": {
    src: '/specimens/lycopodium-complanatum-stem-section-calcofluor-white-confocal.webp', title: "Lycopodium complanatum Plectostele.jpg", author: "Chernova & Ageeva", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lycopodium_complanatum_Plectostele.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "sphagnum-moss-stained-slide": {
    src: '/specimens/sphagnum-moss-stained-slide.webp', title: "Sphagnum Stained Microscope Slide.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sphagnum_Stained_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "young-stem-of-hibiscus-rosa-sinensis-cross-section-400x": {
    src: '/specimens/young-stem-of-hibiscus-rosa-sinensis-cross-section-400x.webp', title: "Young stem cross section of Hibiscus rosa-sinensis 400x.png", author: "Tr\u01b0\u01a1ng Minh Kh\u1ea3i", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Young_stem_cross_section_of_Hibiscus_rosa-sinensis_400x.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ginkgo-biloba-shoot-cross-section": {
    src: '/specimens/ginkgo-biloba-shoot-cross-section.webp', title: "\u041f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u044b\u0439 \u0441\u0440\u0435\u0437 \u0441\u0442\u0435\u0431\u043b\u044f Ginkgo biloba.jpg", author: "Anatoly Mikhaltsov", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041f\u043e\u043f\u0435\u0440\u0435\u0447\u043d\u044b\u0439_\u0441\u0440\u0435\u0437_\u0441\u0442\u0435\u0431\u043b\u044f_Ginkgo_biloba.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "moss-bryum-capillare-live-leaf-cells": {
    src: '/specimens/moss-bryum-capillare-live-leaf-cells.webp', title: "Bryum capillare leaf cells.jpg", author: "Des_Callaghan", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bryum_capillare_leaf_cells.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "moss-leaf-in-polarised-light": {
    src: '/specimens/moss-leaf-in-polarised-light.webp', title: "\u041b\u0438\u0441\u0442\u043e\u0447\u043e\u043a \u043c\u043e\u0445\u0443 \u0432 \u043f\u043e\u043b\u044f\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u0432\u0456\u0442\u043b\u0456.jpg", author: "Andrei Savitsky", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041b\u0438\u0441\u0442\u043e\u0447\u043e\u043a_\u043c\u043e\u0445\u0443_\u0432_\u043f\u043e\u043b\u044f\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u043c\u0443_\u0441\u0432\u0456\u0442\u043b\u0456.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "moss-leaf-under-the-microscope": {
    src: '/specimens/moss-leaf-under-the-microscope.webp', title: "\u041b\u0438\u0441\u0442\u043e\u0447\u043e\u043a \u043c\u043e\u0445\u0443 \u043f\u0456\u0434 \u043c\u0456\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg", author: "Andrei Savitsky", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041b\u0438\u0441\u0442\u043e\u0447\u043e\u043a_\u043c\u043e\u0445\u0443_\u043f\u0456\u0434_\u043c\u0456\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fungal-spores-optical-microscope": {
    src: '/specimens/fungal-spores-optical-microscope.webp', title: "Esporas fungicas.jpg", author: "Laurararas", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Esporas_fungicas.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "aspergillus-conidiophores": {
    src: '/specimens/aspergillus-conidiophores.webp', title: "Fungi Aspergillus.jpg", author: "Phuwadol supon", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fungi_Aspergillus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "morel-morchella-elata-asci-and-ascospores-phase-contrast": {
    src: '/specimens/morel-morchella-elata-asci-and-ascospores-phase-contrast.webp', title: "Morelasci.jpg", author: "Peter G. Werner", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Morelasci.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ustilago-maydis-diploid-teleospores-160x": {
    src: '/specimens/ustilago-maydis-diploid-teleospores-160x.webp', title: "Ustilago maydis diploid teleospores 160X.png", author: "Ninjatacoshell", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ustilago_maydis_diploid_teleospores_160X.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "candida-yeast-cells-gram-stain": {
    src: '/specimens/candida-yeast-cells-gram-stain.webp', title: "Yeast cells in Gram staining of Candida growth on SDA.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yeast_cells_in_Gram_staining_of_Candida_growth_on_SDA.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "aeromonas-hydrophila-gram-stain-of-culture": {
    src: '/specimens/aeromonas-hydrophila-gram-stain-of-culture.webp', title: "Aeromonas hydrophila in Gram staining of Culture Microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aeromonas_hydrophila_in_Gram_staining_of_Culture_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "filamentous-and-floc-forming-bacteria-gram-stain": {
    src: '/specimens/filamentous-and-floc-forming-bacteria-gram-stain.webp', title: "Filamentous and Floc Bacteria.jpg", author: "Mymicrolab", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Filamentous_and_Floc_Bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "yogurt-bacteria-gram-stain-100x": {
    src: '/specimens/yogurt-bacteria-gram-stain-100x.webp', title: "Gram-Stained Yogurt Bacteria.jpg", author: "Andreacise", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram-Stained_Yogurt_Bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gram-negative-rods-100x": {
    src: '/specimens/gram-negative-rods-100x.webp', title: "Gram Negative Basil Bacteria.jpg", author: "Kucantikuu", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_Negative_Basil_Bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gram-negative-cocci": {
    src: '/specimens/gram-negative-cocci.webp', title: "Gram Negative Cocci.jpg", author: "BHurrell", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_Negative_Cocci.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gram-positive-cocci-100x": {
    src: '/specimens/gram-positive-cocci-100x.webp', title: "Gram Positive Coccus Bacteria.jpg", author: "Kucantikuu", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_Positive_Coccus_Bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "staphylococcus-saprophyticus-gram-stain": {
    src: '/specimens/staphylococcus-saprophyticus-gram-stain.webp', title: "Gram positive cocci in singles, pairs, and clusters of Staphylococcus saprophyticus.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_positive_cocci_in_singles,_pairs,_and_clusters_of_Staphylococcus_saprophyticus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pseudomonas-fluorescens-gram-stain": {
    src: '/specimens/pseudomonas-fluorescens-gram-stain.webp', title: "Pseudomonas fluorescens Gram Stain on Microscope Slide.jpg", author: "B. Domangue", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pseudomonas_fluorescens_Gram_Stain_on_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "shigella-flexneri-gram-stain": {
    src: '/specimens/shigella-flexneri-gram-stain.webp', title: "Shigella flexneri Gram Stain on Microscope Slide.jpg", author: "B. Domangue", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shigella_flexneri_Gram_Stain_on_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "streptobacilli-and-streptococci-gram-stain-1000x": {
    src: '/specimens/streptobacilli-and-streptococci-gram-stain-1000x.webp', title: "Streptobacilli and streptococci in Gram stained smear microscopy at 1000X magnification.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptobacilli_and_streptococci_in_Gram_stained_smear_microscopy_at_1000X_magnification.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ascitic-fluid-smear-wright-stain": {
    src: '/specimens/ascitic-fluid-smear-wright-stain.webp', title: "Wright stained smear of ascitic fluid microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wright_stained_smear_of_ascitic_fluid_microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cyanobacteria-light-microscope-40x": {
    src: '/specimens/cyanobacteria-light-microscope-40x.webp', title: "Cyanobacteria Under Light Microscope 40x Mag.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_Under_Light_Microscope_40x_Mag.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cyanobacterium-dolichospermum": {
    src: '/specimens/cyanobacterium-dolichospermum.webp', title: "Dolichospermum sp.cropped-brighter.jpg", author: "Masa Zupancic. Digital Image processing by User:Dietzel65", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dolichospermum_sp.cropped-brighter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cyanobacterium-microcystis-aeruginosa-colonies": {
    src: '/specimens/cyanobacterium-microcystis-aeruginosa-colonies.webp', title: "Microcystis aeruginosa 680.jpg", author: "T.Voekler", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microcystis_aeruginosa_680.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rotifer-and-diatoms-from-a-pond": {
    src: '/specimens/rotifer-and-diatoms-from-a-pond.webp', title: "Rotifer and diatoms.jpg", author: "Dhj54", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rotifer_and_diatoms.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "male-copepod-tigriopus-brevicornis-live": {
    src: '/specimens/male-copepod-tigriopus-brevicornis-live.webp', title: "Adult Male harpacticoid copepod Tigriopus brevicornis.jpg", author: "Aidan Long", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adult_Male_harpacticoid_copepod_Tigriopus_brevicornis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "harpacticoid-copepods": {
    src: '/specimens/harpacticoid-copepods.webp', title: "Harpacticoid copepods.jpg", author: "Havboka", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Harpacticoid_copepods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "christmas-cactus-mite": {
    src: '/specimens/christmas-cactus-mite.webp', title: "Christmas Cactus Mite, beltsville, md3 2016-07-19-13.51.37 ZS PMax UDR (28339032111).jpg", author: "USGS Bee Inventory and Monitoring Lab from Beltsville, Maryland, USA", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Christmas_Cactus_Mite,_beltsville,_md3_2016-07-19-13.51.37_ZS_PMax_UDR_(28339032111).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "wasp-wing-160x": {
    src: '/specimens/wasp-wing-160x.webp', title: "Wasp wing under microscope.jpg", author: "William Self", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wasp_wing_under_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "violet-carpenter-bee-wing-40x": {
    src: '/specimens/violet-carpenter-bee-wing-40x.webp', title: "Wing of blue carpenter bee.jpg", author: "Aquincanus", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Wing_of_blue_carpenter_bee.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mosquito-wing-under-the-microscope": {
    src: '/specimens/mosquito-wing-under-the-microscope.webp', title: "\u041a\u0440\u044b\u043b\u044b\u0448\u043a\u043e \u043a\u043e\u043c\u0430\u0440\u0430 (cropped).jpg", author: "ALSUSAFAROVA", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041a\u0440\u044b\u043b\u044b\u0448\u043a\u043e_\u043a\u043e\u043c\u0430\u0440\u0430_(cropped).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bee-legs-under-the-microscope": {
    src: '/specimens/bee-legs-under-the-microscope.webp', title: "\u041b\u0430\u043f\u043a\u0438 \u043f\u0447\u0435\u043b\u044b \u043f\u043e\u0434 \u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg", author: "\u0421\u0451\u043c\u043a\u0438\u043d\u0430 \u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041b\u0430\u043f\u043a\u0438_\u043f\u0447\u0435\u043b\u044b_\u043f\u043e\u0434_\u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dipylidium-caninum-egg-packet-400x": {
    src: '/specimens/dipylidium-caninum-egg-packet-400x.webp', title: "Dipylidium caninum ovum 1.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dipylidium_caninum_ovum_1.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hymenolepis-diminuta-egg-rat-tapeworm": {
    src: '/specimens/hymenolepis-diminuta-egg-rat-tapeworm.webp', title: "Hymenolepis Diminuta egg (rat tapeworm) (15703617005).jpg", author: "SuSanA Secretariat", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hymenolepis_Diminuta_egg_(rat_tapeworm)_(15703617005).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "beef-tapeworm-taenia-saginata-scolex-and-neck": {
    src: '/specimens/beef-tapeworm-taenia-saginata-scolex-and-neck.webp', title: "Taenia saginata.jpg", author: "Lizelle312", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Taenia_saginata.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "peacock-feather-under-the-microscope": {
    src: '/specimens/peacock-feather-under-the-microscope.webp', title: "A feather of a peacock under the microscope.jpg", author: "\u0414\u0430\u0432\u0438\u0434 \u0410\u043d\u0434\u0440\u043e\u043d\u043e\u0432", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_feather_of_a_peacock_under_the_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pheasant-feather-4x": {
    src: '/specimens/pheasant-feather-4x.webp', title: "Pheasant Feather, Magnified 1.jpg", author: "Prairie Astronomer", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pheasant_Feather,_Magnified_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "peacock-feather-barbules": {
    src: '/specimens/peacock-feather-barbules.webp', title: "\u041f\u0435\u0440\u043e \u043f\u0430\u0432\u043b\u0438\u043d\u0430 \u043f\u043e\u0434 \u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg", author: "Gribkov", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041f\u0435\u0440\u043e_\u043f\u0430\u0432\u043b\u0438\u043d\u0430_\u043f\u043e\u0434_\u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-hair-surface": {
    src: '/specimens/human-hair-surface.webp', title: "Human black hair surface.jpg", author: "Juan de Vojn\u00edkov", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_black_hair_surface.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-hair-root": {
    src: '/specimens/human-hair-root.webp', title: "Human hair root01.jpg", author: "Juan de Vojn\u00edkov", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_hair_root01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-bone-marrow-cells-romanowsky-giemsa-stain-90x": {
    src: '/specimens/human-bone-marrow-cells-romanowsky-giemsa-stain-90x.webp', title: "\u041a\u043e\u0441\u0442\u043d\u044b\u0439 \u043c\u043e\u0437\u0433.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041a\u043e\u0441\u0442\u043d\u044b\u0439_\u043c\u043e\u0437\u0433.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-blood-with-anisocytosis": {
    src: '/specimens/human-blood-with-anisocytosis.webp', title: "\u041a\u0440\u043e\u0432 \u043b\u044e\u0434\u0438\u043d\u0438 (\u0434\u0438\u0442\u0438\u043d\u0438) \u0437 \u0430\u043d\u0456\u0437\u043e\u0446\u0438\u0442\u043e\u0437\u043e\u043c. Human Blood (Child) with Anisocytosis.jpg", author: "Chrystyna Martyniuk,Yana Kovalova, Dmytro Marchuk", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041a\u0440\u043e\u0432_\u043b\u044e\u0434\u0438\u043d\u0438_(\u0434\u0438\u0442\u0438\u043d\u0438)_\u0437_\u0430\u043d\u0456\u0437\u043e\u0446\u0438\u0442\u043e\u0437\u043e\u043c._Human_Blood_(Child)_with_Anisocytosis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mitosis-in-horse-roundworm-ascaris-eggs": {
    src: '/specimens/mitosis-in-horse-roundworm-ascaris-eggs.webp', title: "20180523mitosis45x3stack GIMP InvertedValue (40499923650).jpg", author: "MostlyDross from Springfield, VA, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20180523mitosis45x3stack_GIMP_InvertedValue_(40499923650).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "metaphase-chromosomes-from-lymphocytes": {
    src: '/specimens/metaphase-chromosomes-from-lymphocytes.webp', title: "Metaphase1.jpg", author: "BaraahAltarayra", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mitosis-in-onion-root-metaphase": {
    src: '/specimens/mitosis-in-onion-root-metaphase.webp', title: "Mitosis in Onion Root various stages (Metaphase).jpg", author: "Natalierussell77", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_in_Onion_Root_various_stages_(Metaphase).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "onion-root-tip-cells-in-mitosis-phase-contrast": {
    src: '/specimens/onion-root-tip-cells-in-mitosis-phase-contrast.webp', title: "Onion Root Tip Cells Mitosis.jpg", author: "Catfaster", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Onion_Root_Tip_Cells_Mitosis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "feulgen-stained-chromosomes-of-allium-ascalonicum": {
    src: '/specimens/feulgen-stained-chromosomes-of-allium-ascalonicum.webp', title: "Chromosomes of Allium ascalonicum.jpg", author: "Arthursilva", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chromosomes_of_Allium_ascalonicum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-chromosomes-under-the-microscope": {
    src: '/specimens/human-chromosomes-under-the-microscope.webp', title: "Human chromosomes under the microscope 01.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_chromosomes_under_the_microscope_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hacat-keratinocyte-cell-line-phase-contrast": {
    src: '/specimens/hacat-keratinocyte-cell-line-phase-contrast.webp', title: "HaCaT Cells Phase Contrast.jpg", author: "Accuratelibrarian", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:HaCaT_Cells_Phase_Contrast.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-umbilical-vein-endothelial-cells-200x": {
    src: '/specimens/human-umbilical-vein-endothelial-cells-200x.webp', title: "Human umbilical vein endothelial cells.jpg", author: "BigLew99", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_umbilical_vein_endothelial_cells.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hybridoma-cells-in-tissue-culture-phase-contrast": {
    src: '/specimens/hybridoma-cells-in-tissue-culture-phase-contrast.webp', title: "Hybridoma cells grown in tissue culture.jpg", author: "GerryShaw", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hybridoma_cells_grown_in_tissue_culture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "vorticella-ciliates-on-a-substrate": {
    src: '/specimens/vorticella-ciliates-on-a-substrate.webp', title: "Vorticella 1.jpg", author: "Bwiltz", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vorticella_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "china-rose-hibiscus-rosa-sinensis-pollen-grains": {
    src: '/specimens/china-rose-hibiscus-rosa-sinensis-pollen-grains.webp', title: "China rose pollen grains.jpg", author: "Adarshjchandran", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:China_rose_pollen_grains.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hibiscus-pollen-under-the-microscope": {
    src: '/specimens/hibiscus-pollen-under-the-microscope.webp', title: "Microscope view of Pollen from Hibiscus 01.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microscope_view_of_Pollen_from_Hibiscus_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "neutrophil-on-a-blood-smear": {
    src: '/specimens/neutrophil-on-a-blood-smear.webp', title: "Happy neutrophil.jpg", author: "Markgirton", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Happy_neutrophil.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "neutrophil-phagocytosing-pseudomonas-aeruginosa-gram-stain": {
    src: '/specimens/neutrophil-phagocytosing-pseudomonas-aeruginosa-gram-stain.webp', title: "Pseudomonas aeruginosa smear Gram 2010-02-10.JPG", author: "Paulo Henrique Orlandi Mourao", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pseudomonas_aeruginosa_smear_Gram_2010-02-10.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "large-intestine-colon-h-e": {
    src: '/specimens/large-intestine-colon-h-e.webp', title: "Histological section of the large intestine (colon).jpg", author: "Ot\u00e1vio Astor Vaz Costa", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histological_section_of_the_large_intestine_(colon).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dog-intestine-with-lagenidiosis-silver-stain-gms": {
    src: '/specimens/dog-intestine-with-lagenidiosis-silver-stain-gms.webp', title: "Intestine-GMS.jpg", author: "Maiara Ramos", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Intestine-GMS.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-thyroid-gland-follicles-h-e-40x": {
    src: '/specimens/human-thyroid-gland-follicles-h-e-40x.webp', title: "Follicular Arrangement of the Human Thyroid Gland (46560660225).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Follicular_Arrangement_of_the_Human_Thyroid_Gland_(46560660225).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "thyroid-gland-histological-section": {
    src: '/specimens/thyroid-gland-histological-section.webp', title: "Thyroid Gland.jpg", author: "Fahd Hashemi", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thyroid_Gland.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "thyroid-follicles-light-microscope": {
    src: '/specimens/thyroid-follicles-light-microscope.webp', title: "Thyroid follicle.jpg", author: "Panzer VI-II", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thyroid_follicle.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-pancreas-islet-of-langerhans-phase-contrast-200x": {
    src: '/specimens/human-pancreas-islet-of-langerhans-phase-contrast-200x.webp', title: "Highly Vascularized Islets of Langerhans by Phase Contrast (33850590688).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Highly_Vascularized_Islets_of_Langerhans_by_Phase_Contrast_(33850590688).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-pancreas-with-islets-of-langerhans-h-e-40x": {
    src: '/specimens/human-pancreas-with-islets-of-langerhans-h-e-40x.webp', title: "Larger Islets of Langerhans Near the Main Interlobular Ducts in the Human Pancreas (32757253077).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Larger_Islets_of_Langerhans_Near_the_Main_Interlobular_Ducts_in_the_Human_Pancreas_(32757253077).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spleen-h-e": {
    src: '/specimens/spleen-h-e.webp', title: "\u0421\u0435\u043b\u0435\u0437\u0435\u043d\u043a\u0430.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0421\u0435\u043b\u0435\u0437\u0435\u043d\u043a\u0430.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bovine-tongue-epoxy-section": {
    src: '/specimens/bovine-tongue-epoxy-section.webp', title: "Histological section of bovine tongue.jpg", author: "Anatomist90", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histological_section_of_bovine_tongue.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "tongue-h-e": {
    src: '/specimens/tongue-h-e.webp', title: "Histological section of tongue, with zoom.jpg", author: "Ot\u00e1vio Astor Vaz Costa", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histological_section_of_tongue,_with_zoom.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-oesophagus-transverse-section": {
    src: '/specimens/human-oesophagus-transverse-section.webp', title: "Trasversal histologic section of human esophagus.jpg", author: "Lorenzo Apolloni", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trasversal_histologic_section_of_human_esophagus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ostrich-trachea-section": {
    src: '/specimens/ostrich-trachea-section.webp', title: "Traquea avestruz.JPG", author: "Lycaon.cl", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Traquea_avestruz.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-placenta-section": {
    src: '/specimens/human-placenta-section.webp', title: "Placenta (265 35) Section of human placenta.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(265_35)_Section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "paramecium-caudatum-light-microscope": {
    src: '/specimens/paramecium-caudatum-light-microscope.webp', title: "Paramecium caudatum (Light Microscope).jpg", author: "Fritzmann2002", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_caudatum_(Light_Microscope).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "euglena-with-scale": {
    src: '/specimens/euglena-with-scale.webp', title: "20100306 204728 Euglena.jpg", author: "Bob Blaylock (talk)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20100306_204728_Euglena.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "volvox-colonies-differential-interference-contrast-160x": {
    src: '/specimens/volvox-colonies-differential-interference-contrast-160x.webp', title: "Volvox sp. - Microscopic algae (35891780782).jpg", author: "Picturepest", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Volvox_sp._-_Microscopic_algae_(35891780782).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spirogyra-filaments-with-visible-nucleus": {
    src: '/specimens/spirogyra-filaments-with-visible-nucleus.webp', title: "Spirogyra03.jpg", author: "Zuzanna K. Filutowska", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra03.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spirogyra-400x": {
    src: '/specimens/spirogyra-400x.webp', title: "Spirogyra 400x magnification.jpg", author: "Femtocoulomb", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_400x_magnification.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spirogyra-40x": {
    src: '/specimens/spirogyra-40x.webp', title: "Spirogyra Under Light Microscope 40 X.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_Under_Light_Microscope_40_X.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spirogyra-conjugation-tubes": {
    src: '/specimens/spirogyra-conjugation-tubes.webp', title: "Spirogyra conjugation.jpg", author: "Armando", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_conjugation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spirogyra-with-spiral-chloroplasts": {
    src: '/specimens/spirogyra-with-spiral-chloroplasts.webp', title: "The freshwater alga Spirogyra.jpg", author: "Wiedehopf20", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:The_freshwater_alga_Spirogyra.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "diatoms-light-microscope": {
    src: '/specimens/diatoms-light-microscope.webp', title: "Diatoms (39816841964).jpg", author: "Kevin Dooley from Chandler, AZ, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatoms_(39816841964).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mixed-diatoms-40x": {
    src: '/specimens/mixed-diatoms-40x.webp', title: "Various Diatoms.jpeg", author: "User:Kevronichebroni", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Various_Diatoms.jpeg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "daphnia-water-flea-light-microscope": {
    src: '/specimens/daphnia-water-flea-light-microscope.webp', title: "A Daphnia.jpg", author: "MargusBarnes", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_Daphnia.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "daphnia-from-a-lake-light-microscope": {
    src: '/specimens/daphnia-from-a-lake-light-microscope.webp', title: "Daphnia.JPG", author: "Martinkala", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daphnia.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "daphnia-with-eggs-dark-field": {
    src: '/specimens/daphnia-with-eggs-dark-field.webp', title: "\u0414\u0430\u0444\u043d\u0456\u044f, \u0442\u0435\u043c\u043d\u0435 \u043f\u043e\u043b\u0435.jpg", author: "Andrei Savitsky", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0414\u0430\u0444\u043d\u0456\u044f,_\u0442\u0435\u043c\u043d\u0435_\u043f\u043e\u043b\u0435.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hydra-vulgaris-40x": {
    src: '/specimens/hydra-vulgaris-40x.webp', title: "Hydravulgaris.jpg", author: "Corvana", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydravulgaris.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "drosophila-melanogaster-antenna": {
    src: '/specimens/drosophila-melanogaster-antenna.webp', title: "Drosophila melanogaster antenna microscopic.jpg", author: "AlphaPsi", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Drosophila_melanogaster_antenna_microscopic.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "head-of-an-adult-flea-ctenocephalides": {
    src: '/specimens/head-of-an-adult-flea-ctenocephalides.webp', title: "Morphology of the head tagma of adult Ctenocephalides spp. obtained from dogs.jpg", author: "MelnychukV", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Morphology_of_the_head_tagma_of_adult_Ctenocephalides_spp._obtained_from_dogs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "butterfly-wing-scales": {
    src: '/specimens/butterfly-wing-scales.webp', title: "\u0427\u0435\u0448\u0443\u0439\u043a\u0438 \u043d\u0430 \u043a\u0440\u044b\u043b\u0435 \u0431\u0430\u0431\u043e\u0447\u043a\u0438 \u043f\u043e\u0434 \u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg", author: "\u0413\u0440\u0438\u0431\u043a\u043e\u0432 \u043c\u0438\u0445\u0430\u0438\u043b", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0427\u0435\u0448\u0443\u0439\u043a\u0438_\u043d\u0430_\u043a\u0440\u044b\u043b\u0435_\u0431\u0430\u0431\u043e\u0447\u043a\u0438_\u043f\u043e\u0434_\u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "colour-transition-of-scales-on-a-butterfly-wing-30x": {
    src: '/specimens/colour-transition-of-scales-on-a-butterfly-wing-30x.webp', title: "Transition of scales color on a butterfly wing (around 30x magnification).jpg", author: "Pawe\u0142 Wa\u0142asiewicz", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Transition_of_scales_color_on_a_butterfly_wing_(around_30x_magnification).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fly-eye-cornea": {
    src: '/specimens/fly-eye-cornea.webp', title: "Cornea from fly.jpg", author: "Profdanila", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cornea_from_fly.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "flea-ctenophthalmus-agyrtes": {
    src: '/specimens/flea-ctenophthalmus-agyrtes.webp', title: "Ctenophthalmus agyrtes through a microscope.jpg", author: "Ruyko", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ctenophthalmus_agyrtes_through_a_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mite-from-a-honey-bee-nest": {
    src: '/specimens/mite-from-a-honey-bee-nest.webp', title: "Bee nest mite (5454286511).jpg", author: "Gilles San Martin from Namur, Belgium", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bee_nest_mite_(5454286511).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "clover-mite-bryobia-praetiosa": {
    src: '/specimens/clover-mite-bryobia-praetiosa.webp', title: "Clover mite (Bryobia praetiosa) viewed with digital microscope.jpg", author: "PerAsperaAdInferos", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Clover_mite_(Bryobia_praetiosa)_viewed_with_digital_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "demodex-canis-mite-400x": {
    src: '/specimens/demodex-canis-mite-400x.webp', title: "Demodex mite 1.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Demodex_mite_1.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dust-mite-under-the-microscope": {
    src: '/specimens/dust-mite-under-the-microscope.webp', title: "Dust mite under the microscope.jpg", author: "Microrao", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dust_mite_under_the_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gorse-spider-mite": {
    src: '/specimens/gorse-spider-mite.webp', title: "Gorse spider mite, microscope view.jpg", author: "Tony Wills", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gorse_spider_mite,_microscope_view.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "house-dust-mite-dermatophagoides-pteronyssinus": {
    src: '/specimens/house-dust-mite-dermatophagoides-pteronyssinus.webp', title: "House dust mite (Dermatophagoides pteronyssinus).jpg", author: "Gilles San Martin from Namur, Belgium", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:House_dust_mite_(Dermatophagoides_pteronyssinus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "varroa-mites": {
    src: '/specimens/varroa-mites.webp', title: "Starr-180406-3200-microscope view of varroa mites-HDOA Hilo-Hawaii (41369453291).jpg", author: "Forest and Kim Starr", license: "CC BY 3.0 us",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Starr-180406-3200-microscope_view_of_varroa_mites-HDOA_Hilo-Hawaii_(41369453291).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "soil-mite-differential-interference-contrast": {
    src: '/specimens/soil-mite-differential-interference-contrast.webp', title: "\u041f\u043e\u0447\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043b\u0435\u0449.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041f\u043e\u0447\u0432\u0435\u043d\u043d\u044b\u0439_\u043a\u043b\u0435\u0449.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "babesia-canis-in-dog-red-blood-cells": {
    src: '/specimens/babesia-canis-in-dog-red-blood-cells.webp', title: "Babesia canis in red blood cells of a dog after tick bite.png", author: "Michael Lippert", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Babesia_canis_in_red_blood_cells_of_a_dog_after_tick_bite.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "female-human-head-louse": {
    src: '/specimens/female-human-head-louse.webp', title: "Female human head louse.jpg", author: "Gilles San Martin", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Female_human_head_louse.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "head-louse-egg-nit-on-a-hair": {
    src: '/specimens/head-louse-egg-nit-on-a-hair.webp', title: "Human head louse egg.jpg", author: "Gilles San Martin", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_head_louse_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "loxosceles-laeta-cephalothorax": {
    src: '/specimens/loxosceles-laeta-cephalothorax.webp', title: "Adult specimen of Loxosceles laeta observed in microscope.jpg", author: "Javier apb", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adult_specimen_of_Loxosceles_laeta_observed_in_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "spider-body-160x": {
    src: '/specimens/spider-body-160x.webp', title: "Spinne K\u00f6rper spider body.jpg", author: "Richy Schley", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinne_K\u00f6rper_spider_body.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "penicillium-conidiophore": {
    src: '/specimens/penicillium-conidiophore.webp', title: "Penicillium sp. on bread.jpg", author: "Arunbiel", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Penicillium_sp._on_bread.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "penicillium-stained-preparation": {
    src: '/specimens/penicillium-stained-preparation.webp', title: "Penicillium spp. AO AL.jpg", author: "Federica Viazzi (AO AL)", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Penicillium_spp._AO_AL.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rhizopus-sporangia-black-mould": {
    src: '/specimens/rhizopus-sporangia-black-mould.webp', title: "Black mold (rhizopus sp).jpg", author: "Ramy algayar", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Black_mold_(rhizopus_sp).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rhizopus-fungus-40x": {
    src: '/specimens/rhizopus-fungus-40x.webp', title: "Fungi Rhizopus.jpg", author: "Aaronantonypaul", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fungi_Rhizopus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "candida-albicans-in-a-gram-stained-smear": {
    src: '/specimens/candida-albicans-in-a-gram-stained-smear.webp', title: "Microscopic morphology of Candida albicans in Gram staining of sputum.jpg", author: "Ajay Kumar Chaurasiya", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microscopic_morphology_of_Candida_albicans_in_Gram_staining_of_sputum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bacillus-subtilis-colonies": {
    src: '/specimens/bacillus-subtilis-colonies.webp', title: "Bacillus subtilis bacterial colonies under the microscope 02.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_subtilis_bacterial_colonies_under_the_microscope_02.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bacillus-cereus-and-escherichia-coli-gram-stain": {
    src: '/specimens/bacillus-cereus-and-escherichia-coli-gram-stain.webp', title: "Bacillus cereus and Escherichia coli.jpg", author: "Bibliomaniac15", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_cereus_and_Escherichia_coli.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "escherichia-coli-gram-stain": {
    src: '/specimens/escherichia-coli-gram-stain.webp', title: "Escherichia coli Gram Stain.jpg", author: "Dr Graham Beards", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_Gram_Stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "escherichia-coli-gram-stain-1000x-oil-immersion": {
    src: '/specimens/escherichia-coli-gram-stain-1000x-oil-immersion.webp', title: "Gram negative stain e coli.jpg", author: "Owashxd", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_negative_stain_e_coli.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "acid-fast-bacilli-in-urine-sediment-ziehl-neelsen": {
    src: '/specimens/acid-fast-bacilli-in-urine-sediment-ziehl-neelsen.webp', title: "AFB in Ziehl\u2013Neelsen staining of urine sediment.jpg", author: "Ajay Kumar Chaurasiya", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:AFB_in_Ziehl\u2013Neelsen_staining_of_urine_sediment.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mycobacterium-tuberculosis-acid-fast-stain": {
    src: '/specimens/mycobacterium-tuberculosis-acid-fast-stain.webp', title: "Acid-Fast Bacilli (Mycobacterium tuberculosis) under microscope after Ziehl Neelsen staining.04.jpg", author: "Siduduziwe Nxumalo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acid-Fast_Bacilli_(Mycobacterium_tuberculosis)_under_microscope_after_Ziehl_Neelsen_staining.04.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "acid-fast-bacilli-ziehl-neelsen-stain": {
    src: '/specimens/acid-fast-bacilli-ziehl-neelsen-stain.webp', title: "Acid fast bacilli, Ziehl Neelsen stain (1).jpg", author: "CoRus13", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acid_fast_bacilli,_Ziehl_Neelsen_stain_(1).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mycobacterium-tuberculosis-in-bal-fluid-ziehl-neelsen": {
    src: '/specimens/mycobacterium-tuberculosis-in-bal-fluid-ziehl-neelsen.webp', title: "Acid fast bacilli of Mycobacterium tuberculosis.jpg", author: "Ajay Kumar Chaurasiya", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acid_fast_bacilli_of_Mycobacterium_tuberculosis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "taenia-egg-in-a-faecal-smear-ziehl-neelsen": {
    src: '/specimens/taenia-egg-in-a-faecal-smear-ziehl-neelsen.webp', title: "An egg of Taenia in Ziehl-Neelsen stained smear of faeces jpg.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:An_egg_of_Taenia_in_Ziehl-Neelsen_stained_smear_of_faeces_jpg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mycobacterium-leprae-in-a-slit-skin-smear-1000x": {
    src: '/specimens/mycobacterium-leprae-in-a-slit-skin-smear-1000x.webp', title: "Mycobacterium leprae in Magnification of 1000X.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mycobacterium_leprae_in_Magnification_of_1000X.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mycobacterium-tuberculosis-in-sputum-ziehl-neelsen": {
    src: '/specimens/mycobacterium-tuberculosis-in-sputum-ziehl-neelsen.webp', title: "Mycobacterium tuberculosis in Ziehl-Neelsen stained smear of sputum.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mycobacterium_tuberculosis_in_Ziehl-Neelsen_stained_smear_of_sputum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nocardia-modified-acid-fast-stain": {
    src: '/specimens/nocardia-modified-acid-fast-stain.webp', title: "Nocardia in modified Ziehl-Neelsen staining.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nocardia_in_modified_Ziehl-Neelsen_staining.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "acid-fast-bacilli-in-tracheitis-tissue-kinyoun-stain": {
    src: '/specimens/acid-fast-bacilli-in-tracheitis-tissue-kinyoun-stain.webp', title: "Pseudomembranous Tracheitis, Kinyoun Carbolfuchsin Acid-Fast Stain (7982762329).jpg", author: "Ed Uthman from Houston, TX, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pseudomembranous_Tracheitis,_Kinyoun_Carbolfuchsin_Acid-Fast_Stain_(7982762329).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "acid-fast-bacilli-in-lung-tissue-ziehl-neelsen": {
    src: '/specimens/acid-fast-bacilli-in-lung-tissue-ziehl-neelsen.webp', title: "Ziehl-Neelsen AFB stain-lung (6544826111).jpg", author: "Yale Rosen from USA", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ziehl-Neelsen_AFB_stain-lung_(6544826111).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bird-blood-smear-with-plasmodium-relictum": {
    src: '/specimens/bird-blood-smear-with-plasmodium-relictum.webp', title: "Blood-smear-showing-p-relictum-infection-stained-purple-within-red-blood-cells.jpg", author: "USGS", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood-smear-showing-p-relictum-infection-stained-purple-within-red-blood-cells.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "plasmodium-falciparum-ring-forms-in-red-blood-cells": {
    src: '/specimens/plasmodium-falciparum-ring-forms-in-red-blood-cells.webp', title: "Plasmodium falciparum (malaria) parasite in blood.jpg", author: "MichaelZahniser", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_(malaria)_parasite_in_blood.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "plasmodium-falciparum-gametocyte-in-a-blood-smear": {
    src: '/specimens/plasmodium-falciparum-gametocyte-in-a-blood-smear.webp', title: "Plasmodium falciparum gametocyte.jpg", author: "Microrao", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_gametocyte.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "plasmodium-falciparum-trophozoites": {
    src: '/specimens/plasmodium-falciparum-trophozoites.webp', title: "Plasmodium falciparum smear 2010-02-08.JPG", author: "Paulo Henrique Orlandi Mourao", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_smear_2010-02-08.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "trichomonas-vaginalis-gram-stain": {
    src: '/specimens/trichomonas-vaginalis-gram-stain.webp', title: "Trichomonas Gram stain.jpg", author: "Dr Graham Beards", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichomonas_Gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ascaris-larva-hatching": {
    src: '/specimens/ascaris-larva-hatching.webp', title: "Ascaris Larva (Hatched on Microscope Slide) (18306579795).jpg", author: "SuSanA Secretariat", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ascaris_Larva_(Hatched_on_Microscope_Slide)_(18306579795).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ascaris-egg-early-cell-division": {
    src: '/specimens/ascaris-egg-early-cell-division.webp', title: "Ascaris in division (15517763569).jpg", author: "SuSanA Secretariat", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ascaris_in_division_(15517763569).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ascaris-infertile-egg": {
    src: '/specimens/ascaris-infertile-egg.webp', title: "Ascaris infertile egg (15705214792).jpg", author: "SuSanA Secretariat", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ascaris_infertile_egg_(15705214792).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "toxocara-egg-with-a-developed-larva": {
    src: '/specimens/toxocara-egg-with-a-developed-larva.webp', title: "Toxocara Larva (15518236248).jpg", author: "SuSanA Secretariat", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Toxocara_Larva_(15518236248).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "trichuris-whipworm-egg": {
    src: '/specimens/trichuris-whipworm-egg.webp', title: "Trichuris (whipworm) (15703630875).jpg", author: "SuSanA Secretariat", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichuris_(whipworm)_(15703630875).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "chicory-cichorium-intybus-leaf-epidermis-with-stomata": {
    src: '/specimens/chicory-cichorium-intybus-leaf-epidermis-with-stomata.webp', title: "Chicory Stomata.jpg", author: "JHern OW", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chicory_Stomata.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "leaf-epidermis-with-stomata-and-guard-cells": {
    src: '/specimens/leaf-epidermis-with-stomata-and-guard-cells.webp', title: "Leaf epithelium, stomata.jpg", author: "Emilio Ermini", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_epithelium,_stomata.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "tradescantia-spathacea-stomata-400x": {
    src: '/specimens/tradescantia-spathacea-stomata-400x.webp', title: "Stomata of Tradescantia spathacea leaves.jpg", author: "Tr\u01b0\u01a1ng Minh Kh\u1ea3i", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stomata_of_Tradescantia_spathacea_leaves.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "onion-epidermis-cells-40x": {
    src: '/specimens/onion-epidermis-cells-40x.webp', title: "Onion Epidermis Cells W.M. 40x - 107.jpg", author: "loganrickert", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Onion_Epidermis_Cells_W.M._40x_-_107.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "potato-starch-grains-400x": {
    src: '/specimens/potato-starch-grains-400x.webp', title: "Kartoffel-St\u00e4rkek\u00f6rner.png", author: "Quant8", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kartoffel-St\u00e4rkek\u00f6rner.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "potato-starch-in-polarised-light-100x": {
    src: '/specimens/potato-starch-in-polarised-light-100x.webp', title: "Potato Starch Polarized light 100x.jpg", author: "Photon 400 750", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Potato_Starch_Polarized_light_100x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "sweet-flag-acorus-root-cross-section-100x": {
    src: '/specimens/sweet-flag-acorus-root-cross-section-100x.webp', title: "Monocot Root Acorus (35399384203).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Monocot_Root_Acorus_(35399384203).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "greenbriar-smilax-root-cross-section-40x": {
    src: '/specimens/greenbriar-smilax-root-cross-section-40x.webp', title: "Monocot Root Smilax (35165045414).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Monocot_Root_Smilax_(35165045414).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "maize-zea-root-cross-section-100x": {
    src: '/specimens/maize-zea-root-cross-section-100x.webp', title: "Monocot Root Zea (34745602191).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Monocot_Root_Zea_(34745602191).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dicot-stem-showing-xylem-and-phloem": {
    src: '/specimens/dicot-stem-showing-xylem-and-phloem.webp', title: "Dicot Stems.jpg", author: "Naz Amann", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dicot_Stems.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "vicia-root-nodule-cross-section": {
    src: '/specimens/vicia-root-nodule-cross-section.webp', title: "Cross-section through root nodule of (Vicia spec.).jpg", author: "Marcel M\u00fcller K\u00f6ln", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cross-section_through_root_nodule_of_(Vicia_spec.).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fern-root-cross-section-40x": {
    src: '/specimens/fern-root-cross-section-40x.webp', title: "Fern root X40.jpg", author: "OKJaguar", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fern_root_X40.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "iris-root-cross-section": {
    src: '/specimens/iris-root-cross-section.webp', title: "Iris sp. root cross-sectional preparation in the microscope.jpg", author: "Mariabrbr", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Iris_sp._root_cross-sectional_preparation_in_the_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lycopodium-clavatum-shoot-cross-section-triple-stain": {
    src: '/specimens/lycopodium-clavatum-shoot-cross-section-triple-stain.webp', title: "Lycopodium shoot cross section.png", author: "Kingfiser", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lycopodium_shoot_cross_section.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "onion-root-cross-section-10x-objective": {
    src: '/specimens/onion-root-cross-section-10x-objective.webp', title: "Onion Root.jpg", author: "Pksois23", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Onion_Root.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "monocot-root-cross-section": {
    src: '/specimens/monocot-root-cross-section.webp', title: "Root of Herbaceous Monocotyledon Plant - Cross section microscopic image.jpg", author: "\u77f3\u5ddd Shihchuan from \u53f0\u5317\u5e02 (Taipei City), \u53f0\u7063 (Taiwan)", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Root_of_Herbaceous_Monocotyledon_Plant_-_Cross_section_microscopic_image.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "frog-red-blood-cells": {
    src: '/specimens/frog-red-blood-cells.webp', title: "Frog`s red blood cells under a microscope.jpg", author: "Yana Balakhonova", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Frog`s_red_blood_cells_under_a_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "sickle-cell-anaemia-blood-smear-giemsa": {
    src: '/specimens/sickle-cell-anaemia-blood-smear-giemsa.webp', title: "Sickle Cell Blood Smear.JPG", author: "Keith Chambers", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sickle_Cell_Blood_Smear.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "normal-adult-blood-smear-giemsa": {
    src: '/specimens/normal-adult-blood-smear-giemsa.webp', title: "Normal Adult Blood Smear.JPG", author: "Keith Chambers", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Normal_Adult_Blood_Smear.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "polycythemia-vera-blood-smear": {
    src: '/specimens/polycythemia-vera-blood-smear.webp', title: "Polycythemia vera, blood smear.jpg", author: "The Armed Forces Institute of Pathology (AFIP)", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polycythemia_vera,_blood_smear.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-cheek-epithelial-cell": {
    src: '/specimens/human-cheek-epithelial-cell.webp', title: "Human cheek cells from science class.jpg", author: "Kyreb", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_cheek_cells_from_science_class.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-cheek-epithelial-cells-stained-slide": {
    src: '/specimens/human-cheek-epithelial-cells-stained-slide.webp', title: "Epithelial Cells Human Inside of Mouth, Stained Microscope Slide.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Cells_Human_Inside_of_Mouth,_Stained_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "teased-skeletal-muscle-100x": {
    src: '/specimens/teased-skeletal-muscle-100x.webp', title: "Muscle Tissue Capilary in Skeletal Muscle (28089112678).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Capilary_in_Skeletal_Muscle_(28089112678).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cardiac-muscle-100x": {
    src: '/specimens/cardiac-muscle-100x.webp', title: "Muscle Tissue Cardiac Muscle (27187637567).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Cardiac_Muscle_(27187637567).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "smooth-muscle-histology": {
    src: '/specimens/smooth-muscle-histology.webp', title: "Smooth muscle tissue.jpg", author: "Juan Carlos Fonseca Mata", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Smooth_muscle_tissue.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "adipose-tissue-with-central-lipid-droplets": {
    src: '/specimens/adipose-tissue-with-central-lipid-droplets.webp', title: "Adipose2.jpg", author: "Echinaceapallida", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adipose2.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "white-adipose-tissue-h-e": {
    src: '/specimens/white-adipose-tissue-h-e.webp', title: "Biele tukov\u00e9 v\u00e4zivo, White adipose tissue.jpg", author: "Falty14", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Biele_tukov\u00e9_v\u00e4zivo,_White_adipose_tissue.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "adipose-tissue-h-e-400x": {
    src: '/specimens/adipose-tissue-h-e-400x.webp', title: "Tejido adiposo.JPG", author: "Gan\u00edmedes", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tejido_adiposo.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "thick-skin-epidermis": {
    src: '/specimens/thick-skin-epidermis.webp', title: "Thick skin.jpg", author: "SGnanadeep", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thick_skin.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "renal-corpuscle-glomerulus-pas-stain": {
    src: '/specimens/renal-corpuscle-glomerulus-pas-stain.webp', title: "Renal corpuscle.jpg", author: "Ed Uthman (Pathologist), website: [2]", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Renal_corpuscle.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dog-cardiac-muscle-100x": {
    src: '/specimens/dog-cardiac-muscle-100x.webp', title: "Dogcardiacmuscle100x7.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dogcardiacmuscle100x7.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "serous-salivary-gland": {
    src: '/specimens/serous-salivary-gland.webp', title: "Serous salivary gland.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Serous_salivary_gland.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gallbladder-haemalum-eosin": {
    src: '/specimens/gallbladder-haemalum-eosin.webp', title: "Gallenblase - Schnitt.jpg", author: "User:Polarlys", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gallenblase_-_Schnitt.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dog-urinary-bladder": {
    src: '/specimens/dog-urinary-bladder.webp', title: "Dogurinarybladder100x1.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dogurinarybladder100x1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "urinary-bladder-smooth-muscle-h-e-400x": {
    src: '/specimens/urinary-bladder-smooth-muscle-h-e-400x.webp', title: "Musc liso 400.JPG", author: "Andrea Mazza", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Musc_liso_400.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "urinary-bladder-collapsed-cross-section": {
    src: '/specimens/urinary-bladder-collapsed-cross-section.webp', title: "Urinary Bladder Collapsed C. S. Ward's Turtox 93 W 5254 b.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Urinary_Bladder_Collapsed_C._S._Ward's_Turtox_93_W_5254_b.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "normal-human-prostate-h-e-100x": {
    src: '/specimens/normal-human-prostate-h-e-100x.webp', title: "Prostate normal 1.jpg", author: "Alex brollo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Prostate_normal_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-epididymis": {
    src: '/specimens/human-epididymis.webp', title: "Epididymis.JPG", author: "Jpogi at Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epididymis.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "epididymis-low-power": {
    src: '/specimens/epididymis-low-power.webp', title: "Epididymis histology.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epididymis_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rat-epididymis": {
    src: '/specimens/rat-epididymis.webp', title: "Epididymis of a rat.jpg", author: "Honey2609", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epididymis_of_a_rat.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "duodenal-mucosa-h-e": {
    src: '/specimens/duodenal-mucosa-h-e.webp', title: "Duodenal biopsy, high mag.jpg", author: "CoRus13", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenal_biopsy,_high_mag.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "duodenum-prepared-slide": {
    src: '/specimens/duodenum-prepared-slide.webp', title: "Duodenum.jpg", author: "Abdulrazakca", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "duodenum-of-the-small-intestine": {
    src: '/specimens/duodenum-of-the-small-intestine.webp', title: "Duodenum Microscopic View.jpg", author: "Lokeshmanikanta 22", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenum_Microscopic_View.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "duodenum-brush-border-400x": {
    src: '/specimens/duodenum-brush-border-400x.webp', title: "Microvilli-Duodenum.JPG", author: "Wbensmith", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microvilli-Duodenum.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mouse-ileum-goblet-cells": {
    src: '/specimens/mouse-ileum-goblet-cells.webp', title: "C\u00e9lulas caliciformes \u00edleon.jpg", author: "Alfonso Mora", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:C\u00e9lulas_caliciformes_\u00edleon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ileum-villus-100x": {
    src: '/specimens/ileum-villus-100x.webp', title: "Ileum.JPG", author: "M. Gebauer", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ileum.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ileum-with-intestinal-microvilli-63x": {
    src: '/specimens/ileum-with-intestinal-microvilli-63x.webp', title: "\u00cdleon 63x.jpg", author: "Alfonso Mora", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u00cdleon_63x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-sperm": {
    src: '/specimens/human-sperm.webp', title: "Human sperm under microscope.jpg", author: "Prof. Ideal", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_sperm_under_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "zebrafish-embryo": {
    src: '/specimens/zebrafish-embryo.webp', title: "Embryo of Zebrafish.jpg", author: "Marco Boschin", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Embryo_of_Zebrafish.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "foraminifera-light-microscope": {
    src: '/specimens/foraminifera-light-microscope.webp', title: "Foraminiferans 1.jpg", author: "Bwiltz", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Foraminiferans_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "radiolarian-druppatractus-250x": {
    src: '/specimens/radiolarian-druppatractus-250x.webp', title: "Druppatractus sp - Radiolarian (35848619110).jpg", author: "Picturepest", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Druppatractus_sp_-_Radiolarian_(35848619110).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "radiolarian-dictyoprora-400x": {
    src: '/specimens/radiolarian-dictyoprora-400x.webp', title: "Radiolaria - Dictyoprora (Sethamphora) mongolfieri - 400x (46419193611).jpg", author: "Picturepest", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Radiolaria_-_Dictyoprora_(Sethamphora)_mongolfieri_-_400x_(46419193611).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "radiolarian-400x": {
    src: '/specimens/radiolarian-400x.webp', title: "Radiolarian (35547181444).jpg", author: "Picturepest", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Radiolarian_(35547181444).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fossil-radiolarian-dorataspida": {
    src: '/specimens/fossil-radiolarian-dorataspida.webp', title: "Radiolarian - Dorataspida sp.jpg", author: "Andreas Drews", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Radiolarian_-_Dorataspida_sp.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dinoflagellate-ceratocorys-horrida": {
    src: '/specimens/dinoflagellate-ceratocorys-horrida.webp', title: "Dinoflagellate 1.jpg", author: "Soupremacy", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dinoflagellate_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dinoflagellate-dinophysis-tripos-epifluorescence": {
    src: '/specimens/dinoflagellate-dinophysis-tripos-epifluorescence.webp', title: "Dinophysis tripos.png", author: "Phycoplankton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dinophysis_tripos.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "stentor-light-microscope": {
    src: '/specimens/stentor-light-microscope.webp', title: "Stentor (Light Microscope).jpg", author: "Fritzmann2002", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stentor_(Light_Microscope).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "vorticella-40x": {
    src: '/specimens/vorticella-40x.webp', title: "Vorticella Collserola.jpg", author: "Esv - Eduard Sol\u00e0 V\u00e1zquez", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vorticella_Collserola.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "oscillatoria-filaments": {
    src: '/specimens/oscillatoria-filaments.webp', title: "Oscillatoria under a microscope.jpg", author: "Nbnidhi", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oscillatoria_under_a_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "scenedesmus-colony": {
    src: '/specimens/scenedesmus-colony.webp', title: "Scenedesmus.jpg", author: "Fritzmann2002", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Scenedesmus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "closterium-light-microscope": {
    src: '/specimens/closterium-light-microscope.webp', title: "Closterium under a light microscope.jpg", author: "Fritzmann2002", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Closterium_under_a_light_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "liverwort-calypogeia-azurea-cells-with-oil-bodies": {
    src: '/specimens/liverwort-calypogeia-azurea-cells-with-oil-bodies.webp', title: "Calypogeia azurea Cells and blue oil bodies.jpg", author: "Kristian Peters", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Calypogeia_azurea_Cells_and_blue_oil_bodies.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "male-pine-cone-section": {
    src: '/specimens/male-pine-cone-section.webp', title: "Male cone pinus.jpg", author: "CyberTroopers", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Male_cone_pinus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "elodea-anacharis-leaf-cells-400x": {
    src: '/specimens/elodea-anacharis-leaf-cells-400x.webp', title: "Anacharis Magnified.jpg", author: "Lilyviolet", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anacharis_Magnified.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "elodea-cells-with-chloroplasts-100x": {
    src: '/specimens/elodea-cells-with-chloroplasts-100x.webp', title: "Elodea chloroplasts 100\u00d7.png", author: "Kelvinsong", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Elodea_chloroplasts_100\u00d7.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "onion-epidermis-deplasmolysis": {
    src: '/specimens/onion-epidermis-deplasmolysis.webp', title: "Onion peel under a microscope(restoration of the norm).jpg", author: "Kristina Tsimlyakowa", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Onion_peel_under_a_microscope(restoration_of_the_norm).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "oleander-nerium-leaf-cross-section": {
    src: '/specimens/oleander-nerium-leaf-cross-section.webp', title: "NeriumLeafCross.png", author: "Lord of Konrad", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:NeriumLeafCross.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "marshmallow-althaea-officinalis-pollen-grain-40x": {
    src: '/specimens/marshmallow-althaea-officinalis-pollen-grain-40x.webp', title: "Althae folium ziarno py\u0142ku.JPG", author: "Kala Nag", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Althae_folium_ziarno_py\u0142ku.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "chicory-anther-surface-with-pollen": {
    src: '/specimens/chicory-anther-surface-with-pollen.webp', title: "Chicory Stamen.jpg", author: "JHern OW", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chicory_Stamen.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "primula-vulgaris-pollen-on-a-stigma": {
    src: '/specimens/primula-vulgaris-pollen-on-a-stigma.webp', title: "Pollen grains on the surface of a stigma(Primula vulgaris).jpg", author: "Ergriffi", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pollen_grains_on_the_surface_of_a_stigma(Primula_vulgaris).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "licorice-fern-polypodium-glycyrrhiza-spores-40x": {
    src: '/specimens/licorice-fern-polypodium-glycyrrhiza-spores-40x.webp', title: "Polypodium glycyrrhiza spores.jpg", author: "Vlisch", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polypodium_glycyrrhiza_spores.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rough-horsetail-spores": {
    src: '/specimens/rough-horsetail-spores.webp', title: "Spores of a rough horsetail.jpg", author: "Noxvortex", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spores_of_a_rough_horsetail.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rust-fungus-gymnosporangium-sabinae-spores": {
    src: '/specimens/rust-fungus-gymnosporangium-sabinae-spores.webp', title: "Spores of the parasitic fungus Gymnosporangium sabinae under microscope.jpg", author: "Lejla Krasniqi", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spores_of_the_parasitic_fungus_Gymnosporangium_sabinae_under_microscope.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "urocystis-primulae-spore-balls": {
    src: '/specimens/urocystis-primulae-spore-balls.webp', title: "Urocystis primulae spore balls.jpg", author: "Iacobndg", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Urocystis_primulae_spore_balls.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rust-fungus-attacking-a-stoma-1600x": {
    src: '/specimens/rust-fungus-attacking-a-stoma-1600x.webp', title: "Rust attacking stoma.jpg", author: "Agong1", license: "CC BY 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rust_attacking_stoma.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "saccharomyces-cerevisiae-dic-microscopy": {
    src: '/specimens/saccharomyces-cerevisiae-dic-microscopy.webp', title: "S cerevisiae under DIC microscopy.jpg", author: "Masur", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:S_cerevisiae_under_DIC_microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "saccharomyces-cerevisiae-loeffler-s-methylene-blue-400x": {
    src: '/specimens/saccharomyces-cerevisiae-loeffler-s-methylene-blue-400x.webp', title: "Saccharomyces cerevisiae Loeffler's Methylene Blue Staining.jpg", author: "Cboerner", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saccharomyces_cerevisiae_Loeffler's_Methylene_Blue_Staining.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "yeast-shmoo-responding-to-alpha-factor": {
    src: '/specimens/yeast-shmoo-responding-to-alpha-factor.webp', title: "Shmoos s cerevisiae.jpg", author: "Pilarbini", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Shmoos_s_cerevisiae.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lactobacillus-rhamnosus": {
    src: '/specimens/lactobacillus-rhamnosus.webp', title: "Lactobacillus rhamnosus.jpg", author: "Bsimon2014", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_rhamnosus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "staphylococcus-aureus-gram-stain-1000x": {
    src: '/specimens/staphylococcus-aureus-gram-stain-1000x.webp', title: "S. aureus.jpg", author: "Dr. Sahay", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:S._aureus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "staphylococcus-aureus-gram-stain-smear": {
    src: '/specimens/staphylococcus-aureus-gram-stain-smear.webp', title: "Staphylococcus aureus Gram stain.jpg", author: "Dr Graham Beards", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Staphylococcus_aureus_Gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "gram-positive-bacteria-smear": {
    src: '/specimens/gram-positive-bacteria-smear.webp', title: "Gram positive Bacteria.jpg", author: "S.M.M.Musabbir Uddin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gram_positive_Bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lactococcus-lactis-gram-stain": {
    src: '/specimens/lactococcus-lactis-gram-stain.webp', title: "Lactococcus lactis.jpg", author: "Minyoung Choi from Cupertino, CA, USA", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactococcus_lactis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "streptococci-chains-gram-stain": {
    src: '/specimens/streptococci-chains-gram-stain.webp', title: "Streptococci.jpg", author: "User:Graham Beards", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococci.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "streptococci-in-wound-pus-gram-stain": {
    src: '/specimens/streptococci-in-wound-pus-gram-stain.webp', title: "Streptococci in pus.jpg", author: "Dr Graham Beards", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococci_in_pus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "clostridium-difficile-gram-stain-1000x": {
    src: '/specimens/clostridium-difficile-gram-stain-1000x.webp', title: "Clostridium difficile .jpg", author: "Dr. Sahay", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Clostridium_difficile_.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "clostridium-difficile-in-faecal-suspension-gram-stain": {
    src: '/specimens/clostridium-difficile-in-faecal-suspension-gram-stain.webp', title: "Clostridium difficile gram stain.jpg", author: "ItsHong", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Clostridium_difficile_gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "neisseria-gonorrhoeae-and-pus-cells-gram-stain": {
    src: '/specimens/neisseria-gonorrhoeae-and-pus-cells-gram-stain.webp', title: "DSC 0648 (2) Neiseria gonorrhoea.jpg", author: "Dr Graham Beards", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:DSC_0648_(2)_Neiseria_gonorrhoea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "neisseria-gonorrhoeae-diplococci-gram-stain": {
    src: '/specimens/neisseria-gonorrhoeae-diplococci-gram-stain.webp', title: "Neisseria gonorrhoeae.jpg", author: "\u05e9\u05d5\u05e2\u05dc", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Neisseria_gonorrhoeae.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "leishmania-in-a-skin-lesion-scraping": {
    src: '/specimens/leishmania-in-a-skin-lesion-scraping.webp', title: "Leishmaniose cutan\u00e9e au microscope - Maroc, H\u00f4pital Cheikh Zaid.jpg", author: "Atirabdou", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leishmaniose_cutan\u00e9e_au_microscope_-_Maroc,_H\u00f4pital_Cheikh_Zaid.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fasciola-miracidium": {
    src: '/specimens/fasciola-miracidium.webp', title: "Fasciola-miracidium.jpg", author: "Alan R Walker", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fasciola-miracidium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fasciola-hepatica-and-dicrocoelium-eggs": {
    src: '/specimens/fasciola-hepatica-and-dicrocoelium-eggs.webp', title: "Huevos de duelas hep\u00e1ticas comparaci\u00f3n.jpg", author: "Shejile", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Huevos_de_duelas_hep\u00e1ticas_comparaci\u00f3n.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "pinworm-enterobius-vermicularis-eggs": {
    src: '/specimens/pinworm-enterobius-vermicularis-eggs.webp', title: "Enterobius vermicularis.png", author: "DPDx, PHIL", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Enterobius_vermicularis.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hookworm-egg-stool-wet-mount": {
    src: '/specimens/hookworm-egg-stool-wet-mount.webp', title: "Hookworm egg.jpg", author: "Microrao", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hookworm_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "hookworm-ancylostoma-caninum-egg-40x": {
    src: '/specimens/hookworm-ancylostoma-caninum-egg-40x.webp', title: "Hookworm egg 1.JPG", author: "Joel Mills", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hookworm_egg_1.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "embryonated-hookworm-egg": {
    src: '/specimens/embryonated-hookworm-egg.webp', title: "Necator americanus, Ancylostoma duodenale egg.jpg", author: "CDC, Courtesy: Public Health Image Library", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Necator_americanus,_Ancylostoma_duodenale_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mosquito-larva-under-the-microscope": {
    src: '/specimens/mosquito-larva-under-the-microscope.webp', title: "Larva de mosquito.jpg", author: "Deljackson", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Larva_de_mosquito.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mosquito-larva-dark-field": {
    src: '/specimens/mosquito-larva-dark-field.webp', title: "\u041b\u0438\u0447\u0438\u043d\u043a\u0430 \u043a\u043e\u043c\u0430\u0440\u0430.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041b\u0438\u0447\u0438\u043d\u043a\u0430_\u043a\u043e\u043c\u0430\u0440\u0430.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "blood-sucking-mosquito-larva-dark-field-and-polarisation": {
    src: '/specimens/blood-sucking-mosquito-larva-dark-field-and-polarisation.webp', title: "\u041b\u0438\u0447\u0438\u043d\u043a\u0430 \u043a\u0440\u043e\u0432\u043e\u0441\u043e\u0441\u0443\u0449\u0435\u0433\u043e \u043a\u043e\u043c\u0430\u0440\u0430. \u0422\u0435\u043c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 + \u043f\u043e\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f.jpg", author: "Andrei Savitsky", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041b\u0438\u0447\u0438\u043d\u043a\u0430_\u043a\u0440\u043e\u0432\u043e\u0441\u043e\u0441\u0443\u0449\u0435\u0433\u043e_\u043a\u043e\u043c\u0430\u0440\u0430._\u0422\u0435\u043c\u043d\u043e\u0435_\u043f\u043e\u043b\u0435_+_\u043f\u043e\u043b\u044f\u0440\u0438\u0437\u0430\u0446\u0438\u044f.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nomada-bee-eye-10x": {
    src: '/specimens/nomada-bee-eye-10x.webp', title: "10x Nomada eye 2015-04-13-17.41.16 ZS PMax (16519118423).jpg", author: "USGS Bee Inventory and Monitoring Lab from Beltsville, Maryland, USA", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:10x_Nomada_eye_2015-04-13-17.41.16_ZS_PMax_(16519118423).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "tachinid-fly-belvosia-head": {
    src: '/specimens/tachinid-fly-belvosia-head.webp', title: "BELVOSIA species, 2016-10-22-13.22 (30412944431).jpg", author: "USGS Bee Inventory and Monitoring Lab from Beltsville, Maryland, USA", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BELVOSIA_species,_2016-10-22-13.22_(30412944431).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "honey-bee-male-ocelli": {
    src: '/specimens/honey-bee-male-ocelli.webp', title: "Male honney bee ocelli (6167122195).jpg", author: "Gilles San Martin from Namur, Belgium", license: "CC BY-SA 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Male_honney_bee_ocelli_(6167122195).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "phantom-crane-fly-face-10x": {
    src: '/specimens/phantom-crane-fly-face-10x.webp', title: "Phantom crane fly 2015-04-19-16.23.54 ZS PMax (17204882991) (2).jpg", author: "USGS Bee Inventory and Monitoring Lab from Beltsville, Maryland, USA", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Phantom_crane_fly_2015-04-19-16.23.54_ZS_PMax_(17204882991)_(2).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ant-commercially-prepared-slide": {
    src: '/specimens/ant-commercially-prepared-slide.webp', title: "20110331antStackCP (5576648695).jpg", author: "MostlyDross from Springfield, VA, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20110331antStackCP_(5576648695).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ant-head-and-antenna": {
    src: '/specimens/ant-head-and-antenna.webp', title: "\u0413\u043e\u043b\u043e\u0432\u0430 \u043c\u0443\u0440\u0430\u0432\u044c\u044f.jpg", author: "Alexander Klepnev", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0413\u043e\u043b\u043e\u0432\u0430_\u043c\u0443\u0440\u0430\u0432\u044c\u044f.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ant-head-portrait": {
    src: '/specimens/ant-head-portrait.webp', title: "\u041f\u043e\u0440\u0442\u0440\u0435\u0442 \u043c\u0443\u0440\u0430\u0432\u044c\u044f \u043f\u043e\u0434 \u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg", author: "Gribkov", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041f\u043e\u0440\u0442\u0440\u0435\u0442_\u043c\u0443\u0440\u0430\u0432\u044c\u044f_\u043f\u043e\u0434_\u043c\u0438\u043a\u0440\u043e\u0441\u043a\u043e\u043f\u043e\u043c.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "aphid-reflected-light-200x": {
    src: '/specimens/aphid-reflected-light-200x.webp', title: "Aphid 20090521 01.jpg", author: "Sven.petersen", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aphid_20090521_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "aphid-under-the-microscope": {
    src: '/specimens/aphid-under-the-microscope.webp', title: "Microscope view of an aphid 01.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microscope_view_of_an_aphid_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "german-wasp-vespula-germanica-compound-eye": {
    src: '/specimens/german-wasp-vespula-germanica-compound-eye.webp', title: "Vespula germanica Stereo Microscope Eye.jpg", author: "(SecretDisc)", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vespula_germanica_Stereo_Microscope_Eye.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "insect-trachea-100x": {
    src: '/specimens/insect-trachea-100x.webp', title: "Insect trachea 100x.jpg", author: "Tgru001", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_trachea_100x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "insect-trachea-40x": {
    src: '/specimens/insect-trachea-40x.webp', title: "Insect trachea 40x.jpg", author: "Tgru001", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_trachea_40x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "amphipod-abludomelita-obtusata": {
    src: '/specimens/amphipod-abludomelita-obtusata.webp', title: "Abludomelita obtusata.jpg", author: "Hans Hillewaert", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Abludomelita_obtusata.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "amphipod-ampelisca-brevicornis": {
    src: '/specimens/amphipod-ampelisca-brevicornis.webp', title: "Ampelisca brevicornis.jpg", author: "Hans Hillewaert", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ampelisca_brevicornis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "antarctic-krill-euphausia-superba": {
    src: '/specimens/antarctic-krill-euphausia-superba.webp', title: "Antarctic krill (Euphausia superba).jpg", author: "Krill666.jpg: Uwe Kils I am willing to give the image in 1700 resolution to Wiki", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Antarctic_krill_(Euphausia_superba).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "amphipod-aora-gracilis": {
    src: '/specimens/amphipod-aora-gracilis.webp', title: "Aora gracilis.jpg", author: "Hans Hillewaert", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aora_gracilis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cladocerans-bosmina-and-sida-crystallina": {
    src: '/specimens/cladocerans-bosmina-and-sida-crystallina.webp', title: "Bosmina i Sida crystallina.jpg", author: "MarekMi\u015b", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bosmina_i_Sida_crystallina.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dead-ostracod-among-plant-cells": {
    src: '/specimens/dead-ostracod-among-plant-cells.webp', title: "A dead ostracod.jpg", author: "ShakiAaa", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_dead_ostracod.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "chironomid-midge-larva": {
    src: '/specimens/chironomid-midge-larva.webp', title: "Chironomidae larvae.jpg", author: "Janek Lass", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chironomidae_larvae.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "cat-cerebellar-cortex-sagittal-section": {
    src: '/specimens/cat-cerebellar-cortex-sagittal-section.webp', title: "\u041c\u043e\u0437\u0436\u0435\u0447\u043a\u043e\u0432\u0430\u044f \u043a\u043e\u0440\u0430 \u043a\u043e\u0448\u043a\u0438. \u041e\u043a\u0440\u0430\u0441\u043a\u0430 \u0433\u0435\u043c\u0430\u0442\u043e\u043a\u0441\u0438\u043b\u0438\u043d-\u044d\u043e\u0437\u0438\u043d. \u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 x100.jpg", author: "Polina DTsareva", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041c\u043e\u0437\u0436\u0435\u0447\u043a\u043e\u0432\u0430\u044f_\u043a\u043e\u0440\u0430_\u043a\u043e\u0448\u043a\u0438._\u041e\u043a\u0440\u0430\u0441\u043a\u0430_\u0433\u0435\u043c\u0430\u0442\u043e\u043a\u0441\u0438\u043b\u0438\u043d-\u044d\u043e\u0437\u0438\u043d._\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435_x100.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "ostrich-secondary-bronchus-van-gieson-stain": {
    src: '/specimens/ostrich-secondary-bronchus-van-gieson-stain.webp', title: "Bronquio secundario de avestruz.JPG", author: "Lycaon.cl", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bronquio_secundario_de_avestruz.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "feline-hair-follicle-40x": {
    src: '/specimens/feline-hair-follicle-40x.webp', title: "Hair follicle of feline - Microscopic view 1.jpg", author: "Juan Carlos Fonseca Mata", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hair_follicle_of_feline_-_Microscopic_view_1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "scalp-hair-follicle-transverse-section-400x": {
    src: '/specimens/scalp-hair-follicle-transverse-section-400x.webp', title: "Pilosus folicle transv 400.JPG", author: "Gan\u00edmedes", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pilosus_folicle_transv_400.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "dog-cerebellum-purkinje-cells": {
    src: '/specimens/dog-cerebellum-purkinje-cells.webp', title: "Neurons (Purkinje cells).jpg", author: "Lennart Rikk", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Neurons_(Purkinje_cells).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "olfactory-epithelium-1-5-micron-section": {
    src: '/specimens/olfactory-epithelium-1-5-micron-section.webp', title: "Olfactory Epithelium Thin Section 1.5 microns H & E Stain Ward's 2.jpg", author: "Iceclanl", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Olfactory_Epithelium_Thin_Section_1.5_microns_H_&_E_Stain_Ward's_2.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "adenohypophysis-anterior-pituitary-h-e": {
    src: '/specimens/adenohypophysis-anterior-pituitary-h-e.webp', title: "Adenohypof\u00fdza HE.jpg", author: "Dr\u017eiak", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Adenohypof\u00fdza_HE.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-pineal-gland-phase-contrast-200x": {
    src: '/specimens/human-pineal-gland-phase-contrast-200x.webp', title: "Older Human Pituitary Gland by Phase Contrast (40442211443).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Older_Human_Pituitary_Gland_by_Phase_Contrast_(40442211443).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "thyroid-and-parathyroid-glands": {
    src: '/specimens/thyroid-and-parathyroid-glands.webp', title: "Thyroid and parathyroid glands histology.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thyroid_and_parathyroid_glands_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-pineal-gland-with-brain-sand-40x": {
    src: '/specimens/human-pineal-gland-with-brain-sand-40x.webp', title: "Brain Sand in Older Human Pineal Gland (33527661718).jpg", author: "Berkshire Community College Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_Sand_in_Older_Human_Pineal_Gland_(33527661718).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "human-appendix-low-power-h-e": {
    src: '/specimens/human-appendix-low-power-h-e.webp', title: "Appndix histology.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Appndix_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "elastic-cartilage-400x": {
    src: '/specimens/elastic-cartilage-400x.webp', title: "Cart elastico 400.JPG", author: "Gan\u00edmedes", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cart_elastico_400.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "elastic-cartilage-fibres-400x": {
    src: '/specimens/elastic-cartilage-fibres-400x.webp', title: "Elast cart fibers.JPG", author: "Gan\u00edmedes", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Elast_cart_fibers.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fibrocartilage": {
    src: '/specimens/fibrocartilage.webp', title: "Fibrous catilage.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fibrous_catilage.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "neonatal-human-dermal-fibroblasts-calcein-am": {
    src: '/specimens/neonatal-human-dermal-fibroblasts-calcein-am.webp', title: "Neonatal Human Dermal Fibroblasts.jpg", author: "RobertsBiology", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Neonatal_Human_Dermal_Fibroblasts.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "onion-epidermal-cells": {
    src: '/specimens/onion-epidermal-cells.webp', title: "Onion cell.jpg", author: "Farhan Sazid", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Onion_cell.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "red-onion-cells": {
    src: '/specimens/red-onion-cells.webp', title: "Red onion cells (microscope observation).jpg", author: "Edoardo Simon", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_onion_cells_(microscope_observation).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "reticulocyte-in-a-blood-smear-4000x": {
    src: '/specimens/reticulocyte-in-a-blood-smear-4000x.webp', title: "Reticulocyte in PBS.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Reticulocyte_in_PBS.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "rainbow-trout-blood-smear": {
    src: '/specimens/rainbow-trout-blood-smear.webp', title: "A blood smear of rainbow trout.jpg", author: "Bobjgalindo", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_blood_smear_of_rainbow_trout.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lymphocyte-among-red-cells-wright-stain": {
    src: '/specimens/lymphocyte-among-red-cells-wright-stain.webp', title: "Blood-lymphocyte1.jpg", author: "Echinaceapallida", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood-lymphocyte1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mouse-blood-smear-for-the-leukocyte-count": {
    src: '/specimens/mouse-blood-smear-for-the-leukocyte-count.webp', title: "Blood Smear.jpg", author: "\u0410\u043d\u0430\u0441\u0442\u0430\u0441\u0456\u044f \u0413\u0440\u0443\u0449\u0435\u043d\u043a\u043e", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_Smear.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "lymphocytes-in-a-blood-smear": {
    src: '/specimens/lymphocytes-in-a-blood-smear.webp', title: "Lymphocytosis.JPG", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lymphocytosis.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "two-basophils-in-a-blood-smear": {
    src: '/specimens/two-basophils-in-a-blood-smear.webp', title: "\u0411\u0430\u0437\u043e\u0444\u0456\u043b\u0438.jpg", author: "Makysm", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u0411\u0430\u0437\u043e\u0444\u0456\u043b\u0438.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "monocytes-in-a-blood-smear": {
    src: '/specimens/monocytes-in-a-blood-smear.webp', title: "Monocytes.jpg", author: "toryaniknst", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Monocytes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "turtle-red-blood-cells": {
    src: '/specimens/turtle-red-blood-cells.webp', title: "A blood smear showing red blood cells of turtle.jpg", author: "Bobjgalindo", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_blood_smear_showing_red_blood_cells_of_turtle.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "howell-jolly-bodies-in-normoblasts": {
    src: '/specimens/howell-jolly-bodies-in-normoblasts.webp', title: "Howell\u2013Jolly bodies.jpg", author: "Makysm", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Howell\u2013Jolly_bodies.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "normoblasts-nucleated-red-cells": {
    src: '/specimens/normoblasts-nucleated-red-cells.webp', title: "Normoblast.jpg", author: "Prof. Osaro Erhabor", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Normoblast.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nucleated-red-cells-smear": {
    src: '/specimens/nucleated-red-cells-smear.webp', title: "Nucleated Red Cells.jpg", author: "Prof. Osaro Erhabor", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nucleated_Red_Cells.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "nucleated-red-cell-with-cabot-rings-may-grunwald-stain-400x": {
    src: '/specimens/nucleated-red-cell-with-cabot-rings-may-grunwald-stain-400x.webp', title: "Nucleated red blood cell with Cabot rings and basophilic granules.jpg", author: "Makysm", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nucleated_red_blood_cell_with_Cabot_rings_and_basophilic_granules.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "howell-jolly-body-in-an-erythrocyte": {
    src: '/specimens/howell-jolly-body-in-an-erythrocyte.webp', title: "Howell-Jolly body.png", author: "Paulo Henrique Orlandi Mourao and Mikael H\u00e4ggstr\u00f6m", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Howell-Jolly_body.png",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bacterial-colony-and-fungus": {
    src: '/specimens/bacterial-colony-and-fungus.webp', title: "Bacterial colony and fungus under the microscope 01.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacterial_colony_and_fungus_under_the_microscope_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "bacterial-colonies-under-the-microscope": {
    src: '/specimens/bacterial-colonies-under-the-microscope.webp', title: "Bacterial colony under the microscope 06.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacterial_colony_under_the_microscope_06.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "helicobacter-pylori-in-stomach-mucosa-modified-giemsa-400x": {
    src: '/specimens/helicobacter-pylori-in-stomach-mucosa-modified-giemsa-400x.webp', title: "400x GiemsaC stomach Hp.jpg", author: "Alexquaas", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:400x_GiemsaC_stomach_Hp.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "candida-albicans-light-microscope": {
    src: '/specimens/candida-albicans-light-microscope.webp', title: "Candida albicans (optic microscope).jpg", author: "David Arqueas", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(optic_microscope).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "fusarium-microconidia-and-macroconidia": {
    src: '/specimens/fusarium-microconidia-and-macroconidia.webp', title: "Microconidia and Macroconidia of the fungus Fusarium sp.jpg", author: "Tashkoskip", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microconidia_and_Macroconidia_of_the_fungus_Fusarium_sp.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "mucor-mould": {
    src: '/specimens/mucor-mould.webp', title: "\u041c\u0443\u043a\u043e\u0440.jpg", author: "\u0415\u043b\u0438\u0437\u0430\u0432\u0435\u0442\u0430 \u041a\u0440\u0438\u0432\u043e\u0447\u043a\u0438\u043d\u0430", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:\u041c\u0443\u043a\u043e\u0440.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "alternaria-alternata-conidia-and-hyphae": {
    src: '/specimens/alternaria-alternata-conidia-and-hyphae.webp', title: "Alternaria alternata.jpg", author: "Yulianna.x", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alternaria_alternata.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  "alternaria-muriform-conidia": {
    src: '/specimens/alternaria-muriform-conidia.webp', title: "Conidia of Alternaria under light microscope \u2013 400x.jpg", author: "Arpitoon", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Conidia_of_Alternaria_under_light_microscope_\u2013_400x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
};
