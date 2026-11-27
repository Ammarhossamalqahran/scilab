// After the Vite build, write one HTML file per route with its own title and share-card tags.
// Scrapers that do not run JavaScript (WhatsApp, Telegram, Facebook) read these files.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const html = readFileSync('dist/index.html', 'utf8');
const base = 'https://scilab-wheat.vercel.app';
const pages = {
  microscope: ['Virtual microscope | SciLab / المجهر الافتراضي', 'Examine hundreds of real prepared slides with adjustable magnification, focus and light. / افحص مئات الشرائح المجهرية الحقيقية مع التحكم في التكبير والبؤرة والإضاءة.'],
  exams: ['Practical exam practice | SciLab / تدريب الامتحان العملي', 'Practise identifying slides and structures with practical-exam style questions. / تدرّب على التعرف على الشرائح والتراكيب بأسئلة بنمط الامتحان العملي.'],
  study: ['Specimen flashcards | SciLab / فلاش كاردز العينات', 'Study microscope specimens with flashcards. / ذاكر عينات المجهر بالفلاش كاردز.'],
  daily: ['Specimen of the day | SciLab / عينة اليوم', 'A new microscope specimen every day. / عينة مجهرية جديدة كل يوم.'],
  compare: ['Compare slides | SciLab / مقارنة العينات', 'Put two microscope specimens side by side. / حط عينتين مجهريتين جنب بعض.'],
  challenge: ['60-second challenge | SciLab / تحدي الـ 60 ثانية', 'Name as many specimens as you can in one minute. / اعرف أكبر عدد من العينات في دقيقة.'],
  spot: ['Spot test | SciLab / سبوت تيست', 'Practical-style spot test: one slide at a time with a timer, then your score and mistakes. / سبوت تيست زي العملي: شريحة كل مرة بوقت محدد، وبعدها نتيجتك وغلطاتك.'],
  schemas: ['Labelled diagrams (schemas) | SciLab / الرسومات المسمّاة', 'Study labelled biology diagrams and slide drawings for practical exams. / ادرس الرسومات المسمّاة وشرائح الرسم لامتحان العملي.'],
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
for (const [route, [title, desc]] of Object.entries(pages)) {
  let out = html
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(title)}`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(desc)}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${base}/${route}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${base}/${route}`);
  mkdirSync(`dist/${route}`, { recursive: true });
  writeFileSync(`dist/${route}/index.html`, out);
}
console.log('route pages:', Object.keys(pages).join(', '));
