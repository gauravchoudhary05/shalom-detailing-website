'use client';

import { useConfigStore } from '@/store/useConfigStore';
import BorderGlow from './BorderGlow';
import Image from 'next/image'; // <-- Added Import for Next.js Image

export function Navbar() {
  const togglePricing = useConfigStore((s) => s.togglePricing);
  const toggleContact = useConfigStore((s) => s.toggleContact);

  return (
    <nav id="navbar" className="navbar">
      {/* Brand */}
      <div className="navbar__brand">

        {/* --- REPLACED 'S' LOGO WITH IMAGE --- */}
        <div className="navbar__logo" aria-hidden="true" style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'transparent' }}>
          <Image
            src="/logo.jpg" // <-- Change this to match your exact file name in the public/ folder! (e.g. /logo.png, /logo.svg)
            alt="Shalom Logo"
            width={80} // Adjust width as needed
            height={80} // Adjust height as needed
            style={{ objectFit: 'contain' }}
          />
        </div>

        <div className="navbar__brand-text">
          <span className="navbar__name">Shalom</span>
          <span className="navbar__tagline">Premium Car Detailing</span>
        </div>
      </div>

      {/* Links */}
      <div className="navbar__links">
        <button
          id="nav-pricing-btn"
          className="navbar__link"
          onClick={togglePricing}
        >
          Pricing
        </button>

        <BorderGlow
          glowColor="0 85 45"
          colors={['#E50914', '#ff2222', '#990000']}
          backgroundColor="#0A0A0C"
          borderRadius={8}
          glowRadius={28}
          glowIntensity={1.2}
          animated
        >
          <button
            id="nav-book-btn"
            className="navbar__cta-inner"
            onClick={toggleContact}
          >
            Book Now
          </button>
        </BorderGlow>
      </div>
    </nav>
  );
}