import React, { useState } from 'react'

const SkillForm = ({onSubmit, skillToEdit}) => {
    const [name, setName] = useState(skillToEdit?.name || '');
    const [proficiency, setProficiency] = useState(skillToEdit?.proficiency || 0);
    const [lastUsed, setLastUsed] = useState(skillToEdit?.lastUsed || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({id: skillToEdit?.id || Date.now(), name, proficiency, lastUsed});
        setName('');
        setProficiency(0);
        setLastUsed('');
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Skill Name" className="border px-2 py-1 w-full" required />
      <input type="number" value={proficiency} onChange={e => setProficiency(e.target.value)} min={1} max={100} className="border px-2 py-1 w-full" required />
      <input type="month" value={lastUsed} onChange={e => setLastUsed(e.target.value)} className="border px-2 py-1 w-full" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">
        {skillToEdit ? 'Update Skill' : 'Add Skill'}
      </button>
    </form>
  )
}

export default SkillForm