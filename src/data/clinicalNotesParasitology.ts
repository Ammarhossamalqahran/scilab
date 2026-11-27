import type { ClinicalNote } from './clinicalNotes';

// Batch 2: parasitology slides. Every sentence comes from the cited CDC DPDx page.
const dp = (name: string, slug: string) => ({ title: `CDC DPDx: ${name}`, url: `https://www.cdc.gov/dpdx/${slug}/index.html` });

const giardia: ClinicalNote = {
  recognize: { en: 'Cysts are oval to ellipsoid, 8 to 19 µm; mature cysts have 4 nuclei. Trophozoites are pear-shaped, 10 to 20 µm, with 2 large nuclei and sucking disks.', ar: 'الأكياس بيضاوية، من 8 لـ 19 ميكرومتر، والناضجة فيها 4 أنوية. الطور المتغذي كمثري الشكل، 10 لـ 20 ميكرومتر، وفيه نواتين كبار وقرص ماص.' },
  clinical: { en: 'From no symptoms to severe diarrhea and malabsorption. Acute giardiasis causes diarrhea, abdominal pain, bloating, nausea and vomiting, usually for 1 to 3 weeks. Infection is by swallowing cysts in contaminated water or food.', ar: 'من غير أعراض لإسهال شديد وسوء امتصاص. الحاد بيسبب إسهال وألم بطن وانتفاخ وغثيان وقيء، وغالبًا بيستمر 1 لـ 3 أسابيع. العدوى بابتلاع الأكياس من مياه أو أكل ملوث.' },
  source: dp('Giardiasis', 'giardiasis'),
};
const taeniaSaginata: ClinicalNote = {
  recognize: { en: 'The scolex of T. saginata has four large suckers but no rostellum and no hooks.', ar: 'رأس الدودة الشريطية البقرية (T. saginata) فيه 4 ممصات كبيرة وبدون روستلوم وبدون خطاطيف.' },
  clinical: { en: 'T. saginata causes only mild abdominal symptoms. The most striking feature is the passing of proglottids. Occasionally migrating proglottids cause appendicitis or cholangitis.', ar: 'بتسبب أعراض بطن خفيفة بس. أبرز علامة خروج القطع (البروجلوتيدات). أحيانًا القطع المتحركة بتسبب التهاب الزايدة أو القنوات الصفراوية.' },
  source: dp('Taeniasis', 'taeniasis'),
};
const toxocara: ClinicalNote = {
  recognize: { en: 'Toxocara eggs are golden, spherical to slightly pear-shaped, thick-shelled, with a pitted surface. T. canis eggs are slightly larger (80 to 85 µm).', ar: 'بيض التوكسوكارا ذهبي اللون، كروي لشبه كمثري، قشرته سميكة وسطحه محفّر. بيض T. canis أكبر شوية (80 لـ 85 ميكرومتر).' },
  clinical: { en: 'Humans are paratenic hosts: the eggs are found only in the feces of dogs and cats, so stool eggs do not diagnose human cases. Toxocariasis shows as visceral larva migrans (usually with hypereosinophilia) or ocular larva migrans, which can cause permanent visual damage.', ar: 'الإنسان عائل ناقل مش نهائي: البيض بيلاقوه في براز الكلاب والقطط بس، فالبيض في براز الإنسان مش بيشخّص. التوكسوكارا بتظهر كهجرة يرقات حشوية (غالبًا مع زيادة كبيرة في الحمضات) أو هجرة يرقات عينية ممكن تسبب ضرر دائم في النظر.' },
  source: dp('Toxocariasis', 'toxocariasis'),
};
const trichinella: ClinicalNote = {
  recognize: { en: 'Adult worms live in the gut; the larvae are found encysted (encapsulated) in muscle tissue, which is how biopsies show them.', ar: 'الديدان البالغة بتعيش في الأمعاء، واليرقات بتتلاقي محوصلة في نسيج العضلة، وده اللي بتظهره خزعة العضلة.' },
  clinical: { en: 'Larval migration into muscle can cause facial edema, fever, myalgias, rashes and eosinophilia. Rare life-threatening forms include myocarditis, central nervous system involvement and pneumonitis.', ar: 'هجرة اليرقات للعضلات ممكن تسبب ورم حول العين والوجه وحرارة وآلام عضلات وطفح وزيادة الحمضات. من الأشكال النادرة الخطيرة التهاب عضلة القلب وإصابة الجهاز العصبي المركزي والتهاب الرئة.' },
  source: dp('Trichinellosis', 'trichinellosis'),
};
const louse: ClinicalNote = {
  recognize: { en: 'The adult head louse is about the size of a sesame seed, has 6 legs with claws, and is tan to grayish-white. Nits (eggs) are 0.8 by 0.3 mm, oval, usually yellow to white, cemented to the hair shaft.', ar: 'قمل الرأس البالغ في حجم حبة السمسم تقريبًا، وله 6 أرجل بمخالب، ولونه بني فاتح لرمادي مبيض. الصِئبان (البيض) 0.8 × 0.3 مم، بيضاوية، غالبًا صفراء لبيضاء، وملتصقة بالشعرة.' },
  clinical: { en: 'Most head lice infestations have no symptoms. When present they include a tickling feeling, itching from an allergic reaction to louse saliva, and irritability. Finding many nits within 6 mm of the scalp strongly suggests active infestation.', ar: 'أغلب حالات قمل الرأس من غير أعراض. لو ظهرت بتكون إحساس دغدغة وحكة من حساسية للعاب القملة وعصبية. وجود صِئبان كتير في حدود 6 مم من فروة الرأس بيرجّح إصابة نشطة.' },
  source: dp('Pediculosis', 'pediculosis'),
};
const hookwormClin = {
  en: 'Often no symptoms. Worms attached to the gut wall can cause abdominal pain, and blood loss at the attachment site can cause iron deficiency anemia, especially in heavy infections.',
  ar: 'غالبًا من غير أعراض. الديدان الملتصقة بجدار الأمعاء ممكن تسبب ألم بطن، ونزف مكان الالتصاق ممكن يسبب أنيميا نقص الحديد، خصوصًا في العدوى الشديدة.',
};

