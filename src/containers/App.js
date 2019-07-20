import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  addTodo(value) {
    const todo = {
      text: value,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  removeTodo(id) {
    const reminder = this.state.data.filter(todo => todo.id !==id);
    this.setState({data:reminder});
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title toDos={this.state.data}></Title>
      </div>
    );
  }
}

export default App;
