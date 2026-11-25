import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from 'react';

type Props = {
  imageSrc?: string;
  magnification: 4 | 10 | 40 | 100;
  coarseFocus: number;
  fineFocus: number;
  light: number;
  stainFilter?: string;
  pan: { x: number; y: number };
  placeholders: { empty: string; loading: string; failed: string };
  onPan: (pan: { x: number; y: number }) => void;
  onZoom?: (direction: 1 | -1) => void;
  onZoomReset?: () => void;
  ariaLabel: string;
};

export function MicroscopeCanvas({ imageSrc, magnification, coarseFocus, fineFocus, light, stainFilter = 'none', pan, placeholders, onPan, onZoom, onZoomReset, ariaLabel }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scheduleRef = useRef<() => void>(() => {});
  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const [unsupported, setUnsupported] = useState(false);
  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const pinchRef = useRef<number | null>(null);
  const tapRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const downRef = useRef<{ x: number; y: number } | null>(null);
  const gestureRef = useRef({ onZoom, onZoomReset, magnification });
  gestureRef.current = { onZoom, onZoomReset, magnification };
  const lastWheelRef = useRef(0);
  const [imageVersion, setImageVersion] = useState(0);
  const [imageStatus, setImageStatus] = useState<'empty' | 'loading' | 'loaded' | 'failed'>('empty');
  const propsRef = useRef({ imageSrc, magnification, coarseFocus, fineFocus, light, stainFilter, pan, placeholders, imageStatus });
  propsRef.current = { imageSrc, magnification, coarseFocus, fineFocus, light, stainFilter, pan, placeholders, imageStatus };

  useEffect(() => {
    imageRef.current = null;
    if (!imageSrc) { setImageStatus('empty'); setImageVersion((version) => version + 1); return; }
    setImageStatus('loading');
    const image = new Image();
    image.onload = () => { imageRef.current = image; setImageStatus('loaded'); setImageVersion((version) => version + 1); };
    image.onerror = () => { imageRef.current = null; setImageStatus('failed'); setImageVersion((version) => version + 1); };
    image.src = imageSrc;
    return () => { imageRef.current = null; };
  }, [imageSrc]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (canvas && !context) { setUnsupported(true); return; }
    if (!canvas || !parent || !context) return;

    let width = 1;
    let height = 1;
    let ratio = 1;
    let frame = 0;
    const render = () => {
      frame = 0;
      const current = propsRef.current;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.fillStyle = '#30352f';
      context.fillRect(0, 0, width, height);

      const fieldRadius = Math.min(width, height) * 0.46;
      context.save();
      context.beginPath();
      context.arc(width / 2, height / 2, fieldRadius, 0, Math.PI * 2);
      context.clip();
      context.fillStyle = '#10120f';
      context.fillRect(0, 0, width, height);

      const image = imageRef.current;
      if (image?.complete && image.naturalWidth > 0) {
        const fieldSize = fieldRadius * 2;
        const scale = Math.max(fieldSize / image.naturalWidth, fieldSize / image.naturalHeight) * (current.magnification / 4);
        const imageWidth = image.naturalWidth * scale;
        const imageHeight = image.naturalHeight * scale;
        const limitX = Math.max(0, (imageWidth - fieldSize) / 2);
        const limitY = Math.max(0, (imageHeight - fieldSize) / 2);
        const left = (width - imageWidth) / 2 + Math.max(-limitX, Math.min(limitX, current.pan.x));
        const top = (height - imageHeight) / 2 + Math.max(-limitY, Math.min(limitY, current.pan.y));
        const blur = Math.min(7, Math.abs(50 - current.coarseFocus) * 0.06 + Math.abs(50 - current.fineFocus) * 0.08);
        const brightness = 0.48 + (current.light / 100) * 0.72;
        context.filter = `blur(${blur}px) brightness(${brightness})${current.stainFilter === 'none' ? '' : ` ${current.stainFilter}`}`;
        const visibleLeft = Math.max(width / 2 - fieldRadius, left);
        const visibleTop = Math.max(height / 2 - fieldRadius, top);
        const visibleRight = Math.min(width / 2 + fieldRadius, left + imageWidth);
        const visibleBottom = Math.min(height / 2 + fieldRadius, top + imageHeight);
        if (visibleRight > visibleLeft && visibleBottom > visibleTop) {
          const sourceX = (visibleLeft - left) / scale;
          const sourceY = (visibleTop - top) / scale;
          const sourceWidth = (visibleRight - visibleLeft) / scale;
          const sourceHeight = (visibleBottom - visibleTop) / scale;
          context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, visibleLeft, visibleTop, visibleRight - visibleLeft, visibleBottom - visibleTop);
        }
        context.filter = 'none';

        const vignette = context.createRadialGradient(width / 2, height / 2, fieldRadius * 0.57, width / 2, height / 2, fieldRadius);
        vignette.addColorStop(0, 'rgba(0,0,0,0)');
        vignette.addColorStop(1, 'rgba(0,0,0,.18)');
        context.fillStyle = vignette;
        context.fillRect(width / 2 - fieldRadius, height / 2 - fieldRadius, fieldSize, fieldSize);
      } else {
        context.fillStyle = 'rgba(255,255,255,.78)';
        context.font = '15px sans-serif';
        context.textAlign = 'center';
        const message = current.imageStatus === 'failed' ? current.placeholders.failed : current.imageStatus === 'loading' ? current.placeholders.loading : current.placeholders.empty;
        context.fillText(message, width / 2, height / 2);
      }
      context.restore();
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    scheduleRef.current = schedule;
    const resize = () => {
      width = Math.max(1, parent.clientWidth);
      height = Math.max(1, parent.clientHeight);
      ratio = Math.min(1.5, window.devicePixelRatio || 1);
      parent.style.setProperty('--field-size', `${Math.min(width, height) * 0.92}px`);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      schedule();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(parent);
    resize();
    schedule();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); scheduleRef.current = () => {}; };
  }, []);

  useEffect(() => {
    scheduleRef.current();
  }, [imageVersion, imageStatus, imageSrc, magnification, coarseFocus, fineFocus, light, stainFilter, pan.x, pan.y, placeholders]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    // Mouse wheel and trackpad: one objective step per gesture, not per tick.
    // Only inside the round lens; outside it the page scrolls as usual.
    const onWheel = (event: WheelEvent) => {
      const rect = canvas.getBoundingClientRect();
      const inLens = Math.hypot(event.clientX - (rect.left + rect.width / 2), event.clientY - (rect.top + rect.height / 2)) <= Math.min(rect.width, rect.height) * 0.46;
      if (!inLens) return;
      event.preventDefault();
      const now = performance.now();
      if (now - lastWheelRef.current < 280 || Math.abs(event.deltaY) < 4) return;
      lastWheelRef.current = now;
      gestureRef.current.onZoom?.(event.deltaY < 0 ? 1 : -1);
    };
    canvas.addEventListener('wheel', onWheel, { passive: false });
    return () => canvas.removeEventListener('wheel', onWheel);
  }, [unsupported]);

  function clampPan(next: { x: number; y: number }) {
    const image = imageRef.current;
    const parent = canvasRef.current?.parentElement;
    if (!image || !parent || !image.naturalWidth) return next;
    const fieldSize = Math.min(parent.clientWidth, parent.clientHeight) * 0.46 * 2;
    const scale = Math.max(fieldSize / image.naturalWidth, fieldSize / image.naturalHeight) * (propsRef.current.magnification / 4);
    const limitX = Math.max(0, (image.naturalWidth * scale - fieldSize) / 2);
    const limitY = Math.max(0, (image.naturalHeight * scale - fieldSize) / 2);
    return { x: Math.max(-limitX, Math.min(limitX, next.x)), y: Math.max(-limitY, Math.min(limitY, next.y)) };
  }
  function onKeyDown(event: KeyboardEvent<HTMLCanvasElement>) {
    const step = event.shiftKey ? 80 : 30;
    const delta = { ArrowLeft: [step, 0], ArrowRight: [-step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] }[event.key as string];
    if (!delta) return;
    event.preventDefault();
    onPan(clampPan({ x: propsRef.current.pan.x + delta[0], y: propsRef.current.pan.y + delta[1] }));
  }
  function pinchDistance() {
    const points = [...pointersRef.current.values()];
    return points.length === 2 ? Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) : null;
  }
  function startDrag(event: PointerEvent<HTMLCanvasElement>) {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    downRef.current = { x: event.clientX, y: event.clientY };
    if (pointersRef.current.size === 2) { pinchRef.current = pinchDistance(); dragRef.current = null; return; }
    dragRef.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
    setDragging(true);
  }
  function drag(event: PointerEvent<HTMLCanvasElement>) {
    if (pointersRef.current.has(event.pointerId)) pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointersRef.current.size === 2) {
      const distance = pinchDistance();
      if (distance && pinchRef.current && onZoom) {
        const ratio = distance / pinchRef.current;
        if (ratio > 1.35) { onZoom(1); pinchRef.current = distance; }
        else if (ratio < 0.74) { onZoom(-1); pinchRef.current = distance; }
      }
      return;
    }
    if (!dragRef.current) return;
    onPan(clampPan({ x: dragRef.current.panX + event.clientX - dragRef.current.x, y: dragRef.current.panY + event.clientY - dragRef.current.y }));
  }
  function endDrag(event: PointerEvent<HTMLCanvasElement>) {
    // Double tap or double click: one objective stronger, back to the lowest power after the strongest.
    if (event.type === 'pointerup' && pointersRef.current.size === 1 && downRef.current && Math.hypot(event.clientX - downRef.current.x, event.clientY - downRef.current.y) < 8) {
      const now = performance.now();
      const last = tapRef.current;
      if (last && now - last.time < 320 && Math.hypot(event.clientX - last.x, event.clientY - last.y) < 30) {
        tapRef.current = null;
        const g = gestureRef.current;
        if (g.magnification === 100) g.onZoomReset?.(); else g.onZoom?.(1);
      } else {
        tapRef.current = { time: now, x: event.clientX, y: event.clientY };
      }
    }
    pointersRef.current.delete(event.pointerId);
    pinchRef.current = null;
    if (pointersRef.current.size === 1) {
      const [remaining] = [...pointersRef.current.values()];
      dragRef.current = { x: remaining.x, y: remaining.y, panX: pan.x, panY: pan.y };
      return;
    }
    dragRef.current = null;
    setDragging(false);
  }

  if (unsupported) return <p className="canvas-fallback" role="alert">This browser cannot draw the microscope view. Please update your browser or try another one. / متصفحك لا يستطيع عرض المجهر. حدّث المتصفح أو جرّب متصفحاً آخر.</p>;
  return <canvas ref={canvasRef} className={`microscope-canvas${dragging ? ' is-dragging' : ''}${imageStatus === 'loading' ? ' is-loading' : ''}`} onPointerDown={startDrag} onPointerMove={drag} onPointerUp={endDrag} onPointerCancel={endDrag} onKeyDown={onKeyDown} tabIndex={0} role="img" aria-label={ariaLabel} />;
}
