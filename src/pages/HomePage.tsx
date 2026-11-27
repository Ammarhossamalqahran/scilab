import { Link } from 'react-router-dom';
import { usePreferences } from '../app/PreferencesContext';
import { specimens } from '../data/scientificData';
import { StudentOpinions } from '../components/StudentOpinions';
import { RequestBox } from '../components/RequestBox';
import { specimenMedia } from '../data/specimenMedia';

const featuredSlides = [
  { id: 'kidney-cortex', label: { en: 'Kidney cortex', ar: 'قشرة الكلية' } },
  { id: 'compact-bone', label: { en: 'Compact bone', ar: 'عظم كثيف' } },
  { id: 'blood-smear', label: { en: 'Blood smear', ar: 'لطاخة دم' } },
  { id: 'plasmodium-257-33', label: { en: 'Plasmodium', ar: 'بلازموديوم' } },
];

function ArrowMark() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11m-5-5 5 5-5 5" /></svg>;
}

export function HomePage() {
  const { t, locale } = usePreferences();
  const isArabic = locale === 'ar';
  const slideCount = new Intl.NumberFormat(isArabic ? 'ar-EG' : 'en-US').format(specimens.length);

  return (
    <div className="page page-home">
      <section className="home-hero">
        <div className="hero-copy">
          <div className="hero-brand"><img src="/scilab-logo.svg" alt="SciLab" className="hero-brand-logo" /><img src="/scilab-character.jpg" alt={isArabic ? 'شخصية SciLab' : 'SciLab character'} className="hero-brand-face" /></div>
          <div className="eyebrow">{t('heroEyebrow')}</div>
          <h1>{t('heroTitle')}</h1>
          <p className="hero-description">{t('heroDescription')}</p>
          <div className="hero-actions">
            <Link to="/microscope" className="button button-primary">{t('enterLab')}<ArrowMark /></Link>
          </div>
          <p className="hero-footnote">{isArabic ? 'صور الشرائح محفوظة داخل الموقع وتظهر مباشرة.' : 'Prepared-slide photos are included and open right here.'}</p>
        </div>

        <div className="hero-visual">
          <figure className="hero-microscope-photo">
            <img src="/specimens/microscope-apparatus.webp" alt={isArabic ? 'مجهر ضوئي حقيقي على منضدة معمل' : 'A compound light microscope on a laboratory bench'} />
            <figcaption>
              <span>{isArabic ? 'مجهر ضوئي · معمل أحياء' : 'Compound microscope · biology lab'}</span>
              <a href="https://commons.wikimedia.org/wiki/File:Microscope_01.jpg" target="_blank" rel="noreferrer">{isArabic ? 'الصورة: Abdsomod' : 'Photo: Abdsomod'}</a>
            </figcaption>
          </figure>
          <div className="home-slides-preview">
            <div className="preview-heading">
              <span>{isArabic ? `${slideCount} عينة مجهرية` : `${slideCount} microscope slides`}</span>
              <Link to="/microscope">{isArabic ? 'كل العينات' : 'View all slides'}<ArrowMark /></Link>
            </div>
            <div className="preview-images">
              {featuredSlides.map((slide) => (
                <Link key={slide.id} to={`/microscope?slide=${slide.id}`} className="preview-slide" aria-label={`${slide.label[locale]} — ${isArabic ? 'افتح الميكروسكوب' : 'open microscope'}`}>
                  <img src={specimenMedia[slide.id].src} alt="" loading="lazy" />
                  <span>{slide.label[locale]}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="module-section" aria-labelledby="module-title">
        <div className="section-heading">
          <div>
            <div className="eyebrow eyebrow-muted">{t('subjectLabel')}</div>
            <h2 id="module-title">{t('selectModule')}</h2>
          </div>
        </div>
        <div className="module-grid">
          <Link to="/microscope" className="module-card module-card--microscope">
            <img className="module-card-photo" src={specimenMedia['blood-smear'].src} alt="" loading="lazy" />
            <div className="module-card-bottom"><div><h3>{t('microscopeTitle')}</h3><p>{t('microscopeDescription')}</p></div><ArrowMark /></div>
          </Link>
          <Link to="/exams" className="module-card module-card--exam">
            <img className="module-card-photo" src={specimenMedia['sickle-cell-smear'].src} alt="" loading="lazy" />
            <div className="module-card-bottom"><div><h3>{t('examRoomTitle')}</h3><p>{t('examRoomDescription')}</p></div><ArrowMark /></div>
          </Link>
          <Link to="/schemas" className="module-card module-card--schemas">
            <img className="module-card-photo" src={specimenMedia['leaf-stomata'].src} alt="" loading="lazy" />
            <div className="module-card-bottom"><div><h3>{t('schemasTitle')}</h3><p>{t('schemasDescription')}</p></div><ArrowMark /></div>
          </Link>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="contact-title">
        <div className="eyebrow eyebrow-muted">{isArabic ? 'تواصل معنا' : 'CONTACT'}</div>
        <h2 id="contact-title">{isArabic ? 'عندك شكوى أو اقتراح؟' : 'Have a complaint or a suggestion?'}</h2>
        <p>{isArabic ? 'لو لقيت خطأ في المحتوى، أو عايز تضيف عينة أو ميزة، ابعتلي وأنا هراجعها.' : 'Found a mistake, or want a specimen or feature added? Send it to me and I will review it.'}</p>
        <ul className="contact-list">
          <li><span>{isArabic ? 'الإيميل' : 'Email'}</span><a href="mailto:amarhossam0000@gmail.com">amarhossam0000@gmail.com</a></li>
          <li><span>{isArabic ? 'موبايل' : 'Phone'}</span><a href="tel:+201102353779" dir="ltr">01102353779</a></li>
          <li><span>{isArabic ? 'موبايل' : 'Phone'}</span><a href="tel:+201080314586" dir="ltr">01080314586</a></li>
        </ul>
      </section>

      <RequestBox />

      <section className="doctors-section" aria-labelledby="doctors-title">
        <div className="eyebrow eyebrow-muted">{isArabic ? 'آراء' : 'FEEDBACK'}</div>
        <h2 id="doctors-title">{isArabic ? 'آراء الدكاترة' : "Doctors' opinions"}</h2>
        <div className="doctors-grid">
          <figure className="doctor-quote">
            <blockquote dir="ltr" lang="en">"Good job; I encourage you to do more and more."</blockquote>
            <figcaption dir="ltr" lang="en"><b>Dr. Asmaa Khamis</b><span>Fayoum University (Faculty of Science)</span></figcaption>
          </figure>
          <figure className="doctor-quote">
            <blockquote dir="ltr" lang="en">"Your website looks great."</blockquote>
            <figcaption dir="ltr" lang="en"><b>Dr. Mai Ali Mwaheb</b><span>Associate Professor of Microbiology (Mycology), Botany Department, Faculty of Science, Fayoum University</span></figcaption>
          </figure>
          <figure className="doctor-quote">
            <blockquote dir="ltr" lang="en">"The site is very useful for medical and science students, and it took me back 13 years to my college days."</blockquote>
            <figcaption dir="ltr" lang="en"><b>Dr. Menna</b><span>Clinical laboratory doctor</span></figcaption>
          </figure>
        </div>
      </section>

      <StudentOpinions />

      <footer className="page-footer"><span>{isArabic ? 'كلية العلوم · عملي الأحياء' : 'Faculty of Science · Biology practical'}</span><span>{isArabic ? 'صور مجهرية تعليمية' : 'Photomicrographs for teaching'}</span></footer>
    </div>
  );
}
