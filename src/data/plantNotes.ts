import { specimens, type Bilingual } from './scientificData';

// Plant notes for botany slides: how to recognize the structure, what it does for the plant, and how it differs
// between dicots and monocots. Every sentence comes from the cited open textbook (OpenStax Biology 2e, CC BY 4.0).
// A slide with no entry here shows no note: nothing is guessed. Sources are linked on each note.
export type PlantNote = { recognize?: Bilingual; function?: Bilingual; compare?: Bilingual; source: { title: string; url: string } };

const os = (title: string, page: string) => ({ title: `OpenStax Biology 2e: ${title}`, url: `https://openstax.org/books/biology-2e/pages/${page}` });
const body = os('30.1 The Plant Body', '30-1-the-plant-body');
const stems = os('30.2 Stems', '30-2-stems');
const roots = os('30.3 Roots', '30-3-roots');
const leaves = os('30.4 Leaves', '30-4-leaves');
const repro = os('32.1 Reproductive Development and Structure', '32-1-reproductive-development-and-structure');

const monocotStem: PlantNote = {
  recognize: { en: 'In a cross section of a monocot stem the vascular bundles are scattered through the ground tissue. They are smaller than in a dicot stem, and separate layers of xylem, phloem and sclerenchyma cannot be told apart.', ar: 'في المقطع العرضي لساق أحادية الفلقة تكون الحزم الوعائية مبعثرة داخل النسيج الأساسي. وهي أصغر من حزم الساق ثنائية الفلقة، ولا يمكن تمييز طبقات منفصلة من الخشب واللحاء والإسكلرنشيما.' },
  function: { en: 'Each bundle holds xylem, which carries water and minerals, and phloem, which carries sugars and other organic compounds from where they are made to the rest of the plant.', ar: 'كل حزمة فيها خشب ينقل الماء والمعادن، ولحاء ينقل السكريات والمركبات العضوية من مكان تصنيعها لباقي النبات.' },
  compare: { en: 'Dicot stem: bundles in a ring around the edge of the ground tissue, xylem toward the inside, phloem toward the outside, capped by sclerenchyma fibers. Monocot stem: bundles scattered.', ar: 'ساق ثنائية الفلقة: الحزم في حلقة عند محيط النسيج الأساسي، الخشب ناحية الداخل واللحاء ناحية الخارج، وفوقها ألياف إسكلرنشيمية. ساق أحادية الفلقة: الحزم مبعثرة.' },
  source: stems,
};
const dicotStem: PlantNote = {
  recognize: { en: 'In a cross section of a dicot stem the vascular bundles form a ring around the ground tissue. The xylem is toward the inside of each bundle, the phloem toward the outside, and sclerenchyma fibers cap the bundle.', ar: 'في المقطع العرضي لساق ثنائية الفلقة تكوّن الحزم الوعائية حلقة حول النسيج الأساسي. الخشب ناحية داخل الحزمة واللحاء ناحية الخارج، وتغطي الحزمة ألياف إسكلرنشيمية.' },
  function: { en: 'Xylem carries water and minerals up the plant. Phloem carries sugars and amino acids. The pith in the center and the cortex outside the vascular tissue are ground tissue made mostly of parenchyma cells.', ar: 'الخشب ينقل الماء والمعادن لأعلى النبات، واللحاء ينقل السكريات والأحماض الأمينية. والنخاع في المنتصف والقشرة خارج النسيج الوعائي نسيج أساسي أغلبه خلايا برانشيمية.' },
  compare: { en: 'Monocot stems have scattered bundles instead of a ring.', ar: 'سيقان أحاديات الفلقة فيها حزم مبعثرة بدل الحلقة.' },
  source: stems,
};
const woodyStem: PlantNote = {
  recognize: { en: 'A woody stem thickens each year. The vascular cambium lies just outside the primary xylem and inside the primary phloem. Early wood has wide cells with thin walls, and late wood has thicker walls and is denser, so the alternation shows as annual rings.', ar: 'الساق الخشبية تزيد في السمك كل سنة. الكامبيوم الوعائي يقع خارج الخشب الابتدائي مباشرة وداخل اللحاء الابتدائي. الخشب الربيعي خلاياه واسعة وجدرانها رقيقة، والخشب الخريفي جدرانه أسمك وأكثر كثافة، فيظهر التبادل بينهما كحلقات سنوية.' },
  function: { en: 'The vascular cambium divides to form secondary xylem to the inside and secondary phloem to the outside, which thickens the stem. In woody plants the cork cambium makes cork cells (bark) that repel water and protect against damage and water loss.', ar: 'ينقسم الكامبيوم الوعائي فيكوّن خشبًا ثانويًا للداخل ولحاءً ثانويًا للخارج، وده اللي بيخلي الساق تتخن. وفي النباتات الخشبية يكوّن كامبيوم الفلين خلايا فلين (اللحاء الخارجي) تصد الماء وتحمي النبات من التلف وفقد الماء.' },
  source: stems,
};
const root: PlantNote = {
  recognize: { en: 'A root has a large cortex and little pith. The vascular tissue is in the central stele, separated from the cortex by the endodermis. In dicot roots the xylem and phloem of the stele alternate in an X shape.', ar: 'الجذر فيه قشرة كبيرة ونخاع قليل. النسيج الوعائي في الأسطوانة الوعائية المركزية، وتفصلها عن القشرة طبقة الإندوديرمس. في جذور ثنائيات الفلقة يتبادل الخشب واللحاء في الأسطوانة على شكل حرف X.' },
  function: { en: 'The endodermis, with the waxy Casparian strip, makes water and solutes cross cell membranes, so only materials the root needs reach the vascular tissue and toxic substances and pathogens are generally kept out. The pericycle can give rise to lateral roots.', ar: 'الإندوديرمس وفيه شريط كاسبار الشمعي يجبر الماء والأملاح المذابة على العبور من خلال أغشية الخلايا، فلا يصل للنسيج الوعائي غير اللي يحتاجه الجذر، وغالبًا تُمنع المواد السامة والمسببات المرضية. والدائرة المحيطية (البريسيكل) ممكن تنتج جذورًا جانبية.' },
  compare: { en: 'In monocot roots the vascular tissue forms a ring around the pith. Dicots usually have a tap root system, monocots a fibrous one.', ar: 'في جذور أحاديات الفلقة يكوّن النسيج الوعائي حلقة حول النخاع. ثنائيات الفلقة عادةً لها جهاز جذر وتدي، وأحاديات الفلقة لها جهاز جذر ليفي.' },
  source: roots,
};
const rootTip: PlantNote = {
  recognize: { en: 'The root tip is protected by the root cap. Behind it are three zones: cell division (the root meristem, closest to the tip), elongation, and maturation and differentiation, which starts at the first root hair.', ar: 'قمة الجذر محمية بالقلنسوة. وخلفها ثلاث مناطق: منطقة الانقسام (المرستيم، الأقرب للقمة)، ومنطقة الاستطالة، ومنطقة النضج والتمايز اللي تبدأ من أول شعيرة جذرية.' },
  function: { en: 'Cell division in the apical meristem at the root tip, followed by cell elongation, lengthens the root (primary growth). The root cap is exclusive to roots and is replaced continuously because it is damaged as the root pushes through soil.', ar: 'انقسام الخلايا في المرستيم القمي عند قمة الجذر، ثم استطالة الخلايا، يطوّل الجذر (النمو الابتدائي). والقلنسوة خاصة بالجذور وتتجدد باستمرار لأنها تتلف وهي بتدفع الجذر في التربة.' },
  source: roots,
};
const rootHairs: PlantNote = {
  recognize: { en: 'Root hairs are extensions of root epidermal cells.', ar: 'الشعيرات الجذرية امتدادات لخلايا بشرة الجذر.' },
  function: { en: 'They increase the surface area of the root and so greatly help the absorption of water and minerals.', ar: 'بتزود مساحة سطح الجذر، فتساعد كتير في امتصاص الماء والمعادن.' },
  compare: { en: 'Monocots have a fibrous root system: a dense network near the soil surface that also helps prevent erosion.', ar: 'أحاديات الفلقة لها جهاز جذر ليفي: شبكة كثيفة قريبة من سطح التربة وتساعد كمان في منع التعرية.' },
  source: roots,
};
const aerialRoot: PlantNote = {
  function: { en: 'Aerial roots and prop roots are aboveground roots that give extra support to anchor the plant. The epiphytic roots of orchids develop a spongy tissue that absorbs moisture.', ar: 'الجذور الهوائية والجذور الدعامية جذور فوق الأرض بتدي دعم إضافي لتثبيت النبات. وجذور الأوركيد الهوائية فيها نسيج إسفنجي يمتص الرطوبة.' },
  source: roots,
};
const dicotLeaf: PlantNote = {
  recognize: { en: 'A waxy cuticle covers the epidermis on both sides. Below the upper epidermis the palisade mesophyll has tightly packed, column-shaped cells in one to three layers. Below it the spongy mesophyll has loosely arranged, irregular cells with air spaces. Dicot leaves have net-like (reticulate) veins.', ar: 'تغطي الكيوتكل الشمعية البشرة من الجانبين. تحت البشرة العليا يوجد النسيج العمادي: خلايا عمودية متراصة في طبقة إلى ثلاث طبقات. وتحته النسيج الإسفنجي: خلايا غير منتظمة متباعدة بينها فراغات هوائية. وعروق أوراق ثنائيات الفلقة شبكية.' },
  function: { en: 'Both mesophyll layers have many chloroplasts. The air spaces in the spongy mesophyll let gases exchange with the outside air through the stomata. The cuticle reduces water loss from the leaf surface.', ar: 'طبقتا الميزوفيل فيهما بلاستيدات خضراء كتير. والفراغات الهوائية في النسيج الإسفنجي تسمح بتبادل الغازات مع الهواء الخارجي من خلال الثغور. والكيوتكل تقلل فقد الماء من سطح الورقة.' },
  compare: { en: 'Monocot leaves have parallel veins that run along the length of the leaf.', ar: 'أوراق أحاديات الفلقة عروقها متوازية وتمتد بطول الورقة.' },
  source: leaves,
};
const stomata: PlantNote = {
  recognize: { en: 'A stoma is an opening in the epidermis surrounded by two guard cells, which sit among the other epidermal cells. Guard cells are the only epidermal cells that contain chloroplasts.', ar: 'الثغر فتحة في البشرة يحيط بها خليتان حارستان، وهما بين باقي خلايا البشرة. والخلايا الحارسة هي الوحيدة في البشرة اللي فيها بلاستيدات خضراء.' },
  function: { en: 'Stomata let the plant take up carbon dioxide and release oxygen and water vapor. The guard cells control the opening and closing.', ar: 'الثغور تسمح للنبات بأخذ ثاني أكسيد الكربون وإطلاق الأكسجين وبخار الماء، والخلايا الحارسة تتحكم في فتحها وقفلها.' },
  source: leaves,
};
const needle: PlantNote = {
  function: { en: 'Conifers that live in cold environments, such as spruce, fir and pine, have small needle-like leaves with sunken stomata and a small surface area. Both features help reduce water loss.', ar: 'الصنوبريات اللي بتعيش في البيئات الباردة، زي التنوب والشوح والصنوبر، أوراقها صغيرة إبرية وثغورها غائرة ومساحة سطحها صغيرة. والصفتان تقللان فقد الماء.' },
  source: leaves,
};
const cuticle: PlantNote = {
  recognize: { en: 'The epidermis is usually one cell layer thick and is covered by a waxy layer called the cuticle.', ar: 'البشرة عادةً طبقة خلايا واحدة وتغطيها طبقة شمعية اسمها الكيوتكل.' },
  function: { en: 'The cuticle covers the leaves of all plant species and reduces the rate of water loss from the leaf surface.', ar: 'الكيوتكل تغطي أوراق كل أنواع النباتات وتقلل معدل فقد الماء من سطح الورقة.' },
  source: leaves,
};
const trichome: PlantNote = {
  recognize: { en: 'Trichomes are hair-like structures on the epidermal surface.', ar: 'الشعيرات (التريكومات) تراكيب شبيهة بالشعر على سطح البشرة.' },
  function: { en: 'They help reduce water loss (transpiration), increase solar reflectance, and store compounds that defend the plant against herbivores and pathogens. They can also deter herbivory by restricting insect movement.', ar: 'بتساعد في تقليل فقد الماء (النتح) وتزيد انعكاس الضوء، وتخزن مركبات تدافع عن النبات ضد آكلات الأعشاب ومسببات الأمراض. وممكن كمان تردع التغذية عليها بتقييد حركة الحشرات.' },
  source: stems,
};
const collenchyma: PlantNote = {
  recognize: { en: 'Collenchyma cells are elongated, with unevenly thickened walls. They are alive at maturity and usually lie just below the epidermis.', ar: 'خلايا الكولنشيما مستطيلة وجدرانها غير منتظمة السُمك، وهي حية عند النضج وغالبًا تقع تحت البشرة مباشرة.' },
  function: { en: 'They give structural support, mainly to stems and leaves. The strings of a celery stalk are an example.', ar: 'بتدي دعمًا للتركيب، خصوصًا في السيقان والأوراق. وخيوط عود الكرفس مثال عليها.' },
  source: stems,
};
const xylem: PlantNote = {
  recognize: { en: 'Xylem has tracheids and vessel elements, which conduct water and are dead at maturity, plus xylem parenchyma. Tracheids have thick lignified secondary walls and pass water through pits. Vessel elements have thinner walls, are shorter, and join end to end through perforation plates.', ar: 'الخشب فيه القصيبات والأوعية الخشبية، وهما ينقلان الماء ويكونان ميتين عند النضج، إضافة إلى برانشيما الخشب. القصيبات جدرانها الثانوية سميكة ومتخشبة وينتقل الماء بينها عبر نُقر. والأوعية جدرانها أرق وأقصر، وتتصل ببعضها من الأطراف عبر صفائح ثقبية.' },
  function: { en: 'Xylem transports water and minerals from the roots to the other parts of the plant.', ar: 'الخشب ينقل الماء والمعادن من الجذور لباقي أجزاء النبات.' },
  source: stems,
};
const phloem: PlantNote = {
  recognize: { en: 'Phloem has sieve-tube cells joined end to end through perforated sieve plates, with companion cells beside them, phloem parenchyma and phloem fibers. Sieve-tube cells are alive at maturity but their nucleus and other contents have disintegrated.', ar: 'اللحاء فيه خلايا أنابيب غربالية متصلة طرفًا بطرف عبر صفائح غربالية مثقبة، وبجانبها الخلايا المرافقة، وبرانشيما اللحاء وألياف اللحاء. والخلايا الغربالية حية عند النضج لكن نواتها ومحتوياتها الأخرى تفككت.' },
  function: { en: 'Phloem carries sugars and amino acids from the site of photosynthesis to other parts of the plant. Companion cells give the sieve-tube cells metabolic support.', ar: 'اللحاء ينقل السكريات والأحماض الأمينية من مكان البناء الضوئي لباقي أجزاء النبات. والخلايا المرافقة تدعم الخلايا الغربالية أيضيًا.' },
  source: stems,
};
const cambium: PlantNote = {
  recognize: { en: 'The vascular cambium lies just outside the primary xylem and inside the primary phloem.', ar: 'الكامبيوم الوعائي يقع خارج الخشب الابتدائي مباشرة وداخل اللحاء الابتدائي.' },
  function: { en: 'Its cells divide to form secondary xylem (tracheids and vessel elements) to the inside and secondary phloem (sieve elements and companion cells) to the outside. This is secondary growth, the increase in thickness.', ar: 'تنقسم خلاياه فتكوّن خشبًا ثانويًا (قصيبات وأوعية) للداخل ولحاءً ثانويًا (عناصر غربالية وخلايا مرافقة) للخارج. وده النمو الثانوي، أي الزيادة في السمك.' },
  source: stems,
};
const apicalMeristem: PlantNote = {
  recognize: { en: 'Apical meristems are regions of continuous cell division at the tips of stems and roots. Meristem cells are undifferentiated or incompletely differentiated.', ar: 'المرستيمات القمية مناطق انقسام مستمر عند قمم السيقان والجذور، وخلايا المرستيم غير متمايزة أو غير تامة التمايز.' },
  function: { en: 'Their cell division produces cells that quickly differentiate into dermal, vascular and ground tissue. This lengthens shoots and roots (primary growth), so the plant keeps reaching for sunlight (shoots) and water (roots).', ar: 'انقسام خلاياها ينتج خلايا تتمايز بسرعة إلى نسيج بشري ووعائي وأساسي. وده يطوّل السيقان والجذور (النمو الابتدائي) فيفضل النبات يمتد ناحية الضوء (السيقان) والماء (الجذور).' },
  source: body,
};
const rhizome: PlantNote = {
  recognize: { en: 'A rhizome is a modified stem that grows horizontally underground and has nodes and internodes.', ar: 'الريزوم ساق معدلة تنمو أفقيًا تحت الأرض وفيها عقد وسلاميات.' },
  function: { en: 'Vertical shoots can arise from buds on the rhizome, as in ginger and ferns.', ar: 'ممكن تنشأ سيقان رأسية من البراعم اللي على الريزوم، زي الزنجبيل والسراخس.' },
  source: stems,
};
const anther: PlantNote = {
  recognize: { en: 'Pollen develops in the microsporangia (pollen sacs), usually two lobes, inside the anther at the end of the stamen. An inner layer called the tapetum feeds the developing microspores.', ar: 'ينمو حبوب اللقاح في الأكياس البوغية الدقيقة (أكياس اللقاح) وهي عادةً فصان داخل المتك في نهاية السداة. وطبقة داخلية اسمها التبتم تغذي الأبواغ الدقيقة النامية.' },
  function: { en: 'Each microspore mother cell divides by meiosis into four microspores, and each microspore becomes a pollen grain. When mature, the microsporangia burst and release the pollen grains.', ar: 'كل خلية أم للأبواغ الدقيقة تنقسم انقسامًا اختزاليًا إلى أربعة أبواغ دقيقة، وكل بوغ يصير حبة لقاح. وعند النضج تنفجر الأكياس وتطلق حبوب اللقاح.' },
  source: repro,
};
const pollen: PlantNote = {
  recognize: { en: 'A mature pollen grain has two cells, a generative cell inside a larger pollen tube cell, and two coverings: a thicker outer exine and an inner intine.', ar: 'حبة اللقاح الناضجة فيها خليتان: خلية مولدة داخل خلية الأنبوب الأكبر، وغلافان: الإكسين الخارجي الأسمك والإنتين الداخلي.' },
  function: { en: 'The exine contains sporopollenin, a waterproofing substance that lets pollen survive unfavorable conditions and be carried by wind, water or animals without damage.', ar: 'الإكسين فيه السبوروبولينين، مادة عازلة للماء تخلي حبة اللقاح تتحمل الظروف الصعبة وتنتقل بالرياح أو الماء أو الكائنات الحية بدون تلف.' },
  source: repro,
};
const pollenTube: PlantNote = {
  function: { en: 'When pollen germinates, the tube cell forms the pollen tube. The generative cell migrates through it and divides to form two male gametes (sperm cells).', ar: 'عند إنبات حبة اللقاح تكوّن خلية الأنبوب أنبوب اللقاح. وتهاجر الخلية المولدة خلاله وتنقسم لتكوّن مشيجين ذكريين (خليتين منويتين).' },
  source: repro,
};

