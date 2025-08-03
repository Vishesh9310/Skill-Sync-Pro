import React from 'react';
import { useSelector } from 'react-redux';

const TaskSummary = () => {
  const allTasks = useSelector((state) => state.task.allTasks);

  const pendingTasks = allTasks.filter(task => task.status === 'Pending');
  const inProgressTasks = allTasks.filter(task => task.status === 'In Progress');
  const completedTasks = allTasks.filter(task => task.status === 'Completed');

  return (
    <div>
      <div className='w-full flex justify-between mb-4'>
        <p className='w-1/3'>⏳ Pending: {pendingTasks.length}</p>
        <p className='w-1/3'>🛠️ In Progress: {inProgressTasks.length}</p>
        <p className='w-1/3'>✅ Completed: {completedTasks.length}</p>
      </div>

      <div className='w-full flex justify-between'>
        <div className='w-1/3'>
          {pendingTasks.map((task) => (
            <p key={task.id} className='py-1 text-yellow-600'>{task.title}</p>
          ))}
        </div>
        <div className='w-1/3'>
          {inProgressTasks.map((task) => (
            <p key={task.id} className='py-1 text-blue-600'>{task.title}</p>
          ))}
        </div>
        <div className='w-1/3'>
          {completedTasks.map((task) => (
            <p key={task.id} className='py-1 text-green-600 line-through'>{task.title}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
