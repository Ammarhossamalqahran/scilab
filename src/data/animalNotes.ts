import { specimens, type Bilingual } from './scientificData';

// Animal notes for zoology (and the animal slides in other departments): how to recognize the structure, what it does,
// and a comparison. Every English sentence is taken from the cited open textbook page (OpenStax Biology 2e, CC BY 4.0).
// Notes describe the animal group the source describes, not the exact specimen on the slide. Arabic is a translation that
// needs review by a specialist. A slide with no entry here shows no note: nothing is guessed.
export type AnimalNote = { recognize?: Bilingual; function?: Bilingual; compare?: Bilingual; source: { title: string; url: string } };
const os = (title: string, page: string) => ({ title: `OpenStax Biology 2e: ${title}`, url: `https://openstax.org/books/biology-2e/pages/${page}` });
const annelidSrc = os('28.4 Superphylum Lophotrochozoa: Mollusks and Annelids', '28-4-superphylum-lophotrochozoa-mollusks-and-annelids');
const cnidSrc = os('28.2 Phylum Cnidaria', '28-2-phylum-cnidaria');
const arthSrc = os('28.6 Superphylum Ecdysozoa: Arthropods', '28-6-superphylum-ecdysozoa-arthropods');
const nemSrc = os('28.5 Superphylum Ecdysozoa: Nematodes and Tardigrades', '28-5-superphylum-ecdysozoa-nematodes-and-tardigrades');
const fishSrc = os('29.2 Fishes', '29-2-fishes');
const birdSrc = os('29.5 Birds', '29-5-birds');

