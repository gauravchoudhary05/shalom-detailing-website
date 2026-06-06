import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { services, getServiceById, getAllServiceIds } from '@/data/services';
import { ServicePageNavbar } from '@/components/ui/ServicePageNavbar';
import { ServicePageCTA } from '@/components/ui/ServicePageCTA';

// ─── Static Generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: 'Service Not Found | Shalom' };
  return {
    title: `${service.fullName} | Shalom Car Detailing`,
    description: service.tagline,
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  return (
    <main
      id="service-detail-page"
      style={{ minHeight: '100vh', background: '#000', color: '#fff', overflowX: 'hidden' }}
    >
      <ServicePageNavbar currentService={service.fullName} />

      {/* ── HERO HEADER ─────────────────────────────────────────────────── */}
      <header
        style={{
          position: 'relative',
          paddingTop: '160px',
          paddingBottom: '100px',
          paddingLeft: 'clamp(24px, 6vw, 120px)',
          paddingRight: 'clamp(24px, 6vw, 120px)',
          overflow: 'hidden',
        }}
      >
        {/* Red top border glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent 0%, #E50914 30%, #E50914 70%, transparent 100%)',
            opacity: 0.9,
          }}
        />
        {/* Radial background glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse at center, rgba(229,9,20,0.08) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          {/* Eyebrow */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: '#E50914',
              marginBottom: '20px',
            }}
          >
            {service.shortName}
          </p>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(42px, 7vw, 96px)',
              fontWeight: 200,
              letterSpacing: '-2px',
              lineHeight: '0.95',
              color: '#fff',
              marginBottom: '28px',
              textTransform: 'uppercase',
            }}
          >
            {service.fullName}
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(16px, 2vw, 22px)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.6,
              maxWidth: '640px',
            }}
          >
            {service.tagline}
          </p>
        </div>
      </header>

      {/* ── CONTENT BODY ────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 clamp(24px, 6vw, 80px) 140px',
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
        }}
      >

        {/* INTRODUCTION */}
        {service.introduction.length > 0 && (
          <Section title="Overview">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {service.introduction.map((para, i) => (
                <p
                  key={i}
                  className="text-lg md:text-xl text-white/90 leading-relaxed"
                  style={{ fontWeight: 300 }}
                >
                  {para}
                </p>
              ))}
            </div>
          </Section>
        )}

        {/* KEY BENEFITS */}
        {service.keyBenefits && service.keyBenefits.length > 0 && (
          <Section title="Key Benefits">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none', padding: 0, margin: 0 }}>
              {service.keyBenefits.map((benefit, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: '3px',
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7L5.5 10L11.5 4" stroke="#E50914" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-lg text-white/80" style={{ lineHeight: 1.75, fontWeight: 300 }}>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* WHY CHOOSE */}
        {service.whyChoose && service.whyChoose.length > 0 && (
          <Section title="Why Choose Us">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {service.whyChoose.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px 28px 24px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.035)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '2px',
                      background: '#E50914',
                      marginBottom: '18px',
                      opacity: 0.8,
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '14px',
                      fontWeight: 700,
                      letterSpacing: '0.5px',
                      color: '#fff',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p
                    className="text-base md:text-lg text-white/70 leading-relaxed"
                    style={{ fontWeight: 300 }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* SERVICES INCLUDED (object array — e.g. interior-modification) */}
        {service.servicesIncluded && service.servicesIncluded.length > 0 && (
          <Section title="Services Included">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {service.servicesIncluded.map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px 28px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: '#fff',
                      marginBottom: '10px',
                    }}
                  >
                    {item.heading}
                  </h3>
                  <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* SERVICES INCLUDED LIST (string array — e.g. detailing) */}
        {service.servicesIncludedList && service.servicesIncludedList.length > 0 && (
          <Section title="Services Included">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {service.servicesIncludedList.map((item, i) => (
                <Badge key={i}>{item}</Badge>
              ))}
            </div>
          </Section>
        )}

        {/* WARRANTY PLANS */}
        {service.warrantyPlans && service.warrantyPlans.length > 0 && (
          <Section title="Warranty Plans">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {service.warrantyPlans.map((plan, i) => (
                <Badge key={i} accent>{plan}</Badge>
              ))}
            </div>
          </Section>
        )}

        {/* ADDITIONAL OPTIONS */}
        {service.additionalOptions && service.additionalOptions.length > 0 && (
          <Section title="Additional Options">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {service.additionalOptions.map((opt, i) => (
                <Badge key={i}>{opt}</Badge>
              ))}
            </div>
          </Section>
        )}

        {/* IDEAL FOR */}
        {service.idealFor && service.idealFor.length > 0 && (
          <Section title="Ideal For">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', padding: 0, margin: 0 }}>
              {service.idealFor.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: '#E50914', fontSize: '18px', lineHeight: 1, flexShrink: 0, marginTop: '1px' }} aria-hidden="true">—</span>
                  <span style={{ fontSize: '15px', lineHeight: 1.75, color: 'rgba(255,255,255,0.72)', fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* IMPORTANT NOTES */}
        {service.importantNotes && service.importantNotes.length > 0 && (
          <Section title="Important Notes">
            <div
              style={{
                padding: '28px 32px',
                borderRadius: '12px',
                background: 'rgba(229,9,20,0.04)',
                border: '1px solid rgba(229,9,20,0.15)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {service.importantNotes.map((note, i) => (
                <p
                  key={i}
                  className="text-base md:text-lg text-white/60"
                  style={{
                    lineHeight: 1.8,
                    fontWeight: 300,
                    paddingLeft: '16px',
                    borderLeft: '2px solid rgba(229,9,20,0.3)',
                  }}
                >
                  {note}
                </p>
              ))}
            </div>
          </Section>
        )}

        {/* PRICING + CTA */}
        <section aria-labelledby="pricing-heading">
          <div
            style={{
              padding: '52px clamp(24px, 5vw, 64px)',
              borderRadius: '16px',
              background: 'linear-gradient(145deg, rgba(14,14,18,0.98) 0%, rgba(8,8,11,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 0 80px rgba(229,9,20,0.05)',
            }}
          >
            {/* Pricing */}
            <div style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <p
                id="pricing-heading"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '14px',
                }}
              >
                Starting Price
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  fontWeight: 700,
                  letterSpacing: '-1.5px',
                  lineHeight: 1,
                  background: 'linear-gradient(135deg, #ffffff 30%, #E50914 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '12px',
                }}
              >
                {service.pricing.startingAt}
              </p>
              <p
                style={{
                  fontSize: '12px',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.35)',
                  fontWeight: 300,
                }}
              >
                {service.pricing.disclaimer}
              </p>
            </div>

            {/* CTA Button (client island) */}
            <ServicePageCTA serviceName={service.fullName} />
          </div>
        </section>

      </div>
    </main>
  );
}

// ─── Sub-components (server, no state) ───────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span aria-hidden="true" style={{ display: 'block', width: '24px', height: '1px', background: '#E50914', opacity: 0.7, flexShrink: 0 }} />
        <h2
          id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#E50914',
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Badge({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '8px 18px',
        borderRadius: '6px',
        fontFamily: 'var(--font-heading)',
        fontSize: '11px',
        fontWeight: 600,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: accent ? '#fff' : 'rgba(255,255,255,0.7)',
        background: accent ? 'rgba(229,9,20,0.12)' : 'rgba(255,255,255,0.05)',
        border: accent ? '1px solid rgba(229,9,20,0.3)' : '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {children}
    </span>
  );
}
