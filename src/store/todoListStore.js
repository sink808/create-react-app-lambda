import {createStore} from "redux"
import {todoListReducer} from "../reducers"

const todoListStore = createStore(
    todoListReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export {todoListStore}