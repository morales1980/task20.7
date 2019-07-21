import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={() => this.props.removeTodo(this.props.toDo.id)}>x</button>
      </div>
    );
  }
}
export default Todo
