import React, { useState } from 'react'

import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodosLoading } from '../TodosLoading'
import { TodosEror } from '../TodosEror'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext)

    return (
        <div className='todo-container'>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading &&
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                }
                {error && <TodosEror />}
                {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

                {
                    searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)} />
                    ))
                }

            </TodoList>

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )
            }
        </div>
    )
}

export { AppUI }