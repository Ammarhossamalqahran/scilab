import { useEffect, useRef, useState, type PointerEvent } from 'react';

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
  ariaLabel: string;
};

export function MicroscopeCanvas({ imageSrc, magnification, coarseFocus, fineFocus, light, stainFilter = 'none', pan, placeholders, onPan, ariaLabel }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const scheduleRef = useRef<() => void>(() => {});
  const dragRef = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const [dragging, setDragging] = useState(false);
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
        const left = (width - imageWidth) / 2 + current.pan.x;
        const top = (height - imageHeight) / 2 + current.pan.y;
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

  function startDrag(event: PointerEvent<HTMLCanvasElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
    setDragging(true);
  }
  function drag(event: PointerEvent<HTMLCanvasElement>) {
    if (!dragRef.current) return;
    onPan({ x: dragRef.current.panX + event.clientX - dragRef.current.x, y: dragRef.current.panY + event.clientY - dragRef.current.y });
  }
  function endDrag() { dragRef.current = null; setDragging(false); }

  return <canvas ref={canvasRef} className={`microscope-canvas${dragging ? ' is-dragging' : ''}`} onPointerDown={startDrag} onPointerMove={drag} onPointerUp={endDrag} onPointerCancel={endDrag} role="img" aria-label={ariaLabel} />;
}
