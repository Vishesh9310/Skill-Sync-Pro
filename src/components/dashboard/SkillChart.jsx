import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const SkillChart = () => {

  const skills = useSelector(state => state.skills);

  const data = skills.map(skill => ({
    name: skill.name,
    value: Number(skill.proficiency) || 0,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <PieChart width={300} height={300}>
        <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
          {data.map((_, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
        </Pie>
        <Tooltip />
        <Legend
          layout="horizontal"
          align='bottom'
        />
      </PieChart>
    </>
  )
}

export default SkillChart;