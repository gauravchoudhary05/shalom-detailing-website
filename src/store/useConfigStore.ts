'use client';

import { create } from 'zustand';

export type ServiceType = 'gloss-ppf' | 'matte-wrap' | 'ceramic' | 'stock';
export type VehicleSize = 'sedan' | 'suv' | 'hatchback';

export interface CameraTarget {
  position: [number, number, number];
  lookAt: [number, number, number];
  label: string;
}

export const CAMERA_PRESETS: Record<string, CameraTarget> = {
  exterior: { position: [5, 2.5, 6], lookAt: [0, 0.5, 0], label: 'Exterior' },
  front: { position: [0, 1.5, 5], lookAt: [0, 0.5, 0], label: 'Front View' },
  rear: { position: [0, 1.5, -5], lookAt: [0, 0.5, 0], label: 'Rear View' },
  side: { position: [6, 1, 0], lookAt: [0, 0.5, 0], label: 'Side Profile' },
  top: { position: [0, 7, 0], lookAt: [0, 0, 0], label: 'Top Down' },
  interior: { position: [0.3, 1.2, 0.2], lookAt: [0.5, 1, 1], label: 'Interior' },
  wheel: { position: [3, 0.5, 2.5], lookAt: [1.5, 0.3, 1.5], label: 'Wheels' },
};

export const SERVICE_MATERIALS: Record<ServiceType, { metallic: number; roughness: number; clearcoat: number; clearcoatRoughness: number; envMapIntensity: number; color?: string }> = {
  stock: { metallic: 0.4, roughness: 0.43, clearcoat: 0.3, clearcoatRoughness: 0.4, envMapIntensity: 1.0 },
  'gloss-ppf': { metallic: 0.5, roughness: 0.15, clearcoat: 1.0, clearcoatRoughness: 0.05, envMapIntensity: 2.5 },
  'matte-wrap': { metallic: 0.3, roughness: 0.85, clearcoat: 0.0, clearcoatRoughness: 0.9, envMapIntensity: 0.6 },
  ceramic: { metallic: 0.6, roughness: 0.1, clearcoat: 1.0, clearcoatRoughness: 0.02, envMapIntensity: 3.0 },
};

export const PRICING: Record<ServiceType, Record<VehicleSize, number>> = {
  stock: { sedan: 0, suv: 0, hatchback: 0 },
  'gloss-ppf': { sedan: 85000, suv: 120000, hatchback: 65000 },
  'matte-wrap': { sedan: 55000, suv: 75000, hatchback: 42000 },
  ceramic: { sedan: 25000, suv: 35000, hatchback: 18000 },
};

export const SERVICE_LABELS: Record<ServiceType, { title: string; description: string }> = {
  stock: { title: 'Stock Finish', description: 'Original factory paint' },
  'gloss-ppf': { title: 'Gloss PPF', description: 'Paint Protection Film — Self-healing, ultra-gloss clear shield' },
  'matte-wrap': { title: 'Matte/Satin Wrap', description: 'Vinyl wrap with a silky matte diffusion finish' },
  ceramic: { title: 'Ceramic Coating', description: 'Hydrophobic nano-ceramic — "Wet look" glass finish' },
};

interface ConfigState {
  activeService: ServiceType;
  vehicleSize: VehicleSize;
  cameraTarget: CameraTarget;
  isTransitioning: boolean;
  showPricing: boolean;
  showContact: boolean;
  menuOpen: boolean;

  setActiveService: (service: ServiceType) => void;
  setVehicleSize: (size: VehicleSize) => void;
  setCameraTarget: (target: CameraTarget) => void;
  setIsTransitioning: (v: boolean) => void;
  togglePricing: () => void;
  toggleContact: () => void;
  toggleMenu: () => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  activeService: 'stock',
  vehicleSize: 'sedan',
  cameraTarget: CAMERA_PRESETS.exterior,
  isTransitioning: false,
  showPricing: false,
  showContact: false,
  menuOpen: false,

  setActiveService: (service) => set({ activeService: service }),
  setVehicleSize: (size) => set({ vehicleSize: size }),
  setCameraTarget: (target) => set({ cameraTarget: target, isTransitioning: true }),
  setIsTransitioning: (v) => set({ isTransitioning: v }),
  togglePricing: () => set((s) => ({ showPricing: !s.showPricing })),
  toggleContact: () => set((s) => ({ showContact: !s.showContact })),
  toggleMenu: () => set((s) => ({ menuOpen: !s.menuOpen })),
}));
