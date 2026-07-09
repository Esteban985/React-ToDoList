import '../TodoCounter.css'

function CreateTodoButton() {
    return (
        <button className='todo-button' onClick={(event) => {
            console.log('Le diste click')
            console.log(event)
            console.log(event.target)
        }}
        >+</button>
    );
}

export { CreateTodoButton }