import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo, deleteTodo, setVisibilityFilter} from '../actions';
import Todos from '../components/Todos';

const VisibleList = (todos, filter) => {
    
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

const mapDispatchToProps = dispatch => ({
     toggleTodo: id => dispatch(toggleTodo(id)),
     deleteTodo: id => dispatch(deleteTodo(id)),
     showAll: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL)),
     showComplete: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)),
     showActive: () => dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
    