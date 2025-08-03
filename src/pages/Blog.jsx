import React, { useEffect, useReducer } from 'react';
import { noteReducer, initialState } from '../reducer/noteReducer';
import Input from '../components/blog/NoteForm';
import NoteItem from '../components/blog/NoteItem';

const Blog = () => {
  const [todos, dispatch] = useReducer(noteReducer, initialState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">SkillSync Notes</h1>
        <Input dispatch={dispatch} />
        <div className="mt-4">
          {todos.length === 0 ? (
            <p className="text-center text-gray-400">No Note yet.</p>
          ) : (
            todos.map(todo => (
              <NoteItem key={todo.id} todo={todo} dispatch={dispatch} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
