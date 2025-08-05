// AppRoutes.jsx
import React from 'react'
import { Routes, Route } from "react-router-dom"
import ProtectedRoute from '../components/ProtectedRoute'
import Login from '../pages/Login'
import Home from '../components/layout/navbar/notAuthNav/Home'
import About from '../components/layout/navbar/notAuthNav/About'
import Dashboard from '../pages/Dashboard'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Achievements from '../pages/Achievements'
import LearningRoadmap from '../pages/LearningRoadmap'
import TaskManager from '../pages/TaskManager'
import Blog from '../pages/Blog'
import AdminPanel from '../pages/AdminPanel'

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>} />

      {/* Protected Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/skills" element={<ProtectedRoute><Skills /></ProtectedRoute>} />
      <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
      <Route path="/achievement" element={<ProtectedRoute><Achievements /></ProtectedRoute>} />
      <Route path="/learningroadmap" element={<ProtectedRoute><LearningRoadmap /></ProtectedRoute>} />
      <Route path="/taskmanager" element={<ProtectedRoute><TaskManager /></ProtectedRoute>} />
      <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>} />
      <Route path="/adminpanel" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
    </Routes>
  )
}