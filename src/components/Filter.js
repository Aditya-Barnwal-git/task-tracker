import React from 'react';

const Filter = ({ filter, setFilter }) => {
  const handlePriorityChange = (e) => {
    setFilter({ ...filter, priority: e.target.value });
  }

  const handleStatusChange = (e) => {
    setFilter({ ...filter, status: e.target.value });
  }

  const handleSortChange = (e) => {
    setFilter({ ...filter, sortBy: e.target.value });
  }

  return (
    <div>
      <h3>Filter Tasks</h3>
      <label>
        Priority:
        <select value={filter.priority} onChange={handlePriorityChange}>
          <option value="">All</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label>
        Status:
        <select value={filter.status} onChange={handleStatusChange}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>
      <label>
        Sort by:
        <select value={filter.sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="date">Due Date</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;
