'use client';

import SoftAurora from './SoftAurora';

export function HeroSection() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center pointer-events-none z-10 overflow-hidden">
            {/* Masked Background Container - Fades at the upper side to blend with the 3D canvas */}
            <div 
                className="absolute inset-0 z-0 bg-[#020202] pointer-events-none"
                style={{ 
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)', 
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)' 
                }}
            >
                {/* Soft Aurora Atmospheric Background */}
                <div className="absolute inset-0 opacity-40">
                    <SoftAurora 
                        color1="#E50914" 
                        color2="#1A0000" 
                        speed={1.2}
                        brightness={0.6}
                    />
                </div>
                {/* Elegant Atmospheric Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
            </div>

            {/* Elevated Content */}
            <div className="relative z-20 flex flex-col items-center text-center mt-[-15vh]">
                {/* Micro-label */}
                <span 
                    className="text-[#E50914] text-[0.65rem] md:text-[0.75rem] tracking-[0.5em] uppercase font-bold mb-6 opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                    Masterclass Detailing Studio
                </span>

                {/* The Brand */}
                <h1 
                    className="text-white text-7xl md:text-9xl xl:text-[11rem] font-light tracking-[0.15em] uppercase mb-4 drop-shadow-2xl opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]"
                    style={{ fontFamily: '"Syncopate", sans-serif' }}
                >
                    Shalom
                </h1>

                {/* Sub-label */}
                <p 
                    className="text-zinc-400 text-[0.7rem] md:text-[0.85rem] tracking-[0.4em] font-light max-w-2xl px-4 opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards]"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                    AEROSPACE-GRADE NANOTECH & AUTOMOTIVE PERFECTION
                </p>
            </div>

            {/* Premium Floating Actions - Pushed to Bottom so they don't block the car's body */}
            <div className="absolute bottom-12 md:bottom-20 w-full flex flex-col items-center justify-center gap-10 opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_1s_forwards] pointer-events-auto">
                
                {/* Magnetic Primary Button - Quiet Luxury Style */}
                <button 
                    className="group relative flex items-center justify-center gap-4 px-10 py-4 overflow-hidden rounded-full backdrop-blur-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_40px_transparent] hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                >
                    {/* Hover Shimmer */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                    
                    {/* Glowing Red Dot */}
                    <div className="relative flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] shadow-[0_0_10px_#E50914] group-hover:shadow-[0_0_20px_#E50914] transition-shadow duration-500" />
                        <span className="absolute w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping opacity-50" />
                    </div>

                    <span 
                        className="text-white text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.3em] font-semibold mt-[2px]"
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        Reserve a Bay
                    </span>
                </button>
                
                {/* Scroll Indicator */}
                <div 
                    className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer pointer-events-auto" 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <span 
                        className="text-[0.55rem] uppercase tracking-[0.3em] text-white" 
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        Explore
                    </span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
                        <div className="w-[1px] h-1/3 bg-white absolute top-0 animate-[scroll-drop_2s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
                    </div>
                </div>
            </div>

            {/* Inject Handcrafted Awwwards CSS Constraints */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@300;400;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px); filter: blur(20px); }
                    100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
                }

                @keyframes shimmer {
                    100% { transform: translateX(200%); }
                }

                @keyframes scroll-drop {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(300%); opacity: 0; }
                }
                `
            }} />
        </section>
    );
}