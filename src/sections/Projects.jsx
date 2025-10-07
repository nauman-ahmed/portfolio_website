import React, { useState } from 'react'
import ProjectBox from '../components/ProjectBox'
import { GrReactjs } from "react-icons/gr";
import { SiFlask } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiD3Dotjs } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si"; 
import { SiJest } from "react-icons/si";
import { projectsData } from '../data/projectDetails'

const allTechs = [
    { name: 'React', icon: <GrReactjs className='mx-1 ' /> }, 
    { name: 'TypeScript', icon: <SiTypescript className='mx-1 ' /> }, 
    { name: 'Jest', icon: <SiJest className='mx-1 ' /> }, 
    { name: 'Flask (py)', icon: <SiFlask className='mx-1 ' /> }, 
    { name: 'Node', icon: <FaNodeJs className='mx-1 ' /> }, 
    { name: 'MongoDB', icon: <SiMongodb className='mx-1 ' /> }, 
    { name: 'PostgreSQL', icon: <SiPostgresql className='mx-1 ' /> }, 
    { name: 'D3.js', icon: <SiD3Dotjs className='mx-1 ' /> }
]


export default function Projects() {
    const [projectsToShow, setProjectsToShow] = useState(projectsData);
    const [selectedTechs, setSelectedTechs] = useState([])
    const [animateProjects, setAnimatePojects] = useState(false)


    return (
        <section className="project py-5" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center mx-auto col-12">
                        <div className="col-lg-8 mx-auto">
                            <h2>Things I have developed as a <br></br> Full Stack Developer/AI Engineer</h2>
                        </div>
                        <div className='d-flex justify-content-center align-items-center flex-row flex-wrap mt-5'>
                            {allTechs.map((tech, i) => <button key={i} style={{ width: '140px' }} className={`m-1 d-flex align-items-center justify-content-center btn ${selectedTechs.includes(tech.name) && 'custom-btn-bg'}  custom-btn custom-btn-tech `}
                                onClick={() => {
                                    
                                    let updatedTechs;
                                    if (selectedTechs.includes(tech.name)) {
                                        updatedTechs = selectedTechs.filter(techName => techName !== tech.name)
                                    } else {
                                        updatedTechs = [...selectedTechs, tech.name]
                                    }
                                    setSelectedTechs(updatedTechs)

                                    if (updatedTechs.length > 0) {
                                        
                                        projectsData?.filter(project => project.techs.some(projectTech => console.log("selectedTechs",projectTech)));
                                        const filteredProjects = projectsData?.filter(project => project.techs.some(projectTech => updatedTechs.includes(projectTech)));
                                        setProjectsToShow(filteredProjects)
                                    } else {
                                        setProjectsToShow(projectsData)
                                    }
                                    setAnimatePojects(true)


                                    setTimeout(() => setAnimatePojects(false), 700)

                                }}
                            >
                                {tech.icon}
                                {tech.name}
                            </button>)}
                        </div>
                        <div className={`row mt-3 animate__animated animate__faster ${animateProjects ? 'animate__fadeInUp' : ''}`}>
                            {projectsToShow?.map((projectData, i) => <ProjectBox key={i} projectData={projectData} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
