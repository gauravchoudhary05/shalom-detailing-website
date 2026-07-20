'use client';

import Link from 'next/link';
import { useConfigStore } from '@/store/useConfigStore';

const SERVICE_ROUTES: Record<string, string> = {
  'PPF': 'ppf',
  'Ceramic Coating': 'ceramic-coating',
  'Graphene Coating': 'graphene-coating',
  'Detailing & Interior Cleaning': 'detailing',
  'Wrap Job': 'wrap-job',
  'Interior Modification': 'interior-modification',
  'Seat Cover & 7D Mats': 'seat-cover-7d-mats',
};

const PRIMARY_SERVICES = [
  'PPF', 'Ceramic Coating', 'Graphene Coating',
  'Detailing & Interior Cleaning', 'Wrap Job',
  'Interior Modification', 'Seat Cover & 7D Mats',
];

const OTHER_SERVICES = [
  'Under Body Anti-Rust Coating', '7D Mats with Custom Stitching',
  'Body Washing & Vacuuming', 'Windshield & Glass Polishing',
  'Steering & Gear Knob Covers', 'Headlight & Taillight Restoration',
  'Headliner Replacement',
];

/* ── SVG Icons ── */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.9 31.9 0 0 0 0 12a31.9 31.9 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.4-1.8.5-5.8.5-5.8s-.1-4-.5-5.8ZM9.5 15.6V8.4l6.3 3.6-6.3 3.6Z"/>
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.07c0-6.63-5.37-12-12-12S0 5.44 0 12.07c0 5.99 4.39 10.96 10.13 11.86v-8.39H7.08v-3.47h3.04V9.41c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.93-1.95 1.87v2.25h3.33l-.53 3.47h-2.8v8.39C19.61 23.03 24 18.06 24 12.07Z"/>
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.97.36 1.93.69 2.85a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.92.33 1.88.56 2.85.69a2 2 0 0 1 1.72 2.04Z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m7 17 9.2-9.2M17 17V8H8" />
    </svg>
  );
}

