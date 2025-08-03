import React from 'react';
import ProgressBar from './ProgressBar';

const CertificationCount = ({ certifications }) => {
  const countBySkill = certifications.reduce((acc, cert) => {
    acc[cert.skill] = (acc[cert.skill] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className='py-5 space-y-3'>
      <h3 className='flex justify-between border-b-1 border-gray-300'><span>Skill</span><span>Certification Count</span></h3>
      <ul className='space-y-3'>
        {Object.entries(countBySkill).map(([skill, count]) => (
          <>
          <li key={skill} className='flex justify-between'><span>{skill}</span><span>{count}</span></li>
          <ProgressBar value={count}/>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CertificationCount;
