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
      {/* Section 1: Hero */}
      <section className="relative h-screen w-full">
        {/* 3D Canvas */}
        <CanvasWrapper />

        {/* UI Overlays */}
        <Navbar />
        <ServiceSelector />
        <CameraControls />
        <HUD />
      </section>

      {/* Section 2: Marketing Hero */}
      <HeroSection />

      {/* Section 3: Services Section */}
      <section className="relative w-full z-10 bg-black">
        <ServicesSection />
      </section>

      {/* Modal Overlays */}
      <PricingOverlay />
      <ContactForm />
    </main>
  );
}
