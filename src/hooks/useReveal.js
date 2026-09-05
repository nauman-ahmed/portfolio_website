import { useEffect } from 'react';

/**
 * Adds `is-in` to elements marked `data-reveal` as they scroll into view, once.
 * Everything is visible by default in the CSS — the reveal only *delays* it —
 * so if IntersectionObserver never runs (background tab, no support) the page
 * still reads correctly rather than staying blank.
 */
export default function useReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const nodes = document.querySelectorAll('[data-reveal]');
    if (!nodes.length) return undefined;

    nodes.forEach((n) => n.classList.add('reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 }
    );

    nodes.forEach((n) => observer.observe(n));

    // Safety net: if the observer never fires, drop the hidden state anyway.
    const fallback = setTimeout(() => {
      nodes.forEach((n) => n.classList.add('is-in'));
    }, 2500);

    return () => {
      clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
}
