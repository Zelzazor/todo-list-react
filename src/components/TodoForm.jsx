import {useState} from 'react';

function TodoForm(props) {
    const [txtTodo, setTxtTodo] = useState("");
    const project = props.project;
    const editProject = props.editProject;

    const handleClick = () => {
        const newTodo = {
            id: project.todos.length + 1,
            title: txtTodo,
            completed: false,
            date: new Date(),
            priority: "low"
        }
        project.todos = [...project.todos, newTodo];
        editProject(project);

    }
  return (
    <div className="bar">
      <input type="text" className="text-fixed" value={txtTodo} onChange={(e)=>setTxtTodo(e.target.value)}/>
      <button className="btn-fixed" onClick={handleClick}>+</button>
    </div>
    );
}

export default TodoForm;