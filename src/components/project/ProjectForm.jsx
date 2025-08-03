import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addProject } from '../../features/project/projectSlice';
import { v4 as uuidv4 } from 'uuid';


const ProjectForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: '',
        repo: '',
        collaborators: '',
        image: '',
    });

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        if(name === 'image'){
            const file = files[0];
            const imageURL = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, image: imageURL}));
        }else{
            setFormData(prev => ({ ...prev, [name]: value}));
        }
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject({ ...formData, id: uuidv4() }));
    setFormData({ title: '', description: '', tags: '', repo: '', collaborators: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md shadow">
      <input type="text" name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
      <input type="text" name="tags" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="url" name="repo" placeholder="GitHub Repo Link" value={formData.repo} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="text" name="collaborators" placeholder="Collaborators" value={formData.collaborators} onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Project</button>
    </form>
  );
};

export default ProjectForm