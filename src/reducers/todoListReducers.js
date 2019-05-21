import {todoData} from "../constants/todoLists.js"
import {ADD_TODOITEM, DELETE_TODOITEM, CHANGE_ACTIVE, MOVE_DOWN} from "../constants/todoActions.js"

const todoListReducer = (state = todoData, action) =>{
    switch(action.type){
        case ADD_TODOITEM:{
            const maxId = Math.max(...state.map(p => p.id))
            const newState = [...state, {id: maxId + 1, name: action.todoName, active: true}]
            return newState
        }
        case DELETE_TODOITEM:{
            return state.filter((todo) => todo.id !== action.payload.id)
        }
        case CHANGE_ACTIVE:{
            const newState = state.map((todo) => {
                todo.active = (todo.id === action.payload.id) ? !todo.active : todo.active;
                return todo;
            });
            return newState
        }
        case MOVE_DOWN:{
            const moveDownSort = (a, b) => (a.active && !b.active) ? -1 : 1
            const normalSort = (a, b) => a.id -b.id
            return (action.isMoveDown) ? [...state].sort(moveDownSort) : [...state].sort(normalSort)            
        }
        default:{
            return state
        }
    }
}

export {todoListReducer}