const map: Record<string, PlantNote> = {
  'maize-stem': monocotStem, 'monocot-stem': monocotStem, 'barnyard-grass-echinochloa-crus-galli-stem': monocotStem,
  'medicago-stem': dicotStem, 'plant-stem-section-248-01': dicotStem, 'plant-stem-section-248-02': dicotStem,
  'tilia-woody-stem': woodyStem, 'plant-stem-section-248-19': woodyStem,
  'broad-bean-root': root,
  'onion-root-tip': rootTip, 'onion-allium-cepa-root-tip-longitudinal-section-differentiation-zone': rootTip,
  'root-hairs-of-a-monocot-root': rootHairs,
  'aerial-root-255-01': aerialRoot,
  'dicot-leaf': dicotLeaf, 'leaf-section-255-14': dicotLeaf,
  'leaf-stomata': stomata, 'leaf-epidermis-248-34': stomata, 'leaf-epidermis-251-15': stomata, 'leaf-epidermis-251-16': stomata,
  'yew-leaf-epidermis-and-stomata-10x': stomata, 'yew-leaf-epidermis-and-stomata-40x': stomata,
  'ivy-hedera-helix-leaf-epidermis-and-stomata-print': stomata, 'hyacinth-leaf-epidermis-print-with-stomata': stomata,
  'ragwort-jacobaea-vulgaris-leaf-epidermis-and-stomata-400x': stomata,
  'pine-needle': needle, 'pine-needle-brightfield': needle, 'pine-needle-248-31': needle, 'pine-needle-251-14': needle, 'pine-needle-255-23': needle,
  'leaf-cuticle-and-upper-epidermis': cuticle, 'leaf-cuticle-and-upper-epidermis-second-field': cuticle,
  'glandular-hairs-on-a-geranium-pedicel-geranium-dissectum': trichome,
  'stem-collenchyma-100x': collenchyma, 'stem-collenchyma-400x': collenchyma,
  'castor-ricinus-stem-xylem-vessels': xylem, 'xylem-vessels-of-fig-ficus-sp': xylem, 'water-lily-nymphaea-stem-xylem-elements': xylem,
  'pine-xylem-ducts': xylem, 'stained-plant-section-xylem-with-secondary-thickening': xylem, 'pine-two-needle-leaf-xylem': xylem,
  'pine-two-needle-leaf-phloem': phloem,
  'pumpkin-cucurbita-stem-cambium-and-phloem': cambium,
  'coleus-stem-tip-longitudinal-section': apicalMeristem, 'bud-stem-tip-longitudinal-section': apicalMeristem,
  'arabidopsis-shoot-apical-meristem-flat': apicalMeristem, 'arabidopsis-shoot-apical-meristem-rounded': apicalMeristem,
  'rhizome-251-17': rhizome, 'rhizome-254-27': rhizome, 'rhizome-254-28': rhizome,
  'lily-anther': anther, 'amaryllis-hippeastrum-pollen-on-a-stamen': anther,
  'pollen-grains': pollen, 'pollen-grains-251-20': pollen,
  'germinating-pollen-255-27': pollenTube,
};
// Epidermis prints whose id names stomata share the stomata note.
for (const sp of specimens) if (sp.department === 'botany' && /stomata/.test(sp.id) && !map[sp.id]) map[sp.id] = stomata;
export const plantNotes: Record<string, PlantNote> = map;
