'use client';

import { useConfigStore } from '@/store/useConfigStore';

interface ServicePageCTAProps {
  serviceName: string;
}

export function ServicePageCTA({ serviceName }: ServicePageCTAProps) {
  const toggleContact = useConfigStore((s) => s.toggleContact);

  const handleBook = () => {
    toggleContact();
  };

  return (
    <button
      id="service-page-book-btn"
      onClick={handleBook}
      className="group relative w-full overflow-hidden"
      style={{
        background: '#E50914',
        color: '#fff',
        fontFamily: 'var(--font-heading)',
        fontWeight: 800,
        fontSize: 'clamp(14px, 2vw, 18px)',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        padding: '28px 48px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 24px 60px rgba(229,9,20,0.45), 0 8px 20px rgba(229,9,20,0.3)';
        e.currentTarget.style.filter = 'brightness(1.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.filter = 'brightness(1)';
      }}
    >
      {/* Shimmer sweep */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)',
          transform: 'translateX(-100%)',
          transition: 'transform 0.6s ease',
          pointerEvents: 'none',
        }}
        className="group-hover:[transform:translateX(100%)]"
      />
      <span>BOOK THIS SERVICE</span>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}
