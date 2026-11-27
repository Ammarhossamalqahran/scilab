import type { Bilingual } from './scientificData';

// Recognition notes and clinical points for a small set of slides. Every sentence comes from the cited source
// (CDC DPDx, CDC, NIH/NHLBI, NCBI Bookshelf). A slide with no entry here simply shows no note: nothing is guessed.
export type ClinicalNote = { recognize?: Bilingual; clinical?: Bilingual; source: { title: string; url: string } };

const dpdx = (name: string, slug: string) => ({ title: `CDC DPDx: ${name}`, url: `https://www.cdc.gov/dpdx/${slug}/index.html` });

const ascarisFertile: ClinicalNote = {
  recognize: { en: 'Fertilized egg: rounded, thick shell with an outer mammillated (bumpy) layer often stained brown by bile; 45 to 75 µm long. Some eggs lack the outer layer (decorticated).', ar: 'البيضة المخصبة: مستديرة، قشرتها سميكة وعليها طبقة خارجية محببة غالبًا بتتلون بني من الصفراء، طولها من 45 لـ 75 ميكرومتر. بعض البيض بيفقد الطبقة الخارجية.' },
  clinical: { en: 'Ascariasis is the most common human worm infection worldwide. Adult worms usually cause no acute symptoms; heavy infections can cause abdominal pain and intestinal obstruction, and in children, stunted growth. Diagnosis is by finding eggs in stool.', ar: 'الإسكارس أكتر عدوى ديدان شيوعًا في العالم. الديدان البالغة غالبًا مفيهاش أعراض حادة، والعدوى الكبيرة ممكن تسبب ألم بطن وانسداد معوي، وعند الأطفال تأخر نمو. التشخيص بإيجاد البيض في البراز.' },
  source: dpdx('Ascariasis', 'ascariasis'),
};
const ascarisInfertile: ClinicalNote = {
  ...ascarisFertile,
  recognize: { en: 'Unfertilized egg: elongated and larger than the fertile egg (up to 90 µm), with a thinner shell and a variable mammillated layer; the inside is mostly a mass of refractile granules.', ar: 'البيضة غير المخصبة: مستطيلة وأكبر من المخصبة (لحد 90 ميكرومتر)، قشرتها أرق والطبقة المحببة متغيرة، وجوها كتلة حبيبات عاكسة للضوء.' },
};
const whipworm: ClinicalNote = {
  recognize: { en: 'Barrel-shaped, thick-shelled egg, 50 to 55 by 20 to 25 µm, with a plug at each end. Passed unembryonated in stool.', ar: 'بيضة برميلية الشكل وقشرتها سميكة، مقاسها 50 لـ 55 في 20 لـ 25 ميكرومتر، وفي كل طرف سدادة. بتطلع في البراز غير مجنّنة.' },
  clinical: { en: 'Most infections cause no symptoms. Heavy infections, especially in small children, can cause abdominal pain, diarrhea, rectal prolapse and possibly growth retardation.', ar: 'أغلب العدوى من غير أعراض. العدوى الكبيرة، خصوصًا عند الأطفال الصغار، ممكن تسبب ألم بطن وإسهال وهبوط المستقيم وربما تأخر نمو.' },
  source: dpdx('Trichuriasis', 'trichuriasis'),
};
const hookworm: ClinicalNote = {
  recognize: { en: 'Thin-shelled, colorless egg, 60 to 75 by 35 to 40 µm. Eggs of Ancylostoma and Necator cannot be told apart under the microscope.', ar: 'بيضة رفيعة القشرة وعديمة اللون، مقاسها 60 لـ 75 في 35 لـ 40 ميكرومتر. بيض الأنكلستوما والنيكاتور مينفعش يتفرق بالميكروسكوب.' },
  clinical: { en: 'Often asymptomatic. Worms attached to the gut wall can cause abdominal pain, and blood loss at the attachment site can cause iron deficiency anemia, especially in heavy infections.', ar: 'غالبًا من غير أعراض. الديدان المتعلقة بجدار الأمعاء ممكن تسبب ألم بطن، ونزف مكان التعلق ممكن يسبب أنيميا نقص حديد، خصوصًا في العدوى الكبيرة.' },
  source: dpdx('Hookworm', 'hookworm'),
};
const falciparumRing: ClinicalNote = {
  recognize: { en: 'Ring forms are often thin and delicate, about one fifth the diameter of the red cell, with one or two chromatin dots. They may sit at the edge of the cell, and cells infected more than once are common. The infected red cell is usually not enlarged.', ar: 'الأشكال الحلقية غالبًا رفيعة ورقيقة، حوالي خُمس قطر كرية الدم الحمراء، وفيها نقطة كروماتين أو اتنين. ممكن تبقى على حافة الكرية، ووجود أكتر من طفيل في نفس الكرية شائع. الكرية المصابة غالبًا مش بتكبر.' },
  clinical: { en: 'Untreated malaria can progress to severe forms that may be fatal in under 24 hours. Consider it in anyone with fever who has lived in or traveled to an area where malaria occurs.', ar: 'الملاريا من غير علاج ممكن توصل لأشكال شديدة ممكن تموّت في أقل من 24 ساعة. لازم تتحط في الحسبان عند أي حد عنده حمى وعاش أو سافر لمنطقة فيها ملاريا.' },
  source: dpdx('Malaria', 'malaria'),
};

