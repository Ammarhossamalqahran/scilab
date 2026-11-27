import { specimens, type Bilingual } from './scientificData';
import { clinicalNotes } from './clinicalNotes';
import { plantNotes } from './plantNotes';

// Animal notes for zoology (and the animal slides in other departments): how to recognize the structure, what it does,
// and a comparison. Every English sentence is taken from the cited open textbook page (OpenStax Biology 2e, CC BY 4.0).
// Notes describe the animal group the source describes, not the exact specimen on the slide. Arabic is a translation that
// needs review by a specialist. A slide with no entry here shows no note: nothing is guessed.
export type AnimalNote = { recognize?: Bilingual; function?: Bilingual; functionLabel?: Bilingual; compare?: Bilingual; source: { title: string; url: string } };
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

// ---- Aquatic-life groups (protists, algae, cyanobacteria, rotifers). Same rule: sentences from the cited page.
const protSrc = os('23.3 Groups of Protists', '23-3-groups-of-protists');
const ciliate: AnimalNote = {
  recognize: { en: 'The ciliates, which include Paramecium and Tetrahymena, are a group of protists 10 to 3,000 micrometers in length that are covered in rows, tufts, or spirals of tiny cilia. Ciliates also are surrounded by a pellicle.', ar: 'الـ ciliates، ومنها Paramecium و Tetrahymena، مجموعة من الطلائعيات طولها من 10 لـ 3000 ميكرومتر ومغطاة بصفوف أو خصل أو لوالب من أهداب (cilia) دقيقة. وكمان محاطة بغشاء واقي اسمه pellicle.' },
  function: { en: 'By beating their cilia synchronously or in waves, ciliates can coordinate directed movements and ingest food particles. Paramecium uses contractile vacuoles, which are osmoregulatory vesicles that fill with water as it enters the cell by osmosis and then contract to squeeze water from the cell.', ar: 'بضرب الأهداب بالتزامن أو في موجات، الـ ciliates بتنسق حركتها وبتبلع جزيئات الأكل. الـ Paramecium بتستخدم فجوات منقبضة (contractile vacuoles) وهي حويصلات لتنظيم الضغط الأسموزي بتتملي ماية بتدخل الخلية بالأسموزية وبعدين بتنقبض وتعصر الماية بره الخلية.' },
  compare: { en: 'Paramecium has two nuclei, a macronucleus and a micronucleus, in each cell.', ar: 'الـ Paramecium في كل خلية فيها نواتين: macronucleus و micronucleus.' },
  source: protSrc,
};
const diatom: AnimalNote = {
  recognize: { en: 'The diatoms are unicellular photosynthetic protists that encase themselves in intricately patterned, glassy cell walls composed of silicon dioxide in a matrix of organic particles. Diatoms range in size from 2 to 200 micrometers.', ar: 'الدياتومات (diatoms) طلائعيات وحيدة الخلية بتعمل البناء الضوئي وبتغلف نفسها بجدران خلوية زجاجية بزخارف معقدة من ثاني أكسيد السيليكون في مصفوفة من جزيئات عضوية. حجمها من 2 لـ 200 ميكرومتر.' },
  function: { en: 'Some diatoms exhibit a slit in their silica shell, called a raphe. By expelling a stream of mucopolysaccharides from the raphe, the diatom can attach to surfaces or propel itself in one direction.', ar: 'بعض الدياتومات فيها شق في قشرتها السيليكية اسمه raphe. بإخراج تيار من mucopolysaccharides من الـ raphe بتقدر الدياتوم تلصق في الأسطح أو تدفع نفسها في اتجاه واحد.' },
  source: protSrc,
};
const radiolarian: AnimalNote = {
  recognize: { en: 'Radiolarians exhibit intricate exteriors of glassy silica with radial or bilateral symmetry.', ar: 'الـ radiolarians ليها أغلفة خارجية معقدة من السيليكا الزجاجية بتماثل شعاعي أو جانبي.' },
  function: { en: 'The shells of dead radiolarians sink to the ocean floor, where they may accumulate in 100 meter-thick depths.', ar: 'أصداف الـ radiolarians الميتة بتغرق لقاع المحيط وممكن تتراكم بسمك 100 متر.' },
  compare: { en: 'Preserved, sedimented radiolarians are very common in the fossil record.', ar: 'الـ radiolarians المترسبة المحفوظة شائعة جدا في السجل الأحفوري.' },
  source: protSrc,
};
const foram: AnimalNote = {
  recognize: { en: 'Foraminiferans, or forams, are unicellular heterotrophic protists, ranging from approximately 20 micrometers to several centimeters in length, and occasionally resembling tiny snails.', ar: 'الـ foraminiferans أو forams طلائعيات وحيدة الخلية غيرية التغذية طولها من حوالي 20 ميكرومتر لعدة سنتيمترات، وأحيانا شكلها شبه قواقع صغيرة.' },
  function: { en: 'Foram pseudopodia extend through the pores and allow the forams to move, feed, and gather additional building materials.', ar: 'الأرجل الكاذبة (pseudopodia) في الـ forams بتمتد من خلال الثقوب وبتخليها تتحرك وتتغذى وتجمع مواد بناء إضافية.' },
  compare: { en: 'Forams are the only eukaryotes known to participate in the nitrogen cycle by denitrification, an activity usually served only by prokaryotes.', ar: 'الـ forams هي حقيقيات النواة الوحيدة المعروفة إنها بتشارك في دورة النيتروجين بنزع النيتروجين، وده نشاط بتعمله عادة بدائيات النواة بس.' },
  source: protSrc,
};
const dino: AnimalNote = {
  recognize: { en: 'Many dinoflagellates are encased in interlocking plates of cellulose. Two perpendicular flagella fit into the grooves between the cellulose plates, with one flagellum extending longitudinally and a second encircling the dinoflagellate.', ar: 'كتير من الـ dinoflagellates محاطة بألواح من السليلوز متداخلة. فلاجيلّتين متعامدتين بيتحطوا في الأخاديد بين الألواح، واحدة ممتدة طوليا والتانية بتلف حوالين الكائن.' },
  function: { en: 'Together, the flagella contribute to the characteristic spinning motion of dinoflagellates.', ar: 'الفلاجيلّتين مع بعض بيعملوا حركة الدوران المميزة للـ dinoflagellates.' },
  compare: { en: 'Dinoflagellates can be photosynthetic, heterotrophic, or mixotrophic.', ar: 'الـ dinoflagellates ممكن تكون بتعمل بناء ضوئي أو غيرية التغذية أو مختلطة التغذية.' },
  source: protSrc,
};
const amoeba: AnimalNote = {
  recognize: { en: 'Amoebozoan cells characteristically exhibit pseudopodia that extend like tubes or flat lobes. The Gymnamoeba include naked amoebae like the familiar Amoeba proteus.', ar: 'خلايا الـ amoebozoa بتظهر فيها أرجل كاذبة (pseudopodia) ممتدة زي أنابيب أو فصوص مسطحة. الـ Gymnamoeba بتشمل أميبات عارية زي Amoeba proteus المعروفة.' },
  function: { en: 'These pseudopods project outward from anywhere on the cell surface and can anchor to a substrate. The protist then transports its cytoplasm into the pseudopod, thereby moving the entire cell.', ar: 'الأرجل الكاذبة دي بتطلع من أي مكان على سطح الخلية وممكن تتثبت في سطح. وبعدين الطلائعي بينقل السيتوبلازم جوه الرجل الكاذبة فيتحرك الخلية كلها.' },
  compare: { en: 'The Rhizaria include many amoebas with thin threadlike, needle-like or root-like pseudopodia, rather than the broader lobed pseudopodia of the Amoebozoa.', ar: 'الـ Rhizaria فيها أميبات كتير أرجلها الكاذبة رفيعة خيطية أو إبرية أو جذرية، مش فصوص عريضة زي الـ Amoebozoa.' },
  source: protSrc,
};
const volvox: AnimalNote = {
  recognize: { en: 'Volvox colonies contain 500 to 60,000 cells, each with two flagella, contained within a hollow, spherical matrix composed of a gelatinous glycoprotein secretion.', ar: 'مستعمرات الـ Volvox فيها من 500 لـ 60,000 خلية، كل خلية ليها فلاجيلّتين، جوه مصفوفة كروية مجوفة من إفراز glycoprotein جيلاتيني.' },
  function: { en: 'Individual cells in a Volvox colony move in a coordinated fashion and are interconnected by cytoplasmic bridges.', ar: 'الخلايا في مستعمرة الـ Volvox بتتحرك بشكل منسق ومتصلة ببعض بجسور سيتوبلازمية.' },
  compare: { en: 'Volvox is one of only a few examples of a colonial organism, which behaves in some ways like a collection of individual cells, but in other ways like the specialized cells of a multicellular organism.', ar: 'الـ Volvox من أمثلة قليلة على الكائنات الاستعمارية، وبتتصرف من ناحية زي مجموعة خلايا منفردة ومن ناحية تانية زي خلايا متخصصة في كائن متعدد الخلايا.' },
  source: protSrc,
};
const greenAlga: AnimalNote = {
  recognize: { en: 'The green algae exhibit features similar to those of the land plants, particularly in terms of chloroplast structure. The familiar Spirogyra is a charophyte.', ar: 'الطحالب الخضراء ليها صفات شبه النباتات الأرضية، خصوصا في تركيب البلاستيدة الخضراء. الـ Spirogyra المعروفة من الـ charophytes.' },
  function: { en: 'In both green algae and plants, carbohydrates are stored in the plastid.', ar: 'في الطحالب الخضراء والنباتات الكربوهيدرات بتتخزن في البلاستيدة.' },
  compare: { en: 'The green algae are subdivided into the chlorophytes and the charophytes.', ar: 'الطحالب الخضراء بتتقسم لـ chlorophytes و charophytes.' },
  source: protSrc,
};
const cyano: AnimalNote = {
  recognize: { en: 'Cyanobacteria, also known as "blue-green algae," evolved from simple phototrophs. Cyanobacteria are prokaryotes, photosynthetic bacteria that bear a resemblance to algae.', ar: 'الـ cyanobacteria، وبتتسمى كمان "الطحالب الخضراء المزرقة"، تطورت من كائنات بسيطة بتستخدم الضوء. الـ cyanobacteria بدائيات نواة، بكتيريا بتعمل بناء ضوئي وشكلها شبه الطحالب.' },
  function: { en: 'It was the ancestral cyanobacteria that began the "oxygenation" of the atmosphere.', ar: 'أسلاف الـ cyanobacteria هي اللي بدأت "أكسجة" الغلاف الجوي.' },
  source: os('22.1 Prokaryotic Diversity', '22-1-prokaryotic-diversity'),
};
const rotifer: AnimalNote = {
  recognize: { en: 'The rotifers ("wheel-bearer") are microscopic (about 100 micrometers to 2 mm) mostly aquatic animals that get their name from the corona, a pair of ciliated feeding structures that appear to rotate when viewed under the light microscope.', ar: 'الـ rotifers ("حاملة العجلة") حيوانات مجهرية (حوالي 100 ميكرومتر لـ 2 مم) معظمها مائي، واسمها جاي من الـ corona وهي زوج من تراكيب التغذية المهدبة بتبان كأنها بتدور تحت المجهر الضوئي.' },
  function: { en: 'Rotifers are typically free-swimming or planktonic (drifting) organisms, but the toes or extensions of the foot can secrete a sticky material to help them adhere to surfaces.', ar: 'الـ rotifers غالبا بتسبح حرة أو بتكون عالقة (plankton)، لكن أصابع القدم أو امتداداتها بتفرز مادة لزجة تساعدها تلزق في الأسطح.' },
  compare: { en: 'The pseudocoelomate body of a rotifer is divided into three sections: a head (which contains the corona), a trunk (which contains most of the internal organs), and the foot.', ar: 'جسم الـ rotifer (فيه pseudocoelom) متقسم لثلاث أقسام: رأس (فيه الـ corona) وجذع (فيه معظم الأعضاء الداخلية) وقدم.' },
  source: os('28.3 Superphylum Lophotrochozoa: Flatworms, Rotifers, and Nemerteans', '28-3-superphylum-lophotrochozoa-flatworms-rotifers-and-nemerteans'),
};

