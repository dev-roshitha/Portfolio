import React, { useEffect } from "react";
import projectsInfo from "./projectsInfo.js";
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";


const Projects = () => {

    useEffect(() => {
      document.title = "Projects | Dev Roshitha"
    }, [])

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.from(".pro-box", {
            scrollTrigger: {
                trigger: ".pro-box",
                start: "top center",
                toggleActions: "restart pause restart none",
            },
        })
    }, [])

    return(
        <section className="project-section" id="projects">
        
            <div className="pro-box">
                <div className="contentTitle titleHead">
                  <hr className="title-line"/>
                  <h2 className="light-heading">Recent <span>Projects</span></h2>
                </div>
            </div>
            


            <div className="projects-box-wrapper ">
                {projectsInfo.map((values)=>{
                    return(
                        <div className="project-box pro-box">
                            <img className="box-img" src={values.imgSrc} alt={values.altText} fetchpriority="high"/>
                            <h3>{values.title}</h3>
                            <p>{values.content}</p>
                            <a href={values.link} target="_blank" rel="noopener noreferrer">
                                Open Project
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects