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

export const specimenSchemas7: ScientificDiagram[] = [
  make("human-thyroid-gland-follicles-h-e-40x", "anatomy", { en: "Thyroid gland, follicles", ar: "الغدة الدرقية، الجريبات" }, { en: "Thyroid gland", ar: "الغدة الدرقية" }, { en: "Round follicles filled with pale colloid.", ar: "جريبات مستديرة مملوءة بغرويد شاحب." }, [
    pin("follicle", "Thyroid follicle", "جريب درقي", "Sphere of cells that stores hormone as colloid.", "كرة من الخلايا تخزن الهرمون على شكل غرويد.", 35, 55),
    pin("follicle2", "Follicle, second", "جريب آخر", "Neighbouring follicle with its own colloid.", "جريب مجاور له غرويده.", 60, 30),
    pin("colloid", "Colloid", "الغرويد", "Pale protein store inside the follicle.", "مخزون بروتيني شاحب داخل الجريب.", 12, 35),
  ]),
  make("human-pancreas-islet-of-langerhans-phase-contrast-200x", "anatomy", { en: "Pancreas, islets of Langerhans", ar: "البنكرياس، جزر لانجرهانس" }, { en: "Pancreas islet", ar: "جزيرة البنكرياس" }, { en: "Pale islets among darker exocrine acini.", ar: "جزر شاحبة بين عنيبات خارجية الإفراز أغمق." }, [
    pin("islet", "Islet of Langerhans", "جزيرة لانجرهانس", "Endocrine cluster that makes insulin and glucagon.", "تجمع صماوي ينتج الإنسولين والجلوكاجون.", 50, 50),
    pin("islet2", "Second islet", "جزيرة ثانية", "Another islet in the lower right.", "جزيرة أخرى في الأسفل يمينا.", 84, 75),
    pin("acini", "Exocrine acini", "عنيبات خارجية الإفراز", "Dark clusters that make digestive enzymes.", "تجمعات داكنة تنتج الإنزيمات الهاضمة.", 20, 60),
  ]),
  make("spirogyra-conjugation-tubes", "botany", { en: "Spirogyra, conjugation", ar: "سبيروجيرا، الاقتران" }, { en: "Spirogyra conjugation", ar: "اقتران السبيروجيرا" }, { en: "Stained zygospores between joined filaments.", ar: "أبواغ زيجية مصبوغة بين خيطين متصلين." }, [
    pin("zygo", "Zygospore", "بوغ زيجي", "Thick-walled cell formed after two gametes fuse.", "خلية سميكة الجدار تتكون بعد اندماج مشيجين.", 50, 63),
    pin("zygo2", "Zygospore, upper", "بوغ زيجي علوي", "Another zygospore in the same filament.", "بوغ زيجي آخر في الخيط نفسه.", 37, 13),
    pin("wall", "Cell wall", "جدار الخلية", "Cellulose wall of the filament cell.", "جدار سليلوزي لخلية الخيط.", 30, 70),
  ]),
  make("volvox-colonies-differential-interference-contrast-160x", "botany", { en: "Volvox colonies", ar: "مستعمرات الفولفوكس" }, { en: "Volvox", ar: "الفولفوكس" }, { en: "Hollow spheres with daughter colonies inside.", ar: "كرات مجوفة بداخلها مستعمرات بنات." }, [
    pin("colony", "Parent colony", "مستعمرة أم", "Hollow sphere of cells with flagella.", "كرة مجوفة من الخلايا ذات أسواط.", 66, 32),
    pin("colony2", "Second colony", "مستعمرة ثانية", "Another sphere below and to the left.", "كرة أخرى في الأسفل يسارا.", 37, 68),
    pin("daughter", "Daughter colony", "مستعمرة بنت", "Bright small sphere growing inside the parent.", "كرة صغيرة ساطعة تنمو داخل الأم.", 63, 17),
  ]),
  make("daphnia-with-eggs-dark-field", "anatomy", { en: "Daphnia with eggs", ar: "الدفنيا وبداخلها بيض" }, { en: "Daphnia", ar: "الدفنيا" }, { en: "Water flea carrying eggs in its brood chamber.", ar: "برغوث ماء يحمل البيض في حجرة الحضانة." }, [
    pin("eggs", "Eggs in brood chamber", "بيض في حجرة الحضانة", "Eggs develop here under the shell.", "ينمو البيض هنا تحت القوقعة.", 73, 52),
    pin("antenna", "Second antenna", "قرن استشعار ثان", "Branched limb used for swimming.", "طرف متفرع يستخدم في السباحة.", 20, 22),
    pin("spine", "Tail spine", "الشوكة الذيلية", "Long spine at the rear of the shell.", "شوكة طويلة في مؤخرة القوقعة.", 95, 93),
    pin("body", "Body", "الجسم", "Transparent trunk with the gut inside.", "جذع شفاف بداخله القناة الهضمية.", 45, 60),
  ]),
  make("hydra-vulgaris-40x", "anatomy", { en: "Hydra", ar: "الهيدرا" }, { en: "Hydra", ar: "الهيدرا" }, { en: "Tube body with tentacles around the mouth.", ar: "جسم أنبوبي وملامس حول الفم." }, [
    pin("tent", "Tentacle", "لامس", "Stinging arm used to catch prey.", "ذراع لاسع يصطاد به الفريسة.", 26, 17),
    pin("tent2", "Tentacle, second", "لامس ثان", "Another tentacle, raised on the right.", "لامس آخر مرفوع يمينا.", 81, 16),
    pin("column", "Body column", "عمود الجسم", "Tube made of two cell layers.", "أنبوب من طبقتين من الخلايا.", 40, 75),
    pin("foot", "Basal disc", "القرص القاعدي", "Sticky base that attaches to a surface.", "قاعدة لزجة تلتصق بالسطح.", 32, 90),
  ]),
  make("plasmodium-falciparum-ring-forms-in-red-blood-cells", "cell-biology", { en: "Plasmodium ring forms", ar: "أطوار الحلقة للبلازموديوم" }, { en: "Malaria ring forms", ar: "أطوار الحلقة للملاريا" }, { en: "Tiny blue rings inside red cells.", ar: "حلقات زرقاء دقيقة داخل كريات حمراء." }, [
    pin("ring", "Ring form", "طور الحلقة", "Young parasite seen as a ring in the cell.", "طفيلي صغير يظهر كحلقة داخل الخلية.", 34, 44),
    pin("ring2", "Ring form, second", "طور حلقة ثان", "Another infected red cell.", "كرية حمراء أخرى مصابة.", 73, 15),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Pale disc without a nucleus.", "قرص شاحب بلا نواة.", 60, 60),
  ]),
  make("sickle-cell-anaemia-blood-smear-giemsa", "cell-biology", { en: "Sickle cell anaemia smear", ar: "لطاخة فقر الدم المنجلي" }, { en: "Sickle cell smear", ar: "لطاخة منجلية" }, { en: "Crescent red cells among round ones.", ar: "كريات حمراء هلالية بين كريات مستديرة." }, [
    pin("sickle", "Sickle cell", "خلية منجلية", "Red cell bent into a crescent.", "كرية حمراء منحنية على شكل هلال.", 78, 82),
    pin("sickle2", "Sickle cell, second", "خلية منجلية ثانية", "Another elongated cell.", "خلية أخرى مستطيلة.", 91, 68),
    pin("wbc", "White cell", "كرية بيضاء", "Dark nucleus, larger than red cells.", "نواة داكنة وحجم أكبر من الحمراء.", 19, 22),
    pin("rbc", "Normal red cell", "كرية حمراء طبيعية", "Round disc with a pale centre.", "قرص مستدير بمركز شاحب.", 50, 40),
  ]),
  make("renal-corpuscle-glomerulus-pas-stain", "anatomy", { en: "Renal corpuscle, PAS stain", ar: "الجسيم الكلوي، صبغة PAS" }, { en: "Renal corpuscle", ar: "الجسيم الكلوي" }, { en: "Glomerular tuft inside Bowman capsule.", ar: "كبّة كلوية داخل محفظة بومان." }, [
    pin("tuft", "Glomerulus", "الكبّة الكلوية", "Capillary tuft that filters blood.", "شبكة شعيرات تُرشّح الدم.", 45, 33),
    pin("capsule", "Bowman capsule", "محفظة بومان", "Pink wall that surrounds the tuft.", "جدار وردي يحيط بالكبّة.", 28, 48),
    pin("tubule", "Tubule", "أنبوب كلوي", "Cut tubule beside the corpuscle.", "أنبوب مقطوع بجانب الجسيم.", 85, 45),
  ]),
  make("duodenum-brush-border-400x", "anatomy", { en: "Duodenum, villi", ar: "العفج، الزغابات" }, { en: "Duodenum", ar: "العفج" }, { en: "Finger-like villi lined by absorptive cells.", ar: "زغابات إصبعية بطانتها خلايا ماصة." }, [
    pin("villus", "Villus", "زغابة", "Finger-like fold that raises absorption area.", "ثنية إصبعية تزيد مساحة الامتصاص.", 42, 40),
    pin("villus2", "Villus, second", "زغابة ثانية", "Neighbouring villus on the right.", "زغابة مجاورة يمينا.", 85, 35),
    pin("lumen", "Lumen", "التجويف", "Space between villi.", "الحيز بين الزغابات.", 62, 12),
  ]),
  make("mouse-ileum-goblet-cells", "anatomy", { en: "Mouse ileum, goblet cells", ar: "لفائفي الفأر، الخلايا الكأسية" }, { en: "Ileum goblet cells", ar: "الخلايا الكأسية" }, { en: "Arrows mark pale mucus-filled cells.", ar: "الأسهم تشير لخلايا شاحبة مملوءة بالمخاط." }, [
    pin("goblet", "Goblet cell", "خلية كأسية", "Cell packed with mucus droplets.", "خلية مملوءة بقطرات المخاط.", 71, 22),
    pin("goblet2", "Goblet cell, second", "خلية كأسية ثانية", "Another mucus cell in the lining.", "خلية مخاطية أخرى في البطانة.", 76, 44),
    pin("lp", "Villus core", "لب الزغابة", "Connective tissue inside the villus.", "نسيج ضام داخل الزغابة.", 36, 50),
    pin("lumen", "Lumen", "التجويف", "Space beside the villus.", "الحيز بجانب الزغابة.", 55, 80),
  ]),
  make("tradescantia-spathacea-stomata-400x", "botany", { en: "Tradescantia, stomata", ar: "التريدسكانشيا، الثغور" }, { en: "Tradescantia stomata", ar: "ثغور التريدسكانشيا" }, { en: "Paired guard cells in the leaf epidermis.", ar: "خليتان حارستان في بشرة الورقة." }, [
    pin("stoma", "Stoma", "ثغر", "Pore for gas exchange.", "فتحة لتبادل الغازات.", 51, 25),
    pin("stoma2", "Stoma, second", "ثغر ثان", "Another pore, lower in the field.", "ثغر آخر في أسفل المجال.", 47, 78),
    pin("epi", "Epidermal cell", "خلية بشرة", "Large polygon cell between pores.", "خلية كبيرة متعددة الأضلاع بين الثغور.", 30, 50),
  ]),
  make("dog-cerebellum-purkinje-cells", "anatomy", { en: "Cerebellum, Purkinje cells", ar: "المخيخ، خلايا بركنجي" }, { en: "Purkinje cells", ar: "خلايا بركنجي" }, { en: "Large flask cells with branching dendrites.", ar: "خلايا كبيرة بشكل قارورة وتفرعات شجيرية." }, [
    pin("p1", "Purkinje cell", "خلية بركنجي", "Large neuron at the layer border.", "عصبون كبير عند حدود الطبقة.", 67, 18),
    pin("p2", "Purkinje cell, second", "خلية بركنجي ثانية", "Another cell body in the row.", "جسم خلية آخر في الصف.", 66, 44),
    pin("p3", "Purkinje cell, third", "خلية بركنجي ثالثة", "Third cell body, lower.", "جسم خلية ثالث في الأسفل.", 69, 70),
    pin("dend", "Dendrite", "تفرع شجيري", "Branch reaching into the molecular layer.", "فرع يمتد إلى الطبقة الجزيئية.", 39, 24),
  ]),
  make("horsetail-equisetum-stem-cross-section-25x", "botany", { en: "Horsetail stem, cross section", ar: "ساق ذيل الحصان، مقطع عرضي" }, { en: "Equisetum stem", ar: "ساق الإكويسيتم" }, { en: "Ridged stem with a large hollow centre.", ar: "ساق مضلعة بتجويف مركزي كبير." }, [
    pin("hollow", "Central hollow", "التجويف المركزي", "Large air space in the middle of the stem.", "فراغ هوائي كبير في وسط الساق.", 49, 40),
    pin("cortex", "Cortex", "القشرة", "Tissue between the hollow and the surface.", "نسيج بين التجويف والسطح.", 22, 55),
    pin("epi", "Outer edge", "الحافة الخارجية", "Ridged surface with the epidermis.", "سطح مضلع فيه البشرة.", 50, 93),
  ]),
  make("cardiac-muscle-100x", "anatomy", { en: "Cardiac muscle, longitudinal", ar: "العضلة القلبية، مقطع طولي" }, { en: "Cardiac muscle", ar: "العضلة القلبية" }, { en: "Pink fibres with central nuclei.", ar: "ألياف وردية بنوى مركزية." }, [
    pin("fibre", "Cardiac fibre", "ليف قلبي", "Branched striated muscle cell.", "خلية عضلية مخططة متفرعة.", 62, 40),
    pin("nuc", "Nucleus", "نواة", "Dark oval nucleus in the fibre.", "نواة بيضاوية داكنة في الليف.", 27, 28),
    pin("vessel", "Blood vessel", "وعاء دموي", "Vessel cut at the lower left.", "وعاء مقطوع في الأسفل يسارا.", 4, 70),
    pin("ct", "Connective tissue", "نسيج ضام", "Pale tissue between fibres.", "نسيج شاحب بين الألياف.", 46, 15),
  ]),
  make("elodea-anacharis-leaf-cells-400x", "botany", { en: "Elodea, leaf cells", ar: "الإيلوديا، خلايا الورقة" }, { en: "Elodea leaf cells", ar: "خلايا ورقة الإيلوديا" }, { en: "Green cells packed with chloroplasts.", ar: "خلايا خضراء مملوءة بالبلاستيدات الخضراء." }, [
    pin("cell", "Leaf cell", "خلية الورقة", "Rectangular cell in a single layer.", "خلية مستطيلة في طبقة واحدة.", 45, 62),
    pin("chl", "Chloroplasts", "بلاستيدات خضراء", "Green discs where photosynthesis happens.", "أقراص خضراء تحدث فيها عملية البناء الضوئي.", 62, 52),
    pin("wall", "Cell wall", "جدار الخلية", "Dark line between neighbouring cells.", "خط داكن بين الخلايا المتجاورة.", 52, 82),
  ]),
  make("lymphocyte-among-red-cells-wright-stain", "cell-biology", { en: "Lymphocyte, Wright stain", ar: "الخلية اللمفاوية، صبغة رايت" }, { en: "Lymphocyte", ar: "الخلية اللمفاوية" }, { en: "Purple lymphocyte among pale red cells.", ar: "خلية لمفاوية بنفسجية بين كريات حمراء شاحبة." }, [
    pin("lymph", "Lymphocyte", "خلية لمفاوية", "White cell with a large round nucleus.", "كرية بيضاء بنواة كبيرة مستديرة.", 54, 55),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Pale disc without a nucleus.", "قرص شاحب بلا نواة.", 78, 36),
    pin("plt", "Platelet", "صفيحة دموية", "Small purple fragment.", "شظية صغيرة بنفسجية.", 20, 51),
  ]),
  make("scalp-hair-follicle-transverse-section-400x", "anatomy", { en: "Scalp hair follicle, transverse", ar: "بصيلة شعر فروة الرأس، مقطع عرضي" }, { en: "Hair follicle", ar: "بصيلة الشعر" }, { en: "Dark hair shaft inside concentric sheaths.", ar: "ساق شعرة داكنة داخل أغلفة متحدة المركز." }, [
    pin("shaft", "Hair shaft", "ساق الشعرة", "Dark pigmented core of the hair.", "اللب الداكن المصبوغ للشعرة.", 36, 25),
    pin("sheath", "Root sheath", "غمد الجذر", "Rings of epithelial cells around the shaft.", "حلقات من الخلايا الظهارية حول الساق.", 28, 25),
    pin("ct", "Connective tissue", "نسيج ضام", "Dermal tissue around the follicle.", "نسيج جلدي حول البصيلة.", 55, 55),
  ]),
];
