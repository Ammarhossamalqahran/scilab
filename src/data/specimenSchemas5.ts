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

export const specimenSchemas5: ScientificDiagram[] = [
  make("bed-bug-265-17", "anatomy", { en: "Bed bug, whole mount", ar: "بقة الفراش، تحضير كامل" }, { en: "Bed bug", ar: "بقة الفراش" }, { en: "Flat oval insect covered with fine hairs.", ar: "حشرة بيضاوية مسطحة مغطاة بشعيرات دقيقة." }, [
    pin("eye", "Compound eye", "العين المركبة", "Small dark eye on the side of the head.", "عين صغيرة داكنة على جانب الرأس.", 27, 25),
    pin("antenna", "Antenna", "قرن الاستشعار", "Senses touch and smell.", "يستشعر اللمس والرائحة.", 8, 10),
    pin("thorax", "Thorax", "الصدر", "Carries the legs and wing pads.", "يحمل الأرجل وبقايا الأجنحة.", 45, 25),
    pin("abdomen", "Abdomen", "البطن", "Swells after a blood meal.", "ينتفخ بعد وجبة الدم.", 70, 50),
    pin("gut", "Blood in the gut", "دم في القناة الهضمية", "Dark digested blood.", "دم مهضوم داكن.", 92, 68),
  ]),
  make("crab-louse-250-18", "anatomy", { en: "Crab louse gripping a hair", ar: "قملة العانة تمسك بشعرة" }, { en: "Crab louse", ar: "قملة العانة" }, { en: "Stout claws clamp around a hair shaft.", ar: "مخالب قوية تطبق حول ساق الشعرة." }, [
    pin("hair", "Hair shaft", "ساق الشعرة", "Host hair held by the claws.", "شعرة العائل التي تمسكها المخالب.", 12, 70),
    pin("claw", "Clawed leg", "رجل بمخلب", "Claw and tibia form a grip.", "المخلب والظنبوب يكوّنان قبضة.", 22, 80),
    pin("gut", "Gut contents", "محتوى القناة الهضمية", "Dark blood in the digestive tract.", "دم داكن في القناة الهضمية.", 63, 60),
  ]),
  make("thrips-265-03", "anatomy", { en: "Thrips, whole mount", ar: "التربس، تحضير كامل" }, { en: "Thrips", ar: "تربس" }, { en: "Slender insect with fringed wings.", ar: "حشرة نحيلة بأجنحة مهدبة." }, [
    pin("abdomen", "Abdomen", "البطن", "Segmented rear of the body.", "الجزء الخلفي المقسم.", 27, 33),
    pin("thorax", "Thorax", "الصدر", "Carries legs and wings.", "يحمل الأرجل والأجنحة.", 63, 52),
    pin("head", "Head", "الرأس", "Rasping mouthparts and antennae.", "أجزاء فم كاشطة وقرون استشعار.", 84, 70),
    pin("wing", "Fringed wing", "جناح مهدب", "Narrow wing edged with long hairs.", "جناح ضيق حوافه شعيرات طويلة.", 86, 15),
  ]),
  make("psocopteran-booklouse-265-04", "anatomy", { en: "Booklouse (psocid)", ar: "قمل الكتب" }, { en: "Booklouse", ar: "قملة الكتب" }, { en: "Small winged insect with long antennae.", ar: "حشرة صغيرة مجنحة بقرون استشعار طويلة." }, [
    pin("head", "Head", "الرأس", "Bears eyes and antennae.", "يحمل العيون وقرون الاستشعار.", 44, 24),
    pin("thorax", "Thorax", "الصدر", "Carries wings and legs.", "يحمل الأجنحة والأرجل.", 55, 40),
    pin("abdomen", "Abdomen", "البطن", "Rounded rear body.", "الجزء الخلفي المستدير.", 54, 74),
    pin("wing", "Wing", "الجناح", "Membrane with a pattern of veins.", "غشاء بشبكة عروق.", 80, 70),
  ]),
  make("red-spider-mite-265-01", "anatomy", { en: "Red spider mite", ar: "العنكبوت الأحمر" }, { en: "Spider mite", ar: "عنكبوت أحمر" }, { en: "Plant-feeding mite with a dark gut.", ar: "عثة تتغذى على النبات بقناة هضمية داكنة." }, [
    pin("body", "Body", "الجسم", "Rounded body with fine hairs.", "جسم مستدير بشعيرات دقيقة.", 30, 47),
    pin("gut", "Gut contents", "محتوى القناة الهضمية", "Dark digested plant material.", "مادة نباتية مهضومة داكنة.", 53, 32),
    pin("mouthparts", "Mouthparts", "أجزاء الفم", "Pierce plant cells to feed.", "تثقب الخلايا النباتية للتغذية.", 80, 38),
    pin("leg", "Leg", "رجل", "Walking leg.", "رجل للمشي.", 70, 85),
  ]),
  make("itch-mite-247-32a", "anatomy", { en: "Itch mite", ar: "عثة الجرب" }, { en: "Itch mite", ar: "عثة الجرب" }, { en: "Round mite with ridged skin and short legs.", ar: "عثة مستديرة بجلد مخطط وأرجل قصيرة." }, [
    pin("body", "Body", "الجسم", "Round, soft body.", "جسم مستدير لين.", 35, 52),
    pin("ridges", "Cuticle ridges", "حروف الجليد", "Fine ridges on the body surface.", "حروف دقيقة على سطح الجسم.", 29, 32),
    pin("leg", "Leg", "رجل", "Short leg ending in a claw.", "رجل قصيرة تنتهي بمخلب.", 80, 25),
    pin("gnathosoma", "Mouthparts", "أجزاء الفم", "Front part used for feeding and burrowing.", "الجزء الأمامي للتغذية والحفر.", 87, 47),
  ]),
  make("mite-acari-265-02", "anatomy", { en: "Mite, whole mount", ar: "عثة، تحضير كامل" }, { en: "Mite", ar: "عثة" }, { en: "Small arachnid with a rounded body and four leg pairs.", ar: "عنكبوتي صغير بجسم مستدير وأربعة أزواج أرجل." }, [
    pin("spot", "Dark spot", "بقعة داكنة", "Dark body contents.", "محتويات داكنة في الجسم.", 35, 41),
    pin("body", "Body", "الجسم", "Main body of the mite.", "جسم العثة الرئيسي.", 55, 35),
    pin("leg", "Leg", "رجل", "Jointed walking leg.", "رجل مفصلية للمشي.", 74, 14),
  ]),
  make("bird-louse-265-05", "anatomy", { en: "Bird louse", ar: "قملة الطيور" }, { en: "Bird louse", ar: "قملة الطيور" }, { en: "Long flat insect with chewing mouthparts.", ar: "حشرة طويلة مسطحة بأجزاء فم قارضة." }, [
    pin("head", "Head", "الرأس", "Chewing mouthparts at the front.", "أجزاء فم قارضة في المقدمة.", 7, 9),
    pin("abdomen", "Abdomen", "البطن", "Long dark abdomen.", "بطن طويل داكن.", 28, 35),
    pin("thorax", "Thorax and legs", "الصدر والأرجل", "Legs grip feathers.", "الأرجل تتشبث بالريش.", 66, 57),
  ]),
  make("sludge-worm-265-31", "anatomy", { en: "Sludge worm (Tubifex)", ar: "دودة الحمأة (توبيفكس)" }, { en: "Sludge worm", ar: "دودة الحمأة" }, { en: "Thin segmented worm of muddy water.", ar: "دودة رفيعة مقسمة تعيش في الطين المائي." }, [
    pin("body", "Segmented body", "الجسم المقسم", "Repeated body segments.", "قطع جسم متكررة.", 45, 56),
    pin("anterior", "Anterior end", "الطرف الأمامي", "The head end with the mouth.", "طرف الرأس وفيه الفم.", 92, 71),
  ]),
  make("white-worms-265-30", "anatomy", { en: "White worm (Enchytraeus)", ar: "الدودة البيضاء" }, { en: "White worm", ar: "دودة بيضاء" }, { en: "Small segmented worm coiled in a ring.", ar: "دودة صغيرة مقسمة ملتفة في حلقة." }, [
    pin("end", "Free end", "الطرف الحر", "One end of the coiled worm.", "أحد طرفي الدودة الملتفة.", 21, 29),
    pin("body", "Coiled body", "الجسم الملتف", "Segmented body with the gut visible.", "جسم مقسم تظهر فيه القناة الهضمية.", 50, 78),
  ]),
  make("swan-mussel-glochidium-263-21", "anatomy", { en: "Mussel glochidium larva", ar: "يرقة جلوكيديوم للمحار" }, { en: "Glochidium", ar: "جلوكيديوم" }, { en: "Tiny two-valved larva that attaches to fish.", ar: "يرقة صغيرة بصمامين تتعلق بالأسماك." }, [
    pin("valve", "Shell valve", "صمام الصدفة", "One half of the bivalve shell.", "نصف صدفة ذات المصراعين.", 22, 50),
    pin("hinge", "Hinge line", "خط المفصل", "Where the two valves join.", "موضع اتصال الصمامين.", 35, 55),
    pin("second", "Second larva", "يرقة ثانية", "Another glochidium seen from the side.", "جلوكيديوم آخر من الجانب.", 80, 30),
  ]),
  make("foraminifera-251-02", "anatomy", { en: "Foraminifera shell", ar: "صدفة الفورامنيفيرا" }, { en: "Foraminifera", ar: "فورامنيفيرا" }, { en: "Coiled shell divided into chambers.", ar: "صدفة ملتفة مقسمة إلى حجرات." }, [
    pin("test", "Shell (test)", "الصدفة", "Calcium carbonate shell.", "صدفة من كربونات الكالسيوم.", 50, 42),
    pin("chamber", "Chamber", "حجرة", "Each chamber is added as the cell grows.", "تضاف كل حجرة مع نمو الخلية.", 38, 58),
    pin("aperture", "Aperture", "الفتحة", "Opening for the cell extensions.", "فتحة لامتدادات الخلية.", 58, 65),
  ]),
  make("bryozoan-statoblast-263-23", "anatomy", { en: "Bryozoan statoblast", ar: "ستاتوبلاست بريوزوا" }, { en: "Statoblast", ar: "ستاتوبلاست" }, { en: "Resting capsule ringed with hooked spines.", ar: "كبسولة سكون محاطة بأشواك معقوفة." }, [
    pin("capsule", "Central capsule", "الكبسولة المركزية", "Dark chamber that survives winter.", "حجرة داكنة تتحمل الشتاء.", 54, 49),
    pin("float", "Float ring", "حلقة الطفو", "Air-filled ring that helps it float.", "حلقة مملوءة بالهواء تساعد على الطفو.", 30, 28),
    pin("spines", "Hooked spines", "أشواك معقوفة", "Hook onto plants and animals.", "تتعلق بالنباتات والحيوانات.", 73, 22),
  ]),
  make("housefly-mouthparts-250-12", "anatomy", { en: "Housefly mouthparts", ar: "أجزاء فم الذبابة المنزلية" }, { en: "Fly mouthparts", ar: "فم الذبابة" }, { en: "Sponge-like tip of the proboscis with bristles.", ar: "طرف خرطوم شبيه بالإسفنج مع شعيرات." }, [
    pin("labellum", "Labellum", "الشفة السفلية", "Sponge-like pad that soaks up liquid food.", "وسادة إسفنجية تمتص الغذاء السائل.", 35, 40),
    pin("proboscis", "Proboscis", "الخرطوم", "Tube for feeding.", "أنبوب للتغذية.", 75, 25),
  ]),
  make("spider-leg-250-08", "anatomy", { en: "Spider leg", ar: "رجل عنكبوت" }, { en: "Spider leg", ar: "رجل عنكبوت" }, { en: "Jointed leg ending in claws.", ar: "رجل مفصلية تنتهي بمخالب." }, [
    pin("segment", "Leg segment", "قطعة الرجل", "Hollow, jointed segment.", "قطعة مفصلية مجوفة.", 48, 45),
    pin("claws", "Claws", "المخالب", "Grip surfaces and silk.", "تتشبث بالأسطح والحرير.", 78, 75),
  ]),
  make("hypersegmented-neutrophil", "anatomy", { en: "Hypersegmented neutrophil", ar: "عدلة مفرطة التفصص" }, { en: "Hypersegmented neutrophil", ar: "عدلة مفرطة التفصص" }, { en: "White cell with a nucleus of many lobes among red cells.", ar: "كرية بيضاء بنواة كثيرة الفصوص بين كريات حمراء." }, [
    pin("nucleus", "Lobed nucleus", "نواة مفصصة", "Five or more lobes is called hypersegmented.", "وجود خمسة فصوص أو أكثر يسمى فرط التفصص.", 55, 45),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Carries oxygen.", "تنقل الأكسجين.", 12, 60),
  ]),
  make("basophil-in-blood-giemsa-stain", "anatomy", { en: "Basophil in a blood smear", ar: "قعدة في مسحة دم" }, { en: "Basophil", ar: "قعدة" }, { en: "White cell packed with dark purple granules.", ar: "كرية بيضاء مليئة بحبيبات بنفسجية داكنة." }, [
    pin("basophil", "Basophil", "قعدة", "Granules hide the nucleus; involved in allergy.", "الحبيبات تخفي النواة؛ ولها دور في الحساسية.", 48, 47),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Pale round cell with a lighter centre.", "خلية شاحبة مستديرة بمركز أفتح.", 16, 23),
  ]),
  make("band-neutrophil-in-a-blood-smear-40x", "anatomy", { en: "Band neutrophil", ar: "عدلة عصوية" }, { en: "Band neutrophil", ar: "عدلة عصوية" }, { en: "Young neutrophil with a curved, unsegmented nucleus.", ar: "عدلة فتية بنواة منحنية غير مفصصة." }, [
    pin("nucleus", "Band-shaped nucleus", "نواة عصوية", "Curved band instead of separate lobes.", "شريط منحن بدل الفصوص المنفصلة.", 44, 45),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Surrounding oxygen carriers.", "ناقلات الأكسجين المحيطة.", 13, 18),
  ]),
  make("howell-jolly-bodies-in-red-blood-cells", "anatomy", { en: "Blood smear with white cells", ar: "مسحة دم بكريات بيضاء" }, { en: "Blood smear", ar: "مسحة دم" }, { en: "Many red cells with two white cells.", ar: "كريات حمراء كثيرة مع كريتين بيضاوين." }, [
    pin("wbc", "White blood cell", "كرية دم بيضاء", "Granulocyte with a lobed nucleus.", "كرية محببة بنواة مفصصة.", 50, 53),
    pin("lymphocyte", "Lymphocyte", "خلية ليمفاوية", "Round cell with one large nucleus.", "خلية مستديرة بنواة كبيرة واحدة.", 94, 47),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Pale cell without a nucleus.", "خلية شاحبة بلا نواة.", 30, 65),
  ]),
  make("red-cell-agglutination-by-cold-agglutinins", "anatomy", { en: "Red cell agglutination", ar: "تراص كريات الدم الحمراء" }, { en: "Red cell agglutination", ar: "تراص الكريات" }, { en: "Red cells stuck together in a clump.", ar: "كريات حمراء ملتصقة في كتلة." }, [
    pin("clump", "Agglutinated clump", "كتلة متراصة", "Antibodies bind cells together.", "أجسام مضادة تربط الخلايا ببعضها.", 29, 49),
    pin("single", "Single red cell", "كرية حمراء منفردة", "Normal separate cell for comparison.", "خلية طبيعية منفصلة للمقارنة.", 46, 34),
  ]),
];
