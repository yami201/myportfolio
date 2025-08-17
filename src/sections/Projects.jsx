import { use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    
    
    useGSAP(() => {
        const projects = [ 
            project1Ref.current, 
            project2Ref.current, 
            project3Ref.current 
        ];
        gsap.fromTo(sectionRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1 }
        );
        projects.forEach((project, index) => {
            gsap.fromTo(project, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1,      
                    y: 0, 
                    duration: 1, 
                    delay: (index + 1) * 0.3,
                    scrollTrigger: {
                        trigger: project,
                        start: "top bottom-=100"
                    }
                }
            );
        });
    }, []);

    return (
        <section id="projects" className="app-showcase" ref={sectionRef}>
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT SIDE*/}
                    <div className="first-project-wrapper">
                        <div className="project" ref={project1Ref}>
                            <div className="image-wrapper">
                                <img src="/images/project1.png" alt="Bdrive" />
                            </div>
                            <div className="text-content">
                                <h2>Bdrive</h2>
                                <p className="text-white-50 md:text-xl">Bdrive is a decentralized file storage web application using NextJs, Node.js, and IPFS, enabling secure and efficient data management.</p>
                            </div>
                        </div>
                    </div>
        
                    {/*RIGHT SIDE*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-white-50">
                                <img src="/images/project1.png" alt="Project 2" />
                            </div>
                            <div className="text-content">
                                <h2>Bdrive</h2>
                            </div>
                        </div>
                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-white-50">
                                    <img src="/images/project1.png" alt="Project 2" />
                                </div>
                                <div className="text-content">
                                    <h2>Bdrive</h2>
                                </div>
                            </div>
                    </div>


                </div>
            </div>
        </section>
    );
}
 
export default Projects;