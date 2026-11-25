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

export const specimenSchemas8: ScientificDiagram[] = [
  make("adipose-tissue-h-e-400x", "anatomy", { en: "Adipose tissue, H&E", ar: "النسيج الدهني، هيماتوكسيلين وإيوسين" }, { en: "Adipose tissue", ar: "النسيج الدهني" }, { en: "Empty-looking fat cells with flattened nuclei.", ar: "خلايا دهنية تبدو فارغة بأنوية مفلطحة." }, [
    pin("adipocyte", "Adipocyte", "خلية دهنية", "Cell filled by one large lipid droplet.", "خلية تملؤها قطرة دهنية كبيرة واحدة.", 20, 85),
    pin("nucleus", "Nucleus", "نواة", "Nucleus pushed to the edge of the cell.", "نواة مدفوعة إلى حافة الخلية.", 66, 66),
    pin("ct", "Connective tissue", "نسيج ضام", "Pink fibrous band above the fat cells.", "شريط ليفي وردي فوق الخلايا الدهنية.", 45, 10),
  ]),
  make("elastic-cartilage-400x", "anatomy", { en: "Elastic cartilage", ar: "الغضروف المرن" }, { en: "Elastic cartilage", ar: "الغضروف المرن" }, { en: "Chondrocytes in lacunae among dark elastic fibres.", ar: "خلايا غضروفية في فجوات بين ألياف مرنة داكنة." }, [
    pin("lacuna", "Lacuna with chondrocyte", "فجوة بها خلية غضروفية", "Space holding a cartilage cell.", "حيز يحمل خلية غضروفية.", 61, 44),
    pin("lacuna2", "Lacuna, second", "فجوة ثانية", "Another cell space, lower right.", "حيز خلية آخر في الأسفل يمينا.", 85, 65),
    pin("fibres", "Elastic fibres", "ألياف مرنة", "Dark network in the matrix.", "شبكة داكنة في المادة البينية.", 15, 38),
  ]),
  make("cat-cerebellar-cortex-sagittal-section", "anatomy", { en: "Cerebellar cortex", ar: "قشرة المخيخ" }, { en: "Cerebellar cortex", ar: "قشرة المخيخ" }, { en: "Folia with a pale outer layer and dark granular layer.", ar: "طيات بطبقة خارجية شاحبة وطبقة حبيبية داكنة." }, [
    pin("mol", "Molecular layer", "الطبقة الجزيئية", "Pale outer layer with few cells.", "طبقة خارجية شاحبة قليلة الخلايا.", 47, 22),
    pin("gran", "Granular layer", "الطبقة الحبيبية", "Dense purple layer of small neurons.", "طبقة بنفسجية كثيفة من عصبونات صغيرة.", 27, 32),
    pin("wm", "White matter", "المادة البيضاء", "Pale core of each fold.", "لب شاحب لكل طية.", 50, 62),
  ]),
  make("boar-testis-seminiferous-tubules", "anatomy", { en: "Testis, seminiferous tubules", ar: "الخصية، الأنابيب المنوية" }, { en: "Seminiferous tubules", ar: "الأنابيب المنوية" }, { en: "Round tubules packed with developing sperm cells.", ar: "أنابيب مستديرة مملوءة بخلايا منوية نامية." }, [
    pin("tubule", "Seminiferous tubule", "أنبوب منوي", "Tube where sperm cells develop.", "أنبوب تتكون فيه الخلايا المنوية.", 86, 40),
    pin("lumen", "Lumen", "التجويف", "Centre of the tubule where sperm collect.", "مركز الأنبوب حيث تتجمع الحيوانات المنوية.", 74, 26),
    pin("inter", "Interstitial tissue", "النسيج البيني", "Pink tissue between the tubules.", "نسيج وردي بين الأنابيب.", 48, 60),
  ]),
  make("euglena-947-12", "botany", { en: "Euglena", ar: "اليوجلينا" }, { en: "Euglena", ar: "اليوجلينا" }, { en: "Green spindle cells under differential contrast.", ar: "خلايا خضراء مغزلية بتباين تفاضلي." }, [
    pin("cell", "Euglena cell", "خلية يوجلينا", "Spindle-shaped single cell with chloroplasts.", "خلية مغزلية مفردة بها بلاستيدات.", 31, 30),
    pin("cell2", "Euglena cell, second", "خلية يوجلينا ثانية", "Another cell in the field.", "خلية أخرى في المجال.", 34, 63),
    pin("round", "Rounded cell", "خلية مستديرة", "Cell contracted into a ball.", "خلية انكمشت على شكل كرة.", 57, 63),
  ]),
  make("diatoms-light-microscope", "botany", { en: "Diatoms", ar: "الدياتومات" }, { en: "Diatoms", ar: "الدياتومات" }, { en: "Needle-shaped glass-walled algae.", ar: "طحالب إبرية الشكل بجدار زجاجي." }, [
    pin("diatom", "Diatom", "دياتوم", "Single cell inside a silica shell.", "خلية مفردة داخل غلاف من السيليكا.", 66, 37),
    pin("cluster", "Cluster of cells", "تجمع خلايا", "Dense group of diatoms.", "مجموعة كثيفة من الدياتومات.", 42, 37),
    pin("diatom2", "Diatom, lower left", "دياتوم أسفل اليسار", "Another cell in the lower field.", "خلية أخرى في أسفل المجال.", 16, 64),
  ]),
  make("cyanobacterium-oscillatoria-sp", "botany", { en: "Oscillatoria filament", ar: "خيط الأوسيلاتوريا" }, { en: "Oscillatoria", ar: "الأوسيلاتوريا" }, { en: "Long unbranched filament of stacked cells.", ar: "خيط طويل غير متفرع من خلايا متراصة." }, [
    pin("trichome", "Filament", "خيط", "Chain of cells without branches.", "سلسلة خلايا بلا تفرع.", 51, 50),
    pin("end", "Filament end", "طرف الخيط", "Tip of the chain.", "طرف السلسلة.", 6, 9),
    pin("cell", "Cell", "خلية", "Short disc-like cell in the chain.", "خلية قصيرة قرصية الشكل في السلسلة.", 66, 62),
  ]),
  make("budding-yeast", "cell-biology", { en: "Budding yeast", ar: "الخميرة المتبرعمة" }, { en: "Budding yeast", ar: "الخميرة المتبرعمة" }, { en: "Oval cells, some with small buds.", ar: "خلايا بيضاوية وبعضها ببراعم صغيرة." }, [
    pin("cell", "Yeast cell", "خلية خميرة", "Single oval fungal cell.", "خلية فطرية بيضاوية مفردة.", 46, 41),
    pin("cell2", "Yeast cell, right", "خلية خميرة يمينا", "Neighbouring cell on the right.", "خلية مجاورة يمينا.", 73, 41),
    pin("cell3", "Yeast cell, lower left", "خلية خميرة أسفل اليسار", "Cell near the lower left edge.", "خلية قرب الحافة السفلية اليسرى.", 17, 73),
  ]),
  make("butterfly-wing-scales", "anatomy", { en: "Butterfly wing scales", ar: "حراشف جناح الفراشة" }, { en: "Wing scales", ar: "حراشف الجناح" }, { en: "Overlapping scales with fine ridges.", ar: "حراشف متراكبة بحروف دقيقة." }, [
    pin("scale", "Wing scale", "حرشفة الجناح", "Flat coloured plate that overlaps its neighbours.", "صفيحة ملونة مسطحة تتراكب مع جاراتها.", 76, 18),
    pin("scale2", "Wing scale, upper left", "حرشفة أعلى اليسار", "Another overlapping scale.", "حرشفة متراكبة أخرى.", 34, 24),
    pin("loose", "Detached scale", "حرشفة منفصلة", "Single scale lying loose on the others.", "حرشفة منفردة فوق الباقي.", 37, 72),
  ]),
  make("anaphase-of-plant-cell-mitosis", "cell-biology", { en: "Plant cell mitosis", ar: "الانقسام الخيطي في خلية نباتية" }, { en: "Plant mitosis", ar: "انقسام خلية نباتية" }, { en: "Dark chromosomes in dividing cells.", ar: "كروموسومات داكنة في خلايا منقسمة." }, [
    pin("mitotic", "Dividing cell", "خلية منقسمة", "Cell with condensed chromosomes.", "خلية بكروموسومات متكثفة.", 46, 45),
    pin("nuc", "Interphase nucleus", "نواة طور بيني", "Round nucleus of a resting cell.", "نواة مستديرة لخلية غير منقسمة.", 49, 85),
    pin("nuc2", "Nucleus, upper right", "نواة أعلى اليمين", "Another round nucleus.", "نواة مستديرة أخرى.", 72, 35),
  ]),
  make("dicot-stem-showing-xylem-and-phloem", "botany", { en: "Dicot stem section", ar: "مقطع ساق ثنائية الفلقة" }, { en: "Dicot stem", ar: "ساق ثنائية الفلقة" }, { en: "Pink pith with small bundles near the edge.", ar: "نخاع وردي وحزم صغيرة قرب الحافة." }, [
    pin("pith", "Pith", "النخاع", "Large thin-walled cells at the centre.", "خلايا كبيرة رقيقة الجدار في المركز.", 46, 50),
    pin("bundle", "Vascular bundle", "حزمة وعائية", "Small group of xylem and phloem.", "مجموعة صغيرة من الخشب واللحاء.", 26, 72),
    pin("epi", "Epidermis and cortex", "البشرة والقشرة", "Outer layers at the top.", "الطبقات الخارجية في الأعلى.", 52, 14),
    pin("lig", "Lignified tissue", "نسيج متخشب", "Blue-stained thick-walled cells.", "خلايا سميكة الجدار مصبوغة بالأزرق.", 55, 90),
  ]),
  make("ginkgo-biloba-shoot-cross-section", "botany", { en: "Ginkgo shoot, cross section", ar: "ساق الجنكة، مقطع عرضي" }, { en: "Ginkgo shoot", ar: "ساق الجنكة" }, { en: "Pith, wide wood ring and resin canals.", ar: "نخاع وحلقة خشب عريضة وقنوات راتنجية." }, [
    pin("pith", "Pith", "النخاع", "Soft centre of the shoot.", "المركز الرخو للساق.", 47, 44),
    pin("xylem", "Secondary xylem", "خشب ثانوي", "Wide ring of wood cells in radial rows.", "حلقة عريضة من خلايا الخشب في صفوف شعاعية.", 28, 50),
    pin("canal", "Resin canal", "قناة راتنجية", "Round duct in the cortex.", "قناة مستديرة في القشرة.", 70, 14),
    pin("cortex", "Cortex", "القشرة", "Tissue between the wood and the outer bark.", "نسيج بين الخشب واللحاء الخارجي.", 18, 78),
  ]),
  make("chestnut-leaf-cross-section", "botany", { en: "Chestnut leaf, cross section", ar: "ورقة الكستناء، مقطع عرضي" }, { en: "Chestnut leaf", ar: "ورقة الكستناء" }, { en: "Midrib with a large vascular bundle.", ar: "عرق وسطي بحزمة وعائية كبيرة." }, [
    pin("xylem", "Vascular bundle", "حزمة وعائية", "Water and food conducting tissue.", "نسيج ناقل للماء والغذاء.", 40, 40),
    pin("epi", "Upper epidermis", "البشرة العليا", "Outer layer on the top surface.", "الطبقة الخارجية على السطح العلوي.", 55, 23),
    pin("meso", "Leaf tissue", "نسيج الورقة", "Mesophyll beside the midrib.", "النسيج المتوسط بجانب العرق.", 71, 47),
  ]),
  make("giardia-intestinalis-259-17", "cell-biology", { en: "Giardia trophozoites", ar: "أطوار الجيارديا المتغذية" }, { en: "Giardia", ar: "الجيارديا" }, { en: "Pear-shaped cells with trailing flagella.", ar: "خلايا كمثرية الشكل بأسواط خلفية." }, [
    pin("troph", "Trophozoite", "طور متغذٍّ", "Pear-shaped feeding stage.", "طور التغذية الكمثري الشكل.", 41, 28),
    pin("troph2", "Trophozoite, second", "طور متغذٍّ ثان", "Another cell lower in the field.", "خلية أخرى في أسفل المجال.", 58, 57),
    pin("flag", "Flagella", "أسواط", "Thin tails used for swimming.", "أذيال رفيعة تستخدم في السباحة.", 72, 68),
  ]),
  make("fern-root-cross-section-40x", "botany", { en: "Fern root, cross section", ar: "جذر السرخس، مقطع عرضي" }, { en: "Fern root", ar: "جذر السرخس" }, { en: "Central vascular cylinder inside a wide cortex.", ar: "أسطوانة وعائية مركزية داخل قشرة عريضة." }, [
    pin("stele", "Vascular cylinder", "الأسطوانة الوعائية", "Central core that carries water and food.", "قلب مركزي ينقل الماء والغذاء.", 40, 55),
    pin("endo", "Endodermis", "الأدمة الباطنة", "Dark ring around the core.", "حلقة داكنة حول القلب.", 21, 50),
    pin("cortex", "Cortex", "القشرة", "Round storage cells outside the ring.", "خلايا مستديرة للتخزين خارج الحلقة.", 73, 76),
  ]),
  make("gallbladder-haemalum-eosin", "anatomy", { en: "Gallbladder wall", ar: "جدار المرارة" }, { en: "Gallbladder", ar: "المرارة" }, { en: "Folded mucosa over a pink muscle layer.", ar: "غشاء مخاطي مطوي فوق طبقة عضلية وردية." }, [
    pin("fold", "Mucosal fold", "ثنية مخاطية", "Folded lining that increases surface area.", "بطانة مطوية تزيد مساحة السطح.", 68, 11),
    pin("lp", "Lamina propria", "الصفيحة الخاصة", "Loose tissue under the lining.", "نسيج رخو تحت البطانة.", 27, 27),
    pin("muscle", "Smooth muscle", "عضلة ملساء", "Pink layer that squeezes the wall.", "طبقة وردية تعصر الجدار.", 62, 59),
    pin("lumen", "Lumen", "التجويف", "Space between folds.", "الحيز بين الثنيات.", 88, 10),
  ]),
  make("closterium-light-microscope", "botany", { en: "Closterium cells", ar: "خلايا الكلوستريوم" }, { en: "Closterium", ar: "الكلوستريوم" }, { en: "Crescent green desmid cells.", ar: "خلايا هلالية خضراء من الدسميدات." }, [
    pin("cell", "Closterium cell", "خلية كلوستريوم", "Crescent-shaped single cell.", "خلية مفردة هلالية الشكل.", 46, 66),
    pin("cell2", "Closterium cell, right", "خلية كلوستريوم يمينا", "Another cell near the upper right.", "خلية أخرى قرب أعلى اليمين.", 84, 30),
    pin("cell3", "Closterium cell, lower", "خلية كلوستريوم أسفل", "Cell near the bottom edge.", "خلية قرب الحافة السفلية.", 35, 92),
  ]),
];
