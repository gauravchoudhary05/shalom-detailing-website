'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ServicePageNavbarProps {
  /** The full page title for the back link tooltip */
  currentService?: string;
}

export function ServicePageNavbar({ currentService }: ServicePageNavbarProps) {
  return (
    <nav
      id="service-page-navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 48px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 60%, transparent 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Brand */}
      <Link href="/" aria-label="Back to Shalom home" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
        <div
          style={{
            width: 40,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            overflow: 'hidden',
            borderRadius: '8px',
          }}
        >
          <Image
            src="/logo.jpg"
            alt="Shalom Logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '15px',
              letterSpacing: '5px',
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 1,
            }}
          >
            Shalom
          </span>
          <span
            style={{
              fontSize: '9px',
              letterSpacing: '3.5px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1,
            }}
          >
            Premium Car Detailing
          </span>
        </div>
      </Link>

      {/* Right: back link */}
      <Link
        href="/#services"
        id="back-to-services-link"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-heading)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          textDecoration: 'none',
          padding: '9px 20px',
          borderRadius: '8px',
          border: '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#fff';
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)';
          (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)';
          (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
          (e.currentTarget as HTMLElement).style.background = 'transparent';
        }}
        aria-label={currentService ? `Back from ${currentService} to all services` : 'Back to all services'}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Back to Services</span>
      </Link>
    </nav>
  );
}
