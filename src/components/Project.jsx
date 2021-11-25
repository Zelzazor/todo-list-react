

function Project(props) {
    const onSelectedProject = props.onSelectedProject;
    const project = props.project;
  return (
    <div className="project" onClick={()=>onSelectedProject(project)}>
        <p className="title">{project.title}</p>
        <p className="description">{project.description}</p>
    </div>
    );
}

export default Project;
