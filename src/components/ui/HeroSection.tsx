'use client';

import SoftAurora from './SoftAurora';

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] z-10">

            {/* --- INJECTED ANIMATIONS --- */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes contentFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-content {
          opacity: 0;
          animation: contentFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}} />

            {/* ── SOFT AURORA BACKGROUND ── */}
            <div className="absolute inset-0 z-0 overflow-hidden opacity-60 mix-blend-screen pointer-events-none">
                <SoftAurora />
            </div>

            {/* Optional subtle noise overlay for texture */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />

            {/* ── HERO CONTENT ── */}
            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 py-20 flex flex-col items-center text-center">

                {/* Eyebrow Badge */}
                <div
                    className="animate-content inline-flex items-center gap-3 px-5 py-2 rounded-full mb-8"
                    style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(10px)',
                        animationDelay: '0.1s'
                    }}
                >
                    <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
                    <span className="text-[11px] font-bold tracking-[3px] uppercase text-[rgba(255,255,255,0.7)]" style={{ fontFamily: 'var(--font-heading)' }}>
                        Premium Auto Studio
                    </span>
                </div>

                {/* Main Headline */}
                <h1
                    className="animate-content text-white font-extrabold uppercase leading-[0.9] tracking-tight mb-8"
                    style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(50px, 8vw, 110px)',
                        animationDelay: '0.2s',
                        textShadow: '0 10px 40px rgba(0,0,0,0.5)'
                    }}
                >
                    Shalom Car & Bike <br />
                    <span
                        style={{
                            background: 'linear-gradient(135deg, #fff 0%, #E50914 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Detailing
                    </span>
                </h1>

                {/* Sub-copy */}
                <p
                    className="animate-content max-w-2xl text-[16px] md:text-[18px] leading-relaxed font-light mb-12"
                    style={{
                        color: 'rgba(255,255,255,0.6)',
                        animationDelay: '0.3s'
                    }}
                >
                    Experience the absolute pinnacle of automotive care. From self-healing Paint Protection Film to extreme 10H Graphene Coatings, we engineer uncompromising protection and aesthetic perfection for your vehicle.
                </p>

                {/* Action Buttons */}
                <div
                    className="animate-content flex flex-col sm:flex-row items-center gap-6"
                    style={{ animationDelay: '0.4s' }}
                >
                    <button
                        className="group relative px-10 py-5 rounded-xl overflow-hidden transition-all duration-300"
                        style={{
                            background: '#E50914',
                            boxShadow: '0 10px 30px -10px rgba(229,9,20,0.5)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 35px -10px rgba(229,9,20,0.7)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(229,9,20,0.5)'; }}
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 text-white text-[13px] font-bold tracking-[2px] uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                            Book an Appointment
                        </span>
                    </button>

                    <button
                        className="group flex items-center gap-3 px-8 py-5 rounded-xl transition-all duration-300"
                        style={{
                            background: 'transparent',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                        onClick={() => {
                            // Smooth scroll to services section (assuming it has an id)
                            document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <span className="text-white text-[13px] font-bold tracking-[2px] uppercase" style={{ fontFamily: 'var(--font-heading)' }}>
                            Explore Services
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-y-1 text-[#E50914]">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                        </svg>
                    </button>
                </div>

            </div>

            {/* Bottom Gradient Fade into next section */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom, transparent, #000000)' }}
            />
        </section>
    );
}