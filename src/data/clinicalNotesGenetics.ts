import type { ClinicalNote } from './clinicalNotes';

// Batch 5b: genetics and cell division slides. Every sentence comes from the cited NCBI Bookshelf (StatPearls) page.
const sp = (id: string, title: string) => ({ title: `NCBI StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${id}/` });

const karyotype: ClinicalNote = {
  recognize: { en: 'A normal human cell has 23 pairs of chromosomes: 22 pairs of autosomes and one pair of sex chromosomes (XX or XY), 46 in total. In a karyotype the autosomes are arranged by size and banding pattern.', ar: 'الخلية البشرية الطبيعية فيها 23 زوج كروموسومات: 22 زوج جسدية وزوج واحد جنسي (XX أو XY)، يعني 46 كروموسوم. في الكاريوتايب الكروموسومات الجسدية بتترتب حسب الحجم ونمط التحزز.' },
  clinical: { en: 'Karyotyping is a preferred method to detect numerical and structural chromosomal abnormalities. The most common aneuploidies include Down syndrome (trisomy 21).', ar: 'الكاريوتايب من الطرق المفضلة لكشف الشذوذ العددي والتركيبي في الكروموسومات. أشهر حالات اختلال العدد متلازمة داون (التثلث الصبغي 21).' },
  source: sp('NBK563293', 'Genetics, Cytogenetic Testing and Conventional Karyotype'),
};
const mitosis: ClinicalNote = {
  recognize: { en: 'In metaphase the chromosomes have all lined up at the metaphase plate in the middle of the cell, each attached to spindle microtubules through its kinetochore. Mitosis has prophase, metaphase, anaphase, telophase and cytokinesis.', ar: 'في الطور الاستوائي (metaphase) الكروموسومات كلها بتصطف على اللوحة الاستوائية في منتصف الخلية، وكل واحد متصل بميكروتيوبيولات المغزل عن طريق الكينيتوكور. الانقسام الفتيلي فيه الطور التمهيدي والاستوائي والانفصالي والنهائي وانقسام السيتوبلازم.' },
  source: sp('NBK482449', 'Genetics, Mitosis'),
};
const meiosis: ClinicalNote = {
  recognize: { en: 'Meiosis is reduction division in the gametes: it makes sperm or egg cells with a haploid set of chromosomes. It creates genetic diversity through independent assortment and crossing over (recombination).', ar: 'الانقسام الاختزالي بيحصل في الأمشاج: بينتج خلايا منوية أو بويضات بمجموعة كروموسومات أحادية. وبيخلق تنوع وراثي عن طريق التوزيع المستقل والعبور (إعادة التركيب).' },
  source: sp('NBK482462', 'Genetics, Meiosis'),
};

export const geneticsNotes: Record<string, ClinicalNote> = {
  'human-karyotype-248-26': karyotype,
  'human-karyotype-248-27': karyotype,
  'human-karyotype-259-28': karyotype,
  'metaphase-chromosomes-from-lymphocytes': karyotype,
  'human-chromosomes-under-the-microscope': karyotype,
  'mitosis-root-tip-248-17': mitosis,
  'mitosis-root-tip-251-21': mitosis,
  'mitosis-root-tip-251-22': mitosis,
  'metaphase-onion-root-tip-261-04': mitosis,
  'metaphase-onion-root-tip-261-05': mitosis,
  'metaphase-onion-root-tip-261-06': mitosis,
  'mitosis-in-onion-root-metaphase': mitosis,
  'onion-root-tip-cells-in-mitosis-phase-contrast': mitosis,
  'meiosis-248-22': meiosis,
  'meiosis-248-23': meiosis,
  'meiosis-254-30': meiosis,
};
