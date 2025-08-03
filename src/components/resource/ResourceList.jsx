import React from 'react';
import { useSelector } from 'react-redux';

const ResourceList = () => {
  const resources = useSelector(state => state.resources);
  const skills = useSelector(state => state.skills);

  const getSkillName = (id) => {
    const skill = skills.find(s => s.id === id);
    return skill ? skill.name : 'Unknown';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {resources.map(res => (
        <div key={res.id} className="border rounded p-2 shadow">
          {res.preview && <img src={res.preview} alt="Resource" className="h-32 w-full object-contain" />}
          <p className="text-sm mt-1">Skill: {getSkillName(res.skillId)}</p>
          <p className="text-xs text-gray-500">Date: {res.date}</p>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;
