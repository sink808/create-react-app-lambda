import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class TodoListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.data;
    }
    

    render() {
        
        const todoName = this.state.name;
        const isTodoDeactive = !this.state.active;
        const deactiveClass = 'deactiveTodoItem';
        const deleteTodoItem = this.props.deleteTodoItem;
        const changeActive = this.props.changeActive;
        return (
            <div className="todoListItem clickable" onClick={changeActive}>
               <span className={`todoListItemText ${isTodoDeactive ? deactiveClass : ''}`}>{todoName}</span>
               <span>
                   <input type="checkbox" name="" id="" checked={isTodoDeactive} readOnly/>
                   <span className="clickable" onClick={deleteTodoItem}><FontAwesomeIcon icon="trash-alt" /></span>
               </span>
            </div>
        )
    }
}

export { TodoListItem }