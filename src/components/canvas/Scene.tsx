'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, ContactShadows, Stars, OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';
import { useConfigStore } from '@/store/useConfigStore';
import { CarModel, carRotationY } from './CarModel';

function CameraRig({ inView }: { inView: boolean }) {
  const cameraTarget = useConfigStore((s) => s.cameraTarget);
  const setIsTransitioning = useConfigStore((s) => s.setIsTransitioning);
  const vec = useRef(new THREE.Vector3());
  const lookAtVec = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    if (!inView) return;
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

interface SceneProps {
  inView: boolean;
}

export function Scene({ inView }: SceneProps) {
  const carGroupRef = useRef<THREE.Group>(null);
  const scrollYRef = useRef(0);
  const thresholdRef = useRef(800);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    const handleResize = () => {
      thresholdRef.current = window.innerHeight * 0.8;
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    
    // Initial values
    if (typeof window !== 'undefined') {
        handleResize();
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
    }

    return () => {
      if (typeof window !== 'undefined') {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Service transition animation
  const servicePhase = useConfigStore((s) => s.serviceTransitionPhase);
  const commitServiceChange = useConfigStore((s) => s.commitServiceChange);
  const finishServiceTransition = useConfigStore((s) => s.finishServiceTransition);

  // Fly-out animation state
  const flyDirRef = useRef(new THREE.Vector3(0, 0, 1));
  const flyOutStartRef = useRef(new THREE.Vector3());
  const flyOutTargetRef = useRef(new THREE.Vector3());
  const prevPhaseRef = useRef('idle');

  // Frustum for off-screen detection
  const frustum = useMemo(() => new THREE.Frustum(), []);
  const projScreenMatrix = useMemo(() => new THREE.Matrix4(), []);

  // Distance to travel off-screen
  // Increased significantly so it disappears into the horizon when driving away in Rear View
  const FLY_OUT_DISTANCE = 150;
  const FALLBACK_HIDDEN_DISTANCE = 120;

  useFrame((state, delta) => {
    if (!inView || !carGroupRef.current) return;

    const pos = carGroupRef.current.position;

    // Capture the exact position and direction the moment fly-out begins
    if (servicePhase === 'fly-out' && prevPhaseRef.current !== 'fly-out') {
      const rotY = carRotationY.current;
      // The car model natively faces +X (right), not +Z (front)
      // Rotating the vector (1, 0, 0) around the Y axis by rotY yields:
      const dirX = Math.cos(rotY);
      const dirZ = -Math.sin(rotY);
      flyDirRef.current.set(dirX, 0, dirZ).normalize();

      flyOutStartRef.current.copy(pos);
      // Target is relative to wherever the car currently is
      flyOutTargetRef.current.set(
        pos.x + dirX * FLY_OUT_DISTANCE,
        pos.y,
        pos.z + dirZ * FLY_OUT_DISTANCE
      );
    }
    prevPhaseRef.current = servicePhase;

    // Scroll-based targets (used in 'idle' and 'fly-in' phases)
    const scrollRatio = thresholdRef.current > 0 ? Math.max(0, scrollYRef.current / thresholdRef.current) : 0;
    const scrollTargetZ = Math.pow(scrollRatio, 2.5) * 15;
    const baseTargetY = isMobile ? -0.5 : 0;
    const scrollTargetY = baseTargetY - (scrollRatio * 1.5);

    if (servicePhase === 'fly-out') {
      // ── Phase 1: Drive car exactly in its facing direction ──
      easing.damp(pos, 'x', flyOutTargetRef.current.x, 0.25, delta);
      easing.damp(pos, 'z', flyOutTargetRef.current.z, 0.25, delta);
      easing.damp(pos, 'y', baseTargetY - 1.5, 0.4, delta);

      // Check if car is completely off-screen (frustum culling)
      projScreenMatrix.multiplyMatrices(state.camera.projectionMatrix, state.camera.matrixWorldInverse);
      frustum.setFromProjectionMatrix(projScreenMatrix);
      
      // We check a point slightly behind the car's position so the whole body exits
      const checkPoint = pos.clone().addScaledVector(flyDirRef.current, -2);
      const isOffScreen = !frustum.containsPoint(checkPoint);
      const traveledDist = pos.distanceTo(flyOutStartRef.current);

      // Commit change if off-screen OR if it has traveled far enough as a fallback
      if ((isOffScreen && traveledDist > 5) || traveledDist > FALLBACK_HIDDEN_DISTANCE) {
        commitServiceChange();
      }
    } else if (servicePhase === 'fly-in') {
      // ── Phase 2: Drive car back to its scroll-based position ──
      easing.damp(pos, 'x', 0, 0.35, delta);
      easing.damp(pos, 'z', scrollTargetZ, 0.35, delta);
      easing.damp(pos, 'y', scrollTargetY, 0.35, delta);

      // Once close to the target, transition is complete
      const distFromTarget = Math.sqrt(
        pos.x * pos.x + Math.pow(pos.z - scrollTargetZ, 2)
      );
      if (distFromTarget < 0.2) {
        finishServiceTransition();
      }
    } else {
      // ── Idle: Normal scroll-driven animation ──
      easing.damp(pos, 'z', scrollTargetZ, 0.4, delta);
      easing.damp(pos, 'y', scrollTargetY, 0.4, delta);
    }
  });

  return (
    <>
      <CameraRig inView={inView} />
      <OrbitControls enableZoom={false} enablePan={false} makeDefault />
      <StudioLighting />

      {/* Environment for reflections */}
      <Environment
        preset="city"
        environmentIntensity={0.4}
        backgroundBlurriness={1}
      />

      {/* The Car Group with Scroll Visibility */}
      <group ref={carGroupRef} position={[0, isMobile ? -0.5 : 0, 0]} scale={isMobile ? 0.65 : 1}>
        <CarModel
          position={[0, 0, 0]}
          scale={1}
          inView={inView}
        />
        {/* Contact shadow beneath car */}
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.6}
          scale={12}
          blur={2.5}
          far={4}
          color="#000000"
        />
      </group>

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
