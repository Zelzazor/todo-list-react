

function Project(props) {
  return (
    <div className="project" key={props.key}>
        <p className="title">{props.project.title}</p>
        <p className="description">{props.project.description}</p>
    </div>
    );
}

export default Project;
