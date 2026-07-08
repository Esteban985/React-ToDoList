import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    if(total == completed){
        return (
        <h1 className='todo-counter'>Felicidades has completado todos los TODOs</h1>
        )
    }else{
        return (
            <h1 className='todo-counter'>Has completado {completed} de {total} TODOS</h1>
    
        )
    }
}

export { TodoCounter }