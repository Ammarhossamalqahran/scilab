import type { ClinicalNote } from './clinicalNotes';

// Batch 1: hematology slides. Every sentence comes from the cited NCBI Bookshelf (StatPearls) page.
const sp = (id: string, title: string) => ({ title: `NCBI StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${id}/` });

const rbc: ClinicalNote = {
  recognize: { en: 'A typical red cell is round with a central area of pallor, because it is a biconcave disc with no nucleus.', ar: 'كرية الدم الحمراء الطبيعية مستديرة وفي نصها منطقة شاحبة، لأنها قرص مقعّر الوجهين وبدون نواة.' },
  source: sp('NBK539702', 'Histology, Red Blood Cell'),
};
const wbc = (kind: string): ClinicalNote['source'] => ({ ...sp('NBK563148', 'Histology, White Blood Cell') , title: `NCBI StatPearls: Histology, White Blood Cell (${kind})` });
const basophil: ClinicalNote = {
  recognize: { en: 'Basophils are 12 to 15 µm, with a bi-lobed or S-shaped nucleus and blue to purple cytoplasmic granules. Their many dark granules set them apart from other white cells.', ar: 'الخلايا القاعدية قطرها 12 إلى 15 ميكرومتر، نواتها ثنائية الفص أو على شكل حرف S، وحبيباتها زرقاء إلى بنفسجية. كثرة الحبيبات الداكنة تميزها عن باقي كرات الدم البيضاء.' },
  clinical: { en: 'Basophilia means more basophils in the blood (an absolute count above 200 cells/µL). It is not a frequent finding and most often appears as a reactive change together with eosinophilia.', ar: 'ارتفاع القاعدية معناه زيادة عدد الخلايا القاعدية في الدم (أكثر من 200 خلية/ميكرولتر). مش شائع، وغالبًا بيظهر كتغيّر تفاعلي مع زيادة الحمضات.' },
  source: sp('NBK535365', 'Basophilia'),
};
const howell: ClinicalNote = {
  recognize: { en: 'A small, dark, smooth, round, purple dot inside a red cell on a Wright or Giemsa smear. It is residual nuclear DNA. Cells usually hold only a few.', ar: 'نقطة صغيرة داكنة ملساء مستديرة بنفسجية داخل كرية الدم الحمراء في صبغة رايت أو جيمزا. هي بقايا الحمض النووي للنواة. غالبًا فيه القليل منها في الخلية.' },
  clinical: { en: 'Howell-Jolly bodies persist when the spleen is absent or not working, and are described as pathognomonic for splenic dysfunction. They also occur after splenectomy and in conditions such as megaloblastic anemia and sickle cell hemoglobinopathies.', ar: 'تفضل أجسام هاول جولي في الدم لما الطحال يكون غايب أو مش شغال، وبتوصف إنها علامة مميزة لقصور الطحال. بتظهر كمان بعد استئصال الطحال وفي حالات زي الأنيميا كبيرة الأرومات وأمراض الهيموجلوبين المنجلي.' },
  source: sp('NBK557489', 'Histology, Howell-Jolly Bodies'),
};
const reticulocyte: ClinicalNote = {
  recognize: { en: 'With a supravital stain (new methylene blue or brilliant cresyl blue) the RNA shows as a blue precipitate, from granules to a network of reticular material.', ar: 'بالصبغة الحيوية (أزرق الميثيلين الجديد أو أزرق الكريزيل اللامع) يظهر الحمض النووي الريبي كراسب أزرق، من حبيبات لشبكة.' },
  clinical: { en: 'Reticulocytes are immature red cells that mature in 1 to 2 days. A rise or fall in their count shows how active the bone marrow is, especially in anemias and marrow dysfunction.', ar: 'الشبكيات كريات حمراء غير ناضجة بتنضج في يوم أو يومين. زيادة أو نقص عددها بيدل على نشاط النخاع، خصوصًا في الأنيميا وقصور النخاع.' },
  source: sp('NBK542172', 'Histology, Reticulocytes'),
};
const lymph: ClinicalNote = {
  recognize: { en: 'Lymphocytes are about 25% of white cells, with a round nucleus and scant cytoplasm. Small lymphocytes are about the size of a red cell.', ar: 'الخلايا الليمفاوية حوالي 25% من كرات الدم البيضاء، نواتها مستديرة وسيتوبلازمها قليل. الصغيرة منها قريبة في الحجم من كرية الدم الحمراء.' },
  source: wbc('lymphocytes'),
};

