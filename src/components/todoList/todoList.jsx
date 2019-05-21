import React from "react"
import {TodoListItem} from "./todoListItem"
class TodoList extends React.Component {
    deleteTodoItem = (todo) => {
        return this.props.deleteTodoItem(todo)
    }

    changeActive = (todo) => {
        return this.props.changeActive(todo)
    }

    render() {
        let lists = this.props.data.map((todo) => {
          return <TodoListItem key={todo.id} data={todo} deleteTodoItem={() => this.props.deleteTodoItem(todo)}
                 changeActive={() => this.props.changeActive(todo)}/>
        })
        return (
            <div className="todoList" id="todoList">
                {lists}
            </div>
        )
    }
}

export { TodoList }