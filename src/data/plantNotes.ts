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
// ---- Batch 2: mosses, liverworts, ferns, club mosses, algae, gymnosperms, plant cells, roots, pollination and more.
// Same rule as batch 1: every sentence is taken from the cited OpenStax Biology 2e page (CC BY 4.0). Notes describe the group
// or structure the source describes, not the exact species on the slide. A slide with no entry shows no note.
const alg = os('25.2 Green Algae: Precursors of Land Plants', '25-2-green-algae-precursors-of-land-plants');
const bryo = os('25.3 Bryophytes', '25-3-bryophytes');
const svp = os('25.4 Seedless Vascular Plants', '25-4-seedless-vascular-plants');
const gym = os('26.2 Gymnosperms', '26-2-gymnosperms');
const cellS = os('4.3 Eukaryotic Cells', '4-3-eukaryotic-cells');
const passive = os('5.2 Passive Transport', '5-2-passive-transport');
const cycle = os('10.2 The Cell Cycle', '10-2-the-cell-cycle');
const nutr = os('31.3 Nutritional Adaptations of Plants', '31-3-nutritional-adaptations-of-plants');
const pollin = os('32.2 Pollination and Fertilization', '32-2-pollination-and-fertilization');
const fungi = os('24.3 Ecology of Fungi', '24-3-ecology-of-fungi');

