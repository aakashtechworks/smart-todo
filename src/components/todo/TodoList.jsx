import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo, toggleComplete, setEditTodo}) => {
  return (
    <div className='max-w-3xl mx-auto mt-8 space-y-4'>
      {todos.length === 0 ? (
        <div className='text-center bg-gray-300 rounded-2xl p-4'>
        <h2 className='text-2xl font-bold text-gray-700'>📝 No Todos Yet!</h2>
        <p className='text-gray-500 mt-2'>Add your first task to get started</p>
      </div>) : 

      (todos.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} setEditTodo={setEditTodo}/>
        )))
      }
    </div>
  )
}

export default TodoList