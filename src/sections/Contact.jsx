import React from 'react'
import Swal from 'sweetalert2';

export default function Contact() {


    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", function (event) {
          event.preventDefault();

          const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
          };

          fetch("https://portfolio-website-bfq5.onrender.com/api/send-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => {
              // Use SweetAlert2 for success notification
              Swal.fire({
                icon: "success",
                title: "Form submitted!",
                text: "Your form has been submitted successfully.",
              });

              // Reset the form after successful submission
              form.reset();
            })
            .catch((error) => {
              console.error(
                "There was a problem with the fetch operation:",
                error
              );
              // Use SweetAlert2 for error notification
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "There was an error submitting the form.",
              });
            });
        });
      });
    return (
        // <!-- CONTACT -->
        <section className="contact py-5" id="contact">
            <div className="container">
                <div className="row">

                    <div className="col-lg-5 mr-lg-5 col-12">
                        <div className="google-map w-100">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.2231844537023!2d13.448327144020794!3d48.571222960779345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477458a41d07896d%3A0x4784ab6e1b9463f6!2sNeuburger%20Str.%2031A%2C%2094032%20Passau!5e0!3m2!1sen!2sde!4v1729523499687!5m2!1sen!2sde" width="600" style={{ border: '0px' }} height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>



                        <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
                            <div className="contact-info-item">
                                <h3 className="mb-3 text-white">Contact Us</h3>
                                <p className="footer-text mb-0">Cell Number: +4915228835221</p>
                                <p>Email: <a href="mailto:naumanahmed449@gmail.com">naumanahmed449@gmail.com</a></p>
                            </div>
                            <ul className="social-links">
                                <li><a target='_blank' href="https://www.instagram.com/nauman_ahmed7/profilecard/?igsh=ejB2cXYzYnBncXN1" className="uil uil-instagram" data-toggle="tooltip" data-placement="left" title="Instagram"></a></li>
                                <li><a target='_blank' href="https://www.linkedin.com/in/nauman-ahmed-b190b219a/" className="uil" data-toggle="tooltip" data-placement="left" title="LinkedIn">
                                    <i className="fab fa-linkedin icon"></i></a>
                                </li>
                                <li><a target='_blank' href="https://github.com/nauman-ahmed" className="uil" data-toggle="tooltip" data-placement="left" title="GitHub">
                                    <i className="fab fa-github icon"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="contact-form">
                            <h2 className="mb-4">Interested to work together? Let's talk</h2>

                            <form id="contact-form">
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <input type="text" className="form-control" name="name" placeholder="Your Name" id="name" required />
                                    </div>

                                    <div className="col-lg-6 col-12">
                                        <input type="email" className="form-control" name="email" placeholder="Email" id="email" required />
                                    </div>

                                    <div className="col-12">
                                        <textarea name="message" rows="6" className="form-control" id="message" placeholder="Message" required></textarea>
                                    </div>

                                    <div className="ml-lg-auto col-lg-5 col-12">
                                        <input type="submit" className="form-control submit-btn" value="Connect!" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
