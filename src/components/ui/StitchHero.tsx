'use client';

import React from 'react';
import SoftAurora from './SoftAurora';
import './SoftAurora.css';

export function StitchHero() {
    return (
        <section className="relative w-full h-screen flex flex-col pointer-events-none z-10 overflow-hidden bg-transparent">
            {/* Background Layer with SoftAurora Glow */}
            <div className="absolute inset-0 z-0 bg-[#131313]/90 pointer-events-none">
                <div className="absolute inset-0 opacity-60">
                    <SoftAurora 
                        color1="#E50000" 
                        color2="#2a2a2a" 
                        speed={1.0}
                        brightness={0.8}
                    />
                </div>
                {/* Cinematic Grain Overlay */}
                <div 
                    className="absolute inset-0 opacity-10 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            {/* Navigation Header (Glassmorphism) */}
            <header className="relative z-20 w-full px-8 py-6 flex justify-between items-center pointer-events-auto mt-6 mx-auto max-w-7xl">
                <div 
                    className="flex justify-between items-center w-full px-8 py-4 border drop-shadow-2xl"
                    style={{ 
                        background: 'rgba(255, 255, 255, 0.02)', 
                        backdropFilter: 'blur(24px)', 
                        borderColor: 'rgba(255, 255, 255, 0.05)',
                    }}
                >
                    <div 
                        className="text-white text-xl uppercase tracking-[0.2em] font-bold"
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        SHALOM
                    </div>
                    <nav className="flex gap-8">
                        {['Services', 'Prices', 'Contact'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-zinc-300 hover:text-white text-[0.7rem] uppercase tracking-[0.1em] transition-colors"
                                style={{ fontFamily: '"Manrope", sans-serif' }}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Main Canvas Space */}
            <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-12 md:px-24">
                <div className="max-w-4xl text-left ml-0 lg:ml-12 drop-shadow-2xl">
                    <span 
                        className="block text-[#E50000] text-[0.65rem] tracking-[0.3em] uppercase mb-4 opacity-90 animate-[fade-in-up_1s_cubic-bezier(0.16,1,0.3,1)_forwards]"
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        Masterclass Detailing Studio
                    </span>
                    
                    <h1 
                        className="text-white text-6xl md:text-8xl xl:text-9xl tracking-[-0.04em] uppercase mb-6 drop-shadow-lg leading-none animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
                        style={{ fontFamily: '"Space Grotesk", sans-serif', textShadow: '0 10px 40px rgba(229, 0, 0, 0.15)' }}
                    >
                        THE KINETIC<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#E50000]">GALLERY</span>
                    </h1>

                    <p 
                        className="text-zinc-300 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-10 pl-2 border-l border-[#5f3f3a]/30 animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]"
                        style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                        Next-Generation Automotive Protection & Detailing in Vashi. Invisible perfection tailored by experts.
                    </p>

                    {/* Primary CTA */}
                    <div className="pointer-events-auto inline-block animate-[fade-in-up_1.2s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]">
                        <button 
                            className="group relative flex items-center justify-center gap-4 px-12 py-5 overflow-hidden transition-all duration-700 ease-out shadow-[0_4px_30px_rgba(229,0,0,0.3)] hover:shadow-[0_10px_50px_rgba(229,0,0,0.6)]"
                            style={{ 
                                background: 'linear-gradient(135deg, #E50000 0%, #930100 100%)',
                            }}
                        >
                            <span 
                                className="text-white text-sm uppercase tracking-[0.2em] font-semibold"
                                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                            >
                                Configure Your Care
                            </span>
                            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Material Swapping Floating Panel */}
            <div className="absolute bottom-16 w-full flex justify-center z-30 pointer-events-auto animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
                <div 
                    className="flex p-2 gap-2"
                    style={{ 
                        background: 'rgba(26, 26, 26, 0.5)', 
                        backdropFilter: 'blur(16px)', 
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                >
                    {['Gloss PPF', 'Matte Wrap', 'Ceramic Coating'].map((material, idx) => (
                        <button 
                            key={material}
                            className={`px-6 py-3 text-xs tracking-[0.1em] uppercase transition-all duration-300 ${
                                idx === 0 
                                ? 'bg-white/10 text-[#E50000]' 
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                            }`}
                            style={{ fontFamily: '"Manrope", sans-serif' }}
                        >
                            {material}
                        </button>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
                    100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
                }
                `
            }} />
        </section>
    );
}

export default StitchHero;
