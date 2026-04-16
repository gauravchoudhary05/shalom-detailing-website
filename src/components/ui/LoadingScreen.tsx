import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const { progress } = useProgress();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsHidden(true), 800);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (isHidden) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-1000 ease-in-out"
      style={{
        opacity: progress === 100 ? 0 : 1,
        pointerEvents: progress === 100 ? 'none' : 'auto',
      }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E50914]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-white font-space font-extrabold text-3xl md:text-5xl tracking-[8px] uppercase mb-2">
          Shalom
        </h1>
        <p className="text-[#E50914] font-space text-[10px] md:text-xs font-bold tracking-[4px] uppercase mb-12">
          Premium Car Detailing
        </p>
      </div>

      <div className="relative z-10 w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[#E50914] transition-all duration-300 ease-out shadow-[0_0_10px_#E50914]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-between w-64 md:w-80 mt-4">
        <span className="font-space text-white/40 text-[10px] tracking-widest uppercase">
          Initializing 3D Model...
        </span>
        <span className="font-space text-white font-bold text-sm tracking-wider">
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}
