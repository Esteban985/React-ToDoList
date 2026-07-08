import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoCounter.css'

function TodoItem(props) {
    return (
        <li className={`todo-item ${props.completed ? 'todo-item-completed' : ''}`}>
            <CompleteIcon />
            {/* <span className="todo-icon todo-icon-check"onClick={props.onComplete}>V</span> */}
            <p>{props.text}</p>
            {/* <span className="todo-icon todo-icon-delete" onClick={props.onDelete}>X</span> */}
            <DeleteIcon />
        </li>
    );
}

export { TodoItem }