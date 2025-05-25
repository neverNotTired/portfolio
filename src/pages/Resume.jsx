import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const experiences = [
    {
        title: 'Web Programmer',
        company: 'Ahiru Media',
        period: '2020 - Present',
        description:
            'Developed and maintained web applications using React and Node.js. Collaborated with designers and product managers to deliver high-quality products.',
    },
    {
        title: 'Front-End Developer',
        company: 'Tech Solutions Inc.',
        period: '2018 - 2020',
        description:
            'Worked on front-end development using HTML, CSS, and JavaScript. Implemented responsive designs and improved website performance.',
    },
];
const otherExperiences = [
    {
        title: 'Freelance Web Developer',
        company: 'Self-Employed',
        period: '2016 - 2018',
        description:
            'Provided web development services to various clients, focusing on custom solutions and client satisfaction.',
    },
    {
        title: 'Intern Software Engineer',
        company: 'Tech Interns Ltd.',
        period: '2015 - 2016',
        description:
            'Assisted in software development projects, gaining hands-on experience in coding and project management.',
    },
];

const education = [
    {
        degree: 'Bachelor of Information Technology',
        major: 'Majors: Computer Science; Networking & Security',
        minor: 'Additional coursework completed for a third major in Data Analytics',
        school: 'University of Southern Queensland (UniSQ)',
        period: '2020 - 2025',
        gpa: 'GPA: 6.0/7.0',
    },
];

const projects = [
    {
        name: 'Project Management App',
        description: 'Built with React, Node.js, and MongoDB.',
        details: 'A web application for managing tasks and projects.',
        period: '2022',
    },
    {
        name: 'Personal Blog',
        description: 'Developed using HTML, CSS, and JavaScript.',
        details: 'A personal blog website.',
        period: '2021',
    },
];

export default function Resume() {
    return (
        <div className="relative flex min-h-screen flex-col bg-[#111a22] dark group/design-root _overflow-x-hidden font-['Space Grotesk','Noto Sans',sans-serif']">
            <Header />
            <div className="layout-container flex h-full grow flex-col overflow-x-hidden">
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between items-center gap-3 p-4">
                            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                                John Taylor
                            </p>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                                style={{
                                    backgroundImage:
                                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKwtzFtMeq4rhiwhPjJvUOxMjTOwpeIAMYbwx3kdXRnVtoAxMVAGSJYWc0zf1P92H7PhICyUHBytk4tP5kd_Mw_qM-7HXsCtecw9q5BGdvl4pR4rHlJQxEau6EG9Oq7-N4H18itmlZ8Lg0i428pggnQElgcIp0p860ogfLkq56v_vZthIZANyjUQvhnbFpafkg3hizkdBrIPzANpb0HbGZ0J5qUzHyKJ1mLZLP7erchIblvwVCwMnxoLsRanXowAhmdc2aPbjW33U")',
                                }}
                            ></div>
                        </div>

                        {/* Skills */}
                        <Skills />

                        <hr class="my-8 border-t border-gray-700" />

                        {/* Experience */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Experience
                        </h2>
                        {experiences.map((exp) => (
                            <div
                                key={exp.title + exp.company}
                                className="flex gap-4 bg-[#15191e] px-8 py-3 justify-between"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal">{exp.title}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.description}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.company}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.period}</p>
                                </div>
                            </div>
                        ))}

                        <hr class="my-8 border-t border-gray-700" />


                        {/* Education */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Education
                        </h2>
                        {education.map((edu) => (
                            <div
                                key={edu.degree + edu.school}
                                className="flex gap-4 bg-[#15191e] px-8 py-3 justify-between"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal">{edu.degree}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{edu.major}</p>
                                    {edu.minor && (
                                        <p className="text-[#a0adba] text-sm font-normal leading-normal italic">{edu.minor}</p>
                                    )}
                                    {edu.gpa && (
                                        <p className="text-[#a0adba] text-xs font-normal leading-normal mt-1">{edu.gpa}</p>
                                    )}
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal mt-2">{edu.school}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{edu.period}</p>
                                </div>
                            </div>
                        ))}

                        <hr class="my-8 border-t border-gray-700" />

                        {/* Projects */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Projects
                        </h2>
                        {projects.map((proj) => (
                            <div
                                key={proj.name}
                                className="flex gap-4 bg-[#15191e] px-8 py-3 justify-between"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal">{proj.name}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{proj.description}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{proj.details}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{proj.period}</p>
                                </div>
                            </div>
                        ))}

                        <hr class="my-8 border-t border-gray-700" />

                        {/* Experience */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Other Experience
                        </h2>
                        {otherExperiences.map((exp) => (
                            <div
                                key={exp.title + exp.company}
                                className="flex gap-4 bg-[#15191e] px-8 py-3 justify-between"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal">{exp.title}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.description}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.company}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.period}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
