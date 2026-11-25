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

export const specimenSchemas4: ScientificDiagram[] = [
  make("hyalomma-female-tick-dorsal-view", "anatomy", { en: "Hyalomma tick, dorsal view", ar: "قراد هيالوما، منظر ظهري" }, { en: "Hyalomma tick", ar: "قراد هيالوما" }, { en: "Hard tick with a shield on its back and eight legs.", ar: "قراد صلب بدرع على الظهر وثماني أرجل." }, [
    pin("capitulum", "Capitulum (mouthparts)", "الرأس الكاذب", "Holds the piercing mouthparts used to feed on blood.", "يحمل أجزاء الفم الثاقبة للتغذي على الدم.", 50, 12),
    pin("scutum", "Scutum", "الدرع الظهري", "Hard plate behind the mouthparts.", "صفيحة صلبة خلف أجزاء الفم.", 50, 27),
    pin("idiosoma", "Idiosoma (body)", "جسم القرادة", "Main body that swells when the tick feeds.", "الجسم الرئيسي ينتفخ عند التغذية.", 50, 52),
    pin("leg", "Leg", "رجل", "Four pairs of legs, a sign of arachnids.", "أربعة أزواج من الأرجل، من صفات العنكبوتيات.", 85, 25),
  ]),
  make("cat-fur-mite-cheyletiella-parasitivorax", "anatomy", { en: "Cat fur mite, Cheyletiella", ar: "عث فرو القطط شيليتيلا" }, { en: "Fur mite", ar: "عثة الفرو" }, { en: "Mite with large hooked palps for gripping the host.", ar: "عثة بملامس كبيرة معقوفة للتشبث بالعائل." }, [
    pin("palps", "Hooked palps", "الملامس المعقوفة", "Large claw-like mouth appendages.", "زوائد فمية كبيرة تشبه المخالب.", 35, 12),
    pin("body", "Body", "الجسم", "Oval body without a hard shield.", "جسم بيضاوي بلا درع صلب.", 50, 50),
    pin("leg", "Leg", "رجل", "Walking leg.", "رجل للمشي.", 80, 65),
  ]),
  make("poultry-red-mite-dermanyssus-gallinae", "anatomy", { en: "Poultry red mite", ar: "العثة الحمراء للدواجن" }, { en: "Poultry red mite", ar: "عثة الدواجن" }, { en: "Red body full of blood and long legs.", ar: "جسم أحمر ممتلئ بالدم وأرجل طويلة." }, [
    pin("mouthparts", "Mouthparts", "أجزاء الفم", "Pierce skin to feed on blood.", "تثقب الجلد للتغذي على الدم.", 50, 17),
    pin("body", "Body", "الجسم", "Red because of the blood meal.", "أحمر بسبب وجبة الدم.", 50, 70),
    pin("leg", "Leg", "رجل", "Long walking leg.", "رجل مشي طويلة.", 82, 25),
  ]),
  make("tsetse-fly-glossina-adult-and-puparium", "anatomy", { en: "Tsetse fly and puparium", ar: "ذبابة التسي تسي والشرنقة" }, { en: "Tsetse fly", ar: "ذبابة التسي تسي" }, { en: "Adult fly next to the dark puparium case.", ar: "ذبابة بالغة بجانب غلاف الشرنقة الداكن." }, [
    pin("eye", "Compound eye", "العين المركبة", "Large eye for detecting movement.", "عين كبيرة لكشف الحركة.", 55, 10),
    pin("wing", "Wing", "الجناح", "Folded over the abdomen at rest.", "مطوي فوق البطن أثناء الراحة.", 22, 50),
    pin("puparium", "Puparium", "الشرنقة", "Hardened case in which the pupa develops.", "غلاف متصلب تنمو داخله العذراء.", 85, 35),
  ]),
  make("firebrat-thermobia-domestica-whole-mount", "anatomy", { en: "Firebrat, whole mount", ar: "سمكة الفضة (فايربرات)، تحضير كامل" }, { en: "Firebrat", ar: "فايربرات" }, { en: "Wingless insect covered with scales and tail filaments.", ar: "حشرة بلا أجنحة مغطاة بحراشف وخيوط ذيلية." }, [
    pin("body", "Scaled body", "الجسم المحرشف", "Segmented body covered in scales.", "جسم مقسم مغطى بالحراشف.", 50, 40),
    pin("leg", "Leg", "رجل", "Three pairs of legs on the thorax.", "ثلاثة أزواج من الأرجل في الصدر.", 25, 75),
    pin("cerci", "Tail filaments", "الخيوط الذيلية", "Sensory filaments at the rear.", "خيوط حسية في المؤخرة.", 92, 35),
  ]),
  make("aedes-mosquito-247-27a", "anatomy", { en: "Mosquito, whole mount", ar: "بعوضة، تحضير كامل" }, { en: "Mosquito", ar: "بعوضة" }, { en: "Slender fly with narrow wings and very long legs.", ar: "ذبابة نحيلة بجناح ضيق وأرجل طويلة جدا." }, [
    pin("head", "Head", "الرأس", "Carries antennae and the piercing proboscis.", "يحمل قرون الاستشعار والخرطوم الثاقب.", 26, 35),
    pin("wing", "Wing", "الجناح", "Narrow wing, one pair only.", "جناح ضيق، زوج واحد فقط.", 58, 18),
    pin("abdomen", "Abdomen", "البطن", "Segmented rear of the body.", "الجزء الخلفي المقسم من الجسم.", 75, 33),
    pin("leg", "Leg", "رجل", "Very long walking leg.", "رجل مشي طويلة جدا.", 60, 65),
  ]),
  make("crab-larva-265-08", "anatomy", { en: "Crab larva (zoea)", ar: "يرقة سرطان (زوييا)" }, { en: "Crab larva", ar: "يرقة سرطان" }, { en: "Transparent larva with large eyes and long spines.", ar: "يرقة شفافة بعيون كبيرة وأشواك طويلة." }, [
    pin("eye", "Compound eye", "العين المركبة", "Large dark eye.", "عين كبيرة داكنة.", 29, 21),
    pin("spine", "Curved spine", "الشوكة المنحنية", "Long spine that helps the larva float and deters predators.", "شوكة طويلة تساعد على الطفو وتردع المفترسات.", 89, 10),
    pin("abdomen", "Abdomen", "البطن", "Segmented tail end.", "النهاية الذيلية المقسمة.", 72, 65),
  ]),
  make("trichogramma-parasitoid-wasps-on-host-eggs", "anatomy", { en: "Parasitoid wasps on host eggs", ar: "دبابير طفيلية على بيض العائل" }, { en: "Parasitoid wasps", ar: "دبابير طفيلية" }, { en: "Tiny wasps laying their eggs inside larger insect eggs.", ar: "دبابير صغيرة تضع بيضها داخل بيض حشرات أكبر." }, [
    pin("host-egg", "Host egg", "بيضة العائل", "The wasp larva will feed inside it.", "تتغذى يرقة الدبور داخلها.", 50, 75),
    pin("wasp", "Wasp", "الدبور", "Adult female on the egg surface.", "أنثى بالغة على سطح البيضة.", 77, 35),
  ]),
  make("medusa-whole-mount", "anatomy", { en: "Medusa, whole mount", ar: "قنديل بحر صغير، تحضير كامل" }, { en: "Medusa", ar: "ميدوزا" }, { en: "Bell-shaped body ringed by tentacles around a central mouth stalk.", ar: "جسم جرسي تحيط به لوامس حول ساق الفم المركزية." }, [
    pin("manubrium", "Manubrium", "الخرطوم الفموي", "Central stalk bearing the mouth.", "ساق مركزية تحمل الفم.", 56, 58),
    pin("tentacle", "Tentacle", "لامسة", "Stinging arm that catches prey.", "ذراع لاسع يصطاد الفريسة.", 78, 22),
    pin("bell", "Bell", "الجرس", "Umbrella-shaped body.", "الجسم الشبيه بالمظلة.", 35, 60),
  ]),
  make("mitosis-in-onion-root-meristem-anaphase", "botany", { en: "Onion root tip, anaphase", ar: "جذر البصل، الطور الانفصالي" }, { en: "Onion root mitosis", ar: "انقسام جذر البصل" }, { en: "Rows of dividing cells; one cell is in anaphase.", ar: "صفوف من الخلايا المنقسمة، وإحداها في الطور الانفصالي." }, [
    pin("anaphase", "Anaphase cell", "خلية في الطور الانفصالي", "Sister chromatids move to opposite poles.", "الكروماتيدات الشقيقة تتحرك إلى قطبين متقابلين.", 58, 72),
    pin("nucleus", "Nucleus (interphase)", "نواة في الطور البيني", "Stained nucleus of a non-dividing cell.", "نواة مصبوغة لخلية غير منقسمة.", 35, 30),
    pin("cell-wall", "Cell wall", "جدار الخلية", "Rigid wall between neighbouring plant cells.", "جدار صلب بين الخلايا النباتية المتجاورة.", 45, 62),
  ]),
  make("diatom-chain-guinardia-sp", "botany", { en: "Diatom chain", ar: "سلسلة دياتومات" }, { en: "Diatom chain", ar: "سلسلة دياتومات" }, { en: "Cylindrical cells joined end to end, each with golden chloroplasts.", ar: "خلايا أسطوانية متصلة طرفا بطرف بها بلاستيدات ذهبية." }, [
    pin("frustule", "Frustule", "القشرة السيليكية", "Glass-like silica cell wall.", "جدار خلوي سيليكي شفاف.", 37, 60),
    pin("chloroplasts", "Chloroplasts", "البلاستيدات", "Golden-brown granules for photosynthesis.", "حبيبات بنية ذهبية للبناء الضوئي.", 55, 55),
  ]),
  make("trematode-fluke-265-18", "anatomy", { en: "Trematode (fluke), whole mount", ar: "دودة مثقوبة، تحضير كامل" }, { en: "Fluke", ar: "مثقوبة" }, { en: "Flat worm with an oral sucker at the front.", ar: "دودة مفلطحة بممص فمي في المقدمة." }, [
    pin("oral-sucker", "Oral sucker (front end)", "الممص الفموي", "Grips the host and surrounds the mouth.", "يتشبث بالعائل ويحيط بالفم.", 10, 50),
    pin("body", "Body", "الجسم", "Flat body with organs visible through it.", "جسم مفلطح تظهر أعضاؤه.", 50, 40),
    pin("dark-organs", "Dark coiled structures", "تراكيب داكنة ملتفة", "Reproductive tubes filled with eggs.", "أنابيب تناسلية مليئة بالبيض.", 65, 35),
  ]),
  make("mouse-embryos-at-the-4-8-and-16-cell-stage", "anatomy", { en: "Early mouse embryos", ar: "أجنة فأر مبكرة" }, { en: "Mouse embryos", ar: "أجنة فأر" }, { en: "Early embryos made of a few cells inside a clear coat.", ar: "أجنة مبكرة من خلايا قليلة داخل غلاف شفاف." }, [
    pin("embryo-left", "Embryo (upper left)", "جنين (أعلى اليسار)", "Ball of cells formed by cleavage.", "كرة خلايا ناتجة عن الانقسام الأولي.", 21, 31),
    pin("embryo-right", "Embryo (upper right)", "جنين (أعلى اليمين)", "Another embryo, at a similar stage.", "جنين آخر في مرحلة مشابهة.", 78, 31),
    pin("embryo-low", "Embryo (lower)", "جنين (أسفل)", "Cells are packed into a compact ball.", "الخلايا متراصة في كرة مدمجة.", 50, 64),
    pin("zona", "Zona pellucida", "المنطقة الشفافة", "Clear protective coat around each embryo.", "غلاف شفاف واقٍ حول كل جنين.", 5, 32),
  ]),
  make("echinococcus-granulosus-protoscolex-with-hooks", "anatomy", { en: "Echinococcus protoscolex", ar: "الرأس الأولي للمشوكة الحبيبية" }, { en: "Protoscolex", ar: "رأس أولي" }, { en: "Tapeworm larval head with a crown of hooks.", ar: "رأس يرقي لدودة شريطية بتاج من الخطاطيف." }, [
    pin("body", "Protoscolex body", "جسم الرأس الأولي", "Larval head pulled inward.", "رأس يرقي منطو للداخل.", 53, 60),
    pin("hooks", "Rostellar hooks", "الخطاطيف", "Ring of hooks that will grip the host gut.", "حلقة خطاطيف تتشبث بأمعاء العائل.", 50, 38),
  ]),
  make("liver-fluke-fasciola-egg", "anatomy", { en: "Liver fluke egg", ar: "بيضة الدودة الكبدية" }, { en: "Fasciola egg", ar: "بيضة فاشيولا" }, { en: "Large oval egg with a thin shell.", ar: "بيضة بيضاوية كبيرة بقشرة رقيقة." }, [
    pin("shell", "Egg shell", "قشرة البيضة", "Thin shell around the egg.", "قشرة رقيقة حول البيضة.", 42, 62),
    pin("contents", "Egg contents", "محتوى البيضة", "Granular cells inside.", "خلايا حبيبية بالداخل.", 62, 63),
  ]),
  make("pinworm-egg-urine-microscopy", "anatomy", { en: "Pinworm egg", ar: "بيضة الدودة الدبوسية" }, { en: "Pinworm egg", ar: "بيضة دبوسية" }, { en: "Small oval egg, flattened on one side.", ar: "بيضة بيضاوية صغيرة مفلطحة من جانب." }, [
    pin("shell", "Egg shell", "قشرة البيضة", "Double-layered smooth shell.", "قشرة ملساء مزدوجة.", 60, 55),
    pin("contents", "Egg contents", "محتوى البيضة", "Developing larva inside.", "يرقة تنمو بالداخل.", 46, 50),
  ]),
  make("whipworm-trichuris-trichiura-egg", "anatomy", { en: "Whipworm egg", ar: "بيضة الدودة السوطية" }, { en: "Whipworm egg", ar: "بيضة سوطية" }, { en: "Barrel-shaped brown egg with a plug at each end.", ar: "بيضة بنية برميلية الشكل بسدادة في كل طرف." }, [
    pin("shell", "Egg shell", "قشرة البيضة", "Thick brown shell.", "قشرة بنية سميكة.", 49, 48),
    pin("plug", "Polar plug", "السدادة القطبية", "Clear plug at the end of the egg.", "سدادة شفافة في طرف البيضة.", 44, 36),
  ]),
  make("hookworm-ancylostoma-caninum-egg-from-a-dog-fecal-sample", "anatomy", { en: "Hookworm egg", ar: "بيضة الدودة الخطافية" }, { en: "Hookworm egg", ar: "بيضة خطافية" }, { en: "Thin-shelled egg with early dividing cells.", ar: "بيضة بقشرة رقيقة بها خلايا منقسمة مبكرا." }, [
    pin("shell", "Egg shell", "قشرة البيضة", "Thin transparent shell.", "قشرة رقيقة شفافة.", 36, 60),
    pin("cells", "Dividing cells", "الخلايا المنقسمة", "Early cleavage cells inside the egg.", "خلايا انقسام مبكر داخل البيضة.", 46, 50),
  ]),
  make("trematode-cercaria-259-21", "anatomy", { en: "Trematode cercariae", ar: "سركاريا المثقوبات" }, { en: "Cercariae", ar: "سركاريا" }, { en: "Free-swimming larvae with oval bodies and long tails.", ar: "يرقات سابحة بأجسام بيضاوية وأذيال طويلة." }, [
    pin("body", "Cercaria body", "جسم السركاريا", "Oval body that becomes the adult fluke.", "جسم بيضاوي يتحول إلى الدودة البالغة.", 58, 41),
    pin("tail", "Tail", "الذيل", "Pushes the larva through water.", "يدفع اليرقة في الماء.", 82, 45),
    pin("second-body", "Second larva body", "جسم يرقة ثانية", "Another cercaria in the field.", "سركاريا أخرى في الحقل.", 35, 66),
  ]),
  make("elodea-leaf-cells", "botany", { en: "Elodea leaf cells", ar: "خلايا ورقة الإيلوديا" }, { en: "Elodea leaf", ar: "ورقة إيلوديا" }, { en: "Leaf one cell thick with many green chloroplasts.", ar: "ورقة بسمك خلية واحدة بها بلاستيدات خضراء كثيرة." }, [
    pin("chloroplasts", "Chloroplasts", "البلاستيدات الخضراء", "Green granules where photosynthesis happens.", "حبيبات خضراء يحدث فيها البناء الضوئي.", 62, 38),
    pin("cell-wall", "Cell wall", "جدار الخلية", "Rigid outline of each cell.", "حد صلب لكل خلية.", 45, 48),
    pin("vacuole", "Large central space", "الفراغ المركزي", "Mostly vacuole, pushing chloroplasts to the edge.", "معظمه فجوة تدفع البلاستيدات للحافة.", 60, 68),
  ]),
];
