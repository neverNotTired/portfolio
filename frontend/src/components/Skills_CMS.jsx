import { useEffect, useState } from 'react';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [extraSkills, setExtraSkills] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/skills-lists')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched skills:', data);
        const parsed = data.data.map((item) => item);
        setSkills(parsed.filter(skill => !skill.Dabbled));
        setExtraSkills(parsed.filter(skill => skill.Dabbled));
      })
      .catch(err => {
        console.error('Error fetching skills:', err);
      });
  }, []);

  return (
    <div id="skills" className="bg-[#111a22]">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
        Skills
      </h2>
      <div className="flex gap-3 p-8 flex-wrap pr-4">
        {skills.map((skill) => (
          <div
            key={skill.Title}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-[#243647] pl-4 pr-4"
          >
            <p className="text-white text-sm font-medium m-0">
              {skill.Title}
            </p>
          </div>
        ))}
        {extraSkills.map((skill) => (
          <div
            key={skill.Title}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded border border-dashed border-[#93adc8] bg-transparent px-8"
          >
            <p className="text-[#93adc8] text-sm font-medium m-0">
              {skill.Title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
