import { slideSchemas } from './slideSchemas';
import { specimenSchemas } from './specimenSchemas';
import { specimenSchemas2 } from './specimenSchemas2';
import { specimenSchemas4 } from './specimenSchemas4';
import { specimenSchemas3 } from './specimenSchemas3';
import { references, type Bilingual, type ScientificReference } from './scientificData';

export type SlidePhoto = { src: string; title: string; author: string; license: string; sourceUrl: string };
export type DiagramCategory = 'anatomy' | 'botany' | 'chemistry' | 'cell-biology';
export type DiagramStructure = {
  id: string;
  name: Bilingual;
  function: Bilingual;
  note: Bilingual;
  x: number;
  y: number;
  aliases: string[];
};
export type ScientificDiagram = {
  id: string;
  category: DiagramCategory;
  title: Bilingual;
  shortTitle: Bilingual;
  summary: Bilingual;
  disclaimer: Bilingual;
  references: ScientificReference[];
  structures: DiagramStructure[];
  photo?: SlidePhoto;
  needsReview?: boolean;
};

export const diagramCategories: { id: DiagramCategory; title: Bilingual; code: string }[] = [
  { id: 'anatomy', title: { en: 'Zoology / Anatomy', ar: 'علم الحيوان / التشريح' }, code: '01' },
  { id: 'botany', title: { en: 'Botany', ar: 'علم النبات' }, code: '02' },
  { id: 'chemistry', title: { en: 'Chemistry / Lab apparatus', ar: 'الكيمياء / أدوات المختبر' }, code: '03' },
  { id: 'cell-biology', title: { en: 'Cell Biology', ar: 'علم الأحياء الخلوي' }, code: '04' },
];