export const parasitologyNotes: Record<string, ClinicalNote> = {
  'giardia-intestinalis-259-17': giardia,
  'giardia-intestinalis-259-18': giardia,
  'giardia-lamblia-cyst-in-a-dog-faecal-smear-lugol-s-iodine': { recognize: giardia.recognize, source: giardia.source },
  'entamoeba-histolytica-251-32': {
    recognize: { en: 'Mature E. histolytica/E. dispar cysts have 4 nuclei with a central karyosome and fine peripheral chromatin, 12 to 15 µm. Trophozoites have one nucleus and ground-glass cytoplasm, usually 15 to 20 µm.', ar: 'أكياس E. histolytica/E. dispar الناضجة فيها 4 أنوية بنُوَيّة مركزية وكروماتين محيطي رفيع، 12 لـ 15 ميكرومتر. الطور المتغذي فيه نواة واحدة وسيتوبلازم زجاجي، غالبًا 15 لـ 20 ميكرومتر.' },
    clinical: { en: 'Most infections limited to the gut lumen have no symptoms. Invasion of the mucosa causes amebic colitis with severe dysentery. Amebic liver abscess is the most common extraintestinal form.', ar: 'أغلب العدوى المحصورة في تجويف الأمعاء من غير أعراض. غزو الغشاء المخاطي بيسبب التهاب قولون أميبي بدوسنتاريا شديدة. خراج الكبد الأميبي أشهر شكل خارج الأمعاء.' },
    source: dp('Amebiasis', 'amebiasis'),
  },
  'trichomonas-vaginalis-gram-stain': {
    recognize: { en: 'Trophozoites are pear-shaped, 7 to 30 µm, with five flagella (four at the front, one along the undulating membrane) and a large nucleus at the wide end.', ar: 'الطور المتغذي كمثري الشكل، 7 لـ 30 ميكرومتر، وله 5 أسواط (4 قدام وواحد على الغشاء المتموج) ونواة كبيرة عند الطرف العريض.' },
    clinical: { en: 'In women it is often symptomatic, with vaginitis and purulent discharge. In men it is often asymptomatic. A wet mount can find actively motile organisms but is relatively insensitive; culture is the most sensitive.', ar: 'عند السيدات غالبًا بتظهر أعراض: التهاب مهبل وإفراز صديدي. عند الرجال غالبًا من غير أعراض. الفحص الرطب بيلاقي الطفيلي المتحرك بس حساسيته قليلة؛ الزرع هو الأحسّ.' },
    source: dp('Trichomoniasis', 'trichomoniasis'),
  },
  'beef-tapeworm-taenia-saginata-scolex-and-neck': taeniaSaginata,
  'fish-tapeworm-diphyllobothrium-latum-egg-with-operculum': {
    recognize: { en: 'Eggs are oval, 55 to 75 by 40 to 50 µm, with an operculum at one end and a small knob at the other. They pass in stool unembryonated.', ar: 'البيض بيضاوي، 55 لـ 75 × 40 لـ 50 ميكرومتر، وله غطاء (operculum) في طرف ونتوء صغير في الطرف التاني. بيخرج في البراز غير متجنّن.' },
    clinical: { en: 'Infection can last up to 25 years. Most are asymptomatic. Migrating proglottids can cause cholecystitis or cholangitis, and rarely massive infection causes intestinal obstruction.', ar: 'العدوى ممكن تستمر لحد 25 سنة. أغلبها من غير أعراض. القطع المتحركة ممكن تسبب التهاب المرارة أو القنوات الصفراوية، ونادرًا العدوى الكبيرة بتسبب انسداد معوي.' },
    source: dp('Diphyllobothriasis', 'diphyllobothriasis'),
  },
  'echinococcus-granulosus-protoscolex-with-hooks': {
    recognize: { en: 'Protoscolices sit inside brood capsules in the hydatid cyst, and have a visible row of hooklets.', ar: 'الرؤيسات الأولية بتكون جوه الكبسولات الحاضنة في الكيس العدري، وفيها صف خطاطيف واضح.' },
    clinical: { en: 'E. granulosus infections often stay silent for years until cysts grow large enough to cause symptoms. Liver and lungs are the most common sites.', ar: 'عدوى E. granulosus كثير بتفضل صامتة سنين لحد ما الأكياس تكبر كفاية تسبب أعراض. الكبد والرئة أشهر الأماكن.' },
    source: dp('Echinococcosis', 'echinococcosis'),
  },
  'hymenolepis-diminuta-egg-rat-tapeworm': {
    recognize: { en: 'Eggs are round to slightly oval, 70 to 85 by 60 to 80 µm, with a striated outer membrane, and the oncosphere has six hooks. There are no polar filaments.', ar: 'البيض مستدير أو بيضاوي خفيف، 70 لـ 85 × 60 لـ 80 ميكرومتر، بغشاء خارجي مخطط، والجنين فيه 6 خطاطيف. مفيش خيوط قطبية.' },
    clinical: { en: 'H. diminuta infections are most often asymptomatic.', ar: 'عدوى H. diminuta غالبًا من غير أعراض.' },
    source: dp('Hymenolepiasis', 'hymenolepiasis'),
  },
  'toxocara-egg-with-a-developed-larva': toxocara,
  'toxocara-canis-egg': toxocara,
  'toxocara-cati-egg': toxocara,
  'trichinella-in-muscle-265-16': trichinella,
  'trichinella-spiralis-40x-objective': trichinella,
  'strongyloides-stercoralis-larva-stool-wet-mount': {
    clinical: { en: 'Acute infection may show an itchy rash where larvae enter the skin, then cough, diarrhea and abdominal pain. Chronic infection is usually asymptomatic. Hyperinfection and dissemination are most often linked to high-dose corticosteroids.', ar: 'العدوى الحادة ممكن تبدأ بطفح محكّ مكان دخول اليرقات في الجلد، ثم كحة وإسهال وألم بطن. المزمنة غالبًا من غير أعراض. فرط العدوى والانتشار بيرتبطوا غالبًا بالجرعات العالية من الكورتيزون.' },
    source: dp('Strongyloidiasis', 'strongyloidiasis'),
  },
  'hookworm-ancylostoma-duodenale-female': { clinical: hookwormClin, source: dp('Hookworm', 'hookworm') },
  'itch-mite-247-32a': {
    recognize: { en: 'Adult female Sarcoptes scabiei mites are 0.30 to 0.45 mm long and live in the skin, usually found in skin scrapings.', ar: 'أنثى عثة الجرب Sarcoptes scabiei طولها 0.30 لـ 0.45 مم وبتعيش في الجلد، وغالبًا بتتلاقي في كشط الجلد.' },
    clinical: { en: 'Mites burrow into the upper skin layer and cause a rash, most often between the fingers and at the wrists. Confirm by finding mites, eggs or feces in a skin scraping taken at a burrow.', ar: 'العثة بتحفر في الطبقة العليا من الجلد وبتسبب طفح، غالبًا بين الأصابع وعند الرسغ. التأكيد بإيجاد العثة أو البيض أو البراز في كشط الجلد من نهاية النفق.' },
    source: dp('Scabies', 'scabies'),
  },
  'head-louse-250-17': louse,
  'head-louse-251-27': louse,
  'head-louse-251-28': louse,
  'female-human-head-louse': louse,
  'head-louse-egg-nit-on-a-hair': louse,
  'babesia-canis-in-dog-red-blood-cells': {
    recognize: { en: 'Babesia can look like Plasmodium falciparum, but the parasites vary in shape and size, can be vacuolated, and make no pigment.', ar: 'بابيزيا ممكن تشبه Plasmodium falciparum، بس الطفيليات متفاوتة الشكل والحجم، وممكن تكون مفرّغة، ومبتعملش صبغة.' },
    source: dp('Babesiosis', 'babesiosis'),
  },
};
