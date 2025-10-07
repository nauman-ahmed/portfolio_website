import React from 'react'
import { SiAngular, SiVercel, SiPlaywright, SiReact, SiNextdotjs } from "react-icons/si";

export default function Skills() {
  return (
    // SKILLS
    <section className="skills py-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center">Skills</h2>

            <div className="skills-grid">
              {/* Frontend */}
              <div className="skill-item">
                <i className="devicon-react-original skill-icon"></i>
                <span className="skill-name">React</span>
              </div>

              <div className="skill-item">
                <i className="devicon-nextjs-original skill-icon"></i>
                <span className="skill-name">Next.js</span>
              </div>

              <div className="skill-item">
                <i className="devicon-react-original skill-icon"></i>
                <span className="skill-name">React Native</span>
              </div>

              <div className="skill-item">
                <i className="devicon-vuejs-plain skill-icon"></i>
                <span className="skill-name">Vue.js</span>
              </div>

              <div className="skill-item">
                <SiAngular className="skill-icon" />
                <span className="skill-name">Angular</span>
              </div>

              <div className="skill-item">
                <i className="devicon-typescript-plain skill-icon"></i>
                <span className="skill-name">TypeScript</span>
              </div>

              <div className="skill-item">
                <i className="devicon-d3js-plain skill-icon"></i>
                <span className="skill-name">D3.js</span>
              </div>

              {/* Backend */}
              <div className="skill-item">
                <i className="devicon-nodejs-plain skill-icon"></i>
                <span className="skill-name">Node.js</span>
              </div>

              <div className="skill-item">
                <i className="devicon-express-original skill-icon"></i>
                <span className="skill-name">Express</span>
              </div>

              <div className="skill-item">
                <i className="devicon-django-plain skill-icon"></i>
                <span className="skill-name">Django</span>
              </div>

              <div className="skill-item">
                <i className="devicon-fastapi-plain skill-icon"></i>
                <span className="skill-name">FastAPI</span>
              </div>

              <div className="skill-item">
                <i className="devicon-flask-original skill-icon"></i>
                <span className="skill-name">Flask</span>
              </div>

              {/* APIs */}
              <div className="skill-item">
                <i className="fas fa-plug skill-icon"></i>
                <span className="skill-name">RESTful</span>
              </div>

              <div className="skill-item">
                <i className="devicon-graphql-plain skill-icon"></i>
                <span className="skill-name">GraphQL</span>
              </div>

              {/* Testing */}
              <div className="skill-item">
                <i className="devicon-jest-plain skill-icon"></i>
                <span className="skill-name">Jest</span>
              </div>

              <div className="skill-item">
                <i className="fas fa-wrench skill-icon"></i>
                <span className="skill-name">React Testing Library</span>
              </div>

              <div className="skill-item">
                <SiPlaywright className="skill-icon" />
                <span className="skill-name">Playwright</span>
              </div>

              {/* Databases */}
              <div className="skill-item">
                <i className="devicon-mongodb-plain skill-icon"></i>
                <span className="skill-name">MongoDB</span>
              </div>

              <div className="skill-item">
                <i className="devicon-postgresql-plain skill-icon"></i>
                <span className="skill-name">PostgreSQL</span>
              </div>

              <div className="skill-item">
                <i className="devicon-mysql-plain skill-icon"></i>
                <span className="skill-name">MySQL</span>
              </div>

              {/* DevOps & Cloud */}
              <div className="skill-item">
                <i className="devicon-amazonwebservices-plain skill-icon"></i>
                <span className="skill-name">AWS</span>
              </div>

              <div className="skill-item">
                <i className="devicon-docker-plain skill-icon"></i>
                <span className="skill-name">Docker</span>
              </div>

              <div className="skill-item">
                <i className="devicon-terraform-plain skill-icon"></i>
                <span className="skill-name">Terraform</span>
              </div>

              <div className="skill-item">
                <i className="devicon-jenkins-plain skill-icon"></i>
                <span className="skill-name">Jenkins</span>
              </div>

              <div className="skill-item">
                <SiVercel className="skill-icon" />
                <span className="skill-name">Vercel</span>
              </div>

              <div className="skill-item">
                <i className="devicon-heroku-plain skill-icon"></i>
                <span className="skill-name">Heroku</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
