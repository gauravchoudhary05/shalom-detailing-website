'use client';

import {
  useConfigStore,
  PRICING,
  SERVICE_LABELS,
  type VehicleSize,
} from '@/store/useConfigStore';
import SoftAurora from './SoftAurora';
import BorderGlow from './BorderGlow';

const VEHICLE_SIZES: { key: VehicleSize; label: string }[] = [
  { key: 'hatchback', label: 'Hatchback' },
  { key: 'sedan', label: 'Sedan' },
  { key: 'suv', label: 'SUV' },
];

function formatPrice(amount: number): string {
  if (amount === 0) return '—';
  return '₹' + amount.toLocaleString('en-IN');
}

export function PricingOverlay() {
  const activeService = useConfigStore((s) => s.activeService);
  const vehicleSize = useConfigStore((s) => s.vehicleSize);
  const setVehicleSize = useConfigStore((s) => s.setVehicleSize);
  const showPricing = useConfigStore((s) => s.showPricing);
  const togglePricing = useConfigStore((s) => s.togglePricing);
  const toggleContact = useConfigStore((s) => s.toggleContact);

  const service = SERVICE_LABELS[activeService];
  const price = PRICING[activeService][vehicleSize];

  if (!showPricing) return null;

  return (
    <div className="pricing-overlay" id="pricing-overlay">
      <div className="pricing-overlay__backdrop" onClick={togglePricing} />
      <div className="pricing-overlay__panel">
        {/* SoftAurora WebGL background — low amplitude to avoid GPU contention */}
        <div className="pricing-overlay__aurora-bg">
          <SoftAurora />
        </div>

        <button
          className="pricing-overlay__close"
          onClick={togglePricing}
          id="pricing-close-btn"
          aria-label="Close pricing"
        >
          ✕
        </button>

        <h2 className="pricing-overlay__title">{service.title}</h2>
        <p className="pricing-overlay__desc">{service.description}</p>

        <div className="pricing-overlay__size-selector">
          {VEHICLE_SIZES.map(({ key, label }) => (
            <button
              key={key}
              id={`size-btn-${key}`}
              className={`pricing-overlay__size-btn ${vehicleSize === key ? 'pricing-overlay__size-btn--active' : ''}`}
              onClick={() => setVehicleSize(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="pricing-overlay__price">
          <span className="pricing-overlay__price-label">Starting at</span>
          <span className="pricing-overlay__price-value">{formatPrice(price)}</span>
        </div>

        <div className="pricing-overlay__table">
          <table>
            <thead>
              <tr>
                <th>Service</th>
                {VEHICLE_SIZES.map(({ key, label }) => (
                  <th key={key}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(Object.keys(PRICING) as Array<keyof typeof PRICING>)
                .filter((s) => s !== 'stock')
                .map((svc) => (
                  <tr key={svc} className={svc === activeService ? 'pricing-overlay__row--active' : ''}>
                    <td>{SERVICE_LABELS[svc].title}</td>
                    {VEHICLE_SIZES.map(({ key }) => (
                      <td key={key}>{formatPrice(PRICING[svc][key])}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <BorderGlow
          glowColor="0 85 45"
          colors={['#E50914', '#ff3333', '#990000']}
          backgroundColor="#0A0A0C"
          borderRadius={12}
          glowIntensity={1.0}
          className="pricing-overlay__cta-glow"
        >
          <button
            className="pricing-overlay__cta-btn"
            id="pricing-cta-btn"
            onClick={() => {
              togglePricing();
              toggleContact();
            }}
          >
            Book This Service →
          </button>
        </BorderGlow>
      </div>
    </div>
  );
}