export const hematologyNotes: Record<string, ClinicalNote> = {
  'blood-smear': rbc,
  'human-blood': rbc,
  'human-blood-smear': rbc,
  'normal-adult-blood-smear-giemsa': rbc,
  'human-peripheral-blood-smear-may-grunwald-stain': rbc,
  'blood-erythrocytes-and-platelets-1': rbc,
  'human-blood-with-anisocytosis': {
    recognize: { en: 'Anisocytosis means variation in size among the red cells on one slide.', ar: 'تفاوت الحجم (Anisocytosis) معناه اختلاف حجم الكريات الحمراء على نفس الشريحة.' },
    source: sp('NBK539702', 'Histology, Red Blood Cell'),
  },
  'neutrophil-on-a-blood-smear': {
    recognize: { en: 'Neutrophils are 12 to 15 µm with a multi-lobed nucleus of 3 to 5 segments joined by thin strands, and pale pink cytoplasm.', ar: 'قطر العدلة 12 إلى 15 ميكرومتر، ونواتها متعددة الفصوص (3 إلى 5 فصوص) موصولة بخيوط رفيعة، والسيتوبلازم وردي فاتح.' },
    source: wbc('neutrophils'),
  },
  'hypersegmented-neutrophil': {
    recognize: { en: 'A normal neutrophil has 3 to 5 nuclear segments; a hypersegmented neutrophil has more.', ar: 'العدلة الطبيعية نواتها 3 إلى 5 فصوص؛ العدلة مفرطة التقسيم فيها فصوص أكتر.' },
    clinical: { en: 'Macrocytic red cells and hypersegmented neutrophils on the smear are typical of megaloblastic anemia (vitamin B12 or folate deficiency). Suspect it with unexplained macrocytic anemia or hypersegmented neutrophils.', ar: 'كريات حمراء كبيرة وعدلات مفرطة التقسيم في اللطاخة من علامات الأنيميا كبيرة الأرومات (نقص فيتامين B12 أو الفولات). يتشك فيها مع أنيميا كبيرة الكريات غير مفسّرة أو عدلات مفرطة التقسيم.' },
    source: sp('NBK537254', 'Megaloblastic Anemia'),
  },
  'eosinophil-smear': {
    recognize: { en: 'Eosinophils have a bi-lobed nucleus and large cytoplasmic granules that stain red to pink.', ar: 'الحمضات نواتها ثنائية الفص وفيها حبيبات كبيرة بتتصبغ بالأحمر أو الوردي.' },
    clinical: { en: 'Eosinophilia is a circulating eosinophil count above 500 per mm³ (mild 500 to 1500, moderate 1500 to 5000, severe above 5000).', ar: 'ارتفاع الحمضات معناه أكتر من 500 خلية/مم³ (خفيف 500 إلى 1500، متوسط 1500 إلى 5000، شديد أكتر من 5000).' },
    source: sp('NBK560929', 'Eosinophilia'),
  },
  'basophil-in-blood-giemsa-stain': basophil,
  'three-basophil-granulocytes': basophil,
  'two-basophils-in-a-blood-smear': basophil,
  'monocytes-in-a-blood-smear': {
    recognize: { en: 'Monocytes are 4 to 8% of white cells, 12 to 15 µm, with a large indented or C-shaped, sometimes eccentric nucleus and abundant bluish-gray cytoplasm.', ar: 'الوحيدات 4 إلى 8% من كرات الدم البيضاء، قطرها 12 إلى 15 ميكرومتر، نواتها كبيرة مفصوصة أو على شكل C وأحيانًا جانبية، والسيتوبلازم وفير ومائل للرمادي المزرق.' },
    source: wbc('monocytes'),
  },
  'lymphocytes-in-a-blood-smear': lymph,
  'lymphocyte-among-red-cells-wright-stain': lymph,
  'howell-jolly-bodies-in-red-blood-cells': howell,
  'howell-jolly-body-in-an-erythrocyte': howell,
  'howell-jolly-bodies-in-normoblasts': howell,
  'nucleated-red-cell-with-cabot-rings-may-grunwald-stain-400x': {
    recognize: { en: 'Cabot rings are ring-shaped or figure-of-8 inclusions, sometimes with double or multiple loops, staining red, red-purple or blue-purple with Romanowsky dyes.', ar: 'حلقات كابوت شوائب على شكل حلقة أو رقم 8، وأحيانًا بحلقات مزدوجة أو متعددة، وتتصبغ بالأحمر أو الأحمر البنفسجي أو الأزرق البنفسجي بصبغات رومانوفسكي.' },
    clinical: { en: 'Cabot rings are most commonly seen in dyserythropoiesis, such as megaloblastic anemia.', ar: 'بتظهر حلقات كابوت غالبًا في اضطراب تكوين الكريات الحمراء، زي الأنيميا كبيرة الأرومات.' },
    source: sp('NBK594259', 'Erythrocyte Inclusions'),
  },
  'reticulocyte-smear': reticulocyte,
  'reticulocyte-in-a-blood-smear-4000x': reticulocyte,
  'schistocytes-in-haemolytic-anaemia': {
    clinical: { en: 'On a smear, look for schistocytes, spherocytes or bite cells when hemolysis is suspected. Red cell fragmentation is seen in microangiopathic hemolytic anemia and in hemolysis from leaking prosthetic valves.', ar: 'لما يكون فيه شك في انحلال الدم بندوّر في اللطاخة على الكريات المتشظية والكروية وخلايا العضة. تفتت الكريات بيظهر في الأنيميا الانحلالية الاعتلالية الوعائية الدقيقة وفي الانحلال الناتج من الصمامات الصناعية المسرّبة.' },
    source: sp('NBK558904', 'Hemolytic Anemia'),
  },
  'red-cell-agglutination-by-cold-agglutinins': {
    clinical: { en: 'Cold agglutinin disease is an autoimmune hemolytic anemia in which IgM antibodies react with red cells at cold temperatures. Work-up includes the blood smear, a direct antiglobulin test and tests for cold agglutinins.', ar: 'مرض الراصّات الباردة نوع من الأنيميا الانحلالية المناعية الذاتية، فيه أجسام مضادة IgM بتتفاعل مع الكريات الحمراء في البرد. التقييم بيشمل لطاخة الدم واختبار كومبس المباشر واختبار الراصّات الباردة.' },
    source: sp('NBK606096', 'Laboratory Evaluation of Immune Hemolytic Anemias'),
  },
  'polycythemia-vera-blood-smear': {
    clinical: { en: 'Polycythemia vera is a myeloproliferative disorder with a JAK2 mutation (JAK2 V617F in over 90% of cases). It raises red cell production, with secondary white cell and platelet production, and complications come from higher blood viscosity, including thrombosis.', ar: 'كثرة الحمر الحقيقية اضطراب تكاثري نقوي مرتبط بطفرة JAK2 (JAK2 V617F في أكتر من 90% من الحالات). بتزود إنتاج الكريات الحمراء ومعاها البيضاء والصفائح، والمضاعفات بتيجي من زيادة لزوجة الدم ومنها التجلطات.' },
    source: sp('NBK557660', 'Polycythemia Vera'),
  },
  'megakaryocyte-bone-marrow': {
    recognize: { en: 'Megakaryocytes are large blood cells.', ar: 'الخلايا النواء (الميجاكاريوسيت) خلايا دم كبيرة.' },
    clinical: { en: 'Their main job is to make platelets: a mature megakaryocyte extends blebs that break off as platelets, which live about 7 to 10 days.', ar: 'وظيفتها الأساسية تكوين الصفائح: الخلية الناضجة بتطلّع بروزات بتنفصل وتصير صفائح، وعمرها حوالي 7 إلى 10 أيام.' },
    source: sp('NBK470328', 'Physiology, Platelet'),
  },
};
