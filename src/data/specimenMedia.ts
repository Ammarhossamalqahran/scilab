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
    src: '/specimens/blood-smear.jpg', title: 'Peripheral blood smear.jpg', author: 'Microrao', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Peripheral_blood_smear.jpg',
    adaptation: 'Captured from the full-size source image; surrounding browser margins are cropped.',
  },
  'sickle-cell-smear': {
    src: '/specimens/sickle-cell-smear.jpg', title: 'Sickle cells in blood.jpg', author: 'Dr Graham Beards', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sickle_cells_in_blood.jpg',
  },
  'target-cells': {
    src: '/specimens/target-cells.jpg', title: 'Target cells.jpg', author: 'Prof. Osaro Erhabor', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Target_cells.jpg',
    adaptation: 'Cropped to remove the source scale annotation, which was mislabelled.',
  },
  'eosinophil-smear': {
    src: '/specimens/eosinophil-smear.jpg', title: 'Eosinophil blood smear.JPG', author: 'Bobjgalindo', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Eosinophil_blood_smear.JPG',
  },
  'reticulocyte-smear': {
    src: '/specimens/reticulocyte-smear.jpg', title: 'Reticulocytes Human Blood Supravital Stain.jpg', author: 'Ed Uthman, MD', license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Reticulocytes_Human_Blood_Supravital_Stain.jpg',
  },
  'malaria-smear': {
    src: '/specimens/malaria-smear.jpg', title: 'Plasmodium falciparum malaria, 1000x.jpg', author: 'Department of Pathology, Calicut Medical College', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Plasmodium_falciparum_malaria,_1000x.jpg',
  },
  'onion-epidermis': {
    src: '/specimens/onion-epidermis.jpg', title: 'Onion epidermis high power.jpg', author: 'Mccloughlin', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Onion_epidermis_high_power.jpg',
  },
  'cheek-cells': {
    src: '/specimens/cheek-cells.jpg', title: 'Microscopic Image of Human Cheek Cells.jpg', author: 'Aholderfield', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microscopic_Image_of_Human_Cheek_Cells.jpg',
  },
  'skeletal-muscle': {
    src: '/specimens/skeletal-muscle.jpg', title: 'Skeletal Muscle Tissue.jpg', author: 'Community College Bioscience', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Skeletal_Muscle_Tissue.jpg',
  },
  'budding-yeast': {
    src: '/specimens/yeast.jpg', title: 'Yeast Cells in Wet Mount Microscopy of Culture.jpg', author: 'Ajay Kumar Chaurasiya', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Yeast_Cells_in_Wet_Mount_Microscopy_of_Culture.jpg',
  },
  'bacteria-morphology': {
    src: '/specimens/gram-stain.jpg', title: 'Gram stain 01.jpg', author: 'Y tambe', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gram_stain_01.jpg',
  },
  'pond-water': {
    src: '/specimens/pond-water.jpg', title: 'Pond Water Under the Microscope.jpg', author: 'syed sajidul islam', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pond_Water_Under_the_Microscope.jpg',
    adaptation: 'Cropped to the original eyepiece field; part of the dark microscope frame remains visible.',
  },
  'dicot-leaf': {
    src: '/specimens/lemon-leaf-cross-section.jpg', title: 'Limonero-al-microscopio2.jpg', author: 'Luke29', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Limonero-al-microscopio2.jpg',
    adaptation: 'Cropped to the original eyepiece field; part of the dark microscope frame remains visible.',
  },
  'leaf-stomata': {
    src: '/specimens/leaf-stomata.jpg', title: 'Leaf epithelium, stomata and guard cells.jpg', author: 'Emilio Ermini', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Leaf_epithelium,_stomata_and_guard_cells.jpg',
  },
  'onion-root-tip': {
    src: '/specimens/onion-root-tip-mitosis.jpg', title: 'Onion Root Mitosis.jpg', author: 'Johnathan Gutierrez', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Onion_Root_Mitosis.jpg',
  },
  'pollen-grains': {
    src: '/specimens/pollen.jpg', title: 'Pollen - Dark-field microscopy.jpg', author: 'Juan Carlos Fonseca Mata', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pollen_-_Dark-field_microscopy.jpg',
  },
  paramecium: {
    src: '/specimens/paramecium.jpg', title: 'Paramecium.jpg', author: 'Barfooz', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Paramecium.jpg',
  },
  euglena: {
    src: '/specimens/euglena.jpg', title: 'Euglena sp (26 2 95).jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Euglena_sp_(26_2_95).jpg',
  },
  daphnia: {
    src: '/specimens/daphnia.jpg', title: 'Daphnia micrograph. Red x40.jpg', author: 'Kamil Kulawik', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Daphnia_micrograph._Red_x40.jpg',
    adaptation: 'Cropped to remove the source scale annotation.',
  },
  hydra: {
    src: '/specimens/hydra.jpg', title: 'Hydra vulgaris micrograph x100.jpg', author: 'Kamil Kulawik', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hydra_vulgaris_micrograph_x100.jpg',
  },
  diatoms: {
    src: '/specimens/diatoms.jpg', title: 'Diatoms through the microscope.jpg', author: 'Prof. Gordon T. Taylor · NOAA Corps Collection', license: 'Public domain (US NOAA)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Diatoms_through_the_microscope.jpg',
  },
  spirogyra: {
    src: '/specimens/spirogyra.jpg', title: 'Spirogyra Under Light Microscope 40 X Mag.jpg', author: 'Iceclanl', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Spirogyra_Under_Light_Microscope_40_X_Mag.jpg',
    adaptation: 'Cropped to the filament field; source scale and caption are removed.',
  },
  'fern-sporangium': {
    src: '/specimens/fern-spores.jpg', title: 'Sporangium (255 33) Male fern (Dryopteris filix-mas); total preparation.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sporangium_(255_33)_Male_fern_(Dryopteris_filix-mas);_total_preparation.jpg',
  },
  'compact-bone': {
    src: '/specimens/compact-bone.jpg', title: 'Bone (247 29A) Human bone cross-section.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bone_(247_29A)_Human_bone_cross-section.jpg',
    adaptation: 'Downscaled for web display; bright-field photomicrograph of a human bone cross-section.',
  },
  fibrocartilage: {
    src: '/specimens/fibrocartilage.jpg', title: 'Microscopic Image of Mammal Fibrocartilage Tissue.jpg', author: 'Magda Yurchishin', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Microscopic_Image_of_Mammal_Fibrocartilage_Tissue.jpg',
  },
  'cardiac-muscle': {
    src: '/specimens/cardiac-muscle.jpg', title: 'Muscle Tissue Cardiac Muscle (27187637147).jpg', author: 'Berkshire Community College Bioscience Image Library', license: 'CC0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Muscle_Tissue_Cardiac_Muscle_(27187637147).jpg',
  },
  amoeba: {
    src: '/specimens/amoeba.jpg', title: 'Amoeba proteus.jpg', author: 'Cymothoa exigua', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Amoeba_proteus.jpg',
  },
  rotifer: {
    src: '/specimens/rotifer.jpg', title: 'Rotifera 01.jpg', author: 'Paranzem Yatsko', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Rotifera_01.jpg',
  },
  'hyaline-cartilage': {
    src: '/specimens/hyaline-cartilage.jpg', title: 'Hyaline cartilage (254 01) Mammal; section.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hyaline_cartilage_(254_01)_Mammal;_section.jpg',
  },
  'adipose-tissue': {
    src: '/specimens/adipose-tissue.jpg', title: 'Adipose tissue.jpg', author: 'Chalova.lina', license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Adipose_tissue.jpg',
  },
  'smooth-muscle': {
    src: '/specimens/smooth-muscle.jpg', title: 'Smooth muscle 400x.jpg', author: 'Alexander G. Cheroske', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Smooth_muscle_400x.jpg',
  },
  'lung-alveoli': {
    src: '/specimens/lung-alveoli.jpg', title: 'Normal lung (5414785258).jpg', author: 'Yale Rosen', license: 'CC BY-SA 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Normal_lung_(5414785258).jpg',
  },
  'kidney-section': {
    src: '/specimens/kidney-section.jpg', title: 'Kidney (254 16) Human.jpg', author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kidney_(254_16)_Human.jpg',
  },
  'pine-needle': {
    src: '/specimens/pine-needle.jpg', title: 'Scots pine needle cross sectionl age 6 weeks healthy plant.JPG', author: 'Biooid 99', license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Scots_pine_needle_cross_sectionl_age_6_weeks_healthy_plant.JPG',
  },
  'lily-anther': {
    src: '/specimens/lily-anther.jpg', title: 'Lilium mature anther XS.jpg', author: 'Curtis Clark', license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lilium_mature_anther_XS.jpg',
  },
  'maize-stem': {
    src: '/specimens/maize-stem.jpg', title: "Plant stem (255 04) Cross-section of maize stem.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(255_04)_Cross-section_of_maize_stem.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'pine-needle-brightfield': {
    src: '/specimens/pine-needle-brightfield.jpg', title: "Pinus nigra needle (255 22) Needle cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(255_22)_Needle_cross_section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'broad-bean-root': {
    src: '/specimens/broad-bean-root.jpg', title: "Root (255 00F) Cross-section; broad bean; Vicia faba.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Root_(255_00F)_Cross-section;_broad_bean;_Vicia_faba.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'tilia-woody-stem': {
    src: '/specimens/tilia-woody-stem.jpg', title: "Plant stem (250 29) Cross-section of woody stem of Tilia.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(250_29)_Cross-section_of_woody_stem_of_Tilia.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'medicago-stem': {
    src: '/specimens/medicago-stem.jpg', title: "Plant stem (255 05) Cross-section of stem of Medicago.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(255_05)_Cross-section_of_stem_of_Medicago.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'ascaris-section': {
    src: '/specimens/ascaris-section.jpg', title: "Giant roundworm (265 11) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(265_11)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'earthworm-section': {
    src: '/specimens/earthworm-section.jpg', title: "Common earthworm (250 13) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(250_13)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'leech-section': {
    src: '/specimens/leech-section.jpg', title: "Leech (265 10) Cross-section of leech (Hirudinea).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leech_(265_10)_Cross-section_of_leech_(Hirudinea).jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'tapeworm-section': {
    src: '/specimens/tapeworm-section.jpg', title: "Tapeworm (265 15) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_15)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'medusa-whole-mount': {
    src: '/specimens/medusa-whole-mount.jpg', title: "Medusa (265 13).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Medusa_(265_13).jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'fish-scale': {
    src: '/specimens/fish-scale.jpg', title: "Fish scale (250 02) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_scale_(250_02)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'testis-section': {
    src: '/specimens/testis-section.jpg', title: "Testicles (26 2 11) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(26_2_11)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'liver-section': {
    src: '/specimens/liver-section.jpg', title: "Liver (26 2 07) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Liver_(26_2_07)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'duodenum-section': {
    src: '/specimens/duodenum-section.jpg', title: "Duodenum (26 2 08) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenum_(26_2_08)_Cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'spinal-cord-section': {
    src: '/specimens/spinal-cord-section.jpg', title: "Spinal cord (254 21) Mammal; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_21)_Mammal;_cross-section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'spleen-section': {
    src: '/specimens/spleen-section.jpg', title: "Spleen (254 07) Section; mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spleen_(254_07)_Section;_mammal.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'tongue-section': {
    src: '/specimens/tongue-section.jpg', title: "Human tongue (251 09) Section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tongue_(251_09)_Section.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'trachea-section': {
    src: '/specimens/trachea-section.jpg', title: "Trachea (26 2 06) Mouse trachea cross-section, embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trachea_(26_2_06)_Mouse_trachea_cross-section,_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
  'cerebellum-section': {
    src: '/specimens/cerebellum-section.jpg', title: "Cerebellum (254 24) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerebellum_(254_24)_Mammal.jpg",
    adaptation: 'Downscaled to 1280 px wide; not cropped.',
  },
};
