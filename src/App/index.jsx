import React, { useState } from 'react'

import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { useLocalStorage } from './useLocalStorage'

// const defaultTodos = [
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'Aprender jsx', completed: false },
//   { text: 'jugar', completed: true }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('');

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )

    newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <div className='todo-container'>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>

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
    </div>
  )
}

export default App