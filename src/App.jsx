import { useEffect } from 'react'
import useReveal from './hooks/useReveal'
import './styles/tokens.css'
import './styles/hero.css'
import './styles/work.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Publications from './sections/Publications'
import Contact from './sections/Contact'
import Projects from './sections/Projects'
import Footer from './sections/Footer'

// Height of the sticky nav, so anchors don't land underneath it.
const NAV_OFFSET = 64;

function App() {
  useReveal();

  useEffect(() => {
    // The site is dark-only now. The legacy stylesheet carries its dark styles
    // behind .dark-mode, so keeping the class on <body> holds the not-yet-migrated
    // sections together with the new hero until their own phase lands.
    document.body.classList.add('dark-mode');

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    };

    // Delegated, so it keeps working as sections are rebuilt phase by phase.
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Publications />
      <Contact />
      <Footer />
    </>
  )
}

export default App
