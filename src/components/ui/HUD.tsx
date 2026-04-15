'use client';

import { useConfigStore, SERVICE_LABELS } from '@/store/useConfigStore';

export function HUD() {
  const activeService = useConfigStore((s) => s.activeService);
  const service = SERVICE_LABELS[activeService];

  return (
    <div id="hud" className="hud">
      <div className="hud__service-badge">
        <span className="hud__dot" aria-hidden="true" />
        <span className="hud__label">{service.title}</span>
      </div>
      <p className="hud__hint">Drag to rotate · Scroll to zoom</p>
    </div>
  );
}
