// TaskForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../features/task/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const statusOptions = ['Pending', 'In Progress', 'Completed'];

const TaskForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    tags: '',
    deadline: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
    };

    dispatch(addTask(newTask));
    setFormData({ title: '', tags: '', deadline: '', status: 'Pending' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="title" placeholder="Task Title" value={formData.title} onChange={handleChange} className="border p-2 w-full" required />
      
      <input type="text" name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="border p-2 w-full" />

      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="border p-2 w-full" />

      <select name="status" value={formData.status} onChange={handleChange} className="border p-2 w-full">
        {statusOptions.map((status) => <option key={status}>{status}</option>)}
      </select>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Task</button>
    </form>
  );
};

export default TaskForm;
