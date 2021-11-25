import './App.css';
import ProjectSideBar from './components/ProjectSideBar';
import MainSide from './components/MainSide';
import projects from './data/projects';
import {useState} from 'react';

function App() {

  const [project, setProject] = useState(projects[0]);
  const [projectlist, setProjectList] = useState(projects);

  const onSelectedProject = (project) => {
    setProject(project);
  }

  const addProject = (project) => {
    project.id = projectlist.length + 1;
    project.todos = [];
    console.log(project);
    setProjectList([...projectlist, project]);
  }

  const editProject = (project) => {
    const newProjectList = projectlist.map(p => {
      if (p.id === project.id) {
        return project;
      }
      return p;
    });
    setProjectList(newProjectList);
  }


  const deleteProject = (project) => {
    setProjectList(projectlist.filter(p => p.id !== project.id));
  }

  return (
    <main className="container">
        <ProjectSideBar projects={projectlist} selectedProject={project} onSelectedProject={onSelectedProject} addProject={addProject}/>
        <MainSide project={project} deleteProject={deleteProject} editProject={editProject}/>
    </main>
  );
}

export default App;