const plantCell: PlantNote = {
  recognize: { en: `Plant cells have a cell wall outside the plasma membrane, chloroplasts and other plastids, and a large central vacuole that occupies most of the cell's volume.`, ar: 'خلايا النبات ليها جدار خلوي برا الغشاء البلازمي، وبلاستيدات خضراء وبلاستيدات تانية، وفجوة مركزية كبيرة بتاخد معظم حجم الخلية.' },
  function: { en: `The cell wall is a rigid covering that protects the cell, provides structural support and gives shape to the cell. The central vacuole plays a key role in regulating the cell's concentration of water in changing environmental conditions.`, ar: 'الجدار الخلوي غطاء صلب بيحمي الخلية وبيدعمها وبيدّيها شكلها. والفجوة المركزية ليها دور أساسي في تنظيم تركيز الماء في الخلية لما الظروف بتتغير.' },
  compare: { en: 'Animal cells do not have a cell wall, chloroplasts or a large central vacuole.', ar: 'خلايا الحيوان ملهاش جدار خلوي ولا بلاستيدات خضراء ولا فجوة مركزية كبيرة.' },
  source: cellS,
};
const plasmolysis: PlantNote = {
  recognize: { en: 'In plasmolysis the cell membrane detaches from the cell wall and constricts the cytoplasm. The cell itself does not shrink, because the cell wall is not flexible.', ar: 'في البلزمة (plasmolysis) الغشاء الخلوي بينفصل عن الجدار ويضغط السيتوبلازم. والخلية نفسها مبتصغرش لأن الجدار الخلوي مش مرن.' },
  function: { en: 'It happens when the extracellular fluid becomes hypertonic, so water leaves the cell. The plant loses turgor pressure and wilts.', ar: 'بتحصل لما السائل برا الخلية يبقى مفرط التوتر، فالماء يخرج من الخلية. والنبات بيفقد ضغط الامتلاء (turgor) وبيدبل.' },
  compare: { en: `In a hypotonic environment water enters a plant cell and the inflow produces turgor pressure, which stiffens the cell wall. The wall keeps the plasma membrane from expanding past its limit, so the cell does not lyse.`, ar: 'في وسط ناقص التوتر الماء بيدخل خلية النبات وده بيعمل ضغط امتلاء بيشد الجدار الخلوي. والجدار بيمنع الغشاء من التمدد أكتر من حده، فالخلية متنفجرش.' },
  source: passive,
};
const chloroplast: PlantNote = {
  recognize: { en: 'Chloroplasts are plant cell organelles that carry out photosynthesis. They contain a green pigment, chlorophyll, which captures the light energy that drives the reactions of photosynthesis.', ar: 'البلاستيدات الخضراء عُضيّات في خلية النبات بتعمل البناء الضوئي. وفيها الصبغة الخضراء الكلوروفيل اللي بتمسك طاقة الضوء اللي بتشغّل تفاعلات البناء الضوئي.' },
  function: { en: 'Photosynthesis uses carbon dioxide, water and light energy to make glucose and oxygen. This lets plants make their own food.', ar: 'البناء الضوئي بيستخدم ثاني أكسيد الكربون والماء وطاقة الضوء علشان يعمل جلوكوز وأكسجين. وده بيخلي النبات يعمل أكله بنفسه.' },
  compare: { en: 'Animals (heterotrophs) must ingest their food. Plants (autotrophs) make their own.', ar: 'الحيوانات (غيرية التغذية) لازم تاكل أكلها. النباتات (ذاتية التغذية) بتعمل أكلها بنفسها.' },
  source: cellS,
};
const mossLeaf: PlantNote = {
  recognize: { en: 'The leaflike structures of a moss are green and flat, with a simple midrib. They resemble true leaves but lack stomata and vascular tissue, and they attach in a spiral to a central stalk.', ar: 'التراكيب الشبيهة بالأوراق في الطحلب (moss) خضراء ومسطحة وفيها عرق وسطي بسيط. بتشبه الأوراق الحقيقية بس من غير ثغور ولا نسيج وعائي، وبتتصل بشكل حلزوني بالساق المركزية.' },
  function: { en: 'Water and nutrients are absorbed directly through the leaflike structures of the gametophyte.', ar: 'الماء والعناصر الغذائية بتتمتص مباشرة من خلال التراكيب الشبيهة بالأوراق في الطور المشيجي.' },
  compare: { en: 'Mosses have stomata only on the sporophyte, not on the leaflike structures.', ar: 'الطحالب (mosses) ليها ثغور على الطور البوغي بس، مش على التراكيب الشبيهة بالأوراق.' },
  source: bryo,
};
const protonema: PlantNote = {
  recognize: { en: 'A moss gametophyte germinates from a haploid spore and first forms a protonema, usually a tangle of single-celled filaments that hug the ground.', ar: 'الطور المشيجي للطحلب بينبت من بوغ أحادي المجموعة الكروموسومية وبيكوّن أول حاجة الخيط الأولي (protonema)، وهو غالبًا خيوط متشابكة من خلايا مفردة ملزوقة بالأرض.' },
  function: { en: 'Cells akin to an apical meristem then divide actively and give rise to a gametophore, which consists of a photosynthetic stem and foliage-like structures.', ar: 'بعدها خلايا شبيهة بالمرستيم القمي بتنقسم بنشاط وتطلّع حامل المشيج (gametophore) المكوّن من ساق بتعمل بناء ضوئي وتراكيب شبيهة بالأوراق.' },
  source: bryo,
};
const liverLeafy: PlantNote = {
  recognize: { en: 'Leafy liverworts have tiny leaflike structures attached to a stalk. Lobate liverworts, by contrast, form a flat thallus.', ar: 'الحزازيات الكبدية الورقية ليها تراكيب صغيرة شبيهة بالأوراق متصلة بساق. أما الحزازيات الكبدية الفصية فبتكوّن ثالوس مسطح.' },
  function: { en: 'Liverworts have no cuticle to prevent desiccation, and the thallus takes up water over its entire surface. This explains their preferred wet habitats.', ar: 'الحزازيات الكبدية ملهاش كيوتكل تمنع الجفاف، والثالوس بيمتص الماء من سطحه كله. وده بيفسر ليه بتفضل الأماكن الرطبة.' },
  source: bryo,
};
const liverThallus: PlantNote = {
  recognize: { en: 'Liverworts have openings in the thallus that let gases move. These are not stomata, because guard cells do not open and close them.', ar: 'في الحزازيات الكبدية فتحات في الثالوس بتسمح بحركة الغازات. دي مش ثغور لأن مفيش خلايا حارسة بتفتحها وتقفلها.' },
  function: { en: 'Liverworts have no cuticle to prevent desiccation, and the thallus takes up water over its entire surface. This explains their preferred wet habitats.', ar: 'الحزازيات الكبدية ملهاش كيوتكل تمنع الجفاف، والثالوس بيمتص الماء من سطحه كله. وده بيفسر ليه بتفضل الأماكن الرطبة.' },
  compare: { en: 'Stomata (air pores that can be opened and closed) appear in the hornworts and are abundant on the sporophyte.', ar: 'الثغور (مسام هوائية بتتفتح وتتقفل) موجودة في الحزازيات القرنية (hornworts) وكتيرة على الطور البوغي.' },
  source: bryo,
};
const fernSori: PlantNote = {
  recognize: { en: 'On the underside of each mature fern frond are groups of sporangia called sori.', ar: 'على الوش التحتاني لكل ورقة سرخس ناضجة (frond) في مجموعات من الأكياس البوغية اسمها السُّرّات (sori).' },
  function: { en: 'Spores are produced by meiosis and released into the air from the sporangium. Spores that land on a suitable substrate germinate and form a heart-shaped gametophyte, the prothallus.', ar: 'الأبواغ بتتكوّن بالانقسام الاختزالي وبتتطلق في الهوا من الكيس البوغي. والأبواغ اللي بتقع على سطح مناسب بتنبت وبتكوّن طور مشيجي على شكل قلب اسمه البروثالس (prothallus).' },
  compare: { en: 'In seedless vascular plants such as ferns the diploid sporophyte is the dominant phase of the life cycle. The gametophyte is less conspicuous but still independent of the sporophyte.', ar: 'في النباتات الوعائية اللابذرية زي السراخس الطور البوغي ثنائي المجموعة هو الطور السائد. والطور المشيجي أقل ظهورًا بس لسه مستقل عن الطور البوغي.' },
  source: svp,
};
const fernGameto: PlantNote = {
  recognize: { en: 'Fern spores that land on a suitable substrate germinate and form a heart-shaped gametophyte, or prothallus, attached to the ground by thin filamentous rhizoids.', ar: 'أبواغ السرخس اللي بتقع على سطح مناسب بتنبت وبتكوّن طور مشيجي على شكل قلب (prothallus) متثبت في الأرض بجذيرات خيطية رفيعة.' },
  function: { en: 'Gametophytes produce both antheridia and archegonia. Fern sperm have multiple flagella and must swim to the archegonium, which releases a chemoattractant to guide them.', ar: 'الأطوار المشيجية بتنتج الأنثريديا والأرجونيا. وحيوانات السرخس المنوية ليها أسواط كتير ولازم تسبح للأرجونيوم اللي بيطلق مادة جاذبة بتوجهها.' },
  compare: fernSori.compare,
  source: svp,
};
const fernRoot: PlantNote = {
  recognize: { en: 'Adventitious organs are those that grow in unusual places, such as roots growing from the side of a stem.', ar: 'الأعضاء العرضية (adventitious) هي اللي بتنمو في أماكن غير معتادة، زي جذور بتطلع من جنب ساق.' },
  function: { en: 'In a fern the stem may be buried underground as a rhizome, from which adventitious roots grow to absorb water and nutrients from the soil.', ar: 'في السرخس ممكن تكون الساق مدفونة تحت الأرض كريزوم، وتطلع منها جذور عرضية بتمتص الماء والعناصر الغذائية من التربة.' },
  source: svp,
};
const horsetailSpores: PlantNote = {
  recognize: { en: 'Horsetail spores are attached to elaters, coiled threads that spring open in dry weather.', ar: 'أبواغ ذيل الحصان متعلقة بالمرونات (elaters)، وهي خيوط ملفوفة بتنفتح فجأة في الجو الجاف.' },
  function: { en: 'The elaters cast the spores to a location distant from the parent plant. The spores then germinate to produce small bisexual gametophytes.', ar: 'المرونات بترمي الأبواغ لمكان بعيد عن النبات الأم. وبعدين الأبواغ بتنبت وبتطلّع أطوار مشيجية صغيرة ثنائية الجنس.' },
  source: svp,
};
const lycophyte: PlantNote = {
  recognize: { en: 'Today\'s club mosses are small evergreen plants made of a stem, which may be branched, and microphylls. In many club mosses the sporophyte bears sporophylls arranged in strobili, cone-like structures.', ar: 'الليكوفيتات (club mosses) النهارده نباتات صغيرة دايمة الخضرة مكوّنة من ساق (ممكن تتفرع) وأوراق صغيرة (microphylls). وفي كتير منها الطور البوغي بيحمل أوراقًا بوغية مرتبة في مخاريط (strobili).' },
  function: { en: 'Sporangia develop within the chamber formed by each sporophyll.', ar: 'الأكياس البوغية بتتكوّن جوه الحجرة اللي بتتكوّن من كل ورقة بوغية.' },
  compare: { en: 'Microphylls are small and have a simple vascular system: a single unbranched vein runs through the center. Megaphylls, seen in ferns, are larger and have multiple veins. Club mosses are not true mosses or bryophytes.', ar: 'الأوراق الصغيرة (microphylls) صغيرة وفيها نظام وعائي بسيط: عرق واحد غير متفرع في النص. الأوراق الكبيرة (megaphylls) الموجودة في السراخس أكبر وفيها عروق متعددة. والليكوفيتات مش طحالب حقيقية ولا حزازيات.' },
  source: svp,
};
const spirogyra: PlantNote = {
  recognize: { en: 'Spirogyra is a long filament of colonial cells. Green algae cells contain chloroplasts that display a dizzying variety of shapes, and their cell walls contain cellulose.', ar: 'السبيروجيرا خيط طويل من خلايا مستعمرية. وخلايا الطحالب الخضراء فيها بلاستيدات خضراء بأشكال متنوعة جدًا، وجدرانها فيها سليلوز.' },
  function: { en: 'Most members of the genus live in fresh water, brackish water, seawater or even snow patches. Like land plants, green algae store carbohydrates as starch.', ar: 'معظم أنواع الجنس بتعيش في المياه العذبة أو المالحة قليلًا أو البحر أو حتى بقع التلج. وزي النباتات الأرضية، الطحالب الخضراء بتخزن الكربوهيدرات على شكل نشا.' },
  compare: { en: 'Spirogyra is a charophyte. Charophytes and land plants both divide along cell plates called phragmoplasts, have plasmodesmata and show apical growth. Chlorophytes do not.', ar: 'السبيروجيرا من الشاروفيتات (charophytes). الشاروفيتات والنباتات الأرضية الاتنين بينقسموا بصفائح خلوية اسمها phragmoplasts وليهم بلازموديزماتا وفيهم نمو قمي. الكلوروفيتات ملهاش كده.' },
  source: alg,
};
const maleCone: PlantNote = {
  recognize: { en: 'In the male (staminate) cones of a pine, microsporocytes undergo meiosis and the haploid microspores give rise to male gametophytes, the pollen grains, by mitosis.', ar: 'في المخاريط المذكرة للصنوبر، الخلايا الأم للأبواغ الدقيقة بتنقسم اختزاليًا والأبواغ الدقيقة أحادية المجموعة بتكوّن الأطوار المشيجية المذكرة، أي حبوب اللقاح، بالانقسام الفتيلي.' },
  function: { en: 'In spring, large amounts of yellow pollen are released and carried by the wind.', ar: 'في الربيع بتتطلق كميات كبيرة من حبوب اللقاح الصفراء وتتحمل بالهوا.' },
  compare: { en: 'Pines carry both male and female cones on the same tree. The male cones are small and the female cones are larger.', ar: 'الصنوبر بيحمل المخاريط المذكرة والمؤنثة على نفس الشجرة. المخاريط المذكرة صغيرة والمؤنثة أكبر.' },
  source: gym,
};
const pinePollen: PlantNote = {
  recognize: { en: 'Each pine pollen grain consists of just a few haploid cells enclosed in a tough wall reinforced with sporopollenin.', ar: 'كل حبة لقاح صنوبر مكوّنة من كام خلية أحادية المجموعة بس، محاطة بجدار قوي مقوّى بالسبوروبولينين.' },
  function: { en: 'Large amounts of yellow pollen are released in spring and carried by the wind. Some land on a female cone.', ar: 'كميات كبيرة من حبوب اللقاح الصفراء بتتطلق في الربيع وتتحمل بالهوا، وبعضها بيقع على مخروط مؤنث.' },
  compare: { en: 'Gymnosperms have separate pollen cones and ovulate cones, and are pollinated by wind and insects.', ar: 'معراة البذور ليها مخاريط لقاح ومخاريط بويضية منفصلة، وبتتلقح بالهوا والحشرات.' },
  source: gym,
};
const gymStem: PlantNote = {
  function: { en: 'Conifers, cycads and ginkgophytes produce secondary cambium, cells that generate the vascular system of the trunk or stem and are partially specialized for water transportation.', ar: 'الصنوبريات والسيكاسات والجنكو بتنتج كامبيوم ثانوي، وهي خلايا بتكوّن النظام الوعائي للجذع أو الساق ومتخصصة جزئيًا في نقل الماء.' },
  compare: { en: 'The rest of the gymnosperms have tracheids. Gnetophyta are considered the closest group to angiosperms because they also produce true xylem tissue with vessels.', ar: 'باقي معراة البذور فيها قصيبات (tracheids). والنيتوفيتا تعتبر أقرب مجموعة لمغطاة البذور لأنها بتنتج كمان نسيج خشب حقيقي فيه أوعية.' },
  source: gym,
};
const mesophyll: PlantNote = {
  recognize: { en: 'Below the epidermis of dicot leaves are layers of cells called the mesophyll. The palisade parenchyma has column-shaped, tightly packed cells in one, two or three layers. Below it are the loosely arranged, irregularly shaped cells of the spongy parenchyma.', ar: 'تحت بشرة أوراق ذوات الفلقتين في طبقات خلايا اسمها الميزوفيل (mesophyll). النسيج العمادي (palisade) خلاياه عمودية الشكل ومتراصة في طبقة أو اتنين أو تلاتة. وتحته خلايا النسيج الإسفنجي المتناثرة وغير منتظمة الشكل.' },
  function: { en: 'The air space between the spongy parenchyma cells allows gas exchange between the leaf and the outside atmosphere through the stomata.', ar: 'الفراغ الهوائي بين خلايا النسيج الإسفنجي بيسمح بتبادل الغازات بين الورقة والجو الخارجي من خلال الثغور.' },
  compare: { en: 'In aquatic plants, the intercellular spaces in the spongy parenchyma help the leaf float.', ar: 'في النباتات المائية الفراغات بين الخلايا في النسيج الإسفنجي بتساعد الورقة تطفو.' },
  source: leaves,
};
const hydro: PlantNote = {
  recognize: { en: 'Many aquatic plants have leaves with a wide lamina that can float on the surface of the water, and a thick waxy cuticle that repels water.', ar: 'كتير من النباتات المائية أوراقها ليها نصل عريض بيطفو على سطح الماء وكيوتكل شمعية سميكة بتطرد الماء.' },
  function: { en: 'In aquatic plants, the intercellular spaces in the spongy parenchyma help the leaf float.', ar: 'في النباتات المائية الفراغات بين الخلايا في النسيج الإسفنجي بتساعد الورقة تطفو.' },
  source: leaves,
};
const petiole: PlantNote = {
  recognize: { en: 'Some leaves are attached to the plant stem by a petiole. Leaves with no petiole, attached directly to the stem, are called sessile leaves.', ar: 'بعض الأوراق بتتصل بالساق بعنق الورقة (petiole). والأوراق اللي ملهاش عنق وبتتصل بالساق مباشرة اسمها أوراق جالسة (sessile).' },
  source: leaves,
};
const stolon: PlantNote = {
  recognize: { en: 'Stolons are stems that run almost parallel to the ground, or just below the surface.', ar: 'الأرومات الزاحفة (stolons) سيقان بتمشي تقريبًا موازية للأرض أو تحت السطح مباشرة.' },
  function: { en: 'They can give rise to new plants at the nodes. Runners are a type of stolon that runs above the ground and produces new clone plants.', ar: 'ممكن تطلّع نباتات جديدة عند العقد. والعدّائيات (runners) نوع من الأرومات بتمشي فوق الأرض وبتنتج نباتات جديدة مستنسخة.' },
  source: stems,
};
const lenticel: PlantNote = {
  recognize: { en: 'In woody plants the periderm (cork cambium, cork cells and phelloderm) substitutes for the epidermis. In some plants the periderm has many openings, known as lenticels.', ar: 'في النباتات الخشبية القشرة (periderm) المكوّنة من كامبيوم الفلين وخلايا الفلين والفيلودرم بتحل محل البشرة. وفي بعض النباتات فيها فتحات كتير اسمها العديسات (lenticels).' },
  function: { en: 'Lenticels allow the interior cells to exchange gases with the outside atmosphere.', ar: 'العديسات بتسمح لخلايا الداخل بتبادل الغازات مع الجو الخارجي.' },
  source: stems,
};
const tuber: PlantNote = {
  recognize: { en: 'Tubers are modified stems. They arise as swollen ends of stolons and contain many adventitious buds, familiar to us as the eyes on potatoes.', ar: 'الدرنات (tubers) سيقان متحورة. بتنشأ من أطراف منتفخة للأرومات وفيها براعم عرضية كتير، هي اللي بنعرفها كعيون البطاطس.' },
  function: { en: 'Tubers may store starch, as seen in the potato.', ar: 'الدرنات ممكن تخزن النشا، زي ما في البطاطس.' },
  source: stems,
};
const starchTuber: PlantNote = { function: tuber.function, source: stems };
const rootGen: PlantNote = {
  recognize: { en: 'Compared to stems, roots have a lot of cortex and little pith. The vascular tissue lies in the inner part of the root, the stele, and the endodermis separates the stele from the ground tissue outside it.', ar: 'بالمقارنة بالسيقان، الجذور فيها قشرة (cortex) كتير ونخاع (pith) قليل. والنسيج الوعائي في الجزء الداخلي من الجذر وهو الأسطوانة الوعائية (stele)، والإندوديرم بيفصلها عن النسيج الأساسي اللي برا.' },
  function: { en: 'The endodermis is exclusive to roots and serves as a checkpoint for materials entering the vascular system. Its waxy Casparian strip forces water and solutes to cross the plasma membranes of endodermal cells, so toxic substances and pathogens are generally excluded.', ar: 'الإندوديرم موجود في الجذور بس وبيشتغل كنقطة تفتيش للمواد الداخلة للنظام الوعائي. وشريط كاسبار الشمعي بيجبر الماء والمواد الذايبة تعدي من غشاء خلايا الإندوديرم، فالمواد السامة والمسببات المرضية غالبًا بتتمنع.' },
  source: roots,
};
const rootMono: PlantNote = {
  ...rootGen,
  compare: { en: 'In dicot roots the xylem and phloem of the stele are arranged alternately in an X shape. In monocot roots the vascular tissue is arranged in a ring around the pith.', ar: 'في جذور ذوات الفلقتين الخشب واللحاء في الأسطوانة الوعائية متبادلين على شكل X. وفي جذور أحادية الفلقة النسيج الوعائي مرتب في حلقة حوالين النخاع.' },
};
const myco: PlantNote = {
  recognize: { en: 'Endomycorrhizae, also called arbuscular mycorrhizae, do not form a dense sheath over the root. Instead the fungal mycelium is embedded within the root tissue.', ar: 'الميكوريزا الداخلية، وبتتسمى كمان الميكوريزا الشجيرية (arbuscular)، مبتكوّنش غلاف كثيف على الجذر. بدل كده خيوط الفطر بتكون مغروسة جوه نسيج الجذر.' },
  function: { en: 'The plant obtains mainly phosphate and other minerals, such as zinc and copper, from the soil, and the fungus obtains sugars from the root. The thin hyphae increase the surface area of the root system.', ar: 'النبات بياخد أساسًا الفوسفات ومعادن تانية زي الزنك والنحاس من التربة، والفطر بياخد السكريات من الجذر. والهيفات الرفيعة بتزود مساحة سطح الجذور.' },
  compare: { en: 'Ectomycorrhizae form an extensive dense sheath, called a mantle, around the roots and are found in forest trees, especially conifers, birches and oaks. Endomycorrhizae are found in the roots of more than 80 percent of terrestrial plants.', ar: 'الميكوريزا الخارجية بتكوّن غلاف كثيف اسمه mantle حوالين الجذور وبتتلاقى في أشجار الغابات خصوصًا الصنوبريات والبتولا والبلوط. أما الميكوريزا الداخلية فموجودة في جذور أكتر من 80 في المية من النباتات الأرضية.' },
  source: nutr,
};
const nodule: PlantNote = {
  recognize: { en: 'Soil bacteria called rhizobia interact symbiotically with legume roots to form specialized structures called nodules, in which nitrogen fixation takes place.', ar: 'بكتيريا التربة المسماة ريزوبيا بتتعايش تكافليًا مع جذور البقوليات وبتكوّن تراكيب متخصصة اسمها العقد (nodules) اللي بيحصل فيها تثبيت النيتروجين.' },
  function: { en: 'Nitrogen fixation reduces atmospheric nitrogen to ammonia with the enzyme nitrogenase. The plant obtains ammonia, and the bacteria obtain carbon compounds generated through photosynthesis.', ar: 'تثبيت النيتروجين بيختزل نيتروجين الجو لأمونيا بإنزيم النيتروجينيز. النبات بياخد الأمونيا والبكتيريا بتاخد مركبات كربون من البناء الضوئي.' },
  source: nutr,
};
const anaphase: PlantNote = {
  recognize: { en: 'In anaphase the cohesin proteins degrade and the sister chromatids separate at the centromere. Each chromatid is now called a single chromosome.', ar: 'في الطور الانفصالي (anaphase) بروتينات الكوهيسين بتتحلل والكروماتيدات الشقيقة بتنفصل عند السنترومير. وكل كروماتيد بيتسمى كروموسوم منفرد.' },
  function: { en: 'The chromosomes are pulled rapidly apart along their microtubules. The cell becomes visibly elongated as the polar microtubules slide against each other where they overlap.', ar: 'الكروموسومات بتتسحب بسرعة بعيد عن بعض على الأنيبيبات الدقيقة. والخلية بتطول بشكل واضح لما الأنيبيبات القطبية بتنزلق على بعضها عند منطقة التداخل.' },
  source: cycle,
};
const lichen: PlantNote = {
  recognize: { en: 'A lichen is not a single organism but a mutualism, in which a fungus lives with a photosynthetic organism, a eukaryotic alga or a prokaryotic cyanobacterium. The body of a lichen is a thallus formed of hyphae wrapped around the photosynthetic partner.', ar: 'الأشنة (lichen) مش كائن واحد لكنها تكافل، فيها فطر عايش مع كائن بيعمل بناء ضوئي، يا طحلب حقيقي النواة يا سيانوبكتيريا. وجسم الأشنة ثالوس مكوّن من هيفات ملفوفة حوالين الشريك اللي بيعمل البناء الضوئي.' },
  function: { en: 'The photosynthetic organism provides carbon and energy as carbohydrates. In return the fungus supplies minerals and protection from dryness and excessive light.', ar: 'الكائن اللي بيعمل البناء الضوئي بيوفر الكربون والطاقة على شكل كربوهيدرات. وفي المقابل الفطر بيوفر المعادن والحماية من الجفاف والضوء الزايد.' },
  compare: { en: 'Lichens can survive extended periods of drought, when they become completely desiccated, and then become active rapidly once water is available again.', ar: 'الأشنات بتتحمل فترات جفاف طويلة وتتجفف تمامًا، وبعدين بتنشط بسرعة أول ما الماء يتوفر تاني.' },
  source: fungi,
};
const pollination: PlantNote = {
  recognize: { en: 'In angiosperms, pollination is the placement or transfer of pollen from the anther to the stigma of the same flower or another flower.', ar: 'في مغطاة البذور التلقيح هو وضع أو نقل حبوب اللقاح من المتك لميسم نفس الزهرة أو زهرة تانية.' },
  function: { en: 'After transfer the pollen germinates to form the pollen tube and the sperm for fertilizing the egg. Pollen tubes grow through the tissue of the stigma and style before they enter the ovule.', ar: 'بعد النقل حبة اللقاح بتنبت وتكوّن أنبوب اللقاح والخلايا المنوية اللي هتخصب البويضة. وأنابيب اللقاح بتنمو جوه نسيج الميسم والقلم قبل ما تدخل البويضة.' },
  compare: { en: 'In self-pollination pollen lands on the stigma of the same flower or another flower on the same plant. In cross-pollination it goes to a flower on a different individual. Primroses have two flower types, pin-eyed and thrum-eyed, with different anther and stigma lengths.', ar: 'في التلقيح الذاتي حبوب اللقاح بتقع على ميسم نفس الزهرة أو زهرة تانية على نفس النبات. وفي التلقيح الخلطي بتروح لزهرة على فرد تاني. زهرة الربيع (primrose) ليها نوعين من الأزهار، pin-eyed وthrum-eyed، بأطوال مختلفة للمتك والميسم.' },
  source: pollin,
};
const flowerBud: PlantNote = {
  recognize: { en: 'A typical flower has four whorls: the calyx (sepals), the corolla (petals), the androecium and the gynoecium. The sepals help protect the unopened bud.', ar: 'الزهرة النموذجية ليها أربع دوائر: الكأس (السبلات) والتويج (البتلات) والطلع والمتاع. والسبلات بتساعد في حماية البرعم قبل ما يتفتح.' },
  compare: { en: 'In monocots petals usually number three or multiples of three. In dicots the number is four or five, or multiples of four or five.', ar: 'في أحاديات الفلقة البتلات غالبًا تلاتة أو مضاعفات التلاتة. وفي ثنائيات الفلقة أربعة أو خمسة أو مضاعفاتهم.' },
  source: repro,
};
const ovary: PlantNote = {
  recognize: { en: 'The ovary may contain one or multiple ovules.', ar: 'المبيض ممكن يحتوي بويضة واحدة أو أكتر.' },
  function: { en: 'A double-layered integument protects the megasporangium and later the embryo sac, and develops into the seed coat after fertilization. The ovule wall becomes part of the fruit.', ar: 'الغلاف المزدوج (integument) بيحمي الكيس البوغي الكبير وبعدين الكيس الجنيني، وبيتحول لقصرة البذرة بعد الإخصاب. وجدار البويضة بيبقى جزء من الثمرة.' },
  compare: { en: 'In angiosperms the female gametophyte is in an enclosed structure, the ovule, within the ovary. In gymnosperms it is on the exposed bracts of the female cone.', ar: 'في مغطاة البذور الطور المشيجي المؤنث جوه تركيب مغلق هو البويضة داخل المبيض. وفي معراة البذور بيكون على قنابات مكشوفة في المخروط المؤنث.' },
  source: repro,
};

