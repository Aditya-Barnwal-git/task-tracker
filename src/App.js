import React, { useState } from 'react';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', priority: 'High', status: 'Pending', dueDate: '2024-10-20' },
    { id: 2, title: 'Task 2', priority: 'Medium', status: 'Completed', dueDate: '2024-10-18' },
    { id: 3, title: 'Task 3', priority: 'Low', status: 'In Progress', dueDate: '2024-10-22' },
  ]);

  const [filter, setFilter] = useState({ priority: '', status: '', sortBy: '' });

  return (
    <div className="container">
      <h1>Task Tracker</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} filter={filter} />
    </div>
  );
}

export default App;
