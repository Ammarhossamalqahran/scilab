import type { ClinicalNote } from './clinicalNotes';

// Batch 3: microbiology slides. Every sentence comes from the cited NCBI Bookshelf (StatPearls) page.
const sp = (id: string, title: string) => ({ title: `NCBI StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${id}/` });

const saureus: ClinicalNote = {
  recognize: { en: 'Gram-positive cocci that typically appear in grape-like clusters, but may also lie singly, in pairs or in short chains.', ar: 'مكورات موجبة الجرام بتظهر غالبًا في عناقيد زي العنب، وممكن تكون فردية أو أزواج أو سلاسل قصيرة.' },
  clinical: { en: 'S. aureus is one of the most significant bacterial pathogens worldwide and causes a wide range of community- and hospital-acquired infections, from skin infection to life-threatening bacteremia.', ar: 'المكورات العنقودية الذهبية من أهم البكتيريا الممرضة في العالم، وبتسبب عدوى كتير في المجتمع والمستشفيات، من التهابات الجلد لتسمم الدم الخطير.' },
  source: sp('NBK441868', 'Staphylococcus aureus Infection'),
};
const pneumo: ClinicalNote = {
  recognize: { en: 'Lancet-shaped, Gram-positive cocci that typically occur in pairs or short chains. The capsule is made of polysaccharide.', ar: 'مكورات موجبة الجرام على شكل سنان الرمح، بتكون غالبًا أزواج أو سلاسل قصيرة. الكبسولة من سكريات متعددة.' },
  clinical: { en: 'A cause of community-acquired pneumonia, most common in winter and early spring. Only encapsulated strains are pathogenic for humans.', ar: 'من أسباب الالتهاب الرئوي المكتسب من المجتمع، وأكتر في الشتا وأول الربيع. السلالات المغلّفة بس هي الممرضة للإنسان.' },
  source: sp('NBK470537', 'Streptococcus pneumoniae'),
};
const ecoli: ClinicalNote = {
  recognize: { en: 'A Gram-negative bacillus that normally lives in the human intestine.', ar: 'عصية سالبة الجرام بتعيش طبيعيًا في أمعاء الإنسان.' },
  clinical: { en: 'Many strains are harmless, but pathogenic ones cause intestinal illness and extraintestinal infections such as urinary tract infection, pneumonia and bacteremia. Outside the gut it can cause urinary tract infection.', ar: 'سلالات كتير غير ضارة، لكن الممرضة منها بتسبب أمراض معوية وعدوى خارج الأمعاء زي التهاب المسالك البولية والالتهاب الرئوي وتسمم الدم.' },
  source: sp('NBK564298', 'Escherichia coli Infection'),
};
const candida: ClinicalNote = {
  recognize: { en: 'Candida albicans is a dimorphic yeast: it shows both yeast and hyphal forms depending on the environment.', ar: 'الكانديدا البيضاء فطر ثنائي الشكل: بتظهر بشكل خميرة وبشكل خيوط حسب البيئة.' },
  clinical: { en: 'Oral candidiasis shows white patches that wipe off with gauze, leaving red mucosa. It follows immune suppression (extremes of age, HIV/AIDS, long steroid or antibiotic use).', ar: 'الكانديدا الفموية بتظهر كبقع بيضاء بتتشال بالشاش وتسيب غشاء أحمر. بتيجي بعد ضعف المناعة (أطفال صغار، كبار سن، إيدز، استخدام طويل للكورتيزون أو المضادات).' },
  source: sp('NBK545282', 'Oral Candidiasis'),
};
const aspergillus: ClinicalNote = {
  recognize: { en: 'In tissue, Aspergillus shows septate hyphae with dichotomous (acute-angle) branching.', ar: 'في الأنسجة، الأسبرجيلس بيظهر بخيوط مقسّمة بحواجز وتفرّع ثنائي بزاوية حادة.' },
  clinical: { en: 'Aspergillus is a filamentous fungus causing diseases from allergic syndromes to life-threatening invasive infection. A. fumigatus is the most common species, followed by A. terreus, A. flavus and A. niger.', ar: 'الأسبرجيلس فطر خيطي بيسبب أمراض من الحساسية لعدوى غازية مهددة للحياة. A. fumigatus أكتر نوع شيوعًا، وبعده A. terreus وA. flavus وA. niger.' },
  source: sp('NBK482241', 'Aspergillosis'),
};
const mucor: ClinicalNote = {
  recognize: { en: 'In tissue, mucormycosis shows non-septate or minimally septate, broad, ribbon-like hyphae (10 to 20 µm) invading blood vessels.', ar: 'في الأنسجة، الموكورمايكوزس بيظهر بخيوط عريضة شبه شريطية (10 لـ 20 ميكرومتر) بدون حواجز أو بحواجز قليلة، بتغزو الأوعية الدموية.' },
  clinical: { en: 'It mostly affects immunocompromised patients, so a high index of suspicion is needed. Histology is the mainstay of diagnosis and separates it from aspergillosis. Rhizopus is the genus most frequently found in immunocompromised patients.', ar: 'بتصيب غالبًا مرضى المناعة الضعيفة، فلازم شك عالي. الفحص النسيجي هو أساس التشخيص وبيفرّقها عن الأسبرجيلوزس. جنس Rhizopus هو الأكتر شيوعًا في مرضى المناعة الضعيفة.' },
  source: sp('NBK544364', 'Mucormycosis'),
};
const afb: ClinicalNote = {
  recognize: { en: 'Acid-fast bacilli resist decolorization by acids after staining, so they keep the stain. The genus Mycobacterium (M. tuberculosis, M. leprae and others) is the main group.', ar: 'العصيات المقاومة للحمض بتفضل محتفظة بالصبغة بعد معاملتها بالحمض. جنس Mycobacterium (السل والجذام وغيرها) هو المجموعة الأساسية.' },
  clinical: { en: 'In clinical practice acid fastness points to M. tuberculosis once matched with the history. For TB, sputum is the main specimen for acid-fast smear microscopy.', ar: 'في الممارسة، مقاومة الحمض بتشير للسل لما تتربط بالتاريخ المرضي. في السل، البلغم هو العينة الأساسية لفحص اللطاخة المقاومة للحمض.' },
  source: sp('NBK537121', 'Acid Fast Bacteria'),
};
const dermatophyte: ClinicalNote = {
  recognize: { en: 'In a KOH mount of skin scrapings, dermatophytes show septate, branching, long, narrow hyphae.', ar: 'في تحضير KOH لكشط الجلد، الفطريات الجلدية بتظهر بخيوط مقسّمة ومتفرعة طويلة ورفيعة.' },
  clinical: { en: 'Superficial skin infection by Trichophyton, Epidermophyton and Microsporum. Tinea corporis shows scaly ring-shaped plaques with central clearing. KOH microscopy can confirm it, but false negatives occur in up to 15% of cases.', ar: 'عدوى جلدية سطحية بفطريات Trichophyton وEpidermophyton وMicrosporum. السعفة الجسدية بتظهر لويحات حرشفية حلقية بنص صافي. فحص KOH بيأكدها، لكن النتائج السالبة الكاذبة بتوصل لـ 15% من الحالات.' },
  source: sp('NBK544360', 'Tinea Corporis'),
};
const cdiff: ClinicalNote = {
  recognize: { en: 'A Gram-positive, spore-forming, anaerobic bacillus.', ar: 'عصية لاهوائية موجبة الجرام مكوّنة للجراثيم.' },
  clinical: { en: 'It produces toxins and is the leading cause of antibiotic-associated diarrhea worldwide. It ranges from an asymptomatic carrier to colitis. Testing and treatment are not recommended for asymptomatic people.', ar: 'بتنتج سموم وهي السبب الأول للإسهال المرتبط بالمضادات الحيوية عالميًا. من حامل بدون أعراض لالتهاب قولون. الفحص والعلاج مش مستحبين لمن بدون أعراض.' },
  source: sp('NBK431054', 'Clostridioides difficile infection'),
};
const gonoPus: ClinicalNote = {
  recognize: { en: 'N. gonorrhoeae is a Gram-negative diplococcus. A urethral or cervical smear shows neutrophils with intracellular diplococci.', ar: 'النيسرية البنية مكورة مزدوجة سالبة الجرام. لطاخة الإحليل أو عنق الرحم بتظهر عدلات فيها مكورات مزدوجة داخل الخلايا.' },
  clinical: { en: 'Light microscopy has high sensitivity and specificity in symptomatic men with urethral discharge, but lower sensitivity in other cases. It most commonly presents as urethritis in men and cervicitis in women.', ar: 'الفحص المجهري حساسيته وخصوصيته عالية عند الرجال اللي عندهم إفراز إحليلي، لكن أقل في باقي الحالات. بتظهر غالبًا كالتهاب إحليل عند الرجال والتهاب عنق رحم عند السيدات.' },
  source: sp('NBK558903', 'Gonorrhea'),
};

