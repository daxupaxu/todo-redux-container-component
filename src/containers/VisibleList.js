import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo } from '../actions';
import Todos from '../components/Todos';

export const VisibleList = (todos, filter) => {
    console.log(todos)
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.complete)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.complete)
        default: 
            return todos
    }
    
}

const mapStateToProps = state => ({
    todos: VisibleList(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => {
    // toggleTodo: id => dispatch(toggleTodo(id))
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
    