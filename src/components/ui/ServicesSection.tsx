'use client';

import { useState } from 'react';
import BorderGlow from './BorderGlow';

// --- EXACT NEW DATA STRUCTURE ---
const SERVICES = [
  {
    id: 'ppf',
    tag: 'Invisible Armor',
    title: 'PPF',
    description: 'Self-healing TPU technology engineered to defend your finish against stone chips, scratches, and UV degradation.',
    features: ['10-Year Durability', 'Self-Healing Technology', 'High Gloss Finish'],
    stat: '10Y',
    statLabel: 'Warranty',
    premium: false,
    fullDetails: [
      "At Shalom Car & Bike Detailing Services, we offer the most advanced solution to protect your vehicle's paint — Paint Protection Film (PPF).",
      "This transparent, high-gloss film acts as a rugged and highly effective barrier that safeguards your vehicle from daily wear and tear like scratches, swirl marks, and stone chips.",
      "Our Self-Healing Thermoplastic Polyurethane (TPU) PPF is designed to prevent deep gashes. We offer flexible warranty plans spanning 5, 7, 8, and 10 years to suit your needs."
    ],
    price: 'Starting at ₹65,000/-'
  },
  {
    id: 'ceramic',
    tag: 'Signature Spec',
    title: 'CERAMIC COATING',
    description: 'A monolithic layer of 9H nano-hardness that transforms your vehicle into a glass-like masterpiece — repelling water, contaminants, and oxidation.',
    features: ['5-Year Warranty', '9H Hardness', 'Extreme Hydrophobicity'],
    stat: '9H',
    statLabel: 'Hardness',
    premium: true,
    fullDetails: [
      "Unlike traditional waxing, our advanced nano-coatings offer a permanent or semi-permanent bond with your vehicle's factory paint.",
      "Water and dirt bead right off, making maintenance effortless while preventing fading and discoloration from harsh sunlight and environmental contaminants.",
      "Delivers a deep, 'wet-look' showroom finish every single day."
    ],
    price: 'Contact for Pricing'
  },
  {
    id: 'graphene',
    tag: 'Advanced Tech',
    title: 'GRAPHENE COATING',
    description: 'Next-generation carbon-based protection offering unmatched heat dispersion and water spotting resistance.',
    features: ['Ultra-Low Friction', 'Anti-Static Properties', 'Intense Gloss'],
    stat: '10H',
    statLabel: 'Hardness',
    premium: false,
    fullDetails: [
      "Graphene is the latest evolution in automotive protection. Infused with carbon molecules, it creates an incredibly dense and slick surface.",
      "It significantly reduces the surface temperature of your paint, meaning water spots are far less likely to form compared to traditional ceramic coatings.",
      "Experience anti-static properties that actively repel dust and keep your car cleaner for longer."
    ],
    price: 'Contact for Pricing'
  },
  {
    id: 'detailing',
    tag: 'Deep Cleanse',
    title: 'INTERIOR AND EXTERIOR CLEANING',
    description: 'Comprehensive deep cleaning and conditioning to restore your interior to absolute factory-fresh perfection.',
    features: ['Stain Removal', 'Odor Elimination', 'Leather Conditioning'],
    stat: '360°',
    statLabel: 'Care',
    premium: false,
    fullDetails: [
      "We don't just protect the outside; we completely restore and elevate the inside of your vehicle.",
      "Our deep extraction cleaning process completely removes embedded dust, tough stains, and lingering odors from your upholstery.",
      "We condition leather seats and treat dashboard plastics with UV protectants to prevent cracking and fading."
    ],
    price: 'Custom Quote'
  },
  {
    id: 'wraps',
    tag: 'Full Transformation',
    title: 'WRAP JOB',
    description: 'Erase the past. Reveal the soul. Premium vinyl wraps with a silky diffusion finish that completely transforms your silhouette — fully reversible.',
    features: ['Infinite Colors', 'Protects Factory Paint', 'Seamless Application'],
    stat: '∞',
    statLabel: 'Colors',
    premium: false,
    fullDetails: [
      "Vinyl wrapping is a stylish and non-permanent way to give your vehicle a bold new look — without affecting the factory paint.",
      "Choose from over 300+ colors and textures. Whether you're opting for a full color change, sporty dual-tone wrap, or a minimalistic bonnet stripe, we deliver with unmatched precision.",
      "OEM-safe application keeps your factory paint completely untouched and preserves resale value."
    ],
    price: 'Starting at ₹90,000/-'
  },
  {
    id: 'mods',
    tag: 'Bespoke',
    title: 'INTERIOR MODIFICATION',
    description: 'Elevate your cabin with personalized lighting, acoustic upgrades, and custom upholstery transformations.',
    features: ['Ambient Lighting', 'Acoustic Damping', 'Custom Trims'],
    stat: 'CUST',
    statLabel: 'Custom',
    premium: false,
    fullDetails: [
      "Transform your driving experience with our bespoke interior modifications.",
      "We install premium ambient lighting systems that integrate flawlessly into your car's original trim, offering millions of color combinations.",
      "Improve cabin quietness and audio quality with professional-grade acoustic damping and sound deadening installations."
    ],
    price: 'Custom Quote'
  },
  {
    id: 'mats',
    tag: 'Perfect Fit',
    title: 'SEAT COVER & 7D MATS',
    description: 'Tailor-made luxury seat covers and edge-to-edge 7D floor mats designed for ultimate comfort and protection.',
    features: ['Custom Stitching', 'Spill Resistant', 'Edge-to-Edge Fit'],
    stat: 'PREM',
    statLabel: 'Premium',
    premium: false,
    fullDetails: [
      "Upgrade your seating with custom-fit premium seat cover replacements stitched to match your exact aesthetic preferences.",
      "Our 7D Floor Mats are custom-measured and stitched for your specific vehicle, providing edge-to-edge luxury and superior protection against spills and dirt.",
      "Available in multiple textures including premium faux leather, diamond stitching, and durable all-weather compounds."
    ],
    price: 'Custom Quote'
  },
  {
    id: 'other',
    tag: 'Add-Ons',
    title: 'OTHER SERVICES',
    description: 'A complete suite of specialized treatments including anti-rust coatings, glass polishing, and restoration.',
    features: ['Anti-Rust Coating', 'Glass Polishing', 'Headlight Restoration'],
    stat: 'ESS',
    statLabel: 'Essentials',
    premium: false,
    fullDetails: [
      "We offer a wide array of targeted solutions to address every inch of your vehicle:",
      "• Underbody Anti-Rust Coating to protect your chassis from moisture and salt.\n• Windshield and Glass Polishing to remove hard water stains and minor scratches.\n• Headlight and Taillight Restoration to eliminate yellowing and restore optical clarity.\n• Steering, Gear Knob, and Gear Bellow custom covers.\n• Sagging Roof Liner Replacements."
    ],
    price: 'Varies by Service'
  }
];

