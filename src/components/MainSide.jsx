import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

function MainSide(props) {
  const {project, editProject} = props;

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
              <button id="btnDelete">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </header>
        <TodoList todos={project.todos}/>
        <TodoForm project={project} editProject={editProject}/>
    </div>
    ):"";
}

export default MainSide;