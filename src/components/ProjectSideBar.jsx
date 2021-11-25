import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';
import {useState} from 'react';


function ProjectSideBar(props) {
    const [addProject, setAddProject] = useState(false);

    const onHandleAddProject = () => {
        setAddProject(!addProject);
    }

    return (
        <aside className="projects">
            <div className="title-fesone">
                <h1>FESONE</h1>
            </div>
            <div className="buttons">
                <button className="btn-aside" onClick={onHandleAddProject} id={!addProject?"btnAddProject":"btnBackProject"} >{!addProject?"Add Project...":"Back"}</button>:
    
            </div>
                {!addProject?
                <ProjectList projects={props.projects} onSelectedProject={props.onSelectedProject}/>:
                <ProjectForm addProject={props.addProject} onHandleAddProject={onHandleAddProject}/>}
        </aside>
    );
}

export default ProjectSideBar;