import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function MainSide(props) {
  const {project, editProject} = props;

  return project?(
    <div className="other-side">
        <header className="project-details">
          <div className="project-options">
            <div className="project-info">
              <h1>{project.title}</h1>
            </div>
          </div>
        </header>
        <TodoList todos={project.todos}/>
        <TodoForm project={project} editProject={editProject}/>
    </div>
    ):"";
}

export default MainSide;