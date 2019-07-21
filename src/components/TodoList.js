import React from 'react';
import Todo from './Todo';
import style from './TodoList.css';

const TodoList = (props) => {
  const toDos = props.toDos.map(toDo => <Todo key={toDo.id} toDo={toDo} removeTodo={props.onRemove}>{toDo.text}</Todo>);
  return (
    <div className={style.TodoList}>
      {toDos}
    </div>
  );
};

// const TodoList = (props) => {(
//   const data = this.props.toDos;
//   const toDos = data.map((toDo, index) => {
//     return (
//       <Todo key={index} onClick={this.props.onRemove({toDo.id})}>{toDo.text}</Todo>
//     );
//   });
//
//   return (
//     <div>
//       <ul>{toDos}</ul>
//     </div>
//   );
// )};

export default TodoList;
