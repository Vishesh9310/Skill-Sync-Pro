// src/components/projects/ProjectList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {deleteProject} from '../../features/project/projectSlice'

const ProjectList = () => {
  const projects = useSelector(state => state.projects);
  const dispatch = useDispatch();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {projects.map(project => (
        <div key={project.id} className="border p-4 rounded shadow bg-white">
          {project.image && <img src={project.image} alt="Screenshot" className="w-full h-40 object-cover rounded" />}
          <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
          <p><strong>Tags:</strong> {project.tags}</p>
          <p><strong>Repo:</strong> <a href={project.repo} target="_blank" rel="noreferrer" className="text-blue-600 underline">{project.repo}</a></p>
          <p><strong>Collaborators:</strong> {project.collaborators}</p>
          <button onClick={() => dispatch(deleteProject(project.id))} className="mt-2 text-sm text-red-500 hover:underline">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
