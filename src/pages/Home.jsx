import React, { useState } from 'react'
import TodoForm from '../components/todo/TodoForm'
import TodoList from '../components/todo/TodoList'
import TodoItem from '../components/todo/TodoItem'

const Home = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (newTask)=>{
      setTodos([...todos, newTask])
  }

  const deleteTodo = (index)=>{
    setTodos(todos.filter((_,i) => i !== index))
  }
  return (
    <main className='min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 px-4 py-10'>
      <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-800 mb-8'>Smart Todo App</h1>

      <TodoForm addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} />

    </main>
  )
}

export default Home