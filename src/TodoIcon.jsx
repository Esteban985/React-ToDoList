import ReactComponent from 'react'
import React from "react";
import CheckSVG from './check.svg?react'
import DeleteSVG from './delete.svg?react'

const iconTypes = {
    'check': <CheckSVG />,
    'delete': <DeleteSVG />
}

function TodoIcon({ type }) {
    return (
        <span className={`todo-icon todo-icon-${type}`}>
            {iconTypes[type]}
        </span>
    );
}

export { TodoIcon }