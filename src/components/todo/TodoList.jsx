import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, deleteTodo}) => {
  return (
    <div className='max-w-3xl mx-auto mt-8 space-y-4'>
        {todos.map((todo, index)=>(
            <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}

export default TodoList