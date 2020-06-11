import React from 'react';
import './App.css';
import  VisibleList  from './containers/VisibleList';
import  AddTodo from './containers/AddTodo';

function App() {
  return (
    <div className='app'> 
      <AddTodo />  
      <VisibleList />  
     
    </div>
  );
}

export default App;
