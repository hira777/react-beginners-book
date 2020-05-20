import React, { useState, useMemo } from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import useTodo from './hooks/useTodo';

function App() {
  // Todo の state と更新ロジックを取得
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodo();
  // 選択中の絞り込みの state と filter を更新する関数
  const [filter, setFilter] = useState('all');
  // 絞り込みのラジオボタンのイベントハンドラ
  const handleFilter = event => {
    setFilter(event.target.value);
  };
  // 絞り込みを適用した Todo
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  }, [todos, filter]);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoFilter selectedFilter={filter} handleFilter={handleFilter} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
