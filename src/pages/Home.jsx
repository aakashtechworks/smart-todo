import React, { useState, useEffect } from 'react'
import TodoForm from '../components/todo/TodoForm'
import TodoList from '../components/todo/TodoList'
import TodoItem from '../components/todo/TodoItem'

const Home = () => {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [editTodo, setEditTodo] = useState(null)

  const addTodo = (newTask)=>{
      setTodos([...todos, {
        id: Date.now(),
        text: newTask,
        completed: false,
      }])
  }

  const deleteTodo = (id)=>{
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) =>{
    setTodos(
      todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  }

  const totalTodos = todos.length

  const completedTodos = todos.filter((todo)=> todo.completed).length

  const pendingTodos = totalTodos - completedTodos

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo)=> todo.id === id ? {...todo, text:newText} : todo)
    )
  }

  return (
    <main className='min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 px-4 py-10'>
      <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-800 mb-8'>Smart Todo App</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
        <div className='bg-blue-200 rounded-xl p-4 text-center'>
          <h3 className='text-lg font-semibold '>📝Total</h3>
          <p className='text-3xl font-bold'>{totalTodos}</p>
        </div>

        <div className='bg-green-200 rounded-xl p-4 text-center'>
          <h3 className='text-lg font-semibold '>✅Completed</h3>
          <p className='text-3xl font-bold'>{completedTodos}</p>
        </div>

        <div className='bg-yellow-100 rounded-xl p-4 text-center'>
          <h3 className='text-lg font-semibold '>⏳Pending</h3>
          <p className='text-3xl font-bold'>{pendingTodos}</p>
        </div>
      </div>

      <TodoForm addTodo={addTodo} editTodo={editTodo} setEditTodo={setEditTodo} updateTodo={updateTodo}/>

      <TodoList todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} setEditTodo={setEditTodo}/>

    </main>
  )
}

export default Home