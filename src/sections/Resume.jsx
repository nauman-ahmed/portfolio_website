import React from 'react'

export default function Resume() {
  return (
    // <!-- FEATURES -->
  <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
      <div className="container">
          <div className="row">

              <div className="col-lg-6 col-12">
                <h2 className="mb-4">Experiences</h2>

                  <div className="timeline">
                      <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>12/2023 </span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>FULL STACK WEB DEVELOPER</span><small>EVENTPLANNING24</small></h3>
                                <p>I have been working as a React JS developer using TypeScript and I have also been involved in building Next JS applications. Following is my role and responsibilities:
                                  <br/>
                                  • RESTful API communication
                                  <br/>
                                  • Tweaking UI
                                  <br/>
                                  • Building features in the existing platform 
                                  <br/>
                                  • Serializing APIs
                                </p>
                            </div>
                      </div>

                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>09/2021</span>
                          </div>
                          <div className="timeline-info">
                              <h3><span>SOFTWARE ENGINEER</span><small>STRATGIT</small></h3>
                              <p>I worked as a React JS, React Native, and Vue JS developer at this firm. Following were my responsibilities at the firm I was operating
                                at:
                                <br/>
                                • Optimizing applications to maximize the platform's performance
                                <br/>
                                • Designing responsive website along with mobile-friendly utilities
                                <br/>
                                • Testing the application for usability, maintenance, and bug fixation
                              </p>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="col-lg-6 col-12">
                <h2 className="mb-4 mobile-mt-2">Educations</h2>

                  <div className="timeline">
                      <div className="timeline-wrapper">
                            <div className="timeline-yr">
                                <span>2025</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>MASTER OF SCIENCE IN COMPUTER SCIENCE</span><small>University of Passau</small></h3>
                                <p>Passau, Germany.</p>
                            </div>
                      </div>

                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2020</span>
                          </div>
                          <div className="timeline-info">
                              <h3><span>BACHELOR OF SCIENCE IN SOFTWARE ENGINEERING</span><small>Usman Institute of Technology</small></h3>
                              <p>Karachi, Pakistan</p>
                          </div>
                      </div>
                      
                  </div>
              </div>
              
          </div>
      </div>
  </section>
  )
}
