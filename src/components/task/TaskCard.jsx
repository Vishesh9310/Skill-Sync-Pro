// TaskCard.jsx
import React from 'react';

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending': return 'bg-gray-400';
    case 'In Progress': return 'bg-yellow-500';
    case 'Completed': return 'bg-green-500';
    default: return 'bg-gray-300';
  }
};

const TaskCard = ({ title, tags, deadline, status }) => {
  return (
    <div className="p-4 border rounded space-y-2">
      <h2 className="font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">Deadline: {deadline}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">{tag}</span>
        ))}
        <span className={`px-2 py-1 rounded text-xs text-white ${getStatusColor(status)}`}>{status}</span>
      </div>
    </div>
  );
};

export default TaskCard;
