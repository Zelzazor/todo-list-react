import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

function MainSide(props) {
  const {project, editProject, deleteProject} = props;

  const handleDelete = () =>{
    deleteProject(project);
  }

  return project?(
    <div className="other-side">
        <header className="project-details">
          <div className="project-options">
            <div className="project-info">
              <h1>{project.title}</h1>
            </div>
            <div className="project-buttons">
              <button id="btnEdit">
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button id="btnDelete" onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </header>
        <TodoList todos={project.todos}/>
        <TodoForm project={project} editProject={editProject}/>
    </div>
    ):(
        <div className="other-side">
          <header className="project-details">
            <div className="project-options">
            </div>
          </header>
          <section className="todos"></section>
        </div>

      );
}

export default MainSide;