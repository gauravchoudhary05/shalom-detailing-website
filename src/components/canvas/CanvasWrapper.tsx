'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { Scene } from './Scene';

function Loader() {
  return (
    <mesh>
      <boxGeometry args={[2, 0.8, 4.5]} />
      <meshBasicMaterial color="#E50914" wireframe />
    </mesh>
  );
}

export function CanvasWrapper() {
  return (
    <div id="canvas-container" className="canvas-container">
      <Canvas
        shadows
        dpr={[1, 2]}
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
        }}
      >
        <color attach="background" args={['#000000']} />
        <fog attach="fog" args={['#000000', 30, 80]} />
        <Suspense fallback={<Loader />}>
          <Scene />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
