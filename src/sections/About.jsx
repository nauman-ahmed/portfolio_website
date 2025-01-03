import React from 'react'
import pdfFile from '../assets/files/Resume-Nauman.pdf';
import img from '../assets/images/undraw/man-developing-website-on-desk.svg'

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
                        Experienced Full Stack Web Developer and Software Engineer skilled in React.js,
                        Next.js, Flask, GraphQL, and TypeScript for building scalable, interactive applications.
                        Expertise in dynamic data visualization, complex data analysis, and robotics research,
                        particularly in Coverage Path Planning. Proficient in deploying robust solutions using
                        AWS, Heroku, and DigitalOcean. Driven to deliver innovative, efficient technology
                        solutions that align with business objectives.
                        </p>
                        
                        <div className="custom-btn-group mt-4">
                          <a href={pdfFile} className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> Download Resume</a>
                          <a href="#contact" className="btn custom-btn custom-btn-bg custom-btn-link">Get in touch</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src={img} className="img-fluid" alt="svg image" />
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
