import './App.css';
import ProjectSideBar from './components/ProjectSideBar';
import MainSide from './components/MainSide';

function App() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is project 1',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is project 2',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is project 3',
    }
  ];

  return (
    <main className="container">
        <ProjectSideBar projects={projects}/>
        <MainSide />
    </main>
  );
}

export default App;
