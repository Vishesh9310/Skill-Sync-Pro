import React from 'react'
import {Routes, Route} from "react-router-dom"
import ProtectedRoute from '../components/ProtectedRoute'
import Home from '../components/navbar/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Achievements from '../pages/Achievements'
import LearningRoadmap from '../pages/LearningRoadmap'
import TaskManager from '../pages/TaskManager'
import Blog from '../pages/Blog'
import SkillNav from '../components/navbar/SkillsNav'
import ProjectsNav from '../components/navbar/ProjectsNav'
import AdminPanel from '../pages/AdminPanel'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/skills" element={<ProtectedRoute><Skills/></ProtectedRoute>}/>
        <Route path="/projects" element={<ProtectedRoute><Projects/></ProtectedRoute>}/>
        <Route path="/achievement" element={<ProtectedRoute><Achievements/></ProtectedRoute>}/>
        <Route path="/learningroadmap" element={<ProtectedRoute><LearningRoadmap/></ProtectedRoute>}/>
        <Route path="/taskmanager" element={<ProtectedRoute><TaskManager/></ProtectedRoute>}/>
        <Route path="/blog" element={<ProtectedRoute><Blog/></ProtectedRoute>}/>
        <Route path="/adminpanel" element={<ProtectedRoute><AdminPanel/></ProtectedRoute>}/>
        <Route path="/skillnav" element={<ProtectedRoute><SkillNav/></ProtectedRoute>}/>
        <Route path="/projectnav" element={<ProtectedRoute><ProjectsNav/></ProtectedRoute>}/>
    </Routes>
  )
}