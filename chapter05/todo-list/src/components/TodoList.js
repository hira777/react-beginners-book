import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
  const todoList = todos.map(todo => {
    const label = todo.completed ? '未完了にする' : '完了にする';

    return (
      <li key={todo.id}>
        {todo.title}
        <button onClick={() => toggleTodo(todo.id, todo.completed)}>
          {label}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>削除</button>
      </li>
    );
  });

  return <ul>{todoList}</ul>;
}

export default TodoList;
