import ReactComponent from 'react'
import React from "react";
import CheckSVG from './check.svg?react'
import DeleteSVG from './delete.svg?react'

const iconTypes = {
    'check': (color)=> <CheckSVG fill={color}/>,
    'delete': (color)=> <DeleteSVG  fill={color}/>
}

function TodoIcon({ type, onComplete, onDelete,color }) {
    return (
        <span className={`todo-icon todo-icon-${type}`}
        onClick={type=='check'?onComplete:onDelete}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon } 