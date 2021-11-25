

function Todo(props){
    const {title, date} = props;
    return (
        <div className="todo low-p"data-id="0">
            <div className="todo-info">
                <p className="todo-title">{title}</p>
                <p className="todo-date">{date.toString()}</p>
            </div>
            <div className="todo-buttons"></div>
        </div>
    );

}

export default Todo;