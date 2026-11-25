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

export const specimenSchemas9: ScientificDiagram[] = [
  make("onion-epidermis-cells-40x", "botany", { en: "Onion epidermis", ar: "بشرة البصل" }, { en: "Onion epidermis", ar: "بشرة البصل" }, { en: "A single layer of long rectangular cells.", ar: "طبقة واحدة من خلايا مستطيلة طويلة." }, [
    pin("cell", "Epidermal cell", "خلية بشرة", "Long cell packed tightly with its neighbours.", "خلية طويلة متراصة مع جاراتها.", 45, 50),
    pin("nuc", "Nucleus", "نواة", "Small dark body in the cell.", "جسم صغير داكن في الخلية.", 73, 61),
    pin("wall", "Cell wall", "جدار الخلية", "Dark outline between two cells.", "حد داكن بين خليتين.", 23, 29),
  ]),
  make("paramecium-caudatum-light-microscope", "cell-biology", { en: "Paramecium", ar: "البراميسيوم" }, { en: "Paramecium", ar: "البراميسيوم" }, { en: "Slipper-shaped ciliate swimming in water.", ar: "كائن مهدّب نعلي الشكل يسبح في الماء." }, [
    pin("cell", "Paramecium", "براميسيوم", "Single-celled ciliate with a slipper shape.", "كائن وحيد الخلية مهدب بشكل النعل.", 42, 26),
    pin("cell2", "Paramecium, second", "براميسيوم ثان", "Another cell lower in the field.", "خلية أخرى في أسفل المجال.", 42, 51),
  ]),
  make("potato-starch-grains-400x", "botany", { en: "Potato starch grains", ar: "حبيبات نشا البطاطس" }, { en: "Starch grains", ar: "حبيبات النشا" }, { en: "Oval stained grains of different sizes.", ar: "حبيبات بيضاوية مصبوغة بأحجام مختلفة." }, [
    pin("grain", "Starch grain", "حبيبة نشا", "Storage form of glucose in the tuber.", "شكل تخزين الجلوكوز في الدرنة.", 28, 38),
    pin("grain2", "Starch grain, second", "حبيبة نشا ثانية", "Larger grain in the middle.", "حبيبة أكبر في الوسط.", 43, 65),
    pin("grain3", "Starch grain, third", "حبيبة نشا ثالثة", "Grain at the right.", "حبيبة على اليمين.", 78, 71),
  ]),
  make("pine-needle-brightfield", "botany", { en: "Pine needle, cross section", ar: "إبرة الصنوبر، مقطع عرضي" }, { en: "Pine needle", ar: "إبرة الصنوبر" }, { en: "Vascular bundle in the middle of green tissue.", ar: "حزمة وعائية في وسط نسيج أخضر." }, [
    pin("bundle", "Vascular bundle", "حزمة وعائية", "Xylem and phloem in the needle centre.", "خشب ولحاء في مركز الإبرة.", 42, 35),
    pin("meso", "Mesophyll", "النسيج المتوسط", "Green tissue that carries out photosynthesis.", "نسيج أخضر يقوم بالبناء الضوئي.", 22, 62),
    pin("epi", "Outer layer", "الطبقة الخارجية", "Thick epidermis at the left edge.", "بشرة سميكة عند الحافة اليسرى.", 12, 55),
  ]),
  make("penicillium-conidiophore", "botany", { en: "Penicillium conidiophore", ar: "حامل أبواغ البنسيليوم" }, { en: "Penicillium", ar: "البنسيليوم" }, { en: "Branched stalk with chains of spores.", ar: "حامل متفرع بسلاسل من الأبواغ." }, [
    pin("chain", "Conidia chain", "سلسلة أبواغ", "Row of asexual spores.", "صف من الأبواغ اللاجنسية.", 40, 29),
    pin("chain2", "Conidia chain, second", "سلسلة أبواغ ثانية", "Second row on another branch.", "صف ثان على فرع آخر.", 64, 27),
    pin("stalk", "Conidiophore stalk", "حامل الأبواغ", "Stalk that carries the branches.", "ساق تحمل الفروع.", 53, 58),
  ]),
  make("mucor-mould", "botany", { en: "Mucor, sporangia", ar: "الميوكور، الأكياس البوغية" }, { en: "Mucor", ar: "الميوكور" }, { en: "Round sporangia on long hyphae.", ar: "أكياس بوغية مستديرة على خيوط طويلة." }, [
    pin("spor", "Sporangium", "كيس بوغي", "Round sac full of spores.", "كيس مستدير مملوء بالأبواغ.", 55, 73),
    pin("spor2", "Sporangium, second", "كيس بوغي ثان", "Another sac on the left.", "كيس آخر على اليسار.", 8, 68),
    pin("hypha", "Hypha", "خيط فطري", "Long thread of the fungus.", "خيط طويل للفطر.", 31, 52),
  ]),
  make("moss-bryum-caespiticium-leaf-cells-400x", "botany", { en: "Moss leaf cells", ar: "خلايا ورقة الطحلب" }, { en: "Moss leaf", ar: "ورقة الطحلب" }, { en: "One-cell-thick leaf with green chloroplasts.", ar: "ورقة بسمك خلية واحدة وبلاستيدات خضراء." }, [
    pin("cell", "Leaf cell", "خلية الورقة", "Small cell holding chloroplasts.", "خلية صغيرة تحمل بلاستيدات.", 46, 43),
    pin("margin", "Leaf margin", "حافة الورقة", "Edge cells of the leaf.", "خلايا حافة الورقة.", 73, 30),
  ]),
  make("human-ovarian-follicle", "anatomy", { en: "Ovary, follicle", ar: "المبيض، الحويصلة" }, { en: "Ovarian follicle", ar: "حويصلة المبيض" }, { en: "Oocyte inside a ring of follicle cells.", ar: "بويضة داخل حلقة من خلايا الحويصلة." }, [
    pin("oocyte", "Oocyte", "البويضة", "Large cell at the centre of the follicle.", "خلية كبيرة في مركز الحويصلة.", 48, 43),
    pin("wall", "Follicle wall", "جدار الحويصلة", "Ring of cells around the oocyte.", "حلقة من الخلايا حول البويضة.", 27, 43),
    pin("stroma", "Ovarian stroma", "سدى المبيض", "Dense tissue outside the follicle.", "نسيج كثيف خارج الحويصلة.", 75, 80),
  ]),
  make("mouse-liver-section", "anatomy", { en: "Mouse liver", ar: "كبد الفأر" }, { en: "Liver", ar: "الكبد" }, { en: "Liver tissue around a central vein.", ar: "نسيج كبدي حول وريد مركزي." }, [
    pin("cv", "Central vein", "وريد مركزي", "Vessel that drains the lobule.", "وعاء يصرف الفصيص.", 43, 36),
    pin("cords", "Hepatic cords", "حبال كبدية", "Plates of liver cells.", "صفائح من خلايا الكبد.", 25, 65),
    pin("lobule", "Liver tissue", "نسيج كبدي", "Cells of the lobule.", "خلايا الفصيص.", 75, 45),
  ]),
  make("nematode-under-the-microscope", "anatomy", { en: "Nematode", ar: "الدودة الخيطية" }, { en: "Nematode", ar: "الدودة الخيطية" }, { en: "Slender unsegmented roundworm.", ar: "دودة أسطوانية رفيعة غير مقسمة." }, [
    pin("worm", "Nematode body", "جسم الدودة", "Long smooth body without segments.", "جسم طويل أملس بلا حلقات.", 55, 52),
    pin("debris", "Debris", "حطام", "Dark particles in the mount.", "جسيمات داكنة في الشريحة.", 24, 53),
  ]),
  make("monocot-root-cross-section", "botany", { en: "Monocot root, cross section", ar: "جذر أحادي الفلقة، مقطع عرضي" }, { en: "Monocot root", ar: "جذر أحادي الفلقة" }, { en: "Red-stained vascular ring inside a wide cortex.", ar: "حلقة وعائية حمراء داخل قشرة عريضة." }, [
    pin("stele", "Vascular cylinder", "الأسطوانة الوعائية", "Central core with xylem and phloem.", "قلب مركزي فيه خشب ولحاء.", 46, 41),
    pin("vessel", "Xylem vessel", "وعاء خشبي", "Large open vessel that carries water.", "وعاء كبير مفتوح ينقل الماء.", 38, 38),
    pin("endo", "Endodermis", "الأدمة الباطنة", "Ring of thick-walled cells around the core.", "حلقة من خلايا سميكة الجدار حول القلب.", 62, 45),
    pin("cortex", "Cortex", "القشرة", "Wide outer storage tissue.", "نسيج تخزين خارجي عريض.", 20, 45),
  ]),
  make("peacock-feather-barbules", "anatomy", { en: "Peacock feather barbules", ar: "زغيبات ريش الطاووس" }, { en: "Feather barbules", ar: "زغيبات الريش" }, { en: "Ridged barbules that give colour.", ar: "زغيبات مضلعة تعطي اللون." }, [
    pin("barb1", "Barbule", "زغيبة", "Fine branch of the feather vane.", "فرع دقيق من سطح الريشة.", 52, 19),
    pin("barb2", "Barbule, left", "زغيبة يسارا", "Another barbule on the left.", "زغيبة أخرى على اليسار.", 18, 61),
    pin("barb3", "Barbule, lower right", "زغيبة أسفل اليمين", "Barbule near the bottom.", "زغيبة قرب الأسفل.", 70, 84),
  ]),
  make("oleander-nerium-leaf-cross-section", "botany", { en: "Oleander leaf, cross section", ar: "ورقة الدفلى، مقطع عرضي" }, { en: "Oleander leaf", ar: "ورقة الدفلى" }, { en: "Thick epidermis and crypts on the lower side.", ar: "بشرة سميكة وتجاويف في الجهة السفلية." }, [
    pin("upper", "Upper epidermis", "البشرة العليا", "Thick layered outer skin.", "جلد خارجي سميك متعدد الطبقات.", 46, 29),
    pin("mes", "Palisade tissue", "النسيج العمادي", "Tall green cells that capture light.", "خلايا خضراء طويلة تلتقط الضوء.", 46, 45),
    pin("crypt", "Stomatal crypt", "تجويف ثغري", "Pit on the lower side that holds stomata.", "حفرة في الجهة السفلية تحمل ثغورا.", 66, 68),
    pin("lower", "Lower epidermis", "البشرة السفلى", "Outer layer under the leaf.", "الطبقة الخارجية أسفل الورقة.", 30, 78),
  ]),
  make("iris-root-cross-section", "botany", { en: "Iris root, cross section", ar: "جذر السوسن، مقطع عرضي" }, { en: "Iris root", ar: "جذر السوسن" }, { en: "Small vascular core in a wide cortex.", ar: "حزمة وعائية صغيرة في قشرة عريضة." }, [
    pin("stele", "Vascular cylinder", "الأسطوانة الوعائية", "Core that carries water and food.", "قلب ينقل الماء والغذاء.", 58, 22),
    pin("cortex", "Cortex", "القشرة", "Wide ring of rounded storage cells.", "حلقة عريضة من خلايا تخزين مستديرة.", 30, 57),
    pin("cortex2", "Cortex, lower right", "القشرة أسفل اليمين", "Cells in the lower right.", "خلايا في الأسفل يمينا.", 75, 65),
  ]),
  make("human-ureter", "anatomy", { en: "Ureter wall", ar: "جدار الحالب" }, { en: "Ureter", ar: "الحالب" }, { en: "Star-shaped lumen lined by transitional epithelium.", ar: "تجويف نجمي مبطن بظهارة انتقالية." }, [
    pin("lumen", "Lumen", "التجويف", "Folded star-shaped channel for urine.", "قناة نجمية مطوية للبول.", 52, 50),
    pin("epi", "Transitional epithelium", "ظهارة انتقالية", "Purple lining that stretches.", "بطانة بنفسجية قابلة للتمدد.", 45, 14),
    pin("wall", "Muscular wall", "الجدار العضلي", "Pink layers that push urine along.", "طبقات وردية تدفع البول.", 85, 78),
  ]),
];