const annelid: AnimalNote = {
  recognize: { en: 'Annelids are the true, segmented worms. The name comes from the Latin annulus, a small ring, which describes the ring-like segmentation of the body. In oligochaetes (earthworms and leeches) the clitellum is a permanent fused band on the anterior third of the animal.', ar: 'الـ annelids هي الديدان الحلقية الحقيقية. الاسم جاي من الكلمة اللاتينية annulus يعني حلقة صغيرة، وده وصف للتقسيم الحلقي لجسمها. في oligochaetes (ديدان الأرض والعلق) الـ clitellum حزام ملتحم دايم في الثلث الأمامي من الحيوان.' },
  function: { en: 'The clitellum is a reproductive structure that generates mucus to aid sperm transfer and also produces a cocoon, within which fertilization occurs. Chitinous bristles called setae are anchored in the epidermis, each with its own muscle.', ar: 'الـ clitellum تركيب تناسلي بيفرز مخاط يساعد في نقل الحيوانات المنوية وبيكوّن كمان cocoon بيحصل جواه الإخصاب. الشعيرات الكيتينية اسمها setae مثبتة في البشرة وكل واحدة ليها عضلتها.' },
  compare: { en: 'In the polychaetes, the setae are borne on paired appendages called parapodia.', ar: 'في الـ polychaetes الـ setae بتكون محمولة على زوايد مزدوجة اسمها parapodia.' },
  source: annelidSrc,
};
const cnidarian: AnimalNote = {
  recognize: { en: 'The defining cell type for the cnidarians is the cnidocyte, or stinging cell. Cnidocytes have large stinging organelles called nematocysts, which usually contain barbs at the base of a long coiled thread.', ar: 'الخلية المميزة للـ cnidarians هي الـ cnidocyte أو الخلية اللاسعة. الـ cnidocytes فيها عضيات لاسعة كبيرة اسمها nematocysts، وغالبا فيها شوكات عند قاعدة خيط طويل ملفوف.' },
  function: { en: 'Upon firing, a lid on the nematocyst opens. The barb pops out of the cell and the thread uncoils.', ar: 'وقت الإطلاق بيتفتح غطاء الـ nematocyst، فالشوكة بتطلع من الخلية والخيط بيتفرد.' },
  compare: { en: 'Whereas the defining cell type for the sponges is the choanocyte, the defining cell type for the cnidarians is the cnidocyte.', ar: 'الخلية المميزة للإسفنج هي الـ choanocyte، لكن الخلية المميزة للـ cnidarians هي الـ cnidocyte.' },
  source: cnidSrc,
};
const arthropod: AnimalNote = {
  recognize: { en: 'Arthropods are coelomate organisms characterized by a sturdy chitinous exoskeleton and jointed appendages. Characteristic features of the arthropods include the presence of jointed appendages, body segmentation, and chitinized exoskeleton.', ar: 'الـ arthropods حيوانات ليها coelom وبتتميز بهيكل خارجي كيتيني قوي وزوايد مفصلية. من مميزاتها: الزوايد المفصلية وتقسيم الجسم والهيكل الخارجي الكيتيني.' },
  function: { en: 'Jointed arthropod appendages, often in segmental pairs, have been specialized for various functions: sensing their environment (antennae), capturing and manipulating food (mandibles and maxillae), as well as for walking, jumping, digging, and swimming.', ar: 'الزوايد المفصلية في الـ arthropods، وغالبا بتكون أزواج في كل قطعة، اتخصصت لوظايف مختلفة: استشعار البيئة (antennae)، والإمساك بالأكل والتعامل معاه (mandibles و maxillae)، وكمان المشي والقفز والحفر والسباحة.' },
  compare: { en: 'Arthropods have an exoskeleton made principally of chitin, a waterproof, tough polysaccharide. To grow, the arthropod must shed the exoskeleton in a process called molting.', ar: 'الهيكل الخارجي في الـ arthropods متكون أساسا من الكيتين، وهو سكّر متعدد قوي ومقاوم للماية. عشان تكبر لازم تتخلص من الهيكل الخارجي في عملية اسمها molting.' },
  source: arthSrc,
};
const tracheae: AnimalNote = {
  recognize: { en: 'Insects and myriapods use a series of tubes (tracheae) that branch through the body, ending in minute tracheoles. The major tracheae open to the surface of the cuticle via apertures called spiracles.', ar: 'الحشرات و myriapods بتستخدم سلسلة أنابيب (tracheae) بتتفرع في الجسم وبتنتهي بأنابيب دقيقة (tracheoles). الـ tracheae الكبيرة بتفتح على سطح الكيوتيكل من خلال فتحات اسمها spiracles.' },
  function: { en: 'These tracheal systems are used for ventilation (gas exchange).', ar: 'النظام ده بيستخدم في التهوية (تبادل الغازات).' },
  compare: { en: 'These tracheal systems of ventilation have evolved independently in hexapods, myriapods, and arachnids.', ar: 'أنظمة التهوية دي تطورت بشكل مستقل في hexapods و myriapods و arachnids.' },
  source: arthSrc,
};
const chelicerate: AnimalNote = {
  recognize: { en: 'Chelicerata includes horseshoe crabs, spiders, scorpions, ticks, mites, and harvestmen. In spiders, the chelicerae are often modified and terminate in fangs that inject venom into their prey before feeding.', ar: 'الـ Chelicerata بتشمل سرطان حدوة الحصان والعناكب والعقارب والقراد والحلم (mites). في العناكب الـ chelicerae غالبا بتتعدل وبتنتهي بأنياب بتحقن السم في الفريسة قبل ما تاكل.' },
  function: { en: 'Parasitic chelicerates like ticks and mites have evolved blood-sucking apparatuses.', ar: 'الـ chelicerates الطفيلية زي القراد والحلم تطورت عندها أجهزة لمص الدم.' },
  compare: { en: 'The book lungs of arachnids (scorpions, spiders, ticks, and mites) contain a vertical stack of hemocoel wall tissue that somewhat resembles the pages of a book.', ar: 'رئات الكتاب في arachnids (العقارب والعناكب والقراد والحلم) فيها كومة رأسية من نسيج جدار الـ hemocoel شكلها شبه صفحات الكتاب.' },
  source: arthSrc,
};
const crustacean: AnimalNote = {
  recognize: { en: 'Crustacea includes crabs, lobsters, crayfish, isopods, barnacles, and some zooplankton.', ar: 'الـ Crustacea بتشمل السراطين والكركند والجمبري النهري و isopods والبرنقيل وبعض الـ zooplankton.' },
  function: { en: 'The gills of crustaceans are filamentous structures that exchange gases with the surrounding water.', ar: 'خياشيم الـ crustaceans تراكيب خيطية بتبادل الغازات مع الماية اللي حواليها.' },
  compare: { en: 'Larval stages, nauplius or zoea, are seen in the early development of aquatic crustaceans.', ar: 'مراحل اليرقات، nauplius أو zoea، بتظهر في التطور المبكر للـ crustaceans المائية.' },
  source: arthSrc,
};
const nematode: AnimalNote = {
  recognize: { en: 'In contrast with flatworms, nematodes are pseudocoelomates and show a tubular morphology and circular cross-section.', ar: 'عكس الديدان المسطحة، الـ nematodes ليها pseudocoelom وشكلها أنبوبي ومقطعها العرضي دائري.' },
  function: { en: 'The cuticle is a tough, but flexible exoskeleton that protects these animals from water loss, predators, and other dangers of the external environment.', ar: 'الـ cuticle هيكل خارجي قوي ومرن بيحمي الحيوانات دي من فقدان الماية والمفترسات ومخاطر البيئة الخارجية.' },
  compare: { en: 'Nematodes include both free-living and parasitic forms.', ar: 'الـ nematodes فيها أشكال حرة المعيشة وأشكال طفيلية.' },
  source: nemSrc,
};
const gastropod: AnimalNote = {
  recognize: { en: 'Most mollusks have a special rasp-like organ, the radula, which bears chitinous filelike teeth. Gastropods include snails and slugs; slugs lack a shell.', ar: 'معظم الرخويات عندها عضو شبه المبرد اسمه radula عليه أسنان كيتينية زي المبرد. الـ gastropods بتشمل القواقع والبزاقات، والبزاقات ملهاش صدفة.' },
  function: { en: 'The radula serves to shred or scrape food before it enters the digestive tract. A complex radula is used to scrape up food particles.', ar: 'الـ radula بتقطّع أو بتكشط الأكل قبل ما يدخل الجهاز الهضمي. الـ radula المعقدة بتستخدم لكشط جزيئات الأكل.' },
  compare: { en: 'The radula is present in all groups of mollusks except the bivalves.', ar: 'الـ radula موجودة في كل مجموعات الرخويات ما عدا الـ bivalves.' },
  source: os('28.4 Superphylum Lophotrochozoa: Mollusks and Annelids', '28-4-superphylum-lophotrochozoa-mollusks-and-annelids'),
};
const bivalve: AnimalNote = {
  recognize: { en: 'Class Bivalvia includes clams, oysters, mussels, scallops, geoducks, and shipworms. Bivalves are enclosed in two-part valves or shells.', ar: 'الـ Bivalvia بتشمل البلح والمحار وبلح البحر والإسكالوب. الـ bivalves محاطة بصدفتين من جزئين.' },
  function: { en: 'One of the functions of the mantle is to secrete the shell. Some bivalves, like oysters and mussels, deposit a calcareous nacre or mother of pearl around foreign particles that enter the mantle cavity.', ar: 'من وظايف الـ mantle إنه بيفرز الصدفة. بعض الـ bivalves زي المحار وبلح البحر بتترسب حوالين الأجسام الغريبة اللي بتدخل تجويف الـ mantle مادة nacre (عرق اللؤلؤ).' },
  compare: { en: 'Bivalves are filter-feeders, and a radula is absent in this class of mollusks.', ar: 'الـ bivalves بتتغذى بالترشيح، والـ radula مش موجودة في الصف ده من الرخويات.' },
  source: os('28.4 Superphylum Lophotrochozoa: Mollusks and Annelids', '28-4-superphylum-lophotrochozoa-mollusks-and-annelids'),
};
const fishScale: AnimalNote = {
  recognize: { en: 'The skin of bony fishes is often covered by overlapping scales.', ar: 'جلد الأسماك العظمية غالبا بيكون مغطى بحراشف متراكبة.' },
  function: { en: 'Glands in the skin secrete mucus that reduces drag when swimming and aids the fish in osmoregulation.', ar: 'الغدد في الجلد بتفرز مخاط بيقلل المقاومة وقت السباحة وبيساعد السمكة في تنظيم الضغط الأسموزي.' },
  compare: { en: 'Sharks have abrasive skin covered with tooth-like scales called placoid scales.', ar: 'جلد أسماك القرش خشن ومغطى بحراشف شبه الأسنان اسمها placoid scales.' },
  source: fishSrc,
};
const feather: AnimalNote = {
  recognize: { en: 'Contour feathers have a number of parallel barbs that branch from a central shaft. The barbs in turn have microscopic branches called barbules that are linked together by minute hooks, making the vane of a feather a strong, flexible, and uninterrupted surface.', ar: 'الريش الخارجي (contour) فيه شعيرات متوازية (barbs) متفرعة من محور مركزي. والـ barbs ليها فروع مجهرية اسمها barbules متصلة ببعض بخطاطيف دقيقة، فسطح الريشة قوي ومرن ومتصل.' },
  function: { en: 'Birds have several different types of feathers that together keep heat within the core of the body. Birds rely on feathers, and wings, along with other modifications of body structure and physiology, for flight.', ar: 'الطيور عندها أنواع ريش مختلفة بتحافظ مع بعض على الحرارة جوه الجسم. والطيور بتعتمد على الريش والأجنحة، مع تعديلات تانية في تركيب الجسم ووظايفه، عشان تطير.' },
  compare: { en: 'In contrast, the barbules of down feathers do not interlock, making these feathers especially good for insulation.', ar: 'عكس كده، الـ barbules في ريش الزغب مش بتتشابك، وده بيخلي الريش ده كويس جدا في العزل.' },
  source: birdSrc,
};

