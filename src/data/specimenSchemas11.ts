import type { DiagramStructure, ScientificDiagram, SlidePhoto } from './diagramData';
import type { Bilingual, ScientificReference } from './scientificData';
import { specimenMedia } from './specimenMedia';

// Specimen schemas: labelled drawings on photographs already on the site.
// Pins are placed by eye and every schema here is marked needsReview until checked against the course atlas.
const note: Bilingual = { en: 'Pin position is approximate. Check it against your atlas.', ar: 'مكان العلامة تقريبي. راجعه مع الأطلس.' };

const pin = (id: string, en: string, ar: string, fEn: string, fAr: string, x: number, y: number): DiagramStructure => ({
  id, name: { en, ar }, function: { en: fEn, ar: fAr }, note, x, y, aliases: [en.toLowerCase(), ar],
});

const make = (specimenId: string, category: ScientificDiagram['category'], title: Bilingual, shortTitle: Bilingual, summary: Bilingual, structures: DiagramStructure[]): ScientificDiagram => {
  const media = specimenMedia[specimenId];
  const photo: SlidePhoto = { src: media.src, title: media.title, author: media.author, license: media.license, sourceUrl: media.sourceUrl };
  const reference: ScientificReference = { id: `commons-schema-${specimenId}`, title: media.title, provider: 'Wikimedia Commons', url: media.sourceUrl, supports: 'Source photograph, author and licence for this schema.' };
  return {
    id: `schema-${specimenId}`, category, title, shortTitle, summary, structures, photo, references: [reference], needsReview: true,
    disclaimer: {
      en: 'Needs review: labelled by eye on a real photomicrograph. Each pin marks the structure nearest to it; check the labels against your course atlas and lab manual.',
      ar: 'تحتاج مراجعة: التسميات موضوعة بالعين على صورة مجهرية حقيقية. كل علامة تشير لأقرب تركيب ليها؛ راجع التسميات مع أطلس المادة وكتيّب المعمل.',
    },
  };
};

export const specimenSchemas11: ScientificDiagram[] = [
  make("eosinophil-smear", "cell-biology", { en: "Eosinophil in a blood smear", ar: "الحمضات في لطاخة دم" }, { en: "Eosinophil", ar: "الخلية الحمضة" }, { en: "Bilobed nucleus and orange-brown granules.", ar: "نواة ثنائية الفصوص وحبيبات برتقالية بنية." }, [
    pin("eos", "Eosinophil", "خلية حمضة", "White cell with granules that stain orange.", "كرية بيضاء بحبيبات تصطبغ بالبرتقالي.", 37, 49),
    pin("rbc", "Red blood cell", "كرية دم حمراء", "Round disc without a nucleus.", "قرص مستدير بلا نواة.", 85, 6),
    pin("rbc2", "Red blood cell, lower", "كرية دم حمراء سفلية", "Another red cell below.", "كرية حمراء أخرى في الأسفل.", 44, 82),
  ]),
  make("thyroid-follicles-light-microscope", "anatomy", { en: "Thyroid follicles", ar: "جريبات الغدة الدرقية" }, { en: "Thyroid follicles", ar: "جريبات الدرقية" }, { en: "Round follicles filled with pink colloid.", ar: "جريبات مستديرة مملوءة بغرويد وردي." }, [
    pin("follicle", "Large follicle", "جريب كبير", "Sphere of cells storing colloid.", "كرة من الخلايا تخزن الغرويد.", 24, 18),
    pin("follicle2", "Follicle, centre", "جريب في الوسط", "Another follicle of medium size.", "جريب آخر متوسط الحجم.", 59, 50),
    pin("inter", "Interfollicular tissue", "النسيج بين الجريبات", "Thin pink tissue between follicles.", "نسيج وردي رقيق بين الجريبات.", 18, 63),
  ]),
  make("rat-epididymis", "anatomy", { en: "Epididymis", ar: "البربخ" }, { en: "Epididymis", ar: "البربخ" }, { en: "Coiled duct tubes filled with sperm.", ar: "أنابيب قناة ملتفة مملوءة بالحيوانات المنوية." }, [
    pin("lumen", "Lumen with sperm", "تجويف به حيوانات منوية", "Duct space where sperm are stored.", "حيز القناة الذي تخزن فيه الحيوانات المنوية.", 79, 46),
    pin("lumen2", "Duct, lower left", "قناة أسفل اليسار", "Another cut through the coiled duct.", "مقطع آخر في القناة الملتفة.", 23, 69),
    pin("ct", "Connective tissue", "نسيج ضام", "Tissue between duct sections.", "نسيج بين مقاطع القناة.", 50, 50),
  ]),
  make("pig-thyroid-gland-10x", "anatomy", { en: "Thyroid gland, low power", ar: "الغدة الدرقية، تكبير منخفض" }, { en: "Pig thyroid", ar: "درقية الخنزير" }, { en: "Many round follicles packed side by side.", ar: "جريبات مستديرة كثيرة متراصة." }, [
    pin("follicle", "Follicle", "جريب", "Round space filled with colloid.", "حيز مستدير مملوء بالغرويد.", 74, 18),
    pin("follicle2", "Follicle, centre", "جريب في الوسط", "Another colloid-filled follicle.", "جريب آخر مملوء بالغرويد.", 35, 48),
    pin("epi", "Follicular cells", "خلايا جريبية", "Thin cell layer around each follicle.", "طبقة خلايا رقيقة حول كل جريب.", 44, 18),
  ]),
  make("serous-salivary-gland", "anatomy", { en: "Serous salivary gland", ar: "غدة لعابية مصلية" }, { en: "Salivary gland", ar: "الغدة اللعابية" }, { en: "Dense acini with round fat cells.", ar: "عنيبات كثيفة مع خلايا دهنية مستديرة." }, [
    pin("acini", "Serous acini", "عنيبات مصلية", "Clusters of cells that make watery saliva.", "تجمعات خلايا تصنع لعابا مائيا.", 76, 53),
    pin("fat", "Fat cells", "خلايا دهنية", "Round empty-looking cells.", "خلايا مستديرة تبدو فارغة.", 31, 26),
    pin("fat2", "Fat cells, centre", "خلايا دهنية في الوسط", "Cluster of fat cells.", "تجمع خلايا دهنية.", 44, 53),
  ]),
];
