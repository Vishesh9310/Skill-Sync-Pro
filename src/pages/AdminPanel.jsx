import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export default function AdminPanel() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Welcome, {user.name}!</h1>
      <p className="mb-4">Your role: <strong>{user.role}</strong></p>

      {user.role === 'admin' ? (
        <p className="text-green-600">You are in the Admin Panel.</p>
      ) : (
        <p className="text-blue-600">You are in the Student Dashboard.</p>
      )}

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};