// ---- Microbiology groups (bacteria shapes, Gram stain, yeasts and moulds). Sentences from OpenStax Microbiology (CC BY 4.0).
const osm = (title: string, page: string) => ({ title: `OpenStax Microbiology: ${title}`, url: `https://openstax.org/books/microbiology/pages/${page}` });
const stainSrc = osm('2.4 Staining Microscopic Specimens', '2-4-staining-microscopic-specimens');
const morphSrc = osm('3.3 Unique Characteristics of Prokaryotic Cells', '3-3-unique-characteristics-of-prokaryotic-cells');
const gposSrc = osm('4.4 Gram-Positive Bacteria', '4-4-gram-positive-bacteria');
const fungiSrc = osm('5.3 Fungi', '5-3-fungi');
const keyPoint: Bilingual = { en: 'Key point: ', ar: 'النقطة الأساسية: ' };
const howStain: Bilingual = { en: 'How the stain works: ', ar: 'الصبغة بتشتغل إزاي: ' };
const gramStain: AnimalNote = {
  recognize: { en: 'After Gram staining, cells that have thick peptidoglycan layers in their cell walls generally retain the crystal violet dye and remain purple. Cells with thinner peptidoglycan layers lose the dye and are stained pink by the safranin counterstain.', ar: 'بعد صبغة جرام، الخلايا اللي جدارها فيه طبقات peptidoglycan سميكة بتحتفظ بصبغة الكريستال البنفسجي وبتفضل بنفسجية. الخلايا اللي طبقتها أرفع بتفقد الصبغة وبتتصبغ بالوردي من صبغة safranin.' },
  function: { en: 'The Gram stain procedure is a differential staining procedure developed by Hans Christian Gram in 1884 as an effective method to distinguish between bacteria with different types of cell walls.', ar: 'صبغة جرام طريقة صبغ تفريقية ابتكرها Hans Christian Gram سنة 1884 كوسيلة فعالة للتفريق بين بكتيريا ليها أنواع مختلفة من الجدار الخلوي.' },
  functionLabel: howStain,
  source: stainSrc,
};
const cocci: AnimalNote = {
  recognize: { en: 'A coccus (plural: cocci) is a round, spherical cell. A diplococcus is a pair of two cocci, a streptococcus is a chain of cocci, and a staphylococcus is a cluster of cocci connected into a bundle.', ar: 'الـ coccus (جمعه cocci) خلية دايرية كروية. الـ diplococcus زوج من cocci، والـ streptococcus سلسلة من cocci، والـ staphylococcus عنقود من cocci متصلة في حزمة.' },
  function: { en: 'Prokaryotic cells of the same species may group together in distinctive arrangements depending on the plane of cell division.', ar: 'خلايا بدائيات النواة من نفس النوع ممكن تتجمع في ترتيبات مميزة حسب مستوى انقسام الخلية.' },
  functionLabel: keyPoint,
  compare: { en: 'Streptococcus, the name of which comes from the Greek word for twisted chain, is a genus of Gram-positive bacteria.', ar: 'اسم Streptococcus جاي من الكلمة اليونانية اللي معناها سلسلة ملتوية، وهو جنس من البكتيريا موجبة الجرام.' },
  source: morphSrc,
};
const bacilli: AnimalNote = {
  recognize: { en: 'A bacillus (plural: bacilli) is a rod-shaped cell. A coccobacillus is a short rod that looks oval, and a diplobacillus is a pair of rods.', ar: 'الـ bacillus (جمعه bacilli) خلية عصوية الشكل. الـ coccobacillus عصية قصيرة شكلها بيضاوي، والـ diplobacillus زوج من العصيات.' },
  function: { en: 'Individual cells of a particular prokaryotic organism are typically similar in shape, or cell morphology.', ar: 'الخلايا الفردية في الكائن بدائي النواة الواحد غالبا بتكون متشابهة في الشكل (cell morphology).' },
  functionLabel: keyPoint,
  compare: { en: 'A spirillum is a long spiral cell that looks like a corkscrew.', ar: 'الـ spirillum خلية لولبية طويلة شكلها زي المفتاح اللولبي.' },
  source: morphSrc,
};
const coryne: AnimalNote = {
  recognize: { en: 'Bacteria in the genus Corynebacterium often form palisades, or pairs of rod-shaped cells resembling the letter V. Cells may contain metachromatic granules, intracellular storage of inorganic phosphates.', ar: 'بكتيريا جنس Corynebacterium غالبا بتكوّن palisades، أي أزواج من خلايا عصوية شكلها زي حرف V. الخلايا ممكن يكون فيها حبيبات metachromatic، وهي تخزين داخل الخلية للفوسفات غير العضوي.' },
  function: { en: 'Metachromatic granules are useful for identification of Corynebacterium.', ar: 'الحبيبات metachromatic مفيدة في التعرف على Corynebacterium.' },
  functionLabel: keyPoint,
  source: gposSrc,
};
const filaments: AnimalNote = {
  recognize: { en: 'The microscopic appearance of Actinobacteria can range from thin filamentous branching rods to coccobacilli. Actinomyces is a Gram-positive bacillus that in colonies shows fungus-like threads (hyphae).', ar: 'الشكل المجهري للـ Actinobacteria ممكن يكون من عصيات خيطية رفيعة متفرعة لـ coccobacilli. الـ Actinomyces عصية موجبة الجرام بتبين في المستعمرات خيوط شبه الفطريات (hyphae).' },
  compare: { en: 'Nocardia is a weakly Gram-positive bacillus that forms acid-fast branches.', ar: 'الـ Nocardia عصية موجبة الجرام بشكل ضعيف وبتكوّن فروع acid-fast.' },
  source: gposSrc,
};
const lactic: AnimalNote = {
  recognize: { en: 'The order Lactobacillales comprises low G+C Gram-positive bacteria that include both bacilli and cocci in the genera Lactobacillus, Leuconostoc, Enterococcus, and Streptococcus.', ar: 'رتبة Lactobacillales بتشمل بكتيريا موجبة الجرام منخفضة G+C فيها عصيات و cocci في الأجناس Lactobacillus و Leuconostoc و Enterococcus و Streptococcus.' },
  source: gposSrc,
};
const yeast: AnimalNote = {
  recognize: { en: 'In contrast to molds, yeasts are unicellular fungi. The budding yeasts reproduce asexually by budding off a smaller daughter cell; the resulting cells may sometimes stick together as a short chain or pseudohypha.', ar: 'عكس العفن (molds)، الخمائر (yeasts) فطريات وحيدة الخلية. الخمائر المتبرعمة بتتكاثر لاجنسيا بتبرعم خلية بنت أصغر، والخلايا الناتجة ممكن تلزق في سلسلة قصيرة أو pseudohypha.' },
  function: { en: 'Candida albicans and Histoplasma capsulatum are dimorphic yeasts: they can appear as yeasts or molds, changing their appearance in response to nutrient availability or temperature.', ar: 'الـ Candida albicans و Histoplasma capsulatum خمائر ثنائية الشكل (dimorphic): ممكن تظهر كخميرة أو كعفن وبتغير شكلها حسب توفر الغذاء أو درجة الحرارة.' },
  functionLabel: keyPoint,
  source: fungiSrc,
};
const mould: AnimalNote = {
  recognize: { en: 'Most multicellular fungal bodies, commonly called molds, are made up of filaments called hyphae. Hyphae can form a tangled network called a mycelium.', ar: 'معظم أجسام الفطريات متعددة الخلايا، وبتتسمى عفن (molds)، مكونة من خيوط اسمها hyphae. الـ hyphae ممكن تكوّن شبكة متشابكة اسمها mycelium.' },
  function: { en: 'Fungi may reproduce asexually by mitosis, budding, fragmentation of hyphae, and formation of asexual spores. Sexually produced spores are known as zygospores (in Zygomycota), ascospores (in Ascomycota), or basidiospores (in Basidiomycota).', ar: 'الفطريات ممكن تتكاثر لاجنسيا بالانقسام الميتوزي والتبرعم وتفتت الـ hyphae وتكوين أبواغ لاجنسية. الأبواغ الجنسية اسمها zygospores (في Zygomycota) أو ascospores (في Ascomycota) أو basidiospores (في Basidiomycota).' },
  functionLabel: keyPoint,
  compare: { en: 'Hyphae that have walls between the cells are called septate hyphae; hyphae that lack walls between the cells are called nonseptate or coenocytic hyphae.', ar: 'الـ hyphae اللي فيها جدران بين الخلايا اسمها septate، واللي مفيهاش جدران بين الخلايا اسمها nonseptate أو coenocytic.' },
  source: fungiSrc,
};

