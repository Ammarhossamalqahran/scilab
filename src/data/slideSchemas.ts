import type { Bilingual, ScientificReference } from './scientificData';
import type { DiagramStructure, ScientificDiagram, SlidePhoto } from './diagramData';

// Slide schemas: a real photomicrograph with numbered, labelled structures.
// Pin positions (x, y) are percentages of the photograph, placed by looking at each image.
const AUTHOR = 'Josef Reischig (archive, shared by heirs)';
const LICENSE = 'CC BY-SA 3.0';

const pin = (id: string, en: string, ar: string, fEn: string, fAr: string, nEn: string, nAr: string, x: number, y: number, aliases: string[] = []): DiagramStructure => ({
  id, name: { en, ar }, function: { en: fEn, ar: fAr }, note: { en: nEn, ar: nAr }, x, y, aliases,
});

const commonsRef = (photo: SlidePhoto): ScientificReference => ({
  id: `commons-${photo.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`,
  title: photo.title, provider: 'Wikimedia Commons', url: photo.sourceUrl,
  supports: 'Source photograph, author and licence for this slide schema.',
});

const disclaimer = (what: Bilingual): Bilingual => ({
  en: `Labelled on a real photomicrograph (${what.en}). Each pin marks the structure nearest to it; check the labels against your course atlas and lab manual.`,
  ar: `الرسم موضّح على صورة مجهرية حقيقية (${what.ar}). كل علامة تشير لأقرب تركيب ليها؛ راجع التسميات مع أطلس المادة وكتيّب المعمل.`,
});

type Def = { id: string; category: ScientificDiagram['category']; title: Bilingual; shortTitle: Bilingual; summary: Bilingual; what: Bilingual; photo: SlidePhoto; structures: DiagramStructure[] };

const make = (d: Def): ScientificDiagram => ({
  id: d.id, category: d.category, title: d.title, shortTitle: d.shortTitle, summary: d.summary,
  disclaimer: disclaimer(d.what), references: [commonsRef(d.photo)], structures: d.structures, photo: d.photo,
});

const photo = (file: string, title: string, commons: string): SlidePhoto => ({
  src: `/schemas/${file}.jpg`, title, author: AUTHOR, license: LICENSE,
  sourceUrl: `https://commons.wikimedia.org/wiki/File:${commons}`,
});

