import React from 'react';
import { hot } from 'react-hot-loader';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: 'do clean room'
        },
        {
          id: 2,
          text: 'do not wash the dishes'
        },
        {
          id: 3,
          text: 'feed my cat'
        }]
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
          <TodoForm onAdd={this.addTodo.bind(this)}></TodoForm>
          <TodoList toDos={this.state.data} onRemove={this.removeTodo.bind(this)}></TodoList>

        </div>
      );
    }
  }

export default hot(module)(App);
