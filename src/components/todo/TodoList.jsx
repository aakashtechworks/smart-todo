import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos}) => {
    console.log(todos)
  return (
    <div className='max-w-3xl mx-auto mt-8 space-y-4'>
        {todos.map((todo, index)=>(
            <TodoItem key={index} todo={todo}/>
        ))}
    </div>
  )
}

export default TodoList