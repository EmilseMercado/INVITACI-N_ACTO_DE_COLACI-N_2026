import { useEffect, useRef, useState } from 'react';

interface GraduateCutoutImageProps {
  className?: string;
}

/**
 * Renders /assets/aistudio/MODELO_935a866f.png with its light studio background
 * cleanly removed via perimeter BFS flood-fill and anti-aliased edge feathering.
 */
export function GraduateCutoutImage({ className = '' }: GraduateCutoutImageProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = '/assets/aistudio/MODELO_935a866f.png';

    img.onload = () => {
      if (cancelled) return;
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const w = img.naturalWidth;
      const h = img.naturalHeight;
      canvas.width = w;
      canvas.height = h;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;

      const visited = new Uint8Array(w * h);
      const removed = new Uint8Array(w * h);
      const queue = new Int32Array(w * h);
      let head = 0;
      let tail = 0;

      // Studio backdrop is neutral gray/white (very low chroma, min luma ~150 in bottom shadows)
      // while gown (dark navy, luma < 55 & higher blue chroma) and hair/tassel (warm brown/gold) are clearly distinct.
      const isBackdrop = (idx: number): boolean => {
        const p = idx * 4;
        const r = data[p];
        const g = data[p + 1];
        const b = data[p + 2];
        const maxC = Math.max(r, g, b);
        const minC = Math.min(r, g, b);
        const chroma = maxC - minC;
        const luma = 0.299 * r + 0.587 * g + 0.114 * b;
        return luma > 125 && chroma < 18;
      };

      const enqueue = (idx: number) => {
        if (visited[idx]) return;
        visited[idx] = 1;
        if (isBackdrop(idx)) {
          removed[idx] = 1;
          queue[tail++] = idx;
        }
      };

      // Seed entire top, left, right edges, plus bottom corners outside the gown (gown spans ~0.28..0.79 at bottom)
      for (let x = 0; x < w; x++) {
        enqueue(x);
        if (x < w * 0.24 || x > w * 0.82) {
          enqueue((h - 1) * w + x);
        }
      }
      for (let y = 0; y < h; y++) {
        enqueue(y * w);
        enqueue(y * w + (w - 1));
      }

      while (head < tail) {
        const cur = queue[head++];
        const cx = cur % w;
        const cy = (cur - cx) / w;

        if (cx > 0) enqueue(cur - 1);
        if (cx < w - 1) enqueue(cur + 1);
        if (cy > 0) enqueue(cur - w);
        if (cy < h - 1) enqueue(cur + w);
      }

      // Apply transparent alpha to exterior pixels & feather/defringe 2px silhouette boundary
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const idx = y * w + x;
          const p = idx * 4;

          if (removed[idx]) {
            data[p + 3] = 0;
            continue;
          }

          let nearBgCount = 0;
          for (let dy = -2; dy <= 2; dy++) {
            const ny = y + dy;
            if (ny < 0 || ny >= h) continue;
            for (let dx = -2; dx <= 2; dx++) {
              const nx = x + dx;
              if (nx < 0 || nx >= w) continue;
              if (removed[ny * w + nx]) nearBgCount++;
            }
          }

          if (nearBgCount > 0) {
            const r = data[p];
            const g = data[p + 1];
            const b = data[p + 2];
            const luma = 0.299 * r + 0.587 * g + 0.114 * b;
            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const chroma = maxC - minC;

            // Defringe bright/neutral blended pixels along the outer silhouette
            if (luma > 75 && chroma < 28) {
              const fade = Math.max(0, 1 - nearBgCount / 10);
              data[p + 3] = Math.round(data[p + 3] * fade);
              data[p] = Math.round(r * 0.55);
              data[p + 1] = Math.round(g * 0.62);
              data[p + 2] = Math.round(b * 0.78);
            } else if (nearBgCount >= 6) {
              data[p + 3] = Math.round(data[p + 3] * 0.78);
            }
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);

      // Gentle bottom fade so the gown bottom merges smoothly into the navy card
      ctx.globalCompositeOperation = 'destination-out';
      const bottomFade = ctx.createLinearGradient(0, h * 0.84, 0, h);
      bottomFade.addColorStop(0, 'rgba(0,0,0,0)');
      bottomFade.addColorStop(1, 'rgba(0,0,0,1)');
      ctx.fillStyle = bottomFade;
      ctx.fillRect(0, h * 0.84, w, h * 0.16);
      ctx.globalCompositeOperation = 'source-over';

      setReady(true);
    };

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className={`relative select-none ${className}`}>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Graduada con toga azul marino y birrete"
        className={`h-auto w-full transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
