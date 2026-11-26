export type RouteKey = 'home' | 'microscope' | 'exams' | 'schemas' | 'study' | 'daily' | 'compare' | 'challenge';
type Meta = { title: string; description: string };
export const routeMeta: Record<RouteKey, { en: Meta; ar: Meta }> = {
  home: {
    en: { title: 'SciLab | Virtual microscope and practical exams', description: 'Explore hundreds of real microscope slides, practise lab exams and study labelled diagrams, in Arabic and English.' },
    ar: { title: 'SciLab | المجهر الافتراضي والامتحانات العملية', description: 'تصفح مئات الشرائح المجهرية الحقيقية، وتدرّب على الامتحانات العملية، وادرس الرسومات المسمّاة بالعربية والإنجليزية.' },
  },
  microscope: {
    en: { title: 'Virtual microscope | SciLab', description: 'Examine hundreds of real prepared slides with adjustable magnification, focus and light, in Arabic and English.' },
    ar: { title: 'المجهر الافتراضي | SciLab', description: 'افحص مئات الشرائح المجهرية الحقيقية مع التحكم في التكبير والبؤرة والإضاءة، بالعربية والإنجليزية.' },
  },
  exams: {
    en: { title: 'Practical exam practice | SciLab', description: 'Practise identifying slides and structures with practical-exam style questions, in Arabic and English.' },
    ar: { title: 'تدريب الامتحان العملي | SciLab', description: 'تدرّب على التعرف على الشرائح والتراكيب بأسئلة بنمط الامتحان العملي، بالعربية والإنجليزية.' },
  },
  schemas: {
    en: { title: 'Labelled diagrams (schemas) | SciLab', description: 'Study labelled biology diagrams and slide drawings for practical exams, in Arabic and English.' },
    ar: { title: 'الرسومات المسمّاة (الاسكيما) | SciLab', description: 'ادرس الرسومات المسمّاة وشرائح الرسم لامتحان العملي، بالعربية والإنجليزية.' },
  },
  study: {
    en: { title: 'Specimen flashcards | SciLab', description: 'Study microscope specimens with flashcards. Cards you miss come back, in Arabic and English.' },
    ar: { title: 'فلاش كاردز العينات | SciLab', description: 'ذاكر عينات المجهر بالفلاش كاردز. الكروت اللي بتغلط فيها بترجعلك، بالعربية والإنجليزية.' },
  },
  daily: {
    en: { title: 'Specimen of the day | SciLab', description: 'A new microscope specimen every day, with a share card for your story.' },
    ar: { title: 'عينة اليوم | SciLab', description: 'عينة مجهرية جديدة كل يوم، مع كارت جاهز للمشاركة في الستوري.' },
  },
  compare: {
    en: { title: 'Compare slides | SciLab', description: 'Put two microscope specimens side by side and compare their photos and facts.' },
    ar: { title: 'مقارنة العينات | SciLab', description: 'حط عينتين مجهريتين جنب بعض وقارن صورهم ومعلوماتهم.' },
  },
  challenge: {
    en: { title: '60-second challenge | SciLab', description: 'Name as many microscope specimens as you can in one minute. Beat the Doctor\'s score.' },
    ar: { title: 'تحدي الـ 60 ثانية | SciLab', description: 'اعرف أكبر عدد من العينات المجهرية في دقيقة. اغلب درجة الدكتور.' },
  },
};