Object.assign(map, {
  // plant cells
  'onion-epidermis': plantCell, 'onion-epidermis-248-04': plantCell, 'onion-epidermis-255-19': plantCell, 'onion-epidermis-255-20': plantCell,
  'onion-epidermis-cells-40x': plantCell, 'onion-epidermal-cells': plantCell, 'red-onion-cells': plantCell, 'onion-epidermis-cells': plantCell,
  'onion-epidermis-deplasmolysis': plantCell,
  'plasmolysis-in-red-onion-epidermis': plasmolysis, 'rhoeo-discolor-plasmolysis': plasmolysis,
  'elodea-leaf-cells': chloroplast, 'elodea-anacharis-leaf-cells-400x': chloroplast, 'elodea-cells-with-chloroplasts-100x': chloroplast,
  'mitosis-in-onion-root-meristem-anaphase': anaphase, 'anaphase-of-plant-cell-mitosis': anaphase,
  // algae, lichen, mosses, liverworts
  'spirogyra': spirogyra,
  'iceland-moss-lichen-thallus-255-37r': lichen,
  'moss-barbula-unguiculata-leaf-cells-400x': mossLeaf, 'moss-bartramia-ithyphylla-leaf-sheath-125x': mossLeaf, 'moss-bryum-caespiticium-leaf-cells-400x': mossLeaf,
  'moss-bryum-capillare-live-leaf-cells': mossLeaf, 'moss-leaf-in-polarised-light': mossLeaf, 'moss-leaf-under-the-microscope': mossLeaf,
  'physcomitrella-protonema': protonema,
  'liverwort-cephalozia-connivens-side-leaf-250x': liverLeafy, 'liverwort-calypogeia-azurea-cells-with-oil-bodies': liverLeafy,
  'liverwort-cross-section': liverThallus, 'metzgeriothallus-thallus': liverThallus,
  // ferns and relatives
  'fern-sporangium': fernSori, 'licorice-fern-polypodium-glycyrrhiza-spores-40x': fernSori,
  'fern-gametophyte-development-1-week': fernGameto, 'fern-gametophyte-development-3-weeks': fernGameto,
  'fern-root-cross-section-40x': fernRoot, 'rough-horsetail-spores': horsetailSpores,
  'lycopodium-annotinum-stem-section-calcofluor-white-confocal': lycophyte, 'lycopodium-complanatum-stem-section-calcofluor-white-confocal': lycophyte,
  'lycopodium-clavatum-shoot-cross-section-triple-stain': lycophyte,
  // gymnosperms
  'male-pine-cone-section': maleCone, 'pollen-grains-255-26': pinePollen,
  'pinus-merkusii-stem-cross-section-safranin': gymStem, 'ginkgo-biloba-shoot-cross-section': gymStem,
  'pine-leaf-needle-cross-section-prepared-slide': needle,
  // leaves
  'mesophyte-leaf-cross-section-stained': mesophyll, 'chestnut-leaf-cross-section': mesophyll, 'lemon-leaf-cross-section-10x': mesophyll,
  'hydrophyte-leaf-cross-section-stained': hydro,
  'leaf-stalk-petiole-255-24': petiole, 'leaf-stalk-petiole-255-25': petiole, 'leaf-stalk-petiole-255-34': petiole,
  // stems and storage
  'dicot-stem-showing-xylem-and-phloem': dicotStem,
  'lily-of-the-valley-convallaria-rhizome-cross-section-fluorescence': rhizome,
  'chlorophytum-comosum-stolon-section': stolon,
  'woody-dicot-stem-lenticel-development-1': lenticel, 'woody-dicot-stem-lenticel-development-2': lenticel,
  'potato-tuber-248-03': tuber, 'potato-tuber-250-35': tuber, 'potato-starch-grains-400x': starchTuber, 'potato-starch-in-polarised-light-100x': starchTuber,
  // roots
  'monocot-root-cross-section': rootMono, 'maize-zea-root-cross-section-100x': rootMono,
  'sweet-flag-acorus-root-cross-section-100x': rootGen, 'greenbriar-smilax-root-cross-section-40x': rootGen, 'iris-root-cross-section': rootGen,
  'onion-root-cross-section-10x-objective': rootGen,
  'arbuscular-mycorrhizae-in-root-40x': myco, 'vicia-root-nodule-cross-section': nodule,
  // pollen and flowers
  'china-rose-hibiscus-rosa-sinensis-pollen-grains': pollen, 'hibiscus-pollen-under-the-microscope': pollen, 'marshmallow-althaea-officinalis-pollen-grain-40x': pollen,
  'chicory-anther-surface-with-pollen': anther, 'primula-vulgaris-pollen-on-a-stigma': pollination,
  'lily-flower-bud-250-30': flowerBud, 'lily-flower-bud-255-29': flowerBud, 'tulip-ovary-255-30': ovary,
});

