'use client';

import { useConfigStore, type ServiceType } from '@/store/useConfigStore';

const SERVICES: { id: ServiceType; title: string; desc: string; icon: string }[] = [
  {
    id: 'stock',
    title: 'Stock Finish',
    desc: 'Original factory paint',
    icon: '◇',
  },
  {
    id: 'gloss-ppf',
    title: 'Gloss PPF',
    desc: 'Self-healing clear shield',
    icon: '◈',
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    desc: '9H nano-hardness glass finish',
    icon: '◉',
  },
  {
    id: 'matte-wrap',
    title: 'Matte/Satin Wrap',
    desc: 'Silky vinyl transformation',
    icon: '◎',
  },
];

export function ServiceSelector() {
  const activeService = useConfigStore((s) => s.activeService);
  const setActiveService = useConfigStore((s) => s.setActiveService);

  return (
    <div className="service-selector">
      <h2 className="service-selector__title">Surface Finish</h2>
      <div className="service-selector__grid">
        {SERVICES.map((service) => {
          const isActive = activeService === service.id;
          return (
            <button
              key={service.id}
              id={`service-btn-${service.id}`}
              onClick={() => setActiveService(service.id)}
              className={`service-selector__btn${isActive ? ' service-selector__btn--active' : ''}`}
            >
              <span
                className="service-selector__btn-indicator"
                aria-hidden="true"
              >
                {isActive ? '●' : '○'}
              </span>
              <div className="service-selector__btn-content">
                <span className="service-selector__btn-title">{service.title}</span>
                <span className="service-selector__btn-desc">{service.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}