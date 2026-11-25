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

export const specimenSchemas6: ScientificDiagram[] = [
  make("human-placenta-254-17", "anatomy", { en: "Placenta, chorionic villi", ar: "المشيمة، الزغابات المشيمائية" }, { en: "Placenta", ar: "المشيمة" }, { en: "Cut villi sit in blood-filled spaces.", ar: "زغابات مقطوعة تحيط بها فراغات مليئة بالدم." }, [
    pin("villus", "Chorionic villus", "زغابة مشيمائية", "Branch of fetal tissue where exchange happens.", "فرع من نسيج الجنين يحدث فيه التبادل.", 53, 32),
    pin("villus2", "Villus in section", "زغابة في مقطع", "Rounded cut through another villus.", "مقطع مستدير في زغابة أخرى.", 40, 63),
    pin("troph", "Trophoblast layer", "طبقة الأرومة الغاذية", "Dark outer cells covering the villus.", "خلايا خارجية داكنة تغطي الزغابة.", 75, 22),
    pin("space", "Intervillous space", "الحيز بين الزغابات", "Space around the villi that holds maternal blood.", "حيز حول الزغابات يحمل دم الأم.", 24, 10),
  ]),
  make("large-intestine-254-15", "anatomy", { en: "Large intestine wall", ar: "جدار الأمعاء الغليظة" }, { en: "Large intestine", ar: "الأمعاء الغليظة" }, { en: "Long straight crypts without villi.", ar: "غدد معوية مستقيمة طويلة بلا زغابات." }, [
    pin("crypt", "Intestinal crypt", "غدة معوية", "Straight gland lined by absorptive and goblet cells.", "غدة مستقيمة بطانتها خلايا ماصة وكأسية.", 88, 18),
    pin("crypt2", "Crypts in section", "غدد في مقطع", "Crypts cut along their length.", "غدد مقطوعة بطولها.", 22, 85),
    pin("lamina", "Lamina propria", "الصفيحة الخاصة", "Loose connective tissue between the crypts.", "نسيج ضام رخو بين الغدد.", 48, 24),
    pin("vessel", "Blood vessel", "وعاء دموي", "Vessel containing red cells.", "وعاء يحتوي كريات حمراء.", 63, 58),
  ]),
  make("human-tongue-254-12", "anatomy", { en: "Tongue, surface and papillae", ar: "اللسان، السطح والحليمات" }, { en: "Tongue", ar: "اللسان" }, { en: "Thick epithelium over connective tissue papillae.", ar: "ظهارة سميكة فوق حليمات من النسيج الضام." }, [
    pin("epi", "Surface epithelium", "الظهارة السطحية", "Thick stratified layer with a keratinised surface.", "طبقة طبقية سميكة بسطح متقرن.", 60, 62),
    pin("papilla", "Connective tissue papilla", "حليمة نسيج ضام", "Core of the papilla projecting upward.", "لب الحليمة البارز للأعلى.", 42, 43),
    pin("lp", "Lamina propria", "الصفيحة الخاصة", "Connective tissue under the epithelium.", "نسيج ضام تحت الظهارة.", 42, 15),
    pin("lumen", "Oral cavity side", "جهة تجويف الفم", "Free surface of the tongue.", "السطح الحر للسان.", 53, 94),
  ]),
  make("thymus-265-25", "anatomy", { en: "Thymus", ar: "الغدة الزعترية" }, { en: "Thymus", ar: "الزعترية" }, { en: "Dense lymphocytes with Hassall corpuscles.", ar: "خلايا ليمفاوية كثيفة مع أجسام هاسل." }, [
    pin("hassall", "Hassall corpuscle", "جسم هاسل", "Rounded body of flattened epithelial cells.", "جسم مستدير من خلايا ظهارية مسطحة.", 45, 47),
    pin("hassall2", "Hassall corpuscle", "جسم هاسل", "Another corpuscle near the top right.", "جسم آخر قرب أعلى اليمين.", 87, 17),
    pin("cortex", "Densely stained lymphocytes", "خلايا ليمفاوية كثيفة الصبغ", "Crowded small T cell precursors.", "سلائف خلايا تائية صغيرة متراصة.", 65, 30),
    pin("septum", "Connective tissue septum", "حاجز نسيج ضام", "Pale band dividing the lobules.", "شريط شاحب يقسم الفصيصات.", 30, 70),
  ]),
  make("lung-265-24", "anatomy", { en: "Lung, alveoli and bronchiole", ar: "الرئة، الحويصلات والقصيبة" }, { en: "Lung", ar: "الرئة" }, { en: "Thin-walled air spaces beside an airway.", ar: "فراغات هوائية رقيقة الجدار بجوار مجرى هوائي." }, [
    pin("alv", "Alveolus", "حويصلة هوائية", "Thin-walled air sac for gas exchange.", "كيس هوائي رقيق الجدار لتبادل الغازات.", 65, 50),
    pin("alv2", "Alveolar space", "حيز حويصلي", "Large air space in section.", "حيز هوائي كبير في المقطع.", 86, 66),
    pin("lumen", "Bronchiole lumen", "تجويف القصيبة", "Air passage in the upper left.", "ممر الهواء في أعلى اليسار.", 16, 10),
    pin("wall", "Airway wall", "جدار المجرى الهوائي", "Connective tissue and muscle around the lumen.", "نسيج ضام وعضل حول التجويف.", 14, 35),
  ]),
  make("earthworm-section-265-14", "anatomy", { en: "Earthworm, cross section", ar: "الدودة الأرضية، مقطع عرضي" }, { en: "Earthworm", ar: "دودة الأرض" }, { en: "Body wall, gut and coelom in one ring.", ar: "جدار الجسم والأمعاء والتجويف الجسمي في حلقة." }, [
    pin("wall", "Body wall muscle", "عضلات جدار الجسم", "Radial muscle layer under the skin.", "طبقة عضلية تحت الجلد.", 10, 43),
    pin("epi", "Outer body surface", "سطح الجسم الخارجي", "Cuticle and epidermis form the skin.", "الجليد والبشرة تكوّنان الجلد.", 50, 5),
    pin("gutwall", "Gut wall", "جدار القناة الهضمية", "Dark folded ring around the gut.", "حلقة داكنة مطوية حول القناة الهضمية.", 51, 33),
    pin("lumen", "Gut lumen", "تجويف القناة الهضمية", "Central space of the gut.", "الحيز المركزي للقناة الهضمية.", 51, 45),
    pin("coelom", "Coelom", "التجويف الجسمي", "Fluid space between gut and body wall.", "حيز سائل بين الأمعاء وجدار الجسم.", 30, 58),
  ]),
  make("leech-section", "anatomy", { en: "Leech, cross section", ar: "العلقة، مقطع عرضي" }, { en: "Leech", ar: "العلقة" }, { en: "Solid body with sinuses and muscle.", ar: "جسم صلب فيه جيوب وعضلات." }, [
    pin("wall", "Body wall", "جدار الجسم", "Skin and muscle layers around the body.", "الجلد وطبقات العضل حول الجسم.", 57, 7),
    pin("sinus", "Sinus", "جيب", "Round cavity in the soft tissue.", "تجويف مستدير في النسيج اللين.", 25, 57),
    pin("sinus2", "Sinus", "جيب", "Another round cavity near the centre.", "تجويف مستدير آخر قرب المركز.", 51, 60),
    pin("tissue", "Muscle and connective tissue", "عضل ونسيج ضام", "Fills the space between organs.", "يملأ المساحة بين الأعضاء.", 80, 45),
  ]),
  make("duodenum-254-14", "anatomy", { en: "Duodenum wall", ar: "جدار الاثني عشر" }, { en: "Duodenum", ar: "الاثنا عشر" }, { en: "Villi above and glands below.", ar: "زغابات في الأعلى وغدد في الأسفل." }, [
    pin("villus", "Villus", "زغابة", "Finger-like fold of the lining.", "طية إصبعية من البطانة.", 46, 12),
    pin("glands", "Intestinal glands", "الغدد المعوية", "Dark tubular glands packed together.", "غدد أنبوبية داكنة متراصة.", 78, 70),
    pin("sub", "Submucosa", "تحت المخاطية", "Pale fibrous layer under the glands.", "طبقة ليفية شاحبة تحت الغدد.", 18, 45),
    pin("lumen", "Lumen", "التجويف", "Open space between the villi.", "الحيز المفتوح بين الزغابات.", 58, 30),
  ]),
  make("human-skin-with-sweat-glands-40x", "anatomy", { en: "Skin, epidermis and dermis", ar: "الجلد، البشرة والأدمة" }, { en: "Skin", ar: "الجلد" }, { en: "Dark epidermis on a fibrous dermis.", ar: "بشرة داكنة فوق أدمة ليفية." }, [
    pin("epi", "Epidermis", "البشرة", "Dark outer layer at the top.", "الطبقة الخارجية الداكنة في الأعلى.", 55, 10),
    pin("pap", "Papillary dermis", "الأدمة الحليمية", "Fine fibres under the epidermis.", "ألياف دقيقة تحت البشرة.", 37, 28),
    pin("ret", "Reticular dermis", "الأدمة الشبكية", "Thick bundles of collagen.", "حزم سميكة من الكولاجين.", 49, 53),
    pin("duct", "Sweat gland duct", "قناة غدة عرقية", "Dark oval profile of a duct in section.", "مقطع بيضاوي داكن لقناة.", 18, 55),
    pin("duct2", "Duct in section", "قناة في مقطع", "A second cut through a duct.", "مقطع ثانٍ في قناة.", 46, 80),
  ]),
  make("hydra-cross-section-40x", "anatomy", { en: "Hydra, cross section", ar: "الهيدرا، مقطع عرضي" }, { en: "Hydra", ar: "الهيدرا" }, { en: "A ring-shaped body wall around a cavity.", ar: "جدار جسم حلقي حول تجويف." }, [
    pin("wall", "Body wall", "جدار الجسم", "Two cell layers form the ring.", "طبقتان من الخلايا تكوّنان الحلقة.", 32, 50),
    pin("cavity", "Gastrovascular cavity", "التجويف الهضمي الوعائي", "Central space where food is digested.", "الحيز المركزي حيث يهضم الغذاء.", 46, 52),
    pin("epi", "Outer layer", "الطبقة الخارجية", "The epidermis faces the water.", "البشرة تواجه الماء.", 44, 35),
  ]),
  make("tilia-woody-stem", "botany", { en: "Linden stem, wood", ar: "ساق الزيزفون، الخشب" }, { en: "Linden wood", ar: "خشب الزيزفون" }, { en: "Vessels and rays in a woody stem.", ar: "أوعية وأشعة في ساق خشبية." }, [
    pin("vessel", "Vessel", "وعاء خشبي", "Wide orange-stained conducting cell.", "خلية موصلة واسعة مصبوغة بالبرتقالي.", 41, 31),
    pin("vessel2", "Vessel", "وعاء خشبي", "Another wide vessel.", "وعاء واسع آخر.", 66, 66),
    pin("vessel3", "Vessel", "وعاء خشبي", "Vessel in the lower left.", "وعاء في أسفل اليسار.", 23, 69),
    pin("fibres", "Wood fibres", "ألياف خشبية", "Small thick-walled cells around the vessels.", "خلايا صغيرة سميكة الجدار حول الأوعية.", 50, 45),
  ]),
  make("rhizome-254-27", "botany", { en: "Rhizome, vascular bundles", ar: "الريزوم، حزم وعائية" }, { en: "Rhizome", ar: "الريزوم" }, { en: "Scattered bundles in ground tissue.", ar: "حزم متناثرة في نسيج أساسي." }, [
    pin("bundle", "Vascular bundle", "حزمة وعائية", "Bright thick-walled cells around the conducting tissue.", "خلايا لامعة سميكة الجدار حول النسيج الموصل.", 50, 30),
    pin("bundle2", "Vascular bundle", "حزمة وعائية", "Second bundle lower left.", "حزمة ثانية في أسفل اليسار.", 28, 70),
    pin("red", "Stained layer", "طبقة مصبوغة", "Red-stained line across the section.", "خط أحمر مصبوغ عبر المقطع.", 63, 38),
    pin("paren", "Ground parenchyma", "برانشيمة أساسية", "Large thin-walled storage cells.", "خلايا تخزين كبيرة رقيقة الجدار.", 85, 29),
  ]),
  make("leaf-section-255-14", "botany", { en: "Leaf section with vascular bundle", ar: "مقطع ورقة بحزمة وعائية" }, { en: "Leaf section", ar: "مقطع ورقة" }, { en: "Open cells around a small bundle.", ar: "خلايا مفتوحة حول حزمة صغيرة." }, [
    pin("bundle", "Vascular bundle", "حزمة وعائية", "Small cells carrying water and sugars.", "خلايا صغيرة تنقل الماء والسكريات.", 62, 35),
    pin("meso", "Mesophyll cells", "خلايا النسيج المتوسط", "Large rounded cells with air spaces.", "خلايا كبيرة مستديرة بينها فراغات هوائية.", 40, 50),
    pin("wall", "Dark cell wall", "جدار خلوي داكن", "Stained wall outlining a cell.", "جدار مصبوغ يحدد الخلية.", 21, 35),
  ]),
  make("human-small-intestine-265-23", "anatomy", { en: "Small intestine, villi", ar: "الأمعاء الدقيقة، الزغابات" }, { en: "Small intestine", ar: "الأمعاء الدقيقة" }, { en: "Tall villi folded into the lumen.", ar: "زغابات طويلة تبرز في التجويف." }, [
    pin("villus", "Villus", "زغابة", "Finger-like fold that increases absorption.", "طية إصبعية تزيد الامتصاص.", 12, 25),
    pin("villus2", "Villus", "زغابة", "Neighbouring villus.", "زغابة مجاورة.", 40, 25),
    pin("lumen", "Lumen", "التجويف", "Open space between villi.", "الحيز المفتوح بين الزغابات.", 54, 66),
    pin("wall", "Outer wall layers", "طبقات الجدار الخارجية", "Muscle and connective layers at the top.", "طبقات عضلية وضامة في الأعلى.", 50, 6),
  ]),
  make("human-thyroid-gland-capsule", "anatomy", { en: "Thyroid gland", ar: "الغدة الدرقية" }, { en: "Thyroid", ar: "الدرقية" }, { en: "Follicles filled with pink colloid.", ar: "جريبات ممتلئة بغروية وردية." }, [
    pin("follicle", "Follicle with colloid", "جريب فيه غروية", "Ring of cells around stored hormone.", "حلقة من الخلايا حول هرمون مخزن.", 54, 45),
    pin("follicle2", "Thyroid follicle", "جريب درقي", "Smaller follicle in section.", "جريب أصغر في المقطع.", 29, 60),
    pin("septum", "Connective septum", "حاجز ضام", "Pale band between lobules.", "شريط شاحب بين الفصيصات.", 39, 12),
    pin("capsule", "Capsule", "المحفظة", "Thin outer covering on the right edge.", "غلاف خارجي رقيق على الحافة اليمنى.", 93, 45),
  ]),
  make("human-prostate-238-13a", "anatomy", { en: "Prostate gland", ar: "غدة البروستاتا" }, { en: "Prostate", ar: "البروستاتا" }, { en: "Glands with folded lining in fibrous stroma.", ar: "غدد ببطانة مطوية في سدى ليفي." }, [
    pin("lumen", "Gland lumen", "تجويف الغدة", "Wide pale space of a gland.", "حيز شاحب واسع في غدة.", 40, 32),
    pin("epi", "Secretory epithelium", "ظهارة مفرزة", "Dark cells lining the gland.", "خلايا داكنة تبطن الغدة.", 56, 48),
    pin("stroma", "Fibromuscular stroma", "سدى ليفي عضلي", "Green-stained fibres between glands.", "ألياف خضراء بين الغدد.", 82, 20),
    pin("amyl", "Corpus amylaceum", "جسم نشوي", "Round layered secretion in the lumen.", "إفراز مستدير متراكب في التجويف.", 80, 85),
  ]),
  make("bone-section-248-12", "anatomy", { en: "Compact bone, osteons", ar: "العظم المدمج، الأوستيونات" }, { en: "Compact bone", ar: "عظم مدمج" }, { en: "Rings of lamellae around central canals.", ar: "حلقات صفائح حول قنوات مركزية." }, [
    pin("canal", "Haversian canal", "قناة هافرس", "Central canal carrying vessels.", "قناة مركزية تحمل أوعية.", 42, 41),
    pin("canal2", "Haversian canal", "قناة هافرس", "Canal of a second osteon.", "قناة أوستيون ثانٍ.", 77, 46),
    pin("lamellae", "Concentric lamellae", "صفائح متحدة المركز", "Rings of bone matrix.", "حلقات من مادة العظم.", 20, 15),
  ]),
  make("potato-tuber-248-03", "botany", { en: "Potato tuber, starch grains", ar: "درنة البطاطس، حبيبات النشا" }, { en: "Potato tuber", ar: "درنة بطاطس" }, { en: "Starch grains in polarised light.", ar: "حبيبات نشا في الضوء المستقطب." }, [
    pin("grain", "Starch grain", "حبة نشا", "Layered storage grain.", "حبة تخزين متراكبة.", 65, 32),
    pin("grain2", "Starch grain", "حبة نشا", "Grain in a cell.", "حبة داخل خلية.", 40, 44),
    pin("grain3", "Starch grains", "حبات نشا", "Group of grains near the bottom.", "مجموعة حبات قرب الأسفل.", 53, 82),
    pin("wall", "Cell wall", "جدار الخلية", "Dark line between cells.", "خط داكن بين الخلايا.", 22, 71),
  ]),
  make("pollen-grains-251-20", "botany", { en: "Pollen grains", ar: "حبوب اللقاح" }, { en: "Pollen", ar: "حبوب لقاح" }, { en: "Angular grains with a tough wall.", ar: "حبوب زاوية بجدار صلب." }, [
    pin("grain", "Pollen grain", "حبة لقاح", "One grain with a thick outer wall.", "حبة واحدة بجدار خارجي سميك.", 45, 21),
    pin("grain2", "Pollen grain", "حبة لقاح", "Grain at the lower left.", "حبة في أسفل اليسار.", 13, 70),
    pin("content", "Orange-stained content", "محتوى مصبوغ بالبرتقالي", "Stained material inside the grain.", "مادة مصبوغة داخل الحبة.", 65, 55),
  ]),
  make("human-blood-smear", "anatomy", { en: "Human blood smear", ar: "مسحة دم بشرية" }, { en: "Blood smear", ar: "مسحة دم" }, { en: "Many red cells with a few white cells.", ar: "كريات حمراء كثيرة مع قليل من البيضاء." }, [
    pin("wbc", "White blood cell", "كرية دم بيضاء", "Dark blue nucleus.", "نواة زرقاء داكنة.", 11, 49),
    pin("wbc2", "White blood cell", "كرية دم بيضاء", "Another leukocyte.", "كرية بيضاء أخرى.", 60, 40),
    pin("rbc", "Red blood cells", "كريات الدم الحمراء", "Pale round cells with no nucleus.", "خلايا مستديرة شاحبة بلا نواة.", 50, 70),
  ]),
];
