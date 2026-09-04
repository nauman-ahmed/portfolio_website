import React from 'react'
import {
  SiLangchain, SiHuggingface, SiPython, SiRedis, SiSupabase, SiN8N,
  SiLinux, SiGit, SiSpacy, SiScikitlearn, SiPandas, SiNumpy, SiOpenai, SiPytorch,
  SiAngular, SiPlaywright, SiFlask, SiTypescript, SiJavascript, SiD3Dotjs,
  SiFastapi, SiGraphql, SiJest, SiMongodb, SiPostgresql,
  SiAmazonwebservices, SiDocker, SiTerraform, SiJenkins
} from "react-icons/si";
import {
  FaRobot, FaProjectDiagram, FaSearch, FaDatabase, FaPlug, FaUsers,
  FaChartLine, FaSlidersH, FaVectorSquare, FaLayerGroup
} from "react-icons/fa";

// Every icon carries an explicit colour so the legacy nth-child rules in
// App.css (which assume one flat, fixed-order grid) can no longer mis-colour it.
const skillGroups = [
  {
    title: 'Applied AI & LLM Systems',
    skills: [
      { name: 'LangChain', icon: <SiLangchain className="skill-icon" style={{ color: '#1C3C3C' }} /> },
      { name: 'LangGraph', icon: <FaProjectDiagram className="skill-icon" style={{ color: '#1C3C3C' }} /> },
      { name: 'RAG', icon: <FaSearch className="skill-icon" style={{ color: '#5A4FCF' }} /> },
      { name: 'AI Agents', icon: <FaRobot className="skill-icon" style={{ color: '#412991' }} /> },
      { name: 'LLMs', icon: <SiOpenai className="skill-icon" style={{ color: '#412991' }} /> },
      { name: 'CrewAI', icon: <FaUsers className="skill-icon" style={{ color: '#FF5A1F' }} /> },
      { name: 'Ollama', icon: <FaRobot className="skill-icon" style={{ color: '#000000' }} /> },
      { name: 'ChromaDB', icon: <FaLayerGroup className="skill-icon" style={{ color: '#FFB000' }} /> },
      { name: 'Langfuse', icon: <FaChartLine className="skill-icon" style={{ color: '#0EA5E9' }} /> },
      { name: 'MCP', icon: <FaPlug className="skill-icon" style={{ color: '#D97757' }} /> },
      { name: 'n8n', icon: <SiN8N className="skill-icon" style={{ color: '#EA4B71' }} /> },
    ],
  },
  {
    title: 'Machine Learning & NLP',
    skills: [
      { name: 'PyTorch', icon: <SiPytorch className="skill-icon" style={{ color: '#EE4C2C' }} /> },
      { name: 'Transformers', icon: <SiHuggingface className="skill-icon" style={{ color: '#FFD21E' }} /> },
      { name: 'spaCy', icon: <SiSpacy className="skill-icon" style={{ color: '#09A3D5' }} /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn className="skill-icon" style={{ color: '#F7931E' }} /> },
      { name: 'Optuna', icon: <FaSlidersH className="skill-icon" style={{ color: '#2C6BAA' }} /> },
      { name: 'Pandas', icon: <SiPandas className="skill-icon" style={{ color: '#150458' }} /> },
      { name: 'NumPy', icon: <SiNumpy className="skill-icon" style={{ color: '#4D77CF' }} /> },
    ],
  },
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: <SiPython className="skill-icon" style={{ color: '#3776AB' }} /> },
      { name: 'TypeScript', icon: <SiTypescript className="skill-icon" style={{ color: '#3178C6' }} /> },
      { name: 'JavaScript', icon: <SiJavascript className="skill-icon" style={{ color: '#F7DF1E' }} /> },
      { name: 'SQL', icon: <FaDatabase className="skill-icon" style={{ color: '#4479A1' }} /> },
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'FastAPI', icon: <SiFastapi className="skill-icon" style={{ color: '#009688' }} /> },
      { name: 'Node.js', icon: <i className="devicon-nodejs-plain skill-icon" style={{ color: '#339933' }}></i> },
      { name: 'Express', icon: <i className="devicon-express-original skill-icon" style={{ color: '#68A063' }}></i> },
      { name: 'Django', icon: <i className="devicon-django-plain skill-icon" style={{ color: '#092E20' }}></i> },
      { name: 'Flask', icon: <SiFlask className="skill-icon" style={{ color: '#000000' }} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="skill-icon" style={{ color: '#336791' }} /> },
      { name: 'pgvector', icon: <FaVectorSquare className="skill-icon" style={{ color: '#336791' }} /> },
      { name: 'Redis', icon: <SiRedis className="skill-icon" style={{ color: '#DC382D' }} /> },
      { name: 'Supabase', icon: <SiSupabase className="skill-icon" style={{ color: '#3ECF8E' }} /> },
      { name: 'MongoDB', icon: <SiMongodb className="skill-icon" style={{ color: '#47A248' }} /> },
      { name: 'REST APIs', icon: <FaPlug className="skill-icon" style={{ color: '#FF6B6B' }} /> },
      { name: 'GraphQL', icon: <SiGraphql className="skill-icon" style={{ color: '#E10098' }} /> },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', icon: <i className="devicon-react-original skill-icon" style={{ color: '#61DAFB' }}></i> },
      { name: 'Next.js', icon: <i className="devicon-nextjs-original skill-icon" style={{ color: '#000000' }}></i> },
      { name: 'React Native', icon: <i className="devicon-react-original skill-icon" style={{ color: '#61DAFB' }}></i> },
      { name: 'Vue.js', icon: <i className="devicon-vuejs-plain skill-icon" style={{ color: '#4FC08D' }}></i> },
      { name: 'Angular', icon: <SiAngular className="skill-icon" style={{ color: '#DD0031' }} /> },
      { name: 'D3.js', icon: <SiD3Dotjs className="skill-icon" style={{ color: '#F9A03C' }} /> },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', icon: <SiAmazonwebservices className="skill-icon" style={{ color: '#FF9900' }} /> },
      { name: 'Docker', icon: <SiDocker className="skill-icon" style={{ color: '#2496ED' }} /> },
      { name: 'CI/CD', icon: <SiJenkins className="skill-icon" style={{ color: '#D24939' }} /> },
      { name: 'Terraform', icon: <SiTerraform className="skill-icon" style={{ color: '#7C42A0' }} /> },
      { name: 'Linux', icon: <SiLinux className="skill-icon" style={{ color: '#000000' }} /> },
      { name: 'Git', icon: <SiGit className="skill-icon" style={{ color: '#F05032' }} /> },
    ],
  },
  {
    title: 'Testing',
    skills: [
      { name: 'Jest', icon: <SiJest className="skill-icon" style={{ color: '#C21325' }} /> },
      { name: 'Playwright', icon: <SiPlaywright className="skill-icon" style={{ color: '#2EAD32' }} /> },
    ],
  },
]

export default function Skills() {
  return (
    <section className="skills py-5" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h2 className="mb-5 text-center">Skills</h2>

            {skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3 className="skill-group-title">{group.title}</h3>
                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      {skill.icon}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}
