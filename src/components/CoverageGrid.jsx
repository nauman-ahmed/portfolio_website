import { useEffect, useRef } from 'react';

/**
 * Ambient backdrop for the hero: two agents sweeping a voxel grid until it is
 * covered, then holding. A direct reference to the thesis simulator — the site's
 * one piece of ambient motion, so everything else can stay still.
 */
export default function CoverageGrid({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cols = 0;
    let rows = 0;
    let cellW = 0;
    let cellH = 0;
    let covered = [];
    let agents = [];
    let timer = null;
    let raf = null;

    const CELL_TARGET = 46;   // px — coarse enough to read as a grid at a glance
    const SWEEP_MS = 4200;   // total time for the two agents to cover the field

    function layout() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return false;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(8, Math.round(w / CELL_TARGET));
      rows = Math.max(4, Math.round(h / CELL_TARGET));
      cellW = w / cols;
      cellH = h / rows;

      covered = new Array(cols * rows).fill(0);
      agents = [
        { x: 0, y: 0, dir: 1, colour: '#F2A93B', down: 1 },
        { x: cols - 1, y: rows - 1, dir: -1, colour: '#63A6BE', down: -1 },
      ];
      return true;
    }

    function paint() {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const v = covered[r * cols + c];
          if (v > 0) {
            ctx.fillStyle = `rgba(242, 169, 59, ${0.04 + v * 0.13})`;
            ctx.fillRect(c * cellW, r * cellH, cellW, cellH);
          }
        }
      }

      ctx.strokeStyle = 'rgba(46, 83, 97, 0.55)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) {
        ctx.moveTo(Math.round(c * cellW) + 0.5, 0);
        ctx.lineTo(Math.round(c * cellW) + 0.5, h);
      }
      for (let r = 0; r <= rows; r++) {
        ctx.moveTo(0, Math.round(r * cellH) + 0.5);
        ctx.lineTo(w, Math.round(r * cellH) + 0.5);
      }
      ctx.stroke();

      if (!reduce) {
        agents.forEach((a) => {
          ctx.fillStyle = a.colour;
          ctx.fillRect(a.x * cellW, a.y * cellH, cellW, cellH);
        });
      }
    }

    function step() {
      agents.forEach((a) => {
        covered[a.y * cols + a.x] = 1;
        a.x += a.dir;
        if (a.x >= cols || a.x < 0) {
          a.dir *= -1;
          a.x += a.dir;
          a.y += a.down;
          if (a.y >= rows) a.y = rows - 1;
          if (a.y < 0) a.y = 0;
        }
      });
      paint();
    }

    function start() {
      if (!layout()) return;
      if (reduce) {
        covered.fill(1);
        paint();
        return;
      }
      let n = 0;
      // Two agents cover the field between them, so each walks half of it.
      // Derive the tick rate from the cell count, otherwise the sweep takes
      // wildly different times on a phone and on a wide desktop.
      const budget = Math.ceil((cols * rows) / 2);
      const interval = Math.max(12, Math.round(SWEEP_MS / budget));
      clearInterval(timer);
      timer = setInterval(() => {
        step();
        if (++n >= budget) clearInterval(timer);
      }, interval);
      paint();
    }

    // Background tabs clamp timers to roughly one tick per second, which would
    // stretch a 4s sweep into minutes and leave the visitor arriving to a
    // half-drawn grid. Hold until the page is actually being looked at.
    const onVisibility = () => {
      if (!document.hidden) {
        document.removeEventListener('visibilitychange', onVisibility);
        start();
      }
    };

    if (document.hidden) {
      layout();
      paint();
      document.addEventListener('visibilitychange', onVisibility);
    } else {
      start();
    }

    let resizeT = null;
    const onResize = () => {
      clearTimeout(resizeT);
      resizeT = setTimeout(start, 180);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearInterval(timer);
      clearTimeout(resizeT);
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
