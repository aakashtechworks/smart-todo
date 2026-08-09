import React, { useState, useEffect } from 'react'
import TodoForm from '../components/todo/TodoForm'
import TodoList from '../components/todo/TodoList'
import TodoItem from '../components/todo/TodoItem'
import { FaSearch } from 'react-icons/fa'

const Home = () => {
  const [todos, setTodos] = useState(()=>{
    const savedTodos = localStorage.getItem("todos")
    return savedTodos ? JSON.parse(savedTodos) : []
  })

  

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const [editTodo, setEditTodo] = useState(null)

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("all")

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

  const filterTodos = todos.filter((todo)=> {
    const matchesSearch = todo.text.toLowerCase().includes(search.toLowerCase())

    const matchesFilter = filter === "all" || (filter === "active" && !todo.completed) || (filter === "completed"  && todo.completed)

    return matchesSearch && matchesFilter
  })
  
  


  return (
    <main className='min-h-screen flex flex-col items-center bg-gradient-to-br from-slate-100 via-indigo-100 to-purple-100 px-4 py-10'>
      <h1 className='text-4xl md:text-5xl font-bold text-center text-slate-800 mb-8'>Smart Todo App</h1>

      <div className='w-full md:w-96 relative mb-4'>
      <FaSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10'/>

      <input type="text" 
      placeholder='Search todos...'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      className='w-full pl-11 pr-11 px-4 py-3 rounded-xl border border-gray-300 bg-white/80 backdrop-blur-md shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all'/>
      </div>
      

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
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

      <div className='max-w-2xl mx-auto flex  gap-2 mt-4 text-black'>
        <button onClick={()=> setFilter("all")}
          className='flex1 px-12 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white shadow-md "'>All</button>
        <button onClick={()=> setFilter("active")}
          className='flex-11 px-10 py-2 rounded-lg font-medium transition-all bg-yellow-600 text-white"'>Active</button>
        <button onClick={()=> setFilter("completed")}
          className='flex-1 px-4 py-2 rounded-lg font-medium transition-all bg-green-600 text-white '>Completed</button>
      </div>

      <TodoList todos={filterTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} setEditTodo={setEditTodo}/>

    </main>
  )
}

export default Home