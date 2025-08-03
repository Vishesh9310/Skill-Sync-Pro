import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Greeting from '../components/dashboard/Greeting';
import SkillChart from '../components/dashboard/SkillChart';
import TaskSummary from '../components/dashboard/TaskSummary';
import CertificationCount from '../components/dashboard/CertificationCount';
import Projectlist from '../components/dashboard/Projectlist';
import Achievement from '../components/dashboard/Achievement';

import { FiMenu } from 'react-icons/fi';

const Dashboard = () => {
  const [username, setUsername]= useState("Vishesh");

  const certifications = [
    { id: 1, skill: 'React' },
    { id: 2, skill: 'React' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'JavaScript' },
    { id: 5, skill: 'CSS' },
  ];

  return (
    <div className='w-full h-fit space-y-5'>
        <div className='flex justify-between px-2 pt-5'>
          <Greeting name={username}/>
          <button><FiMenu/></button>
        </div>

        <section className='w-full h-fit flex gap-5'>
          <div className='w-3/5 p-3 rounded-xl border-1 border-gray-200 flex gap-3'>
            <div className='w-1/2'>
              <h1 className='font-semibold text-lg'>Skill Status</h1>
              <SkillChart/>
            </div>
            <div className='w-1/2'>
              <h1 className='font-semibold text-lg'>Goals</h1>
              notes write here
            </div>
          </div>
          <div className='w-2/5 p-3 rounded-xl border-1 border-gray-200'>
            <h1 className='font-semibold text-lg'>Blog</h1>
            add blog here
          </div>
        </section>


        <section className='w-full h-fit flex gap-5'>
          <div className='w-2/5 space-y-5'>
            <div className='p-3 rounded-xl border-1 border-gray-200 space-y-3'>
              <h1 className='font-semibold text-lg'>Tasks</h1>
              <TaskSummary/>
            </div>
            <div className='p-3 rounded-xl border-1 border-gray-200'>
              <div className='flex justify-between'><h1 className='font-semibold text-lg'>Projects</h1><NavLink to='/projects' className='font-semibold'>Edit</NavLink></div>
              <Projectlist/>
            </div>
          </div>
          <div className='w-3/5 p-3 rounded-xl border-1 border-gray-200'>
            <div className='flex justify-between'><h1 className='font-semibold text-lg'>Skill Tracker</h1><h2 className='font-semibold'>Edit</h2></div>
            <CertificationCount certifications={certifications}/>
            learnin roadmap here...
          </div>
        </section>

        <section className='w-full p-3 rounded-xl border-1 border-gray-200'>
          <h1 className='font-semibold text-lg'>Achievements</h1>
          <Achievement/>
        </section>
    </div>
  )
}

export default Dashboard