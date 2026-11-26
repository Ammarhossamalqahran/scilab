import type { DiagramStructure, ScientificDiagram, SlidePhoto } from './diagramData';
import type { Bilingual, ScientificReference } from './scientificData';
import { mediaAlias, specimenMedia } from './specimenMedia';

// Specimen schemas: labelled drawings on photographs already on the site.
// Pins are placed by eye and every schema here is marked needsReview until checked against the course atlas.
const note: Bilingual = { en: 'Pin position is approximate. Check it against your atlas.', ar: 'مكان العلامة تقريبي. راجعه مع الأطلس.' };

const pin = (id: string, en: string, ar: string, fEn: string, fAr: string, x: number, y: number): DiagramStructure => ({
  id, name: { en, ar }, function: { en: fEn, ar: fAr }, note, x, y, aliases: [en.toLowerCase(), ar],
});

const make = (specimenId: string, category: ScientificDiagram['category'], title: Bilingual, shortTitle: Bilingual, summary: Bilingual, structures: DiagramStructure[]): ScientificDiagram => {
  const media = specimenMedia[mediaAlias[specimenId] ?? specimenId];
  const photo: SlidePhoto = { src: media.src, title: media.title, author: media.author, license: media.license, sourceUrl: media.sourceUrl };
  const reference: ScientificReference = { id: `commons-schema-${specimenId}`, title: media.title, provider: 'Wikimedia Commons', url: media.sourceUrl, supports: 'Source photograph, author and licence for this schema.' };
  return {
    id: `schema-${specimenId}`, category, title, shortTitle, summary, structures, photo, references: [reference], needsReview: true,
    disclaimer: {
      en: 'Needs review: labelled by eye on a real photomicrograph. Each pin marks the structure nearest to it; check the labels against your course atlas and lab manual.',
      ar: 'تحتاج مراجعة: التسميات موضوعة بالعين على صورة مجهرية حقيقية. كل علامة تشير لأقرب تركيب ليها؛ راجع التسميات مع أطلس المادة وكتيّب المعمل.',
    },
  };
};

