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

export const specimenSchemas2: ScientificDiagram[] = [
  make("large-vein", "anatomy", { en: "Large vein, cross-section", ar: "وريد كبير، مقطع عرضي" }, { en: "Large vein", ar: "وريد كبير" }, { en: "Thin muscular wall and a thick outer adventitia around a wide lumen.", ar: "جدار عضلي رقيق وغلاف خارجي سميك حول تجويف واسع." }, [
    pin("lumen", "Lumen", "التجويف", "Wide space that carries blood back toward the heart.", "فراغ واسع ينقل الدم عائدا للقلب.", 55, 8),
    pin("inner-wall", "Tunica intima and media", "الطبقة الباطنة والوسطى", "Thin lining and a modest muscle layer.", "بطانة رقيقة وطبقة عضلية محدودة.", 80, 13),
    pin("adventitia", "Tunica adventitia", "الطبقة الخارجية", "Thick connective tissue, the main layer of a vein wall.", "نسيج ضام سميك وهو الطبقة الرئيسية في جدار الوريد.", 40, 26),
  ]),
  make("medium-sized-artery", "anatomy", { en: "Medium-sized artery", ar: "شريان متوسط" }, { en: "Medium artery", ar: "شريان متوسط" }, { en: "Muscular artery with a thick tunica media.", ar: "شريان عضلي بطبقة وسطى سميكة." }, [
    pin("lumen", "Lumen", "التجويف", "Round channel for blood under pressure.", "قناة دائرية للدم تحت ضغط.", 51, 22),
    pin("intima", "Tunica intima", "الطبقة الباطنة", "Endothelium and the internal elastic lamina.", "بطانة الخلايا الطلائية والصفيحة المرنة الداخلية.", 53, 42),
    pin("media", "Tunica media", "الطبقة الوسطى", "Thick smooth muscle layer that controls the lumen.", "طبقة عضلية ملساء سميكة تتحكم في التجويف.", 83, 28),
    pin("adventitia", "Tunica adventitia", "الطبقة الخارجية", "Outer connective tissue anchoring the vessel.", "نسيج ضام خارجي يثبت الوعاء.", 17, 52),
  ]),
  make("thyroid-follicles-with-colloid", "anatomy", { en: "Thyroid gland follicles", ar: "حويصلات الغدة الدرقية" }, { en: "Thyroid", ar: "الغدة الدرقية" }, { en: "Follicles filled with colloid, lined by follicular cells.", ar: "حويصلات ممتلئة بالغرواء ومبطنة بخلايا حويصلية." }, [
    pin("colloid", "Colloid", "الغرواء", "Stored thyroglobulin, the reserve of thyroid hormone.", "ثيروجلوبيولين مخزن وهو مخزون هرمون الغدة.", 19, 57),
    pin("follicle", "Follicle", "حويصلة", "The structural unit of the thyroid.", "الوحدة التركيبية للغدة الدرقية.", 87, 84),
    pin("interfollicular", "Interfollicular tissue", "النسيج بين الحويصلات", "Connective tissue and capillaries between follicles.", "نسيج ضام وشعيرات بين الحويصلات.", 47, 43),
  ]),
  make("hydra-cross-section-100x", "anatomy", { en: "Hydra, cross-section", ar: "هيدرا، مقطع عرضي" }, { en: "Hydra", ar: "هيدرا" }, { en: "A two-layered tube around a gastric cavity.", ar: "أنبوب من طبقتين حول تجويف معدي." }, [
    pin("gastric-cavity", "Gastric cavity", "التجويف المعدي", "Central space where digestion starts.", "فراغ مركزي يبدأ فيه الهضم.", 48, 50),
    pin("body-wall", "Body wall", "جدار الجسم", "Epidermis and gastrodermis separated by mesoglea.", "بشرة وطبقة معدية يفصلهما الهلام الوسطي.", 24, 52),
    pin("outer-surface", "Outer surface", "السطح الخارجي", "Epidermis in contact with water.", "البشرة الملامسة للماء.", 49, 4),
  ]),
  make("monocot-stem", "botany", { en: "Monocot stem, cross-section", ar: "ساق ذات فلقة، مقطع عرضي" }, { en: "Monocot stem", ar: "ساق أحادية الفلقة" }, { en: "Vascular bundles scattered in ground tissue.", ar: "حزم وعائية متناثرة في النسيج الأساسي." }, [
    pin("large-vessel", "Large vessel", "وعاء كبير", "Xylem vessel that conducts water.", "وعاء خشب ينقل الماء.", 27, 37),
    pin("vascular-bundle", "Vascular bundle", "حزمة وعائية", "Xylem and phloem travel together.", "الخشب واللحاء يسيران معا.", 47, 52),
    pin("parenchyma", "Ground parenchyma", "نسيج برانشيمي أساسي", "Fills the stem and stores food.", "يملأ الساق ويخزن الغذاء.", 74, 13),
    pin("lignified", "Lignified tissue", "نسيج متخشب", "Stained red, gives strength.", "يظهر أحمر ويعطي صلابة.", 75, 42),
  ]),
  make("human-tonsil", "anatomy", { en: "Human tonsil", ar: "اللوزة" }, { en: "Tonsil", ar: "لوزة" }, { en: "Lymphoid tissue with dense lymphocytes.", ar: "نسيج لمفاوي بخلايا لمفاوية كثيفة." }, [
    pin("vessel", "Vessel lumen", "تجويف وعاء", "Small vessel within the tissue.", "وعاء صغير داخل النسيج.", 63, 27),
    pin("lymphocytes", "Lymphocytes", "خلايا لمفاوية", "Immune cells packed in the tissue.", "خلايا مناعية متراصة في النسيج.", 15, 55),
    pin("connective", "Connective tissue", "نسيج ضام", "Supporting stroma.", "سدى داعم.", 48, 45),
  ]),
  make("large-intestine", "anatomy", { en: "Large intestine wall", ar: "جدار الأمعاء الغليظة" }, { en: "Large intestine", ar: "أمعاء غليظة" }, { en: "Mucosa with long crypts, submucosa and muscle.", ar: "مخاطية بغدد طويلة وتحت مخاطية وعضلات." }, [
    pin("crypts", "Mucosal crypts", "غدد المخاطية", "Long glands with many goblet cells that make mucus.", "غدد طويلة بخلايا كأسية كثيرة تفرز المخاط.", 50, 10),
    pin("lamina-propria", "Lamina propria", "الصفيحة الخاصة", "Loose connective tissue under the crypts.", "نسيج ضام رخو تحت الغدد.", 30, 32),
    pin("submucosa", "Submucosa", "تحت المخاطية", "Loose layer with vessels and nerves.", "طبقة رخوة بأوعية وأعصاب.", 50, 52),
    pin("muscularis", "Muscularis externa", "الطبقة العضلية الخارجية", "Smooth muscle that moves the contents.", "عضلة ملساء تحرك المحتويات.", 50, 80),
  ]),
  make("uterus-proliferative-phase", "anatomy", { en: "Uterus, proliferative phase", ar: "الرحم، الطور التكاثري" }, { en: "Uterus", ar: "رحم" }, { en: "Thick myometrium with vessels.", ar: "طبقة عضلية سميكة بها أوعية." }, [
    pin("myometrium", "Myometrium", "الطبقة العضلية", "Thick smooth muscle layer.", "طبقة عضلية ملساء سميكة.", 60, 40),
    pin("vessels", "Blood vessels", "أوعية دموية", "Supply the muscle wall.", "تغذي الجدار العضلي.", 30, 17),
    pin("outer-layer", "Outer wall", "الجدار الخارجي", "Outer edge of the uterine wall.", "الحافة الخارجية لجدار الرحم.", 92, 50),
  ]),
  make("ileum-with-peyer-patch-azan-stain", "anatomy", { en: "Ileum with Peyer patch", ar: "لفائفي مع بقعة باير" }, { en: "Ileum", ar: "لفائفي" }, { en: "Villi, lymphoid nodules and muscle in an Azan stain.", ar: "زغابات وعقيدات لمفاوية وعضلات بصبغة آزان." }, [
    pin("villi", "Villi", "زغابات", "Finger-like folds that absorb nutrients.", "ثنيات إصبعية تمتص الغذاء.", 75, 55),
    pin("lymphoid-nodule", "Lymphoid nodule", "عقيدة لمفاوية", "Part of a Peyer patch, immune tissue.", "جزء من بقعة باير نسيج مناعي.", 25, 57),
    pin("submucosa", "Submucosa (blue)", "تحت المخاطية (أزرق)", "Connective tissue under the mucosa.", "نسيج ضام تحت المخاطية.", 20, 28),
    pin("muscularis", "Outer muscle", "العضلة الخارجية", "Smooth muscle layers.", "طبقات عضلية ملساء.", 5, 60),
  ]),
  make("mixed-salivary-gland", "anatomy", { en: "Mixed salivary gland", ar: "غدة لعابية مختلطة" }, { en: "Salivary gland", ar: "غدة لعابية" }, { en: "Lobules of acini separated by connective septa.", ar: "فصيصات من أسناخ تفصلها حواجز ضامة." }, [
    pin("lobule", "Lobule with acini", "فصيص بالأسناخ", "Clusters of secreting cells.", "تجمعات خلايا مفرزة.", 30, 25),
    pin("septum", "Connective septum", "حاجز ضام", "Separates lobules and carries ducts and vessels.", "يفصل الفصيصات ويحمل القنوات والأوعية.", 62, 42),
    pin("acini", "Acini", "أسناخ", "Where saliva is made.", "مكان تكوين اللعاب.", 20, 60),
  ]),
  make("nissl-bodies-in-neurons", "anatomy", { en: "Neurons with Nissl bodies", ar: "خلايا عصبية بأجسام نيسل" }, { en: "Nissl bodies", ar: "أجسام نيسل" }, { en: "Large neurons whose cytoplasm stains with Nissl substance.", ar: "خلايا عصبية كبيرة يصطبغ سيتوبلازمها بمادة نيسل." }, [
    pin("neuron-1", "Neuron cell body", "جسم الخلية العصبية", "Large cell with a pale nucleus and dark nucleolus.", "خلية كبيرة بنواة فاتحة ونوية داكنة.", 60, 45),
    pin("neuron-2", "Second neuron", "خلية عصبية ثانية", "Smaller neuron with Nissl bodies.", "خلية أصغر بأجسام نيسل.", 27, 52),
    pin("glia", "Glial nucleus", "نواة دبقية", "Small supporting cell nucleus.", "نواة خلية داعمة صغيرة.", 12, 12),
  ]),
  make("choroid-plexus-human", "anatomy", { en: "Choroid plexus", ar: "الضفيرة المشيمية" }, { en: "Choroid plexus", ar: "ضفيرة مشيمية" }, { en: "Folds of epithelium over vascular stroma.", ar: "ثنيات طلائية فوق سدى وعائي." }, [
    pin("epithelium", "Epithelium", "طلائية", "Cuboidal cells that make cerebrospinal fluid.", "خلايا مكعبة تنتج السائل الدماغي الشوكي.", 74, 42),
    pin("stroma", "Stroma", "السدى", "Loose connective core.", "لب ضام رخو.", 47, 72),
    pin("blood-vessels", "Blood vessels", "أوعية دموية", "Capillaries full of red cells.", "شعيرات ممتلئة بكريات حمراء.", 62, 72),
  ]),
  make("cheek-cells", "anatomy", { en: "Human cheek cells", ar: "خلايا الخد" }, { en: "Cheek cells", ar: "خلايا الخد" }, { en: "Flat epithelial cells with a visible nucleus.", ar: "خلايا طلائية مسطحة بنواة ظاهرة." }, [
    pin("nucleus", "Nucleus", "النواة", "Holds the DNA.", "تحمل الـ DNA.", 13, 25),
    pin("cytoplasm", "Cytoplasm", "السيتوبلازم", "Fills the cell around the nucleus.", "يملأ الخلية حول النواة.", 30, 45),
    pin("nucleus-2", "Another nucleus", "نواة أخرى", "Each cell has one nucleus.", "لكل خلية نواة واحدة.", 66, 45),
  ]),
  make("spirogyra-248-00", "botany", { en: "Spirogyra filaments", ar: "خيوط سبيروجيرا" }, { en: "Spirogyra", ar: "سبيروجيرا" }, { en: "Green algae in unbranched filaments with spiral chloroplasts.", ar: "طحلب أخضر بخيوط غير متفرعة وبلاستيدات حلزونية." }, [
    pin("chloroplast", "Spiral chloroplast", "بلاستيدة حلزونية", "Does photosynthesis; spiral shape is typical.", "تقوم بالبناء الضوئي وشكلها الحلزوني مميز.", 45, 30),
    pin("cell-wall", "Cell wall junction", "وصلة جدار الخلية", "Joins one cell to the next in the filament.", "تصل الخلية بالتي بعدها في الخيط.", 75, 22),
  ]),
  make("lily-anther", "botany", { en: "Lily anther, cross-section", ar: "متك الزنبق، مقطع عرضي" }, { en: "Lily anther", ar: "متك الزنبق" }, { en: "Pollen sacs filled with pollen grains.", ar: "أكياس لقاح ممتلئة بحبوب اللقاح." }, [
    pin("pollen-sac", "Pollen sac", "كيس اللقاح", "Chamber where pollen develops.", "حجرة تتكون فيها حبوب اللقاح.", 28, 40),
    pin("pollen", "Pollen grains", "حبوب اللقاح", "Carry the male gametes.", "تحمل الأمشاج الذكرية.", 74, 68),
    pin("connective", "Connective tissue", "النسيج الموصل", "Joins the pollen sacs.", "يربط أكياس اللقاح.", 47, 70),
    pin("epidermis", "Epidermis", "البشرة", "Outer protective layer.", "طبقة حماية خارجية.", 4, 72),
  ]),
  make("earthworm-section", "anatomy", { en: "Earthworm, cross-section", ar: "دودة الأرض، مقطع عرضي" }, { en: "Earthworm", ar: "دودة الأرض" }, { en: "Body wall, coelom and folded intestine.", ar: "جدار الجسم وتجويف الجسم وأمعاء مطوية." }, [
    pin("intestine", "Intestinal folds", "ثنيات الأمعاء", "Large folded surface for absorption.", "سطح مطوي واسع للامتصاص.", 28, 70),
    pin("body-wall", "Body wall", "جدار الجسم", "Muscle and outer layers.", "عضلات وطبقات خارجية.", 90, 40),
    pin("coelom", "Coelom", "تجويف الجسم", "Fluid-filled cavity around the gut.", "تجويف مملوء بسائل حول الأمعاء.", 30, 30),
  ]),
  make("tapeworm-section", "anatomy", { en: "Tapeworm, section", ar: "دودة شريطية، مقطع" }, { en: "Tapeworm", ar: "دودة شريطية" }, { en: "Tegument and muscle layers around a central region.", ar: "جلد وطبقات عضلية حول منطقة مركزية." }, [
    pin("tegument", "Tegument", "الجلد الخارجي", "Outer covering that absorbs food.", "غطاء خارجي يمتص الغذاء.", 50, 3),
    pin("muscle", "Body wall muscle", "عضلات الجدار", "Layers of muscle under the tegument.", "طبقات عضلية تحت الجلد.", 30, 22),
    pin("central", "Central region", "المنطقة المركزية", "Parenchyma and internal organs.", "برانشيما وأعضاء داخلية.", 30, 44),
  ]),
  make("kidney-cortex", "anatomy", { en: "Kidney cortex", ar: "قشرة الكلية" }, { en: "Kidney cortex", ar: "قشرة الكلية" }, { en: "Renal corpuscles among cut tubules.", ar: "كريات كلوية بين أنيبيبات مقطوعة." }, [
    pin("corpuscle", "Renal corpuscle", "الجسيم الكلوي", "Glomerulus in a capsule that filters blood.", "كبيبة داخل محفظة ترشح الدم.", 88, 12),
    pin("tubules", "Tubules", "أنيبيبات", "Convoluted tubules that process the filtrate.", "أنيبيبات ملتفة تعالج الراشح.", 30, 25),
  ]),
  make("fern-sporangium", "botany", { en: "Fern sporangia", ar: "أكياس أبواغ السرخس" }, { en: "Fern sporangia", ar: "أكياس أبواغ" }, { en: "Round sporangia holding spores.", ar: "أكياس مستديرة تحمل الأبواغ." }, [
    pin("sporangium", "Sporangium", "كيس الأبواغ", "Holds the spores.", "يحمل الأبواغ.", 10, 12),
    pin("sporangium-2", "Sporangium (dark)", "كيس أبواغ داكن", "Mature sporangium.", "كيس أبواغ ناضج.", 58, 70),
  ]),
  make("adipose-tissue", "anatomy", { en: "Adipose tissue", ar: "نسيج دهني" }, { en: "Adipose tissue", ar: "نسيج دهني" }, { en: "Large cells with one fat droplet.", ar: "خلايا كبيرة بقطرة دهن واحدة." }, [
    pin("adipocyte", "Adipocyte", "خلية دهنية", "Stores fat.", "تخزن الدهون.", 45, 55),
    pin("membrane", "Cell outline", "حدود الخلية", "Thin cytoplasm and membrane around the droplet.", "سيتوبلازم وغشاء رقيق حول القطرة.", 63, 34),
  ]),
];
