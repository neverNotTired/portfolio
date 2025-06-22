import { useEffect, useState } from 'react';

export default function Skills({ skills: skillsProp }) {
  const [skills, setSkills] = useState([]);
  const [extraSkills, setExtraSkills] = useState([]);

  useEffect(() => {
    if (skillsProp && skillsProp.length > 0) {
      // Use the passed-in props instead of fetching
      setSkills(skillsProp.filter(skill => !skill.Dabbled));
      setExtraSkills(skillsProp.filter(skill => skill.Dabbled));
    } else {
      // No props? Fallback to API
      fetch('http://localhost:8081/api/skills-lists')
        .then(res => res.json())
        .then(data => {
          console.log('Fetched skills:', data);
          const parsed = data.data.map(item => item);
          setSkills(parsed.filter(skill => !skill.Dabbled));
          setExtraSkills(parsed.filter(skill => skill.Dabbled));
        })
        .catch(err => {
          console.error('Error fetching skills:', err);
        });
    }
  }, [skillsProp]);

  const internal_page = skillsProp && skillsProp.length > 0;
  const padding = internal_page ? 'px-0 pt-8 pb-0' : 'px-8';

  return (
    <div id="skills" className="bg-[#111a22]">

    {(!internal_page) && (
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
        Skills
      </h2>
    )}

      <div className={`flex gap-3 ${padding} flex-wrap pr-4`}>
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