// ---- Batch 2, part 2: general organ notes for stem, leaf and root slides whose species the sources do not describe.
const stemGen: PlantNote = {
  recognize: { en: 'Like the rest of the plant, a stem has three tissue systems: dermal, vascular and ground tissue. The xylem and phloem of the vascular tissue are arranged in distinct strands called vascular bundles, which run up and down the length of the stem.', ar: 'زي باقي النبات، الساق فيها تلات أنظمة أنسجة: بشري ووعائي وأساسي. والخشب واللحاء في النسيج الوعائي مرتبين في خيوط واضحة اسمها الحزم الوعائية، بتمشي بطول الساق.' },
  function: { en: 'The main function of a stem is to provide support to the plant, holding leaves, flowers and buds. In some cases stems also store food for the plant.', ar: 'وظيفة الساق الأساسية إنها تدعم النبات وتشيل الأوراق والأزهار والبراعم. وفي بعض الحالات الساق بتخزن كمان غذاء للنبات.' },
  compare: { en: 'When a stem is viewed in cross section, the vascular bundles of dicot stems are arranged in a ring. In monocot stems the bundles are randomly scattered throughout the ground tissue.', ar: 'في المقطع العرضي لساق ثنائية الفلقة الحزم الوعائية مرتبة في حلقة. وفي ساق أحادية الفلقة الحزم مبعثرة عشوائيًا في النسيج الأساسي.' },
  source: stems,
};
const leafGen: PlantNote = {
  recognize: { en: 'The epidermis of a leaf is usually one cell layer thick and is covered by a waxy layer called the cuticle. Below the epidermis are layers of cells called the mesophyll, or "middle leaf". Most leaves have a midrib that branches to each side to produce veins of vascular tissue.', ar: 'بشرة الورقة غالبًا طبقة خلايا واحدة وبتتغطى بطبقة شمعية اسمها الكيوتكل. وتحت البشرة طبقات خلايا اسمها الميزوفيل (mesophyll) يعني "وسط الورقة". ومعظم الأوراق فيها عرق وسطي بيتفرع للجنبين ويكوّن عروقًا من نسيج وعائي.' },
  function: { en: 'The cuticle reduces the rate of water loss from the leaf surface.', ar: 'الكيوتكل بتقلل معدل فقد الماء من سطح الورقة.' },
  compare: { en: 'Leaves are adapted to their environment. Conifer needles have sunken stomata and a small surface area, which reduce water loss. In hot climates, cacti have leaves reduced to spines, which with their succulent stems help conserve water.', ar: 'الأوراق متكيفة مع بيئتها. إبر الصنوبريات ثغورها غائرة ومساحة سطحها صغيرة، وده بيقلل فقد الماء. وفي المناخ الحار الصبار أوراقه متحورة لأشواك، وده مع سيقانه العصارية بيساعد في توفير الماء.' },
  source: leaves,
};
const stemLeaf: PlantNote = stemGen;
const bud: PlantNote = {
  recognize: { en: 'An axillary bud is usually found in the axil, the area between the base of a leaf and the stem. The tip (apex) of the shoot contains the apical bud.', ar: 'البرعم الإبطي بيكون غالبًا في الإبط، وهو المنطقة بين قاعدة الورقة والساق. وقمة الفرع فيها البرعم القمي.' },
  function: { en: 'An axillary bud can give rise to a branch or a flower. The apical bud diminishes the growth of axillary buds along the sides of branches and stems, which is called apical dominance.', ar: 'البرعم الإبطي ممكن يطلّع فرع أو زهرة. والبرعم القمي بيقلل نمو البراعم الإبطية على جوانب الفروع والسيقان، وده اسمه السيادة القمية.' },
  source: stems,
};
const confPollen: PlantNote = {
  recognize: { en: 'A conifer pollen grain consists of just a few haploid cells enclosed in a tough wall reinforced with sporopollenin.', ar: 'حبة لقاح الصنوبريات مكوّنة من كام خلية أحادية المجموعة بس، محاطة بجدار قوي مقوّى بالسبوروبولينين.' },
  function: { en: 'Conifers release large amounts of pollen that the wind carries. Pollination is the transfer of pollen from the male cone to the female cone.', ar: 'الصنوبريات بتطلق كميات كبيرة من حبوب اللقاح وبتتحمل بالهوا. والتلقيح هو نقل حبوب اللقاح من المخروط المذكر للمخروط المؤنث.' },
  source: gym,
};
Object.assign(map, {
  'roselle-hibiscus-sabdariffa-stem-cross-section': stemGen, 'young-stem-of-hibiscus-rosa-sinensis-cross-section-400x': stemGen,
  'acacia-stem-cross-section': stemGen, 'bamboo-phyllostachys-stem': stemGen, 'umbrella-plant-cyperus-alternifolius-stalk-etzold-green': stemGen,
  'garlic-mustard-alliaria-petiolata-stalk-longitudinal-section': stemGen, 'male-fern-dryopteris-filix-mas-dictyostele': stemGen,
  'bracken-fern-pteridium-aquilinum-section-calcofluor-white-confocal': stemGen,
  'stem-and-leaf-of-dame-s-rocket-hesperis-sylvestris': stemLeaf,
  'cycas-leaflet-cross-section-safranin-stain': leafGen, 'xerophyte-leaf-cross-section-stained': leafGen, 'oleander-nerium-leaf-cross-section': leafGen,
  'leaf-section-255-21': leafGen, 'leaf-epidermis-of-tall-fescue-grass-festuca-arundinacea': cuticle,
  'ruscus-hypophyllum-root-cross-section': rootGen, 'ruscus-hypophyllum-root-cross-section-second-field': rootGen,
  'horsetail-equisetum-apical-cell-longitudinal-section': apicalMeristem, 'bud-lilac-255-28': bud,
  'cypress-pollen-grain-in-a-nasal-cytology-smear': confPollen,
});