const baseDiagrams: ScientificDiagram[] = [
  {
    id: 'human-heart', category: 'anatomy',
    title: { en: 'Human heart & blood flow', ar: 'القلب البشري ومسار الدم' },
    shortTitle: { en: 'Heart', ar: 'القلب' },
    summary: { en: 'Trace the usual adult flow through the four chambers, valves, lungs, and body.', ar: 'تتبّع مسار الدم المعتاد لدى البالغ عبر الحجرات الأربع والصمامات والرئتين والجسم.' },
    disclaimer: { en: 'Simplified adult circulation schematic; not to scale and not a clinical illustration.', ar: 'رسم تخطيطي مبسّط للدورة الدموية لدى البالغ؛ غير مرسوم بمقياس وليس رسماً سريرياً.' },
    references: [...references.heart],
    structures: [
      { id: 'vena-cavae', name: { en: 'Superior and inferior venae cavae', ar: 'الوريدان الأجوفان العلوي والسفلي' }, function: { en: 'Return oxygen-poor blood from the body to the right atrium.', ar: 'يعيدان الدم الفقير بالأكسجين من الجسم إلى الأذين الأيمن.' }, note: { en: 'The superior vena cava returns from the upper body; the inferior vena cava returns from the lower body.', ar: 'يعيد الوريد الأجوف العلوي الدم من الجزء العلوي للجسم، والسفلي من الجزء السفلي.' }, x: 46, y: 31, aliases: ['vena cava', 'vena cavae'] },
      { id: 'right-atrium', name: { en: 'Right atrium', ar: 'الأذين الأيمن' }, function: { en: 'Receives returning blood from the body.', ar: 'يستقبل الدم العائد من الجسم.' }, note: { en: 'First heart chamber in the usual adult-flow sequence.', ar: 'أول حجرة قلبية في تسلسل جريان الدم المعتاد لدى البالغ.' }, x: 46, y: 42, aliases: ['right atrium'] },
      { id: 'tricuspid', name: { en: 'Tricuspid valve', ar: 'الصمام ثلاثي الشرفات' }, function: { en: 'Controls flow from the right atrium to the right ventricle.', ar: 'ينظّم تدفق الدم من الأذين الأيمن إلى البطين الأيمن.' }, note: { en: 'It is the right atrioventricular valve.', ar: 'هو الصمام الأذيني البطيني الأيمن.' }, x: 47, y: 50, aliases: ['tricuspid valve'] },
      { id: 'right-ventricle', name: { en: 'Right ventricle', ar: 'البطين الأيمن' }, function: { en: 'Pumps blood toward the lungs.', ar: 'يضخ الدم باتجاه الرئتين.' }, note: { en: 'Blood leaves the right ventricle through the pulmonary valve.', ar: 'يغادر الدم البطين الأيمن عبر الصمام الرئوي.' }, x: 47, y: 63, aliases: ['right ventricle'] },
      { id: 'pulmonary-valve', name: { en: 'Pulmonary valve', ar: 'الصمام الرئوي' }, function: { en: 'Controls outflow from the right ventricle into the pulmonary artery.', ar: 'ينظّم خروج الدم من البطين الأيمن إلى الشريان الرئوي.' }, note: { en: 'It precedes the pulmonary arteries in the flow sequence.', ar: 'يأتي قبل الشرايين الرئوية في تسلسل جريان الدم.' }, x: 50, y: 36, aliases: ['pulmonary valve'] },
      { id: 'pulmonary-arteries', name: { en: 'Pulmonary arteries', ar: 'الشرايين الرئوية' }, function: { en: 'Carry blood from the right ventricle to the lungs.', ar: 'تنقل الدم من البطين الأيمن إلى الرئتين.' }, note: { en: 'In the usual adult circulation, they carry oxygen-poor blood.', ar: 'تنقل دماً فقيراً بالأكسجين في الدورة الدموية المعتادة لدى البالغ.' }, x: 51, y: 15, aliases: ['pulmonary artery', 'pulmonary arteries'] },
      { id: 'pulmonary-veins', name: { en: 'Pulmonary veins', ar: 'الأوردة الرئوية' }, function: { en: 'Return blood from the lungs to the left atrium.', ar: 'تعيد الدم من الرئتين إلى الأذين الأيسر.' }, note: { en: 'In the usual adult circulation, they carry oxygen-rich blood.', ar: 'تنقل دماً غنياً بالأكسجين في الدورة الدموية المعتادة لدى البالغ.' }, x: 68, y: 42, aliases: ['pulmonary vein', 'pulmonary veins'] },
      { id: 'left-atrium', name: { en: 'Left atrium', ar: 'الأذين الأيسر' }, function: { en: 'Receives blood returning from the lungs.', ar: 'يستقبل الدم العائد من الرئتين.' }, note: { en: 'It empties into the left ventricle through the mitral valve.', ar: 'يفرغ الدم إلى البطين الأيسر عبر الصمام التاجي.' }, x: 56, y: 42, aliases: ['left atrium'] },
      { id: 'mitral', name: { en: 'Mitral valve', ar: 'الصمام التاجي' }, function: { en: 'Controls flow from the left atrium into the left ventricle.', ar: 'ينظّم تدفق الدم من الأذين الأيسر إلى البطين الأيسر.' }, note: { en: 'Also called the left atrioventricular valve.', ar: 'يُسمّى أيضاً الصمام الأذيني البطيني الأيسر.' }, x: 53, y: 50, aliases: ['mitral valve', 'bicuspid valve'] },
      { id: 'left-ventricle', name: { en: 'Left ventricle', ar: 'البطين الأيسر' }, function: { en: 'Pumps blood into the aorta and systemic circulation.', ar: 'يضخ الدم إلى الشريان الأبهر والدورة الدموية الجهازية.' }, note: { en: 'It generates pressure for flow to the body.', ar: 'يولّد الضغط اللازم لتدفق الدم إلى الجسم.' }, x: 54, y: 63, aliases: ['left ventricle'] },
      { id: 'aortic-valve', name: { en: 'Aortic valve', ar: 'الصمام الأبهري' }, function: { en: 'Controls outflow from the left ventricle into the aorta.', ar: 'ينظّم خروج الدم من البطين الأيسر إلى الشريان الأبهر.' }, note: { en: 'It precedes the aorta in the flow sequence.', ar: 'يأتي قبل الشريان الأبهر في تسلسل جريان الدم.' }, x: 52, y: 53, aliases: ['aortic valve'] },
      { id: 'aorta', name: { en: 'Aorta', ar: 'الشريان الأبهر' }, function: { en: 'Carries blood away from the left ventricle to the body.', ar: 'ينقل الدم من البطين الأيسر إلى الجسم.' }, note: { en: 'The aorta is the main systemic artery.', ar: 'الشريان الأبهر هو الشريان الجهازي الرئيسي.' }, x: 59, y: 16, aliases: ['aorta'] },
    ],
  },
  {
    id: 'dicot-leaf-schema', category: 'botany',
    title: { en: 'Generalized dicot leaf cross-section', ar: 'مقطع عرضي عام لورقة ثنائية الفلقة' },
    shortTitle: { en: 'Leaf section', ar: 'مقطع الورقة' },
    summary: { en: 'Identify the surface layers, mesophyll tissues, and vascular bundle.', ar: 'تعرّف إلى طبقات السطح وأنسجة النسيج المتوسط والحزمة الوعائية.' },
    disclaimer: { en: 'Generalized mesophytic dicot schema; structure and stomatal placement vary among species.', ar: 'رسم عام لورقة نبات ثنائي الفلقة متوسط البيئة؛ يختلف تركيب الورقة وموقع الثغور بين الأنواع.' },
    references: [...references.leaf],
    structures: [
      { id: 'cuticle', name: { en: 'Cuticle', ar: 'الكيوتكل (الطبقة الشمعية)' }, function: { en: 'Waxy surface layer that helps reduce water loss.', ar: 'طبقة سطحية شمعية تساعد على تقليل فقد الماء.' }, note: { en: 'It covers the epidermis; it is not itself a cell layer.', ar: 'تغطي البشرة وليست طبقة خلوية بحد ذاتها.' }, x: 51, y: 19, aliases: ['cuticle'] },
      { id: 'upper-epidermis', name: { en: 'Upper epidermis', ar: 'البشرة العلوية' }, function: { en: 'Protective outer tissue on the upper leaf surface.', ar: 'نسيج خارجي واقٍ على السطح العلوي للورقة.' }, note: { en: 'Its thickness and layering vary among species.', ar: 'يختلف سمكها وعدد طبقاتها بين الأنواع.' }, x: 20, y: 22, aliases: ['upper epidermis', 'epidermis'] },
      { id: 'palisade', name: { en: 'Palisade mesophyll', ar: 'النسيج المتوسط العمادي' }, function: { en: 'Closely packed chloroplast-rich cells capture light for photosynthesis.', ar: 'تلتقط خلاياه المتقاربة والغنية بالبلاستيدات الضوء للبناء الضوئي.' }, note: { en: 'Commonly lies just below the upper epidermis in a generalized dicot leaf.', ar: 'يقع عادة أسفل البشرة العلوية في الرسم العام لورقة ثنائية الفلقة.' }, x: 24, y: 34, aliases: ['palisade mesophyll', 'palisade layer'] },
      { id: 'spongy', name: { en: 'Spongy mesophyll', ar: 'النسيج المتوسط الإسفنجي' }, function: { en: 'Loosely arranged cells and air spaces support gas movement inside the leaf.', ar: 'تساعد الخلايا المتباعدة والمسافات الهوائية على حركة الغازات داخل الورقة.' }, note: { en: 'Often shown beneath palisade mesophyll in the generalized arrangement.', ar: 'يُعرض غالباً أسفل النسيج العمادي في الترتيب العام.' }, x: 22, y: 57, aliases: ['spongy mesophyll', 'spongy layer'] },
      { id: 'bundle', name: { en: 'Vascular bundle (vein)', ar: 'الحزمة الوعائية (العِرق)' }, function: { en: 'Contains vascular tissues that transport materials through the leaf.', ar: 'تحتوي أنسجة وعائية تنقل المواد عبر الورقة.' }, note: { en: 'A bundle may also include supporting tissues; exact arrangement varies.', ar: 'قد تضم الحزمة أنسجة داعمة أيضاً؛ ويختلف ترتيبها الدقيق.' }, x: 61, y: 56, aliases: ['vascular bundle', 'vein'] },
      { id: 'xylem', name: { en: 'Xylem', ar: 'الخشب' }, function: { en: 'Transports water and minerals to the leaf.', ar: 'ينقل الماء والمعادن إلى الورقة.' }, note: { en: 'One of the two main vascular tissues in a leaf bundle.', ar: 'أحد النسيجين الوعائيين الرئيسيين في الحزمة.' }, x: 61, y: 52, aliases: ['xylem'] },
      { id: 'phloem', name: { en: 'Phloem', ar: 'اللحاء' }, function: { en: 'Transports photosynthetic products from the leaf to other plant parts.', ar: 'ينقل نواتج البناء الضوئي من الورقة إلى أجزاء النبات الأخرى.' }, note: { en: 'One of the two main vascular tissues in a leaf bundle.', ar: 'أحد النسيجين الوعائيين الرئيسيين في الحزمة.' }, x: 61, y: 60, aliases: ['phloem'] },
      { id: 'lower-epidermis', name: { en: 'Lower epidermis', ar: 'البشرة السفلية' }, function: { en: 'Protective tissue on the lower leaf surface; may contain stomata.', ar: 'نسيج واقٍ على السطح السفلي للورقة وقد يحتوي على ثغور.' }, note: { en: 'Stomatal distribution differs among species and habitats.', ar: 'يختلف توزيع الثغور باختلاف الأنواع والبيئات.' }, x: 23, y: 75, aliases: ['lower epidermis', 'epidermis'] },
      { id: 'stoma', name: { en: 'Stoma', ar: 'الثغر' }, function: { en: 'Epidermal pore for gas exchange and water-vapor movement.', ar: 'فتحة في البشرة لتبادل الغازات وحركة بخار الماء.' }, note: { en: 'Stomata are pores, not cells.', ar: 'الثغور فتحات وليست خلايا.' }, x: 47, y: 71, aliases: ['stoma', 'stomata'] },
      { id: 'guard-cells', name: { en: 'Guard cells', ar: 'الخلايا الحارسة' }, function: { en: 'Paired cells regulate the opening and closing of a stoma.', ar: 'تنظّم خليتان متقابلتان فتح الثغر وإغلاقه.' }, note: { en: 'Guard cells surround the stomatal pore.', ar: 'تحيط الخلايا الحارسة بفتحة الثغر.' }, x: 50, y: 72, aliases: ['guard cell', 'guard cells'] },
    ],
  },
  {
    id: 'lab-apparatus', category: 'chemistry',
    title: { en: 'Introductory chemistry apparatus', ar: 'أدوات مختبر الكيمياء التمهيدي' },
    shortTitle: { en: 'Lab apparatus', ar: 'أدوات المختبر' },
    summary: { en: 'Match common glassware and equipment to its intended laboratory use.', ar: 'اربط الأدوات الزجاجية والمعدات الشائعة باستخدامها المخبري المقصود.' },
    disclaimer: { en: 'Follow local laboratory rules and instructor guidance; heating equipment involves hazards.', ar: 'اتبع قواعد المختبر المحلية وتعليمات المدرّس؛ فمعدات التسخين تنطوي على مخاطر.' },
    references: [...references.lab],
    structures: [
      { id: 'beaker', name: { en: 'Beaker', ar: 'كأس مخبري' }, function: { en: 'Holds and pours liquids; not intended for accurate volume measurement.', ar: 'يحتوي السوائل ويسكبها، وليس مخصصاً لقياس الحجم بدقة.' }, note: { en: 'Approximate graduations should not be treated as precise measurements.', ar: 'لا ينبغي اعتبار تدريجاته التقريبية قياسات دقيقة.' }, x: 15, y: 48, aliases: ['beaker'] },
      { id: 'erlenmeyer', name: { en: 'Erlenmeyer flask', ar: 'دورق إرلنماير' }, function: { en: 'Contains liquids for mixing or swirling with reduced spill risk.', ar: 'يحتوي السوائل للخلط أو التحريك مع تقليل خطر الانسكاب.' }, note: { en: 'It is not intended for accurate volume measurement.', ar: 'ليس مخصصاً لقياس الحجم بدقة.' }, x: 39, y: 48, aliases: ['erlenmeyer flask', 'flask'] },
      { id: 'graduated-cylinder', name: { en: 'Graduated cylinder', ar: 'مخبار مدرّج' }, function: { en: 'Measures a range of liquid volumes.', ar: 'يقيس نطاقاً من أحجام السوائل.' }, note: { en: 'Read the bottom of the meniscus at eye level.', ar: 'اقرأ أسفل السطح الهلالي عند مستوى العين.' }, x: 61, y: 42, aliases: ['graduated cylinder', 'measuring cylinder'] },
      { id: 'test-tube', name: { en: 'Test tube', ar: 'أنبوب اختبار' }, function: { en: 'Holds and mixes small samples.', ar: 'يحتوي عينات صغيرة ويخلطها.' }, note: { en: 'When heated, keep the open end pointed away from people.', ar: 'عند التسخين، وجّه الفتحة بعيداً عن الأشخاص.' }, x: 84, y: 39, aliases: ['test tube'] },
      { id: 'pipette', name: { en: 'Volumetric pipette', ar: 'ماصّة حجمية' }, function: { en: 'Delivers one specified volume of liquid.', ar: 'تنقل حجماً محدداً واحداً من السائل.' }, note: { en: 'Use a pipette filler; allow calibrated drainage and do not blow out a standard retained tip drop.', ar: 'استخدم ممصّة؛ واترك السائل ينساب وفق المعايرة ولا تنفخ القطرة المتبقية في الماصّة القياسية.' }, x: 15, y: 83, aliases: ['volumetric pipette', 'pipette'] },
      { id: 'burner', name: { en: 'Bunsen burner', ar: 'موقد بنسن' }, function: { en: 'Provides an adjustable flame for heating where laboratory rules permit.', ar: 'يوفّر لهباً قابلاً للضبط للتسخين حيث تسمح قواعد المختبر.' }, note: { en: 'Never leave a lit burner unattended or heat a closed container; shut off gas when finished.', ar: 'لا تترك الموقد المشتعل دون مراقبة ولا تسخّن وعاءً مغلقاً؛ وأغلق الغاز بعد الانتهاء.' }, x: 39, y: 83, aliases: ['bunsen burner', 'burner'] },
      { id: 'balance', name: { en: 'Balance', ar: 'ميزان' }, function: { en: 'Measures the mass of a sample.', ar: 'يقيس كتلة العينة.' }, note: { en: 'Use weighing paper or a vessel and wait for a stable reading.', ar: 'استخدم ورقاً أو وعاءً للوزن وانتظر ثبات القراءة.' }, x: 64, y: 82, aliases: ['balance', 'laboratory balance'] },
    ],
  },
  {
    id: 'animal-cell', category: 'cell-biology',
    title: { en: 'Typical animal cell', ar: 'خلية حيوانية نموذجية' },
    shortTitle: { en: 'Animal cell', ar: 'خلية حيوانية' },
    summary: { en: 'Explore organelles in a simplified eukaryotic animal-cell model.', ar: 'استكشف العضيّات في نموذج مبسّط لخلية حيوانية حقيقية النواة.' },
    disclaimer: { en: 'Introductory schematic, not to scale; organelle abundance varies by cell type and activity.', ar: 'رسم تعليمي مبسّط وغير مرسوم بمقياس؛ ويتفاوت عدد العضيّات بحسب نوع الخلية ونشاطها.' },
    references: [...references.animalCell],
    structures: [
      { id: 'membrane', name: { en: 'Plasma membrane', ar: 'الغشاء البلازمي' }, function: { en: 'Separates the cell from its surroundings and regulates exchange of substances.', ar: 'يفصل الخلية عن محيطها وينظّم تبادل المواد.' }, note: { en: 'A selectively permeable phospholipid bilayer with proteins.', ar: 'طبقة ثنائية من الفسفوليبيدات مع بروتينات، ذات نفاذية اختيارية.' }, x: 18, y: 52, aliases: ['plasma membrane', 'cell membrane'] },
      { id: 'nucleus', name: { en: 'Nucleus', ar: 'النواة' }, function: { en: 'Contains the cell’s DNA and regulates gene expression.', ar: 'تحتوي الحمض النووي للخلية وتنظّم التعبير الجيني.' }, note: { en: 'The nuclear envelope is distinct from the plasma membrane.', ar: 'الغلاف النووي مختلف عن الغشاء البلازمي.' }, x: 47, y: 50, aliases: ['nucleus'] },
      { id: 'nucleolus', name: { en: 'Nucleolus', ar: 'النُّوَيّة' }, function: { en: 'Produces ribosomal RNA and assembles ribosomal subunits.', ar: 'تنتج الحمض النووي الريبي الريبوسومي وتجمع الوحدات الريبوسومية.' }, note: { en: 'A region inside the nucleus, not a separate membrane-bound organelle.', ar: 'منطقة داخل النواة وليست عضيّة منفصلة محاطة بغشاء.' }, x: 49, y: 51, aliases: ['nucleolus'] },
      { id: 'mitochondria', name: { en: 'Mitochondrion', ar: 'الميتوكوندريون' }, function: { en: 'Carries out cellular respiration and generates much of the cell’s ATP.', ar: 'ينفّذ التنفس الخلوي وينتج قسماً كبيراً من ATP في الخلية.' }, note: { en: 'Has outer and inner membranes; inner folds are called cristae.', ar: 'له غشاءان خارجي وداخلي؛ وتسمّى طيات الغشاء الداخلي الأعراف.' }, x: 29, y: 41, aliases: ['mitochondrion', 'mitochondria'] },
      { id: 'rough-er', name: { en: 'Rough endoplasmic reticulum', ar: 'الشبكة الإندوبلازمية الخشنة' }, function: { en: 'Synthesizes and begins modifying proteins for membranes or secretion.', ar: 'تصنع البروتينات الموجهة للأغشية أو الإفراز وتبدأ تعديلها.' }, note: { en: 'Ribosomes attach to its cytoplasmic surface.', ar: 'ترتبط الريبوسومات بسطحها المواجه للسيتوبلازم.' }, x: 44, y: 40, aliases: ['rough er', 'rough endoplasmic reticulum'] },
      { id: 'smooth-er', name: { en: 'Smooth endoplasmic reticulum', ar: 'الشبكة الإندوبلازمية الملساء' }, function: { en: 'Synthesizes lipids and supports calcium regulation and other cell-type-specific functions.', ar: 'تصنع الدهون وتدعم تنظيم الكالسيوم ووظائف أخرى تختلف باختلاف نوع الخلية.' }, note: { en: 'Unlike rough ER, it lacks attached ribosomes.', ar: 'على خلاف الشبكة الخشنة، لا ترتبط بسطحها ريبوسومات.' }, x: 68, y: 38, aliases: ['smooth er', 'smooth endoplasmic reticulum'] },
      { id: 'golgi', name: { en: 'Golgi apparatus', ar: 'جهاز غولجي' }, function: { en: 'Sorts, modifies, and packages products into transport vesicles.', ar: 'يفرز المنتجات ويعدّلها ويعبئها داخل حويصلات النقل.' }, note: { en: 'Receives many of its products from the endoplasmic reticulum.', ar: 'يتلقى كثيراً من منتجاته من الشبكة الإندوبلازمية.' }, x: 31, y: 72, aliases: ['golgi', 'golgi apparatus', 'golgi body'] },
      { id: 'ribosomes', name: { en: 'Ribosomes', ar: 'الريبوسومات' }, function: { en: 'Translate mRNA to synthesize proteins.', ar: 'تترجم mRNA لتصنيع البروتينات.' }, note: { en: 'They can be free in the cytosol or bound to rough ER.', ar: 'قد تكون حرة في السيتوسول أو مرتبطة بالشبكة الإندوبلازمية الخشنة.' }, x: 31, y: 36, aliases: ['ribosome', 'ribosomes'] },
      { id: 'lysosome', name: { en: 'Lysosome', ar: 'الجسيم الحالّ' }, function: { en: 'Digests cellular components and material taken into the cell.', ar: 'يهضم مكونات الخلية والمواد التي تدخل إليها.' }, note: { en: 'Contains digestive enzymes in an acidic compartment.', ar: 'يحتوي إنزيمات هاضمة في حجرة حمضية.' }, x: 32, y: 61, aliases: ['lysosome', 'lysosomes'] },
    ],
  },
];

export const diagrams: ScientificDiagram[] = [...baseDiagrams, ...slideSchemas, ...specimenSchemas, ...specimenSchemas2, ...specimenSchemas3, ...specimenSchemas4];

export function getDiagram(id: string | undefined) {
  return diagrams.find((diagram) => diagram.id === id);
}
