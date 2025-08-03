import React from 'react';

const SkillList = ({ skills, onEdit, onDelete }) => {
  return (
    <div className="mt-4 space-y-2">
      {skills.map((skill) => (
        <div key={skill.id} className="flex justify-between items-center p-2 border rounded">
          <div>
            <p className="font-semibold">{skill.name}</p>
            <p className="text-sm text-gray-500">Proficiency: {skill.proficiency}</p>
            <p className="text-sm text-gray-500">Last Used: {skill.lastUsed}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(skill)}
              className="px-3 py-1 bg-yellow-400 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(skill.id)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
