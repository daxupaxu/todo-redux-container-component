import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, DELETE_TODO } from './types';


export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//action creators

let id = 0;

export const addTodo = (content) => ({
    type: ADD_TODO,
    id: id++,
    content
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
})

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
})