export const specimenSchemas3: ScientificDiagram[] = [
  make("testis-section", "anatomy", { en: "Testis, seminiferous tubules", ar: "الخصية، الأنيبيبات المنوية" }, { en: "Testis", ar: "الخصية" }, { en: "Round tubules lined by germ cells, with connective tissue between them.", ar: "أنيبيبات مستديرة مبطنة بخلايا جنسية، وبينها نسيج ضام." }, [
    pin("lumen", "Tubule lumen", "تجويف الأنبوب", "Central space where sperm are released.", "فراغ مركزي تنطلق فيه الحيوانات المنوية.", 47, 17),
    pin("germinal-epithelium", "Germinal epithelium", "الطلائية الجرثومية", "Layered cells that divide to make sperm.", "خلايا متعددة الطبقات تنقسم لتكوين الحيوانات المنوية.", 62, 52),
    pin("interstitial", "Interstitial tissue", "النسيج البيني", "Connective tissue and vessels between tubules.", "نسيج ضام ووعائي بين الأنيبيبات.", 28, 40),
  ]),
  make("renal-glomerulus", "anatomy", { en: "Renal glomerulus", ar: "الكبيبة الكلوية" }, { en: "Glomerulus", ar: "الكبيبة" }, { en: "Tuft of capillaries inside the kidney cortex, surrounded by tubules.", ar: "كتلة شعيرات دموية في قشرة الكلية تحيط بها أنيبيبات." }, [
    pin("glomerulus", "Glomerulus", "الكبيبة", "Capillary tuft that filters blood.", "كتلة شعيرات تصفي الدم.", 52, 45),
    pin("tubule", "Convoluted tubule", "أنبوب ملتف", "Reabsorbs water and salts from the filtrate.", "يعيد امتصاص الماء والأملاح من الرشيح.", 32, 63),
  ]),
  make("kidney-section", "anatomy", { en: "Kidney cortex, special stain", ar: "قشرة الكلية، صبغة خاصة" }, { en: "Kidney section", ar: "مقطع كلية" }, { en: "Glomeruli with a clear capsule space, among green-stained tubules.", ar: "كبيبات بفراغ المحفظة الواضح وسط أنيبيبات مصبوغة بالأخضر." }, [
    pin("glomerulus", "Glomerulus", "الكبيبة", "Filters blood plasma.", "تصفي بلازما الدم.", 52, 30),
    pin("capsule-space", "Capsule space", "فراغ المحفظة", "Collects the filtrate before it enters the tubule.", "يجمع الرشيح قبل دخوله الأنبوب.", 26, 33),
    pin("tubule", "Tubule", "أنبوب كلوي", "Carries and modifies the filtrate.", "ينقل الرشيح ويعدله.", 72, 45),
  ]),
  make("pine-needle", "botany", { en: "Pine needle, cross-section", ar: "إبرة الصنوبر، مقطع عرضي" }, { en: "Pine needle", ar: "إبرة الصنوبر" }, { en: "Thick epidermis, mesophyll and a central vascular region.", ar: "بشرة سميكة ونسيج وسطي ومنطقة وعائية مركزية." }, [
    pin("epidermis", "Epidermis", "البشرة", "Tough outer layer that limits water loss.", "طبقة خارجية قوية تقلل فقد الماء.", 39, 17),
    pin("mesophyll", "Mesophyll", "النسيج الوسطي", "Photosynthetic tissue.", "نسيج البناء الضوئي.", 70, 50),
    pin("vascular", "Vascular region", "المنطقة الوعائية", "Xylem and phloem in the centre.", "الخشب واللحاء في المركز.", 52, 53),
  ]),
  make("maize-stem", "botany", { en: "Maize stem, cross-section", ar: "ساق الذرة، مقطع عرضي" }, { en: "Maize stem", ar: "ساق الذرة" }, { en: "Monocot stem with scattered vascular bundles in ground tissue.", ar: "ساق ذات فلقة واحدة بحزم وعائية مبعثرة في نسيج أساسي." }, [
    pin("bundle", "Vascular bundle", "حزمة وعائية", "Carries water and sugars.", "تنقل الماء والسكريات.", 51, 20),
    pin("ground", "Ground tissue", "النسيج الأساسي", "Parenchyma that fills the stem.", "نسيج برانشيمي يملأ الساق.", 30, 34),
    pin("rind", "Peripheral bundles", "الحزم الطرفية", "Small crowded bundles near the surface give strength.", "حزم صغيرة متقاربة قرب السطح تعطي قوة.", 60, 88),
  ]),
  make("euglena-250-19", "anatomy", { en: "Euglena cells", ar: "خلايا اليوجلينا" }, { en: "Euglena", ar: "يوجلينا" }, { en: "Single-celled protists with green granules.", ar: "أوليات وحيدة الخلية بحبيبات خضراء." }, [
    pin("cell", "Cell body", "جسم الخلية", "Spindle-shaped cell covered by a flexible pellicle.", "خلية مغزلية يغطيها غلاف مرن.", 27, 50),
    pin("chloroplasts", "Green granules", "حبيبات خضراء", "Chloroplasts and storage granules.", "بلاستيدات خضراء وحبيبات تخزين.", 29, 63),
    pin("rounded-cell", "Rounded cell", "خلية مستديرة", "Euglena often round up when stressed.", "تتكور اليوجلينا غالبا عند الإجهاد.", 55, 48),
  ]),
  make("paramecium-caudatum-248-06", "anatomy", { en: "Paramecium", ar: "البراميسيوم" }, { en: "Paramecium", ar: "براميسيوم" }, { en: "Slipper-shaped ciliate swimming among debris.", ar: "أولي هدبي على شكل نعل يسبح وسط الحطام." }, [
    pin("cell", "Cell body", "جسم الخلية", "Elongated cell with a firm pellicle.", "خلية مستطيلة بغلاف ثابت.", 36, 47),
    pin("cell-edge", "Ciliated surface", "السطح الهدبي", "Cilia on the surface beat to move the cell.", "أهداب على السطح تتحرك لدفع الخلية.", 22, 60),
  ]),
  make("volvox-250-23", "anatomy", { en: "Volvox colonies", ar: "مستعمرات الفولفوكس" }, { en: "Volvox", ar: "فولفوكس" }, { en: "Hollow green spheres made of many cells.", ar: "كرات خضراء مجوفة من خلايا كثيرة." }, [
    pin("colony", "Colony", "المستعمرة", "Hollow sphere of flagellated cells.", "كرة مجوفة من خلايا سوطية.", 33, 65),
    pin("daughter", "Daughter colony", "مستعمرة بنت", "Young colony growing inside the parent.", "مستعمرة صغيرة تنمو داخل الأم.", 61, 34),
    pin("surface-cells", "Surface cells", "الخلايا السطحية", "Cells at the sphere edge.", "خلايا على حافة الكرة.", 76, 45),
  ]),
  make("daphnia-water-flea-248-29", "anatomy", { en: "Daphnia (water flea)", ar: "الدفنيا (برغوث الماء)" }, { en: "Daphnia", ar: "دفنيا" }, { en: "Transparent crustacean with a visible eye and gut.", ar: "قشري شفاف تظهر فيه العين والقناة الهضمية." }, [
    pin("eye", "Compound eye", "العين المركبة", "Detects light and movement.", "تكشف الضوء والحركة.", 19, 36),
    pin("carapace", "Carapace", "الدرع", "Transparent shell around the body.", "غطاء شفاف حول الجسم.", 27, 14),
    pin("gut", "Gut", "القناة الهضمية", "Digests food particles.", "تهضم جزيئات الغذاء.", 35, 57),
  ]),
  make("umbilical-cord-254-20", "anatomy", { en: "Umbilical cord", ar: "الحبل السري" }, { en: "Umbilical cord", ar: "الحبل السري" }, { en: "Blood vessel wall set in a jelly-like connective tissue.", ar: "جدار وعاء دموي داخل نسيج ضام هلامي." }, [
    pin("lumen", "Vessel lumen", "تجويف الوعاء", "Carries blood between mother and foetus.", "ينقل الدم بين الأم والجنين.", 39, 37),
    pin("wall", "Vessel wall", "جدار الوعاء", "Muscle layers around the lumen.", "طبقات عضلية حول التجويف.", 39, 55),
    pin("wharton", "Wharton jelly", "هلام وارتون", "Soft connective tissue that cushions the vessels.", "نسيج ضام لين يحمي الأوعية.", 75, 60),
  ]),
  make("seminal-vesicle", "anatomy", { en: "Seminal vesicle", ar: "الحويصلة المنوية" }, { en: "Seminal vesicle", ar: "حويصلة منوية" }, { en: "Folded mucosa around an irregular lumen.", ar: "مخاطية مطوية حول تجويف غير منتظم." }, [
    pin("lumen", "Lumen", "التجويف", "Holds the gland secretion.", "يحتوي إفراز الغدة.", 55, 45),
    pin("folds", "Mucosal folds", "الطيات المخاطية", "Increase surface for secretion.", "تزيد مساحة الإفراز.", 40, 38),
    pin("muscle", "Muscular wall", "الجدار العضلي", "Smooth muscle that expels the secretion.", "عضلات ملساء تدفع الإفراز.", 73, 68),
  ]),
  make("circumvallate-papilla", "anatomy", { en: "Circumvallate papilla", ar: "الحليمة المحاطة بالأخدود" }, { en: "Circumvallate papilla", ar: "حليمة كأسية" }, { en: "Tongue papilla surrounded by a deep trench.", ar: "حليمة لسانية يحيط بها أخدود عميق." }, [
    pin("papilla", "Papilla", "الحليمة", "Raised dome of the tongue surface.", "قبة بارزة على سطح اللسان.", 36, 50),
    pin("trench", "Trench", "الأخدود", "Furrow around the papilla where taste buds open.", "أخدود حول الحليمة تنفتح فيه براعم التذوق.", 68, 33),
  ]),
  make("stem-collenchyma-100x", "botany", { en: "Collenchyma in a stem", ar: "الكولنشيما في ساق" }, { en: "Collenchyma", ar: "كولنشيما" }, { en: "Cells with unevenly thick walls that support young stems.", ar: "خلايا ذات جدر سميكة غير منتظمة تدعم السيقان الصغيرة." }, [
    pin("wall", "Thickened wall", "الجدار السميك", "Brown-stained cellulose-rich corner thickening.", "سماكة غنية بالسليلوز مصبوغة بالبني.", 40, 60),
    pin("lumen", "Cell lumen", "تجويف الخلية", "Large open space of the cell.", "فراغ الخلية الواسع.", 75, 28),
  ]),
  make("nasal-mucosa-cross-section", "anatomy", { en: "Nasal mucosa", ar: "مخاطية الأنف" }, { en: "Nasal mucosa", ar: "مخاطية الأنف" }, { en: "Epithelium over connective tissue with glands.", ar: "طلائية فوق نسيج ضام به غدد." }, [
    pin("epithelium", "Epithelium", "الطلائية", "Lining layer that traps particles.", "بطانة تحبس الجسيمات.", 40, 12),
    pin("lamina", "Lamina propria", "الصفيحة الخاصة", "Connective tissue under the lining.", "نسيج ضام تحت البطانة.", 65, 25),
    pin("gland", "Gland duct", "قناة غدة", "Carries mucus to the surface.", "تنقل المخاط إلى السطح.", 55, 75),
  ]),
  make("coleus-stem-tip-longitudinal-section", "botany", { en: "Coleus stem tip", ar: "قمة ساق الكوليوس" }, { en: "Stem tip", ar: "قمة الساق" }, { en: "Growing tip with young leaves folded over it.", ar: "قمة نامية تغطيها أوراق صغيرة." }, [
    pin("meristem", "Apical meristem", "القمة المرستيمية", "Dividing cells that make new stem tissue.", "خلايا منقسمة تكوّن أنسجة جديدة.", 50, 42),
    pin("primordium", "Leaf primordium", "بدايات الورقة", "Young leaf starting to grow.", "ورقة صغيرة تبدأ في النمو.", 38, 30),
    pin("stem", "Older stem tissue", "نسيج الساق الأكبر", "Cells that have grown and differentiated.", "خلايا نمت وتخصصت.", 50, 80),
  ]),
  make("insect-compound-eye-250-07", "anatomy", { en: "Insect compound eye", ar: "العين المركبة للحشرة" }, { en: "Compound eye", ar: "عين مركبة" }, { en: "Surface made of many small hexagonal lenses.", ar: "سطح من عدسات صغيرة سداسية كثيرة." }, [
    pin("facet", "Facet lens", "عدسة وجه", "Each lens forms one ommatidium.", "كل عدسة تكوّن وحدة إبصار.", 17, 21),
    pin("boundary", "Facet boundary", "حد العدسات", "Packed edges between neighbouring lenses.", "حواف متراصة بين العدسات.", 33, 40),
  ]),
  make("flea-251-01", "anatomy", { en: "Flea, whole mount", ar: "برغوث، تحضير كامل" }, { en: "Flea", ar: "برغوث" }, { en: "Flattened insect with strong hind legs.", ar: "حشرة مسطحة بأرجل خلفية قوية." }, [
    pin("head", "Head", "الرأس", "Carries the eye and mouthparts.", "يحمل العين وأجزاء الفم.", 83, 23),
    pin("thorax", "Thorax", "الصدر", "Bears the three pairs of legs.", "يحمل أزواج الأرجل الثلاثة.", 58, 24),
    pin("abdomen", "Abdomen", "البطن", "Contains gut and reproductive organs.", "يحتوي القناة الهضمية والأعضاء التناسلية.", 28, 30),
    pin("leg", "Hind leg", "الرجل الخلفية", "Long leg adapted for jumping.", "رجل طويلة متكيفة للقفز.", 38, 82),
  ]),
  make("head-louse-250-17", "anatomy", { en: "Head louse, whole mount", ar: "قملة الرأس، تحضير كامل" }, { en: "Head louse", ar: "قملة الرأس" }, { en: "Wingless insect with claws for gripping hair.", ar: "حشرة بلا أجنحة بمخالب للتشبث بالشعر." }, [
    pin("head", "Head with antennae", "الرأس والقرون", "Sensory antennae and mouthparts.", "قرون استشعار وأجزاء الفم.", 14, 42),
    pin("thorax", "Thorax", "الصدر", "Carries the three leg pairs.", "يحمل أزواج الأرجل الثلاثة.", 28, 45),
    pin("abdomen", "Abdomen", "البطن", "Segmented rear part of the body.", "الجزء الخلفي المقسم من الجسم.", 65, 50),
    pin("claw", "Clawed leg", "رجل بمخلب", "Claw grips hair shafts.", "المخلب يتشبث بساق الشعرة.", 22, 18),
  ]),
  make("ascaris-section", "anatomy", { en: "Ascaris, cross-section", ar: "الأسكارس، مقطع عرضي" }, { en: "Ascaris section", ar: "مقطع أسكارس" }, { en: "Roundworm body with wall, gut and reproductive tubes.", ar: "جسم دودة اسطوانية بجدار وقناة هضمية وأنابيب تناسلية." }, [
    pin("body-wall", "Body wall", "جدار الجسم", "Cuticle and muscle layer.", "كيوتيكل وطبقة عضلية.", 95, 35),
    pin("intestine", "Intestine", "الأمعاء", "Flattened digestive tube.", "أنبوب هضمي مفلطح.", 63, 57),
    pin("uterus", "Uterus", "الرحم", "Large granular tube full of eggs.", "أنبوب كبير حبيبي مليء بالبيض.", 25, 50),
    pin("oviduct", "Oviduct sections", "قطاعات قناة البيض", "Coiled reproductive tube cut across.", "أنبوب تناسلي ملتف مقطوع عرضيا.", 47, 12),
  ]),
  make("bird-feather-248-20", "anatomy", { en: "Bird feather", ar: "ريشة طائر" }, { en: "Bird feather", ar: "ريشة" }, { en: "Parallel barbs with fine barbules.", ar: "أشواك متوازية بأشيبات دقيقة." }, [
    pin("barb", "Barb", "شوكة الريشة", "Branch from the shaft that forms the vane.", "فرع من الساق يكوّن الصفيحة.", 65, 35),
    pin("barbules", "Barbules", "الأشيبات", "Tiny hooks that lock barbs together.", "خطافات دقيقة تربط الأشواك.", 70, 75),
  ]),
];
