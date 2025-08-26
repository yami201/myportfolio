const ProjectStack = ({ skills }) => {
    return (
        <ul className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
                
                <li key={index} className="text-white opacity-40  flex items-center gap-4">
                    {skill}
                    { index < skills.length - 1 && <span className="bg-white opacity-20 rounded-full size-3"></span>}
                </li>
            ))}
        </ul>
    );
}

export default ProjectStack;