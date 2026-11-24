export type Bilingual = { en: string; ar: string };
export type DepartmentId = 'hematology' | 'histology' | 'microbiology' | 'botany' | 'aquatic-life' | 'zoology';
export type SpecimenKind = 'blood' | 'onion' | 'yeast' | 'leaf' | 'cheek' | 'muscle' | 'bacteria' | 'pond' | 'stoma' | 'root-tip' | 'pollen' | 'paramecium' | 'euglena' | 'diatom' | 'spirogyra' | 'fern' | 'daphnia' | 'hydra' | 'bone' | 'cartilage' | 'cardiac-muscle' | 'amoeba' | 'rotifer' | 'hyaline-cartilage' | 'adipose' | 'smooth-muscle' | 'lung' | 'kidney' | 'pine-needle' | 'anther' | 'blood-sickle' | 'blood-target' | 'blood-eosinophil' | 'reticulocyte' | 'malaria' | 'plant-section' | 'zoology-section' | 'tissue-section';

export type ScientificReference = {
  id: string;
  title: string;
  provider: string;
  url: string;
  supports: string;
};

export type ScientificSpecimen = {
  id: string;
  department: DepartmentId;
  kind: SpecimenKind;
  title: Bilingual;
  subtitle: Bilingual;
  description: Bilingual;
  facts: Bilingual[];
  references: ScientificReference[];
};

export const references = {
  bloodSmear: [
    {
      id: 'yale-blood-smears',
      title: 'Blood Smears Lab — Reading',
      provider: 'Yale Team-Based Learning · medical-cell teaching resource',
      url: 'https://medcell.org/tbl/blood_smears/reading.php',
      supports: 'Normal blood smear appearance for erythrocytes, platelets, neutrophils, lymphocytes, monocytes, eosinophils, and basophils; erythrocyte and platelet size ranges.',
    },
    {
      id: 'peripheral-blood-film-review',
      title: 'Peripheral Blood Film - A Review',
      provider: 'Annals of Ibadan Postgraduate Medicine · peer-reviewed review, PubMed Central',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4415389/',
      supports: 'Normal erythrocyte disc shape, central pallor and diameter; and leukocyte morphology in stained peripheral blood films.',
    },
  ],
  sickleCell: [
    {
      id: 'nhlbi-sickle-cell-causes',
      title: 'Sickle Cell Disease: Causes and Risk Factors',
      provider: 'National Heart, Lung, and Blood Institute · NIH',
      url: 'https://www.nhlbi.nih.gov/health/sickle-cell-disease/causes',
      supports: 'Hemoglobin S can form rigid strands that change red-cell shape into a crescent or sickle form.',
    },
  ],
  targetCells: [
    {
      id: 'ncbi-peripheral-blood-smear',
      title: 'Peripheral Blood Smear',
      provider: 'Clinical Methods · NCBI Bookshelf',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK263/',
      supports: 'Target cells have a central hemoglobin area, a surrounding pale zone, and a hemoglobin rim near the membrane.',
    },
  ],
  malariaSmear: [
    {
      id: 'cdc-dpdx-malaria',
      title: 'DPDx: Malaria',
      provider: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/dpdx/malaria/index.html',
      supports: 'Giemsa, Wright, and Wright-Giemsa stains can show Plasmodium in thick and thin blood films; the page explains microscopy findings.',
    },
  ],
  reticulocyte: [
    {
      id: 'ncbi-reticulocytes-histology',
      title: 'Histology, Reticulocytes',
      provider: 'StatPearls · NCBI Bookshelf',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542172/',
      supports: 'Supravital new methylene blue or brilliant cresyl blue stains bind residual RNA and reveal reticular material in reticulocytes.',
    },
  ],
  onion: [
    {
      id: 'iastate-plant-lab',
      title: 'Plant Cells and Tissues – Biology Laboratory Manual',
      provider: 'Iowa State University Pressbooks',
      url: 'https://iastate.pressbooks.pub/isudp-2025-205/chapter/plant-cells-and-tissues/',
      supports: 'Cell wall, central vacuole, plant-cell background, and structures identified in the red-onion epidermal-peel lab.',
    },
    {
      id: 'onion-epidermis-plasmolysis',
      title: 'Vesicle formation in the membrane of onion cells (Allium cepa L.) during plasmolysis',
      provider: 'Plant Cell Reports · peer-reviewed article, PubMed Central',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2778400/',
      supports: 'Onion inner bulb epidermis is a single layer of thin-walled cells that can be peeled and observed microscopically.',
    },
    {
      id: 'lumen-onion-cells',
      title: 'Cells | Biology I Laboratory Manual',
      provider: 'Tidewater Community College · Lumen Learning',
      url: 'https://courses.lumenlearning.com/biolabs1/chapter/cells/',
      supports: 'Iodine-prepared onion wet mounts and their teaching labels; staining improves contrast, while not all membranes are resolved with routine light microscopy.',
    },
  ],
  yeast: [
    {
      id: 'yeast-genetics-primer',
      title: 'Budding Yeast for Budding Geneticists: A Primer on the Saccharomyces cerevisiae Model System',
      provider: 'Genetics · peer-reviewed article, PubMed Central',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4012490/',
      supports: 'S. cerevisiae as a single-celled eukaryotic model, division by budding, approximate unbudded cell scale, and laboratory use.',
    },
    {
      id: 'yeast-cell-morphology',
      title: 'The cell morphological diversity of Saccharomycotina yeasts',
      provider: 'FEMS Yeast Research · peer-reviewed review, PubMed Central',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10804222/',
      supports: 'S. cerevisiae cells can be spherical or ovoid and exhibit size/morphology variation.',
    },
    {
      id: 'asm-teaching-biosafety',
      title: 'Biosafety Guidelines for Handling Microorganisms in the Teaching Laboratory: Development and Rationale',
      provider: 'Journal of Microbiology & Biology Education · American Society for Microbiology',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3706168/',
      supports: 'Cautious teaching-lab biosafety framing and risk-minimizing practices; avoid assuming every strain or culture source is safe.',
    },
  ],
  leaf: [
    {
      id: 'libretexts-leaf',
      title: '3.4.2: Internal Leaf Structure',
      provider: 'Botany · LibreTexts',
      url: 'https://bio.libretexts.org/Bookshelves/Botany/Botany_%28Ha_Morrow_and_Algiers%29/03%3A_Plant_Structure/03.04%3A_Leaves/3.4.02%3A_Internal_Leaf_Structure',
      supports: 'Generalized leaf tissue organization, cuticle/epidermis, mesophyll layers, vascular bundles, and species/habitat variation.',
    },
    {
      id: 'umn-leaf-anatomy',
      title: '5.1 Inside Leaves',
      provider: 'University of Minnesota Libraries Publishing · The Science of Plants',
      url: 'https://open.lib.umn.edu/horticulture/chapter/5-1-inside-leaves/',
      supports: 'Cuticle and water-loss reduction; palisade and spongy mesophyll; guard cells and stomata; xylem and phloem functions.',
    },
    {
      id: 'openstax-leaves',
      title: '23.4 Leaves - Biology for AP® Courses',
      provider: 'OpenStax · Rice University',
      url: 'https://openstax.org/books/biology-ap-courses/pages/23-4-leaves',
      supports: 'Typical dicot leaf organization and notes that leaf anatomy varies with species and adaptations.',
    },
  ],
  heart: [
    {
      id: 'nih-heart-flow',
      title: 'How the Heart Works: How Blood Flows through the Heart',
      provider: 'National Heart, Lung, and Blood Institute · NIH',
      url: 'https://www.nhlbi.nih.gov/health/heart/blood-flow',
      supports: 'Standard adult blood-flow sequence through chambers, valves, lungs, great vessels, and body; valve locations and one-way flow.',
    },
    {
      id: 'nih-heart-anatomy',
      title: 'How the Heart Works: What the Heart Looks Like',
      provider: 'National Heart, Lung, and Blood Institute · NIH',
      url: 'https://www.nhlbi.nih.gov/health/heart/anatomy',
      supports: 'The four chambers and roles of atria and ventricles; separation between heart sides.',
    },
    {
      id: 'ucsf-heart',
      title: 'How the Heart Works',
      provider: 'University of California San Francisco · Department of Surgery',
      url: 'https://surgery.ucsf.edu/condition/how-heart-works',
      supports: 'Blood-flow direction, pulmonary arteries and veins, aorta, and locations/functions of the four valves.',
    },
  ],
  animalCell: [
    {
      id: 'openstax-eukaryotic-cells',
      title: '4.3 Eukaryotic Cells',
      provider: 'OpenStax · Rice University, Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells',
      supports: 'Plasma membrane, nucleus/nucleolus, ribosomes, mitochondria, lysosomes, and animal/plant-cell distinctions.',
    },
    {
      id: 'openstax-cell-organelles',
      title: '3.2 The Cytoplasm and Cellular Organelles',
      provider: 'OpenStax · Rice University, Anatomy and Physiology 2e',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/3-2-the-cytoplasm-and-cellular-organelles',
      supports: 'Rough/smooth ER, Golgi apparatus, lysosomes, and mitochondrial respiration/ATP in introductory cell biology.',
    },
  ],
  cheek: [
    {
      id: 'cornell-cheek-cells',
      title: 'Human Cheek Cell Station',
      provider: 'Cornell Center for Materials Research · teaching lab',
      url: 'https://www.chess.cornell.edu/sites/default/files/inline-files/Human-Cheek-Cell-Station.pdf',
      supports: 'A stained cheek-cell wet mount and identification of the cell membrane, nucleus, and cytoplasm.',
    },
    {
      id: 'osu-cheek-microscopy',
      title: 'Biology Microscopy: Organelles',
      provider: 'Ohio State University at Lima',
      url: 'https://lima.osu.edu/biology-microscopy/organelles',
      supports: 'A stained human cheek cell under microscopy and visibility of its oval nucleus.',
    },
  ],
  muscle: [
    {
      id: 'openstax-muscle-tissue',
      title: 'Muscle Tissue and Motion',
      provider: 'OpenStax · Anatomy and Physiology',
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/4-4-muscle-tissue-and-motion',
      supports: 'Skeletal muscle fibers are long, striated, and multinucleated, with nuclei near the cell periphery.',
    },
  ],
  bacteria: [
    {
      id: 'ncbi-bacterial-morphology',
      title: 'Taxonomy, Physiology, and Ecology of Aquatic Microorganisms',
      provider: 'NCBI Bookshelf · microbiology reference',
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7120757/',
      supports: 'Common bacterial shapes and arrangements, including cocci and rods in pairs, chains, or clusters.',
    },
  ],
  pond: [
    {
      id: 'hcfl-pond-water-lab',
      title: 'Lab 5: Microscopy and Cells',
      provider: 'Hillsborough Community College · Biology I lab manual',
      url: 'https://pressbooks.hcfl.edu/bio1ss/chapter/chapter-1/',
      supports: 'A pond-water slide can contain algae, microorganisms, and suspended material; observations vary by sample.',
    },
    {
      id: 'rice-pond-cultures',
      title: 'Pond Cultures of Microscopic Invertebrates',
      provider: 'Rice University · Biology Laboratories',
      url: 'https://www.ruf.rice.edu/~bioslabs/studies/invertebrates/pond.html',
      supports: 'Pond samples may contain varied microscopic aquatic life; the educational view does not identify species.',
    },
  ],
  stoma: [
    {
      id: 'uaf-stomata-lab',
      title: 'Lesson Plan: Stomatal Density',
      provider: 'University of Alaska Fairbanks · Biology and Wildlife',
      url: 'https://aimup.unm.edu/documents/lesson-pi-stomatal-density.pdf',
      supports: 'A stoma is an opening bordered by a pair of guard cells that regulate opening and closing.',
    },
    {
      id: 'umn-leaf-stomata',
      title: '5.1 Inside Leaves',
      provider: 'University of Minnesota Libraries Publishing · The Science of Plants',
      url: 'https://open.lib.umn.edu/horticulture/chapter/5-1-inside-leaves/',
      supports: 'Guard cells and stomata in leaf epidermis; regulation of gas exchange and water-vapor movement.',
    },
  ],
  rootTip: [
    {
      id: 'umn-onion-root-tip',
      title: 'MH 015 Mitosis: Onion Root Tip',
      provider: 'University of Minnesota Medical School · Histology Slide Collection',
      url: 'https://cbs-histology02.oit.umn.edu/slideview/MH-015-mitosis/01-slide-1.html',
      supports: 'Onion root-tip fields contain cells in multiple stages of mitosis, including interphase, prophase, metaphase, anaphase, and telophase.',
    },
    {
      id: 'arizona-onion-root-tip',
      title: 'Online Onion Root Tips',
      provider: 'University of Arizona · Cell Biology Activities',
      url: 'https://biology.arizona.edu/cell_bio/activities/cell_cycle/activity_description.html',
      supports: 'Visible chromosome changes across the major stages of mitosis in onion root-tip cells.',
    },
  ],
  pollen: [
    {
      id: 'fit-pollen-imaging',
      title: 'Pollen Imaging',
      provider: 'Florida Tech · Center for Applied Biogeography',
      url: 'https://research.fit.edu/applied-biogeography/pollen-imaging/',
      supports: 'Pollen grains vary in surface pattern, aperture, and shape; a single stylized grain is not representative of every plant.',
    },
  ],
  protists: [
    {
      id: 'openstax-protists',
      title: '23.2 Characteristics of Protists',
      provider: 'OpenStax · Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/23-2-characteristics-of-protists',
      supports: 'Paramecium moves with cilia; Euglena moves with a flagellum. The groups have varied structures and movement.',
    },
  ],
  aquaticLife: [
    {
      id: 'usu-daphnia',
      title: 'Water Flea: Daphnia spp.',
      provider: 'Utah State University Extension · Utah Master Naturalist',
      url: 'https://extension.usu.edu/utahmasternaturalist/files/course-materials/watershed-wildlife-pages.pdf',
      supports: 'Daphnia are small freshwater crustaceans; the teaching slide is an optical-microscope photograph of a female.',
    },
    {
      id: 'mn-dnr-freshwater-hydra',
      title: 'From Frozen to Fascinating',
      provider: 'Minnesota Department of Natural Resources · MinnAqua',
      url: 'https://files.dnr.state.mn.us/education_safety/education/minnaqua/leadersguide/chapter_1/1_6_from_frozen_to_fascinating.pdf',
      supports: 'Freshwater hydras use tentacles around the mouth to capture food; the displayed photograph is a microscope section, not a live specimen.',
    },
  ],
  algae: [
    {
      id: 'openstax-diatoms',
      title: '23.3 Groups of Protists',
      provider: 'OpenStax · Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/23-3-groups-of-protists',
      supports: 'Diatoms are microscopic aquatic algae with varied cell forms.',
    },
    {
      id: 'smithsonian-diatom-wall',
      title: 'Algae Classification',
      provider: 'Smithsonian National Museum of Natural History',
      url: 'https://naturalhistory.si.edu/research/botany/research/algae/algae-classification',
      supports: 'Diatom cell walls (frustules) are made of silica and have distinctive surface patterns.',
    },
    {
      id: 'iisc-freshwater-algae',
      title: 'Freshwater Algae: Identification and Use as Bioindicators',
      provider: 'Indian Institute of Science · Centre for Ecological Sciences',
      url: 'https://wgbis.ces.iisc.ac.in/energy/stc/biomonitoring_of_wetlands/keys_freshwater_algae.pdf',
      supports: 'Spirogyra cells contain a characteristic spiral chloroplast band.',
    },
  ],
  fern: [
    {
      id: 'openstax-seedless-plants',
      title: 'Seedless Plants',
      provider: 'OpenStax · Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/25-3-seedless-plants',
      supports: 'Ferns reproduce by spores formed in sporangia.',
    },
  ],
  animalTissues: [
    {
      id: 'openstax-animal-primary-tissues',
      title: '33.2 Animal Primary Tissues',
      provider: 'OpenStax · Biology 2e',
      url: 'https://openstax.org/books/biology-2e/pages/33-2-animal-primary-tissues',
      supports: 'Fibrocartilage contains abundant collagen; compact bone forms osteons; cardiac muscle occurs in the heart.',
    },
  ],
  lab: [
    {
      id: 'libretexts-lab-equipment',
      title: 'Lab Equipment',
      provider: 'Chemistry LibreTexts · Bethune-Cookman University General Chemistry I Lab',
      url: 'https://chem.libretexts.org/Courses/BethuneCookman_University/B-CU%3A_CHL-141_General_Chemistry_1_Lab/Labs/Laboratory_1%3A_Basic_Lab_Techniques/Lab_Equipment',
      supports: 'Uses of beakers, flasks, test tubes, cylinders, pipettes and Bunsen burners; distinction between holding/mixing and volume-measuring apparatus.',
    },
    {
      id: 'iu-standard-equipment',
      title: 'Using Standard Laboratory Equipment',
      provider: 'Indiana University East · General Chemistry Laboratory',
      url: 'https://iu.pressbooks.pub/iuegenchemlabs/front-matter/using-standard-laboratory-equipment/',
      supports: 'Meniscus reading, delivery pipette technique, balance use, and basic burner operation/safety.',
    },
    {
      id: 'usc-burner-safety',
      title: 'Laboratory Burner Safety',
      provider: 'University of Southern California · Environmental Health and Safety',
      url: 'https://ehs.usc.edu/research/lab/laboratory-burner-safety/',
      supports: 'Open-flame hazards, supervision, heating closed containers, and shutting off gas after use.',
    },
  ],
} satisfies Record<string, ScientificReference[]>;

