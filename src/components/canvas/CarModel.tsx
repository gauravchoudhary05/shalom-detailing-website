'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useConfigStore, SERVICE_MATERIALS } from '@/store/useConfigStore';

const BODY_MATERIAL_NAME = 'body_main';

export function CarModel(props: React.JSX.IntrinsicElements['group']) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, materials } = useGLTF('/models/car.glb');
  const activeService = useConfigStore((s) => s.activeService);

  // Clone the scene so we can safely mutate materials
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((m) => m.clone());
        } else {
          mesh.material = mesh.material.clone();
        }
      }
    });
    return clone;
  }, [scene]);

  // Apply service material properties to body_main
  useEffect(() => {
    const config = SERVICE_MATERIALS[activeService];
    clonedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((mat) => {
          if (mat.name === BODY_MATERIAL_NAME && mat instanceof THREE.MeshStandardMaterial) {
            // Upgrade to MeshPhysicalMaterial properties via manual set
            (mat as any).metalness = config.metallic;
            mat.roughness = config.roughness;
            (mat as any).clearcoat = config.clearcoat;
            (mat as any).clearcoatRoughness = config.clearcoatRoughness;
            mat.envMapIntensity = config.envMapIntensity;
            mat.needsUpdate = true;
          }
        });
      }
    });
  }, [activeService, clonedScene]);

  // Subtle idle rotation
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload('/models/car.glb');