import { hematologyNotes } from './clinicalNotesHematology';
import { parasitologyNotes } from './clinicalNotesParasitology';

export const clinicalNotes: Record<string, ClinicalNote> = {
  ...hematologyNotes,
  ...parasitologyNotes,
  'ascaris-egg-early-cell-division': ascarisFertile,
  'ascaris-infertile-egg': ascarisInfertile,
  'whipworm-trichuris-trichiura-egg': whipworm,
  'trichuris-whipworm-egg': whipworm,
  'whipworm-egg': whipworm,
  'hookworm-egg-stool-wet-mount': hookworm,
  'embryonated-hookworm-egg': hookworm,
  'pinworm-enterobius-vermicularis-eggs': {
    recognize: { en: 'Transparent, elongated to oval egg, 50 to 60 by 20 to 30 µm, slightly flattened on one side, usually partly embryonated when shed.', ar: 'بيضة شفافة مستطيلة لبيضاوية، مقاسها 50 لـ 60 في 20 لـ 30 ميكرومتر، مفلطحة شوية من جنب، وغالبًا بتبقى مجنّنة جزئيًا وقت ما تتفرز.' },
    clinical: { en: 'Often no symptoms. The typical symptom is itching around the anus, worse at night. Eggs are collected with cellulose tape pressed on the perianal skin in the morning before the first bowel movement (the tape test).', ar: 'غالبًا من غير أعراض. العرض المميز هو هرش حوالين فتحة الشرج، وبيزيد بالليل. البيض بيتجمع بشريط لاصق على جلد حوالين الشرج الصبح قبل أول دخول حمام (اختبار الشريط).' },
    source: dpdx('Enterobiasis', 'enterobiasis'),
  },
  'taenia-egg': {
    recognize: { en: 'Round egg, 30 to 35 µm across, with a radially striated shell and an inner oncosphere carrying six refractile hooks. Taenia eggs cannot be told apart from each other.', ar: 'بيضة مستديرة قطرها 30 لـ 35 ميكرومتر، قشرتها مخططة شعاعيًا، وجواها الأنكوسفير وفيه ست خطاطيف عاكسة للضوء. بيض أنواع التينيا مينفعش يتفرق عن بعضه.' },
    clinical: { en: 'Taenia saginata infection causes mild abdominal symptoms; the striking sign is passage of proglottids. With Taenia solium the important risk is cysticercosis.', ar: 'عدوى تينيا ساجيناتا أعراضها بطن خفيفة، والمميز خروج قطع الدودة (البروجلوتيدات). مع تينيا سوليوم الخطر المهم هو الكيسات الذنبية (cysticercosis).' },
    source: dpdx('Taeniasis', 'taeniasis'),
  },
  'liver-fluke-fasciola-egg': {
    recognize: { en: 'Broadly ellipsoid, operculated egg, 130 to 150 µm long by 60 to 90 µm wide, passed unembryonated in feces. It can be hard to tell from Fasciolopsis buski eggs.', ar: 'بيضة بيضاوية عريضة ولها غطاء (operculum)، طولها 130 لـ 150 ميكرومتر وعرضها 60 لـ 90، وبتطلع في البراز غير مجنّنة. ممكن يصعب تفريقها عن بيض فاسيولوبسيس.' },
    clinical: { en: 'The early phase, while the larva migrates through the liver, can cause abdominal pain, fever and liver enlargement. The chronic phase can inflame or block the bile ducts or gallbladder.', ar: 'المرحلة المبكرة وقت ما اليرقة بتتحرك في الكبد ممكن تسبب ألم بطن وحمى وتضخم كبد. المرحلة المزمنة ممكن تسبب التهاب أو انسداد في القنوات المرارية أو المرارة.' },
    source: dpdx('Fascioliasis', 'fascioliasis'),
  },
  'leishmania-in-a-skin-lesion-scraping': {
    recognize: { en: 'Amastigotes are round to oval, 1 to 5 µm long, with a large nucleus and a prominent kinetoplast. They live inside host macrophages.', ar: 'الأماستيجوت دائرية لبيضاوية، طولها 1 لـ 5 ميكرومتر، ولها نواة كبيرة وكينيتوبلاست واضح. بتعيش جوه الخلايا الأكولة (الماكروفاج).' },
    clinical: { en: 'Leishmaniasis is spread by sandfly bites and has cutaneous, mucosal and visceral forms. Visceral disease (kala-azar) causes fever, weight loss and an enlarged spleen and liver, with low blood counts.', ar: 'الليشمانيا بتنتقل بلدغة ذبابة الرمل، ولها أشكال جلدية ومخاطية وحشوية. الشكل الحشوي (الكالا آزار) بيسبب حمى ونزول وزن وتضخم طحال وكبد، مع نقص في عدّ الدم.' },
    source: dpdx('Leishmaniasis', 'leishmaniasis'),
  },
  'plasmodium-falciparum-ring-forms-in-red-blood-cells': falciparumRing,
  'plasmodium-falciparum-gametocyte-in-a-blood-smear': {
    recognize: { en: 'Gametocytes are crescent- or sausage-shaped, about 1.5 times the diameter of a red cell in length. The female (macrogametocyte) has darker blue cytoplasm and more concentrated chromatin than the male.', ar: 'الجاميتوسيت هلالي أو شكل سجق، طوله حوالي 1.5 مرة قطر كرية الدم الحمراء. الأنثوي (ماكروجاميتوسيت) سيتوبلازمه أزرق أغمق وكروماتينه أكتر تركيزًا من الذكري.' },
    clinical: falciparumRing.clinical,
    source: dpdx('Malaria', 'malaria'),
  },
  'sickle-cell-smear': {
    recognize: { en: 'Sickle cells (drepanocytes) are elongated, sometimes crescent-shaped red cells with pointed ends.', ar: 'الخلايا المنجلية كريات حمراء مستطيلة، وساعات هلالية الشكل، وليها أطراف مدببة.' },
    clinical: { en: 'Sickle cell disease is a genetic disorder caused by mutations in the hemoglobin genes. Hemoglobin S turns flexible red cells into rigid sickle-shaped cells that can block blood flow and cause pain and organ damage.', ar: 'مرض الأنيميا المنجلية اضطراب وراثي بسبب طفرات في جينات الهيموجلوبين. الهيموجلوبين S بيحوّل كريات الدم المرنة لكريات منجلية صلبة ممكن تسد الدم وتسبب ألم وتلف أعضاء.' },
    source: { title: 'NCBI Bookshelf: Peripheral Blood Smear; NHLBI: Sickle Cell Disease causes', url: 'https://www.nhlbi.nih.gov/health/sickle-cell-disease/causes' },
  },
  'target-cells': {
    recognize: { en: 'Target cells (codocytes) have a central disk of hemoglobin, a surrounding pale zone, and an outer rim of hemoglobin next to the membrane, so the cell looks like a target.', ar: 'خلايا الهدف (codocytes) فيها قرص هيموجلوبين في النص، وحواليه منطقة باهتة، وبعدين حلقة هيموجلوبين خارجية جنب الغشاء، فالخلية شكلها زي الهدف.' },
    clinical: { en: 'A target cell that appears only in one area of the slide is an artifact; real target cells are spread evenly over the whole slide.', ar: 'خلية الهدف اللي بتظهر في جزء واحد بس من الشريحة تبقى مصطنعة (artifact)، لكن خلايا الهدف الحقيقية بتبقى موزعة بالتساوي على الشريحة كلها.' },
    source: { title: 'NCBI Bookshelf: Peripheral Blood Smear', url: 'https://www.ncbi.nlm.nih.gov/books/NBK263/' },
  },
  'neisseria-gonorrhoeae-diplococci-gram-stain': {
    clinical: { en: 'On a urethral smear, Gram-negative intracellular diplococci (inside white cells) point to presumed gonococcal infection, which is often accompanied by chlamydial infection.', ar: 'في مسحة الإحليل، وجود ديبلوكوكات سالبة الجرام جوه الخلايا (جوه كرات الدم البيضاء) بيدل على عدوى سيلان مفترضة، وغالبًا بتكون معاها عدوى كلاميديا.' },
    source: { title: 'CDC STI Treatment Guidelines: Urethritis and Cervicitis', url: 'https://www.cdc.gov/std/treatment-guidelines/urethritis-and-cervicitis.htm' },
  },
  'mycobacterium-tuberculosis-acid-fast-stain': {
    clinical: { en: 'Sputum is smeared and stained to look for acid-fast bacilli (AFB), and M. tuberculosis complex is one kind of AFB. Smears are graded 1+ to 4+: the more AFB seen, the more infectious the patient.', ar: 'عينة البلغم بتتفرد وتتلون عشان نبحث عن العصيات الصامدة للحمض (AFB)، ومجموعة السل واحدة منهم. الشرائح بتتدرج من +1 لـ +4: كل ما العصيات أكتر، المريض أكتر عدوى.' },
    source: { title: 'CDC: Clinical and Laboratory Diagnosis of TB', url: 'https://cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html' },
  },
};

