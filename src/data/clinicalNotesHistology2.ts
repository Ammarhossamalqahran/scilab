import type { ClinicalNote } from './clinicalNotes';

// Batch 5: pathology, cytology and a few more histology slides. Every sentence comes from the cited NCBI Bookshelf (StatPearls) page.
const sp = (id: string, title: string) => ({ title: `NCBI StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${id}/` });

const testis: ClinicalNote = {
  recognize: { en: 'The testis is where sperm are made. Spermatogenesis has three steps: mitotic division of spermatogonia, meiosis (diploid cells become haploid), and the final change of round spermatids into sperm.', ar: 'الخصية هي مكان تكوين الحيوانات المنوية. تكوين الحيوانات المنوية 3 مراحل: انقسام فتيلي للأرومات المنوية، ثم انقسام اختزالي (الخلايا ثنائية المجموعة تبقى أحادية)، وأخيرًا تحول الطلائع المنوية المستديرة لحيوانات منوية.' },
  source: sp('NBK553142', 'Histology, Spermatogenesis'),
};

export const histology2Notes: Record<string, ClinicalNote> = {
  'testis-section': testis,
  'testis-254-18': testis,
  'testis-26-2-15': testis,
  'testis-265-20': testis,
  'basal-cell-carcinoma-of-the-skin': {
    recognize: { en: 'The hallmark is islands or nests of basaloid cells with peripheral palisading of the nuclei and a more disorganized arrangement in the center. The cells are small and pleomorphic with basophilic nuclei and no clear nucleoli.', ar: 'العلامة المميزة جزر أو أعشاش من خلايا قاعدية الشكل، نواها محيطيًا مصطفة كالسياج، وفي المركز ترتيبها أكتر عشوائية. الخلايا صغيرة متعددة الأشكال بنوى قاعدية الميل وبدون نُوَيّات واضحة.' },
    clinical: { en: 'Basal cell carcinoma is the most common skin cancer and the most frequently diagnosed malignancy in the United States. It is rarely fatal but is locally invasive and can destroy tissue.', ar: 'سرطان الخلايا القاعدية أشهر سرطان جلدي وأكتر ورم خبيث تشخيصًا في أمريكا. نادرًا ما يكون مميتًا لكنه غازٍ موضعيًا وممكن يدمر الأنسجة.' },
    source: sp('NBK482439', 'Basal Cell Carcinoma'),
  },
  'hpv-infected-cervical-cell-koilocyte-pap-stain': {
    recognize: { en: 'Koilocytes are squamous cells with a cleared (cavitated) zone around the nucleus and an enlarged, hyperchromatic nucleus with an irregular membrane.', ar: 'الخلايا المجوّفة (koilocytes) خلايا حرشفية حولها منطقة فاتحة مجوّفة حول النواة، والنواة كبيرة داكنة بغشاء غير منتظم.' },
    clinical: { en: 'Koilocytosis is pathognomonic, though not required, for low-grade squamous intraepithelial lesion (LSIL). Cervical cytology (Pap smears) commonly shows it.', ar: 'وجود الخلايا المجوّفة علامة مميزة (وإن لم تكن مطلوبة) للآفة الظهارية الحرشفية منخفضة الدرجة (LSIL). لطاخة عنق الرحم (Pap) غالبًا بتظهرها.' },
    source: sp('NBK532958', 'Koilocytosis'),
  },
  'crystals-in-joint-tissue-polarised-light-pseudogout': {
    recognize: { en: 'CPP crystals are rod- or rhomboid-shaped, 1 to 22 µm, and weakly birefringent under polarized light. Urate crystals of gout are strongly negatively birefringent and needle-shaped.', ar: 'بلورات CPP عصوية أو معينية الشكل، 1 لـ 22 ميكرومتر، وضعيفة الانكسار المزدوج تحت الضوء المستقطب. بلورات اليورات في النقرس إبرية الشكل وانكسارها المزدوج سالب وقوي.' },
    clinical: { en: 'Calcium pyrophosphate deposition disease is a crystal arthropathy and the third most common form of inflammatory arthritis.', ar: 'مرض ترسب بيروفوسفات الكالسيوم اعتلال مفصلي بلوري وثالث أشهر شكل من التهاب المفاصل الالتهابي.' },
    source: sp('NBK540151', 'Calcium Pyrophosphate Deposition Disease'),
  },
  'monosodium-urate-crystals-polarised-light': {
    recognize: { en: 'Under polarized light, monosodium urate (MSU) crystals are rod or long needle-shaped with negative birefringence. They are often intracellular.', ar: 'تحت الضوء المستقطب، بلورات اليورات أحادية الصوديوم عصوية أو إبرية طويلة بانكسار مزدوج سالب، وغالبًا بتكون داخل الخلايا.' },
    clinical: { en: 'Finding MSU crystals in synovial fluid is the gold standard for diagnosing gout.', ar: 'وجود بلورات اليورات في السائل الزلالي هو المعيار الذهبي لتشخيص النقرس.' },
    source: sp('NBK546606', 'Gout'),
  },
  'hepatocellular-carcinoma-heppar-1-stain': {
    clinical: { en: 'Hepatocellular carcinoma is a primary liver tumor and makes up more than 90% of primary liver tumors.', ar: 'سرطان الخلايا الكبدية ورم أولي في الكبد وبيمثل أكتر من 90% من أورام الكبد الأولية.' },
    source: sp('NBK559177', 'Hepatocellular Carcinoma'),
  },
  'intrahepatic-cholangiocarcinoma-pcna-stain': {
    clinical: { en: 'Cholangiocarcinoma is an aggressive malignancy of the biliary epithelium, inside and outside the liver. It is hard to diagnose because a tissue sample is not always easy to obtain.', ar: 'سرطان القنوات الصفراوية ورم خبيث عدواني من ظهارة القنوات الصفراوية داخل الكبد وخارجه. تشخيصه صعب لأن الحصول على عينة نسيجية مش دايمًا سهل.' },
    source: sp('NBK560708', 'Cholangiocarcinoma'),
  },
  'anaplastic-meningioma-with-mitoses-h-e-200x': {
    clinical: { en: 'Meningioma is the most common primary central nervous system tumor (about 37.6%) and about half of all benign brain tumors. It is graded into three WHO grades by its histology.', ar: 'الورم السحائي أشهر ورم أولي في الجهاز العصبي المركزي (حوالي 37.6%) ونحو نصف الأورام الحميدة بالمخ. بيتصنف لـ 3 درجات حسب منظمة الصحة العالمية بناءً على شكله النسيجي.' },
    source: sp('NBK560538', 'Meningioma'),
  },
  'lipofuscin-in-cardiac-muscle-h-e': {
    recognize: { en: 'Lipofuscin is a pigmented, autofluorescent byproduct of failed intracellular breakdown, found in lysosomes or the cytosol of aging post-mitotic cells such as heart muscle cells.', ar: 'الليبوفوسين صبغة ناتجة عن فشل التكسير داخل الخلية، متألقة ذاتيًا، بتتواجد في الجسيمات الحالّة أو السيتوزول في الخلايا المسنة غير المنقسمة زي خلايا القلب.' },
    source: sp('NBK537358', 'Histology, Lipofuscin'),
  },
  'tooth-248-15': {
    recognize: { en: 'The tooth has a crown and a root. Enamel, mostly hydroxyapatite aligned in rods, is acellular and cannot regenerate. Dentin is produced by odontoblasts.', ar: 'السن له تاج وجذر. المينا، وأغلبها هيدروكسي أباتيت مصفوف في قضبان، عديمة الخلايا ومبتتجددش. العاج بتصنعه الخلايا البانية للعاج (odontoblasts).' },
    source: sp('NBK572055', 'Histology, Tooth'),
  },
};
