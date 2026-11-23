import { useRef, type KeyboardEvent, type PointerEvent } from 'react';

export function RotaryDial({ label, value, onChange, min = 0, max = 100 }: { label: string; value: number; onChange: (value: number) => void; min?: number; max?: number }) {
  const dialRef = useRef<HTMLButtonElement>(null);
  const updateFromPointer = (event: PointerEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2; const cy = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - cy, event.clientX - cx) * 180 / Math.PI + 90;
    const normalized = Math.min(1, Math.max(0, (angle + 135 + 360) % 360 / 270));
    onChange(Math.round(min + normalized * (max - min)));
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') { event.preventDefault(); onChange(Math.min(max, value + 1)); }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') { event.preventDefault(); onChange(Math.max(min, value - 1)); }
    if (event.key === 'Home') { event.preventDefault(); onChange(min); }
    if (event.key === 'End') { event.preventDefault(); onChange(max); }
  };
  const angle = -135 + ((value - min) / (max - min)) * 270;
  return (
    <div className="dial-control">
      <button
        ref={dialRef}
        type="button"
        className="rotary-dial"
        role="slider"
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={`${value}%`}
        onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); updateFromPointer(event); }}
        onPointerMove={(event) => { if (event.buttons === 1) updateFromPointer(event); }}
        onKeyDown={onKeyDown}
      >
        <span className="dial-rim" />
        <span className="dial-center" />
        <span className="dial-indicator" style={{ transform: `rotate(${angle}deg)` }} />
        <span className="dial-value">{String(value).padStart(2, '0')}</span>
      </button>
      <span className="dial-label">{label}</span>
    </div>
  );
}