// Slide ids are matched by words in the id; the first rule that matches wins. Only groups the cited page describes are listed.
const rules: Array<[RegExp, AnimalNote]> = [
  [/^(earthworm|leech)/, annelid],
  [/^(medusa|hydra|antipathozoanthus)/, cnidarian],
  [/^(insect-trachea|arachnid-spiracle)/, tracheae],
  [/^(nematode|caenorhabditis)/, nematode],
  [/^(snail-radula|slug-)/, gastropod],
  [/^pearl-mussel/, bivalve],
  [/^(fish-scale)/, fishScale],
  [/(bird-feather|peacock-feather|pheasant-feather)/, feather],
  [/(mite|spider|loxosceles|black-widow)/, chelicerate],
  [/^(crab-larva|amphipod|antarctic-krill)/, crustacean],
  [/(mosquito|^aedes|^ant-|bed-bug|^honeybee|housefly|insect-|psocopteran|thrips|firebrat|trichogramma|wasp|violet-carpenter|bee-|drosophila|butterfly|colour-transition|fly-|aphid|nomada|tachinid|honey-bee|phantom-crane|german-wasp|chironomid|damselfly|trigonalid)/, arthropod],
];
const map: Record<string, AnimalNote> = {};
for (const sp of specimens) for (const [re, note] of rules) if (re.test(sp.id)) { map[sp.id] = note; break; }
export const animalNotes: Record<string, AnimalNote> = map;