// --- ICONS ---
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="#E50914" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black z-10"
      style={{ padding: '120px 0 100px' }}
    >
      {/* --- INJECTED ANIMATIONS --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUpMotion {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 8px rgba(229,9,20,0.8); }
          50% { transform: scale(1.3); opacity: 0.8; box-shadow: 0 0 15px rgba(229,9,20,1); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 24px 24px; }
        }
        .service-card-wrapper {
          opacity: 0;
          animation: fadeInUpMotion 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

      {/* Ambient background glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse at center, rgba(229,9,20,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '500px',
          height: '500px',
          background: 'radial-gradient(ellipse at bottom right, rgba(229,9,20,0.025) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div style={{ marginBottom: '72px', animation: 'fadeInUpMotion 0.8s ease-out forwards' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <span style={{ display: 'block', width: '28px', height: '1px', background: '#E50914', opacity: 0.7 }} />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                color: '#E50914',
                opacity: 0.9,
              }}
            >
              Our Expertise
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(44px, 6vw, 80px)',
              lineHeight: '0.92',
              letterSpacing: '-2.5px',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginBottom: '28px',
            }}
          >
            Built for <span style={{ color: '#E50914', display: 'inline-block' }}>Perfectionists</span>
          </h2>

          <p
            style={{
              maxWidth: '480px',
              fontSize: '15px',
              lineHeight: '1.75',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 300,
            }}
          >
            Precision engineering meets aesthetic dominance. Every service is
            executed with uncompromising attention to detail.
          </p>
        </div>

        {/* ── Flex Container for Centered Bottom Row (Yields 3-3-2 Layout) ── */}
        <div className="flex flex-wrap justify-center items-stretch gap-[20px]">
          {SERVICES.map((service, index) => {

            return (
              <div
                key={service.id}
                className="service-card-wrapper w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] flex flex-col cursor-pointer z-10 hover:z-30 will-change-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(service)}
              >
              <BorderGlow
                glowColor={service.premium ? '0 85 45' : '0 0 80'}
                colors={
                  service.premium
                    ? ['#E50914', '#cc0000', '#ff4444']
                    : ['rgba(255,255,255,0.5)', 'rgba(180,180,200,0.3)', 'rgba(255,255,255,0.2)']
                }
                backgroundColor="#0A0A0D"
                borderRadius={20}
                glowRadius={service.premium ? 50 : 35}
                glowIntensity={service.premium ? 1.4 : 0.9}
                coneSpread={service.premium ? 30 : 22}
                className="h-full w-full flex-1"
              >
                {/* --- THE INNER CARD --- */}
                <div
                  className="group relative flex-1 flex flex-col h-full w-full overflow-hidden rounded-[19px]"
                  style={{
                    padding: '40px 36px 36px',
                    background: 'linear-gradient(145deg, rgba(12,12,16,0.98) 0%, rgba(8,8,11,1) 100%)',
                  }}
                >
                  {/* --- CHROMA GRID BACKGROUND (React-Bits style effect) --- */}
                  <div
                    className="absolute inset-0 z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: '24px 24px',
                      maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)',
                      animation: 'gridMove 15s linear infinite'
                    }}
                  />

                  {/* Top accent line (Extra pop on the inner card edge) */}
                  <div
                    className="absolute top-0 left-[36px] right-[36px] h-[1px] transition-opacity duration-500"
                    style={{
                      background: service.premium
                        ? 'linear-gradient(90deg, transparent, rgba(229,9,20,0.8), transparent)'
                        : 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    }}
                  />

                  {/* Subtle inner glow on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      borderRadius: 'inherit',
                      background: service.premium
                        ? 'radial-gradient(ellipse at top right, rgba(229,9,20,0.12) 0%, transparent 60%)'
                        : 'radial-gradient(ellipse at top right, rgba(255,255,255,0.06) 0%, transparent 60%)',
                    }}
                  />

                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col flex-1 h-full">
                    {/* Tag + Stat row */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: '28px',
                      }}
                    >
                      {/* Service tag */}
                      <div
                        className="inline-flex items-center gap-[8px] px-[14px] py-[6px] rounded-[8px] transition-all duration-300 group-hover:bg-[rgba(255,255,255,0.06)]"
                        style={{
                          border: service.premium
                            ? '1px solid rgba(229,9,20,0.4)'
                            : '1px solid rgba(255,255,255,0.08)',
                          background: service.premium
                            ? 'rgba(229,9,20,0.1)'
                            : 'rgba(255,255,255,0.03)',
                        }}
                      >
                        {service.premium && (
                          <span
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#E50914',
                              display: 'inline-block',
                              animation: 'pulseDot 2s infinite',
                            }}
                          />
                        )}
                        <span
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '10px',
                            fontWeight: 700,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: service.premium ? '#E50914' : 'rgba(255,255,255,0.45)',
                          }}
                        >
                          {service.tag}
                        </span>
                      </div>

                      {/* Large stat */}
                      <div style={{ textAlign: 'right' }}>
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '28px',
                            fontWeight: 900,
                            letterSpacing: '-1px',
                            lineHeight: 1,
                            background: service.premium
                              ? 'linear-gradient(135deg, #fff 30%, #E50914 100%)'
                              : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {service.stat}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: '9px',
                            fontWeight: 600,
                            letterSpacing: '2px',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.3)',
                            marginTop: '4px',
                          }}
                        >
                          {service.statLabel}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '22px',
                        fontWeight: 700,
                        letterSpacing: '-0.5px',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        lineHeight: '1.2',
                        marginBottom: '14px',
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '13px',
                        lineHeight: '1.75',
                        color: 'rgba(255,255,255,0.50)',
                        fontWeight: 300,
                        flex: 1,
                        marginBottom: '28px',
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Divider */}
                    <div
                      className="h-[1px] mb-[24px] transition-colors duration-300 group-hover:bg-[rgba(255,255,255,0.12)]"
                      style={{ background: 'rgba(255,255,255,0.06)' }}
                    />

                    {/* Features */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '12px',
                            color: 'rgba(255,255,255,0.65)',
                            fontWeight: 400,
                          }}
                        >
                          <span
                            className="flex items-center justify-center w-[20px] h-[20px] rounded-[5px] shrink-0 transition-all duration-300 group-hover:border-[rgba(229,9,20,0.5)] group-hover:bg-[rgba(229,9,20,0.15)]"
                            style={{
                              background: 'rgba(229,9,20,0.1)',
                              border: '1px solid rgba(229,9,20,0.2)',
                            }}
                          >
                            <CheckIcon />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BorderGlow>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── MODAL OVERLAY ── */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6"
          style={{ animation: 'fadeIn 0.2s ease-out forwards' }}
        >
          {/* Dark Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedService(null)}
          />

          {/* Modal Content Panel */}
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-[24px] shadow-2xl z-10 transform scrollbar-thin"
            style={{
              background: 'linear-gradient(145deg, rgba(14,14,18,0.98) 0%, rgba(8,8,11,0.98) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              animation: 'slideUp 0.3s cubic-bezier(0.16,1,0.3,1) forwards'
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-lg transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.6)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(229,9,20,0.1)';
                e.currentTarget.style.borderColor = 'rgba(229,9,20,0.5)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
            >
              <CloseIcon />
            </button>

            <div className="p-10 sm:p-12">
              <div
                className="inline-block px-3 py-1.5 rounded-md mb-6 border"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  background: selectedService.premium ? 'rgba(229,9,20,0.1)' : 'rgba(255,255,255,0.05)',
                  borderColor: selectedService.premium ? 'rgba(229,9,20,0.3)' : 'rgba(255,255,255,0.1)',
                  color: selectedService.premium ? '#E50914' : 'rgba(255,255,255,0.6)'
                }}
              >
                {selectedService.tag}
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4vw, 36px)',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '10px',
                  letterSpacing: '-1px',
                  textTransform: 'uppercase'
                }}
              >
                {selectedService.title}
              </h2>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: '#E50914',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '32px',
                  paddingBottom: '32px',
                  borderBottom: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                {selectedService.stat} {selectedService.statLabel}
              </div>

              <div className="space-y-6">
                {selectedService.fullDetails.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '15px',
                      lineHeight: '1.8',
                      whiteSpace: 'pre-line'
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Action Bar */}
              <div
                className="mt-12 p-6 rounded-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      marginBottom: '6px'
                    }}
                  >
                    Pricing Estimate
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: '#fff',
                      fontSize: '22px',
                      fontWeight: 700
                    }}
                  >
                    {selectedService.price}
                  </div>
                </div>

                <button
                  onClick={() => {
                    document.dispatchEvent(new CustomEvent('open-contact-modal', { detail: selectedService.title }));
                    setSelectedService(null);
                  }}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl transition-all"
                  style={{
                    background: '#E50914',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}