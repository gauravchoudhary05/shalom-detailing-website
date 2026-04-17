'use client';

import { useConfigStore, CAMERA_PRESETS, type CameraTarget } from '@/store/useConfigStore';

const VIEW_KEYS = ['exterior', 'front', 'rear', 'side', 'top', 'interior', 'wheel'] as const;

const VIEW_ICONS: Record<string, string> = {
  exterior: '⬡',
  front: '▲',
  rear: '▼',
  side: '▶',
  top: '●',
  interior: '⊕',
  wheel: '◎',
};

export function CameraControls() {
  const setCameraTarget = useConfigStore((s) => s.setCameraTarget);
  const cameraTarget = useConfigStore((s) => s.cameraTarget);

  return (
    <div id="camera-controls" className="camera-controls hidden md:block">
      <h3 className="camera-controls__title">Camera View</h3>
      <div className="camera-controls__grid">
        {VIEW_KEYS.map((key) => {
          const preset = CAMERA_PRESETS[key];
          const isActive = cameraTarget.label === preset.label;
          return (
            <button
              key={key}
              id={`cam-btn-${key}`}
              className={`camera-controls__btn${isActive ? ' camera-controls__btn--active' : ''}`}
              onClick={() => setCameraTarget(preset)}
              title={preset.label}
            >
              <span style={{ marginRight: '5px', opacity: 0.6, fontSize: '10px' }}>
                {VIEW_ICONS[key]}
              </span>
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
