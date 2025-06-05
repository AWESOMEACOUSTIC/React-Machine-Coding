import React, { useState, useEffect } from 'react'
import { TodoContextProvide } from './contexts/TodoContext';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (message) => {
    setTodos((prevTodos) => [...prevTodos, { id: Date.now(), title: message, completed: false }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((key) => key.id === id ? { ...key, ...todo } : key))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((key) => key.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((key) => key.id === id ? { ...key, completed: !key.completed } : key))
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("todos"));
    if (storage && storage.length > 0) {
      setTodos(storage);
    }
  }, [])

  return (
    <TodoContextProvide value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className='w-full h-screen flex flex-col items-center p-10 bg-black'>
        <h1 className='text-white text-3xl font-medium mt-2 text-center'>Welcome to TODO</h1>
        <div className='w-full max-w-2xl mt-10 mb-7 flex flex-col gap-4'>
          <TodoInput />
        </div>
        <div className='w-260 flex flex-col flex-wrap gap-4'>
          {todos.map((todo) => {
            
            return (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </TodoContextProvide>
  )
}

export default App
