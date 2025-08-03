import React from 'react'
import {useSelector} from 'react-redux';

const Projectlist = () => {
    const projects = useSelector(state => state.projects);

  return (
    <div className='py-2'>
        {projects.map(project => (
            <h2 className='flex justify-between py-1 px-2 hover:bg-blue-100 hover:text-blue-700 hover:rounded-xl overflow-clip'>
              <span>{project.title}</span><a href={project.repo} target="_blank" rel="noreferrer" className="text-blue-600 underline w-1/2 text-right overflow-clip">{project.repo}</a>
            </h2>
        ))}
    </div>
  )
}

export default Projectlist