export const slideSchemas: ScientificDiagram[] = [
  make({
    id: 'slide-maize-stem', category: 'botany',
    title: { en: 'Monocot stem (maize), cross-section', ar: 'مقطع عرضي في ساق نبات أحادي الفلقة (الذرة)' },
    shortTitle: { en: 'Maize stem', ar: 'ساق الذرة' },
    summary: { en: 'Scattered vascular bundles in ground tissue: the monocot stem pattern.', ar: 'حزم وعائية مبعثرة داخل النسيج الأساسي: نمط ساق أحادية الفلقة.' },
    what: { en: 'maize stem, transverse section', ar: 'مقطع مستعرض في ساق الذرة' },
    photo: photo('maize-stem', 'Plant stem (255 04) Cross-section of maize stem.jpg', 'Plant_stem_(255_04)_Cross-section_of_maize_stem.jpg'),
    structures: [
      pin('vascular-bundle', 'Vascular bundle', 'حزمة وعائية', 'Each bundle holds xylem and phloem and carries water and sugars along the stem.', 'كل حزمة فيها خشب ولحاء وتنقل الماء والسكريات على طول الساق.', 'In monocots the bundles are scattered, with no ring and no cambium.', 'في أحاديات الفلقة الحزم مبعثرة، مفيش حلقة ومفيش كامبيوم.', 54, 44, ['vascular bundles', 'bundle']),
      pin('ground-parenchyma', 'Ground tissue (parenchyma)', 'النسيج الأساسي (برانشيمي)', 'Large thin-walled cells fill the stem between the bundles and store food.', 'خلايا كبيرة رقيقة الجدار تملأ الساق بين الحزم وتخزّن الغذاء.', 'No separate pith and cortex in the monocot stem; it is one ground tissue.', 'مفيش لب وقشرة منفصلين في ساق أحادية الفلقة؛ هو نسيج أساسي واحد.', 38, 55, ['parenchyma', 'ground tissue', 'pith']),
      pin('peripheral-bundles', 'Small crowded peripheral bundles', 'حزم صغيرة متزاحمة قرب المحيط', 'Smaller, more closely spaced bundles near the edge give strength.', 'حزم أصغر وأكثر تقارباً قرب الحافة تعطي الساق قوة.', 'Bundles get smaller and denser toward the outside.', 'الحزم بتصغر وتتزاحم ناحية الخارج.', 36, 80, ['peripheral bundles']),
      pin('epidermis-rim', 'Epidermis and outer rim', 'البشرة والحافة الخارجية', 'Protective outer layer of the stem, backed by a band of thick-walled cells.', 'طبقة خارجية واقية للساق، وتحتها شريط من خلايا سميكة الجدار.', 'The outline at the bottom of the photo is the stem surface.', 'الحد السفلي في الصورة هو سطح الساق.', 50, 88, ['epidermis']),
    ],
  }),
  make({
    id: 'slide-ascaris', category: 'anatomy',
    title: { en: 'Ascaris (female roundworm), cross-section', ar: 'مقطع عرضي في الأسكارس (أنثى الدودة الأسطوانية)' },
    shortTitle: { en: 'Ascaris', ar: 'الأسكارس' },
    summary: { en: 'Body wall, intestine and the coiled reproductive tubes of a nematode.', ar: 'جدار الجسم والأمعاء والأنابيب التناسلية الملتفة في دودة خيطية.' },
    what: { en: 'giant roundworm, transverse section', ar: 'مقطع مستعرض في الدودة الأسطوانية العملاقة' },
    photo: photo('ascaris-cross-section', 'Giant roundworm (265 11) Cross-section.jpg', 'Giant_roundworm_(265_11)_Cross-section.jpg'),
    structures: [
      pin('body-wall', 'Body wall (cuticle, epidermis, muscle layer)', 'جدار الجسم (كيوتكل وبشرة وطبقة عضلية)', 'Outer cuticle over a layer of longitudinal muscle gives the worm its shape and movement.', 'كيوتكل خارجي فوق طبقة عضلات طولية يعطي الدودة شكلها وحركتها.', 'Only longitudinal muscle: the worm bends but does not shorten.', 'عضلات طولية بس: الدودة بتتلوى لكن مش بتقصر.', 91, 58, ['body wall', 'muscle layer', 'cuticle']),
      pin('uterus', 'Uterus (filled with eggs)', 'الرحم (مليان بيض)', 'Stores and carries the fertilised eggs.', 'يخزّن البيض المخصّب وينقله.', 'Two large uterine sections are cut here; they appear only in the female.', 'مقطعان كبيران للرحم؛ بيظهروا في الأنثى بس.', 25, 50, ['uterus']),
      pin('ovary', 'Ovary / oviduct (coiled tubes cut across)', 'المبيض / قناة البيض (أنابيب ملتفة)', 'Coiled reproductive tubes that produce and carry the eggs.', 'أنابيب تناسلية ملتفة تنتج البيض وتنقله.', 'The round sections with a radial pattern are the coiled tubes seen in cross-section.', 'المقاطع المستديرة ذات النمط الشعاعي هي الأنابيب الملتفة مقطوعة عرضياً.', 67, 45, ['ovary', 'oviduct']),
      pin('intestine', 'Intestine (collapsed tube)', 'الأمعاء (أنبوب منطبق)', 'A straight tube lined by a single layer of cells digests and absorbs food.', 'أنبوب مستقيم مبطّن بطبقة خلايا واحدة يهضم ويمتص الغذاء.', 'The intestine here is flattened and folded into a Y-shaped ribbon.', 'الأمعاء هنا مفرطحة وملفوفة على شكل شريط يشبه Y.', 52, 65, ['intestine', 'gut']),
    ],
  }),
  make({
    id: 'slide-pine-needle', category: 'botany',
    title: { en: 'Pine needle (Pinus), cross-section', ar: 'مقطع عرضي في إبرة الصنوبر' },
    shortTitle: { en: 'Pine needle', ar: 'إبرة الصنوبر' },
    summary: { en: 'Xerophytic leaf: thick outer wall, resin canals, endodermis and central vascular tissue.', ar: 'ورقة نبات جفافي: جدار خارجي سميك وقنوات راتنجية وبشرة داخلية ونسيج وعائي مركزي.' },
    what: { en: 'Pinus nigra needle, transverse section', ar: 'مقطع مستعرض في إبرة Pinus nigra' },
    photo: photo('pine-needle-cross-section', 'Pinus nigra needle (255 22) Needle cross section.jpg', 'Pinus_nigra_needle_(255_22)_Needle_cross_section.jpg'),
    structures: [
      pin('epidermis', 'Epidermis and hypodermis', 'البشرة وتحت البشرة', 'Thick-walled outer layers reduce water loss.', 'طبقات خارجية سميكة الجدار تقلل فقد الماء.', 'Dark, thick outer wall: a xerophyte feature.', 'جدار خارجي غامق وسميك: صفة من صفات النباتات الجفافية.', 12, 40, ['epidermis', 'hypodermis']),
      pin('mesophyll', 'Mesophyll', 'النسيج المتوسط (الميزوفيل)', 'Photosynthetic tissue that fills the needle around the centre.', 'نسيج البناء الضوئي الذي يملأ الإبرة حول المركز.', 'In pine the cell walls are folded inward.', 'في الصنوبر جدران الخلايا مطوية للداخل.', 70, 61, ['mesophyll']),
      pin('resin-canal', 'Resin canal', 'قناة راتنجية', 'Duct lined by secretory cells that makes and holds resin.', 'قناة مبطّنة بخلايا مفرزة تصنع الراتنج وتخزّنه.', 'Appears as a round opening ringed by small cells.', 'تظهر كفتحة مستديرة تحيط بها خلايا صغيرة.', 75, 39, ['resin duct', 'resin canals']),
      pin('endodermis', 'Endodermis', 'البشرة الداخلية (الإندوديرمس)', 'Single layer of cells that surrounds the central vascular tissue.', 'طبقة خلايا واحدة تحيط بالنسيج الوعائي المركزي.', 'It encloses the stele in the middle of the needle.', 'بتحيط بالأسطوانة الوعائية في وسط الإبرة.', 65, 51, ['endodermis']),
      pin('xylem', 'Xylem (tracheids)', 'الخشب (قصيبات)', 'Conducts water; seen as regular, square, thick-walled cells.', 'ينقل الماء؛ يظهر كخلايا منتظمة مربعة سميكة الجدار.', 'The dark, regular grid of cells in the centre.', 'شبكة الخلايا المنتظمة الغامقة في المنتصف.', 44, 38, ['xylem', 'tracheids']),
    ],
  }),
  make({
    id: 'slide-kidney', category: 'anatomy',
    title: { en: 'Kidney cortex: renal corpuscle', ar: 'قشرة الكلية: الجسيم الكلوي' },
    shortTitle: { en: 'Kidney', ar: 'الكلية' },
    summary: { en: 'Glomerulus, Bowman’s space and tubules in a section of human kidney.', ar: 'الكبيبة وحيّز بومان والأنيبيبات في مقطع كلية بشرية.' },
    what: { en: 'human kidney section', ar: 'مقطع كلية بشرية' },
    photo: photo('kidney-renal-corpuscle', 'Kidney (254 16) Human.jpg', 'Kidney_(254_16)_Human.jpg'),
    structures: [
      pin('glomerulus', 'Glomerulus', 'الكبيبة (الجلوميرولس)', 'Tuft of capillaries where blood is filtered.', 'كتلة من الشعيرات الدموية يتم فيها ترشيح الدم.', 'The round cellular mass inside the capsule.', 'الكتلة الخلوية المستديرة داخل المحفظة.', 26, 47, ['glomerulus']),
      pin('bowman-space', 'Bowman’s capsule and space', 'محفظة بومان وحيّزها', 'Cup-shaped capsule that collects the filtrate.', 'محفظة كأسية تجمع الراشح.', 'The pale crescent around the glomerulus is the capsular space.', 'الهلال الباهت حول الكبيبة هو الحيّز المحفظي.', 39, 52, ['bowman capsule', 'bowmans capsule', 'bowman space']),
      pin('tubules', 'Renal tubules (cross-sections)', 'الأنيبيبات الكلوية (مقاطع عرضية)', 'Tubules modify the filtrate; their lumens appear as pale spaces.', 'الأنيبيبات تعدّل الراشح، وتجاويفها تظهر كفراغات باهتة.', 'Many tubule profiles surround the corpuscles in the cortex.', 'مقاطع كتير للأنيبيبات حوالين الجسيمات في القشرة.', 14, 12, ['tubules', 'proximal tubule', 'convoluted tubule']),
      pin('blood-vessel', 'Blood vessels filled with red blood cells', 'أوعية دموية مليانة بكريات الدم الحمراء', 'Carry blood to and from the nephrons.', 'تنقل الدم من وإلى النيفرونات.', 'The dark red clusters are packed red blood cells.', 'التجمعات الحمراء الغامقة هي كريات دم حمراء متراصّة.', 54, 85, ['blood vessel', 'capillary']),
      pin('connective-tissue', 'Interstitial connective tissue', 'النسيج الضام البيني', 'Supports the nephrons and vessels.', 'يدعم النيفرونات والأوعية.', 'Stains green in this preparation.', 'بيتلوّن بالأخضر في هذا التحضير.', 72, 21, ['connective tissue', 'collagen']),
    ],
  }),
  make({
    id: 'slide-testis', category: 'anatomy',
    title: { en: 'Mammalian testis: seminiferous tubules', ar: 'خصية الثدييات: الأنيبيبات المنوية' },
    shortTitle: { en: 'Testis', ar: 'الخصية' },
    summary: { en: 'Tubule wall, lumen and interstitial tissue in a testis section.', ar: 'جدار الأنيبيب والتجويف والنسيج البيني في مقطع خصية.' },
    what: { en: 'mammalian testis, transverse section', ar: 'مقطع مستعرض في خصية ثديي' },
    photo: photo('testis-seminiferous-tubules', 'Testicles (26 2 11) Cross-section.jpg', 'Testicles_(26_2_11)_Cross-section.jpg'),
    structures: [
      pin('seminiferous-tubule', 'Seminiferous tubule', 'الأنيبيب المنوي', 'Coiled tube where sperm are made.', 'أنبوب ملتف تُصنع فيه الحيوانات المنوية.', 'The big round profiles in the photo are tubules cut across.', 'المقاطع المستديرة الكبيرة في الصورة هي أنيبيبات مقطوعة عرضياً.', 45, 35, ['seminiferous tubules', 'tubule']),
      pin('lumen', 'Lumen', 'التجويف', 'Central space where released cells collect.', 'الفراغ المركزي الذي تتجمع فيه الخلايا المتحررة.', 'Pale space in the middle of each tubule.', 'فراغ باهت في منتصف كل أنيبيب.', 42, 16, ['lumen']),
      pin('germinal-epithelium', 'Spermatogenic cells (germinal epithelium)', 'الخلايا المنوية (الطلائية الإنتاشية)', 'Layers of dividing and maturing germ cells inside the tubule wall.', 'طبقات من الخلايا الجنسية المنقسمة والناضجة داخل جدار الأنيبيب.', 'The dotted dark nuclei filling the tubule.', 'الأنوية الغامقة المنقطة التي تملأ الأنيبيب.', 31, 40, ['spermatogenic cells', 'germinal epithelium']),
      pin('peritubular-wall', 'Peritubular wall', 'الجدار المحيط بالأنيبيب', 'Thin fibrous layer that surrounds each tubule.', 'طبقة ليفية رقيقة تحيط بكل أنيبيب.', 'The thin pink line around the circle.', 'الخط الوردي الرفيع حوالين الدائرة.', 27, 28, ['basement membrane', 'tunica propria']),
      pin('interstitial', 'Interstitial tissue', 'النسيج البيني', 'Fills the space between tubules, with blood vessels and hormone-producing cells.', 'يملأ الفراغ بين الأنيبيبات وفيه أوعية دموية وخلايا مفرزة للهرمونات.', 'Pale tissue between neighbouring tubules.', 'نسيج باهت بين الأنيبيبات المتجاورة.', 17, 30, ['interstitial cells', 'leydig cells']),
    ],
  }),
];
