import { TodoContext } from '../TodoContext';
import '../TodoCounter.css'
import React from 'react';

function CreateTodoButton() {
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    return (
        <button className='todo-button' onClick={(event) => {
            openModal ? setOpenModal(false) : setOpenModal(true);
        }}
        > +</button >
    );
}

export { CreateTodoButton }