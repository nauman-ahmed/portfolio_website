import { useEffect, useState } from 'react';

/** Tracks which section is currently in view, for the nav. */
export default function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return undefined;

    const onScroll = () => {
      // At the very bottom the last section can never cross the line if it is
      // shorter than the viewport, which would leave the nav marking the
      // section above it. Treat hitting the end as reaching the last section.
      const atEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atEnd) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      // Otherwise: the section whose top has most recently passed under the nav.
      const line = window.scrollY + 120;
      let current = null;
      for (const s of sections) {
        if (s.offsetTop <= line) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
}
