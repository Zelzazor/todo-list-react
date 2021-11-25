import Todo from './Todo';

function TodoList(props) {
    return (
        <section className="todos">
            {props.todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </section>
    );
}

export default TodoList;
