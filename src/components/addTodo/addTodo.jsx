import React from "react"

class AddTodo extends React.Component {
    constructor(props){
        super(props)
        this.state = ({addTodoName:''})
    }

    updateAddTodoName = (e) => {
        this.setState({
            addTodoName: e.target.value
        });
    }

    addItem = () => {
        this.props.addTodoItem(this.state.addTodoName)
        this.props.moveDown(document.getElementById('isMoveDown').value);
        this.setState({
            addTodoName: ''
        });
        scrollToBottom();

        function scrollToBottom() { // scroll bar至於最底
            setTimeout(()=> {
                const div = document.getElementById('todoList')
                div.scrollTop = div.scrollHeight
            });
            
          }
    }

    render() {
        return (
            <div className="addTodo">
                <h2>Add to the todo list</h2>
                <input className="addItemInput inputHeight" type="text" value={this.state.addTodoName} onChange={this.updateAddTodoName}
                onKeyPress={e => {
                   if (e.key === 'Enter') {
                    this.addItem()
                    }
                }}/>
                <button className="addItemBtn inputHeight" onClick={this.addItem}>ADD ITEM</button>
            </div> 
        )
    }
}

export { AddTodo } 