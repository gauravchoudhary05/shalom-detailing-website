// Services.json lives at the project root (one level above /src)
// resolveJsonModule: true is set in tsconfig.json
import servicesData from '../../Services.json';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface WhyChooseItem {
  heading: string;
  description: string;
}

export interface ServicesIncludedItem {
  heading: string;
  description: string;
}

export interface Pricing {
  startingAt: string;
  disclaimer: string;
}

export interface Service {
  id: string;
  shortName: string;
  fullName: string;
  tagline: string;
  introduction: string[];
  keyBenefits?: string[];
  whyChoose?: WhyChooseItem[];
  warrantyPlans?: string[];
  additionalOptions?: string[];
  servicesIncludedList?: string[];
  servicesIncluded?: ServicesIncludedItem[];
  idealFor?: string[];
  importantNotes?: string[];
  pricing: Pricing;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const services: Service[] = servicesData.services as Service[];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getAllServiceIds(): string[] {
  return services.map((s) => s.id);
}
