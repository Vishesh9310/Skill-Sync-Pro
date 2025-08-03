import React from 'react';
import TaskForm from '../components/task/TaskForm';
import TaskFilter from '../components/task/TaskFilter';
import TaskCard from '../components/task/TaskCard';
import { useSelector } from 'react-redux';

const TaskManager = () => {
  const filteredTasks = useSelector((state) => state.task.filteredTasks);

  return (
    <div className="space-y-6 p-4">
      <TaskForm />
      <TaskFilter />
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
