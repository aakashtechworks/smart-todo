import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'


const TodoItem = ({todo}) => {
  return (
    <div className='w-full bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 px-5 py-4 flex items-center justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 gap-10'>

        <div className='flex items-center gap-3'>
            <span className='text-xl'>📌</span>
            <p className='text-gray-800 font-medium'>{todo}</p>
        </div> 

        <div className='flex items-center gap-6'>
            <button className='w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center'> <FaEdit/> </button>

            <button className='w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center'> <FaTrash/> </button>
        </div>
    </div>
  )
}

export default TodoItem