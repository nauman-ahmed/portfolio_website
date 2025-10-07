import React from 'react'

export default function Resume() {
  return (
    // <!-- FEATURES -->
  <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
      <div className="container">
          <div className="row">

              <div className="col-lg-6 col-12">
                <h2 className="mb-5">Experiences</h2>

                <div className="timeline">

                    <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>05/25-10/25 </span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>MULTI-AGENT COVERAGE PATH PLANNING (UAVs)</span><br/><small>MASTER THESIS</small></h3>
                            <p>    
                                • Designed and implemented a multi-agent reinforcement learning environment for
                                UAVs using PyTorch, Gym, and NCP/Liquid Neural Networks.
                                <br/>
                                • Developed a 3D coverage environment simulator with obstacles, no-fly zones, and
                                agent collision handling.
                                <br/>
                                • Applied communication-based policies with attention and LNNs to improve
                                coverage efficiency and cooperation.
                                <br/>
                                • Achieved ~93% average coverage in simulation across varied terrains, visualized
                                results using Matplotlib and Plotly.
                                <br/>
                                • Integrated TensorBoard logging and training pipeline for reproducible
                                experiments.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>06/23-12/23</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>FULL STACK WEB DEVELOPER</span><br/><small>EVENTPLANNING24</small></h3>
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
                            <span>09/19-09/21</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>SOFTWARE ENGINEER</span><br/><small>STRATGIT</small></h3>
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
                <h2 className="mb-5 mobile-mt-2">Education</h2>

                  <div className="timeline">
                      <div className="timeline-wrapper">
                            <div className="timeline-yr" >
                                <span>2021-2025</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>M.Sc COMPUTER SCIENCE</span><small>UNIVERSITY OF PASSAU</small></h3>
                                <p>Passau, Germany</p>
                            </div>
                      </div>

                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2016-2020</span>
                          </div>
                          <div className="timeline-info">
                              <h3><span>B.Sc SOFTWARE ENGINEERING</span><small>USMAN INSTITUTE OF TECHNOLOGY</small></h3>
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