export const microbiologyNotes: Record<string, ClinicalNote> = {
  'staphylococcus-gram-stain-with-scale-ticks': saureus,
  'gram-positive-cocci-probable-staphylococcus-aureus': saureus,
  'staphylococcus-aureus-gram-stain-1000x': saureus,
  'staphylococcus-aureus-gram-stain-smear': saureus,
  'pneumococcus-259-06': pneumo,
  'pneumococcus-259-07': pneumo,
  'gram-stain-streptococcus-pneumoniae': pneumo,
  'pneumococcus-streptococcus-pneumoniae': pneumo,
  'escherichia-coli-257-06': ecoli,
  'escherichia-coli-259-02': ecoli,
  'escherichia-coli-259-03': ecoli,
  'escherichia-coli-gram-stain': ecoli,
  'escherichia-coli-gram-stain-1000x-oil-immersion': ecoli,
  'candida-albicans-248-35': candida,
  'candida-albicans-251-12': candida,
  'candida-albicans-257-12': candida,
  'candida-albicans-in-a-gram-stained-smear': candida,
  'candida-albicans-light-microscope': candida,
  'cryptococcus-in-india-ink-capsule-visible': {
    recognize: { en: 'Cryptococcus is a yeast with a polysaccharide capsule (glucuronoxylomannan and glucuronoxylomannogalactan), which is a major factor in its virulence.', ar: 'الكريبتوكوكس خميرة لها كبسولة من سكريات متعددة، وهي عامل أساسي في شراسته.' },
    clinical: { en: 'Infection follows inhaling spores, mostly in immunosuppressed people. Meningitis presents with fever, headache, malaise, photophobia and neck stiffness. CSF analysis, culture, staining and immunodiagnostic tests are the main diagnostic tests.', ar: 'العدوى بتحصل باستنشاق الجراثيم، وغالبًا في مرضى المناعة الضعيفة. التهاب السحايا بيظهر بحرارة وصداع وإرهاق ورهاب ضوء وتيبس رقبة. تحليل السائل الشوكي والزرع والصبغات والفحوص المناعية هي الأساس في التشخيص.' },
    source: sp('NBK431060', 'Cryptococcus'),
  },
  'aspergillus-fumigatus-257-15': aspergillus,
  'aspergillus-conidiophores': aspergillus,
  'aspergillus-niger-hyphae': aspergillus,
  'mucor-257-22': mucor,
  'mucor-mould': mucor,
  'rhizopus-257-21': mucor,
  'rhizopus-fungus-40x': mucor,
  'rhizopus-sporangia-black-mould': mucor,
  'mycobacterium-leprae-in-a-slit-skin-smear-1000x': {
    recognize: { en: 'M. leprae is a Gram-positive, acid-fast bacillus. It cannot be grown on artificial media. Lepromatous leprosy shows numerous acid-fast bacilli inside vacuolated macrophages; tuberculoid leprosy shows few or none.', ar: 'عصية الجذام موجبة الجرام ومقاومة للحمض ولا تنمو على بيئات صناعية. الجذام الورمي فيه عصيات كتير داخل بلاعم مفرّغة؛ الدرني فيه قليل أو مفيش.' },
    clinical: { en: 'Leprosy (Hansen disease) is a chronic granulomatous infection that mainly affects the skin and peripheral nerves, and needs prompt diagnosis and treatment.', ar: 'الجذام (مرض هانسن) عدوى حبيبية مزمنة بتصيب الجلد والأعصاب الطرفية في الأساس، ولازم تشخيص وعلاج بدري.' },
    source: sp('NBK559307', 'Leprosy'),
  },
  'acid-fast-bacilli-in-urine-sediment-ziehl-neelsen': afb,
  'acid-fast-bacilli-ziehl-neelsen-stain': afb,
  'acid-fast-bacilli-in-tracheitis-tissue-kinyoun-stain': afb,
  'acid-fast-bacilli-in-lung-tissue-ziehl-neelsen': afb,
  'nocardia-modified-acid-fast-stain': {
    recognize: { en: 'Nocardia is a Gram-positive bacillus with a branching, filamentous morphology, found in soil, decaying vegetation and water.', ar: 'النوكارديا عصية موجبة الجرام بشكل خيطي متفرع، موجودة في التربة والنباتات المتحللة والمياه.' },
    clinical: { en: 'It classically causes opportunistic infection in people with weak T-cell immunity, such as transplant recipients. Pulmonary and disseminated forms are the main ones.', ar: 'بتسبب عدوى انتهازية في اللي مناعتهم الخلوية ضعيفة زي مرضى زراعة الأعضاء. الشكل الرئوي والمنتشر هما الأساسيين.' },
    source: sp('NBK526075', 'Nocardiosis'),
  },
  'gram-stain-bacillus-anthracis': {
    recognize: { en: 'Small, Gram-positive or Gram-variable, encapsulated, spore-forming rods. The capsule can be seen with India ink, and cutaneous anthrax is diagnosed with a methylene blue stain showing non-motile Gram-positive rods.', ar: 'عصيات صغيرة موجبة أو متغيرة الجرام، مغلّفة ومكوّنة للجراثيم. الكبسولة تظهر بالحبر الهندي، والجمرة الجلدية بتتشخص بصبغة أزرق الميثيلين اللي بتبين عصيات موجبة غير متحركة.' },
    clinical: { en: 'Anthrax starts with nonspecific symptoms (fever, nausea, vomiting, sweats) that can progress to dyspnea, respiratory failure and hemodynamic collapse.', ar: 'الجمرة الخبيثة بتبدأ بأعراض غير نوعية (حرارة وغثيان وقيء وعرق) وممكن تتطور لضيق نفس وفشل تنفسي وانهيار في الدورة الدموية.' },
    source: sp('NBK507773', 'Anthrax'),
  },
  'clostridium-difficile-gram-stain-1000x': cdiff,
  'clostridium-difficile-in-faecal-suspension-gram-stain': cdiff,
  'gram-stain-clostridium-perfringens': {
    recognize: { en: 'An anaerobic, Gram-positive, spore-forming bacillus; Gram stain shows Gram-positive bacilli.', ar: 'عصية لاهوائية موجبة الجرام مكوّنة للجراثيم؛ صبغة جرام بتظهر عصيات موجبة.' },
    clinical: { en: 'It causes acute gastrointestinal infection, from diarrhea to necrotizing enterocolitis, and myonecrosis. Its spores survive normal cooking temperatures.', ar: 'بتسبب عدوى هضمية حادة من الإسهال لالتهاب الأمعاء النخري، وموت العضلات. الجراثيم بتتحمل حرارة الطبخ العادية.' },
    source: sp('NBK559049', 'Clostridium perfringens Infection'),
  },
  'chlamydia-in-a-cervical-smear-giemsa-stain': {
    recognize: { en: 'Chlamydia trachomatis is an obligate intracellular Gram-negative bacterium that replicates inside host cells.', ar: 'الكلاميديا الحثرية بكتيريا سالبة الجرام إجبارية داخل الخلايا وبتتكاثر جوه الخلية المضيفة.' },
    clinical: { en: 'The most commonly reported bacterial infection in the United States and the most prevalent sexually transmitted infection worldwide. It is often asymptomatic and can cause cervicitis, urethritis and pelvic inflammatory disease.', ar: 'أكتر عدوى بكتيرية مُبلَّغ عنها في أمريكا وأكتر عدوى منقولة جنسيًا في العالم. كتير من غير أعراض، وممكن تسبب التهاب عنق الرحم والإحليل والتهاب الحوض.' },
    source: sp('NBK537286', 'Chlamydia'),
  },
  'helicobacter-pylori-in-stomach-mucosa-modified-giemsa-400x': {
    recognize: { en: 'A Gram-negative, spiral-shaped, microaerophilic bacterium that colonizes the stomach.', ar: 'بكتيريا سالبة الجرام حلزونية الشكل، قليلة الأكسجين، بتستعمر المعدة.' },
    clinical: { en: 'It infects about 50 to 60% of the world population and is a major cause of chronic gastritis and peptic ulcer disease. Many infected people have no symptoms.', ar: 'بتصيب حوالي 50 لـ 60% من سكان العالم وهي سبب رئيسي لالتهاب المعدة المزمن وقرحة المعدة. كتير من المصابين من غير أعراض.' },
    source: sp('NBK534233', 'Helicobacter pylori'),
  },
  'treponema-pallidum-dark-field': {
    recognize: { en: 'Treponemes are thin, tiny Gram-negative spirochetes, invisible on routine light microscopy but identifiable by their spiral movement on darkfield microscopy (sensitivity about 80%).', ar: 'التريبونيما سبيروكيتات رفيعة وصغيرة سالبة الجرام، مش بتتشاف بالمجهر العادي لكن بتتعرف بحركتها الحلزونية في المجهر ذي الحقل المظلم (حساسيته حوالي 80%).' },
    clinical: { en: 'Syphilis progresses through primary, secondary, latent and tertiary stages. Primary disease shows a painless chancre; secondary syphilis a rash that includes the palms and soles.', ar: 'الزهري بيمر بمراحل أولية وثانوية وكامنة وثالثية. الأولية فيها قرحة غير مؤلمة؛ الثانوية فيها طفح بيشمل الكفوف والقدمين.' },
    source: sp('NBK534780', 'Syphilis'),
  },
  'borrelia-burgdorferi': {
    recognize: { en: 'Borrelia burgdorferi is a spirochete spread by ticks.', ar: 'البوريليا بورجدورفيري سبيروكيت بتنتقل بالقراد.' },
    clinical: { en: 'It causes Lyme disease: a characteristic annular rash, arthritis, carditis, and in late stages encephalopathy.', ar: 'بتسبب مرض لايم: طفح حلقي مميز والتهاب مفاصل والتهاب القلب، وفي المراحل المتأخرة اعتلال دماغي.' },
    source: sp('NBK532894', 'Borrelia Burgdorferi'),
  },
  'rickettsia-rickettsii-in-endothelial-cells-immunostain': {
    recognize: { en: 'Rickettsia rickettsii is a coccobacillary, obligate intracellular organism that infects the endothelial cells lining small and medium vessels.', ar: 'ريكتسيا ريكتسي كوكوباسيلية إجبارية داخل الخلايا وبتصيب الخلايا المبطّنة للأوعية الصغيرة والمتوسطة.' },
    clinical: { en: 'It causes Rocky Mountain spotted fever, an acute tick-borne febrile illness. Without prompt antibiotics, mortality is as high as 20 to 30%.', ar: 'بتسبب حمى روكي ماونتن المبقّعة، مرض حموي حاد ينقله القراد. من غير مضادات حيوية بسرعة بتوصل الوفيات لـ 20 لـ 30%.' },
    source: sp('NBK430881', 'Rocky Mountain Spotted Fever'),
  },
  'shigella-flexneri-gram-stain': {
    recognize: { en: 'Shigella is a Gram-negative, nonmotile, non-spore-forming bacillus.', ar: 'الشيجيلا عصية سالبة الجرام غير متحركة وغير مكوّنة للجراثيم.' },
    clinical: { en: 'An acute diarrheal illness from watery diarrhea to dysentery, spread by the fecal-oral route. Young children, older adults, the immunocompromised and travelers are at higher risk.', ar: 'مرض إسهالي حاد من إسهال مائي لدوسنتاريا، بينتقل بالطريق البرازي الفموي. الأطفال الصغار وكبار السن والمناعة الضعيفة والمسافرين أكتر عرضة.' },
    source: sp('NBK482337', 'Shigellosis'),
  },
  'sputum-gram-stain-haemophilus-influenzae': {
    recognize: { en: 'A small (0.3 to 1 µm), pleomorphic Gram-negative coccobacillus. Gram stain of body fluid shows pleomorphic Gram-negative coccobacilli.', ar: 'كوكوباسيلس صغير (0.3 لـ 1 ميكرومتر) متعدد الأشكال وسالب الجرام. صبغة جرام لسوائل الجسم بتظهر كوكوباسيلات سالبة متعددة الأشكال.' },
    source: sp('NBK562176', 'Haemophilus influenzae Infection'),
  },
  'gram-stain-brucella-gram-negative-coccobacilli': {
    recognize: { en: 'Brucella are Gram-negative, nonmotile, facultative intracellular coccobacilli. On Gram stain they are small single cells that stain poorly.', ar: 'البروسيلا كوكوباسيلات سالبة الجرام غير متحركة وداخل خلوية اختيارية. في صبغة جرام بتظهر كخلايا صغيرة منفردة بتتصبغ بصعوبة.' },
    clinical: { en: 'A zoonosis spread by unpasteurized milk and dairy, undercooked meat, or skin contact with livestock. As few as 10 to 100 organisms can cause disease.', ar: 'مرض حيواني المنشأ بينتقل بالألبان غير المبسترة واللحوم غير المطبوخة جيدًا أو ملامسة الماشية. 10 لـ 100 بكتيريا بس تكفي لتسبب المرض.' },
    source: sp('NBK441831', 'Brucellosis'),
  },
  'gram-stain-bacteroides-fragilis': {
    recognize: { en: 'Bacteroides is a genus of Gram-negative, bacillus-shaped anaerobes.', ar: 'Bacteroides جنس من البكتيريا اللاهوائية سالبة الجرام على شكل عصيات.' },
    clinical: { en: 'B. fragilis is part of the normal colon microbiota. It causes disease when it spreads to the bloodstream or surrounding tissue after inflammation, trauma or surgery breaks the mucosal surface.', ar: 'B. fragilis جزء من الفلورا الطبيعية للقولون. بتسبب مرض لما تنتشر للدم أو الأنسجة المحيطة بعد التهاب أو إصابة أو جراحة بتكسر الغشاء المخاطي.' },
    source: sp('NBK553032', 'Bacteroides Fragilis'),
  },
  'neisseria-gonorrhoeae-and-pus-cells-gram-stain': gonoPus,
  'trichophyton-mentagrophytes-257-18': dermatophyte,
  'trichophyton-mentagrophytes-257-19': dermatophyte,
  'microsporum-gypseum-257-16': dermatophyte,
  'microsporum-gypseum-257-17': dermatophyte,
  'microsporum-canis-macroconidium-1000x': dermatophyte,
};
