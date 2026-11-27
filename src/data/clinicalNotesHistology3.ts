import type { ClinicalNote } from './clinicalNotes';

// Batch 6: organ histology slides. Every sentence comes from the cited NCBI Bookshelf (StatPearls) page.
// Only slides that are not labelled with a non-human animal get a note, because the sources describe humans.
const sp = (id: string, title: string) => ({ title: `NCBI StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${id}/` });

const liver: ClinicalNote = {
  recognize: {
    en: 'The functional unit of the liver is the lobule: hepatocytes in a hexagonal shape around a central vein, arranged in cords with sinusoids between the cords. At the corners of the hexagon is a portal triad (bile duct, portal vein and hepatic artery branches).',
    ar: 'الوحدة الوظيفية في الكبد هي الفُصيص (lobule): خلايا كبدية على شكل سداسي حوالين وريد مركزي، مرتبة في حبال وبينها جيوب دموية (sinusoids). في أركان السداسي فيه ثالوث بابي (فرع قناة صفراوية وفرع وريد بابي وفرع شريان كبدي).',
  },
  source: sp('NBK500014', 'Anatomy, Abdomen and Pelvis: Liver'),
};
const duodenum: ClinicalNote = {
  recognize: {
    en: 'The duodenal submucosa contains Brunner glands. The mucosa is covered with villi, and the crypts of Lieberkuhn between them are where cells renew; enterocytes (with microvilli) are the most abundant cells lining the villi.',
    ar: 'تحت المخاطية في الاثني عشر فيها غدد برونر (Brunner). المخاطية مغطاة بزغابات (villi)، وبينها غدد ليبركون (crypts) اللي بتتجدد فيها الخلايا؛ والخلايا الماصة (enterocytes) بميكروفيلاي هي أكتر خلايا بتبطّن الزغابات.',
  },
  source: sp('NBK459366', 'Anatomy, Abdomen and Pelvis, Small Intestine'),
};
const smallIntestine: ClinicalNote = {
  recognize: {
    en: 'The small bowel mucosa is covered with villi that increase its surface area. Enterocytes with microvilli line the villi, and Paneth cells sit in the crypts of Lieberkuhn.',
    ar: 'مخاطية الأمعاء الدقيقة مغطاة بزغابات بتزوّد مساحة السطح. الخلايا الماصة بميكروفيلاي بتبطّن الزغابات، وخلايا بانيث (Paneth) موجودة في غدد ليبركون.',
  },
  source: sp('NBK459366', 'Anatomy, Abdomen and Pelvis, Small Intestine'),
};
const stomach: ClinicalNote = {
  recognize: {
    en: 'The stomach wall has four layers: mucosa, submucosa, muscularis externa and serosa. The mucosa is covered by epithelium and is mainly gastric glands. Parietal cells make hydrochloric acid and intrinsic factor; chief cells secrete pepsinogen.',
    ar: 'جدار المعدة فيه 4 طبقات: المخاطية والتحت مخاطية والعضلية الخارجية والمصلية. المخاطية مغطاة بطلائية وأغلبها غدد معدية. الخلايا الجدارية بتفرز حمض الهيدروكلوريك والعامل الداخلي، والخلايا الرئيسية بتفرز البيبسينوجين.',
  },
  source: sp('NBK482334', 'Anatomy, Abdomen and Pelvis: Stomach'),
};
const spleen: ClinicalNote = {
  recognize: {
    en: 'The spleen has white pulp (lymphoid tissue around central arterioles) and red pulp (cords of Billroth and venous sinusoids), separated by the marginal zone. Red pulp makes up most of the spleen.',
    ar: 'الطحال فيه اللب الأبيض (نسيج لمفاوي حوالين شرايين مركزية) واللب الأحمر (حبال بيلروث وجيوب وريدية)، وبينهم المنطقة الحدّية. اللب الأحمر هو أغلب الطحال.',
  },
  clinical: {
    en: 'Red pulp filters the blood and removes old or damaged red blood cells; white pulp supports B and T cells and antibody production.',
    ar: 'اللب الأحمر بيفلتر الدم وبيشيل كرات الدم الحمراء القديمة أو التالفة؛ واللب الأبيض بيدعم الخلايا البائية والتائية وإنتاج الأجسام المضادة.',
  },
  source: sp('NBK482235', 'Anatomy, Abdomen and Pelvis, Spleen'),
};
const thymus: ClinicalNote = {
  recognize: {
    en: 'The thymus has two histological parts, the cortex and the medulla. Hassall corpuscles are structures unique to the thymus.',
    ar: 'الغدة الزعترية (التيموس) فيها جزئين نسيجيين: القشرة واللب. جسيمات هاسال (Hassall) تراكيب مميزة للتيموس بس.',
  },
  clinical: {
    en: 'The thymus involutes from around puberty, and its tissue is gradually replaced by adipose tissue.',
    ar: 'التيموس بيضمر من حوالين سن البلوغ، ونسيجه بيتحل تدريجيا بنسيج دهني.',
  },
  source: sp('NBK539748', 'Anatomy, Head and Neck, Thymus'),
};
const cerebellum: ClinicalNote = {
  recognize: {
    en: 'The cerebellar cortex has three layers. Purkinje cells have a large, flat, highly branched dendritic tree and one long axon.',
    ar: 'قشرة المخيخ فيها 3 طبقات. خلايا بركنجي ليها شجرة تغصّنات كبيرة ومفلطحة ومتفرعة جدا ومحور واحد طويل.',
  },
  clinical: {
    en: 'Diseases that affect Purkinje cells usually cause ataxia.',
    ar: 'الأمراض اللي بتصيب خلايا بركنجي غالبا بتسبب رنح (ataxia).',
  },
  source: sp('NBK545154', 'Histology, Purkinje Cells'),
};
const spinalCord: ClinicalNote = {
  recognize: {
    en: 'The spinal cord has gray matter (a collection of cell bodies) and white matter (a collection of axons). The central canal runs between the two halves of the gray matter.',
    ar: 'الحبل الشوكي فيه مادة رمادية (تجمع أجسام الخلايا) ومادة بيضاء (تجمع المحاور). القناة المركزية بتمر بين نصّي المادة الرمادية.',
  },
  source: sp('NBK545206', 'Neuroanatomy, Spinal Cord Morphology'),
};
const ovary: ClinicalNote = {
  recognize: {
    en: 'The outer layer is a simple cuboidal germinal epithelium, with the connective tissue tunica albuginea under it. The cortex contains follicles of different sizes and maturity; the central medulla is loose connective tissue with major blood vessels.',
    ar: 'الطبقة الخارجية طلائية مكعبة بسيطة (germinal epithelium)، وتحتها نسيج ضام اسمه الغلالة البيضاء. القشرة فيها حويصلات بأحجام ونضج مختلف؛ واللب في النص نسيج ضام رخو فيه أوعية دموية كبيرة.',
  },
  source: sp('NBK545187', 'Anatomy, Abdomen and Pelvis, Ovary'),
};
const placenta: ClinicalNote = {
  recognize: {
    en: 'The chorion forms the placenta from syncytiotrophoblast, cytotrophoblast and extraembryonic mesoderm. Chorionic villi develop from the cytotrophoblast growing into the syncytiotrophoblast; tertiary villi contain blood vessels.',
    ar: 'الكوريون بيكوّن المشيمة من الخلايا الغاذية المخلوية (syncytiotrophoblast) والخلايا الغاذية الخلوية (cytotrophoblast) والأديم المتوسط خارج الجنيني. الزغابات المشيمية بتتكون من نمو الـ cytotrophoblast جوه الـ syncytiotrophoblast، والزغابات من الدرجة الثالثة فيها أوعية دموية.',
  },
  source: sp('NBK551634', 'Embryology, Placenta'),
};
const hyaline: ClinicalNote = {
  recognize: {
    en: 'Hyaline cartilage is the most abundant cartilage in the body, mainly type II collagen and proteoglycans. It is found in the trachea, nose, growth plate, sternum and ventral ribs.',
    ar: 'الغضروف الزجاجي هو أكتر غضروف في الجسم، وأغلبه كولاجين نوع 2 وبروتيوغليكان. موجود في القصبة الهوائية والأنف وصفيحة النمو والقص والأضلاع الأمامية.',
  },
  source: sp('NBK532964', 'Anatomy, Cartilage'),
};
const fibro: ClinicalNote = {
  recognize: {
    en: 'Fibrocartilage is rich in type 1 collagen and has much less proteoglycan than hyaline cartilage. It is found in tendons, ligaments, intervertebral discs and menisci, and has no perichondrium.',
    ar: 'الغضروف الليفي غني بكولاجين نوع 1 وفيه بروتيوغليكان أقل بكتير من الزجاجي. موجود في الأوتار والأربطة والأقراص بين الفقرات والغضاريف الهلالية، ومالوش غشاء غضروفي (perichondrium).',
  },
  source: sp('NBK532964', 'Anatomy, Cartilage'),
};
const adipose: ClinicalNote = {
  recognize: {
    en: 'Adipose tissue is a loose, specialized connective tissue. Its main roles are energy storage and release, insulation, organ protection and hormone secretion.',
    ar: 'النسيج الدهني نسيج ضام رخو متخصص. وظايفه الأساسية تخزين الطاقة وإطلاقها والعزل وحماية الأعضاء وإفراز الهرمونات.',
  },
  source: sp('NBK538534', 'Anatomy, Connective Tissue'),
};

