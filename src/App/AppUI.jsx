import React, { useState } from 'react'

import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
// import { useLocalStorage } from '../TodoContext/useLocalStorage'
import { TodosLoading } from '../TodosLoading'
import { TodosEror } from '../TodosEror'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'

function AppUI() {

    return (
        <div className='todo-container'>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                    loading,
                    error,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
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
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />
        </div>
    )
}

export { AppUI }