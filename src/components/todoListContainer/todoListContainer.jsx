import React from "react"
import {TodoList} from '../todoList'
import {MoveDown} from '../moveDown'
import {AddTodo} from '../addTodo'
import {connect} from "react-redux"
import * as actions from "../../constants/todoActions"
class todoListContainer extends React.Component {

    deleteTodoItem = (todo) => {
        return this.props.deleteTodoItem(todo)
    }

    changeActive = (todo) => {
        return this.props.changeActive(todo)
    }

    addTodoItem = (todoName) => {
        return this.props.addTodoItem(todoName)
    }

    moveDown = (isMoveDown) => {
        return this.props.moveDown(isMoveDown)
    }

    render() {
        return (
            <React.Fragment>
                <TodoList data={this.props.data} deleteTodoItem={this.deleteTodoItem} changeActive={this.changeActive}/>
                <MoveDown moveDown={this.moveDown}/>
                <AddTodo addTodoItem={this.addTodoItem} moveDown={this.moveDown}/>
            </React.Fragment>
        )
    }
}

const deleteTodoItem = (todo) => ({ type: actions.DELETE_TODOITEM, payload: todo })
const changeActive = (todo) => ({ type: actions.CHANGE_ACTIVE, payload: todo })
const addTodoItem = (todoName) => ({ type: actions.ADD_TODOITEM, todoName: todoName })
const moveDown = (isMoveDown) => ({ type: actions.MOVE_DOWN, isMoveDown: isMoveDown })

const mapStateToProps = (state) => {
    return { data: state }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodoItem: (todoItem) => dispatch(deleteTodoItem(todoItem)),
        changeActive: (todoItem) => dispatch(changeActive(todoItem)),
        addTodoItem: (todoName) => dispatch(addTodoItem(todoName)),
        moveDown: (isMoveDown) => dispatch(moveDown(isMoveDown))
      }    
}

const TodoLists = connect(mapStateToProps, mapDispatchToProps)(todoListContainer)

export { TodoLists }