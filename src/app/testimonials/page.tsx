import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Client Testimonials | Shalom Car Detailing',
  description:
    'Watch real video testimonials from our satisfied clients. See why Shalom Car Detailing is the premium choice for PPF, Ceramic Coating, and more.',
};

/* ── YouTube Shorts Data ── */
const TESTIMONIALS = [
  { id: 'NIgrBDNTxSg', name: 'Client Review #1' },
  { id: 'EwanNiUaRTI', name: 'Client Review #2' },
  { id: '40Hz21B-sdw', name: 'Client Review #3' },
  { id: 'GxpjR2HLAyE', name: 'Client Review #4' },
  { id: '-haM5Ww_KzY', name: 'Client Review #5' },
  { id: 'd2l32c6jkOA', name: 'Client Review #6' },
];

export default function TestimonialsPage() {
  return (
    <main className="testimonials-page">
      {/* ── Red Accent Top Line ── */}
      <div className="testimonials-page__accent-line" aria-hidden="true" />

      {/* ── Navigation ── */}
      <nav className="testimonials-page__nav">
        <Link href="/" className="testimonials-page__back-link">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          BACK TO SHOWROOM
        </Link>
      </nav>

      {/* ── Cinematic Hero Header ── */}
      <header className="testimonials-page__hero">
        <p className="testimonials-page__eyebrow">SHALOM CAR DETAILING</p>
        <h1 className="testimonials-page__title">CLIENT TESTIMONIALS</h1>
        <p className="testimonials-page__subtitle">
          Real stories from our satisfied clients — hear it directly from those
          who trust us with their prized vehicles.
        </p>
        <div className="testimonials-page__title-underline" aria-hidden="true" />
      </header>

      {/* ── Video Grid ── */}
      <section className="testimonials-page__grid">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="testimonials-page__card">
            {/* Glassmorphic border glow */}
            <div className="testimonials-page__card-glow" aria-hidden="true" />

            {/* 9:16 iframe embed — YouTube Shorts in full quality */}
            <div className="testimonials-page__video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${t.id}?rel=0&modestbranding=1&playsinline=1&vq=hd1080&loop=1`}
                title={t.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="testimonials-page__iframe"
              />
            </div>

            {/* Card Label */}
            <div className="testimonials-page__card-label">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="#E50914"
                className="testimonials-page__play-icon"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>{t.name}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ── Bottom CTA ── */}
      <section className="testimonials-page__cta">
        <p className="testimonials-page__cta-text">
          Ready to experience the Shalom difference?
        </p>
        <Link href="/" className="testimonials-page__cta-btn">
          EXPLORE OUR SERVICES →
        </Link>
      </section>
    </main>
  );
}
