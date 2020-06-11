import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions';

const AddTodo = ({dispatch}) => {
    let input;

    return (
        <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return alert('Hey , you want to add nothing?')
          } else 
         dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <label>Add New Todo: </label>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>

    )
}

export default connect()(AddTodo)
