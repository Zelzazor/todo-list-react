import './App.css';
import ProjectSideBar from './components/ProjectSideBar';
import MainSide from './components/MainSide';
import projects from './data/projects';
import {useState} from 'react';

function App() {

  const [project, setProject] = useState(projects[0]);

  const onSelectedProject = (project) => {
    setProject(project);
  }
  return (
    <main className="container">
        <ProjectSideBar projects={projects} onSelectedProject={onSelectedProject}/>
        <MainSide project={project}/>
    </main>
  );
}

export default App;
