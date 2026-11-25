import type { DiagramStructure, ScientificDiagram, SlidePhoto } from './diagramData';
import type { Bilingual, ScientificReference } from './scientificData';
import { specimenMedia } from './specimenMedia';

// Specimen schemas: labelled drawings on photographs already on the site.
// Pins are placed by eye and every schema here is marked needsReview until checked against the course atlas.
const note: Bilingual = { en: 'Pin position is approximate. Check it against your atlas.', ar: 'مكان العلامة تقريبي. راجعه مع الأطلس.' };

const pin = (id: string, en: string, ar: string, fEn: string, fAr: string, x: number, y: number): DiagramStructure => ({
  id, name: { en, ar }, function: { en: fEn, ar: fAr }, note, x, y, aliases: [en.toLowerCase(), ar],
});

const make = (specimenId: string, category: ScientificDiagram['category'], title: Bilingual, shortTitle: Bilingual, summary: Bilingual, structures: DiagramStructure[]): ScientificDiagram => {
  const media = specimenMedia[specimenId];
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

export const specimenSchemas10: ScientificDiagram[] = [
  make("radiolarian-400x", "cell-biology", { en: "Radiolarian skeleton", ar: "هيكل الشعاعيات" }, { en: "Radiolarian", ar: "الشعاعيات" }, { en: "Lattice shell of silica with radiating spines.", ar: "غلاف شبكي من السيليكا بأشواك شعاعية." }, [
    pin("head", "Cephalis", "الرأس", "Small upper chamber of the shell.", "الحجرة العلوية الصغيرة للغلاف.", 50, 22),
    pin("thorax", "Thorax", "الصدر", "Middle chamber with round pores.", "حجرة وسطى بثقوب مستديرة.", 50, 40),
    pin("abdomen", "Abdomen", "البطن", "Large lower chamber.", "حجرة سفلية كبيرة.", 50, 57),
    pin("spines", "Radial spines", "أشواك شعاعية", "Fine needles at the rim.", "إبر دقيقة عند الحافة.", 22, 72),
  ]),
  make("red-onion-cells", "botany", { en: "Red onion epidermis", ar: "بشرة البصل الأحمر" }, { en: "Red onion cells", ar: "خلايا البصل الأحمر" }, { en: "Rows of cells filled with red pigment.", ar: "صفوف خلايا مملوءة بصبغة حمراء." }, [
    pin("cell", "Pigmented cell", "خلية مصبوغة", "Cell with red sap in the vacuole.", "خلية بعصارة حمراء في الفجوة.", 46, 61),
    pin("cell2", "Pigmented cell, upper right", "خلية مصبوغة أعلى اليمين", "Another pigmented cell.", "خلية مصبوغة أخرى.", 70, 40),
    pin("pale", "Unpigmented cell", "خلية غير مصبوغة", "Clear cell without red sap.", "خلية شفافة بلا عصارة حمراء.", 24, 33),
  ]),
  make("rhizopus-sporangia-black-mould", "botany", { en: "Rhizopus, sporangia", ar: "الرايزوبس، الأكياس البوغية" }, { en: "Rhizopus", ar: "الرايزوبس" }, { en: "Dark round sporangia on long stalks.", ar: "أكياس بوغية داكنة مستديرة على سيقان طويلة." }, [
    pin("spor", "Sporangium", "كيس بوغي", "Round sac holding the spores.", "كيس مستدير يحمل الأبواغ.", 45, 25),
    pin("spor2", "Sporangium, upper right", "كيس بوغي أعلى اليمين", "Another sporangium.", "كيس بوغي آخر.", 94, 19),
    pin("stalk", "Sporangiophore", "حامل الكيس البوغي", "Thin stalk that lifts the sporangium.", "ساق رفيعة ترفع الكيس البوغي.", 59, 62),
  ]),
  make("spirogyra-filaments-with-visible-nucleus", "botany", { en: "Spirogyra filaments", ar: "خيوط السبيروجيرا" }, { en: "Spirogyra", ar: "السبيروجيرا" }, { en: "Green filaments with spiral chloroplasts.", ar: "خيوط خضراء ببلاستيدات حلزونية." }, [
    pin("chl", "Spiral chloroplast", "بلاستيدة حلزونية", "Ribbon-like chloroplast wound in a spiral.", "بلاستيدة شريطية ملتفة حلزونيا.", 49, 48),
    pin("fil", "Filament", "خيط", "Chain of cells end to end.", "سلسلة خلايا متصلة طرفا بطرف.", 80, 8),
    pin("fil2", "Filament, left", "خيط يسارا", "Another filament on the left.", "خيط آخر على اليسار.", 14, 41),
  ]),
  make("spleen-h-e", "anatomy", { en: "Spleen section", ar: "مقطع الطحال" }, { en: "Spleen", ar: "الطحال" }, { en: "Whole section of spleen tissue.", ar: "مقطع كامل من نسيج الطحال." }, [
    pin("tissue", "Splenic tissue", "نسيج الطحال", "Pulp that filters blood.", "لب يرشح الدم.", 52, 50),
    pin("capsule", "Capsule edge", "حافة المحفظة", "Thin outer covering at the upper edge.", "غلاف رقيق خارجي عند الحافة العليا.", 50, 35),
  ]),
  make("stomach-tissue-light-microscopy", "anatomy", { en: "Stomach wall", ar: "جدار المعدة" }, { en: "Stomach", ar: "المعدة" }, { en: "Surface lining with gastric pits and glands.", ar: "بطانة سطحية بحفر وغدد معدية." }, [
    pin("epi", "Surface epithelium", "الظهارة السطحية", "Mucus-making layer on the surface.", "طبقة تصنع المخاط على السطح.", 55, 10),
    pin("pit", "Gastric pit", "حفرة معدية", "Pale opening of a gland.", "فتحة شاحبة لغدة.", 20, 50),
    pin("gland", "Gastric glands", "غدد معدية", "Tubes packed below the pits.", "أنابيب متراصة تحت الحفر.", 75, 75),
  ]),
  make("teased-skeletal-muscle-100x", "anatomy", { en: "Skeletal muscle, teased", ar: "عضلة هيكلية، مفرودة" }, { en: "Teased skeletal muscle", ar: "عضلة هيكلية مفرودة" }, { en: "Long pink fibres separated from each other.", ar: "ألياف وردية طويلة منفصلة عن بعضها." }, [
    pin("fibre", "Muscle fibre", "ليف عضلي", "Long striated cell.", "خلية طويلة مخططة.", 46, 45),
    pin("nuc", "Nucleus", "نواة", "Dark nucleus at the fibre edge.", "نواة داكنة عند حافة الليف.", 39, 33),
    pin("space", "Space between fibres", "حيز بين الألياف", "Gap made by teasing.", "فجوة نتجت عن الفرد.", 58, 70),
  ]),
  make("thick-skin-epidermis-100x", "anatomy", { en: "Thick skin, epidermis", ar: "الجلد السميك، البشرة" }, { en: "Thick skin", ar: "الجلد السميك" }, { en: "Layers from the dead surface to the basal cells.", ar: "طبقات من السطح الميت إلى الخلايا القاعدية." }, [
    pin("corneum", "Stratum corneum", "الطبقة المتقرنة", "Dead flattened cells at the surface.", "خلايا ميتة مسطحة على السطح.", 53, 15),
    pin("gran", "Stratum granulosum", "الطبقة الحبيبية", "Cells with dark granules.", "خلايا بحبيبات داكنة.", 35, 25),
    pin("spin", "Stratum spinosum", "الطبقة الشوكية", "Thick layer joined by spiny bridges.", "طبقة سميكة متصلة بجسور شوكية.", 50, 45),
    pin("basal", "Stratum basale", "الطبقة القاعدية", "Single layer of dividing cells.", "طبقة واحدة من خلايا منقسمة.", 68, 75),
  ]),
  make("tongue-h-e", "anatomy", { en: "Tongue, section", ar: "اللسان، مقطع" }, { en: "Tongue", ar: "اللسان" }, { en: "Papillae over connective tissue and muscle.", ar: "حليمات فوق نسيج ضام وعضلات." }, [
    pin("papillae", "Papillae", "حليمات", "Small projections of the surface.", "نتوءات صغيرة على السطح.", 60, 22),
    pin("epi", "Epithelium", "الظهارة", "Thick stratified surface layer.", "طبقة سطحية سميكة متعددة الطبقات.", 30, 32),
    pin("lp", "Lamina propria", "الصفيحة الخاصة", "Pale connective tissue below.", "نسيج ضام شاحب تحتها.", 60, 50),
    pin("muscle", "Muscle", "عضلة", "Pink bundles of tongue muscle.", "حزم وردية من عضلات اللسان.", 46, 80),
  ]),
  make("trachea-epithelium-h-e-400x", "anatomy", { en: "Trachea, epithelium", ar: "القصبة الهوائية، الظهارة" }, { en: "Tracheal epithelium", ar: "ظهارة القصبة الهوائية" }, { en: "Tall lining cells above a basement layer.", ar: "خلايا بطانة طويلة فوق طبقة قاعدية." }, [
    pin("cilia", "Ciliated surface", "سطح مهدّب", "Top edge with cilia.", "الحافة العليا ذات الأهداب.", 35, 24),
    pin("cells", "Epithelial cells", "خلايا ظهارية", "Tall cells with oval nuclei.", "خلايا طويلة بأنوية بيضاوية.", 55, 45),
    pin("lp", "Basement and lamina propria", "الغشاء القاعدي والصفيحة الخاصة", "Tissue under the lining.", "نسيج تحت البطانة.", 40, 70),
  ]),
  make("trichinella-spiralis-40x-objective", "anatomy", { en: "Trichinella in muscle", ar: "التريكينيلا في العضلة" }, { en: "Trichinella", ar: "التريكينيلا" }, { en: "Coiled larva inside a cyst in muscle.", ar: "يرقة ملتفة داخل كيس في عضلة." }, [
    pin("larva", "Coiled larva", "يرقة ملتفة", "Worm curled inside the cyst.", "دودة ملتفة داخل الكيس.", 46, 62),
    pin("cyst", "Cyst wall", "جدار الكيس", "Capsule around the larva.", "محفظة حول اليرقة.", 30, 25),
    pin("muscle", "Muscle fibre", "ليف عضلي", "Red muscle tissue around the cyst.", "نسيج عضلي أحمر حول الكيس.", 85, 8),
  ]),
  make("turtle-red-blood-cells", "cell-biology", { en: "Turtle red blood cells", ar: "كريات دم السلحفاة الحمراء" }, { en: "Nucleated red cells", ar: "كريات حمراء ذات نواة" }, { en: "Oval red cells that keep their nucleus.", ar: "كريات حمراء بيضاوية تحتفظ بنواتها." }, [
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Oval cell with a dark central nucleus.", "خلية بيضاوية بنواة مركزية داكنة.", 37, 33),
    pin("rbc2", "Red blood cell, centre", "كرية دم حمراء وسط", "Another nucleated cell.", "كرية أخرى ذات نواة.", 52, 66),
    pin("rbc3", "Red blood cell, lower left", "كرية دم حمراء أسفل اليسار", "Cell near the lower left.", "كرية قرب الأسفل يسارا.", 20, 80),
  ]),
  make("vicia-root-nodule-cross-section", "botany", { en: "Root nodule, cross section", ar: "عقدة جذرية، مقطع عرضي" }, { en: "Root nodule", ar: "العقدة الجذرية" }, { en: "Oval nodule with a central zone of bacteria.", ar: "عقدة بيضاوية بمنطقة مركزية فيها بكتيريا." }, [
    pin("zone", "Infected zone", "المنطقة المصابة", "Centre filled with nitrogen-fixing bacteria.", "المركز مملوء ببكتيريا مثبتة للنيتروجين.", 50, 48),
    pin("cortex", "Outer cortex", "القشرة الخارجية", "Blue outer layers of the nodule.", "طبقات زرقاء خارجية للعقدة.", 14, 30),
  ]),
  make("vorticella-40x", "cell-biology", { en: "Vorticella", ar: "الفورتيسيلا" }, { en: "Vorticella", ar: "الفورتيسيلا" }, { en: "Bell-shaped ciliate on a thin stalk.", ar: "كائن مهدّب جرسي الشكل على ساق رفيعة." }, [
    pin("bell", "Bell", "الجرس", "Cell body with a ring of cilia.", "جسم الخلية بحلقة أهداب.", 75, 59),
    pin("stalk", "Stalk", "الساق", "Thin stalk that anchors the cell.", "ساق رفيعة تثبت الخلية.", 31, 49),
  ]),
  make("white-adipose-tissue-h-e", "anatomy", { en: "White adipose tissue", ar: "النسيج الدهني الأبيض" }, { en: "White fat", ar: "الدهن الأبيض" }, { en: "Large empty-looking cells separated by thin septa.", ar: "خلايا كبيرة تبدو فارغة تفصلها حواجز رقيقة." }, [
    pin("adipocyte", "Adipocyte", "خلية دهنية", "Cell filled by one lipid droplet.", "خلية تملؤها قطرة دهنية واحدة.", 35, 35),
    pin("septum", "Connective septum", "حاجز ضام", "Pink strand between fat cells.", "خيط وردي بين الخلايا الدهنية.", 69, 40),
    pin("adipocyte2", "Adipocyte, lower", "خلية دهنية سفلية", "Another fat cell below.", "خلية دهنية أخرى في الأسفل.", 39, 79),
  ]),
  make("xerophyte-leaf-cross-section-stained", "botany", { en: "Xerophyte leaf", ar: "ورقة نبات صحراوي" }, { en: "Xerophyte leaf", ar: "ورقة نبات صحراوي" }, { en: "Thick-walled cells and a vascular bundle.", ar: "خلايا سميكة الجدار وحزمة وعائية." }, [
    pin("bundle", "Vascular bundle", "حزمة وعائية", "Water and food conducting tissue.", "نسيج ناقل للماء والغذاء.", 53, 33),
    pin("scl", "Thick-walled cells", "خلايا سميكة الجدار", "Support tissue at the edge.", "نسيج داعم عند الحافة.", 22, 47),
    pin("meso", "Mesophyll", "النسيج المتوسط", "Green tissue between the layers.", "نسيج أخضر بين الطبقات.", 64, 65),
  ]),
  make("young-stem-of-hibiscus-rosa-sinensis-cross-section-400x", "botany", { en: "Young hibiscus stem", ar: "ساق الكركديه الصغيرة" }, { en: "Hibiscus stem", ar: "ساق الكركديه" }, { en: "Blue fibres, vascular tissue and pale pith.", ar: "ألياف زرقاء ونسيج وعائي ونخاع شاحب." }, [
    pin("outer", "Outer tissue", "النسيج الخارجي", "Blue-stained outer layers.", "طبقات خارجية مصبوغة بالأزرق.", 33, 14),
    pin("vasc", "Vascular tissue", "نسيج وعائي", "Purple strip of xylem and phloem.", "شريط بنفسجي من الخشب واللحاء.", 50, 35),
    pin("pith", "Pith", "النخاع", "Pale cells at the centre.", "خلايا شاحبة في المركز.", 55, 55),
    pin("fibre", "Blue fibres", "ألياف زرقاء", "Thick-walled support cells.", "خلايا داعمة سميكة الجدار.", 14, 81),
  ]),
];
