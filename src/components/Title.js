import React from 'react';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.toDos;
    const toDosNumber = data.length;

    return (
      <div>
        <h1>Todo List</h1>
        <p>You have: {toDosNumber} tasks on your list!</p>
      </div>
    );
  }
};

export default Title;
