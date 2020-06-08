import Todo from './Todo';
import React from 'react';
import PropTypes from 'prop-types';

const Todos = ({todos, toggleTodo}) => (  
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick = {() => toggleTodo(todo.id)} />
        ))}
    </ul>
)

Todos.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        complete: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
  }

export default Todos
