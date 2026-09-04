import React from 'react'
import pdfFile from '../assets/files/Nauman-Ahmed-Applied-AI-CV.pdf';
import img2 from '../assets/images/undraw/img-Nauman.webp'

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
                                    <span className="animated-item">Applied AI Engineer</span>
                                    <span className="animated-item">AI Systems Engineer</span>
                                </div>
                        </h1>

                        <p>
                        <strong>Applied AI Engineer</strong> with a <strong>software engineering background</strong> and <strong>5+ years</strong> of combined professional and academic experience building <strong>AI-powered applications</strong>, <strong>NLP systems</strong>, <strong>agentic workflows</strong>, and <strong>scalable backend services</strong>.
                        <br />
                        <br />
                        Experienced in <strong>multi-agent systems</strong>, <strong>Retrieval-Augmented Generation (RAG)</strong>, <strong>LLM applications</strong>, <strong>semantic search</strong>, <strong>transformer-based NLP</strong>, and <strong>workflow automation</strong>. Hands-on experience building end-to-end AI systems with <strong>LangGraph</strong>, <strong>LangChain</strong>, <strong>Hugging Face Transformers</strong>, <strong>FastAPI</strong>, <strong>PostgreSQL</strong>, <strong>pgvector</strong>, <strong>Redis</strong>, <strong>Docker</strong>, and <strong>AWS</strong>.
                        <br />
                        <br />
                        Strong <strong>product and engineering mindset</strong>, with <strong>10+ web and cloud-based solutions</strong> delivered and production-oriented AI applications taken from <strong>experimentation and evaluation through to deployment</strong>. I hold a <strong>Master&rsquo;s in Computer Science</strong> from the <strong>University of Passau, Germany</strong>, where my thesis was the first work to apply <strong>Liquid Neural Networks</strong> to <strong>multi-agent coverage path planning</strong>.
                        <br />
                        <br />
                        Outside of work, I love <strong>chess</strong>, <strong>travel</strong>, <strong>running</strong>, and <strong>cricket</strong>.
                        </p>
                        
                        <div className="custom-btn-group mt-4">
                          <a href={pdfFile} target="_blank" rel="noopener noreferrer" className="btn mr-lg-2 custom-btn"><i className='uil uil-file-alt'></i> View CV</a>
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
