import React, { useState } from 'react';

const NoteForm = ({ dispatch }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note here..."
        className="flex-grow px-4 py-2 border rounded-md"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default NoteForm;