export const specimens: ScientificSpecimen[] = [
  {
    id: 'blood-smear', department: 'hematology', kind: 'blood',
    title: { en: 'Peripheral blood smear', ar: 'لطاخة دم محيطية' },
    subtitle: { en: 'Erythrocytes · leukocytes · platelets', ar: 'كريات حمراء · كريات بيضاء · صفائح دموية' },
    description: { en: 'A photographed blood film with erythrocytes and stained white cells in the original field.', ar: 'صورة حقيقية لطاخة دم تظهر كريات الدم الحمراء وخلايا بيضاء مصبوغة.' },
    facts: [
      { en: 'Erythrocytes are anucleate biconcave discs with central pallor; the reviewed sources describe a typical diameter of about 7–8 μm.', ar: 'كريات الدم الحمراء أقراص مقعّرة الوجهين، بلا نواة، وتظهر شحوباً مركزياً؛ وتذكر المراجع قطرًا تقريبيًا قدره 7–8 ميكرومتر.' },
      { en: 'Neutrophils show a segmented nucleus. Small lymphocytes have a round, dark nucleus with only a thin rim of cytoplasm.', ar: 'تُظهر العدلات نواة مفصّصة، بينما للخلايا اللمفاوية الصغيرة نواة مستديرة داكنة تحيط بها حافة رقيقة من السيتوبلازم.' },
      { en: 'Platelets are small, anucleate elements that appear as purple-staining granulated bodies in a stained smear.', ar: 'الصفائح الدموية عناصر صغيرة بلا نواة، وتبدو كأجسام حبيبية مصبوغة بالأرجواني في اللطاخة.' },
    ],
    references: [...references.bloodSmear],
  },
  {
    id: 'sickle-cell-smear', department: 'hematology', kind: 'blood-sickle',
    title: { en: 'Sickle-cell blood film', ar: 'لطاخة دم بخلايا منجلية' },
    subtitle: { en: 'Giemsa-stained · erythrocyte shape variation', ar: 'صبغة جيمسا · اختلاف أشكال كريات الدم الحمراء' },
    description: { en: 'A Giemsa-stained human blood film from a person with sickle cell disease.', ar: 'لطاخة دم بشرية مصبوغة بجيمسا من شخص مصاب بمرض الخلايا المنجلية.' },
    facts: [
      { en: 'Look for elongated, curved erythrocytes among the round cells. The image shows one prepared field, not every cell or every moment.', ar: 'ابحث عن كريات حمراء طويلة ومنحنية بين الخلايا المستديرة. تعرض الصورة مجالًا مجهزًا واحدًا، لا كل الخلايا أو كل الأوقات.' },
      { en: 'A blood-film appearance is an educational observation and cannot diagnose sickle cell disease on its own.', ar: 'مظهر لطاخة الدم ملاحظة تعليمية ولا يكفي وحده لتشخيص مرض الخلايا المنجلية.' },
    ],
    references: [...references.sickleCell, ...references.bloodSmear],
  },
  {
    id: 'target-cells', department: 'hematology', kind: 'blood-target',
    title: { en: 'Target cells · codocytes', ar: 'خلايا الهدف · كودوسايت' },
    subtitle: { en: 'Bull’s-eye erythrocyte pattern', ar: 'نمط يشبه لوحة الهدف في كريات الدم' },
    description: { en: 'A microscope field rich in target-shaped red cells, also called codocytes.', ar: 'مجال مجهري غني بكريات حمراء ذات مظهر الهدف، وتسمى أيضًا كودوسايت.' },
    facts: [
      { en: 'A target cell has a central hemoglobin area, a pale ring, and an outer hemoglobin rim.', ar: 'تظهر خلية الهدف منطقة مركزية من الهيموغلوبين، تليها حلقة باهتة ثم حافة خارجية مصبوغة.' },
      { en: 'This cell shape can occur in different conditions; the image is for morphology practice, not diagnosis.', ar: 'قد يظهر هذا الشكل في حالات مختلفة؛ الصورة للتدرب على شكل الخلية وليست للتشخيص.' },
    ],
    references: [...references.targetCells],
  },
  {
    id: 'eosinophil-smear', department: 'hematology', kind: 'blood-eosinophil',
    title: { en: 'Eosinophil in a blood film', ar: 'خلية حمضية في لطاخة دم' },
    subtitle: { en: 'Leukocyte · 400× source photograph', ar: 'خلية دم بيضاء · صورة أصلية بتكبير ٤٠٠×' },
    description: { en: 'A stained blood-smear photograph with an eosinophil surrounded by erythrocytes.', ar: 'صورة لطاخة دم مصبوغة تُظهر خلية حمضية بين كريات الدم الحمراء.' },
    facts: [
      { en: 'This eosinophil shows a bilobed nucleus and prominent orange-red granules.', ar: 'تظهر هذه الخلية الحمضية نواة ثنائية الفص وحبيبات واضحة برتقالية مائلة إلى الأحمر.' },
      { en: 'Compare the granular leukocyte with the erythrocytes around it; the photograph’s stain colors are part of the source.', ar: 'قارن الخلية البيضاء الحبيبية بكريات الدم الحمراء حولها؛ ألوان الصبغة جزء من الصورة الأصلية.' },
    ],
    references: [...references.bloodSmear],
  },
  {
    id: 'reticulocyte-smear', department: 'hematology', kind: 'reticulocyte',
    title: { en: 'Reticulocytes · supravital stain', ar: 'الخلايا الشبكية · صبغة حيوية فائقة' },
    subtitle: { en: 'Residual RNA appears as blue reticulum', ar: 'تظهر بقايا الحمض النووي الريبي كشبكة زرقاء' },
    description: { en: 'A supravitally stained human blood smear; reticulocytes show blue dots and curved RNA networks.', ar: 'لطاخة دم بشرية مصبوغة صبغة حيوية فائقة؛ تظهر الشبكيات كنقاط زرقاء وشبكات منحنية.' },
    facts: [
      { en: 'New methylene blue or brilliant cresyl blue can reveal residual RNA in reticulocytes as blue granules or a network.', ar: 'يكشف أزرق الميثيلين الجديد أو أزرق الكريزيل اللامع بقايا الحمض النووي الريبي كحبيبات أو شبكة زرقاء في الخلايا الشبكية.' },
      { en: 'The source photograph is a teaching example from a patient sample; it should not be used for diagnosis or counting.', ar: 'الصورة الأصلية مثال تعليمي من عينة مريض؛ ولا تستخدم للتشخيص أو العدّ.' },
    ],
    references: [...references.reticulocyte],
  },
  {
    id: 'malaria-smear', department: 'hematology', kind: 'malaria',
    title: { en: 'Plasmodium falciparum · gametocyte', ar: 'المتصورة المنجلية · طور مشيجي' },
    subtitle: { en: 'Leishman-stained blood film · 1000× source', ar: 'لطاخة بصبغة ليشمان · صورة أصلية بتكبير ١٠٠٠×' },
    description: { en: 'A peripheral-blood photomicrograph showing a banana-shaped P. falciparum gametocyte in a Leishman-stained film.', ar: 'صورة مجهرية لدم محيطي تُظهر طورًا مشيجيًا هلالي الشكل للمتصورة المنجلية في لطاخة بصبغة ليشمان.' },
    facts: [
      { en: 'The crescent-shaped structure is a gametocyte. Malaria microscopy uses thick and thin films; Giemsa is preferred for several parasite details.', ar: 'التركيب الهلالي هو طور مشيجي. يستخدم فحص الملاريا لطاخات سميكة ورقيقة، وتُفضّل جيمسا لإظهار تفاصيل عدة للطفيلي.' },
      { en: 'This single teaching image is not a diagnostic test; species identification and parasite counting require trained microscopy and proper specimens.', ar: 'هذه الصورة التعليمية وحدها ليست فحصًا تشخيصيًا؛ فتحديد النوع وعدّ الطفيليات يحتاجان إلى فحص مجهري مدرّب وعينات مناسبة.' },
    ],
    references: [...references.malariaSmear],
  },
  {
    id: 'onion-epidermis', department: 'histology', kind: 'onion',
    title: { en: 'Onion bulb epidermis', ar: 'بشرة بصلة البصل' },
    subtitle: { en: 'Single-layer plant tissue', ar: 'نسيج نباتي أحادي الطبقة' },
    description: { en: 'A thin epidermal peel used to study plant-cell boundaries and selected internal structures.', ar: 'قشرة بشرة رقيقة تُستخدم لدراسة حدود الخلايا النباتية وبعض تراكيبها الداخلية.' },
    facts: [
      { en: 'The inner epidermis of an onion bulb scale is a single layer of thin-walled cells that can be peeled for a wet mount.', ar: 'تتكون البشرة الداخلية لقشرة بصلة البصل من طبقة واحدة من خلايا رقيقة الجدران يمكن تقشيرها وتحضيرها كشريحة رطبة.' },
      { en: 'Teaching labs identify the cell wall, cytoplasm, central vacuole, and nucleus; staining can improve contrast, and visibility depends on preparation.', ar: 'تحدّد المختبرات التعليمية جدار الخلية والسيتوبلازم والفجوة المركزية والنواة؛ وقد تحسّن الصبغة التباين وتختلف الرؤية بحسب التحضير.' },
      { en: 'Not every internal membrane or organelle is reliably resolved in a routine light-microscope preparation.', ar: 'لا يمكن تمييز كل غشاء داخلي أو عضيّة بوضوح في كل تحضير روتيني بالمجهر الضوئي.' },
    ],
    references: [...references.onion],
  },
  {
    id: 'budding-yeast', department: 'microbiology', kind: 'yeast',
    title: { en: 'Budding baker’s yeast', ar: 'خميرة الخَبز المتبرعمة' },
    subtitle: { en: 'Saccharomyces cerevisiae', ar: 'Saccharomyces cerevisiae' },
    description: { en: 'A single-celled eukaryotic fungus used as an introductory view of budding morphology.', ar: 'فطر حقيقي النواة وحيد الخلية يُستخدم للتعرّف إلى شكل التبرعم.' },
    facts: [
      { en: 'Saccharomyces cerevisiae divides by budding: a smaller daughter cell emerges from a larger mother cell.', ar: 'تنقسم خميرة Saccharomyces cerevisiae بالتبرعم؛ إذ تنشأ خلية بنت أصغر من خلية أم أكبر.' },
      { en: 'Cells may be spherical or ovoid; reported dimensions are approximate and vary with cell and growth conditions.', ar: 'قد تكون الخلايا كروية أو بيضوية؛ والأبعاد المنشورة تقريبية وتتفاوت باختلاف الخلية وظروف النمو.' },
      { en: 'Teaching cultures still require institution-approved sourcing and routine microbiology safety practices.', ar: 'تظل المزارع التعليمية بحاجة إلى مصادر معتمدة من المؤسسة واتباع ممارسات السلامة الميكروبيولوجية المعتادة.' },
    ],
    references: [...references.yeast],
  },
  {
    id: 'dicot-leaf', department: 'botany', kind: 'leaf',
    title: { en: 'Lemon leaf cross-section', ar: 'مقطع عرضي في ورقة ليمون' },
    subtitle: { en: 'Leaf tissue · 10× source photograph', ar: 'نسيج ورقي · صورة أصلية بتكبير 10×' },
    description: { en: 'A photographed cross-section of a lemon leaf, captured under a light microscope.', ar: 'صورة مقطع عرضي لورقة ليمون ملتقطة بالمجهر الضوئي.' },
    facts: [
      { en: 'A generalized dicot leaf has upper and lower epidermis around mesophyll, commonly organized into palisade and spongy tissues.', ar: 'تُحاط أنسجة الورقة المتوسطة في النموذج العام لثنائيات الفلقة ببشرتين علوية وسفلية، وغالباً ما تتمايز إلى نسيج عمادي وإسفنجي.' },
      { en: 'The waxy cuticle helps reduce water loss; stomata and their guard cells regulate gas exchange and water-vapor movement.', ar: 'تساعد الطبقة الشمعية على الحد من فقد الماء؛ وتنظّم الثغور والخلايا الحارسة تبادل الغازات وحركة بخار الماء.' },
      { en: 'Xylem carries water and minerals to the leaf; phloem carries photosynthetic products from the leaf to other plant parts.', ar: 'ينقل الخشب الماء والمعادن إلى الورقة، بينما ينقل اللحاء نواتج البناء الضوئي من الورقة إلى أجزاء النبات الأخرى.' },
    ],
    references: [...references.leaf],
  },
  {
    id: 'cheek-cells', department: 'histology', kind: 'cheek',
    title: { en: 'Stained cheek epithelial cells', ar: 'خلايا طلائية من بطانة الخد' },
    subtitle: { en: 'Cell membrane · cytoplasm · nucleus', ar: 'غشاء الخلية · السيتوبلازم · النواة' },
    description: { en: 'A stained human cheek-cell field with visible cell boundaries and nuclei.', ar: 'مجال تعليمي لخلايا بطانة الخد المصبوغة، تظهر فيه حدود الخلايا وأنويتها.' },
    facts: [
      { en: 'A prepared cheek-cell slide can show the cell membrane, cytoplasm, and an oval nucleus.', ar: 'قد تُظهر شريحة خلايا الخد غشاء الخلية والسيتوبلازم ونواة بيضوية.' },
      { en: 'Staining changes contrast. This is a teaching photograph and is not a patient sample.', ar: 'تغيّر الصبغة التباين. هذه صورة تعليمية وليست عينة لمريض.' },
    ],
    references: [...references.cheek],
  },
  {
    id: 'skeletal-muscle', department: 'histology', kind: 'muscle',
    title: { en: 'Skeletal muscle fibers', ar: 'ألياف العضلات الهيكلية' },
    subtitle: { en: 'Stained muscle fibers · 200× source image', ar: 'ألياف عضلية مصبوغة · صورة أصلية بتكبير 200×' },
    description: { en: 'A photomicrograph showing elongated, striated skeletal muscle fibers.', ar: 'صورة مجهرية تُظهر أليافًا عضلية هيكلية طويلة ومخططة.' },
    facts: [
      { en: 'Skeletal muscle fibers are long and striated, with multiple nuclei positioned near the cell membrane.', ar: 'ألياف العضلات الهيكلية طويلة ومخططة، وبها عدة أنوية قرب غشاء الخلية.' },
      { en: 'This photograph shows the fibers lengthwise; a cross-section would show a very different field.', ar: 'تعرض الصورة الألياف بطولها؛ ويظهر المقطع العرضي مجالًا مختلفًا تمامًا.' },
    ],
    references: [...references.muscle],
  },
  {
    id: 'bacteria-morphology', department: 'microbiology', kind: 'bacteria',
    title: { en: 'Gram-stained cocci and bacilli', ar: 'مكورات وعصيات بصبغة غرام' },
    subtitle: { en: 'Staphylococcus · E. coli · 1000× source', ar: 'Staphylococcus · E. coli · صورة أصلية بتكبير 1000×' },
    description: { en: 'A Gram-stained photomicrograph showing purple cocci and pink bacilli.', ar: 'صورة مجهرية بصبغة غرام تُظهر مكورات بنفسجية وعصيات وردية.' },
    facts: [
      { en: 'Common forms include spherical cocci and rod-shaped bacilli; cells may appear in pairs, chains, or clusters.', ar: 'تشمل الأشكال الشائعة المكورات الكروية والعصيات؛ وقد تظهر الخلايا في أزواج أو سلاسل أو عناقيد.' },
      { en: 'Shape and staining help describe a field but do not, by themselves, identify a patient isolate.', ar: 'يساعد الشكل والصبغ على وصف المجال، لكنهما لا يكفيان وحدهما لتحديد عزلة من مريض.' },
    ],
    references: [...references.bacteria],
  },
  {
    id: 'pond-water', department: 'microbiology', kind: 'pond',
    title: { en: 'Pond-water drop', ar: 'قطرة من ماء البركة' },
    subtitle: { en: 'Algae · protozoa · suspended material', ar: 'طحالب · أوالي · مواد عالقة' },
    description: { en: 'A real photograph of a pond-water sample viewed under a microscope.', ar: 'صورة حقيقية لعينة من ماء بركة تحت المجهر.' },
    facts: [
      { en: 'A pond-water sample may include algae, microorganisms, and suspended material.', ar: 'قد تحتوي عينة ماء البركة على طحالب وكائنات دقيقة ومواد عالقة.' },
      { en: 'This photograph records one field only; the organisms in a pond sample vary with location and collection time.', ar: 'تسجل الصورة مجالاً واحداً فقط؛ وتختلف الكائنات في عينة البركة بحسب الموقع ووقت الجمع.' },
    ],
    references: [...references.pond],
  },
  {
    id: 'leaf-stomata', department: 'botany', kind: 'stoma',
    title: { en: 'Leaf epidermis with stomata', ar: 'بشرة ورقة وثغورها' },
    subtitle: { en: 'Guard cells · stomatal pore · epidermis', ar: 'خلايا حارسة · فتحة ثغرية · بشرة' },
    description: { en: 'A surface view of epidermal cells with open and closed stomata.', ar: 'منظر سطحي لخلايا البشرة مع ثغور مفتوحة وأخرى مغلقة.' },
    facts: [
      { en: 'Each stomatal opening is bordered by a pair of guard cells that regulate opening and closing.', ar: 'تحيط بكل فتحة ثغرية خليتان حارستان تنظّمان الفتح والإغلاق.' },
      { en: 'Stomatal and epidermal-cell patterns vary among plant species.', ar: 'تختلف أنماط الثغور وخلايا البشرة بين أنواع النباتات.' },
    ],
    references: [...references.stoma],
  },
  {
    id: 'onion-root-tip', department: 'botany', kind: 'root-tip',
    title: { en: 'Onion root tip mitosis', ar: 'الانقسام في قمة جذر البصل' },
    subtitle: { en: 'Interphase · prophase · metaphase · anaphase · telophase', ar: 'بيني · تمهيدي · استوائي · انفصالي · نهائي' },
    description: { en: 'A photographed onion root tip with several stages of mitosis in one field.', ar: 'صورة لقمة جذر بصل تظهر عدة مراحل من الانقسام في مجال واحد.' },
    facts: [
      { en: 'A rapidly growing onion root tip provides cells in multiple stages of mitosis.', ar: 'تحتوي قمة جذر البصل سريعة النمو على خلايا في مراحل متعددة من الانقسام المتساوي.' },
      { en: 'Cell-stage labels are study guides; confirm each stage from the visible chromosome arrangement.', ar: 'تسميات مراحل الخلية أدوات للمذاكرة؛ تحقّق من كل مرحلة بحسب ترتيب الكروموسومات الظاهر.' },
    ],
    references: [...references.rootTip],
  },
  {
    id: 'pollen-grains', department: 'botany', kind: 'pollen',
    title: { en: 'Pollen grains', ar: 'حبوب اللقاح' },
    subtitle: { en: 'Dark-field microscopy · pollen grains', ar: 'مجهر الحقل المظلم · حبوب لقاح' },
    description: { en: 'A dark-field photomicrograph of pollen grains against a black background.', ar: 'صورة مجهرية بحقل مظلم لحبوب لقاح على خلفية سوداء.' },
    facts: [
      { en: 'Pollen-grain shape, surface pattern, and apertures vary among plant groups.', ar: 'يختلف شكل حبوب اللقاح ونمط سطحها وفتحاتها بين مجموعات النباتات.' },
      { en: 'Dark-field illumination makes objects appear bright against a dark background; these are source-photo colors.', ar: 'تُظهر إضاءة الحقل المظلم الأجسام فاتحة على خلفية داكنة؛ هذه ألوان الصورة الأصلية.' },
    ],
    references: [...references.pollen],
  },
  {
    id: 'paramecium', department: 'microbiology', kind: 'paramecium',
    title: { en: 'Paramecium', ar: 'البراميسيوم' },
    subtitle: { en: 'Ciliate protist · optical micrograph', ar: 'كائن هدبي وحيد الخلية · صورة بالمجهر الضوئي' },
    description: { en: 'An optical photomicrograph of a Paramecium (Paramecium sp.). The whole cell and its internal vacuoles are visible.', ar: 'صورة مجهرية للبراميسيوم تُظهر الخلية كاملةً وبعض الفجوات بداخلها.' },
    facts: [
      { en: 'Paramecium moves by beating rows of tiny cilia along its surface.', ar: 'يتحرك البراميسيوم بمساعدة أهداب دقيقة تغطي سطحه.' },
      { en: 'Look for the oval outline and round vacuoles. The blurred edge can result from the cilia moving during capture.', ar: 'لاحظ الشكل البيضاوي والفجوات الدائرية. قد تبدو الحافة غير واضحة بسبب حركة الأهداب وقت التصوير.' },
    ],
    references: [...references.protists],
  },
  {
    id: 'euglena', department: 'microbiology', kind: 'euglena',
    title: { en: 'Euglena', ar: 'اليوجلينا' },
    subtitle: { en: 'Phase contrast · 800× source image', ar: 'تباين طوري · الصورة الأصلية بتكبير ٨٠٠×' },
    description: { en: 'Several Euglena cells photographed with negative phase contrast at the source magnification of 800×.', ar: 'صورة لعدة خلايا يوجلينا بالتباين الطوري السالب، بتكبير أصلي ٨٠٠×.' },
    facts: [
      { en: 'Euglena moves with a flagellum, a whip-like structure that may be difficult to see in a still image.', ar: 'تتحرك اليوجلينا بسوط يشبه الذيل، وقد يصعب تمييزه في الصورة الثابتة.' },
      { en: 'Some Euglena species photosynthesize in light; the group includes different feeding strategies.', ar: 'تقوم بعض أنواع اليوجلينا بالبناء الضوئي عند توفر الضوء، وتختلف طرق التغذي داخل المجموعة.' },
    ],
    references: [...references.protists],
  },
  {
    id: 'daphnia', department: 'aquatic-life', kind: 'daphnia',
    title: { en: 'Water flea · Daphnia', ar: 'برغوث الماء · دافنيا' },
    subtitle: { en: 'Female · optical micrograph · 40× source', ar: 'أنثى · صورة بالمجهر الضوئي · تكبير أصلي ٤٠×' },
    description: { en: 'A female Daphnia photographed through a light microscope at the source magnification of 40×.', ar: 'صورة لأنثى الدافنيا ملتقطة بالمجهر الضوئي بتكبير أصلي ٤٠×.' },
    facts: [
      { en: 'Daphnia is a small freshwater crustacean, often studied as part of plankton communities.', ar: 'الدافنيا قشريّ صغير يعيش في المياه العذبة، ويُدرس ضمن مجتمعات العوالق.' },
      { en: 'Explore the transparent body and locate the eye and limbs where the detail permits.', ar: 'استكشف الجسم الشفاف وحاول تحديد العين والأطراف حيث تسمح تفاصيل الصورة بذلك.' },
    ],
    references: [...references.aquaticLife],
  },
  {
    id: 'hydra', department: 'aquatic-life', kind: 'hydra',
    title: { en: 'Hydra · longitudinal section', ar: 'هيدرا · مقطع طولي' },
    subtitle: { en: 'Gonad visible · optical micrograph · 100× source', ar: 'تظهر الغدة التناسلية · صورة بالمجهر الضوئي · تكبير أصلي ١٠٠×' },
    description: { en: 'A longitudinal micrograph of Hydra vulgaris. The published image identifies a male gonad in the section.', ar: 'صورة مجهرية لمقطع طولي في الهيدرا الشائعة، وتُظهر الغدة التناسلية الذكرية كما في وصف الصورة الأصلية.' },
    facts: [
      { en: 'Hydra is a small freshwater cnidarian with tentacles surrounding the mouth.', ar: 'الهيدرا كائن صغير من اللاسعات يعيش في المياه العذبة، وتحيط اللوامس بفمه.' },
      { en: 'This is a prepared section, so it shows internal tissue rather than a living whole animal.', ar: 'هذه شريحة مقطعية مجهّزة؛ لذلك تعرض أنسجة داخلية وليست حيوانًا كاملًا حيًا.' },
    ],
    references: [...references.aquaticLife],
  },
  {
    id: 'diatoms', department: 'microbiology', kind: 'diatom',
    title: { en: 'Diatoms from sea ice', ar: 'دياتومات من جليد البحر' },
    subtitle: { en: 'Dark-field photomicrograph · Antarctica', ar: 'صورة بالحقل المظلم · القارة القطبية الجنوبية' },
    description: { en: 'A NOAA photomicrograph of varied diatoms collected between annual sea-ice crystals in McMurdo Sound.', ar: 'صورة مجهرية من NOAA لدياتومات متنوعة عاشت بين بلورات الجليد البحري السنوي في خليج ماكموردو.' },
    facts: [
      { en: 'Diatom cell walls contain silica and are called frustules.', ar: 'تحتوي جدران خلايا الدياتومات على السيليكا، وتُسمّى أغلفتها السيليكية المصاريع.' },
      { en: 'The source uses dark-field microscopy; the bright colors belong to this original photograph.', ar: 'استخدمت الصورة الأصلية الحقل المظلم؛ والألوان الظاهرة جزء من الصورة المجهرية الأصلية.' },
    ],
    references: [...references.algae],
  },
  {
    id: 'spirogyra', department: 'botany', kind: 'spirogyra',
    title: { en: 'Spirogyra filament', ar: 'خيط سبيروجيرا' },
    subtitle: { en: 'Freshwater green alga · 40× source image', ar: 'طحلب أخضر من المياه العذبة · صورة أصلية بتكبير ٤٠×' },
    description: { en: 'A real light-microscope photograph of a Spirogyra filament. The source image has been cropped to the specimen field.', ar: 'صورة حقيقية لخيط سبيروجيرا بالمجهر الضوئي، قُصّت لتُظهر مجال العينة.' },
    facts: [
      { en: 'Spirogyra cells contain a band-shaped chloroplast that follows a spiral path.', ar: 'تحتوي خلايا السبيروجيرا على بلاستيدة خضراء شريطية تلتف داخل الخلية بشكل حلزوني.' },
      { en: 'Trace the cell walls along the filament and compare the chloroplast pattern from cell to cell.', ar: 'تتبّع جدران الخلايا على امتداد الخيط وقارن نمط البلاستيدة بين خلية وأخرى.' },
    ],
    references: [...references.algae],
  },
  {
    id: 'fern-sporangium', department: 'botany', kind: 'fern',
    title: { en: 'Male fern sporangium', ar: 'حافظة أبواغ سرخس ذكر' },
    subtitle: { en: 'Bright-field microscopy · 200× source', ar: 'مجهر الحقل المضيء · تكبير أصلي ٢٠٠×' },
    description: { en: 'A bright-field photomicrograph of a prepared male fern sporangium slide.', ar: 'صورة بالحقل المضيء لشريحة مجهّزة لحافظة أبواغ سرخس ذكر.' },
    facts: [
      { en: 'Sporangia produce spores used in the fern life cycle.', ar: 'تنتج حوافظ الأبواغ الأبواغَ التي تدخل في دورة حياة السرخس.' },
      { en: 'The small scale bar is part of the source photograph; the viewer controls enlarge the image digitally and are not calibrated.', ar: 'مقياس الرسم الصغير جزء من الصورة الأصلية؛ أما أدوات العرض فتكبّر الصورة رقميًا ولا تُستخدم للقياس.' },
    ],
    references: [...references.fern],
  },
  {
    id: 'compact-bone', department: 'histology', kind: 'bone',
    title: { en: 'Compact bone · cross-section', ar: 'عظم كثيف · مقطع عرضي' },
    subtitle: { en: 'Bright-field photomicrograph · 40× source', ar: 'صورة مجهرية بالحقل الساطع · تكبير أصلي ٤٠×' },
    description: { en: 'A bright-field photomicrograph of a human compact-bone cross-section.', ar: 'صورة مجهرية بالحقل الساطع لمقطع عرضي في عظم بشري كثيف.' },
    facts: [
      { en: 'Look for osteons: concentric rings around central canals in compact bone.', ar: 'ابحث عن الأوستيونات: حلقات متحدة المركز حول قنوات مركزية في العظم الكثيف.' },
      { en: 'The scale bar in the photo marks 1 mm. At this low power you see osteons and their canals; lacunae and canaliculi need a higher magnification.', ar: 'شريط المقياس في الصورة يمثل ١ مم. عند هذا التكبير المنخفض تظهر الأوستيونات وقنواتها؛ أما الجُوَيبات والقنيّات الدقيقة فتحتاج تكبيرًا أعلى.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'fibrocartilage', department: 'histology', kind: 'cartilage',
    title: { en: 'Fibrocartilage', ar: 'غضروف ليفي' },
    subtitle: { en: 'Stained connective tissue · microscope field', ar: 'نسيج ضام مصبوغ · مجال مجهري' },
    description: { en: 'A stained microscope photograph of mammalian fibrocartilage captured during a teaching lab.', ar: 'صورة مجهرية مصبوغة للغضروف الليفي في الثدييات، التُقطت أثناء معمل تعليمي.' },
    facts: [
      { en: 'Fibrocartilage contains abundant collagen fibres within its matrix.', ar: 'يحتوي الغضروف الليفي على ألياف كولاجين كثيرة داخل مادته البينية.' },
      { en: 'Compare the denser fibre bundles with the smoother glassy appearance typical of hyaline cartilage.', ar: 'قارن حزم الألياف الكثيفة بالمظهر الزجاجي الأكثر نعومة للغضروف الزجاجي.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'cardiac-muscle', department: 'histology', kind: 'cardiac-muscle',
    title: { en: 'Cardiac muscle · cross-section', ar: 'عضلة قلبية · مقطع عرضي' },
    subtitle: { en: 'Heart tissue · 100× source image', ar: 'نسيج القلب · صورة أصلية بتكبير ١٠٠×' },
    description: { en: 'A cross-sectional photomicrograph of cardiac muscle tissue, captured at a source magnification of 100×.', ar: 'صورة مجهرية لمقطع عرضي في نسيج عضلة القلب، بتكبير أصلي ١٠٠×.' },
    facts: [
      { en: 'Cardiac muscle forms the contractile tissue of the heart.', ar: 'تشكّل العضلة القلبية النسيجَ المسؤول عن انقباض القلب.' },
      { en: 'Use the cross-sectional orientation to compare fibre profiles with the lengthwise skeletal-muscle slide.', ar: 'استفد من اتجاه المقطع العرضي لمقارنة أشكال الألياف بشريحة العضلة الهيكلية الطولية.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'amoeba', department: 'microbiology', kind: 'amoeba',
    title: { en: 'Amoeba proteus', ar: 'أميبا بروتيوس' },
    subtitle: { en: 'Freshwater amoeba · light micrograph', ar: 'أميبا مياه عذبة · صورة بالمجهر الضوئي' },
    description: { en: 'A photomicrograph of a large freshwater amoeba, shown in its irregular cell shape.', ar: 'صورة مجهرية لأميبا كبيرة من المياه العذبة تظهر شكلها الخلوي غير المنتظم.' },
    facts: [
      { en: 'Amoeba proteus changes shape as it extends temporary pseudopodia for movement and feeding.', ar: 'تغيّر أميبا بروتيوس شكلها، وتمتد منها أقدام كاذبة مؤقتة للحركة والتغذي.' },
      { en: 'A still image captures one moment; the cell outline can look different as the amoeba moves.', ar: 'تسجل الصورة لحظة واحدة؛ وقد يتغير محيط الخلية مع حركة الأميبا.' },
    ],
    references: [...references.protists],
  },
  {
    id: 'rotifer', department: 'aquatic-life', kind: 'rotifer',
    title: { en: 'Rotifer · probable identification', ar: 'روتيفر · تحديد مرجّح' },
    subtitle: { en: 'Freshwater micro-animal · source identification is tentative', ar: 'حيوان مجهري من المياه العذبة · تحديد المصدر غير مؤكد' },
    description: { en: 'A small microscope field catalogued as a likely rotifer. Its identity is presented cautiously because the source itself is tentative.', ar: 'مجال مجهري صغير مصنّف على الأرجح كروتيفر. نعرض التحديد بحذر لأن المصدر نفسه غير جازم.' },
    facts: [
      { en: 'Rotifers are tiny aquatic animals; many use a ciliated crown to move food toward the mouth.', ar: 'الروتيفرات حيوانات مائية دقيقة؛ ويستخدم كثير منها تاجًا هدبيًا لتوجيه الغذاء نحو الفم.' },
      { en: 'The source labels this image as probably Rotifera, so use it for observation rather than a definitive identification exercise.', ar: 'يصف المصدر هذه الصورة بأنها على الأرجح لروتيفر؛ لذا تصلح للملاحظة لا كتدريب على تحديد قاطع.' },
    ],
    references: [...references.aquaticLife],
  },
  {
    id: 'hyaline-cartilage', department: 'histology', kind: 'hyaline-cartilage',
    title: { en: 'Hyaline cartilage', ar: 'غضروف زجاجي' },
    subtitle: { en: 'Mammalian connective tissue · section', ar: 'نسيج ضام في الثدييات · مقطع' },
    description: { en: 'A prepared section of mammalian hyaline cartilage photographed through a light microscope.', ar: 'مقطع مجهّز من غضروف زجاجي في الثدييات، صُوّر بالمجهر الضوئي.' },
    facts: [
      { en: 'Chondrocytes sit in spaces called lacunae within a smooth-looking extracellular matrix.', ar: 'توجد الخلايا الغضروفية داخل فجوات تُسمى جُوَيبات ضمن مادة بينية تبدو ناعمة.' },
      { en: 'Hyaline cartilage has a glassy appearance in routine sections; compare its matrix with the collagen-rich fibrocartilage slide.', ar: 'يبدو الغضروف الزجاجي بمظهر زجاجي في المقاطع المعتادة؛ قارِن مادته بالغضروف الليفي الغني بالكولاجين.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'adipose-tissue', department: 'histology', kind: 'adipose',
    title: { en: 'Adipose tissue', ar: 'نسيج دهني' },
    subtitle: { en: 'Lipid-storing connective tissue', ar: 'نسيج ضام يخزّن الدهون' },
    description: { en: 'A microscope photograph of adipose cells in a prepared teaching sample.', ar: 'صورة مجهرية لخلايا دهنية في عينة تعليمية مجهّزة.' },
    facts: [
      { en: 'Adipocytes store lipid; routine processing can leave a large clear-looking space in each cell.', ar: 'تخزّن الخلايا الدهنية الدهون؛ وقد يترك التحضير المعتاد مساحة كبيرة تبدو فارغة داخل كل خلية.' },
      { en: 'Cell size and appearance vary with preparation, so use the surrounding tissue pattern as well as individual cells.', ar: 'يتفاوت حجم الخلايا ومظهرها بحسب التحضير؛ لذلك لاحظ نمط النسيج المحيط إلى جانب الخلايا المفردة.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'smooth-muscle', department: 'histology', kind: 'smooth-muscle',
    title: { en: 'Smooth muscle', ar: 'عضلة ملساء' },
    subtitle: { en: 'Non-striated muscle · 400× source image', ar: 'عضلة غير مخططة · صورة أصلية بتكبير ٤٠٠×' },
    description: { en: 'A light micrograph of smooth-muscle tissue at the source magnification of 400×.', ar: 'صورة مجهرية للعضلة الملساء بتكبير أصلي قدره ٤٠٠×.' },
    facts: [
      { en: 'Smooth-muscle cells are elongated and tapered, with one central nucleus and no visible cross-striations.', ar: 'خلايا العضلة الملساء طويلة ومدببة الطرفين، ولها نواة مركزية واحدة ولا تظهر بها تخططات عرضية.' },
      { en: 'Smooth muscle occurs in the walls of many hollow organs and contracts involuntarily.', ar: 'توجد العضلات الملساء في جدران كثير من الأعضاء المجوفة وتنقبض لا إراديًا.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'lung-alveoli', department: 'histology', kind: 'lung',
    title: { en: 'Lung · alveolar tissue', ar: 'الرئة · نسيج الحويصلات الهوائية' },
    subtitle: { en: 'Bronchiole surrounded by alveoli', ar: 'قصيبة تحيط بها حويصلات هوائية' },
    description: { en: 'A normal lung-tissue photomicrograph showing a bronchiole and the surrounding alveolar spaces.', ar: 'صورة مجهرية لنسيج رئة طبيعي تُظهر قصيبة والمساحات الحويصلية المحيطة بها.' },
    facts: [
      { en: 'Alveoli are small air spaces whose thin walls support gas exchange between air and blood.', ar: 'الحويصلات الهوائية فراغات هوائية صغيرة، وتدعم جدرانها الرقيقة تبادل الغازات بين الهواء والدم.' },
      { en: 'This field includes a bronchiole; compare its thicker wall with the delicate boundaries around alveolar spaces.', ar: 'يضم هذا المجال قصيبة؛ قارِن جدارها الأسمك بالحدود الرقيقة المحيطة بالفراغات الحويصلية.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'kidney-section', department: 'histology', kind: 'kidney',
    title: { en: 'Kidney tissue section', ar: 'مقطع في نسيج الكلية' },
    subtitle: { en: 'Human kidney · bright-field micrograph', ar: 'كلية بشرية · صورة بالحقل المضيء' },
    description: { en: 'A bright-field photomicrograph of a prepared human kidney tissue section.', ar: 'صورة بالحقل المضيء لمقطع مجهّز من نسيج كلية بشرية.' },
    facts: [
      { en: 'Kidney tissue contains closely arranged tubules and specialized regions for filtering blood and adjusting urine.', ar: 'يحتوي نسيج الكلية على أنيبيبات متقاربة ومناطق متخصصة لترشيح الدم وتعديل البول.' },
      { en: 'This photograph is a tissue field; it is not a diagnostic image and is not calibrated for measurement.', ar: 'هذه صورة مجال نسيجي للتعلّم، وليست صورة تشخيصية أو معايرة للقياس.' },
    ],
    references: [...references.animalTissues],
  },
  {
    id: 'pine-needle', department: 'botany', kind: 'pine-needle',
    title: { en: 'Pine needle cross-section', ar: 'مقطع عرضي في إبرة صنوبر' },
    subtitle: { en: 'Autofluorescence micrograph · Scots pine', ar: 'تألق ذاتي · صنوبر اسكتلندي' },
    description: { en: 'A cross-section of a young Scots pine needle photographed using autofluorescence.', ar: 'مقطع عرضي في إبرة صنوبر اسكتلندي صغيرة، صُوّر باستخدام التألق الذاتي.' },
    facts: [
      { en: 'Pine needles are leaves adapted to reduce water loss; their internal anatomy differs from a broad dicot leaf.', ar: 'إبر الصنوبر أوراق متكيفة لتقليل فقد الماء، ويختلف تركيبها الداخلي عن ورقة عريضة لثنائية الفلقة.' },
      { en: 'Autofluorescence records emitted light from the specimen; the magenta and red colors are not a standard bright-field stain.', ar: 'يسجل التألق الذاتي الضوء المنبعث من العينة؛ والألوان الحمراء والأرجوانية ليست صبغة حقل مضيء معتادة.' },
    ],
    references: [...references.leaf],
  },
  {
    id: 'lily-anther', department: 'botany', kind: 'anther',
    title: { en: 'Lily anther · cross-section', ar: 'متك زنبق · مقطع عرضي' },
    subtitle: { en: 'Mature anther · light micrograph', ar: 'متك ناضج · صورة بالمجهر الضوئي' },
    description: { en: 'A light micrograph showing a cross-section through a mature lily anther.', ar: 'صورة بالمجهر الضوئي لمقطع عرضي خلال متك زنبق ناضج.' },
    facts: [
      { en: 'Anthers are part of the flower’s male reproductive structure and contain pollen-producing sacs.', ar: 'المتك جزء من التركيب التكاثري الذكري للزهرة، ويحتوي على أكياس منتجة لحبوب اللقاح.' },
      { en: 'Compare the pollen sacs in this section with the separate pollen-grain slide.', ar: 'قارِن أكياس حبوب اللقاح في هذا المقطع بشريحة حبوب اللقاح المنفصلة.' },
    ],
    references: [...references.pollen],
  },
  {
    id: 'maize-stem', department: 'botany', kind: 'plant-section',
    title: { en: "Maize stem cross-section", ar: "مقطع عرضي في ساق الذرة" },
    subtitle: { en: "Monocot stem \u00b7 light micrograph", ar: "ساق أحادية الفلقة · صورة بالمجهر الضوئي" },
    description: { en: "A transverse section of a maize stem showing vascular bundles scattered in ground tissue.", ar: "مقطع مستعرض في ساق ذرة تظهر فيه حزم وعائية مبعثرة داخل النسيج الأساسي." },
    facts: [
      { en: "In monocot stems the vascular bundles are scattered rather than arranged in a ring.", ar: "في سيقان أحاديات الفلقة تكون الحزم الوعائية مبعثرة وليست في حلقة." },
      { en: "The bundles are smaller and more crowded toward the outer edge of the section.", ar: "الحزم أصغر وأكثر تزاحماً ناحية الحافة الخارجية للمقطع." },
    ],
    references: [{ id: 'commons-maize-stem', title: "Plant stem (255 04) Cross-section of maize stem.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Plant_stem_(255_04)_Cross-section_of_maize_stem.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'pine-needle-brightfield', department: 'botany', kind: 'plant-section',
    title: { en: "Pine needle cross-section (bright field)", ar: "مقطع عرضي في إبرة صنوبر (حقل مضيء)" },
    subtitle: { en: "Pinus nigra \u00b7 light micrograph", ar: "صنوبر أسود · صورة بالمجهر الضوئي" },
    description: { en: "A stained transverse section of a Pinus nigra needle.", ar: "مقطع مستعرض مصبوغ في إبرة Pinus nigra." },
    facts: [
      { en: "Look for the thick outer wall, resin canals and the central vascular tissue.", ar: "ابحث عن الجدار الخارجي السميك والقنوات الراتنجية والنسيج الوعائي المركزي." },
      { en: "Compare it with the autofluorescence pine needle slide in this list.", ar: "قارنها بشريحة إبرة الصنوبر بالتألق الذاتي في القائمة." },
    ],
    references: [{ id: 'commons-pine-needle-brightfield', title: "Pinus nigra needle (255 22) Needle cross section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Pinus_nigra_needle_(255_22)_Needle_cross_section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'broad-bean-root', department: 'botany', kind: 'plant-section',
    title: { en: "Broad bean root cross-section", ar: "مقطع عرضي في جذر الفول" },
    subtitle: { en: "Vicia faba \u00b7 light micrograph", ar: "فول Vicia faba · صورة بالمجهر الضوئي" },
    description: { en: "A transverse section through a broad bean (Vicia faba) root.", ar: "مقطع مستعرض في جذر فول (Vicia faba)." },
    facts: [
      { en: "The central vascular cylinder is surrounded by a wide cortex of parenchyma cells.", ar: "الأسطوانة الوعائية المركزية يحيط بها قشرة عريضة من خلايا برانشيمية." },
      { en: "This field is a close view; the outer edge of the root is only partly in frame.", ar: "هذا المجال مقرّب؛ الحافة الخارجية للجذر ظاهرة جزئياً فقط." },
    ],
    references: [{ id: 'commons-broad-bean-root', title: "Root (255 00F) Cross-section; broad bean; Vicia faba.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Root_(255_00F)_Cross-section;_broad_bean;_Vicia_faba.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'tilia-woody-stem', department: 'botany', kind: 'plant-section',
    title: { en: "Lime (Tilia) woody stem cross-section", ar: "مقطع عرضي في ساق خشبية للزيزفون (Tilia)" },
    subtitle: { en: "Woody stem \u00b7 light micrograph", ar: "ساق خشبية · صورة بالمجهر الضوئي" },
    description: { en: "A transverse section through the woody stem of Tilia at high magnification.", ar: "مقطع مستعرض في الساق الخشبية لنبات Tilia بتكبير عالٍ." },
    facts: [
      { en: "Secondary xylem cells appear in radial rows.", ar: "خلايا الخشب الثانوي تظهر في صفوف شعاعية." },
      { en: "This is a high-power field, so it shows part of the wood and not the whole stem.", ar: "هذا مجال بقوة عالية، فيظهر جزءاً من الخشب وليس الساق كلها." },
    ],
    references: [{ id: 'commons-tilia-woody-stem', title: "Plant stem (250 29) Cross-section of woody stem of Tilia.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Plant_stem_(250_29)_Cross-section_of_woody_stem_of_Tilia.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'medicago-stem', department: 'botany', kind: 'plant-section',
    title: { en: "Medicago stem cross-section", ar: "مقطع عرضي في ساق نبات Medicago (البرسيم الحجازي)" },
    subtitle: { en: "Dicot stem \u00b7 light micrograph", ar: "ساق ثنائية الفلقة · صورة بالمجهر الضوئي" },
    description: { en: "A transverse section through the stem of Medicago, a dicot.", ar: "مقطع مستعرض في ساق Medicago، وهو نبات ثنائي الفلقة." },
    facts: [
      { en: "A dicot stem has its vascular tissue arranged in a ring around a central pith.", ar: "في الساق ثنائية الفلقة يكون النسيج الوعائي في حلقة حول لب مركزي." },
      { en: "The ring of dark-stained tissue marks the vascular region.", ar: "حلقة النسيج الغامق الصبغة تحدد المنطقة الوعائية." },
    ],
    references: [{ id: 'commons-medicago-stem', title: "Plant stem (255 05) Cross-section of stem of Medicago.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Plant_stem_(255_05)_Cross-section_of_stem_of_Medicago.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'ascaris-section', department: 'zoology', kind: 'zoology-section',
    title: { en: "Ascaris cross-section", ar: "مقطع عرضي في الأسكارس" },
    subtitle: { en: "Giant roundworm \u00b7 light micrograph", ar: "الدودة الأسطوانية العملاقة · صورة بالمجهر الضوئي" },
    description: { en: "A transverse section of a giant roundworm showing the body wall, intestine and coiled reproductive tubes.", ar: "مقطع مستعرض في دودة أسطوانية عملاقة يظهر جدار الجسم والأمعاء والأنابيب التناسلية الملتفة." },
    facts: [
      { en: "Nematodes have a complete gut and a body wall of cuticle and longitudinal muscle.", ar: "الديدان الخيطية لها قناة هضمية كاملة وجدار جسم من كيوتكل وعضلات طولية." },
      { en: "See the labelled version in Study diagrams (Ascaris slide schema).", ar: "شوف النسخة الموسومة في رسومات المذاكرة (schema الأسكارس)." },
    ],
    references: [{ id: 'commons-ascaris-section', title: "Giant roundworm (265 11) Cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Giant_roundworm_(265_11)_Cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'earthworm-section', department: 'zoology', kind: 'zoology-section',
    title: { en: "Earthworm cross-section", ar: "مقطع عرضي في دودة الأرض" },
    subtitle: { en: "Common earthworm \u00b7 light micrograph", ar: "دودة الأرض الشائعة · صورة بالمجهر الضوئي" },
    description: { en: "A stained transverse section of the common earthworm.", ar: "مقطع مستعرض مصبوغ في دودة الأرض الشائعة." },
    facts: [
      { en: "The earthworm is an annelid: its body wall surrounds a fluid-filled body cavity and a gut tube.", ar: "دودة الأرض من الحلقيات: جدار جسمها يحيط بتجويف مملوء سائلاً وأنبوب هضمي." },
      { en: "This is a partial field at 0.1 mm scale, so not every organ is in view.", ar: "هذا مجال جزئي بمقياس 0.1 مم، فلا تظهر كل الأعضاء." },
    ],
    references: [{ id: 'commons-earthworm-section', title: "Common earthworm (250 13) Cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Common_earthworm_(250_13)_Cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'leech-section', department: 'zoology', kind: 'zoology-section',
    title: { en: "Leech cross-section", ar: "مقطع عرضي في العلقة" },
    subtitle: { en: "Hirudinea \u00b7 light micrograph", ar: "العلق (Hirudinea) · صورة بالمجهر الضوئي" },
    description: { en: "A whole transverse section of a leech, with the scale bar at 1 mm.", ar: "مقطع مستعرض كامل في علقة، ومقياس الرسم 1 مم." },
    facts: [
      { en: "Leeches are annelids with a thick muscular body wall.", ar: "العلق من الحلقيات وله جدار جسم عضلي سميك." },
      { en: "The whole body outline is visible in this section, which makes it a good scanning-power slide.", ar: "يظهر محيط الجسم كله في المقطع، وهي شريحة مناسبة لقوة المسح." },
    ],
    references: [{ id: 'commons-leech-section', title: "Leech (265 10) Cross-section of leech (Hirudinea).jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Leech_(265_10)_Cross-section_of_leech_(Hirudinea).jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'tapeworm-section', department: 'zoology', kind: 'zoology-section',
    title: { en: "Tapeworm body section", ar: "مقطع في جسم الدودة الشريطية" },
    subtitle: { en: "Cestoda \u00b7 light micrograph", ar: "الديدان الشريطية · صورة بالمجهر الضوئي" },
    description: { en: "A stained section through the body of a tapeworm.", ar: "مقطع مصبوغ في جسم دودة شريطية." },
    facts: [
      { en: "Tapeworms have no gut; the surface of the body takes in nutrients.", ar: "الديدان الشريطية بلا قناة هضمية؛ وسطح الجسم يمتص الغذاء." },
      { en: "The dark outer edge is the body surface (tegument).", ar: "الحافة الخارجية الغامقة هي سطح الجسم (التغلّف)." },
    ],
    references: [{ id: 'commons-tapeworm-section', title: "Tapeworm (265 15) Cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Tapeworm_(265_15)_Cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'medusa-whole-mount', department: 'zoology', kind: 'zoology-section',
    title: { en: "Small medusa, whole mount", ar: "ميدوزا صغيرة، تحضير كامل" },
    subtitle: { en: "Cnidaria \u00b7 light micrograph", ar: "اللاسعات · صورة بالمجهر الضوئي" },
    description: { en: "A whole mount of a small medusa (jellyfish stage) with ring-shaped tentacle loops around the bell.", ar: "تحضير كامل لميدوزا صغيرة (طور قنديل البحر) تظهر فيه عروة اللوامس حول الجرس." },
    facts: [
      { en: "Medusae are the free-swimming body form of cnidarians.", ar: "الميدوزا هي الشكل السابح الحر في اللاسعات." },
      { en: "The source gives no species name, so this card identifies it only as a medusa.", ar: "المصدر لا يذكر الاسم العلمي، فالبطاقة تسمّيها ميدوزا فقط." },
    ],
    references: [{ id: 'commons-medusa-whole-mount', title: "Medusa (265 13).jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Medusa_(265_13).jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'fish-scale', department: 'zoology', kind: 'zoology-section',
    title: { en: "Fish scale, whole mount", ar: "حرشفة سمكة، تحضير كامل" },
    subtitle: { en: "Total preparation \u00b7 polarised-style colours", ar: "تحضير كامل · صورة بالمجهر الضوئي" },
    description: { en: "A whole mount of a fish scale showing its growth ridges.", ar: "تحضير كامل لحرشفة سمكة تظهر فيها خطوط النمو." },
    facts: [
      { en: "Fish scales carry concentric ridges that record growth.", ar: "حراشف الأسماك عليها خطوط متحدة المركز تسجل النمو." },
      { en: "The strong colours come from the lighting used for the photograph, not a stain.", ar: "الألوان القوية من الإضاءة المستخدمة في التصوير وليست صبغة." },
    ],
    references: [{ id: 'commons-fish-scale', title: "Fish scale (250 02) Total preparation.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Fish_scale_(250_02)_Total_preparation.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'testis-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Testis section", ar: "مقطع في الخصية" },
    subtitle: { en: "Mammalian testis \u00b7 light micrograph", ar: "خصية ثديي · صورة بالمجهر الضوئي" },
    description: { en: "A section through a mammalian testis showing seminiferous tubules cut across.", ar: "مقطع في خصية ثديي تظهر فيه أنيبيبات منوية مقطوعة عرضياً." },
    facts: [
      { en: "Sperm develop inside the seminiferous tubules; interstitial tissue lies between them.", ar: "تتكوّن الحيوانات المنوية داخل الأنيبيبات المنوية، والنسيج البيني بينها." },
      { en: "See the labelled version in Study diagrams (Testis slide schema).", ar: "شوف النسخة الموسومة في رسومات المذاكرة (schema الخصية)." },
    ],
    references: [{ id: 'commons-testis-section', title: "Testicles (26 2 11) Cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Testicles_(26_2_11)_Cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'liver-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Liver section", ar: "مقطع في الكبد" },
    subtitle: { en: "Mammalian liver \u00b7 light micrograph", ar: "كبد ثديي · صورة بالمجهر الضوئي" },
    description: { en: "A stained high-power field of liver tissue showing sheets of hepatocytes.", ar: "مجال بقوة عالية لنسيج كبد مصبوغ تظهر فيه صفوف من الخلايا الكبدية." },
    facts: [
      { en: "Hepatocytes form plates separated by blood spaces called sinusoids.", ar: "تكوّن الخلايا الكبدية صفائح تفصل بينها فراغات دموية تسمى الجيوب." },
      { en: "The pale round gap in the upper middle of the field is a vessel lumen.", ar: "الفراغ المستدير الباهت في أعلى منتصف المجال هو تجويف وعاء." },
    ],
    references: [{ id: 'commons-liver-section', title: "Liver (26 2 07) Cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Liver_(26_2_07)_Cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'duodenum-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Duodenum section", ar: "مقطع في الاثني عشر" },
    subtitle: { en: "Small intestine \u00b7 light micrograph", ar: "أمعاء دقيقة · صورة بالمجهر الضوئي" },
    description: { en: "A stained high-power field of duodenal wall.", ar: "مجال بقوة عالية لجدار الاثني عشر المصبوغ." },
    facts: [
      { en: "The intestinal wall has a lining epithelium over connective tissue and muscle.", ar: "جدار الأمعاء له طلائية مبطّنة فوق نسيج ضام وعضلات." },
      { en: "Crypts and lining cells are seen at high power; villi are not clearly in this field.", ar: "تظهر الغدد المعوية والخلايا المبطنة بقوة عالية؛ والزغابات غير واضحة في هذا المجال." },
    ],
    references: [{ id: 'commons-duodenum-section', title: "Duodenum (26 2 08) Cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Duodenum_(26_2_08)_Cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'spinal-cord-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Spinal cord section", ar: "مقطع في الحبل الشوكي" },
    subtitle: { en: "Mammalian spinal cord \u00b7 light micrograph", ar: "حبل شوكي ثديي · صورة بالمجهر الضوئي" },
    description: { en: "A cross-section of mammalian spinal cord, with the dark region marking grey matter.", ar: "مقطع عرضي في حبل شوكي ثديي، والمنطقة الغامقة تمثل المادة الرمادية." },
    facts: [
      { en: "Grey matter holds neuron cell bodies and white matter holds the myelinated tracts.", ar: "المادة الرمادية فيها أجسام الخلايا العصبية والبيضاء فيها المسارات المغمّدة." },
      { en: "The strong colours come from the imaging method and are not a standard stain.", ar: "الألوان القوية من طريقة التصوير وليست صبغة معتادة." },
    ],
    references: [{ id: 'commons-spinal-cord-section', title: "Spinal cord (254 21) Mammal; cross-section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Spinal_cord_(254_21)_Mammal;_cross-section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'spleen-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Spleen section", ar: "مقطع في الطحال" },
    subtitle: { en: "Mammalian spleen \u00b7 light micrograph", ar: "طحال ثديي · صورة بالمجهر الضوئي" },
    description: { en: "A stained section of mammalian spleen.", ar: "مقطع مصبوغ في طحال ثديي." },
    facts: [
      { en: "The spleen has white pulp (lymphoid tissue) and red pulp (blood-filled spaces).", ar: "الطحال فيه لب أبيض (نسيج لمفاوي) ولب أحمر (فراغات مملوءة دماً)." },
      { en: "It filters blood and takes part in immune responses.", ar: "يرشّح الدم ويشارك في الاستجابات المناعية." },
    ],
    references: [{ id: 'commons-spleen-section', title: "Spleen (254 07) Section; mammal.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Spleen_(254_07)_Section;_mammal.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'tongue-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Human tongue section", ar: "مقطع في لسان بشري" },
    subtitle: { en: "Human tongue \u00b7 light micrograph", ar: "لسان بشري · صورة بالمجهر الضوئي" },
    description: { en: "A section of human tongue with its surface epithelium at the top and muscle and fat beneath.", ar: "مقطع في لسان بشري تظهر فيه الطلائية السطحية بأعلى وتحتها عضلات ودهون." },
    facts: [
      { en: "The tongue surface is covered by a stratified squamous epithelium.", ar: "سطح اللسان مغطى بطلائية حرشفية متعددة الطبقات." },
      { en: "Most of the body of the tongue is skeletal muscle.", ar: "معظم جسم اللسان عضلات هيكلية." },
    ],
    references: [{ id: 'commons-tongue-section', title: "Human tongue (251 09) Section.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Human_tongue_(251_09)_Section.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'trachea-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Mouse trachea section", ar: "مقطع في قصبة هوائية لفأر" },
    subtitle: { en: "Semi-thin section \u00b7 light micrograph", ar: "مقطع شبه رقيق · صورة بالمجهر الضوئي" },
    description: { en: "A semi-thin section of mouse trachea embedded in resin and stained blue.", ar: "مقطع شبه رقيق في قصبة هوائية لفأر مطمورة في راتنج ومصبوغة بالأزرق." },
    facts: [
      { en: "The airway is lined by a ciliated epithelium over connective tissue and cartilage.", ar: "المجرى الهوائي مبطّن بطلائية مهدّبة فوق نسيج ضام وغضروف." },
      { en: "The blue colour is from the stain used for resin sections.", ar: "اللون الأزرق من صبغة مقاطع الراتنج." },
    ],
    references: [{ id: 'commons-trachea-section', title: "Trachea (26 2 06) Mouse trachea cross-section, embedded in Epon.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Trachea_(26_2_06)_Mouse_trachea_cross-section,_embedded_in_Epon.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
  {
    id: 'cerebellum-section', department: 'histology', kind: 'tissue-section',
    title: { en: "Cerebellum section", ar: "مقطع في المخيخ" },
    subtitle: { en: "Mammalian cerebellum \u00b7 light micrograph", ar: "مخيخ ثديي · صورة بالمجهر الضوئي" },
    description: { en: "A section of mammalian cerebellum showing a densely packed granular layer next to a paler molecular layer.", ar: "مقطع في مخيخ ثديي يظهر فيه طبقة حبيبية كثيفة بجانب طبقة جزيئية أفتح." },
    facts: [
      { en: "The granular layer holds a very dense population of small neurons.", ar: "الطبقة الحبيبية فيها عدد كبير جداً من الخلايا العصبية الصغيرة." },
      { en: "The pale area on the left has far fewer nuclei than the dense area on the right.", ar: "المنطقة الباهتة على اليسار فيها أنوية أقل بكثير من المنطقة الكثيفة على اليمين." },
    ],
    references: [{ id: 'commons-cerebellum-section', title: "Cerebellum (254 24) Mammal.jpg", provider: 'Wikimedia Commons', url: "https://commons.wikimedia.org/wiki/File:Cerebellum_(254_24)_Mammal.jpg", supports: 'Source photograph, author and licence for this slide.' }],
  },
];