export const histology3Notes: Record<string, ClinicalNote> = {
  'liver-section': liver, 'liver-254-13': liver, 'liver-histology-slide': liver,
  'duodenum-section': duodenum, 'duodenum-254-14': duodenum, 'duodenum-prepared-slide': duodenum, 'duodenum-of-the-small-intestine': duodenum, 'duodenal-mucosa-h-e': duodenum,
  'human-small-intestine-265-23': smallIntestine,
  stomach, 'stomach-tissue-light-microscopy': stomach,
  'spleen-section': spleen, 'spleen-265-19': spleen, 'spleen-h-e': spleen,
  'thymus-265-25': thymus, 'thymus-section-h-e': thymus,
  'cerebellum-section': cerebellum, 'cerebellum-26-2-12': cerebellum, 'cerebellar-cortex-intermediate-power': cerebellum, 'cerebellum-high-power': cerebellum,
  'spinal-cord-section': spinalCord, 'spinal-cord-stacked-photograph': spinalCord,
  ovary, 'human-ovarian-follicle': ovary,
  'human-placenta-254-17': placenta, 'human-placenta-26-2-10': placenta, 'human-placenta-265-26': placenta, 'human-placenta-section': placenta,
  'hyaline-cartilage': hyaline,
  fibrocartilage: fibro, 'fibrocartilage-histology-low-power': fibro,
  'adipose-tissue': adipose, 'adipose-tissue-200x': adipose, 'adipose-tissue-with-central-lipid-droplets': adipose, 'white-adipose-tissue-h-e': adipose, 'adipose-tissue-h-e-400x': adipose,
};
