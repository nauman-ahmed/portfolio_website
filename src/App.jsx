import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Resume from './sections/Resume'
import Contact from './sections/Contact'
// index.js or App.js
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'popper.js';
import 'bootstrap';
// Import the carousel and its associated CSS
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import Swal from 'sweetalert2';
// Import Bootstrap JS to ensure jQuery plugins like tooltip are available
import 'bootstrap';
import Projects from './sections/Projects'
import Modal from './components/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Optional if you need the CSS;




function App() {
  const [count, setCount] = useState(0)



  useEffect(() => {
    // COLOR MODE
    $('.color-mode').click(function () {
      $('.color-mode-icon').toggleClass('active');
      $('body').toggleClass('dark-mode');
    });

    // HEADER
    $('.navbar').headroom();

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



  useEffect(() => {
    // Run jQuery initialization only once when the component mounts
    $(document).ready(function () {
      // Initialize owlCarousel if jQuery is properly attached
      if ($('.owl-carousel').length > 0) {
        $('.owl-carousel').owlCarousel({
          items: 1,
          loop: true,
          margin: 10,
          nav: true,
        });
      }
    });
  }, []); // Empty dependency array ensures this runs once


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
