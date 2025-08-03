import React from 'react'
import { useDispatch } from 'react-redux';
import {logout} from '../../features/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';

import { MdDashboard, MdNotes, MdAdminPanelSettings } from 'react-icons/md';
import { BiLineChart } from 'react-icons/bi';
import { HiOutlineFolderOpen } from 'react-icons/hi';
import { FaTrophy, FaRegStickyNote, FaPowerOff } from 'react-icons/fa';
import { GiRoad } from 'react-icons/gi';
import { RiTaskLine } from 'react-icons/ri';

const sidebar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const handleLogout = () => {
      dispatch(logout());
      localStorage.removeItem('user');
      navigate('/login');
    };

  return (
    <div className='h-fit'>
      <h1 className='font-semibold text-black text-3xl p-3'>SkillSync Pro</h1>

      <ul className='h-fit w-full my-5 text-black list-none text-lg'>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/dashboard"><MdDashboard/> Dashboard</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/skills"><BiLineChart/> Skill Tracker</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/projects"><HiOutlineFolderOpen/> Projects</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/achievement"><FaTrophy/> Achievements</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/learningroadmap"><GiRoad/> Learning Roadmap</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/taskmanager"><RiTaskLine/> Task Manager</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/blog"><MdNotes/> Blog/Notes</NavLink></li>
        <li className='hover:text-blue-700 hover:bg-blue-50 w-full h-fit p-3'><NavLink className="inline-flex gap-3 items-center" to="/adminpanel"><MdAdminPanelSettings/> Admin Panel</NavLink></li>
      </ul>

      <button onClick={handleLogout} className='align-bottom p-3 font-semibold hover:text-blue-800 text-lg inline-flex gap-3 items-center'><FaPowerOff/> Logout</button>
    </div>
  )
}

export default sidebar;