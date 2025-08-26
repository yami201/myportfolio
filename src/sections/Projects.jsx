import SectionHeader from "../SectionHeader";
import ProjectItem from "../components/projects/ProjectItem";
import { projects } from "../constants";

const Projects = () => {
    return (
        <div className="min-h-screen w-full px-8 py-16 text-white">
            <SectionHeader content="my projects" />

            
            <ul className="w-full">
                {
                    projects.map((p, index) => (
                        <ProjectItem key={index} project={p} index={index} />
                    ))
                }
            </ul>

        </div>
    );
}
 
export default Projects;