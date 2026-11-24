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

export const specimenSchemas: ScientificDiagram[] = [
  make("skeletal-muscle", "anatomy", { en: "Skeletal muscle, longitudinal section", ar: "عضلة هيكلية، مقطع طولي" }, { en: "Skeletal muscle", ar: "عضلة هيكلية" }, { en: "Long striated fibres with several peripheral nuclei each.", ar: "ألياف طويلة مخططة، كل ليفة لها عدة أنوية طرفية." }, [
    pin("muscle-fibre", "Muscle fibre", "ليفة عضلية", "A single long multinucleate cell that contracts.", "خلية طويلة متعددة الأنوية تنقبض.", 68, 24),
    pin("peripheral-nucleus", "Peripheral nucleus", "نواة طرفية", "Nuclei lie just under the cell membrane, a key feature of skeletal muscle.", "الأنوية تقع تحت الغشاء مباشرة، وهي صفة مميزة للعضلة الهيكلية.", 53, 50),
    pin("striations", "Cross-striations", "تخطيط عرضي", "Alternating light and dark bands come from the regular sarcomeres.", "أشرطة فاتحة وداكنة متبادلة تنتج من الساركوميرات المنتظمة.", 10, 52),
    pin("endomysium", "Endomysium (connective tissue gap)", "الغلاف الداخلي (فراغ نسيج ضام)", "Thin connective tissue between fibres carries capillaries and nerves.", "نسيج ضام رقيق بين الألياف يحمل الشعيرات والأعصاب.", 22, 38),
  ]),
  make("compact-bone", "anatomy", { en: "Compact bone, cross-section", ar: "عظم مندمج، مقطع عرضي" }, { en: "Compact bone", ar: "عظم مندمج" }, { en: "Osteons with central canals packed side by side.", ar: "أنظمة هافرس بقنوات مركزية متراصة جنباً إلى جنب." }, [
    pin("central-canal", "Central (Haversian) canal", "القناة المركزية (هافرس)", "Carries blood vessels and nerves through the middle of an osteon.", "تحمل الأوعية الدموية والأعصاب في وسط نظام هافرس.", 71, 54),
    pin("osteon", "Osteon (Haversian system)", "نظام هافرس (أوستيون)", "Concentric bone layers around a canal; the structural unit of compact bone.", "طبقات عظمية متحدة المركز حول قناة، وهي الوحدة البنائية للعظم المندمج.", 43, 31),
    pin("outer-surface", "Outer surface (periosteal side)", "السطح الخارجي (جهة السمحاق)", "Outer edge of the bone, covered in life by the periosteum.", "الحافة الخارجية للعظم ويغطيها السمحاق في الحياة.", 56, 14),
    pin("interstitial-lamellae", "Interstitial lamellae", "صفائح بينية", "Remnants of old osteons between the new ones.", "بقايا أنظمة هافرس القديمة بين الجديدة.", 22, 70),
  ]),
  make("hyaline-cartilage", "anatomy", { en: "Hyaline cartilage", ar: "غضروف زجاجي" }, { en: "Hyaline cartilage", ar: "غضروف زجاجي" }, { en: "Chondrocytes in lacunae inside a smooth glassy matrix.", ar: "خلايا غضروفية في فجوات داخل مادة بينية ناعمة زجاجية." }, [
    pin("lacuna", "Lacuna", "فجوة", "The small cavity that holds a chondrocyte.", "تجويف صغير يحتوي خلية غضروفية.", 79, 56),
    pin("chondrocyte-group", "Chondrocyte group", "مجموعة خلايا غضروفية", "Cells that divided recently stay together in a group.", "خلايا انقسمت حديثاً وتبقى معاً في مجموعة.", 28, 18),
    pin("matrix", "Cartilage matrix", "المادة البينية", "Smooth matrix of collagen and proteoglycans that gives cartilage its firmness.", "مادة ملساء من الكولاجين والبروتيوغليكان تعطي الغضروف صلابته.", 49, 32),
  ]),
  make("cardiac-muscle", "anatomy", { en: "Cardiac muscle", ar: "عضلة قلبية" }, { en: "Cardiac muscle", ar: "عضلة قلبية" }, { en: "Branching fibre bundles separated by delicate connective tissue.", ar: "حزم من ألياف متفرعة يفصلها نسيج ضام رقيق." }, [
    pin("fibre-bundle", "Cardiac fibre bundle", "حزمة ألياف قلبية", "Bundles of branching cardiac muscle cells that contract together.", "حزم من خلايا عضلة قلبية متفرعة تنقبض معاً.", 83, 53),
    pin("interstitial-tissue", "Interstitial connective tissue", "نسيج ضام بيني", "Loose tissue between bundles that carries capillaries.", "نسيج رخو بين الحزم يحمل الشعيرات الدموية.", 63, 50),
    pin("branching-fibres", "Branching fibres", "ألياف متفرعة", "Fibres split and join, which helps spread the contraction.", "الألياف تتفرع وتتصل مما يساعد على انتشار الانقباض.", 25, 35),
  ]),
  make("smooth-muscle", "anatomy", { en: "Smooth muscle, longitudinal section", ar: "عضلة ملساء، مقطع طولي" }, { en: "Smooth muscle", ar: "عضلة ملساء" }, { en: "Spindle cells with one central nucleus and no striations.", ar: "خلايا مغزلية لكل منها نواة مركزية بلا تخطيط." }, [
    pin("smooth-nucleus", "Spindle-shaped nucleus", "نواة مغزلية", "Each cell has a single central, cigar-shaped nucleus.", "لكل خلية نواة واحدة مركزية على شكل سيجار.", 75, 57),
    pin("smooth-cytoplasm", "Cytoplasm without striations", "سيتوبلازم بلا تخطيط", "Smooth muscle shows no cross bands.", "العضلة الملساء لا تظهر فيها أشرطة عرضية.", 40, 45),
    pin("smooth-connective", "Connective tissue (green)", "نسيج ضام (أخضر)", "Fine connective tissue stained green between bundles.", "نسيج ضام رفيع مصبوغ بالأخضر بين الحزم.", 5, 12),
  ]),
  make("lung-alveoli", "anatomy", { en: "Lung: bronchiole and alveoli", ar: "رئة: قُصيبة وحويصلات هوائية" }, { en: "Lung", ar: "رئة" }, { en: "A small airway with folded lining surrounded by thin-walled alveoli.", ar: "ممر هوائي صغير ببطانة مطوية تحيط به حويصلات رقيقة الجدار." }, [
    pin("bronchiole-lumen", "Bronchiole lumen", "تجويف القُصيبة", "Air passage with a folded epithelial lining.", "ممر للهواء ببطانة ظهارية مطوية.", 43, 52),
    pin("alveoli", "Alveoli", "حويصلات هوائية", "Thin-walled air sacs where gas exchange takes place.", "أكياس هوائية رقيقة الجدار يتم فيها تبادل الغازات.", 77, 20),
    pin("alveolar-wall", "Alveolar wall (septum)", "جدار الحويصلة (حاجز)", "A very thin wall shared by neighbouring alveoli, rich in capillaries.", "جدار رقيق جداً مشترك بين حويصلتين وغني بالشعيرات.", 21, 12),
    pin("pulmonary-vessel", "Blood vessel", "وعاء دموي", "Branch of a pulmonary vessel next to the airway.", "فرع وعاء رئوي بجوار الممر الهوائي.", 95, 16),
    pin("peribronchial-tissue", "Peribronchial connective tissue", "نسيج ضام حول القُصيبة", "Supports the airway and holds smooth muscle and glands.", "يدعم الممر الهوائي ويحتوي عضلات ملساء وغدداً.", 30, 42),
  ]),
  make("liver-section", "anatomy", { en: "Liver lobule", ar: "فُصيص كبدي" }, { en: "Liver", ar: "كبد" }, { en: "Hepatocyte cords radiating from a central vein.", ar: "حبال من الخلايا الكبدية تشع من وريد مركزي." }, [
    pin("central-vein", "Central vein", "الوريد المركزي", "Collects blood that has passed through the sinusoids.", "يجمع الدم بعد مروره بالجيوب الكبدية.", 37, 29),
    pin("hepatocytes", "Hepatocyte cords", "حبال الخلايا الكبدية", "Plates of liver cells that make bile and process nutrients.", "صفائح من الخلايا الكبدية تصنع الصفراء وتعالج المغذيات.", 60, 55),
    pin("sinusoid", "Sinusoid (space between cords)", "جيب كبدي (فراغ بين الحبال)", "Wide capillary channel between cords of liver cells.", "قناة شعرية واسعة بين حبال الخلايا الكبدية.", 48, 72),
  ]),
  make("dicot-leaf", "botany", { en: "Lemon leaf, cross-section through the midrib", ar: "ورقة ليمون، مقطع عرضي عبر العرق الأوسط" }, { en: "Lemon leaf", ar: "ورقة الليمون" }, { en: "Midrib with vascular tissue and the thin blade on the side.", ar: "عرق أوسط به نسيج وعائي وصفيحة رقيقة على الجانب." }, [
    pin("midrib-vascular", "Midrib vascular tissue", "النسيج الوعائي للعرق الأوسط", "Xylem and phloem carry water and sugars into and out of the leaf.", "الخشب واللحاء ينقلان الماء والسكريات من وإلى الورقة.", 50, 42),
    pin("midrib-ground", "Midrib ground tissue", "النسيج الأساسي في العرق الأوسط", "Parenchyma that fills and supports the midrib.", "نسيج برانشيمي يملأ العرق الأوسط ويدعمه.", 50, 66),
    pin("leaf-blade", "Leaf blade (lamina)", "صفيحة الورقة", "The thin photosynthetic part of the leaf.", "الجزء الرقيق للبناء الضوئي من الورقة.", 15, 30),
    pin("upper-epidermis", "Epidermis", "البشرة", "Outer protective layer of the leaf.", "طبقة خارجية واقية للورقة.", 62, 28),
  ]),
  make("duodenum-section", "anatomy", { en: "Duodenum wall", ar: "جدار الاثنى عشر" }, { en: "Duodenum", ar: "الاثنا عشر" }, { en: "Folded lining with crypts above a layer of connective tissue.", ar: "بطانة مطوية بها غدد معوية فوق طبقة نسيج ضام." }, [
    pin("duodenal-lumen", "Lumen", "التجويف", "The space where food passes.", "الحيّز الذي يمر فيه الغذاء.", 12, 32),
    pin("absorptive-epithelium", "Columnar epithelium", "ظهارة عمودية", "Tall cells that absorb nutrients; goblet cells between them make mucus.", "خلايا طويلة تمتص المغذيات وبينها خلايا كأسية تفرز المخاط.", 64, 50),
    pin("lamina-propria", "Lamina propria", "الصفيحة المخصوصة", "Loose connective tissue with many small cells under the epithelium.", "نسيج ضام رخو به خلايا صغيرة كثيرة تحت الظهارة.", 78, 70),
    pin("intestinal-crypt", "Intestinal crypt", "غدة معوية (خبية)", "Gland that opens between villi and renews the epithelium.", "غدة تفتح بين الزغابات وتجدد الظهارة.", 85, 25),
  ]),
  make("spinal-cord-section", "anatomy", { en: "Spinal cord, cross-section", ar: "نخاع شوكي، مقطع عرضي" }, { en: "Spinal cord", ar: "نخاع شوكي" }, { en: "Central grey matter horns inside a surrounding white matter.", ar: "قرون المادة الرمادية في الوسط تحيط بها المادة البيضاء." }, [
    pin("grey-horn-upper", "Grey matter (horn)", "المادة الرمادية (قرن)", "Contains nerve cell bodies and synapses.", "تحتوي أجسام الخلايا العصبية والمشابك.", 47, 12),
    pin("grey-horn-lower", "Grey matter (opposite horn)", "المادة الرمادية (القرن المقابل)", "The grey matter forms a butterfly shape.", "المادة الرمادية تأخذ شكل فراشة.", 30, 65),
    pin("white-matter", "White matter", "المادة البيضاء", "Bundles of myelinated axons that carry signals up and down the cord.", "حزم من محاور مغلفة بالميالين تنقل الإشارات صعوداً وهبوطاً.", 60, 48),
    pin("cord-edge", "Outer edge (meninges side)", "الحافة الخارجية (جهة السحايا)", "The surface of the cord, wrapped by the meninges.", "سطح النخاع وتغلفه السحايا.", 92, 25),
  ]),
  make("tongue-section", "anatomy", { en: "Tongue, section", ar: "لسان، مقطع" }, { en: "Tongue", ar: "لسان" }, { en: "Surface epithelium over connective tissue, fat and skeletal muscle.", ar: "ظهارة سطحية فوق نسيج ضام ودهون وعضلات هيكلية." }, [
    pin("lingual-epithelium", "Stratified squamous epithelium", "ظهارة حرشفية طبقية", "Thick protective surface layer of the tongue.", "طبقة سطحية سميكة واقية للسان.", 60, 10),
    pin("lingual-connective", "Connective tissue (lamina propria)", "نسيج ضام (صفيحة مخصوصة)", "Supports the epithelium and carries vessels.", "يدعم الظهارة ويحمل الأوعية.", 35, 25),
    pin("fat-cells", "Fat cells", "خلايا دهنية", "Pale round spaces where fat was stored.", "فراغات مستديرة فاتحة كان الدهن مخزناً فيها.", 22, 45),
    pin("lingual-muscle", "Skeletal muscle bundles", "حزم عضلية هيكلية", "Interlacing muscle bundles that move the tongue.", "حزم عضلية متشابكة تحرك اللسان.", 45, 62),
  ]),
  make("cerebellum-section", "anatomy", { en: "Cerebellar cortex", ar: "قشرة المخيخ" }, { en: "Cerebellum", ar: "مخيخ" }, { en: "Pale molecular layer and a dense granular layer with Purkinje cells between.", ar: "طبقة جزيئية فاتحة وطبقة حبيبية كثيفة بينهما خلايا بركنجي." }, [
    pin("molecular-layer", "Molecular layer", "الطبقة الجزيئية", "Outer layer with few cells and many nerve fibres.", "طبقة خارجية قليلة الخلايا وغنية بالألياف العصبية.", 22, 50),
    pin("purkinje-layer", "Purkinje cell layer", "طبقة خلايا بركنجي", "A single row of large neurons between the two layers.", "صف واحد من الخلايا العصبية الكبيرة بين الطبقتين.", 46, 45),
    pin("granular-layer", "Granular layer", "الطبقة الحبيبية", "Densely packed small granule cells.", "خلايا حبيبية صغيرة متراصة بكثافة.", 75, 60),
  ]),
  make("spleen-section", "anatomy", { en: "Spleen: red pulp and white pulp", ar: "طحال: اللب الأحمر والأبيض" }, { en: "Spleen", ar: "طحال" }, { en: "Dark lymphoid white pulp among blood-filled red pulp.", ar: "لب أبيض لمفاوي داكن بين لب أحمر ممتلئ بالدم." }, [
    pin("white-pulp", "White pulp", "اللب الأبيض", "Lymphocyte clusters that respond to blood-borne germs.", "تجمعات لمفاوية تستجيب للميكروبات في الدم.", 37, 23),
    pin("red-pulp", "Red pulp", "اللب الأحمر", "Blood-filled cords and sinuses that filter old red cells.", "حبال وجيوب ممتلئة بالدم تصفّي الكريات الحمراء القديمة.", 10, 30),
    pin("trabecula", "Trabecula (connective tissue strand)", "حاجز ضام", "Connective tissue strands that support the organ.", "خيوط نسيج ضام تدعم العضو.", 94, 45),
  ]),
  make("medicago-stem", "botany", { en: "Medicago stem, cross-section", ar: "ساق البرسيم الحجازي، مقطع عرضي" }, { en: "Medicago stem", ar: "ساق البرسيم" }, { en: "Ring of vascular tissue around a central pith.", ar: "حلقة نسيج وعائي حول نخاع مركزي." }, [
    pin("stem-epidermis", "Epidermis", "البشرة", "Outer covering of the stem.", "الغلاف الخارجي للساق.", 50, 3),
    pin("stem-cortex", "Cortex", "القشرة", "Tissue under the epidermis that supports the stem.", "نسيج تحت البشرة يدعم الساق.", 15, 20),
    pin("vascular-ring", "Vascular ring (xylem and fibres)", "حلقة وعائية (خشب وألياف)", "Conducts water and gives strength.", "تنقل الماء وتعطي القوة.", 92, 57),
    pin("large-vessels", "Large xylem vessels", "أوعية خشبية كبيرة", "Wide vessels that carry water.", "أوعية واسعة تنقل الماء.", 38, 36),
    pin("stem-pith", "Pith", "النخاع", "Central parenchyma of the stem.", "نسيج برانشيمي مركزي في الساق.", 60, 70),
  ]),
  make("broad-bean-root", "botany", { en: "Broad bean root, cross-section", ar: "جذر الفول، مقطع عرضي" }, { en: "Broad bean root", ar: "جذر الفول" }, { en: "Central vascular cylinder with xylem arms inside a wide cortex.", ar: "أسطوانة وعائية مركزية بأذرع خشبية داخل قشرة واسعة." }, [
    pin("root-stele", "Vascular cylinder (xylem arms)", "الأسطوانة الوعائية (أذرع الخشب)", "Xylem and phloem in the centre of the root.", "الخشب واللحاء في مركز الجذر.", 51, 53),
    pin("root-cortex", "Cortex", "القشرة", "Large parenchyma cells that store food.", "خلايا برانشيمية كبيرة تخزن الغذاء.", 20, 50),
    pin("root-epidermis", "Epidermis (outer edge)", "البشرة (الحافة الخارجية)", "Outer layer that absorbs water.", "طبقة خارجية تمتص الماء.", 2, 30),
  ]),
  make("onion-root-tip", "botany", { en: "Onion root tip: cells in mitosis", ar: "طرف جذر البصل: خلايا في الانقسام" }, { en: "Onion root tip", ar: "طرف جذر البصل" }, { en: "Many nuclei at different stages of the cell cycle.", ar: "أنوية كثيرة في مراحل مختلفة من دورة الخلية." }, [
    pin("mitotic-figure-a", "Dividing cell (chromosomes visible)", "خلية منقسمة (الكروموسومات ظاهرة)", "Condensed chromosomes show that the cell is in mitosis.", "الكروموسومات المتكثفة تدل على أن الخلية في الانقسام.", 36, 27),
    pin("mitotic-figure-b", "Second dividing cell", "خلية منقسمة ثانية", "Cells in different mitotic stages sit side by side.", "خلايا في مراحل انقسام مختلفة بجوار بعضها.", 65, 25),
    pin("interphase-nucleus", "Interphase nucleus", "نواة في الطور البيني", "A round nucleus with a visible nucleolus: not dividing.", "نواة مستديرة بنوية ظاهرة: الخلية لا تنقسم.", 83, 41),
  ]),
  make("human-skin-with-sweat-glands-100x", "anatomy", { en: "Skin with a sweat gland duct", ar: "جلد مع قناة غدة عرقية" }, { en: "Skin", ar: "جلد" }, { en: "Thick epidermis above dermis with a coiled sweat duct.", ar: "بشرة سميكة فوق أدمة بها قناة عرقية ملتفة." }, [
    pin("epidermis-skin", "Epidermis", "البشرة", "Stratified squamous epithelium that protects the skin.", "ظهارة حرشفية طبقية تحمي الجلد.", 60, 60),
    pin("stratum-corneum", "Pale surface band (stratum corneum)", "الشريط الفاتح السطحي (الطبقة القرنية)", "Dead flattened cells filled with keratin.", "خلايا ميتة مفلطحة مليئة بالكيراتين.", 33, 33),
    pin("sweat-duct", "Sweat gland duct", "قناة الغدة العرقية", "Carries sweat up to the skin surface.", "تنقل العرق إلى سطح الجلد.", 21, 68),
    pin("dermis", "Dermis", "الأدمة", "Connective tissue under the epidermis.", "نسيج ضام تحت البشرة.", 75, 93),
  ]),
  make("tooth-248-15", "anatomy", { en: "Tooth: dentine and enamel", ar: "سن: العاج والمينا" }, { en: "Tooth", ar: "سن" }, { en: "Enamel prisms over dentine with fine tubules, next to the pulp.", ar: "مينا فوق عاج به أنيبيبات دقيقة بجوار اللب." }, [
    pin("enamel", "Enamel", "المينا", "The hardest tissue of the body, covers the crown.", "أصلب نسيج في الجسم ويغطي التاج.", 82, 8),
    pin("dentine", "Dentine", "العاج", "Hard tissue with fine tubules that forms most of the tooth.", "نسيج صلب بأنيبيبات دقيقة يكوّن معظم السن.", 50, 40),
    pin("pulp-cavity", "Pulp cavity edge", "حافة تجويف اللب", "Soft centre with nerves and blood vessels.", "مركز لين به أعصاب وأوعية دموية.", 10, 80),
  ]),
  make("large-artery", "anatomy", { en: "Large artery wall", ar: "جدار شريان كبير" }, { en: "Large artery", ar: "شريان كبير" }, { en: "Thick muscular and elastic wall with a thin outer layer.", ar: "جدار سميك مرن وعضلي بطبقة خارجية رقيقة." }, [
    pin("artery-lumen", "Lumen", "التجويف", "The channel that carries blood.", "القناة التي تحمل الدم.", 50, 18),
    pin("tunica-intima", "Tunica intima", "الغلالة الباطنة", "Thin inner lining of endothelium.", "بطانة داخلية رقيقة من الخلايا البطانية.", 50, 28),
    pin("tunica-media", "Tunica media", "الغلالة الوسطى", "Thick layer of smooth muscle and elastic fibres.", "طبقة سميكة من عضلات ملساء وألياف مرنة.", 50, 38),
    pin("tunica-adventitia", "Tunica adventitia", "الغلالة الخارجية", "Loose connective tissue outside the wall.", "نسيج ضام رخو خارج الجدار.", 50, 52),
  ]),
  make("oesophagus", "anatomy", { en: "Oesophagus wall", ar: "جدار المريء" }, { en: "Oesophagus", ar: "مريء" }, { en: "Thick stratified squamous lining over connective tissue and glands.", ar: "بطانة حرشفية طبقية سميكة فوق نسيج ضام وغدد." }, [
    pin("oeso-epithelium", "Stratified squamous epithelium", "ظهارة حرشفية طبقية", "Thick lining that resists friction from food.", "بطانة سميكة تقاوم احتكاك الطعام.", 45, 45),
    pin("oeso-lumen", "Lumen", "التجويف", "The collapsed space through which food passes.", "الحيّز المنطبق الذي يمر فيه الطعام.", 78, 68),
    pin("oeso-lamina", "Lamina propria and muscularis mucosae", "الصفيحة المخصوصة والعضلة المخاطية", "Connective tissue and a thin muscle layer under the epithelium.", "نسيج ضام وطبقة عضلية رقيقة تحت الظهارة.", 35, 28),
    pin("oeso-gland", "Oesophageal gland", "غدة مريئية", "Small mucus-secreting glands in the wall.", "غدد صغيرة تفرز المخاط في الجدار.", 20, 62),
  ]),
];
