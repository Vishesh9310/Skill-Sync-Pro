import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, deleteSkill, updateSkill } from '../features/skills/skillSlice';
import SkillForm from '../components/skilltracker/SkillForm';
import SkillList from '../components/skilltracker/SkillList';

const Skills = () => {
  const skills = useSelector(state => state.skills);
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(null);

  const addOrUpdate = (skill) => {
    if(editing){
      dispatch(updateSkill(skill));
    }else{
      dispatch(addSkill(skill));
    }
    setEditing(null);
  };

  const handleDelete = (id) =>{
    dispatch(deleteSkill(id));
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Skill Tracker</h2>
      <SkillForm onSubmit={addOrUpdate} skillToEdit={editing} />
      <SkillList skills={skills} onEdit={setEditing} onDelete={handleDelete} />
    </div>
  );
};

export default Skills;


/*
<div>
        <button>Add Skills</button>
        <button>set proficiency level</button>
        <button>last practiced date</button>
        <button>track progress</button>
    </div>*/