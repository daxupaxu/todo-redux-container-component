import { combineReducers } from 'redux';
import todoReducer from './todoReducer.js';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer
})

export default rootReducer