// ---- Batch 3: the last five botany slides. Each uses the open page named in its source link, not OpenStax.
// Sentences follow the cited page for the group or structure; they do not describe the exact specimen on the slide.
const pmcSph = { title: 'Sphagnum cell walls (open access, PMC12026656)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12026656/' };
const sphagnumLeaf: PlantNote = {
  recognize: { en: 'Sphagnum branch leaves are one cell layer thick and have two kinds of cells: large, water-filled hyaline cells, dead at maturity and often with pores, and chlorophyll-containing cells arranged around them.', ar: 'ورقة الفرع في الـ Sphagnum سمكها طبقة خلايا واحدة وفيها نوعين خلايا: خلايا شفافة كبيرة (hyaline) مليانة ماية وميتة عند النضج وغالبا فيها ثقوب، وخلايا فيها كلوروفيل حواليها.' },
  function: { en: 'The hyaline cells let the moss absorb up to 25 times its dry weight in water.', ar: 'الخلايا الشفافة بتخلي الطحلب يمتص لحد 25 ضعف وزنه الجاف ماية.' },
  source: pmcSph,
};
const wheat = { title: 'Raven Biology 12e, 40.5.2 Mature Embryos and Seed Structure (LibreTexts)', url: 'https://bio.libretexts.org/Bookshelves/Introductory_and_General_Biology/Map:_Raven_Biology_12th_Edition/40:_Plant_Reproduction/40.05:_Embryo_Development/40.5.02:_Mature_Embryos_and_Seed_Structure' };
const caryopsis: PlantNote = {
  recognize: { en: 'In a caryopsis (grain) the fruit wall (pericarp) is fused to the seed coat, so the grain is a one-seeded fruit. The thin outer layer of the endosperm is a single layer of cells called the aleurone.', ar: 'في الـ caryopsis (الحبة) جدار الثمرة (pericarp) ملتحم مع غلاف البذرة، فالحبة ثمرة فيها بذرة واحدة. الطبقة الخارجية الرقيقة من الإندوسبيرم طبقة خلايا واحدة اسمها aleurone.' },
  function: { en: 'The single cotyledon of a monocot is called the scutellum; it channels nutrition to the growing embryo. On germination the aleurone secretes enzymes that break down the stored carbohydrates, proteins and lipids.', ar: 'الفلقة الوحيدة في ذوات الفلقة الواحدة اسمها scutellum وبتوصّل الغذاء للجنين النامي. وقت الإنبات الـ aleurone بيفرز إنزيمات بتحلل الكربوهيدرات والبروتينات والدهون المخزنة.' },
  source: wheat,
};
const pmcRus = { title: 'Ruscus aculeatus botanical description (open access, PMC12655856)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12655856/' };
const ruscus: PlantNote = {
  recognize: { en: 'Ruscus aerial shoots bear phylloclades: flattened, leaf-like branches arising from the axils of reduced leaves. They are leathery and end in a sharp spine.', ar: 'سيقان الـ Ruscus الهوائية عليها phylloclades: فروع مفلطحة شبه الورقة طالعة من إبط أوراق مختزلة. جلدية وبتنتهي بشوكة حادة.' },
  function: { en: 'The phylloclades perform an assimilative function.', ar: 'الـ phylloclades بتعمل وظيفة assimilative (تمثيل).' },
  source: pmcRus,
};
map['leaf-section-251-13'] = sphagnumLeaf;
map['sphagnum-moss-stained-slide'] = sphagnumLeaf;
map['caryopsis-grain-255-31'] = caryopsis;
map['caryopsis-grain-255-32'] = caryopsis;
map['butcher-s-broom-ruscus-hypophyllum-stem-cross-section'] = ruscus;

// Epidermis prints whose id names stomata share the stomata note.
for (const sp of specimens) if (sp.department === 'botany' && /stomata/.test(sp.id) && !map[sp.id]) map[sp.id] = stomata;
export const plantNotes: Record<string, PlantNote> = map;
