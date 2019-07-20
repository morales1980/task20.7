import React from 'react';
import Todo from './Todo'

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.toDos;
    const toDos = data.map((toDo, index) => {
      return (
        <Todo key={index}>{toDo.text}</Todo>
      );
    });

    return (
      <div>
        <h1>Todo List</h1>
        <ul>{toDos}</ul>
      </div>
    );
  }
};

export default Title;