// ---- Histology groups (tissues and organs). Sentences from OpenStax Anatomy and Physiology 2e (CC BY 4.0).
const osa = (title: string, page: string) => ({ title: `OpenStax Anatomy and Physiology 2e: ${title}`, url: `https://openstax.org/books/anatomy-and-physiology-2e/pages/${page}` });
const epiSrc = osa('4.2 Epithelial Tissue', '4-2-epithelial-tissue');
const ctSrc = osa('4.3 Connective Tissue Supports and Protects', '4-3-connective-tissue-supports-and-protects');
const muscSrc = osa('4.4 Muscle Tissue and Motion', '4-4-muscle-tissue-and-motion');
const nervSrc = osa('4.5 Nervous Tissue Mediates Perception and Response', '4-5-nervous-tissue-mediates-perception-and-response');
const hairSrc = osa('5.2 Accessory Structures of the Skin', '5-2-accessory-structures-of-the-skin');
const gutSrc = osa('23.5 The Small and Large Intestines', '23-5-the-small-and-large-intestines');
const testSrc = osa('27.1 Anatomy and Physiology of the Testicular Reproductive System', '27-1-anatomy-and-physiology-of-the-testicular-reproductive-system');
const ovSrc = osa('27.2 Anatomy and Physiology of the Ovarian Reproductive System', '27-2-anatomy-and-physiology-of-the-ovarian-reproductive-system');
const thySrc = osa('17.4 The Thyroid Gland', '17-4-the-thyroid-gland');
const paraSrc = osa('17.5 The Parathyroid Glands', '17-5-the-parathyroid-glands');
const pitSrc = osa('17.3 The Pituitary Gland and Hypothalamus', '17-3-the-pituitary-gland-and-hypothalamus');
const pinSrc = osa('17.7 The Pineal Gland', '17-7-the-pineal-gland');
const squamous: AnimalNote = {
  recognize: { en: 'In a simple squamous epithelium, the cells are flattened and single layered.', ar: 'في الظهارة الحرشفية البسيطة (simple squamous) الخلايا مسطحة وفي طبقة واحدة.' },
  function: { en: 'Cell shapes can be squamous (flattened and thin), cuboidal (boxy, as wide as it is tall), or columnar (rectangular, taller than it is wide).', ar: 'أشكال الخلايا ممكن تكون squamous (مسطحة ورفيعة) أو cuboidal (مكعبة، عرضها زي ارتفاعها) أو columnar (مستطيلة، أطول من عرضها).' },
  functionLabel: keyPoint, source: epiSrc,
};
const cuboidal: AnimalNote = {
  recognize: { en: 'In a simple cuboidal epithelium, the cells are cube shaped and single layered.', ar: 'في الظهارة المكعبة البسيطة (simple cuboidal) الخلايا على شكل مكعب وفي طبقة واحدة.' },
  function: { en: 'A simple epithelium has one cell layer, where every cell rests on the basal lamina; a stratified epithelium has more than one layer.', ar: 'الظهارة البسيطة فيها طبقة خلايا واحدة وكل خلية قاعدتها على الصفيحة القاعدية، والظهارة الطبقية فيها أكتر من طبقة.' },
  functionLabel: keyPoint, source: epiSrc,
};
const fibres: AnimalNote = {
  recognize: { en: 'Three main types of fibers are secreted by fibroblasts: collagen fibers, elastic fibers, and reticular fibers. The thickest fibers are collagen fibers; the thinner fibers are elastic fibers.', ar: 'في ثلاث أنواع ألياف رئيسية بتفرزها الخلايا الليفية (fibroblasts): ألياف الكولاجين والألياف المرنة والألياف الشبكية. أسمك الألياف هي ألياف الكولاجين، والأرفع هي الألياف المرنة.' },
  function: { en: 'Collagen fibers, while flexible, have great tensile strength, resist stretching, and give ligaments and tendons their characteristic resilience and strength. Elastic fiber contains the protein elastin.', ar: 'ألياف الكولاجين، مع إنها مرنة، ليها قوة شد عالية وبتقاوم التمدد وبتدي الأربطة والأوتار قوتها المميزة. الألياف المرنة فيها بروتين elastin.' },
  compare: { en: 'Elastic fibers are prominent in elastic tissues found in skin and the elastic ligaments of the vertebral column.', ar: 'الألياف المرنة بتبقى ظاهرة في الأنسجة المرنة الموجودة في الجلد والأربطة المرنة للعمود الفقري.' },
  source: ctSrc,
};
const muscle: AnimalNote = {
  recognize: { en: 'Muscle tissue is classified into three types according to structure and function: skeletal, cardiac, and smooth. Skeletal muscle has long cylindrical, striated fibers with many peripherally located nuclei.', ar: 'النسيج العضلي بيتصنف لثلاث أنواع حسب التركيب والوظيفة: هيكلي وقلبي وأملس. العضل الهيكلي ليه ألياف طويلة أسطوانية مخططة وفيها أنوية كتير على الأطراف.' },
  function: { en: 'Skeletal muscle tissue is arranged in bundles surrounded by connective tissue.', ar: 'النسيج العضلي الهيكلي منظم في حزم محاطة بنسيج ضام.' },
  functionLabel: keyPoint, source: muscSrc,
};
const nerve: AnimalNote = {
  recognize: { en: 'Two main classes of cells make up nervous tissue: the neuron and neuroglia.', ar: 'فئتين رئيسيتين من الخلايا بيكونوا النسيج العصبي: العصبون (neuron) والخلايا الدبقية (neuroglia).' },
  function: { en: 'Neurons propagate information via electrochemical impulses, called action potentials. Neuroglia play an essential role in supporting neurons and modulating their information propagation.', ar: 'العصبونات بتنقل المعلومات بنبضات كهروكيميائية اسمها جهود الفعل (action potentials). الخلايا الدبقية ليها دور أساسي في دعم العصبونات وتعديل نقلها للمعلومات.' },
  functionLabel: keyPoint, source: nervSrc,
};
const hair: AnimalNote = {
  recognize: { en: 'Hair is a keratinous filament growing out of the epidermis, primarily made of dead, keratinized cells. Strands of hair originate in an epidermal penetration of the dermis called the hair follicle.', ar: 'الشعر خيط كيراتيني بيطلع من البشرة، ومعظمه من خلايا ميتة متقرنة. خيوط الشعر بتنشأ من انغماد من البشرة في الأدمة اسمه بصيلة الشعر (hair follicle).' },
  function: { en: 'The hair root ends deep in the dermis at the hair bulb, and includes a layer of mitotically active basal cells called the hair matrix. The hair bulb surrounds the hair papilla, which is made of connective tissue and contains blood capillaries and nerve endings from the dermis.', ar: 'جذر الشعر بينتهي عميقا في الأدمة عند بصلة الشعر، وفيه طبقة خلايا قاعدية نشطة الانقسام اسمها hair matrix. البصلة بتحيط بحليمة الشعر (hair papilla) المكونة من نسيج ضام وفيها شعيرات دموية ونهايات عصبية من الأدمة.' },
  functionLabel: keyPoint,
  compare: { en: 'The hair shaft is the part of the hair not anchored to the follicle; the rest of the hair, anchored in the follicle, is called the hair root.', ar: 'ساق الشعر هو الجزء غير المثبت في البصيلة، وباقي الشعر المثبت في البصيلة اسمه جذر الشعر.' },
  source: hairSrc,
};
const gut: AnimalNote = {
  recognize: { en: 'The small intestine has circular folds, villi, and microvilli. Its three regions, from proximal to distal, are the duodenum, jejunum, and ileum.', ar: 'الأمعاء الدقيقة فيها ثنيات دائرية وزغابات (villi) وزغيبات (microvilli). مناطقها الثلاث من القريب للبعيد: الاثنا عشر (duodenum) والصائم (jejunum) واللفائفي (ileum).' },
  function: { en: 'These features increase the absorptive surface area of the small intestine more than 600-fold. Practically all absorption occurs in the small intestine.', ar: 'التراكيب دي بتزود مساحة سطح الامتصاص في الأمعاء الدقيقة أكتر من 600 ضعف. تقريبا كل الامتصاص بيحصل في الأمعاء الدقيقة.' },
  functionLabel: keyPoint, source: gutSrc,
};
const testis: AnimalNote = {
  recognize: { en: 'Within the lobules of the testis, sperm develop in structures called seminiferous tubules. The tightly coiled seminiferous tubules form the bulk of each testis.', ar: 'جوه فصيصات الخصية، الحيوانات المنوية بتتكون في تراكيب اسمها الأنابيب المنوية (seminiferous tubules). الأنابيب المنوية الملتفة بإحكام بتكوّن معظم الخصية.' },
  function: { en: 'Sertoli cells surround all stages of the developing sperm cells and secrete signaling molecules that promote sperm production. Formed sperm are transferred to the epididymis, where they mature.', ar: 'خلايا سرتولي بتحيط بكل مراحل الحيوانات المنوية النامية وبتفرز جزيئات إشارة بتشجع إنتاج الحيوانات المنوية. الحيوانات المنوية المتكونة بتنتقل للبربخ (epididymis) وبتنضج فيه.' },
  functionLabel: keyPoint,
  compare: { en: 'Sperm leave the epididymis during an ejaculation via the ductus deferens. The seminal vesicles and prostate gland add fluids to the sperm to create semen.', ar: 'الحيوانات المنوية بتسيب البربخ وقت القذف عن طريق القناة الناقلة (ductus deferens). الحويصلات المنوية والبروستاتا بيضيفوا سوائل للحيوانات المنوية لتكوين السائل المنوي.' },
  source: testSrc,
};
const ovary: AnimalNote = {
  recognize: { en: 'Beneath the tunica albuginea is the cortex, or outer portion, of the ovary, composed of a tissue framework called the ovarian stroma. Oocytes develop within the outer layer of this stroma, each surrounded by supporting cells.', ar: 'تحت الـ tunica albuginea في القشرة (cortex)، أي الجزء الخارجي من المبيض، وهي مكونة من إطار نسيجي اسمه سدى المبيض (ovarian stroma). البويضات (oocytes) بتنمو في الطبقة الخارجية من السدى، وكل واحدة محاطة بخلايا داعمة.' },
  function: { en: 'The grouping of an oocyte and its supporting cells is called a follicle. The gamete the ovary produces is called an oocyte.', ar: 'تجمع البويضة والخلايا الداعمة ليها اسمه حويصلة (follicle). الأمشاج اللي بينتجها المبيض اسمها oocyte.' },
  functionLabel: keyPoint,
  compare: { en: 'Beneath the cortex lies the inner ovarian medulla, the site of blood vessels, lymph vessels, and the nerves of the ovary.', ar: 'تحت القشرة في النخاع الداخلي للمبيض (medulla)، مكان الأوعية الدموية والليمفاوية وأعصاب المبيض.' },
  source: ovSrc,
};
const thyroid: AnimalNote = {
  recognize: { en: 'The tissue of the thyroid gland is composed mostly of thyroid follicles. The follicles are made up of a central cavity filled with a sticky fluid called colloid, surrounded by a wall of epithelial follicle cells.', ar: 'نسيج الغدة الدرقية مكون في الغالب من حويصلات درقية (thyroid follicles). الحويصلات مكونة من تجويف مركزي مليان بسائل لزج اسمه colloid، محاط بجدار من خلايا ظهارية.' },
  function: { en: 'The colloid is the center of thyroid hormone production, and that production is dependent on iodine.', ar: 'الـ colloid هو مركز إنتاج الهرمون الدرقي، والإنتاج ده معتمد على اليود.' },
  functionLabel: keyPoint,
  compare: { en: 'The thyroid follicle cells are cuboidal epithelial cells.', ar: 'خلايا الحويصلات الدرقية خلايا ظهارية مكعبة.' },
  source: thySrc,
};
const parathyroid: AnimalNote = {
  recognize: { en: 'The parathyroid tissue is largely composed of cube-shaped chief cells encircling a central blood vessel. A few larger and darker-staining oxyphil cells are embedded within the many chief cells.', ar: 'نسيج الغدة جار الدرقية مكون في الغالب من خلايا رئيسية (chief cells) مكعبة حوالين وعاء دموي مركزي. وفيه شوية خلايا oxyphil أكبر وأغمق في الصبغ وسط الخلايا الرئيسية.' },
  function: { en: 'The chief cells produce and secrete parathyroid hormone (PTH), the major hormone involved in the regulation of blood calcium levels.', ar: 'الخلايا الرئيسية بتنتج وبتفرز الهرمون جار الدرقي (PTH)، الهرمون الأساسي في تنظيم مستوى الكالسيوم في الدم.' },
  functionLabel: keyPoint,
  compare: { en: 'The function of the oxyphil cells is not clear.', ar: 'وظيفة خلايا الـ oxyphil مش واضحة.' },
  source: paraSrc,
};
const pituitary: AnimalNote = {
  recognize: { en: 'The pituitary has two lobes that arise from distinct parts of embryonic tissue: the posterior pituitary (neurohypophysis) is neural tissue, whereas the anterior pituitary (adenohypophysis) is glandular tissue that develops from the primitive digestive tract.', ar: 'الغدة النخامية ليها فصين ناشئين من أجزاء مختلفة من النسيج الجنيني: النخامية الخلفية (neurohypophysis) نسيج عصبي، لكن النخامية الأمامية (adenohypophysis) نسيج غدي بيتكون من القناة الهضمية البدائية.' },
  function: { en: 'The pituitary secretes several hormones that directly produce responses in target tissues, as well as hormones that regulate the synthesis and secretion of hormones of other glands.', ar: 'النخامية بتفرز هرمونات بتعمل استجابات مباشرة في الأنسجة المستهدفة، وكمان هرمونات بتنظم تصنيع وإفراز هرمونات غدد تانية.' },
  functionLabel: keyPoint, source: pitSrc,
};
const pineal: AnimalNote = {
  recognize: { en: 'The pineal gland is a tiny endocrine gland inferior but somewhat posterior to the thalamus; its functions are not entirely clear.', ar: 'الغدة الصنوبرية غدة صماء صغيرة تحت المهاد وشوية للخلف، ووظايفها مش واضحة بالكامل.' },
  function: { en: 'The pinealocyte cells that make up the pineal gland produce and secrete the hormone melatonin. The secretion of melatonin varies according to the level of light received from the environment.', ar: 'خلايا الـ pinealocyte المكونة للغدة الصنوبرية بتنتج وبتفرز هرمون الميلاتونين. إفراز الميلاتونين بيتغير حسب مستوى الضوء من البيئة.' },
  functionLabel: keyPoint, source: pinSrc,
};
const histRules: Array<[RegExp, AnimalNote]> = [
  [/^simple-squamous/, squamous],
  [/^cuboidal-epithelium/, cuboidal],
  [/(loose-areolar|reticular-connective|teased-tendon|reticular-dermis|elastic-tissue|elastic-connective)/, fibres],
  [/(muscle-transverse|cardiac-muscle)/, muscle],
  [/(neuron(?!al)|spinal-cord|nissl|astrocyte|motor-nerve|purkinje|cerebell|rat-brain)/, nerve],
  [/(hair|scalp)/, hair],
  [/(ileum|duodenum)/, gut],
  [/(parathyroid-chief)/, parathyroid],
  [/(thyroid)/, thyroid],
  [/(adenohypophysis|pituitary)/, pituitary],
  [/(pineal)/, pineal],
  [/(seminiferous|testis|epididymis|vas-deferens|seminal-vesicle|prostate)/, testis],
  [/(ovary|ovarian|granulosa)/, ovary],
];
const histologyNotes = new Set<AnimalNote>(histRules.map(([, n]) => n));
const neutSrc = osa('18.4 Leukocytes and Platelets', '18-4-leukocytes-and-platelets');
const rbcSrc = osa('18.3 Erythrocytes', '18-3-erythrocytes');
const neutrophil: AnimalNote = {
  recognize: { en: 'A neutrophil has small granules that stain light lilac and a nucleus with two to five lobes.', ar: 'الـ neutrophil فيه حبيبات صغيرة بتتصبغ بلون ليلكي فاتح ونواة من فصين لخمس فصوص.' },
  function: { en: 'Neutrophils are rapid responders to the site of infection and are efficient phagocytes with a preference for bacteria.', ar: 'الـ neutrophils بتستجاب بسرعة لمكان العدوى وهي بلعمية كفؤة وبتفضل البكتيريا.' },
  functionLabel: keyPoint,
  compare: { en: 'Older neutrophils have increasing numbers of lobes and are often referred to as polymorphonuclear (a nucleus with many forms). Younger and immature neutrophils begin to develop lobes and are known as "bands."', ar: 'الـ neutrophils الأكبر سنا عندها فصوص أكتر وبتتسمى polymorphonuclear (نواة متعددة الأشكال). أما الأصغر والغير ناضجة فبتبدأ تكوّن فصوص وبتتسمى "bands".' },
  source: neutSrc,
};
const nucRbc: AnimalNote = {
  recognize: { en: 'As an erythrocyte matures in the red bone marrow, it extrudes its nucleus and most of its other organelles.', ar: 'لما كرية الدم الحمرا بتنضج في نخاع العظم الأحمر، بتطرد نواتها ومعظم عضياتها التانية.' },
  function: { en: 'Erythrocytes are biconcave disks; that is, they are plump at their periphery and very thin in the center.', ar: 'كريات الدم الحمرا أقراص مقعرة الوجهين، يعني منتفخة عند الحافة ورفيعة جدا في النص.' },
  functionLabel: keyPoint,
  source: rbcSrc,
};
const hemRules: Array<[RegExp, AnimalNote]> = [
  [/(neutrophil)/, neutrophil],
  [/(rubricyte|normoblasts-nucleated|^nucleated-red-cells-smear)/, nucRbc],
];
const hemNotes = new Set<AnimalNote>(hemRules.map(([, n]) => n));

