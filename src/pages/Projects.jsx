import React from 'react';
import ProjectForm from '../components/project/ProjectForm';
import ProjectList from '../components/project/ProjectList';

const Projects = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Showcase Your Projects</h1>
      <ProjectForm />
      <ProjectList />
    </div>
    <button>Add personal or team proejects</button>
    <button>Upload screenshots, repo links, tags, and collaborators.</button>
    </>
  )
}

export default Projects;