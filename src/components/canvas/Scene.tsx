'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, ContactShadows, Stars, OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';
import { useConfigStore } from '@/store/useConfigStore';
import { CarModel } from './CarModel';

function CameraRig() {
  const cameraTarget = useConfigStore((s) => s.cameraTarget);
  const setIsTransitioning = useConfigStore((s) => s.setIsTransitioning);
  const vec = useRef(new THREE.Vector3());
  const lookAtVec = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const [px, py, pz] = cameraTarget.position;
    const [lx, ly, lz] = cameraTarget.lookAt;

    // Smooth camera position
    easing.damp3(state.camera.position, [px, py, pz], 0.5, delta);

    // Smooth lookAt
    vec.current.set(lx, ly, lz);
    easing.damp3(lookAtVec.current, vec.current, 0.5, delta);
    state.camera.lookAt(lookAtVec.current);

    // Check if transition complete
    const dist = state.camera.position.distanceTo(new THREE.Vector3(px, py, pz));
    if (dist < 0.01) {
      setIsTransitioning(false);
    }
  });

  return null;
}

function StudioLighting() {
  return (
    <>
      {/* Key Light — dramatic side light */}
      <directionalLight
        position={[8, 10, 5]}
        intensity={2.5}
        color="#ffffff"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />
      {/* Fill Light — subtle cool blue */}
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.8}
        color="#4488ff"
      />
      {/* Rim Light — red accent matching brand */}
      <spotLight
        position={[-6, 4, -2]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        color="#E50914"
      />
      {/* Ground bounce */}
      <pointLight position={[0, -1, 0]} intensity={0.3} color="#1a1a2e" />
      {/* Ambient base */}
      <ambientLight intensity={0.15} />
    </>
  );
}

export function Scene() {
  return (
    <>
      <CameraRig />
      <OrbitControls enableZoom={false} makeDefault />
      <StudioLighting />

      {/* Environment for reflections */}
      <Environment
        preset="city"
        environmentIntensity={0.4}
        backgroundBlurriness={1}
      />

      {/* The Car */}
      <CarModel
        position={[0, -0.5, 0]}
        scale={1}
      />

      {/* Contact shadow beneath car */}
      <ContactShadows
        position={[0, -0.5, 0]}
        opacity={0.6}
        scale={12}
        blur={2.5}
        far={4}
        color="#000000"
      />

      {/* Subtle star particles in background */}
      <Stars
        radius={50}
        depth={80}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  );
}