export function Footer() {
  const toggleContact = useConfigStore((s) => s.toggleContact);

  return (
    <footer className="relative z-50 overflow-hidden" style={{ background: '#050505' }}>

      {/* ── Decorative Background Elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left red glow */}
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #E50914 0%, transparent 70%)' }}
        />
        {/* Bottom-right subtle glow */}
        <div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #E50914 0%, transparent 70%)' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── HERO BRAND SECTION ── */}
      <div className="relative border-b border-white/[0.06]" style={{ padding: '80px 0 60px' }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            {/* Brand wordmark */}
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  textTransform: 'uppercase' as const,
                  color: '#E50914',
                }}
              >
                Premium Car Detailing
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  fontWeight: 100,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase' as const,
                  lineHeight: 0.9,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SHALOM
              </h2>
            </div>

            {/* CTA Button */}
            <button
              onClick={toggleContact}
              className="group flex items-center gap-3 border border-white/10 hover:border-[#E50914]/50 px-8 py-4 transition-all duration-500 hover:bg-[#E50914]/5 mb-2"
              style={{ borderRadius: '0px' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.7)',
                }}
                className="group-hover:text-white transition-colors duration-300"
              >
                Book Appointment
              </span>
              <span className="text-[#E50914] group-hover:translate-x-1 transition-transform duration-300">
                <ArrowIcon />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── RED ACCENT LINE ── */}
      <div
        className="h-[2px] relative"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, #E50914 15%, #E50914 50%, #ff4444 85%, transparent 100%)',
          opacity: 0.4,
        }}
      />

      {/* ── Main Content Grid ── */}
      <div style={{ padding: '72px 0 64px' }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

            {/* Column 1 — Our Services (3 cols) */}
            <div className="lg:col-span-3">
              <h3
                className="flex items-center gap-3 mb-8 pb-4 border-b border-white/[0.06]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                Our Services
              </h3>
              <ul className="flex flex-col gap-1">
                {PRIMARY_SERVICES.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/services/${SERVICE_ROUTES[item] || '#'}`}
                      className="group flex items-center gap-3 py-[10px] px-3 -mx-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300"
                      style={{ textDecoration: 'none' }}
                    >
                      <span className="w-[3px] h-[3px] rounded-full bg-white/10 group-hover:bg-[#E50914] group-hover:shadow-[0_0_8px_rgba(229,9,20,0.6)] transition-all duration-300" />
                      <span
                        className="text-white/45 group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', fontWeight: 400 }}
                      >
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — Other Services (3 cols) */}
            <div className="lg:col-span-3">
              <h3
                className="flex items-center gap-3 mb-8 pb-4 border-b border-white/[0.06]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white/20" />
                Other Services
              </h3>
              <ul className="flex flex-col gap-1">
                {OTHER_SERVICES.map((item) => (
                  <li key={item}>
                    <span className="group flex items-center gap-3 py-[10px] px-3 -mx-3 rounded-lg hover:bg-white/[0.03] transition-all duration-300 cursor-default">
                      <span className="w-[3px] h-[3px] rounded-full bg-white/10 group-hover:bg-[#E50914] group-hover:shadow-[0_0_8px_rgba(229,9,20,0.6)] transition-all duration-300" />
                      <span
                        className="text-white/45 group-hover:text-white/90 transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px', fontWeight: 400 }}
                      >
                        {item}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Contact Us (3 cols) */}
            <div className="lg:col-span-3">
              <h3
                className="flex items-center gap-3 mb-8 pb-4 border-b border-white/[0.06]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase' as const,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-white/20" />
                Contact Us
              </h3>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <a
                  href="mailto:contact@shalomcardetailing.com"
                  className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="mt-0.5 text-[#E50914]/60 group-hover:text-[#E50914] transition-colors"><MailIcon /></span>
                  <div>
                    <span className="block text-white/30 mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' as const }}>Email</span>
                    <span className="text-white/60 group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px' }}>contact@shalomcardetailing.com</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+917718992761"
                  className="group flex items-start gap-4 p-4 rounded-xl border border-white/[0.04] hover:border-white/[0.1] hover:bg-white/[0.02] transition-all duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  <span className="mt-0.5 text-[#E50914]/60 group-hover:text-[#E50914] transition-colors"><PhoneIcon /></span>
                  <div>
                    <span className="block text-white/30 mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' as const }}>Phone</span>
                    <span className="text-white/60 group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-sans)', fontSize: '13.5px' }}>+91 7718992761</span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl border border-white/[0.04]">
                  <span className="mt-0.5 text-[#E50914]/60"><MapPinIcon /></span>
                  <div>
                    <span className="block text-white/30 mb-1" style={{ fontFamily: 'var(--font-heading)', fontSize: '10px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' as const }}>Address</span>
                    <span className="text-white/50 block leading-relaxed" style={{ fontFamily: 'var(--font-sans)', fontSize: '13px' }}>1st Floor, Skylon Tower, Plot No.37, Sector 19A, Vashi, Navi Mumbai, Maharashtra 400703</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4 — Map + Payment (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              <div>
                <h3
                  className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-white/20" />
                  Find Us
                </h3>
                {/* Google Maps Embed */}
                <div
                  className="relative w-full overflow-hidden group"
                  style={{
                    aspectRatio: '4 / 3',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2!2d73.0!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3M8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: 'invert(0.9) hue-rotate(180deg) saturate(0.3) brightness(0.5) contrast(1.2)',
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shalom Car Detailing Location"
                  />
                  {/* Overlay with red pin */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span
                      className="text-white/40"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500 }}
                    >
                      📍 Vashi, Navi Mumbai
                    </span>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h3
                  className="flex items-center gap-3 mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase' as const,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  We Accept
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { name: 'Visa', color: '#1A1F71' },
                    { name: 'Mastercard', color: '#EB001B' },
                    { name: 'GPay', color: '#4285F4' },
                    { name: 'UPI', color: '#5F259F' },
                    { name: 'EMI', color: '#E50914' },
                  ].map(({ name, color }) => (
                    <div
                      key={name}
                      className="group relative px-4 py-2.5 rounded-lg border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 cursor-default overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.02)' }}
                    >
                      {/* Colored top accent */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: color }}
                      />
                      <span
                        className="text-white/45 group-hover:text-white/80 transition-colors duration-300"
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase' as const,
                        }}
                      >
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Legal Links Row ── */}
      <div className="border-t border-white/[0.06]" style={{ padding: '20px 0' }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-wrap justify-center gap-6 md:gap-10">
          {['Terms & Conditions', 'Privacy Policy', 'Refund & Cancellation'].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-white/25 hover:text-white/50 transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                textDecoration: 'none',
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/[0.06]" style={{ padding: '32px 0' }}>
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { name: 'Instagram', icon: <InstagramIcon /> },
              { name: 'YouTube', icon: <YouTubeIcon /> },
              { name: 'Facebook', icon: <FacebookIcon /> },
            ].map(({ name, icon }) => (
              <a
                key={name}
                href="#"
                className="group flex items-center gap-2.5 py-2.5 px-4 rounded-xl border border-white/[0.04] hover:border-[#E50914]/30 hover:bg-[#E50914]/5 transition-all duration-300"
                style={{ textDecoration: 'none' }}
                aria-label={name}
              >
                <span className="text-white/30 group-hover:text-[#E50914] transition-colors duration-300">
                  {icon}
                </span>
                <span
                  className="text-white/35 group-hover:text-white/80 transition-colors duration-300 hidden sm:inline"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '0.3px',
                  }}
                >
                  {name}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right flex flex-col gap-2">
            <p
              className="text-white/50"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.5px',
              }}
            >
              © 2026 Shalom Car Detailing
            </p>
            <p className="text-white/20" style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 400, letterSpacing: '0.5px' }}>
              Designed by HK Solutions
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
