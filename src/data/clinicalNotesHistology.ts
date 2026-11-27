import type { ClinicalNote } from './clinicalNotes';

// Batch 4: histology slides of human or unspecified tissue. Every sentence comes from the cited NCBI Bookshelf (StatPearls) page.
// Slides that name another species (dog, rat, pig, ostrich and so on) are left blank because the sources describe human tissue.
const sp = (id: string, title: string) => ({ title: `NCBI StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${id}/` });

const skeletal: ClinicalNote = {
  recognize: { en: 'Skeletal muscle is striated and under voluntary control. Fibers are wrapped in endomysium, grouped into fascicles by perimysium, and the whole muscle is wrapped in epimysium. The functional unit is the sarcomere.', ar: 'العضلة الهيكلية مخططة وإرادية. الألياف ملفوفة بالإندوميزيوم، وتتجمع في حزم بالبيريميزيوم، والعضلة كلها محاطة بالإبيميزيوم. الوحدة الوظيفية هي القسيم العضلي (sarcomere).' },
  clinical: { en: 'Duchenne muscular dystrophy is an X-linked disease caused by a mutation in the dystrophin gene, one of the largest human genes. Dystrophin links actin to the extracellular matrix.', ar: 'ضمور دوشين العضلي مرض مرتبط بالكروموسوم X سببه طفرة في جين الديستروفين، من أكبر الجينات البشرية. الديستروفين بيربط الأكتين بالمصفوفة خارج الخلية.' },
  source: sp('NBK537195', 'Histology, Muscle'),
};
const cardiac: ClinicalNote = {
  recognize: { en: 'Cardiac muscle cells are striated like skeletal muscle, but they are branched, usually have a single nucleus, and are joined by intercalated discs that couple them electrically.', ar: 'خلايا عضلة القلب مخططة زي الهيكلية، لكنها متفرعة وغالبًا بنواة واحدة، وبتتصل بأقراص بينية (intercalated discs) بتربطها كهربائيًا.' },
  clinical: { en: 'Cardiomyocytes cannot regenerate. Troponin is released when heart muscle is significantly damaged, which makes it a useful biomarker for myocardial infarction.', ar: 'خلايا القلب العضلية مبتتجددش. التروبونين بيتحرر لما عضلة القلب تتضرر بشدة، فهو مؤشر حيوي مفيد لتشخيص احتشاء عضلة القلب.' },
  source: { title: 'NCBI StatPearls: Histology, Heart (troponin point: Histology, Muscle, NBK537195)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK545143/' },
};
const smooth: ClinicalNote = {
  recognize: { en: 'Smooth muscle has no striations and its cells are fusiform (spindle-shaped).', ar: 'العضلة الملساء مفيهاش تخطيط وخلاياها مغزلية الشكل.' },
  source: sp('NBK537195', 'Histology, Muscle'),
};
const bone: ClinicalNote = {
  recognize: { en: 'The osteon is the functional unit of bone: concentric lamellae of collagen around a central Haversian canal that carries the blood and nerve supply. Canaliculi and Volkmann canals connect neighboring osteocytes.', ar: 'الأوستيون هو الوحدة الوظيفية للعظم: صفائح كولاجين متحدة المركز حول قناة هافرس المركزية اللي فيها الأوعية والأعصاب. القنيّات وقنوات فولكمان بتربط الخلايا العظمية ببعض.' },
  source: sp('NBK541132', 'Histology, Bone'),
};
const lung: ClinicalNote = {
  recognize: { en: 'Alveoli are lined by thin squamous epithelium that allows gas exchange. Type I pneumocytes cover about 70% of the alveolar surface; type II pneumocytes cover about 7%, have microvilli and lamellar bodies, and secrete surfactant.', ar: 'الحويصلات الهوائية مبطنة بظهارة حرشفية رقيقة تسمح بتبادل الغازات. الخلايا الرئوية من النوع الأول بتغطي حوالي 70% من السطح، والنوع الثاني حوالي 7% وفيه زغيبات وأجسام صفائحية وبيفرز المادة الخافضة للتوتر السطحي.' },
  source: sp('NBK557542', 'Histology, Alveolar Cells'),
};
const resp: ClinicalNote = {
  recognize: { en: 'Most of the respiratory tree, from the nasal cavity to the bronchi, is lined by pseudostratified columnar ciliated epithelium. It is not present in the larynx or pharynx.', ar: 'معظم الشجرة التنفسية، من تجويف الأنف للقصبات، مبطنة بظهارة عمادية كاذبة التطبق مهدّبة. مش موجودة في الحنجرة أو البلعوم.' },
  source: sp('NBK541061', 'Histology, Respiratory Epithelium'),
};
const thyroid: ClinicalNote = {
  recognize: { en: 'Thyroid follicles are storage compartments filled with colloid (thyroglobulin, an acidophilic, PAS-positive glycoprotein), held in a fine network of reticular fibers with many capillaries.', ar: 'حويصلات الغدة الدرقية أماكن تخزين مليانة بالغرواء (ثيروجلوبيولين، بروتين سكري حمضي الميل وموجب لـ PAS)، ومثبتة في شبكة رفيعة من الألياف الشبكية مع شعيرات دموية كتير.' },
  clinical: { en: 'In colloid nodular goiter, the most common non-neoplastic thyroid lesion, the follicles are filled with abundant colloid.', ar: 'في الغدة الدرقية الغروانية العقدية، أشهر آفة غير ورمية في الغدة، الحويصلات بتكون مليانة غرواء كتير.' },
  source: sp('NBK551659', 'Histology, Thyroid Gland'),
};
const skin: ClinicalNote = {
  recognize: { en: 'The epidermis is a stratified squamous epithelium with four to five layers. The deepest basal layer is mitotically active and holds melanocytes and stem cells; the outermost layer is the keratinized stratum corneum, which limits water loss.', ar: 'البشرة ظهارة حرشفية طبقية من 4 لـ 5 طبقات. الطبقة القاعدية العميقة نشطة الانقسام وفيها الخلايا الصبغية والخلايا الجذعية؛ والطبقة الخارجية هي الطبقة القرنية المتقرنة اللي بتقلل فقدان الماء.' },
  source: sp('NBK537325', 'Histology, Skin'),
};
const lymph: ClinicalNote = {
  recognize: { en: 'Lymph nodes are bean-shaped with a delicate capsule. The cortex holds lymphoid follicles; secondary follicles have a reactive germinal center.', ar: 'العقد الليمفاوية على شكل حبة الفول ولها محفظة رقيقة. القشرة فيها جريبات ليمفاوية، والجريبات الثانوية فيها مركز جرثومي تفاعلي.' },
  clinical: { en: 'Lymph nodes can enlarge in infections, autoimmune disease, lymphomas and metastatic carcinoma.', ar: 'العقد الليمفاوية ممكن تتضخم في العدوى وأمراض المناعة الذاتية واللمفومة والسرطانات المنتشرة.' },
  source: sp('NBK559053', 'Histology, Lymph Nodes'),
};
const salivary: ClinicalNote = {
  recognize: { en: 'Salivary glands are encapsulated and divided into lobes and lobules by connective tissue septa. Secretory end-pieces (acini, serous, mucous or both) make saliva, which drains into branching ducts.', ar: 'الغدد اللعابية ليها محفظة ومقسومة لفصوص وفصيصات بحواجز نسيج ضام. الأحناء الإفرازية (مصلية أو مخاطية أو الاتنين) بتصنع اللعاب وبيصرف في قنوات متفرعة.' },
  clinical: { en: 'Sjogren syndrome is an autoimmune condition, often seen in adults, that inflames the major salivary glands.', ar: 'متلازمة شوغرن حالة مناعة ذاتية، شائعة في البالغين، بتسبب التهاب الغدد اللعابية الكبرى.' },
  source: sp('NBK551688', 'Histology, Salivary Glands'),
};
const bladder: ClinicalNote = {
  recognize: { en: 'The bladder is lined by the urothelium, a specialized stratified epithelium found only in the ureter, bladder and proximal urethra.', ar: 'المثانة مبطنة بالظهارة البولية (urothelium)، وهي ظهارة طبقية متخصصة موجودة بس في الحالب والمثانة والجزء القريب من الإحليل.' },
  clinical: { en: 'After prostate cancer, bladder cancer is the second most common genitourinary malignancy. Urothelial carcinoma is the most frequent type.', ar: 'بعد سرطان البروستاتا، سرطان المثانة تاني أشهر ورم خبيث في الجهاز البولي التناسلي. والسرطان الظهاري البولي أشهر أنواعه.' },
  source: sp('NBK540963', 'Histology, Bladder'),
};
const kidney: ClinicalNote = {
  recognize: { en: 'Renal corpuscles (the glomerulus and its surrounding Bowman capsule) are found only in the kidney cortex, about 1 million per kidney.', ar: 'الكُريّات الكلوية (الكبّة وكبسولة بومان حواليها) بتتواجد في قشرة الكلية بس، حوالي مليون في الكلية.' },
  source: sp('NBK554544', 'Histology, Kidney and Glomerulus'),
};
const mammary: ClinicalNote = {
  recognize: { en: 'Luminal cuboidal cells line the lactiferous ducts, which divide into lobes and lobules. The adult female gland has 15 to 20 lobes and 20 to 40 lobules.', ar: 'الخلايا المكعبة المبطنة بتغطي القنوات اللبنية اللي بتتفرع لفصوص وفصيصات. الغدة عند المرأة البالغة فيها 15 لـ 20 فص و20 لـ 40 فصيص.' },
  source: sp('NBK547732', 'Histology, Mammary Glands'),
};
const vessel: ClinicalNote = {
  recognize: { en: 'Most blood vessel walls have three layers: an inner tunica intima, a middle tunica media and an outer tunica externa (adventitia).', ar: 'أغلب جدران الأوعية الدموية فيها 3 طبقات: الغلالة الباطنة (intima) والوسطى (media) والخارجية (externa أو adventitia).' },
  clinical: { en: 'Blood vessels are prone to atherosclerosis, aneurysms and pulmonary hypertension. Atheroma formation, the deposition of lipids under the intima, is the key feature of atherosclerosis.', ar: 'الأوعية الدموية معرضة لتصلب الشرايين والأنيوريزم وارتفاع ضغط الشريان الرئوي. تكوّن اللويحة العصيدية، وهي ترسب الدهون تحت الطبقة الباطنة، هو الميزة الأساسية لتصلب الشرايين.' },
  source: sp('NBK554407', 'Histology, Vascular'),
};

