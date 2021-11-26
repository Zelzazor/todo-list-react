import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

function Todo(props){
    const {title, date, priority, completed} = props;
    let classPriority = "";


    switch(priority){
        case 'low': classPriority = "low-p"; break;
        case 'medium': classPriority = "medium-p"; break;
        case 'high': classPriority = "high-p"; break;
        default: classPriority = "";
    }

    return (
        <div className={`todo ${classPriority}`}data-id="0">
            <div className="todo-info">
                <p className="todo-title">{title}</p>
                <p className="todo-date">{date.toString()}</p>
            </div>
            <div className="todo-btns">
                <button id="btnEditarToDo">
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button id="btnBorrarToDo">
                    <FontAwesomeIcon icon={faTrashAlt}/>
                </button>
                <input type="checkbox" checked={completed} onChange={()=>""}/>
            </div>
        </div>
    );

}

export default Todo;