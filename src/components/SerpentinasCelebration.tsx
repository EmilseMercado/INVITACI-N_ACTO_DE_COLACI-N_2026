import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface Streamer {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  width: number;
  phase: number;
  phaseSpeed: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  glowColor: string;
  type: 'ribbon' | 'sparkle';
  opacity: number;
}

const STREAMER_COLORS = [
  { color: '#FBF3D5', glow: 'rgba(251, 243, 213, 0.85)' },
  { color: '#EDD082', glow: 'rgba(237, 208, 130, 0.8)' },
  { color: '#DFBA5B', glow: 'rgba(223, 186, 91, 0.75)' },
  { color: '#C99E3A', glow: 'rgba(201, 158, 58, 0.7)' },
  { color: '#60A5FA', glow: 'rgba(96, 165, 250, 0.65)' },
];

export function SerpentinasCelebration() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const count = width < 640 ? 52 : 85;
    const items: Streamer[] = Array.from({ length: count }, (_, i) => {
      const palette = STREAMER_COLORS[i % STREAMER_COLORS.length];
      const isRibbon = i % 3 !== 0;
      return {
        x: Math.random() * width,
        y: -Math.random() * height * 0.7 - 20,
        vx: (Math.random() - 0.5) * 1.6,
        vy: Math.random() * 2.2 + 1.5,
        length: isRibbon ? Math.random() * 26 + 18 : Math.random() * 3.5 + 2,
        width: isRibbon ? Math.random() * 3.2 + 2.2 : Math.random() * 3 + 2,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.08 + 0.04,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.06,
        color: palette.color,
        glowColor: palette.glow,
        type: isRibbon ? 'ribbon' : 'sparkle',
        opacity: 1,
      };
    });

    const startTime = performance.now();
    const DURATION = 6200;
    let frameId = 0;

    const render = (now: number) => {
      const elapsed = now - startTime;
      const globalFade = elapsed > 4200 ? Math.max(0, 1 - (elapsed - 4200) / 2000) : 1;

      ctx.clearRect(0, 0, width, height);

      for (const s of items) {
        s.phase += s.phaseSpeed;
        s.rotation += s.rotationSpeed;
        s.x += s.vx + Math.sin(s.phase) * 0.85;
        s.y += s.vy;

        const alpha = s.opacity * globalFade;
        if (alpha <= 0.01) continue;

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.shadowColor = s.glowColor;
        ctx.shadowBlur = s.type === 'ribbon' ? 10 : 14;

        if (s.type === 'ribbon') {
          // Curling S-shaped serpentina ribbon
          ctx.beginPath();
          const wave = Math.sin(s.phase * 1.4) * 7;
          ctx.moveTo(0, -s.length / 2);
          ctx.bezierCurveTo(
            wave,
            -s.length / 6,
            -wave,
            s.length / 6,
            0,
            s.length / 2,
          );
          ctx.strokeStyle = s.color;
          ctx.lineWidth = s.width;
          ctx.lineCap = 'round';
          ctx.stroke();
        } else {
          // Shimmering 4-point star sparkle
          const r = s.length;
          ctx.fillStyle = s.color;
          ctx.beginPath();
          for (let j = 0; j < 4; j++) {
            const angle = (j * Math.PI) / 2;
            const ox = Math.cos(angle) * r * 1.8;
            const oy = Math.sin(angle) * r * 1.8;
            const ix = Math.cos(angle + Math.PI / 4) * (r * 0.45);
            const iy = Math.sin(angle + Math.PI / 4) * (r * 0.45);
            if (j === 0) ctx.moveTo(ox, oy);
            else ctx.lineTo(ox, oy);
            ctx.lineTo(ix, iy);
          }
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
      }

      if (elapsed < DURATION) {
        frameId = window.requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    frameId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Initial Golden Radiant Flash on Invitation Reveal */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,rgba(251,243,213,0.52)_0%,rgba(237,208,130,0.22)_40%,transparent_75%)]"
        initial={{ opacity: 0.95, scale: 0.9 }}
        animate={{ opacity: 0, scale: 1.25 }}
        transition={{ duration: 1.35, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Falling Shimmering Golden Serpentinas & Sparkles */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 h-full w-full"
      />
    </>
  );
}
