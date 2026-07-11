import React from 'react'
import '../TodoCounter.css'
import { TodoContext } from '../TodoContext'

function TodoCounter({ total, completed }) {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)

    if (totalTodos == completedTodos) {
        return (
            <h1 className='todo-counter'>Felicidades has completado todos los TODOs</h1>
        )
    } else {
        return (
            <h1 className='todo-counter'>Has completado {completedTodos} de {totalTodos} TODOS</h1>

        )
    }
}

export { TodoCounter }