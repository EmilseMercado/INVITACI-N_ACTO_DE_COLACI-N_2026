import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityDirection: number;
  hue: 'gold' | 'champagne';
}

export function GoldenParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: Particle[] = [];

    const createParticles = (count: number): Particle[] => {
      return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.9 + 0.6,
        speedY: -(Math.random() * 0.28 + 0.08),
        speedX: (Math.random() - 0.5) * 0.16,
        opacity: Math.random() * 0.55 + 0.15,
        opacityDirection: Math.random() > 0.5 ? 1 : -1,
        hue: Math.random() > 0.35 ? 'gold' : 'champagne',
      }));
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const targetCount = width < 640 ? 34 : 58;
      particles = createParticles(targetCount);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.y += p.speedY;
          p.x += p.speedX;
          p.opacity += p.opacityDirection * 0.003;

          if (p.opacity >= 0.78) {
            p.opacity = 0.78;
            p.opacityDirection = -1;
          } else if (p.opacity <= 0.12) {
            p.opacity = 0.12;
            p.opacityDirection = 1;
          }

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
        }

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.2);
        if (p.hue === 'gold') {
          gradient.addColorStop(0, `rgba(241, 216, 141, ${p.opacity})`);
          gradient.addColorStop(0.5, `rgba(212, 168, 67, ${p.opacity * 0.45})`);
          gradient.addColorStop(1, 'rgba(212, 168, 67, 0)');
        } else {
          gradient.addColorStop(0, `rgba(255, 248, 225, ${p.opacity * 0.9})`);
          gradient.addColorStop(0.5, `rgba(237, 208, 130, ${p.opacity * 0.35})`);
          gradient.addColorStop(1, 'rgba(237, 208, 130, 0)');
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(draw);
      }
    };

    handleResize();
    draw();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