export const histologyNotes: Record<string, ClinicalNote> = {
  'skeletal-muscle': skeletal,
  'muscle-histology-slide': skeletal,
  'teased-skeletal-muscle-100x': skeletal,
  'cardiac-muscle': cardiac,
  'heart-muscle-section-254-11': cardiac,
  'heart-muscle-section-265-22': cardiac,
  'cardiac-muscle-100x': cardiac,
  'smooth-muscle': smooth,
  'intestinal-smooth-muscle-26-2-01': smooth,
  'smooth-muscle-251-08': smooth,
  'smooth-muscle-histology': smooth,
  'compact-bone': bone,
  'bone-section-248-12': bone,
  'bone-section-254-02': bone,
  'bone-section-26-2-20': bone,
  'decalcified-compact-bone': bone,
  'human-bone-section-100x': bone,
  'human-bone-section-40x': bone,
  'lung-alveoli': lung,
  'lung-265-24': lung,
  'lung-histology-slide': lung,
  'type-2-pneumocytes-surfactant-immunostain': {
    recognize: lung.recognize,
    source: lung.source,
  },
  'trachea-section': resp,
  'trachea-epithelium-h-e-400x': resp,
  'ciliated-epithelium-light-micrograph': resp,
  'thyroid-follicles-with-colloid': thyroid,
  'human-thyroid-gland-capsule': thyroid,
  'thyroid-gland-septated-lobes': thyroid,
  'human-thyroid-gland-follicles-h-e-40x': thyroid,
  'thyroid-gland-histological-section': thyroid,
  'thyroid-follicles-light-microscope': thyroid,
  'thick-skin-epidermis-100x': skin,
  'thick-skin-epidermis': skin,
  'human-skin-with-sweat-glands-100x': skin,
  'human-skin-with-sweat-glands-400x': skin,
  'human-skin-with-sweat-glands-40x': skin,
  'lymph-node-254-06': lymph,
  'lymph-node-265-34': lymph,
  'human-salivary-gland-254-10': salivary,
  'mixed-salivary-gland': salivary,
  'serous-salivary-gland': salivary,
  'urinary-bladder-smooth-muscle-h-e-400x': bladder,
  'urinary-bladder-collapsed-cross-section': bladder,
  'female-urethra-transitional-epithelium-40x': {
    recognize: { en: 'The urothelium, a specialized stratified (transitional) epithelium, lines the ureter, the bladder and the proximal urethra.', ar: 'الظهارة البولية، وهي ظهارة طبقية متخصصة (انتقالية)، بتبطّن الحالب والمثانة والجزء القريب من الإحليل.' },
    source: bladder.source,
  },
  'kidney-section': kidney,
  'kidney-cortex-947-21': kidney,
  'kidney-cortex-947-22': kidney,
  'kidney-cortex': kidney,
  'renal-glomerulus': kidney,
  'renal-corpuscle-glomerulus-pas-stain': kidney,
  'active-mammary-gland': mammary,
  'normal-breast-acinus': mammary,
  'large-artery': vessel,
  'large-vein': vessel,
  'large-vein-second-field': vessel,
  'medium-sized-artery': vessel,
  'vessels-cross-section-248-18': vessel,
};
