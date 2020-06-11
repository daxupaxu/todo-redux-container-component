import React from 'react';


const Todo = ({ onClick, complete, content, deleteTodo }) => (
  <div className='todo'>
    <button className="delete" onClick={deleteTodo}> x </button>
    <p style={{textDecoration: complete ? "line-through" : "none"}}>
      {content}
    </p>
    <button className="done" onClick={onClick}> Done! </button>
    <br/>
  </div> 

  )


export default Todo