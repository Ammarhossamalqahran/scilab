// Draws a 1080x1920 story-size card for a specimen on a canvas and returns a PNG blob.
type Text = { en: string; ar: string };
type CardInput = { imageSrc: string; title: Text; subtitle: Text; fact?: Text; lang: 'en' | 'ar'; heading: string; url: string; dark: boolean };

function wrap(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(/\s+/); const lines: string[] = []; let line = '';
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; } else line = test;
  }
  if (line) lines.push(line);
  return lines;
}

export async function renderShareCard(input: CardInput): Promise<Blob> {
  const W = 1080; const H = 1920; const pad = 72;
  const rtl = input.lang === 'ar';
  await Promise.all([document.fonts.load('600 60px "El Messiri"'), document.fonts.load('400 34px "IBM Plex Sans Arabic"')]).catch(() => undefined);
  const img = new Image(); img.src = input.imageSrc;
  await img.decode();
  const canvas = document.createElement('canvas'); canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const bg = input.dark ? '#0b100e' : '#f3f2ed'; const ink = input.dark ? '#edf2ec' : '#1c2821'; const soft = input.dark ? '#b7c1b9' : '#46564c'; const accent = input.dark ? '#7bdec3' : '#456f55';
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  ctx.direction = rtl ? 'rtl' : 'ltr'; ctx.textAlign = rtl ? 'right' : 'left';
  const x = rtl ? W - pad : pad; const maxW = W - pad * 2;

  ctx.fillStyle = accent; ctx.font = '600 38px "IBM Plex Sans Arabic", system-ui, sans-serif';
  ctx.fillText(input.heading, x, 130);

  // Photo, fitted (never cropped) inside a black frame.
  const frameY = 175; const frameH = 880;
  ctx.fillStyle = '#000'; ctx.fillRect(pad, frameY, maxW, frameH);
  const scale = Math.min(maxW / img.naturalWidth, frameH / img.naturalHeight);
  const dw = img.naturalWidth * scale; const dh = img.naturalHeight * scale;
  ctx.drawImage(img, pad + (maxW - dw) / 2, frameY + (frameH - dh) / 2, dw, dh);

  let y = frameY + frameH + 90;
  ctx.fillStyle = ink; ctx.font = '600 62px "El Messiri", "IBM Plex Sans Arabic", system-ui, sans-serif';
  for (const l of wrap(ctx, input.title[input.lang], maxW).slice(0, 2)) { ctx.fillText(l, x, y); y += 76; }
  ctx.fillStyle = accent; ctx.font = '400 34px "IBM Plex Sans Arabic", system-ui, sans-serif';
  ctx.direction = rtl ? 'ltr' : 'rtl';
  ctx.fillText(input.title[rtl ? 'en' : 'ar'], x, y); y += 60;
  ctx.direction = rtl ? 'rtl' : 'ltr';
  if (input.fact) {
    ctx.fillStyle = soft; ctx.font = '400 36px "IBM Plex Sans Arabic", system-ui, sans-serif';
    y += 20;
    for (const l of wrap(ctx, input.fact[input.lang], maxW).slice(0, 6)) { ctx.fillText(l, x, y); y += 54; }
  }
  ctx.fillStyle = accent; ctx.font = '600 38px "IBM Plex Sans Arabic", system-ui, sans-serif';
  ctx.direction = 'ltr'; ctx.textAlign = 'center';
  ctx.fillText(input.url.replace(/^https?:\/\//, ''), W / 2, H - 90);
  return new Promise((resolve, reject) => canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('png'))), 'image/png'));
}
