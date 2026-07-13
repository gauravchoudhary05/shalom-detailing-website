'use client';

import { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Scene } from './Scene';
import * as THREE from 'three';

// Suppress THREE.Clock deprecation warning from @react-three/fiber internals.
// R3F still uses Clock; Three.js r183+ deprecated it in favor of Timer.
// This is safe to remove once R3F updates its internals.
// Also suppress Angle shader compiler precision warnings.
if (typeof window !== 'undefined') {
  const _warn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === 'string') {
      if (args[0].includes('THREE.Clock')) return;
      if (args[0].includes('THREE.WebGLProgram: Program Info Log')) return;
    }
    _warn.apply(console, args);
  };
}

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[2, 0.8, 4.5]} />
      <meshBasicMaterial color="#E50914" wireframe />
    </mesh>
  );
}

export function CanvasWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 } // fires as soon as any pixel enters/leaves
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} id="canvas-container" className="canvas-container touch-pan-y">
      <Canvas
        shadows={{ type: THREE.PCFShadowMap }}
        dpr={[1, 2]}
        frameloop={inView ? 'always' : 'demand'}
        camera={{
          position: [5, 2.5, 6],
          fov: 45,
          near: 0.1,
          far: 200,
        }}
        gl={{
          antialias: true,
          toneMapping: 3, // ACESFilmicToneMapping
          toneMappingExposure: 1.2,
          alpha: false,
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          touchAction: 'pan-y',
        }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 30, 80]} />
        <Suspense fallback={<Loader />}>
          <Scene inView={inView} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
