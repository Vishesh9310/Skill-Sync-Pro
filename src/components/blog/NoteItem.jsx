import React from 'react';

const NoteItem = ({ todo, dispatch }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-md my-2">
      <span
        className={`flex-1 ${todo.done ? 'line-through text-gray-500' : ''}`}
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem