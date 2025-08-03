import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addResource } from '../../features/resource/resourceSlice';

const ResourceForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector(state => state.skills);

  const [formData, setFormData] = useState({
    file: null,
    skillId: '',
    date: '',
    preview: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      const file = files[0];
      if (file) {
        setFormData(prev => ({
          ...prev,
          file,
          preview: URL.createObjectURL(file),
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addResource(formData));
    setFormData({ file: null, skillId: '', date: '', preview: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded shadow">
      <input type="file" name="file" accept=".pdf,.png" onChange={handleChange} required className="w-full" />

      <select name="skillId" value={formData.skillId} onChange={handleChange} className="w-full p-2 border rounded" required>
        <option value="">Select Skill</option>
        {skills.map(skill => (
          <option key={skill.id} value={skill.id}>{skill.name}</option>
        ))}
      </select>

      <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded" required />

      {formData.preview && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">Preview:</p>
          <img src={formData.preview} alt="Preview" className="h-32 object-contain border rounded" />
        </div>
      )}

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Upload Resource</button>
    </form>
  );
};

export default ResourceForm;
