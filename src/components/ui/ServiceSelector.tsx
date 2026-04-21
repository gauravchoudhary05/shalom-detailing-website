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
    <div className="absolute bottom-[108px] md:bottom-10 left-0 md:left-8 w-full md:w-auto z-50 flex flex-col md:overflow-visible pointer-events-auto">
      <h2 className="service-selector__title hidden md:block">Surface Finish</h2>
      <div className="flex flex-row overflow-x-auto px-6 gap-3 snap-x hide-scrollbar md:flex-col md:px-0 w-full md:w-max md:overflow-visible pointer-events-auto">
        {SERVICES.map((service) => {
          const isActive = activeService === service.id;
          return (
            <button
              key={service.id}
              id={`service-btn-${service.id}`}
              onClick={() => setActiveService(service.id)}
              className={`service-selector__btn whitespace-nowrap flex-shrink-0 snap-center md:whitespace-normal md:w-full max-md:!justify-start${isActive ? ' service-selector__btn--active' : ''}`}
            >
              <span
                className="service-selector__btn-indicator"
                aria-hidden="true"
              >
                {isActive ? '●' : '○'}
              </span>
              <div className="service-selector__btn-content">
                <span className="service-selector__btn-title">{service.title}</span>
                <span className="service-selector__btn-desc hidden md:block">{service.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}