// Slide ids are matched by words in the id; the first rule that matches wins. Only groups the cited page describes are listed.
const rules: Array<[RegExp, AnimalNote | null]> = [
  [/^diatomaceous/, null],
  [/(yeast|saccharomyces|candida|budding)/, yeast],
  [/(fung|mould|hyphae|conidi|spore|alternaria|fusarium|curvularia|penicillium|verticillium|thamnidium|basidio|morel|ustilago|urocystis|hortaea|choanephora|rust-)/, mould],
  [/^(corynebacterium|gram-stain-corynebacterium)/, coryne],
  [/(branching-gram-positive-filaments)/, filaments],
  [/(lactobacillus|lactococcus|ligilactobacillus|yogurt)/, lactic],
  [/(cocci|coccus|streptococc|staphylococc|gemella|aerococcus|^staphylococcus|^streptococcus)/, cocci],
  [/(rods|bacilli|bacillus|streptobacilli|aeromonas|citrobacter|enterobacter|alcaligenes|pseudomonas)/, bacilli],
  [/(gram-stain|gram-variab|gram-positive|gram-negative|sputum-smear|bacteria-morphology|stained-bacteria)/, gramStain],
  [/^(paramecium|ciliates-|euplotes|oxytricha|frontonia|hypotrich)/, ciliate],
  [/(diatom|navicula|pleurosigma|licmophora)/, diatom],
  [/radiolarian/, radiolarian],
  [/foraminifera/, foram],
  [/dinoflagellate/, dino],
  [/^amoeba/, amoeba],
  [/^volvox/, volvox],
  [/(spirogyra|green-alga|filamentous-green)/, greenAlga],
  [/cyanobacteri/, cyano],
  [/(rotifer|philodina|brachionus)/, rotifer],
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
// Never double up on a slide that already has a note, and only use these notes in the departments they were written for.
const parasitologyOk = new Set<AnimalNote>([arthropod, chelicerate, nematode, crustacean, tracheae]);
for (const sp of specimens) {
  if (clinicalNotes[sp.id] || plantNotes[sp.id]) continue;
  if (sp.department === 'histology') {
    for (const [re, note] of histRules) if (re.test(sp.id)) { map[sp.id] = note; break; }
    continue;
  }
  if (sp.department === 'hematology') {
    for (const [re, note] of hemRules) if (re.test(sp.id)) { map[sp.id] = note; break; }
    continue;
  }
  if (!['zoology', 'aquatic-life', 'microbiology', 'parasitology'].includes(sp.department)) continue;
  for (const [re, note] of rules) if (re.test(sp.id)) {
    if (note && (sp.department !== 'parasitology' || parasitologyOk.has(note)) && !histologyNotes.has(note) && !hemNotes.has(note)) map[sp.id] = note;
    break;
  }
}
export const animalNotes: Record<string, AnimalNote> = map;
