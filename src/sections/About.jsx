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
                        Results-driven Software Engineer with 5 years of hands-on development experience,
                        including 2.5 years of professional expertise in building scalable, high-performance
                        applications. Skilled in frontend development with ReactJS, Next.js, React Native,
                        Vue.js, and TypeScript, complemented by strong experience in backend engineering
                        using Node.js, Express, Django, FastAPI, and Flask. Proficient in designing and
                        integrating RESTful and GraphQL APIs, with proven ability to deliver end-to-end
                        solutions. Experienced in DevOps and cloud platforms including AWS, Docker,
                        Terraform, Jenkins, Vercel, and Heroku, ensuring reliable deployments and CI/CD
                        pipelines. Adept at working with databases like MongoDB, PostgreSQL, and MySQL to
                        architect efficient data models. Collaborative team player with a strong foundation in
                        Agile methodologies (Scrum, Kanban), version control, and DevOps best practices.
                        Passionate about solving complex problems, optimizing performance, and delivering
                        user-centric solutions.
                        </p>
                        
                        <div className="custom-btn-group mt-4">
                          <a href={pdfFile} target="_blank" rel="noopener noreferrer" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> View Resume</a>
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
