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
  'mite-acari-265-02': {
    src: '/specimens/mite-acari-265-02.jpg', title: "Acari (265 02) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acari_(265_02)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aedes-mosquito-247-27a': {
    src: '/specimens/aedes-mosquito-247-27a.jpg', title: "Aedes mosquito (247 27A) With biting lice.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aedes_mosquito_(247_27A)_With_biting_lice.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aerial-root-255-01': {
    src: '/specimens/aerial-root-255-01.jpg', title: "Aerial root (255 01).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerial_root_(255_01).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ant-leg-250-09': {
    src: '/specimens/ant-leg-250-09.jpg', title: "Ant leg (250 09) Ant leg (Formicidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ant_leg_(250_09)_Ant_leg_(Formicidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'articular-head-joint-254-03': {
    src: '/specimens/articular-head-joint-254-03.jpg', title: "Articular head (254 03) Section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Articular_head_(254_03)_Section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aspergillus-fumigatus-257-15': {
    src: '/specimens/aspergillus-fumigatus-257-15.jpg', title: "Aspergillus fumigatus (257 15).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aspergillus_fumigatus_(257_15).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-248-28': {
    src: '/specimens/airborne-bacteria-248-28.jpg', title: "Bacteria (248 28) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(248_28)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basidiobolus-257-20': {
    src: '/specimens/basidiobolus-257-20.jpg', title: "Basidiobolus (257 20).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basidiobolus_(257_20).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basidiocarp-hymenium-257-26': {
    src: '/specimens/basidiocarp-hymenium-257-26.jpg', title: "Basidiocarp hymenium (257 26) Basidiomycota; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basidiocarp_hymenium_(257_26)_Basidiomycota;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bed-bug-265-17': {
    src: '/specimens/bed-bug-265-17.jpg', title: "Bed bug (265 17).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bed_bug_(265_17).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bird-feather-248-20': {
    src: '/specimens/bird-feather-248-20.jpg', title: "Bird feather (248 20).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bird_feather_(248_20).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-248-36': {
    src: '/specimens/blood-smear-248-36.jpg', title: "Blood smear (248 36) Fish.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(248_36)_Fish.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bone-section-248-12': {
    src: '/specimens/bone-section-248-12.jpg', title: "Bone (248 12) Bone cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bone_(248_12)_Bone_cross_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-brain-section-247-28a': {
    src: '/specimens/rat-brain-section-247-28a.jpg', title: "Brain (247 28A) Rat brain.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_(247_28A)_Rat_brain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bud-lilac-255-28': {
    src: '/specimens/bud-lilac-255-28.jpg', title: "Bud (255 28) Longitudal section of lilac (Syringa vulgaris).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bud_(255_28)_Longitudal_section_of_lilac_(Syringa_vulgaris).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'candida-albicans-248-35': {
    src: '/specimens/candida-albicans-248-35.jpg', title: "Candida albicans (248 35).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(248_35).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'caryopsis-grain-255-31': {
    src: '/specimens/caryopsis-grain-255-31.jpg', title: "Caryopsis (grain) (255 31) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caryopsis_(grain)_(255_31)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-bean-tick-248-14': {
    src: '/specimens/castor-bean-tick-248-14.jpg', title: "Castor bean tick (248 14) Total preparation - larva and egg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castor_bean_tick_(248_14)_Total_preparation_-_larva_and_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fetus-section-247-30a': {
    src: '/specimens/cat-fetus-section-247-30a.jpg', title: "Cat fetus (247 30A) Cat fetus section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cat_fetus_(247_30A)_Cat_fetus_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cultured-cells-261-20': {
    src: '/specimens/cultured-cells-261-20.jpg', title: "Cell culture (fibroblasts) (261 20) Fibroblasts (metaphase, anaphase).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cell_culture_(fibroblasts)_(261_20)_Fibroblasts_(metaphase,_anaphase).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-cercaria-259-21': {
    src: '/specimens/trematode-cercaria-259-21.jpg', title: "Cercaria of trematode (259 21) Cercaria of trematode.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cercaria_of_trematode_(259_21)_Cercaria_of_trematode.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cerebellum-26-2-12': {
    src: '/specimens/cerebellum-26-2-12.jpg', title: "Cerebellum (26 2 12) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cerebellum_(26_2_12)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'chromatin-fibres-261-19': {
    src: '/specimens/chromatin-fibres-261-19.jpg', title: "Chromatin fibers (261 19) Mitosis; Xenopus egg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Chromatin_fibers_(261_19)_Mitosis;_Xenopus_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ciliates-250-21': {
    src: '/specimens/ciliates-250-21.jpg', title: "Ciliates (250 21).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ciliates_(250_21).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'earthworm-section-26-2-18': {
    src: '/specimens/earthworm-section-26-2-18.jpg', title: "Common earthworm (26 2 18) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(26_2_18)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'house-mosquito-larva-247-26a': {
    src: '/specimens/house-mosquito-larva-247-26a.jpg', title: "Common house mosquito (247 26A) Total preparation; larva.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_house_mosquito_(247_26A)_Total_preparation;_larva.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'corynebacterium-257-29': {
    src: '/specimens/corynebacterium-257-29.jpg', title: "Corynebacterium pseudodiphteriae (257 29).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Corynebacterium_pseudodiphteriae_(257_29).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-larva-265-08': {
    src: '/specimens/crab-larva-265-08.jpg', title: "Crab larva (265 08).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_larva_(265_08).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-louse-250-18': {
    src: '/specimens/crab-louse-250-18.jpg', title: "Crab louse (250 18) Male adult, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_louse_(250_18)_Male_adult,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-248-07': {
    src: '/specimens/cyanobacteria-248-07.jpg', title: "Cyanobacteria (248 07) Mixture; native preparation; green filter.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_(248_07)_Mixture;_native_preparation;_green_filter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'daphnia-water-flea-248-29': {
    src: '/specimens/daphnia-water-flea-248-29.jpg', title: "Daphnia (248 29) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daphnia_(248_29)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'diatomaceous-earth-251-10': {
    src: '/specimens/diatomaceous-earth-251-10.jpg', title: "Diatomaceous earth (251 10) Diatomaceous earth.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatomaceous_earth_(251_10)_Diatomaceous_earth.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'diatoms-248-05': {
    src: '/specimens/diatoms-248-05.jpg', title: "Diatoms (248 05) Various diatoms.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Diatoms_(248_05)_Various_diatoms.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'duodenum-254-14': {
    src: '/specimens/duodenum-254-14.jpg', title: "Duodenum (254 14).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Duodenum_(254_14).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'entamoeba-histolytica-251-32': {
    src: '/specimens/entamoeba-histolytica-251-32.jpg', title: "Entamoeba histolytica (251 32).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Entamoeba_histolytica_(251_32).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'escherichia-coli-257-06': {
    src: '/specimens/escherichia-coli-257-06.jpg', title: "Escherichia coli (257 06) Gramnegative rods.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_(257_06)_Gramnegative_rods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'eubacteria-257-04': {
    src: '/specimens/eubacteria-257-04.jpg', title: "Eubacteria (257 04) Various eubacteria.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eubacteria_(257_04)_Various_eubacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'euglena-250-19': {
    src: '/specimens/euglena-250-19.jpg', title: "Euglena sp (250 19) Euglena sp. (protozoan).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Euglena_sp_(250_19)_Euglena_sp._(protozoan).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fish-scale-248-33': {
    src: '/specimens/fish-scale-248-33.jpg', title: "Fish scale (248 33) Ctenoid scale; total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_scale_(248_33)_Ctenoid_scale;_total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'flea-251-01': {
    src: '/specimens/flea-251-01.jpg', title: "Flea (251 01) Aphaniptera; total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Flea_(251_01)_Aphaniptera;_total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lily-flower-bud-250-30': {
    src: '/specimens/lily-flower-bud-250-30.jpg', title: "Flower bud (250 30) Cross-section through a flower bud of Lilium martagon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Flower_bud_(250_30)_Cross-section_through_a_flower_bud_of_Lilium_martagon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'foraminifera-251-02': {
    src: '/specimens/foraminifera-251-02.jpg', title: "Foraminifera (251 02) Mediterranean Sea.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Foraminifera_(251_02)_Mediterranean_Sea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fusarium-solani-257-25': {
    src: '/specimens/fusarium-solani-257-25.jpg', title: "Fusarium solani (257 25) Cultured and stained deuteromycetes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fusarium_solani_(257_25)_Cultured_and_stained_deuteromycetes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'germinating-pollen-255-27': {
    src: '/specimens/germinating-pollen-255-27.jpg', title: "Germination of pollen (255 27) Total preparation (pollen tube visible).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Germination_of_pollen_(255_27)_Total_preparation_(pollen_tube_visible).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giant-roundworm-ascaris-259-23': {
    src: '/specimens/giant-roundworm-ascaris-259-23.jpg', title: "Giant roundworm (259 23) Eggs.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(259_23)_Eggs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giardia-intestinalis-259-17': {
    src: '/specimens/giardia-intestinalis-259-17.jpg', title: "Giardia intestinalis (259 17).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giardia_intestinalis_(259_17).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'head-louse-250-17': {
    src: '/specimens/head-louse-250-17.jpg', title: "Head louse (250 17) Adult, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Head_louse_(250_17)_Adult,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'heart-muscle-section-254-11': {
    src: '/specimens/heart-muscle-section-254-11.jpg', title: "Heart (254 11) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Heart_(254_11)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'snail-radula-helix-250-14': {
    src: '/specimens/snail-radula-helix-250-14.jpg', title: "Helix pomatia radula (250 14) radula.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Helix_pomatia_radula_(250_14)_radula.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'honeybee-leg-250-10': {
    src: '/specimens/honeybee-leg-250-10.jpg', title: "Honeybee leg (250 10) Honeybee (Apis mellifera) leg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Honeybee_leg_(250_10)_Honeybee_(Apis_mellifera)_leg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'housefly-leg-250-11': {
    src: '/specimens/housefly-leg-250-11.jpg', title: "Housefly leg (250 11) Housefly leg (Musca domestica).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Housefly_leg_(250_11)_Housefly_leg_(Musca_domestica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-karyotype-248-26': {
    src: '/specimens/human-karyotype-248-26.jpg', title: "Human karyotype (248 26) Karyotype Human, green filter.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_karyotype_(248_26)_Karyotype_Human,_green_filter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-tongue-254-12': {
    src: '/specimens/human-tongue-254-12.jpg', title: "Human tongue (254 12) Section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tongue_(254_12)_Section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-tonsil-26-2-05': {
    src: '/specimens/human-tonsil-26-2-05.jpg', title: "Human tonsils (26 2 05) Cross-section; embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tonsils_(26_2_05)_Cross-section;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'iceland-moss-lichen-thallus-255-37r': {
    src: '/specimens/iceland-moss-lichen-thallus-255-37r.jpg', title: "Iceland moss thallus (255 37R) Thallus of iceland moss (Cetraria islandica).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Iceland_moss_thallus_(255_37R)_Thallus_of_iceland_moss_(Cetraria_islandica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-compound-eye-250-07': {
    src: '/specimens/insect-compound-eye-250-07.jpg', title: "Insect eye (250 07) Composite eye of insects.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_eye_(250_07)_Composite_eye_of_insects.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-wing-250-04': {
    src: '/specimens/insect-wing-250-04.jpg', title: "Insect wing (250 04) Butterfly wing.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_wing_(250_04)_Butterfly_wing.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'intestinal-smooth-muscle-26-2-01': {
    src: '/specimens/intestinal-smooth-muscle-26-2-01.jpg', title: "Intestinal smooth muscle (26 2 01) Longitudal section through the muscle, cross-section through intestine.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Intestinal_smooth_muscle_(26_2_01)_Longitudal_section_through_the_muscle,_cross-section_through_intestine.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'itch-mite-247-32a': {
    src: '/specimens/itch-mite-247-32a.jpg', title: "Itch mite (247 32A).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Itch_mite_(247_32A).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'kidney-cortex-947-21': {
    src: '/specimens/kidney-cortex-947-21.jpg', title: "Kidney cortex (947 21) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kidney_cortex_(947_21)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-251-33': {
    src: '/specimens/lactobacillus-acidophilus-251-33.jpg', title: "Lactobacillus acidophilus (251 33) Lactobacillus acidophilus (D\u00f6derlein bacillus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_acidophilus_(251_33)_Lactobacillus_acidophilus_(D\u00f6derlein_bacillus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine-248-21': {
    src: '/specimens/large-intestine-248-21.jpg', title: "Large intestine (248 21) Mouse; embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_(248_21)_Mouse;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-section-251-13': {
    src: '/specimens/leaf-section-251-13.jpg', title: "Leaf (251 13) Leaf of Sphagnum.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_(251_13)_Leaf_of_Sphagnum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-stalk-petiole-255-24': {
    src: '/specimens/leaf-stalk-petiole-255-24.jpg', title: "Leaf stalk (255 24) Cross-section Syringa vulgaris.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_stalk_(255_24)_Cross-section_Syringa_vulgaris.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leech-section-26-2-29': {
    src: '/specimens/leech-section-26-2-29.jpg', title: "Leech (26 2 29) Cross-section of leech (Hirudinea).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leech_(26_2_29)_Cross-section_of_leech_(Hirudinea).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leishmania-tropica-259-19': {
    src: '/specimens/leishmania-tropica-259-19.jpg', title: "Leishmania tropica (259 19) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leishmania_tropica_(259_19)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'liver-254-13': {
    src: '/specimens/liver-254-13.jpg', title: "Liver (254 13).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Liver_(254_13).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bird-louse-265-05': {
    src: '/specimens/bird-louse-265-05.jpg', title: "Louse (265 05) Columbicola columbae (Mallophaga).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Louse_(265_05)_Columbicola_columbae_(Mallophaga).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lung-265-24': {
    src: '/specimens/lung-265-24.jpg', title: "Lung (265 24) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lung_(265_24)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lymph-node-254-06': {
    src: '/specimens/lymph-node-254-06.jpg', title: "Lymph node (254 06) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lymph_node_(254_06)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mammal-hair-250-00f': {
    src: '/specimens/mammal-hair-250-00f.jpg', title: "Mammal hair (250 00F) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mammal_hair_(250_00F)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'meiosis-248-22': {
    src: '/specimens/meiosis-248-22.jpg', title: "Meiosis (248 22).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Meiosis_(248_22).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'metaphase-onion-root-tip-261-04': {
    src: '/specimens/metaphase-onion-root-tip-261-04.jpg', title: "Metaphase (261 04) Pressed; meristem of root; onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase_(261_04)_Pressed;_meristem_of_root;_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'microsporum-gypseum-257-16': {
    src: '/specimens/microsporum-gypseum-257-16.jpg', title: "Microsporum gypseum (257 16) Microculture.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microsporum_gypseum_(257_16)_Microculture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-root-tip-248-17': {
    src: '/specimens/mitosis-root-tip-248-17.jpg', title: "Mitosis (248 17) Pressed; root meristem of Vicia faba.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_(248_17)_Pressed;_root_meristem_of_Vicia_faba.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'housefly-mouthparts-250-12': {
    src: '/specimens/housefly-mouthparts-250-12.jpg', title: "Mouthparts (250 12) Housefly (Musca domestica).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mouthparts_(250_12)_Housefly_(Musca_domestica).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mucor-257-22': {
    src: '/specimens/mucor-257-22.jpg', title: "Mucor (257 22) Fungus (genus Mucor).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mucor_(257_22)_Fungus_(genus_Mucor).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'nasal-mucosa-26-2-17': {
    src: '/specimens/nasal-mucosa-26-2-17.jpg', title: "Nasal mucosa (26 2 17) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nasal_mucosa_(26_2_17)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-nasal-mucosa-254-09': {
    src: '/specimens/human-nasal-mucosa-254-09.jpg', title: "Nasal mucosa - human (254 09).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nasal_mucosa_-_human_(254_09).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sponge-coral-and-sea-cucumber-ossicles-265-12': {
    src: '/specimens/sponge-coral-and-sea-cucumber-ossicles-265-12.jpg', title: "Ossicles and sclerites - various (265 12) From bodies of Porifera, sea corals and holuthureans.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ossicles_and_sclerites_-_various_(265_12)_From_bodies_of_Porifera,_sea_corals_and_holuthureans.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tulip-ovary-255-30': {
    src: '/specimens/tulip-ovary-255-30.jpg', title: "Ovary (botany) (255 30) Tulip; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ovary_(botany)_(255_30)_Tulip;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'paramecium-caudatum-248-06': {
    src: '/specimens/paramecium-caudatum-248-06.jpg', title: "Paramecium caudatum (248 06) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_caudatum_(248_06)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pearl-mussel-shell-265-09': {
    src: '/specimens/pearl-mussel-shell-265-09.jpg', title: "Pearl mussel (265 09) Shell wall.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pearl_mussel_(265_09)_Shell_wall.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bryozoan-statoblast-263-23': {
    src: '/specimens/bryozoan-statoblast-263-23.jpg', title: "Pectinatella magnifica statoblasts (263 23) Statoblast of Pectinatella magnifica, a species of Bryozoa.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pectinatella_magnifica_statoblasts_(263_23)_Statoblast_of_Pectinatella_magnifica,_a_species_of_Bryozoa.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'penicillium-257-14': {
    src: '/specimens/penicillium-257-14.jpg', title: "Penicillium sp (257 14) Microculture.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Penicillium_sp_(257_14)_Microculture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-needle-248-31': {
    src: '/specimens/pine-needle-248-31.jpg', title: "Pinus nigra needle (248 31) Needle cross section; fluorescence B Exc.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(248_31)_Needle_cross_section;_fluorescence_B_Exc.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-placenta-254-17': {
    src: '/specimens/human-placenta-254-17.jpg', title: "Placenta (254 17) Section of human placenta.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(254_17)_Section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-epidermis-248-04': {
    src: '/specimens/onion-epidermis-248-04.jpg', title: "Plant epidermis (248 04) Epidermis of onion bulb; dry.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_epidermis_(248_04)_Epidermis_of_onion_bulb;_dry.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-248-34': {
    src: '/specimens/leaf-epidermis-248-34.jpg', title: "Plant leaf epidermis (248 34) Tulip leaf epidermis.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_leaf_epidermis_(248_34)_Tulip_leaf_epidermis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plant-stem-section-248-01': {
    src: '/specimens/plant-stem-section-248-01.jpg', title: "Plant stem (248 01) Cross-section of stem of Berberis; autofluorescence.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(248_01)_Cross-section_of_stem_of_Berberis;_autofluorescence.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plasmodium-257-33': {
    src: '/specimens/plasmodium-257-33.jpg', title: "Plasmodium (257 33).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_(257_33).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pneumococcus-259-06': {
    src: '/specimens/pneumococcus-259-06.jpg', title: "Pneumococcus (259 06).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pneumococcus_(259_06).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pollen-grains-251-20': {
    src: '/specimens/pollen-grains-251-20.jpg', title: "Pollen grains (251 20) Pollen grains of common hazel (Corylus avellana); total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pollen_grains_(251_20)_Pollen_grains_of_common_hazel_(Corylus_avellana);_total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'polytene-chromosomes-248-30': {
    src: '/specimens/polytene-chromosomes-248-30.jpg', title: "Polytene chromosomes (248 30) Salivary glands of nonbiting midges larvae (Chironomidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polytene_chromosomes_(248_30)_Salivary_glands_of_nonbiting_midges_larvae_(Chironomidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'potato-tuber-248-03': {
    src: '/specimens/potato-tuber-248-03.jpg', title: "Potato tuber (248 03) Potato tuber cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Potato_tuber_(248_03)_Potato_tuber_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-prostate-238-13a': {
    src: '/specimens/human-prostate-238-13a.jpg', title: "Prostate (238 13A) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Prostate_(238_13A)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'psocopteran-booklouse-265-04': {
    src: '/specimens/psocopteran-booklouse-265-04.jpg', title: "Psocoptera (265 04) specimen of Psocoptera.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Psocoptera_(265_04)_specimen_of_Psocoptera.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pythium-248-24': {
    src: '/specimens/pythium-248-24.jpg', title: "Pythium (248 24).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pythium_(248_24).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-fetus-section-263-24a': {
    src: '/specimens/rat-fetus-section-263-24a.jpg', title: "Rat fetus (263 24A) Rat; section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rat_fetus_(263_24A)_Rat;_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'red-spider-mite-265-01': {
    src: '/specimens/red-spider-mite-265-01.jpg', title: "Red spider mite (265 01) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Red_spider_mite_(265_01)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizome-251-17': {
    src: '/specimens/rhizome-251-17.jpg', title: "Rhizome (251 17) Male fern (Dryopteris filix-mas); cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizome_(251_17)_Male_fern_(Dryopteris_filix-mas);_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizopus-257-21': {
    src: '/specimens/rhizopus-257-21.jpg', title: "Rhizopus (257 21).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizopus_(257_21).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-salivary-gland-254-10': {
    src: '/specimens/human-salivary-gland-254-10.jpg', title: "Salivary gland (254 10) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Salivary_gland_(254_10)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sensory-epithelium-254-08': {
    src: '/specimens/sensory-epithelium-254-08.jpg', title: "Sensory epithelium (254 08).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sensory_epithelium_(254_08).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'skin-with-hair-265-27': {
    src: '/specimens/skin-with-hair-265-27.jpg', title: "Skin with hair (265 27).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Skin_with_hair_(265_27).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mouse-skin-with-hairs-254-00f': {
    src: '/specimens/mouse-skin-with-hairs-254-00f.jpg', title: "Skin with hairs (254 00F) House mouse (Mus musculus); skin with hairs.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Skin_with_hairs_(254_00F)_House_mouse_(Mus_musculus);_skin_with_hairs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sludge-worm-265-31': {
    src: '/specimens/sludge-worm-265-31.jpg', title: "Sludge worm (265 31) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sludge_worm_(265_31)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-small-intestine-265-23': {
    src: '/specimens/human-small-intestine-265-23.jpg', title: "Small intestine (265 23) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Small_intestine_(265_23)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'smooth-muscle-251-08': {
    src: '/specimens/smooth-muscle-251-08.jpg', title: "Smooth muscle (251 08) Smooth muscle.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Smooth_muscle_(251_08)_Smooth_muscle.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-sperm-254-19': {
    src: '/specimens/human-sperm-254-19.jpg', title: "Sperm (254 19) human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperm_(254_19)_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spider-leg-250-08': {
    src: '/specimens/spider-leg-250-08.jpg', title: "Spider leg (250 08) Spider leg (Arachnida).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spider_leg_(250_08)_Spider_leg_(Arachnida).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-254-22': {
    src: '/specimens/spinal-cord-254-22.jpg', title: "Spinal cord (254 22) Mammal; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_22)_Mammal;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spirogyra-248-00': {
    src: '/specimens/spirogyra-248-00.jpg', title: "Spirogyra (248 00) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_(248_00)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spleen-26-2-04': {
    src: '/specimens/spleen-26-2-04.jpg', title: "Spleen (26 2 04) Semi-thick section; embedded in Epon; mouse.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spleen_(26_2_04)_Semi-thick_section;_embedded_in_Epon;_mouse.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'staphylococcus-257-08': {
    src: '/specimens/staphylococcus-257-08.jpg', title: "Staphylococcus (257 08) Staphylococcus (grampositive bacterium).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Staphylococcus_(257_08)_Staphylococcus_(grampositive_bacterium).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'arachnid-spiracle-250-03': {
    src: '/specimens/arachnid-spiracle-250-03.jpg', title: "Stigma of arachnid trachea (250 03) Stigma of arachnid trachea.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stigma_of_arachnid_trachea_(250_03)_Stigma_of_arachnid_trachea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'streptococcus-251-34': {
    src: '/specimens/streptococcus-251-34.jpg', title: "Streptococcus (251 34) grampositive bacterium.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococcus_(251_34)_grampositive_bacterium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'swan-mussel-glochidium-263-21': {
    src: '/specimens/swan-mussel-glochidium-263-21.jpg', title: "Swan mussel (263 21) Glochidium (larva).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Swan_mussel_(263_21)_Glochidium_(larva).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tapeworm-26-2-14': {
    src: '/specimens/tapeworm-26-2-14.jpg', title: "Tapeworm (26 2 14) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(26_2_14)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'testis-254-18': {
    src: '/specimens/testis-254-18.jpg', title: "Testicles (254 18).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(254_18).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thamnidium-257-27': {
    src: '/specimens/thamnidium-257-27.jpg', title: "Thamnidium (257 27).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thamnidium_(257_27).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thrips-265-03': {
    src: '/specimens/thrips-265-03.jpg', title: "Thrips (265 03).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thrips_(265_03).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thymus-265-25': {
    src: '/specimens/thymus-265-25.jpg', title: "Thymus (265 25) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Thymus_(265_25)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tongue-26-2-02': {
    src: '/specimens/tongue-26-2-02.jpg', title: "Tongue (26 2 02) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tongue_(26_2_02)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tooth-248-15': {
    src: '/specimens/tooth-248-15.jpg', title: "Tooth (248 15) Histologic section of tooth.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tooth_(248_15)_Histologic_section_of_tooth.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-fluke-265-18': {
    src: '/specimens/trematode-fluke-265-18.jpg', title: "Trematode (265 18) Dicrocoelium lanceolatum.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trematode_(265_18)_Dicrocoelium_lanceolatum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichinella-in-muscle-265-16': {
    src: '/specimens/trichinella-in-muscle-265-16.jpg', title: "Trichinella spiralis in muscle tissue (265 16) In skeletal (striated) muscle tissue.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichinella_spiralis_in_muscle_tissue_(265_16)_In_skeletal_(striated)_muscle_tissue.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichomonas-251-29': {
    src: '/specimens/trichomonas-251-29.jpg', title: "Trichomonas (251 29) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichomonas_(251_29)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichophyton-mentagrophytes-257-18': {
    src: '/specimens/trichophyton-mentagrophytes-257-18.jpg', title: "Trichophyton mentagrophytes (257 18) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichophyton_mentagrophytes_(257_18)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tritrichomonas-foetus-259-26': {
    src: '/specimens/tritrichomonas-foetus-259-26.jpg', title: "Tritrichomonas foetus (259 26) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tritrichomonas_foetus_(259_26)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trypanosoma-248-09': {
    src: '/specimens/trypanosoma-248-09.jpg', title: "Trypanosoma (248 09) Trypanosoma equiperdum.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trypanosoma_(248_09)_Trypanosoma_equiperdum.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'umbilical-cord-254-20': {
    src: '/specimens/umbilical-cord-254-20.jpg', title: "Umbilical cord (254 20).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Umbilical_cord_(254_20).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stream-water-protists-247-33a': {
    src: '/specimens/stream-water-protists-247-33a.jpg', title: "Unknown protists (247 33A) From a stream water.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Unknown_protists_(247_33A)_From_a_stream_water.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'venule-with-valve-238-10a': {
    src: '/specimens/venule-with-valve-238-10a.jpg', title: "Venule (238 10A) With a vein valve; cross-section; human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Venule_(238_10A)_With_a_vein_valve;_cross-section;_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'verticillium-257-24': {
    src: '/specimens/verticillium-257-24.jpg', title: "Verticillium (257 24).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Verticillium_(257_24).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'vessels-cross-section-248-18': {
    src: '/specimens/vessels-cross-section-248-18.jpg', title: "Vessels (248 18) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vessels_(248_18)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'volvox-250-23': {
    src: '/specimens/volvox-250-23.jpg', title: "Volvox (250 23) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Volvox_(250_23)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'white-worms-265-30': {
    src: '/specimens/white-worms-265-30.jpg', title: "White worms (265 30) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:White_worms_(265_30)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'yeast-257-11': {
    src: '/specimens/yeast-257-11.jpg', title: "Yeast (257 11).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yeast_(257_11).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'aedes-mosquito-257-00k': {
    src: '/specimens/aedes-mosquito-257-00k.jpg', title: "Aedes mosquito (257 00K) With biting lice.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aedes_mosquito_(257_00K)_With_biting_lice.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-251-31': {
    src: '/specimens/airborne-bacteria-251-31.jpg', title: "Bacteria (251 31) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(251_31)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basidiocarp-hymenium-257-35': {
    src: '/specimens/basidiocarp-hymenium-257-35.jpg', title: "Basidiocarp hymenium (257 35) Basidiomycota; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basidiocarp_hymenium_(257_35)_Basidiomycota;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bird-feather-250-01': {
    src: '/specimens/bird-feather-250-01.jpg', title: "Bird feather (250 01).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bird_feather_(250_01).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-251-03': {
    src: '/specimens/blood-smear-251-03.jpg', title: "Blood smear (251 03) Amphibian.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(251_03)_Amphibian.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bone-section-254-02': {
    src: '/specimens/bone-section-254-02.jpg', title: "Bone (254 02) Bird bone cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bone_(254_02)_Bird_bone_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-brain-section-248-13': {
    src: '/specimens/rat-brain-section-248-13.jpg', title: "Brain (248 13) Rat brain.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_(248_13)_Rat_brain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'candida-albicans-251-12': {
    src: '/specimens/candida-albicans-251-12.jpg', title: "Candida albicans (251 12).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(251_12).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'caryopsis-grain-255-32': {
    src: '/specimens/caryopsis-grain-255-32.jpg', title: "Caryopsis (grain) (255 32) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Caryopsis_(grain)_(255_32)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-bean-tick-250-16': {
    src: '/specimens/castor-bean-tick-250-16.jpg', title: "Castor bean tick (250 16) Adult.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castor_bean_tick_(250_16)_Adult.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fetus-section-247-31a': {
    src: '/specimens/cat-fetus-section-247-31a.jpg', title: "Cat fetus (247 31A) Cat fetus section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cat_fetus_(247_31A)_Cat_fetus_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cultured-cells-261-16': {
    src: '/specimens/cultured-cells-261-16.jpg', title: "Cell culture (HeLa cells) (261 16) Cell culture (HeLa cells) - metaphase, prophase.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cell_culture_(HeLa_cells)_(261_16)_Cell_culture_(HeLa_cells)_-_metaphase,_prophase.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-cercaria-259-22': {
    src: '/specimens/trematode-cercaria-259-22.jpg', title: "Cercaria of trematode (259 22).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cercaria_of_trematode_(259_22).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'earthworm-section-265-14': {
    src: '/specimens/earthworm-section-265-14.jpg', title: "Common earthworm (265 14) Cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(265_14)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'house-mosquito-larva-257-00f': {
    src: '/specimens/house-mosquito-larva-257-00f.jpg', title: "Common house mosquito (257 00F) Total preparation; larva.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Common_house_mosquito_(257_00F)_Total_preparation;_larva.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-louse-251-23': {
    src: '/specimens/crab-louse-251-23.jpg', title: "Crab louse (251 23) Female, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_louse_(251_23)_Female,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-248-08': {
    src: '/specimens/cyanobacteria-248-08.jpg', title: "Cyanobacteria (248 08) Mixture; native preparation; green filter.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_(248_08)_Mixture;_native_preparation;_green_filter.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'daphnia-water-flea-250-15': {
    src: '/specimens/daphnia-water-flea-250-15.jpg', title: "Daphnia (250 15) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Daphnia_(250_15)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'escherichia-coli-259-02': {
    src: '/specimens/escherichia-coli-259-02.jpg', title: "Escherichia coli (259 02) Gramnegative rods.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_(259_02)_Gramnegative_rods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'eubacteria-259-00f': {
    src: '/specimens/eubacteria-259-00f.jpg', title: "Eubacteria (259 00F) Micrococcus luteus bacteria.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eubacteria_(259_00F)_Micrococcus_luteus_bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'euglena-947-12': {
    src: '/specimens/euglena-947-12.jpg', title: "Euglena sp (947 12).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Euglena_sp_(947_12).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'fish-scale-250-36': {
    src: '/specimens/fish-scale-250-36.jpg', title: "Fish scale (250 36) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Fish_scale_(250_36)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lily-flower-bud-255-29': {
    src: '/specimens/lily-flower-bud-255-29.jpg', title: "Flower bud (255 29) Cross-section through a flower bud of Lilium martagon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Flower_bud_(255_29)_Cross-section_through_a_flower_bud_of_Lilium_martagon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'foraminifera-265-36': {
    src: '/specimens/foraminifera-265-36.jpg', title: "Foraminifera (265 36) Various.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Foraminifera_(265_36)_Various.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giant-roundworm-ascaris-263-20': {
    src: '/specimens/giant-roundworm-ascaris-263-20.jpg', title: "Giant roundworm (263 20) Cross-section of uterus with eggs.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(263_20)_Cross-section_of_uterus_with_eggs.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'giardia-intestinalis-259-18': {
    src: '/specimens/giardia-intestinalis-259-18.jpg', title: "Giardia intestinalis (259 18).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Giardia_intestinalis_(259_18).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'head-louse-251-27': {
    src: '/specimens/head-louse-251-27.jpg', title: "Head louse (251 27) Adult and egg, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Head_louse_(251_27)_Adult_and_egg,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'heart-muscle-section-265-22': {
    src: '/specimens/heart-muscle-section-265-22.jpg', title: "Heart (265 22) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Heart_(265_22)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-karyotype-248-27': {
    src: '/specimens/human-karyotype-248-27.jpg', title: "Human karyotype (248 27) Human karyotype.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_karyotype_(248_27)_Human_karyotype.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-wing-250-05': {
    src: '/specimens/insect-wing-250-05.jpg', title: "Insect wing (250 05) Housefly (Musca domestica) wing.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_wing_(250_05)_Housefly_(Musca_domestica)_wing.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'kidney-cortex-947-22': {
    src: '/specimens/kidney-cortex-947-22.jpg', title: "Kidney cortex (947 22) Human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kidney_cortex_(947_22)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-259-08': {
    src: '/specimens/lactobacillus-acidophilus-259-08.jpg', title: "Lactobacillus acidophilus (259 08) Lactobacillus acidophilus (D\u00f6derlein bacillus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_acidophilus_(259_08)_Lactobacillus_acidophilus_(D\u00f6derlein_bacillus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine-254-15': {
    src: '/specimens/large-intestine-254-15.jpg', title: "Large intestine (254 15) Human large intestine.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_(254_15)_Human_large_intestine.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-section-255-14': {
    src: '/specimens/leaf-section-255-14.jpg', title: "Leaf (255 14) Leaf semi-thick section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_(255_14)_Leaf_semi-thick_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-stalk-petiole-255-25': {
    src: '/specimens/leaf-stalk-petiole-255-25.jpg', title: "Leaf stalk (255 25) Cross-section Syringa vulgaris.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_stalk_(255_25)_Cross-section_Syringa_vulgaris.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leishmania-tropica-259-20': {
    src: '/specimens/leishmania-tropica-259-20.jpg', title: "Leishmania tropica (259 20) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leishmania_tropica_(259_20)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lymph-node-265-34': {
    src: '/specimens/lymph-node-265-34.jpg', title: "Lymph node (265 34) Mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lymph_node_(265_34)_Mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'meiosis-248-23': {
    src: '/specimens/meiosis-248-23.jpg', title: "Meiosis (248 23).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Meiosis_(248_23).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'metaphase-onion-root-tip-261-05': {
    src: '/specimens/metaphase-onion-root-tip-261-05.jpg', title: "Metaphase (261 05) Pressed; meristem of root; onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase_(261_05)_Pressed;_meristem_of_root;_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'microsporum-gypseum-257-17': {
    src: '/specimens/microsporum-gypseum-257-17.jpg', title: "Microsporum gypseum (257 17) Microculture.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Microsporum_gypseum_(257_17)_Microculture.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-root-tip-251-21': {
    src: '/specimens/mitosis-root-tip-251-21.jpg', title: "Mitosis (251 21) Pressed; root meristem of Vicia faba.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_(251_21)_Pressed;_root_meristem_of_Vicia_faba.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'paramecium-caudatum-250-20': {
    src: '/specimens/paramecium-caudatum-250-20.jpg', title: "Paramecium caudatum (250 20) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Paramecium_caudatum_(250_20)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-needle-251-14': {
    src: '/specimens/pine-needle-251-14.jpg', title: "Pinus nigra needle (251 14) Needle cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(251_14)_Needle_cross_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-placenta-26-2-10': {
    src: '/specimens/human-placenta-26-2-10.jpg', title: "Placenta (26 2 10) Cross-section of human placenta.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(26_2_10)_Cross-section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-epidermis-255-19': {
    src: '/specimens/onion-epidermis-255-19.jpg', title: "Plant epidermis (255 19) Epidermis of onion bulb ; wet.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_epidermis_(255_19)_Epidermis_of_onion_bulb_;_wet.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-251-15': {
    src: '/specimens/leaf-epidermis-251-15.jpg', title: "Plant leaf epidermis (251 15) Upper epidermis of lime tree (Tilia).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_leaf_epidermis_(251_15)_Upper_epidermis_of_lime_tree_(Tilia).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plant-stem-section-248-02': {
    src: '/specimens/plant-stem-section-248-02.jpg', title: "Plant stem (248 02) Aristolochia stem cross-section; visualised by fluorescence.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(248_02)_Aristolochia_stem_cross-section;_visualised_by_fluorescence.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plasmodium-257-34': {
    src: '/specimens/plasmodium-257-34.jpg', title: "Plasmodium (257 34).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_(257_34).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pneumococcus-259-07': {
    src: '/specimens/pneumococcus-259-07.jpg', title: "Pneumococcus (259 07).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pneumococcus_(259_07).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pollen-grains-255-26': {
    src: '/specimens/pollen-grains-255-26.jpg', title: "Pollen grains (255 26) Pine tree.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pollen_grains_(255_26)_Pine_tree.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'polytene-chromosomes-26-2-97': {
    src: '/specimens/polytene-chromosomes-26-2-97.jpg', title: "Polytene chromosomes (26 2 97) Salivary glands of nonbiting midges larvae (Chironomidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polytene_chromosomes_(26_2_97)_Salivary_glands_of_nonbiting_midges_larvae_(Chironomidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'potato-tuber-250-35': {
    src: '/specimens/potato-tuber-250-35.jpg', title: "Potato tuber (250 35) Potato tuber cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Potato_tuber_(250_35)_Potato_tuber_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pythium-257-23': {
    src: '/specimens/pythium-257-23.jpg', title: "Pythium (257 23).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pythium_(257_23).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizome-254-27': {
    src: '/specimens/rhizome-254-27.jpg', title: "Rhizome (254 27) Lily of the Valley (Convallaria majalis).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizome_(254_27)_Lily_of_the_Valley_(Convallaria_majalis).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-sperm-265-33': {
    src: '/specimens/human-sperm-265-33.jpg', title: "Sperm (265 33) human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperm_(265_33)_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-254-23': {
    src: '/specimens/spinal-cord-254-23.jpg', title: "Spinal cord (254 23) Lower end; rabbit (Oryctolagus cuniculus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_23)_Lower_end;_rabbit_(Oryctolagus_cuniculus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spirogyra-250-24': {
    src: '/specimens/spirogyra-250-24.jpg', title: "Spirogyra (250 24) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_(250_24)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spleen-265-19': {
    src: '/specimens/spleen-265-19.jpg', title: "Spleen (265 19) Section; mammal.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spleen_(265_19)_Section;_mammal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'streptococcus-257-32': {
    src: '/specimens/streptococcus-257-32.jpg', title: "Streptococcus (257 32) grampositive bacterium.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococcus_(257_32)_grampositive_bacterium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'swan-mussel-glochidium-263-22': {
    src: '/specimens/swan-mussel-glochidium-263-22.jpg', title: "Swan mussel (263 22) Glochidium (larva).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Swan_mussel_(263_22)_Glochidium_(larva).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tapeworm-265-06': {
    src: '/specimens/tapeworm-265-06.jpg', title: "Tapeworm (265 06) Body segment.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_06)_Body_segment.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'testis-26-2-15': {
    src: '/specimens/testis-26-2-15.jpg', title: "Testicles (26 2 15) Testicles cross-section (mouse).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(26_2_15)_Testicles_cross-section_(mouse).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trematode-fluke-265-32': {
    src: '/specimens/trematode-fluke-265-32.jpg', title: "Trematode (265 32) Eggs in liver.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trematode_(265_32)_Eggs_in_liver.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trichophyton-mentagrophytes-257-19': {
    src: '/specimens/trichophyton-mentagrophytes-257-19.jpg', title: "Trichophyton mentagrophytes (257 19) From a microculture and an infected hair.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trichophyton_mentagrophytes_(257_19)_From_a_microculture_and_an_infected_hair.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tritrichomonas-foetus-259-27': {
    src: '/specimens/tritrichomonas-foetus-259-27.jpg', title: "Tritrichomonas foetus (259 27) Cultured.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tritrichomonas_foetus_(259_27)_Cultured.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trypanosoma-251-30': {
    src: '/specimens/trypanosoma-251-30.jpg', title: "Trypanosoma (251 30).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trypanosoma_(251_30).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'venule-with-valve-238-11a': {
    src: '/specimens/venule-with-valve-238-11a.jpg', title: "Venule (238 11A) With a vein valve; cross-section; human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Venule_(238_11A)_With_a_vein_valve;_cross-section;_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-259-04': {
    src: '/specimens/airborne-bacteria-259-04.jpg', title: "Bacteria (259 04) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(259_04)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-251-04': {
    src: '/specimens/blood-smear-251-04.jpg', title: "Blood smear (251 04) Bird.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(251_04)_Bird.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bone-section-26-2-20': {
    src: '/specimens/bone-section-26-2-20.jpg', title: "Bone (26 2 20) Human bone cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bone_(26_2_20)_Human_bone_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-brain-section-254-25': {
    src: '/specimens/rat-brain-section-254-25.jpg', title: "Brain (254 25) Rat brain.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Brain_(254_25)_Rat_brain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'candida-albicans-257-12': {
    src: '/specimens/candida-albicans-257-12.jpg', title: "Candida albicans (257 12).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Candida_albicans_(257_12).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-bean-tick-265-28': {
    src: '/specimens/castor-bean-tick-265-28.jpg', title: "Castor bean tick (265 28) Total preparation - larva and part of an egg.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Castor_bean_tick_(265_28)_Total_preparation_-_larva_and_part_of_an_egg.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cat-fetus-section-26-2-03': {
    src: '/specimens/cat-fetus-section-26-2-03.jpg', title: "Cat fetus (26 2 03) Cat embryo longitudal section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cat_fetus_(26_2_03)_Cat_embryo_longitudal_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cultured-cells-261-17': {
    src: '/specimens/cultured-cells-261-17.jpg', title: "Cell culture (HeLa cells) (261 17) Cell culture (HeLa cells) - anaphase, metaphase.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cell_culture_(HeLa_cells)_(261_17)_Cell_culture_(HeLa_cells)_-_anaphase,_metaphase.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'crab-louse-251-24': {
    src: '/specimens/crab-louse-251-24.jpg', title: "Crab louse (251 24) Female adult and eggs, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Crab_louse_(251_24)_Female_adult_and_eggs,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cyanobacteria-250-22': {
    src: '/specimens/cyanobacteria-250-22.jpg', title: "Cyanobacteria (250 22) Native preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cyanobacteria_(250_22)_Native_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'escherichia-coli-259-03': {
    src: '/specimens/escherichia-coli-259-03.jpg', title: "Escherichia coli (259 03) Gramnegative rods.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Escherichia_coli_(259_03)_Gramnegative_rods.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'eubacteria-259-01': {
    src: '/specimens/eubacteria-259-01.jpg', title: "Eubacteria (259 01) Micrococcus luteus bacteria.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Eubacteria_(259_01)_Micrococcus_luteus_bacteria.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'head-louse-251-28': {
    src: '/specimens/head-louse-251-28.jpg', title: "Head louse (251 28) Larva and eggs, from a human host.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Head_louse_(251_28)_Larva_and_eggs,_from_a_human_host.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-karyotype-259-28': {
    src: '/specimens/human-karyotype-259-28.jpg', title: "Human karyotype (259 28) Karyotype Human, 46,XY t15-20.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_karyotype_(259_28)_Karyotype_Human,_46,XY_t15-20.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'insect-wing-250-06': {
    src: '/specimens/insect-wing-250-06.jpg', title: "Insect wing (250 06) Honeybee (Apis mellifera) wing.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Insect_wing_(250_06)_Honeybee_(Apis_mellifera)_wing.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-259-09': {
    src: '/specimens/lactobacillus-acidophilus-259-09.jpg', title: "Lactobacillus acidophilus (259 09) Lactobacillus acidophilus (D\u00f6derlein bacillus).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lactobacillus_acidophilus_(259_09)_Lactobacillus_acidophilus_(D\u00f6derlein_bacillus).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine-26-2-09': {
    src: '/specimens/large-intestine-26-2-09.jpg', title: "Large intestine (26 2 09) Mouse; embedded in Epon.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_(26_2_09)_Mouse;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-section-255-21': {
    src: '/specimens/leaf-section-255-21.jpg', title: "Leaf (255 21) Cross-section through a leaf of Iris plant.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_(255_21)_Cross-section_through_a_leaf_of_Iris_plant.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-stalk-petiole-255-34': {
    src: '/specimens/leaf-stalk-petiole-255-34.jpg', title: "Leaf stalk (255 34) Cross-section Nuphar lutea.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Leaf_stalk_(255_34)_Cross-section_Nuphar_lutea.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'meiosis-254-30': {
    src: '/specimens/meiosis-254-30.jpg', title: "Meiosis (254 30).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Meiosis_(254_30).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'metaphase-onion-root-tip-261-06': {
    src: '/specimens/metaphase-onion-root-tip-261-06.jpg', title: "Metaphase (261 06) Pressed; meristem of root; onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Metaphase_(261_06)_Pressed;_meristem_of_root;_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-root-tip-251-22': {
    src: '/specimens/mitosis-root-tip-251-22.jpg', title: "Mitosis (251 22) Pressed; root meristem of onion.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mitosis_(251_22)_Pressed;_root_meristem_of_onion.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-needle-255-23': {
    src: '/specimens/pine-needle-255-23.jpg', title: "Pinus nigra needle (255 23) Needle cross section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(255_23)_Needle_cross_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-placenta-265-26': {
    src: '/specimens/human-placenta-265-26.jpg', title: "Placenta (265 26) Section of human placenta.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Placenta_(265_26)_Section_of_human_placenta.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-epidermis-255-20': {
    src: '/specimens/onion-epidermis-255-20.jpg', title: "Plant epidermis (255 20) Epidermis of onion bulb; dry.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_epidermis_(255_20)_Epidermis_of_onion_bulb;_dry.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-251-16': {
    src: '/specimens/leaf-epidermis-251-16.jpg', title: "Plant leaf epidermis (251 16) Lower epidermis of lime tree (Tilia).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_leaf_epidermis_(251_16)_Lower_epidermis_of_lime_tree_(Tilia).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plant-stem-section-248-19': {
    src: '/specimens/plant-stem-section-248-19.jpg', title: "Plant stem (248 19) Longitudal tangential section - woody stem.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_stem_(248_19)_Longitudal_tangential_section_-_woody_stem.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'plasmodium-259-16': {
    src: '/specimens/plasmodium-259-16.jpg', title: "Plasmodium (259 16).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plasmodium_(259_16).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'polytene-chromosomes-260-02': {
    src: '/specimens/polytene-chromosomes-260-02.jpg', title: "Polytene chromosomes (260 02) Salivary glands of nonbiting midges larvae (Chironomidae).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Polytene_chromosomes_(260_02)_Salivary_glands_of_nonbiting_midges_larvae_(Chironomidae).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rhizome-254-28': {
    src: '/specimens/rhizome-254-28.jpg', title: "Rhizome (254 28) Lily of the Valley (Convallaria majalis).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rhizome_(254_28)_Lily_of_the_Valley_(Convallaria_majalis).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-26-2-16': {
    src: '/specimens/spinal-cord-26-2-16.jpg', title: "Spinal cord (26 2 16) Rat; cross-section.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(26_2_16)_Rat;_cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spirogyra-251-11': {
    src: '/specimens/spirogyra-251-11.jpg', title: "Spirogyra (251 11) Total preparation.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Spirogyra_(251_11)_Total_preparation.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'streptococcus-259-14': {
    src: '/specimens/streptococcus-259-14.jpg', title: "Streptococcus (259 14) grampositive bacterium.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Streptococcus_(259_14)_grampositive_bacterium.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'tapeworm-265-07': {
    src: '/specimens/tapeworm-265-07.jpg', title: "Tapeworm (265 07) Body segment.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_07)_Body_segment.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'testis-265-20': {
    src: '/specimens/testis-265-20.jpg', title: "Testicles (265 20) Cross-section; mouse.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Testicles_(265_20)_Cross-section;_mouse.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'trypanosoma-259-24': {
    src: '/specimens/trypanosoma-259-24.jpg', title: "Trypanosoma (259 24).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Trypanosoma_(259_24).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'venule-with-valve-238-12a': {
    src: '/specimens/venule-with-valve-238-12a.jpg', title: "Venule (238 12A) With a vein valve; cross-section; human.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Venule_(238_12A)_With_a_vein_valve;_cross-section;_human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-259-05': {
    src: '/specimens/airborne-bacteria-259-05.jpg', title: "Bacteria (259 05).jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(259_05).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-254-05': {
    src: '/specimens/blood-smear-254-05.jpg', title: "Blood smear (254 05) Amphibian.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(254_05)_Amphibian.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'airborne-bacteria-26-2-27': {
    src: '/specimens/airborne-bacteria-26-2-27.jpg', title: "Bacteria (26 2 27) Airborne microbes.jpg", author: 'Josef Reischig (archive, shared by heirs)', license: 'CC BY-SA 3.0',
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacteria_(26_2_27)_Airborne_microbes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'yew-leaf-epidermis-and-stomata-10x': {
    src: '/specimens/yew-leaf-epidermis-and-stomata-10x.jpg', title: "05-Stack 75 Yew 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:05-Stack_75_Yew_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'yew-leaf-epidermis-and-stomata-40x': {
    src: '/specimens/yew-leaf-epidermis-and-stomata-40x.jpg', title: "05-Stack 76 Yew 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:05-Stack_76_Yew_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'spinal-cord-stacked-photograph': {
    src: '/specimens/spinal-cord-stacked-photograph.jpg', title: "20180427SpinalCord11stack (26875138687).jpg", author: "MostlyDross from Springfield, VA, USA", license: "CC BY 2.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20180427SpinalCord11stack_(26875138687).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'acinar-cells-of-an-exocrine-gland': {
    src: '/specimens/acinar-cells-of-an-exocrine-gland.jpg', title: "Acinar cells.JPG", author: "Jpogi at English Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Acinar_cells.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'active-mammary-gland': {
    src: '/specimens/active-mammary-gland.jpg', title: "Active mammary gland.jpg", author: "Abdulrazakca", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Active_mammary_gland.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'garlic-mustard-alliaria-petiolata-stalk-longitudinal-section': {
    src: '/specimens/garlic-mustard-alliaria-petiolata-stalk-longitudinal-section.jpg', title: "Alliaria petiolata, stalk, longitudinal section, Etzold green.jpg", author: "User:Micropix", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Alliaria_petiolata,_stalk,_longitudinal_section,_Etzold_green.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'arabidopsis-shoot-apical-meristem-flat': {
    src: '/specimens/arabidopsis-shoot-apical-meristem-flat.jpg', title: "Arabidopsis flat SAM.jpg", author: "Kingfiser", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Arabidopsis_flat_SAM.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'arabidopsis-shoot-apical-meristem-rounded': {
    src: '/specimens/arabidopsis-shoot-apical-meristem-rounded.jpg', title: "Arabidopsis round SAM.jpg", author: "Kingfiser", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Arabidopsis_round_SAM.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-cells-under-the-microscope': {
    src: '/specimens/blood-cells-under-the-microscope.jpg', title: "Blood cells under the microscope 01.jpg", author: "Korinna", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_cells_under_the_microscope_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rat-breast-tissue-normal': {
    src: '/specimens/rat-breast-tissue-normal.jpg', title: "Breast of rat (normal).jpg", author: "Farahamar", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Breast_of_rat_(normal).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-thyroid-gland-capsule': {
    src: '/specimens/human-thyroid-gland-capsule.jpg', title: "Capsule of the Human Thyroid Gland (32534056467).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Capsule_of_the_Human_Thyroid_Gland_(32534056467).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'choroid-plexus-human': {
    src: '/specimens/choroid-plexus-human.jpg', title: "Choroid plexus (human).jpg", author: "Tulemo", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Choroid_plexus_(human).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'circumvallate-papilla': {
    src: '/specimens/circumvallate-papilla.jpg', title: "Circumvallate.jpg", author: "Abdulrazakca", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Circumvallate.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'coleus-stem-tip-longitudinal-section': {
    src: '/specimens/coleus-stem-tip-longitudinal-section.jpg', title: "Coleus stemtip.jpg", author: "Jon Houseman", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Coleus_stemtip.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thyroid-follicles-with-colloid': {
    src: '/specimens/thyroid-follicles-with-colloid.jpg', title: "Colloid Filled Lumens in Human Thyroid Gland (32546734627).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Colloid_Filled_Lumens_in_Human_Thyroid_Gland_(32546734627).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'cuboidal-epithelium': {
    src: '/specimens/cuboidal-epithelium.jpg', title: "Cuboidal Epithelium Lining Intralobular Duct by Phase Contrast (33859250438).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuboidal_Epithelium_Lining_Intralobular_Duct_by_Phase_Contrast_(33859250438).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-cuticle-and-upper-epidermis': {
    src: '/specimens/leaf-cuticle-and-upper-epidermis.jpg', title: "Cuticle overlying upper epidermis in mesophyte leaf (35103215772).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuticle_overlying_upper_epidermis_in_mesophyte_leaf_(35103215772).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-cuticle-and-upper-epidermis-second-field': {
    src: '/specimens/leaf-cuticle-and-upper-epidermis-second-field.jpg', title: "Cuticle overlying upper epidermis of mesophyte leaf (34686901852).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuticle_overlying_upper_epidermis_of_mesophyte_leaf_(34686901852).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'peritoneal-fluid-cells-cytospin': {
    src: '/specimens/peritoneal-fluid-cells-cytospin.jpg', title: "Cytospin slide of peritoneal fluid (Wright Giemsa stain).jpg", author: "SpicyMilkBoy", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cytospin_slide_of_peritoneal_fluid_(Wright_Giemsa_stain).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'decalcified-compact-bone': {
    src: '/specimens/decalcified-compact-bone.jpg', title: "Decalcified Compact Bone slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Decalcified_Compact_Bone_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thyroid-gland-septated-lobes': {
    src: '/specimens/thyroid-gland-septated-lobes.jpg', title: "Deeply Septated Lobes of the Human Thyroid Gland (32546733667).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deeply_Septated_Lobes_of_the_Human_Thyroid_Gland_(32546733667).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'slug-deroceras-laeve-epithelium-400x': {
    src: '/specimens/slug-deroceras-laeve-epithelium-400x.jpg', title: "Deroceras laeve epithelium 400 saturn.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_epithelium_400_saturn.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'slug-deroceras-laeve-muscle-h-e-200x': {
    src: '/specimens/slug-deroceras-laeve-muscle-h-e-200x.jpg', title: "Deroceras laeve muscle 200 HE.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_muscle_200_HE.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'slug-deroceras-laeve-muscle-orcein-400x': {
    src: '/specimens/slug-deroceras-laeve-muscle-orcein-400x.jpg', title: "Deroceras laeve muscle 400 orcein.jpg", author: "Michal Ma\u0148as", license: "CC BY 2.5",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Deroceras_laeve_muscle_400_orcein.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'male-fern-dryopteris-filix-mas-dictyostele': {
    src: '/specimens/male-fern-dryopteris-filix-mas-dictyostele.jpg', title: "Dryopteris filix-mas Dictyostele.jpg", author: "Chernova & Ageeva", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Dryopteris_filix-mas_Dictyostele.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'barnyard-grass-echinochloa-crus-galli-stem': {
    src: '/specimens/barnyard-grass-echinochloa-crus-galli-stem.jpg', title: "Echinochloa crus-galli - stem, longitudinal section.jpg", author: "Pawe\u0142 Jarzembowski", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Echinochloa_crus-galli_-_stem,_longitudinal_section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'thick-skin-epidermis-100x': {
    src: '/specimens/thick-skin-epidermis-100x.jpg', title: "Epidermis histology 2014.jpg", author: "Athikhun.suw", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epidermis_histology_2014.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'simple-squamous-epithelium': {
    src: '/specimens/simple-squamous-epithelium.jpg', title: "Epithelial Tissues Simple Squamous Epithelium (40823230315).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Epithelial_Tissues_Simple_Squamous_Epithelium_(40823230315).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'horsetail-equisetum-apical-cell-longitudinal-section': {
    src: '/specimens/horsetail-equisetum-apical-cell-longitudinal-section.jpg', title: "Equisetum apical cell L.jpg", author: "Jon Houseman", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Equisetum_apical_cell_L.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'female-urethra-transitional-epithelium-40x': {
    src: '/specimens/female-urethra-transitional-epithelium-40x.jpg', title: "Female urethra histology.jpg", author: "Athikhun.suw", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Female_urethra_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'globus-pallidus-and-putamen': {
    src: '/specimens/globus-pallidus-and-putamen.jpg', title: "Globus pallidus and putamen - very low mag.jpg", author: "Nephron", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Globus_pallidus_and_putamen_-_very_low_mag.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'renal-glomerulus': {
    src: '/specimens/renal-glomerulus.jpg', title: "Glomerulus.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Glomerulus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-two-needle-leaf-phloem': {
    src: '/specimens/pine-two-needle-leaf-phloem.jpg', title: "Gymnosperm Leaves Phloem Two Needle Pinus (36363883221).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gymnosperm_Leaves_Phloem_Two_Needle_Pinus_(36363883221).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-two-needle-leaf-xylem': {
    src: '/specimens/pine-two-needle-leaf-xylem.jpg', title: "Gymnosperm Leaves Xylem in Two Needle Pinus (36501130325).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gymnosperm_Leaves_Xylem_in_Two_Needle_Pinus_(36501130325).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hale-s-colloidal-iron-stain': {
    src: '/specimens/hale-s-colloidal-iron-stain.jpg', title: "Hales colloidal iron staining.jpg", author: "Mark ong", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hales_colloidal_iron_staining.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'castor-ricinus-stem-xylem-vessels': {
    src: '/specimens/castor-ricinus-stem-xylem-vessels.jpg', title: "Herbaceoaus Dicot Stem Xylem Vessels in Older Richinus (35474133884).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbaceoaus_Dicot_Stem_Xylem_Vessels_in_Older_Richinus_(35474133884).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pumpkin-cucurbita-stem-cambium-and-phloem': {
    src: '/specimens/pumpkin-cucurbita-stem-cambium-and-phloem.jpg', title: "Herbaceous Dicot Stem Cambium and Phloem in Cucurbita (37411755521).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Herbaceous_Dicot_Stem_Cambium_and_Phloem_in_Cucurbita_(37411755521).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'liver-histology-slide': {
    src: '/specimens/liver-histology-slide.jpg', title: "Histologi Hepar.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_Hepar.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'muscle-histology-slide': {
    src: '/specimens/muscle-histology-slide.jpg', title: "Histologi Otot.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_Otot.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gland-histology-slide': {
    src: '/specimens/gland-histology-slide.jpg', title: "Histologi kelenjar.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_kelenjar.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lung-histology-slide': {
    src: '/specimens/lung-histology-slide.jpg', title: "Histologi paru-paru.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_paru-paru.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'digestive-system-histology-slide': {
    src: '/specimens/digestive-system-histology-slide.jpg', title: "Histologi sistem pencernaan.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histologi_sistem_pencernaan.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mesothelial-lining-of-a-hernia-sac': {
    src: '/specimens/mesothelial-lining-of-a-hernia-sac.jpg', title: "Histology of the mesothelial lining of a hernia sac.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Histology_of_the_mesothelial_lining_of_a_hernia_sac.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-ovarian-follicle': {
    src: '/specimens/human-ovarian-follicle.jpg', title: "Human Ovarian Follicle with Growing oocyte seen through Compound Microscope at 400x Magnification.jpg", author: "C.Abare8624", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_Ovarian_Follicle_with_Growing_oocyte_seen_through_Compound_Microscope_at_400x_Magnification.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-blood': {
    src: '/specimens/human-blood.jpg', title: "Human blood.jpg", author: "Olena Hohulia, \u041a\u0443\u0446\u0438\u043a \u0412\u043b\u0430\u0434\u0430, \u041a\u0440\u0435\u043c\u0456\u043d\u044c \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u0430, Ivanchik Marya", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_blood.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-tonsil': {
    src: '/specimens/human-tonsil.jpg', title: "Human tonsils (26 2 05) Cross-section; embedded in Epon.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Human_tonsils_(26_2_05)_Cross-section;_embedded_in_Epon.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-skin-with-sweat-glands-100x': {
    src: '/specimens/human-skin-with-sweat-glands-100x.jpg', title: "Humanskinsweatglands100x1.jpg", author: "John Alan Elson", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Humanskinsweatglands100x1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-skin-with-sweat-glands-400x': {
    src: '/specimens/human-skin-with-sweat-glands-400x.jpg', title: "Humanskinsweatglands400x6.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Humanskinsweatglands400x6.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-skin-with-sweat-glands-40x': {
    src: '/specimens/human-skin-with-sweat-glands-40x.jpg', title: "Humanskinsweatglands40x8.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Humanskinsweatglands40x8.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hydra-cross-section-100x': {
    src: '/specimens/hydra-cross-section-100x.jpg', title: "Hydracs100x.jpg", author: "John Alan Elson", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydracs100x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hydra-cross-section-40x': {
    src: '/specimens/hydra-cross-section-40x.jpg', title: "Hydracs40x.jpg", author: "John Alan Elson", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hydracs40x.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'hypersegmented-neutrophil': {
    src: '/specimens/hypersegmented-neutrophil.jpg', title: "Hypersegmented PMN.JPG", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hypersegmented_PMN.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mouse-hypothalamus-immunohistochemistry': {
    src: '/specimens/mouse-hypothalamus-immunohistochemistry.jpg', title: "Hypothalamus of a mouse tissue stained by ABC-Immunohistochemistry.jpg", author: "zabbn", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hypothalamus_of_a_mouse_tissue_stained_by_ABC-Immunohistochemistry.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ileum-with-peyer-patch-azan-stain': {
    src: '/specimens/ileum-with-peyer-patch-azan-stain.jpg', title: "Ileon-Payer-AZAN.jpg", author: "J3D3", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ileon-Payer-AZAN.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'kidney-cortex': {
    src: '/specimens/kidney-cortex.jpg', title: "Kidney-Cortex.JPG", author: "Jpogi at English Wikipedia", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kidney-Cortex.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-artery': {
    src: '/specimens/large-artery.jpg', title: "Large artery.jpg", author: "Pottella kavyasree", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_artery.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-intestine': {
    src: '/specimens/large-intestine.jpg', title: "Large intestine histology.jpg", author: "Juan Carlos Fonseca Mata", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_intestine_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-vein': {
    src: '/specimens/large-vein.jpg', title: "Large vein histology.jpg", author: "Pottella kavyasree", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_vein_histology.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'large-vein-second-field': {
    src: '/specimens/large-vein-second-field.jpg', title: "Large vein.jpg", author: "Netha Hussain", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Large_vein.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'medium-sized-artery': {
    src: '/specimens/medium-sized-artery.jpg', title: "Medium sized artery.jpg", author: "Pottella kavyasree", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Medium_sized_artery.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'megakaryocyte-bone-marrow': {
    src: '/specimens/megakaryocyte-bone-marrow.jpg', title: "Megakaryocyte.jpg", author: "Simon Caulton", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Megakaryocyte.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mixed-salivary-gland': {
    src: '/specimens/mixed-salivary-gland.jpg', title: "Mixed salivary gland.jpg", author: "Sushma sri. mande", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Mixed_salivary_gland.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'nasal-mucosa-cross-section': {
    src: '/specimens/nasal-mucosa-cross-section.jpg', title: "Nasal mucosa (26 2 17) Cross-section.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nasal_mucosa_(26_2_17)_Cross-section.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'nissl-bodies-in-neurons': {
    src: '/specimens/nissl-bodies-in-neurons.jpg', title: "Nissl bodies in neurons of the spinal cord.jpg", author: "Tulemo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nissl_bodies_in_neurons_of_the_spinal_cord.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'normal-breast-acinus': {
    src: '/specimens/normal-breast-acinus.jpg', title: "Normal breast acinus.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Normal_breast_acinus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'oesophagus': {
    src: '/specimens/oesophagus.jpg', title: "Oesophagus.jpg", author: "\u0414\u0438\u043c\u0438\u0442\u044a\u0440 \u041c\u0438\u0442\u0435\u0432", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Oesophagus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'muscle-transverse-section': {
    src: '/specimens/muscle-transverse-section.jpg', title: "Otot transversal.jpg", author: "Nadvin", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Otot_transversal.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ovary': {
    src: '/specimens/ovary.jpg', title: "Ovary slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ovary_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'pine-xylem-ducts': {
    src: '/specimens/pine-xylem-ducts.jpg', title: "Pine tree xylem ducts.jpg", author: "thuggyec", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Pine_tree_xylem_ducts.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'monocot-stem': {
    src: '/specimens/monocot-stem.jpg', title: "Plant Specimen - Monocot Stem - Metaxylem and Protoxylem.jpg", author: "Soumyajits42", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Plant_Specimen_-_Monocot_Stem_-_Metaxylem_and_Protoxylem.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'uterus-proliferative-phase': {
    src: '/specimens/uterus-proliferative-phase.jpg', title: "Prolifrative Uterus slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Prolifrative_Uterus_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'rubricyte-nucleated-red-cell-precursor': {
    src: '/specimens/rubricyte-nucleated-red-cell-precursor.jpg', title: "Rubricyte.jpg", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Rubricyte.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'butcher-s-broom-ruscus-hypophyllum-stem-cross-section': {
    src: '/specimens/butcher-s-broom-ruscus-hypophyllum-stem-cross-section.jpg', title: "Ruscus hypophyllum - cross section of phylloclade.jpg", author: "TCdeOLiveira", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ruscus_hypophyllum_-_cross_section_of_phylloclade.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ruscus-hypophyllum-root-cross-section': {
    src: '/specimens/ruscus-hypophyllum-root-cross-section.jpg', title: "Ruscus hypophyllum root - cross section detail.jpg", author: "TCdeOLiveira", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ruscus_hypophyllum_root_-_cross_section_detail.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'ruscus-hypophyllum-root-cross-section-second-field': {
    src: '/specimens/ruscus-hypophyllum-root-cross-section-second-field.jpg', title: "Ruscus hypophyllum root - cross section surface detail.jpg", author: "TCdeOLiveira", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Ruscus_hypophyllum_root_-_cross_section_surface_detail.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-smear-40x': {
    src: '/specimens/blood-smear-40x.jpg', title: "SangPouleMicroscopeX40.jpg", author: "Patbio", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:SangPouleMicroscopeX40.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'seminal-vesicle': {
    src: '/specimens/seminal-vesicle.jpg', title: "Seminal vesicle slide.jpg", author: "\u0639\u0644\u0627\u0621", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Seminal_vesicle_slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'bud-stem-tip-longitudinal-section': {
    src: '/specimens/bud-stem-tip-longitudinal-section.jpg', title: "SeminalBudStemTipls40x2.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:SeminalBudStemTipls40x2.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'sperm-in-a-giemsa-stained-smear': {
    src: '/specimens/sperm-in-a-giemsa-stained-smear.jpg', title: "Sperms in Giemsa Stained smear of Semen.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sperms_in_Giemsa_Stained_smear_of_Semen.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stem-collenchyma-100x': {
    src: '/specimens/stem-collenchyma-100x.jpg', title: "Stem-Collenchyma100x6.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stem-Collenchyma100x6.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stem-collenchyma-400x': {
    src: '/specimens/stem-collenchyma-400x.jpg', title: "Stem-Collenchyma400x5.jpg", author: "John Alan Elson", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stem-Collenchyma400x5.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stomach': {
    src: '/specimens/stomach.jpg', title: "Stomaco.JPG", author: "Etinterra", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Stomaco.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'water-lily-nymphaea-stem-xylem-elements': {
    src: '/specimens/water-lily-nymphaea-stem-xylem-elements.jpg', title: "Submerged Dicot Stem Xylem Elements in Nymphaea (35487609682).jpg", author: "Berkshire Community College  Bioscience Image Library", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Submerged_Dicot_Stem_Xylem_Elements_in_Nymphaea_(35487609682).jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-ligilactobacillus-1000x': {
    src: '/specimens/gram-stain-ligilactobacillus-1000x.jpg', title: "1000x Magnification of Gram Stain of Ligilactobacillus animalis Under Brightfield Microscopy.jpg", author: "Varun Punnam", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:1000x_Magnification_of_Gram_Stain_of_Ligilactobacillus_animalis_Under_Brightfield_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-staphylococcus-xylosus-1000x': {
    src: '/specimens/gram-stain-staphylococcus-xylosus-1000x.jpg', title: "1000x Magnification of Gram Stain of Staphylococcus xylosus Under Brightfield Microscopy.jpg", author: "Varun Punnam", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:1000x_Magnification_of_Gram_Stain_of_Staphylococcus_xylosus_Under_Brightfield_Microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-alcaligenes-faecalis': {
    src: '/specimens/gram-stain-alcaligenes-faecalis.jpg', title: "11G0002 lores.jpg", author: "CDC/ Dr. W.A. Clark", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:11G0002_lores.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'three-basophil-granulocytes': {
    src: '/specimens/three-basophil-granulocytes.jpg', title: "20100313 005313 BasophilGranulocytes.jpg", author: "Bob Blaylock (talk)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20100313_005313_BasophilGranulocytes.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'staphylococcus-gram-stain-with-scale-ticks': {
    src: '/specimens/staphylococcus-gram-stain-with-scale-ticks.jpg', title: "20101017 231210 Staphylococcus.jpg", author: "Bob Blaylock", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20101017_231210_Staphylococcus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'lactobacillus-acidophilus-gram-stain': {
    src: '/specimens/lactobacillus-acidophilus-gram-stain.jpg', title: "20101212 205549 LactobacillusAcidophilus.jpg", author: "Bob Blaylock", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:20101212_205549_LactobacillusAcidophilus.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-aerococcus-urinae-gram-positive-cocci': {
    src: '/specimens/gram-stain-aerococcus-urinae-gram-positive-cocci.jpg', title: "Aerococcus urinae - microscopy.jpg", author: "Mikael H\u00e4ggstr\u00f6m, M.D.", license: "CC0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aerococcus_urinae_-_microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-aeromonas-veronii-gram-negative-rods': {
    src: '/specimens/gram-stain-aeromonas-veronii-gram-negative-rods.jpg', title: "Aeromonas veronii biovar sobria Gram Stain on Microscope Slide.jpg", author: "B. Domangue", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Aeromonas_veronii_biovar_sobria_Gram_Stain_on_Microscope_Slide.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'onion-allium-cepa-root-tip-longitudinal-section-differentiation-zone': {
    src: '/specimens/onion-allium-cepa-root-tip-longitudinal-section-differentiation-zone.jpg', title: "Allium-Differenzierung02-DM100x HF ba1.jpg", author: "Dr. phil.nat Thomas Geier, Fachgebiet Botanik der Forschungsanstalt Geisenheim.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Allium-Differenzierung02-DM100x_HF_ba1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'mitosis-in-onion-root-meristem-anaphase': {
    src: '/specimens/mitosis-in-onion-root-meristem-anaphase.jpg', title: "Anafase Mitosis Cebolla.jpg", author: "Viascos", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anafase_Mitosis_Cebolla.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'anaphase-of-plant-cell-mitosis': {
    src: '/specimens/anaphase-of-plant-cell-mitosis.jpg', title: "Anaphase of plant cell mitosis.jpg", author: "\u0414\u0430\u0432\u0438\u0434 \u0410\u043d\u0434\u0440\u043e\u043d\u043e\u0432", license: "CC BY 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Anaphase_of_plant_cell_mitosis.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacillus-anthracis': {
    src: '/specimens/gram-stain-bacillus-anthracis.jpg', title: "Bacillus anthracis Gram.jpg", author: "Photo Credit:", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_anthracis_Gram.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacillus-coagulans': {
    src: '/specimens/gram-stain-bacillus-coagulans.jpg', title: "Bacillus coagulans 01.jpg", author: "Dr. William A. Clark", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_coagulans_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacillus-subtilis': {
    src: '/specimens/gram-stain-bacillus-subtilis.jpg', title: "Bacillus subtilis Gram stain.jpg", author: "Riraq25", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bacillus_subtilis_Gram_stain.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'gram-stain-bacteroides-fragilis': {
    src: '/specimens/gram-stain-bacteroides-fragilis.jpg', title: "BacteroidesFragilis Gram.jpg", author: "Content Providers(s): CDC/Dr. V.R. Dowell, Jr.", license: "Public domain",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:BacteroidesFragilis_Gram.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'band-neutrophil-in-a-wright-stained-blood-smear': {
    src: '/specimens/band-neutrophil-in-a-wright-stained-blood-smear.jpg', title: "Band form neutrophil in Wright stained PBS microscopy.jpg", author: "Ajay Kumar Chaurasiya", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Band_form_neutrophil_in_Wright_stained_PBS_microscopy.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'band-neutrophil-in-a-blood-smear-40x': {
    src: '/specimens/band-neutrophil-in-a-blood-smear-40x.jpg', title: "Band neutrophil.JPG", author: "Bobjgalindo", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Band_neutrophil.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'moss-barbula-unguiculata-leaf-cells-400x': {
    src: '/specimens/moss-barbula-unguiculata-leaf-cells-400x.jpg', title: "Barbula unguiculata lamina.jpeg", author: "Kristian Peters -- Fabelfroh 13:26, 29 December 2006 (UTC)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Barbula_unguiculata_lamina.jpeg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'moss-bartramia-ithyphylla-leaf-sheath-125x': {
    src: '/specimens/moss-bartramia-ithyphylla-leaf-sheath-125x.jpg', title: "Bartramia ithyphylla blattscheide.jpeg", author: "Kristian Peters -- Fabelfroh 13:24, 23 September 2007 (UTC)", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bartramia_ithyphylla_blattscheide.jpeg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'stained-plant-section-xylem-with-secondary-thickening': {
    src: '/specimens/stained-plant-section-xylem-with-secondary-thickening.jpg', title: "Barwiony preparat ro\u015blinny.jpg", author: "Figafiga888", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Barwiony_preparat_ro\u015blinny.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'basophil-in-blood-giemsa-stain': {
    src: '/specimens/basophil-in-blood-giemsa-stain.jpg', title: "Basophil in blood.jpg", author: "Animalculist", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Basophil_in_blood.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'binucleated-neutrophil-in-a-blood-smear': {
    src: '/specimens/binucleated-neutrophil-in-a-blood-smear.jpg', title: "Binucleated neutrophil smear 2009-11-16.JPG", author: "Paulo Henrique Orlandi Mourao", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Binucleated_neutrophil_smear_2009-11-16.JPG",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'human-blood-smear': {
    src: '/specimens/human-blood-smear.jpg', title: "Blood smear (265 21) Human.jpg", author: "Doc. RNDr. Josef Reischig, CSc.", license: "CC BY-SA 3.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood_smear_(265_21)_Human.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'blood-erythrocytes-and-platelets-1': {
    src: '/specimens/blood-erythrocytes-and-platelets-1.jpg', title: "Blood1.jpg", author: "Echinaceapallida", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Blood1.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-equisetum-arvense-horsetail': {
    src: '/specimens/leaf-epidermis-and-stomata-print-equisetum-arvense-horsetail.jpg', title: "01-Stack 201 Equisetum 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:01-Stack_201_Equisetum_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-dryopteris-sp-fern': {
    src: '/specimens/leaf-epidermis-and-stomata-print-dryopteris-sp-fern.jpg', title: "02-Stack 174 Fern 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:02-Stack_174_Fern_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-ginkgo-biloba': {
    src: '/specimens/leaf-epidermis-and-stomata-print-ginkgo-biloba.jpg', title: "03-Stack 175 Ginkgo 10x obj leaf print 01.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:03-Stack_175_Ginkgo_10x_obj_leaf_print_01.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-araucaria-araucana': {
    src: '/specimens/leaf-epidermis-and-stomata-print-araucaria-araucana.jpg', title: "04-Stack 101 Monkeypuzzle 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:04-Stack_101_Monkeypuzzle_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-picea-abies': {
    src: '/specimens/leaf-epidermis-and-stomata-print-picea-abies.jpg', title: "07-Stack 98 Norway spruce 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:07-Stack_98_Norway_spruce_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-hordeum-murinum': {
    src: '/specimens/leaf-epidermis-and-stomata-print-hordeum-murinum.jpg', title: "09-Stack 28 Wall Barley 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:09-Stack_28_Wall_Barley_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-triticum-aestivum': {
    src: '/specimens/leaf-epidermis-and-stomata-print-triticum-aestivum.jpg', title: "10-Stack 31 Wheat 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:10-Stack_31_Wheat_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-zea-mays': {
    src: '/specimens/leaf-epidermis-and-stomata-print-zea-mays.jpg', title: "13-Stack 199 Maize 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:13-Stack_199_Maize_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-ananas-comosus': {
    src: '/specimens/leaf-epidermis-and-stomata-print-ananas-comosus.jpg', title: "14-Stack 133 Pineapple 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:14-Stack_133_Pineapple_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-iris-sp': {
    src: '/specimens/leaf-epidermis-and-stomata-print-iris-sp.jpg', title: "15-Stack 01 Iris 10x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:15-Stack_01_Iris_10x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-zantedeschia-aethiopica': {
    src: '/specimens/leaf-epidermis-and-stomata-print-zantedeschia-aethiopica.jpg', title: "15-Stack 104 Arum lily 40x obj leaf print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:15-Stack_104_Arum_lily_40x_obj_leaf_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-holly-ilex-aquifolium': {
    src: '/specimens/leaf-epidermis-and-stomata-print-holly-ilex-aquifolium.jpg', title: "151 Holly Ilex aquifolium LEAF print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:151_Holly_Ilex_aquifolium_LEAF_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-brassica-oleracea-green-cabbage': {
    src: '/specimens/leaf-epidermis-and-stomata-print-brassica-oleracea-green-cabbage.jpg', title: "158 Brassica oleracea Green Cabbage LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:158_Brassica_oleracea_Green_Cabbage_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-eucalyptus-gunni-lower-side': {
    src: '/specimens/leaf-epidermis-and-stomata-print-eucalyptus-gunni-lower-side.jpg', title: "166 Eucalyptus gunni lower side LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:166_Eucalyptus_gunni_lower_side_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-ricinus-communis-castor-oil': {
    src: '/specimens/leaf-epidermis-and-stomata-print-ricinus-communis-castor-oil.jpg', title: "167 Ricinus communis Castor oil LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:167_Ricinus_communis_Castor_oil_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
  'leaf-epidermis-and-stomata-print-allium-cepa-spring-onion-outer': {
    src: '/specimens/leaf-epidermis-and-stomata-print-allium-cepa-spring-onion-outer.jpg', title: "169 Allium cepa Spring Onion outer LEAF epidermis print.jpg", author: "ChrisInMilton", license: "CC BY-SA 4.0",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:169_Allium_cepa_Spring_Onion_outer_LEAF_epidermis_print.jpg",
    adaptation: 'Downscaled to 1000 px wide; not cropped.',
  },
};
