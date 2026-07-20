'use client';

import SoftAurora from './SoftAurora';
import Link from 'next/link';
import { useConfigStore } from '@/store/useConfigStore';

export function HeroSection() {
    const toggleContact = useConfigStore((s) => s.toggleContact);
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 w-full pointer-events-none">
            {/* Background Integration — SoftAurora + Backdrop Blur */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <SoftAurora
                    color1="#E50914"
                    color2="#1A0000"
                    speed={1.2}
                    brightness={0.6}
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            {/* Centered Typography Stack */}
            <div className="flex flex-col items-center justify-center relative z-10 w-full mt-10">

                {/* 1. Eyebrow */}
                <h2 className="text-[#E50914] text-[10px] tracking-[0.5em] font-mono font-bold uppercase mb-4 opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                    MASTERCLASS DETAILING STUDIO
                </h2>

                {/* 2. Main Title — Massive, thin, wide tracking */}
                <h1 className="text-white text-[12vw] font-heading font-thin tracking-[0.15em] uppercase leading-none opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards] drop-shadow-2xl">
                    SHALOM
                </h1>

                {/* 3. Subtitle */}
                <h3 className="text-white/80 text-[1.5vw] font-heading font-light tracking-[0.8em] uppercase -mt-[1vw] opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards] drop-shadow-lg">
                    CAR DETAILING
                </h3>

                {/* 4. Booking Trigger — "● RESERVE A BAY" red-accented text link */}
                <p
                    onClick={toggleContact}
                    className="text-[#E50914] text-[11px] tracking-[0.4em] font-mono font-bold uppercase pointer-events-auto cursor-pointer opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_0.7s_forwards] transition-all duration-300 hover:text-[#ff2d3b] hover:drop-shadow-[0_0_12px_rgba(229,9,20,0.5)]"
                    style={{ marginTop: '56px' }}
                >


                    ● RESERVE A BAY
                </p>

                {/* 5. Subheadline — Technical tagline */}
                <p className="text-white/30 text-[10px] tracking-[0.4em] font-sans font-normal uppercase max-w-2xl px-4 opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]" style={{ marginTop: '64px' }}>
                    AEROSPACE-GRADE NANOTECH &amp; AUTOMOTIVE PERFECTION
                </p>

                {/* Primary Action Container — Pill CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center relative z-50 pointer-events-auto opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_1s_forwards]" style={{ marginTop: '64px' }}>

                    {/* Primary CTA — Cyan→Purple Gradient, Dark Text, Arrow, Pill */}
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        style={{
                            background: 'linear-gradient(90deg, #00E5FF, #7C4DFF)',
                            color: '#0a0a0a',
                            border: 'none',
                            borderRadius: '9999px',
                            padding: '14px 36px',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase' as const,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            boxShadow: '0 0 20px rgba(0, 229, 255, 0.25), 0 0 40px rgba(124, 77, 255, 0.15)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(124, 77, 255, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.25), 0 0 40px rgba(124, 77, 255, 0.15)';
                        }}
                    >
                        OUR SERVICES <span style={{ fontSize: '16px', lineHeight: 1 }}>→</span>
                    </button>

                    {/* Secondary CTA — Ghost, Cyan Border, Play Icon, Pill */}
                    <Link
                        href="/testimonials"
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            color: '#ffffff',
                            border: '1px solid rgba(0, 229, 255, 0.5)',
                            borderRadius: '9999px',
                            padding: '14px 36px',
                            fontSize: '13px',
                            fontWeight: 700,
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase' as const,
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            textDecoration: 'none',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.85)';
                            e.currentTarget.style.background = 'rgba(0, 229, 255, 0.08)';
                            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 229, 255, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(0, 229, 255, 0.5)';
                            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                        VIEW TESTIMONIALS
                    </Link>

                </div>
            </div>

            {/* Keyframe Animation */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px); filter: blur(20px); }
                    100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
                }
                `
            }} />
        </section>
    );
}