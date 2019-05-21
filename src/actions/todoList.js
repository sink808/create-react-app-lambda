import {ADD_TODOLIST} from "../constants/todoActions"

export const addTodoList = todoList => ({
    type : ADD_TODOLIST, payload : todoList
})
