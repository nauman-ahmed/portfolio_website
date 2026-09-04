import React from 'react'
import thesisPdf from '../assets/files/Masters-Thesis-Nauman-Ahmed.pdf'

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
                            <h3><span>MULTI-AGENT 3D COVERAGE PATH PLANNING (UAVs)</span><br/><small>MASTER THESIS &mdash; UNIVERSITY OF PASSAU</small></h3>
                            <p>    
                                • First application of Liquid Neural Networks (Liquid Time-Constant models) to
                                coverage path planning as an end-to-end learned policy, addressing a gap
                                identified in the literature.
                                <br/>
                                • Built a constrained 3D voxel environment (20&times;20&times;6) with terrain,
                                volumetric no-fly zones, safe landing zones, and hard movement-budget limits
                                enforced through legal-action masking and forced-return safety.
                                <br/>
                                • Designed a hybrid policy combining multi-branch spatial feature extraction, an
                                LTC recurrent core, and attention-based inter-agent communication, trained with
                                PPO in PyTorch.
                                <br/>
                                • Trained across 11,436 episodes reaching ~97% mean coverage in late training;
                                on 100 held-out fixed-seed environments the selected checkpoint achieved 93.0%
                                mean coverage at budget 150 and 88.0% at budget 100.
                                <br/>
                                • Recorded zero collision penalties across fixed-seed evaluation, with
                                complementary exploration between agents and a fully reproducible
                                training and evaluation protocol.
                            </p>
                        </div>
                    </div>

                    <div className="timeline-wrapper">
                        <div className="timeline-yr">
                            <span>06/23-12/23</span>
                        </div>
                        <div className="timeline-info">
                            <h3><span>FRONTEND WEB DEVELOPER</span><br/><small>EVENTPLANNING24</small></h3>
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
                                <span>04/22-04/26</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>M.Sc COMPUTER SCIENCE</span><small>UNIVERSITY OF PASSAU</small></h3>
                                <p>Passau, Germany
                                    <br/>
                                    <br/>
                                    <strong>Master&rsquo;s Thesis &mdash; Grade: 2.0</strong>
                                    <br/>
                                    <em>Multi-Agent 3D Coverage Path Planning Using a Hybrid Liquid Neural
                                    Reinforcement Learning Model for Autonomous UAV Systems</em>
                                    <br/>
                                    Chair of Informatik &mdash; Examiners: Prof. Dr. Mario D&ouml;ller,
                                    Prof. Dr. Harald Kosch
                                    <br/>
                                    <a href={thesisPdf} target="_blank" rel="noopener noreferrer" className="btn mt-3 custom-btn">
                                        <i className='uil uil-file-alt'></i> Read Thesis
                                    </a>
                                </p>
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
