import React from 'react'
import Checkbox from './Checkbox'
import  {MdDeleteOutline}  from 'react-icons/md';


const Todo = ({ children, onDelete }) => {
  return (
    <div className="todo-wrapper">
      <Checkbox/>
      <span className="todo-text">{children}</span>
      <button onClick={onDelete} className="todo-delete">
        <MdDeleteOutline size={28}/>
      </button>
    </div>
    
  )
}

export default Todo