import React from 'react'
import pdfFile from '../assets/files/Resume-Nauman.pdf';
import img from '../assets/images/undraw/man-developing-website-on-desk.svg'
import img2 from '../assets/images/undraw/img-Nauman.png'

export default function About() {
  return (
    // <!-- ABOUT -->
    <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-8 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-2">Hey everyone, I'm</span>
                                <div className="animated-info">
                                    <span className="animated-item">Nauman Ahmed</span>
                                    <span className="animated-item">Full Stack Developer</span>
                                    <span className="animated-item">AI Engineer</span>
                                </div>
                        </h1>

                        <p>
                        Results-driven Software Engineer with <strong>5+ years of hands-on experience</strong>, including 2.5 years in professional software development. I have completed my <strong>Master's degree in Computer Science</strong> from the <strong>University of Passau, Germany</strong> and I specialize in building scalable, <strong>high-performance web and mobile applications</strong>. I have worked on various projects using different technologies and frameworks.
                        <br />
                        <br />
                        I’m a <strong>continuous learner</strong>, passionate about solving complex problems, optimizing performance, and creating user-centric solutions. I thrive in Agile teams (Scrum, Kanban) and bring a collaborative mindset to every project.
                        <br />
                        <br />
                        Apart from my profession, I love playing chess, exploring places, running and watching cricket.
                        </p>
                        
                        <div className="custom-btn-group mt-4">
                          <a href={pdfFile} target="_blank" rel="noopener noreferrer" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> View Resume</a>
                          <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get in touch</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 col-12">
                    <div className="about-image svg position-relative">
                        <div className="circular-image-container">
                            <img src={img2} className="img-fluid circular-image" alt="svg image" />
                            <div className="image-overlay"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
