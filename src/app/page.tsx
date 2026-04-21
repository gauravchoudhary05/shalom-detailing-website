'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/ui/Navbar';
import { ServiceSelector } from '@/components/ui/ServiceSelector';
import { CameraControls } from '@/components/ui/CameraControls';
import { HUD } from '@/components/ui/HUD';
import { PricingOverlay } from '@/components/ui/PricingOverlay';
import { ContactForm } from '@/components/ui/ContactForm';
import { HeroSection } from '@/components/ui/HeroSection';
import { ServicesSection } from '@/components/ui/ServicesSection';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

// Dynamic import with SSR disabled for WebGL canvas
const CanvasWrapper = dynamic(
  () => import('@/components/canvas/CanvasWrapper').then((mod) => mod.CanvasWrapper),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#000',
          zIndex: 0,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            border: '2px solid rgba(229, 9, 20, 0.2)',
            borderTopColor: '#E50914',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    ),
  }
);

export default function HomePage() {
  return (
    <main id="main-content" className="w-full">
      <LoadingScreen />

      {/* Section 1: 3D Canvas UI Overlays */}
      <section className="relative min-h-[100svh] w-full pointer-events-none">
        {/* 3D Canvas */}
        <CanvasWrapper />

        {/* UI Overlays */}
        <div className="pointer-events-none z-50">
          <Navbar />
          <ServiceSelector />
          <CameraControls />
          <HUD />

          {/* Scroll Indicator (Bottom Anchor) */}
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-auto cursor-pointer hover:opacity-100 transition-opacity duration-500 z-50"
            onClick={() => document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-white/40 text-[8px] tracking-[0.4em] uppercase font-mono mb-4 text-shadow-md">
              EXPLORE
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden backdrop-blur-sm">
              <div className="w-full h-1/3 bg-white absolute top-0 animate-[scroll-drop_2s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
                @keyframes scroll-drop {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(300%); opacity: 0; }
                }
                `
          }} />
        </div>
      </section>

      {/* Section 2: Marketing Hero (Typography) */}
      <div id="hero-section" className="relative w-full z-10 pointer-events-none">
        <HeroSection />
      </div>

      {/* Section 3: Services Section */}
      <section id="services" className="relative w-full z-10">
        <ServicesSection />
      </section>

      {/* Modal Overlays */}
      <PricingOverlay />
      <ContactForm />
    </main>
  );
}
