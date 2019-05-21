import React from "react"

class MoveDown extends React.Component {

    constructor(props){
        super(props)
        this.state = ({isMoveDown: false})
    }

    moveDown = () => {
      this.setState({isMoveDown: !this.state.isMoveDown}, () => {
        this.props.moveDown(this.state.isMoveDown);
      });
    
    }

    render() {
        return (
            <div className="moveDown">
                <label>
                    <span>Move down Items at the end?</span>
                    <input type="checkbox" id="isMoveDown" value={this.state.isMoveDown} onChange={this.moveDown}/>
                </label>
            </div>
        )
    }
}

export { MoveDown }