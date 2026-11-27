import type { DepartmentId } from './scientificData';

// Subcategories for the slide list. A slide belongs to a subcategory when the words in its own title or id match the rule,
// so every grouping can be checked against the slide title. A slide can sit in more than one group. Slides that match no
// rule go to "Other", so every slide is always reachable. No scientific claim is made beyond what the title says.
export type Subcategory = { id: string; label: { en: string; ar: string }; test: RegExp };
type Item = { id: string; title: { en: string } };

const c = (id: string, en: string, ar: string, words: string): Subcategory => ({ id, label: { en, ar }, test: new RegExp(words, 'i') });

export const subcategories: Record<DepartmentId, Subcategory[]> = {
  botany: [
    c('stem', 'Stem sections', 'مقاطع السيقان', 'stem|stalk|rhizome|stolon|tuber|shoot|lenticel|dictyostele'),
    c('root', 'Root sections', 'مقاطع الجذور', 'root'),
    c('leaf', 'Leaf sections', 'مقاطع الأوراق', 'leaf|leaflet|needle|frond|petiole'),
    c('stomata', 'Stomata', 'الثغور', 'stomata|stoma'),
    c('pollen', 'Pollen and flowers', 'حبوب اللقاح والأزهار', 'pollen|anther|flower|stigma|ovary|stamen'),
    c('cells', 'Plant cells', 'الخلايا النباتية', 'onion|elodea|plasmolysis|epidermis|epidermal|mitosis|anaphase'),
    c('moss', 'Mosses and liverworts', 'الطحالب الحزازية والكبدية', 'moss|liverwort|sphagnum|protonema|thallus'),
    c('fern', 'Ferns and relatives', 'السراخس وأقاربها', 'fern|horsetail|equisetum|lycopodium|gametophyte'),
    c('algae', 'Algae and lichen', 'الطحالب والأشنات', 'spirogyra|alga|lichen'),
    c('gymno', 'Pine, ginkgo and cycad', 'الصنوبر والجنكو والسيكاس', 'pine|ginkgo|cycas|cypress'),
    c('seed', 'Seeds, grains and storage', 'البذور والحبوب والتخزين', 'caryopsis|grain|potato|starch|bud'),
  ],
  hematology: [
    c('red', 'Red blood cells', 'خلايا الدم الحمراء', '\\bred\\b|erythro|sickle|target|codocyte|reticulocyte|normoblast|rubricyte|anisocytosis|schistocyte'),
    c('white', 'White blood cells', 'خلايا الدم البيضاء', 'neutrophil|lymphocyte|basophil|eosinophil|leukocyte|granulocyte|monocyte|megakaryocyte'),
    c('platelet', 'Platelets', 'الصفائح الدموية', 'platelet|megakaryocyte'),
    c('smear', 'Blood smears', 'مسحات الدم', 'smear|film'),
    c('animal', 'Animal blood', 'دم الحيوانات', 'frog|fish|bird|chicken|amphibian|trout|mouse|nucleated'),
    c('condition', 'Blood conditions', 'حالات دموية', 'anaemia|anemia|polycythemia|agglutin|haemolytic|sickle'),
  ],
  parasitology: [
    c('egg', 'Eggs', 'البيض', '\\beggs?\\b'),
    c('worm', 'Worms and flukes', 'الديدان والمثقوبات', 'tapeworm|ascaris|hookworm|roundworm|pinworm|whipworm|trichinella|toxocara|toxascaris|trematode|fasciola|dicrocoelium|cercaria|taenia|nematode'),
    c('arthropod', 'Lice, mites, fleas, ticks', 'القمل والعث والبراغيث والقراد', 'louse|lice|mite|tick|flea|aphaniptera'),
    c('protozoa', 'Protozoa', 'الأوليات', 'plasmodium|giardia|leishmania|trypanosoma|babesia|entamoeba|trichomonas|tritrichomonas|malaria|gametocyte'),
    c('larva', 'Larvae', 'اليرقات', 'larva'),
    c('adult', 'Adult stages', 'الأطوار البالغة', '\\badult|\\bfemale|\\bmale\\b'),
  ],
  microbiology: [
    c('gram', 'Gram stain', 'صبغة جرام', '\\bgram'),
    c('acidfast', 'Acid-fast stain', 'صبغة مقاومة الحمض', 'acid.?fast|ziehl|neelsen'),
    c('cocci', 'Cocci', 'المكورات', 'cocci|coccus|staphylococcus|streptococc|pneumococcus|micrococcus'),
    c('bacilli', 'Bacilli and rods', 'العصيات', 'bacilli|bacillus|rods|escherichia|coli|lactobacillus|clostridium|corynebacterium|mycobacterium'),
    c('fungi', 'Fungi and yeast', 'الفطريات والخمائر', 'fung|candida|yeast|aspergillus|penicillium|mucor|rhizopus|hyphae|mould|trichophyton|microsporum|fusarium|basidio|conidia|spores'),
    c('clinical', 'Clinical samples', 'عينات سريرية', 'sputum|urine|pus|stool|faecal'),
  ],
  histology: [
    c('muscle', 'Muscle', 'العضلات', 'muscle|cardiac'),
    c('bonecart', 'Bone and cartilage', 'العظم والغضروف', 'bone|cartilage'),
    c('gland', 'Glands', 'الغدد', 'gland|thyroid|salivary|pineal|pituitary|adrenal|pancrea'),
    c('skin', 'Skin and hair', 'الجلد والشعر', 'skin|hair|epidermis|sweat'),
    c('digestive', 'Digestive tract and liver', 'الجهاز الهضمي والكبد', 'intestine|duodenum|ileum|colon|stomach|oesophagus|esophagus|tongue|liver|cheek'),
    c('nerve', 'Nervous system', 'الجهاز العصبي', '\\bcord\\b|brain|cerebell|nerve|cerebr'),
    c('repro', 'Reproductive system', 'الجهاز التناسلي', 'testis|ovar|placenta|epididym|sperm|fetus|uter|prostate'),
    c('vessel', 'Blood vessels', 'الأوعية الدموية', 'vein|venule|artery|arteri|valve|vessel'),
    c('urinary', 'Kidney and urinary tract', 'الكلى والمسالك البولية', 'kidney|bladder|urinary|ureter'),
    c('lung', 'Lung and airway', 'الرئة والمجاري الهوائية', 'lung|trachea|bronch'),
    c('connective', 'Connective tissue and fat', 'النسيج الضام والدهني', 'adipose|connective|elastic|fat'),
    c('epithelium', 'Epithelium', 'النسيج الطلائي', 'epitheli|mucosa'),
  ],
  'aquatic-life': [
    c('diatom', 'Diatoms', 'الدياتومات', 'diatom'),
    c('cyano', 'Cyanobacteria', 'البكتيريا الزرقاء', 'cyanobacteri|dolichospermum|gloeotrichia|oscillatoria|microcystis'),
    c('ciliate', 'Ciliates and protozoa', 'الهدبيات والأوليات', 'paramecium|vorticella|euglena|amoeba|ciliate|bursaria|stentor|proteus'),
    c('greenalga', 'Green algae', 'الطحالب الخضراء', 'spirogyra|volvox|alga|pediastrum|closterium'),
    c('animal', 'Small animals', 'حيوانات صغيرة', 'daphnia|hydra|rotifer|copepod|flea'),
    c('shell', 'Plankton shells', 'أصداف العوالق', 'foraminifera|radiolarian|dinoflagellate'),
  ],
  zoology: [
    c('insect', 'Insects', 'الحشرات', 'mosquito|\\bfly\\b|\\bflies\\b|\\bbees?\\b|\\bants?\\b|wasp|aphid|insect|butterfly|housefly|honeybee|\\bbug\\b|aedes|louse|lice'),
    c('mite', 'Mites and spiders', 'العث والعناكب', 'mite|spider|tick'),
    c('larva', 'Larvae', 'اليرقات', 'larva'),
    c('wing', 'Wings and scales', 'الأجنحة والحراشف', '\\bwings?\\b|\\bscales?\\b'),
    c('feather', 'Feathers', 'الريش', 'feather'),
    c('mollusc', 'Snails, slugs, mussels', 'القواقع والبزاقات والمحار', 'slug|snail|mussel|radula|glochidium|deroceras'),
    c('worm', 'Worms and leeches', 'الديدان والعلق', 'earthworm|leech|nematode'),
    c('part', 'Body parts', 'أجزاء الجسم', '\\beye|\\bleg\\b|\\blegs\\b|antenna|\\bhead\\b|\\bgland'),
  ],
  genetics: [
    c('mitosis', 'Mitosis', 'الانقسام الفتيلي', 'mitosis|metaphase|prophase|anaphase|meristem'),
    c('meiosis', 'Meiosis', 'الانقسام الاختزالي', 'meiosis'),
    c('chromo', 'Chromosomes and karyotype', 'الكروموسومات والنمط النووي', 'chromosome|karyotype|polytene|chromatin'),
    c('root', 'Root-tip squashes', 'عصر قمم الجذور', 'root'),
    c('culture', 'Cultured cells', 'خلايا مزروعة', 'cultured|culture|fibroblast'),
  ],
};

export function specimenMatches(department: DepartmentId, item: Item, id: string): boolean {
  const rule = subcategories[department].find((entry) => entry.id === id);
  return rule ? rule.test.test(`${item.id} ${item.title.en}`) : false;
}

export const OTHER_ID = 'other';

// Subcategories that have at least one slide in this department, with counts. "Other" is added when some slides match no rule.
export function subcategoryOptions(department: DepartmentId, items: Item[]) {
  const text = items.map((item) => `${item.id} ${item.title.en}`);
  const options = subcategories[department].map((entry) => ({ id: entry.id, label: entry.label, count: text.filter((value) => entry.test.test(value)).length })).filter((entry) => entry.count > 0);
  const other = text.filter((value) => !subcategories[department].some((entry) => entry.test.test(value))).length;
  if (other > 0) options.push({ id: OTHER_ID, label: { en: 'Other', ar: 'أخرى' }, count: other });
  return options;
}

export function inSubcategory(department: DepartmentId, item: Item, id: string): boolean {
  if (id === 'all') return true;
  if (id === OTHER_ID) return !subcategories[department].some((entry) => entry.test.test(`${item.id} ${item.title.en}`));
  return specimenMatches(department, item, id);
}
