
import Project from './Project'

function ProjectList(props) {
    return (
        <div className="project-list">
            {props.projects.map(project => (
                <Project key={project.id} project={project} />
            ))}
        </div>

    );
}

export default ProjectList;