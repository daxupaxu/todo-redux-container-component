
const initalState = []

const todoReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_TODO' : 
            return [
                ...state,
                {
                    id: action.id,
                    content: action.content,
                    completed: false
                }
            ]
        
        case 'DELETE_TODO' :            
            return state.filter(todo => {
                return todo.id !== action.id
        })
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id){
                    return {
                        ...todo, complete: !todo.complete
                    }
                } else {
                    return todo
                }
            })
        default: 
            return state
    }
}

export default todoReducer