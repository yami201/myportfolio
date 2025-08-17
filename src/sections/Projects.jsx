const Projects = () => {
    return (
        <section id="projects" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/*LEFT SIDE*/}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Bdrive" />
                        </div>
                        <div className="text-content">
                            <h2>Bdrive</h2>
                            <p className="text-white-50 md:text-xl">Bdrive is a decentralized file storage web application using NextJs, Node.js, and IPFS, enabling secure and efficient data management.</p>
                        </div>
                    </div>
        
                    {/*RIGHT SIDE*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project">
                            <div className="image-wrapper bg-white-50">
                                <img src="/images/project1.png" alt="Project 2" />
                            </div>
                            <div className="text-content">
                                <h2>Bdrive</h2>
                            </div>
                        </div>
                            <div className="project">
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