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
                        <strong>Results-driven Software Engineer</strong> with <strong>5+ years of experience</strong> (including <strong>2.5 years professionally</strong>) and a <strong>Master’s in Computer Science</strong> from the <strong>University of Passau, Germany</strong>. I specialize in building <strong>scalable web and mobile applications</strong> with <strong>advanced AI/ML capabilities</strong>.
                        <br />
                        <br />
                        Experienced in developing <strong>AI-powered solutions</strong> such as <strong>conversational assistants</strong>, <strong>personalized content platforms</strong>, and <strong>intelligent search systems</strong> using <strong>LLMs</strong> (e.g., <strong>Mixtral-8x7B</strong>), <strong>BERT-based moderation</strong>, and <strong>semantic search</strong> with <strong>sentence transformers</strong>. Skilled in <strong>end-to-end AI development</strong> — from <strong>data processing</strong> to <strong>model deployment</strong> and <strong>UI integration</strong>.
                        <br />
                        <br />
                        A <strong>continuous learner</strong> passionate about <strong>solving complex problems</strong>, <strong>optimizing performance</strong>, and creating <strong>user-centric, AI-driven solutions</strong>. I thrive in <strong>Agile environments</strong> (<strong>Scrum</strong>, <strong>Kanban</strong>) and enjoy <strong>collaborating across disciplines</strong>.
                        <br />
                        <br />
                        Outside of work, I love <strong>chess</strong>, <strong>travel</strong>, <strong>running</strong>, and <strong>cricket</strong>.
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
