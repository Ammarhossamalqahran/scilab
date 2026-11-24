export type RouteKey = 'home' | 'microscope' | 'exams' | 'schemas';
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
};
