import React from 'react';
import style from "./TodoList.css";

const TodoList = props => {
    const todoList = props.list.map(listItem => {
      return (
        <div  onClick={() => props.itemRemove(listItem.id)}
            className={style.TodoList} key={listItem.id}>
          {listItem.text}
        </div>
      );
    });
    return <div className={style.TodoListContainer}>{todoList}</div>;
  };

export default TodoList;