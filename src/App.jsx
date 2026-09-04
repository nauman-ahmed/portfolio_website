import { useEffect } from 'react'
import './App.css'
import 'animate.css'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Experiences from './sections/Experiences'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Projects from './sections/Projects'

// Height of the fixed navbar, so anchors don't land underneath it.
const NAV_OFFSET = 49;

function App() {
  useEffect(() => {
    // COLOR MODE — toggles the same classes the stylesheet already expects.
    const colorModeEl = document.querySelector('.color-mode');
    const handleColorMode = () => {
      document.querySelector('.color-mode-icon')?.classList.toggle('active');
      document.body.classList.toggle('dark-mode');
    };
    colorModeEl?.addEventListener('click', handleColorMode);

    // SMOOTHSCROLL — native smooth scrolling, offset for the fixed header.
    const anchors = document.querySelectorAll('.nav-link, .custom-btn-link');
    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick));

    return () => {
      colorModeEl?.removeEventListener('click', handleColorMode);
      anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick));
    };
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Experiences />
      <Skills />
      <Certifications />
      <Contact />
    </>
  )
}

export default App
