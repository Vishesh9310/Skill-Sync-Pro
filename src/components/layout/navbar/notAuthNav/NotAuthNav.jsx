import React from 'react'
import { NavLink } from 'react-router-dom'

const NotAuthNav = () => {
  return (
    <div className='bg-blue-500 py-3 px-24 text-white font-bold flex justify-between w-full'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}

export default NotAuthNav;