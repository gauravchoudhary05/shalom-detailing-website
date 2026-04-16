'use client';

import { MeshReflectorMaterial } from '@react-three/drei';
import * as THREE from 'three';

function OverheadDetailingLights() {
  return (
    <group position={[0, 4.5, 0]}>
      {/* LED Grid commonly found in luxury detailing studios */}
      {/* Front-to-back strips */}
      {Array.from({ length: 7 }).map((_, i) => (
        <mesh key={`v-${i}`} position={[-6 + i * 2, 0, 0]}>
          <boxGeometry args={[0.08, 0.02, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}

      {/* Side-to-side strips */}
      {Array.from({ length: 9 }).map((_, i) => (
        <mesh key={`h-${i}`} position={[0, 0, -8 + i * 2]}>
          <boxGeometry args={[12, 0.02, 0.08]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}
      
      {/* Surrounding accent halo (Racing Red) */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[13, 0.1, 17]} />
        <meshBasicMaterial color="#E50914" />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
         <boxGeometry args={[12.8, 0.12, 16.8]} />
         <meshBasicMaterial color="#000000" />
      </mesh>

      {/* Soft fill light dropping straight down */}
      <spotLight position={[0, 0, 0]} angle={1.2} penumbra={0.8} intensity={3} color="#ffffff" castShadow />
    </group>
  );
}

export function GarageEnvironment() {
  return (
    <group>
      {/* Glossy Epoxy Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.51, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <MeshReflectorMaterial
          blur={[400, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={3}
          roughness={0.2}
          depthScale={1}
          minDepthThreshold={0.8}
          maxDepthThreshold={1.2}
          color="#050505"
          metalness={0.6}
          mirror={1}
        />
      </mesh>

      {/* --- PROPER ARCHITECTURE --- */}
      
      {/* Back Wall */}
      <mesh position={[0, 4.5, -12]} receiveShadow>
        <boxGeometry args={[30, 10, 0.5]} />
        <meshStandardMaterial color="#0f0f11" roughness={0.8} />
      </mesh>

      {/* Back Wall Pillars / Depth */}
      <mesh position={[-8, 4.5, -11.5]} receiveShadow>
        <boxGeometry args={[1.5, 10, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </mesh>
      <mesh position={[8, 4.5, -11.5]} receiveShadow>
        <boxGeometry args={[1.5, 10, 1]} />
        <meshStandardMaterial color="#050505" roughness={0.9} />
      </mesh>

      {/* Back Wall Accent Light Strip */}
      <mesh position={[0, 4, -11.7]}>
        <boxGeometry args={[14.5, 0.05, 0.1]} />
        <meshBasicMaterial color="#E50914" />
      </mesh>
      {/* Bottom Wall Trim Light */}
      <mesh position={[0, 0.2, -11.7]}>
        <boxGeometry args={[30, 0.1, 0.1]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* Left Wall */}
      <mesh position={[-15, 4.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[40, 10, 0.5]} />
        <meshStandardMaterial color="#0f0f11" roughness={0.8} />
      </mesh>

      {/* Left Wall Pillers */}
      {Array.from({ length: 5 }).map((_, i) => (
         <mesh key={`lp-${i}`} position={[-14.5, 4.5, -10 + i * 5]} receiveShadow>
            <boxGeometry args={[1, 10, 1.5]} />
            <meshStandardMaterial color="#050505" roughness={0.9} />
         </mesh>
      ))}

      {/* Right Wall */}
      <mesh position={[15, 4.5, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[40, 10, 0.5]} />
        <meshStandardMaterial color="#0f0f11" roughness={0.8} />
      </mesh>

      {/* Right Wall Pillers */}
      {Array.from({ length: 5 }).map((_, i) => (
         <mesh key={`rp-${i}`} position={[14.5, 4.5, -10 + i * 5]} receiveShadow>
            <boxGeometry args={[1, 10, 1.5]} />
            <meshStandardMaterial color="#050505" roughness={0.9} />
         </mesh>
      ))}

      {/* Ceiling to enclose the studio (prevents city environment from bleeding in wildly above) */}
      <mesh position={[0, 9.5, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#000000" roughness={1} />
      </mesh>

      {/* --- OVERHEAD DETAILING LIGHTS --- */}
      <OverheadDetailingLights />

      {/* Ambient background light for mood */}
      <pointLight position={[0, 3, -10]} intensity={1.5} color="#E50914" distance={15} />
    </group>
  );
}

