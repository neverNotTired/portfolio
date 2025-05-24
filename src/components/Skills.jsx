export default function Skills() {
    const skills = [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "PHP" },
        { name: "WordPress" },
        { name: "SQL" },
        { name: "React" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "MongoDB" },
        { name: "Git" },
        { name: "REST APIs" },
        { name: "Bash" },
    ];

    const extraSkills = [
        { name: "React Native" },
        { name: "Python" },
    ];

    return (
        <>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                Skills
            </h2>
            <div className="flex gap-3 p-8 flex-wrap pr-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded bg-[#243647] pl-4 pr-4"
                    >
                        <p className="text-white text-sm font-medium m-0">
                            {skill.name}
                        </p>
                    </div>
                ))}
                {extraSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded border border-dashed border-[#93adc8] bg-transparent px-8"
                    >
                        <p className="text-[#93adc8] text-sm font-medium m-0">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
