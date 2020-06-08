import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, complete, content }) => (
    <li style={{textDecoration: complete ? "line-through" : "none"}}>
      {content}
    <button onClick={onClick}> x </button>
    </li>

  )

  Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    content: PropTypes.string.isRequired
  }

export default Todo