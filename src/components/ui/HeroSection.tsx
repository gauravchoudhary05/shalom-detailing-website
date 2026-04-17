'use client';

import SoftAurora from './SoftAurora';

export function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 w-full overflow-hidden pointer-events-none">
            {/* Background Integration */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <SoftAurora 
                    color1="#E50914" 
                    color2="#1A0000" 
                    speed={1.2}
                    brightness={0.6}
                />
                <div className="absolute inset-0 backdrop-blur-sm" />
            </div>

            {/* Typography & Centered Layout */}
            <div className="flex flex-col items-center justify-center relative z-10 w-full">
                {/* 1. Eyebrow */}
                <h2 className="text-[#E50914] text-[10px] tracking-[0.5em] font-mono font-bold uppercase mb-4 opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
                    MASTERCLASS DETAILING STUDIO
                </h2>

                {/* 2. Main Title */}
                <h1 className="text-white text-[12vw] font-heading font-thin tracking-[0.15em] uppercase leading-none opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards] drop-shadow-2xl">
                    SHALOM
                </h1>

                {/* 3. Subtitle */}
                <h3 className="text-white/80 text-[1.5vw] font-heading font-light tracking-[0.8em] uppercase -mt-[0.5vw] opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.6s_forwards] drop-shadow-lg">
                    CAR DETAILING
                </h3>

                {/* Interactive CTA */}
                <button 
                    onClick={() => {
                        window.dispatchEvent(new CustomEvent('open-contact-modal'));
                    }}
                    className="flex flex-row items-center justify-center gap-3 mt-6 opacity-0 animate-[fade-in-up_1.5s_cubic-bezier(0.16,1,0.3,1)_0.65s_forwards] hover:opacity-80 transition-opacity cursor-pointer pointer-events-auto"
                >
                    <div className="w-2 h-2 bg-[#E50914] rounded-full animate-pulse shadow-[0_0_15px_#E50914]" />
                    <span className="text-white text-[11px] tracking-[0.4em] font-mono uppercase">
                        RESERVE A BAY
                    </span>
                </button>

                {/* 4. Subheadline / Technical */}
                <p className="text-white/30 text-[10px] tracking-[0.4em] font-sans font-normal uppercase mt-16 max-w-2xl px-4 opacity-0 animate-[fade-in-up_1.8s_cubic-bezier(0.16,1,0.3,1)_0.8s_forwards]">
                    AEROSPACE-GRADE NANOTECH & AUTOMOTIVE PERFECTION
                </p>
            </div>

            {/* Inject Handcrafted Awwwards CSS Constraints */}
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