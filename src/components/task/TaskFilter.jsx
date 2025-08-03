// TaskFilter.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../../features/task/taskSlice';

const TaskFilter = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <select onChange={handleChange} className="border p-2">
      <option value="">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default TaskFilter;
