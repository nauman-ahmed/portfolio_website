import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap';
import Projects from './sections/Projects'
import Modal from './components/Modal'
import 'headroom.js';
import 'smoothscroll';
window.jQuery = $;
window.$ = $;
import 'animate.css';
import Headroom from 'headroom.js';



function App() {
  const [count, setCount] = useState(0)



  useEffect(() => {
    // COLOR MODE
    $('.color-mode').click(function () {
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');
    });

    // HEADER
      // HEADER (Headroom.js without jQuery)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const headroom = new Headroom(navbar);
    headroom.init();
  }

    // SMOOTHSCROLL
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top - 49,
        },
        1000
      );
      event.preventDefault();
    });

    // TOOLTIP INITIALIZATION
    // $('[data-toggle="tooltip"]').tooltip();
  }, []); // Empty dependency array ensures this runs once when the component mounts




  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Modal />
      <Resume />
      <Contact />
    </>
  )
}

export default App
