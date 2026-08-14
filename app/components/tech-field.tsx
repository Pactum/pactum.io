import { useEffect, useRef } from "react";

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: [number, number, number]
  pulse: number
};

type Bolt = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: [number, number, number]
};

const PALETTE: [number, number, number][] = [
  [152, 199, 64],
  [94, 200, 232],
  [240, 180, 41],
];

export function TechField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const stage = canvas?.parentElement;
    if (!canvas || !stage) {
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0.5, y: 0.45, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];
    let bolts: Bolt[] = [];

    const resize = () => {
      const bounds = stage.getBoundingClientRect();
      width = Math.max(1, Math.floor(bounds.width));
      height = Math.max(1, Math.floor(bounds.height));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const count = Math.round(Math.min(140, Math.max(70, (width * height) / 9000)));
      particles = Array.from({ length: count }, () => makeParticle());
      bolts = Array.from({ length: 4 }, () => makeBolt());
    };

    const makeParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: 0.7 + Math.random() * 1.8,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      pulse: Math.random() * Math.PI * 2,
    });

    const makeBolt = (): Bolt => {
      const fromEdge = Math.random();
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      if (fromEdge < 0.25) {
        return { x: 0, y: Math.random() * height, vx: 3.2 + Math.random() * 2.4, vy: (Math.random() - 0.5) * 1.4, life: 1, color };
      }
      if (fromEdge < 0.5) {
        return { x: width, y: Math.random() * height, vx: -(3.2 + Math.random() * 2.4), vy: (Math.random() - 0.5) * 1.4, life: 1, color };
      }
      if (fromEdge < 0.75) {
        return { x: Math.random() * width, y: 0, vx: (Math.random() - 0.5) * 1.4, vy: 3.2 + Math.random() * 2.4, life: 1, color };
      }
      return { x: Math.random() * width, y: height, vx: (Math.random() - 0.5) * 1.4, vy: -(3.2 + Math.random() * 2.4), life: 1, color };
    };

    const onMove = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      pointer.x = (event.clientX - bounds.left) / bounds.width;
      pointer.y = (event.clientY - bounds.top) / bounds.height;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      const px = pointer.x * width;
      const py = pointer.y * height;
      const link = Math.min(width, height) * 0.12;

      for (const particle of particles) {
        if (pointer.active) {
          const dx = px - particle.x;
          const dy = py - particle.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 180) {
            particle.vx += (dx / dist) * 0.012;
            particle.vy += (dy / dist) * 0.012;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.03;
        particle.vx *= 0.994;
        particle.vy *= 0.994;
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
      }

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > link) {
            continue;
          }
          const alpha = (1 - dist / link) * 0.22;
          const [r, g, bl] = a.color;
          ctx.strokeStyle = `rgba(${r},${g},${bl},${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const particle of particles) {
        const glow = 0.35 + Math.sin(particle.pulse) * 0.25;
        const [r, g, b] = particle.color;
        ctx.fillStyle = `rgba(${r},${g},${b},${0.45 + glow * 0.35})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = 0; i < bolts.length; i += 1) {
        const bolt = bolts[i];
        bolt.x += bolt.vx;
        bolt.y += bolt.vy;
        bolt.life -= 0.008;
        const [r, g, b] = bolt.color;
        const tailX = bolt.x - bolt.vx * 8;
        const tailY = bolt.y - bolt.vy * 8;
        const gradient = ctx.createLinearGradient(tailX, tailY, bolt.x, bolt.y);
        gradient.addColorStop(0, `rgba(${r},${g},${b},0)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},${Math.max(bolt.life, 0) * 0.9})`);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(bolt.x, bolt.y);
        ctx.stroke();

        if (bolt.life <= 0 || bolt.x < -40 || bolt.x > width + 40 || bolt.y < -40 || bolt.y > height + 40) {
          bolts[i] = makeBolt();
        }
      }

      frame = requestAnimationFrame(step);
    };

    const paintStill = () => {
      ctx.clearRect(0, 0, width, height);
      for (const particle of particles) {
        const [r, g, b] = particle.color;
        ctx.fillStyle = `rgba(${r},${g},${b},0.35)`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerleave", onLeave);

    if (reduced) {
      paintStill();
    } else {
      frame = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-field" aria-hidden="true" />;
}