clinicalNotes['sickle-cell-anaemia-blood-smear-giemsa'] = clinicalNotes['sickle-cell-smear'];

// Same organism, same source: reuse a note for the other slides of it. Where the stage differs (e.g. cultured forms) only the clinical point is reused.
const alias = (ids: string[], from: string, clinicalOnly = false) => {
  const base = clinicalNotes[from];
  for (const id of ids) clinicalNotes[id] = clinicalOnly ? { clinical: base.clinical, source: base.source } : base;
};
alias(['taenia-egg-in-a-faecal-smear-ziehl-neelsen'], 'taenia-egg');
alias(['pinworm-egg-urine-microscopy'], 'pinworm-enterobius-vermicularis-eggs');
alias(['leishmania-tropica-259-19', 'leishmania-tropica-259-20'], 'leishmania-in-a-skin-lesion-scraping', true);
alias(['plasmodium-257-33', 'plasmodium-257-34', 'plasmodium-259-16', 'plasmodium-falciparum-trophozoites'], 'plasmodium-falciparum-ring-forms-in-red-blood-cells', true);
alias(['malaria-smear'], 'plasmodium-falciparum-gametocyte-in-a-blood-smear');
alias(['giant-roundworm-ascaris-259-23', 'giant-roundworm-ascaris-263-20', 'ascaris-larva-hatching', 'ascaris-section', 'ascaris-female-section-200x'], 'ascaris-egg-early-cell-division', true);
