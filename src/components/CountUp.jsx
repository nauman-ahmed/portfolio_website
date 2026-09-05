import { useEffect, useRef, useState } from 'react';

/** Counts to `value` once, when scrolled into view. Static under reduced motion. */
export default function CountUp({ value, decimals = 0, suffix = '', duration = 1100 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? value : 0
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = null;
    let started = false;

    // The observer only fires while the document is actually being rendered, so
    // in a background tab the figure would sit at 0 indefinitely. The number
    // matters more than the animation: if nothing has started shortly after
    // mount, show the real value.
    const fallback = setTimeout(() => {
      if (!started) {
        observer.disconnect();
        setShown(value);
      }
    }, 1200);

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        started = true;
        clearTimeout(fallback);

        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setShown(value * eased);
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
