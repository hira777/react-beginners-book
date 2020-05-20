import React from 'react';

const filters = [
  { type: 'all', label: 'すべて' },
  { type: 'active', label: '作業中' },
  { type: 'completed', label: '完了' }
];

function TodoFilter({ selectedFilter, handleFilter }) {
  return filters.map(filter => (
    <label key={filter.type}>
      <input
        type="radio"
        value={filter.type}
        checked={filter.type === selectedFilter}
        onChange={handleFilter}
      />
      {filter.label}
    </label>
  ));
}

export default TodoFilter;
