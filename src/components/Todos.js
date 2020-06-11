import Todo from './Todo';
import React from 'react';
import Footer from './Footer';

const Todos = ({todos, toggleTodo, deleteTodo, showAll, showComplete, showActive}) => (
  <div className='main'>  
  
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick = {() => toggleTodo(todo.id)} deleteTodo = {()=> deleteTodo(todo.id)}/>
        ))}
        <Footer 
        showAll = {() => showAll()} 
        showComplete = {() => showComplete()} 
        showActive = {() => showActive()}/>
  </div>
 
)

export default Todos
