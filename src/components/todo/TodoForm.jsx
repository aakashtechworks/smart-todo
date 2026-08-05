import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [task, setTask] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(task.trim() === "" ){
           return;
        }
        addTodo(task)
        setTask("")
    }


  return (
    <form onSubmit={handleSubmit} className='w-full max-w-2xl mt-8 flex flex-col gap-4'>
        <input type="text" 
        placeholder='Enter Your Task'
        value={task} 
        onChange={(e)=>setTask(e.target.value)} 
        className=' px-5 py-3 rounded-xl border border-slate-300 bg-white/80 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>

        <button type='submit' className='px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition duration-300'>Add Task</button>
    </form>
  )
}

export default TodoForm