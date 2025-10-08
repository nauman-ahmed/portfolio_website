import React from 'react'
import { 
  SiAngular, SiVercel, SiPlaywright, SiFlask, 
  SiTypescript, SiD3Dotjs, SiFastapi, SiGraphql, SiJest, SiMongodb, SiPostgresql, SiMysql,
  SiAmazonwebservices, SiDocker, SiTerraform, SiJenkins, SiHeroku,
  SiPandas, SiNumpy, SiPytorch, SiScikitlearn, SiOpenai, SiTensorflow 
} from "react-icons/si";
import { MdOutlineLanguage } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaSpider } from "react-icons/fa";

export default function Skills() {
  return (
    <section className="skills py-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center">Skills</h2>

            <div className="skills-grid">
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
                <SiAngular className="skill-icon" color="red"/>
                <span className="skill-name">Angular</span>
              </div>

              <div className="skill-item">
                <SiTypescript className="skill-icon" color="#3178C6"/>
                <span className="skill-name">TypeScript</span>
              </div>

              <div className="skill-item">
                <SiD3Dotjs className="skill-icon" color="orange"/>
                <span className="skill-name">D3.js</span>
              </div>

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
                <SiFastapi className="skill-icon" color="#009688"/>
                <span className="skill-name">FastAPI</span>
              </div>

              <div className="skill-item">
                <SiFlask className="skill-icon" color="#000000"/>
                <span className="skill-name">Flask</span>
              </div>

              <div className="skill-item">
                <i className="fas fa-plug skill-icon"></i>
                <span className="skill-name">RESTful</span>
              </div>

              <div className="skill-item">
                <SiGraphql className="skill-icon" color="#E10098"/>
                <span className="skill-name">GraphQL</span>
              </div>

              <div className="skill-item">
                <SiJest className="skill-icon" color="#C21325"/>
                <span className="skill-name">Jest</span>
              </div>

              <div className="skill-item">
                <i className="fas fa-wrench skill-icon"></i>
                <span className="skill-name">React Testing Library</span>
              </div>

              <div className="skill-item">
                <SiPlaywright className="skill-icon" color="#2EAD32"/>
                <span className="skill-name">Playwright</span>
              </div>

              <div className="skill-item">
                <SiMongodb className="skill-icon" color="#47A248"/>
                <span className="skill-name">MongoDB</span>
              </div>

              <div className="skill-item">
                <SiPostgresql className="skill-icon" color="#336791"/>
                <span className="skill-name">PostgreSQL</span>
              </div>

              <div className="skill-item">
                <SiMysql className="skill-icon" color="#4479A1"/>
                <span className="skill-name">MySQL</span>
              </div>

              <div className="skill-item">
                <SiAmazonwebservices className="skill-icon" color="#FF9900"/>
                <span className="skill-name">AWS</span>
              </div>

              <div className="skill-item">
                <SiDocker className="skill-icon" color="#2496ED"/>
                <span className="skill-name">Docker</span>
              </div>

              <div className="skill-item">
                <SiTerraform className="skill-icon" color="#7C42A0"/>
                <span className="skill-name">Terraform</span>
              </div>

              <div className="skill-item">
                <SiJenkins className="skill-icon" color="#D24939"/>
                <span className="skill-name">Jenkins</span>
              </div>

              <div className="skill-item">
                <SiVercel className="skill-icon" color="#000000"/>
                <span className="skill-name">Vercel</span>
              </div>

              <div className="skill-item">
                <SiHeroku className="skill-icon" color="#430098"/>
                <span className="skill-name">Heroku</span>
              </div>

              <div className="skill-item">
                <SiOpenai className="skill-icon" title="LLM" color="#412991" />
                <span className="skill-name">LLMs</span>
              </div>

              <div className="skill-item">
                <SiTensorflow className="skill-icon" title="BERT" color="#FF6F00" />
                <span className="skill-name">BERT</span>
              </div>

              <div className="skill-item">
                <GiNetworkBars className="skill-icon" title="Sentence Transformers" color="#FFCC4D" />
                <span className="skill-name">Sentence Transformers</span>
              </div>

              <div className="skill-item">
                <SiPytorch className="skill-icon" color="#000000"/>
                <span className="skill-name">PyTorch</span>
              </div>

              <div className="skill-item">
                <MdOutlineLanguage className="skill-icon" title="NLP" color="#3C91E6" />
                <span className="skill-name">NLP</span>
              </div>

              <div className="skill-item">
                <SiScikitlearn className="skill-icon" title="Scikit-learn" color="#F7931E" />
                <span className="skill-name">Scikit-learn</span>
              </div>

              <div className="skill-item">
                <SiPandas className="skill-icon" color="#150458"/>
                <span className="skill-name">Pandas</span>
              </div>

              <div className="skill-item">
                <SiNumpy className="skill-icon" color="#4D77CF"/>
                <span className="skill-name">NumPy</span>
              </div>

              <div className="skill-item">
                <FaSpider className="skill-icon" title="Web Scraping" color="#2B3A67" />
                <span className="skill-name">Web Scraping</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
