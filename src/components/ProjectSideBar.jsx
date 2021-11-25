
import ProjectList from './ProjectList';

function ProjectSideBar(props) {
    return (
        <aside className="projects">
            <div className="title-fesone">
                <h1>FESONE</h1>
            </div>
            <div className="buttons">
                <button className="btn-aside" id="btnAddProject">Add Project...</button>
                <button className="btn-aside hidden" id="btnBackProject">Back</button>
            </div>
            <ProjectList projects={props.projects} onSelectedProject={props.onSelectedProject}/>
        </aside>
    );
}

export default ProjectSideBar;