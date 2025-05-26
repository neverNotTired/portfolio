import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

const experiences = [
    {
        title: 'Full-Stack Web Developer',
        company: 'Pebble Design',
        period: '2017 - Present',
        description:
            'Responsible for leading the back-end design (PHP, SQL, Linux based servers) of custom WordPress websites, and front-end development using JavaScript (E6), jQuery, Html, CSS, and JavaScript frameworks and packages. Implementing 3rd party API integrations such as, Booking engine APIs for hotel websites to Instagram feed APIs. Plugin development for WordPress.',
    },
    {
        title: 'Full-Stack Web Developer',
        company: 'Ahiru Media (Self-Employed)',
        period: 'Freelance',
        description:
            'Developed and maintained web applications using React and Node.js. Wordpress CMS using Elementor. Collaborated directly with stakeholders to deliver high-quality products.',
    },
    {
        title: 'Web Consultant and Developer (part-time/freelance)',
        company: '2Descartes Pty Ltd',
        period: '2024 – 2025',
        description:
            'Maintain and implement updates across all of their websites using Ruby, Html, CSS and JavaScript. Assist with any new technologies and best practice inquiries and implementation. Mobile app development using React Native.',
    },
];

const otherExperiences = [
    {
        title: 'Sheet Metal Factory hand (night shift)',
        company: 'Metroll',
        period: '2007 - 2013, 2013 - 2017',
        description:
            'Manufacturing metal goods - Sheds & Roofing materials.',
    },
    {
        title: 'Car Detailer',
        company: 'BMW Motors, Currimundi, Sunshine Coast, Queensland',
        period: '2013',
        description:
            'Restoring used cars to be resold. Washing cars after servicing.',
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
    {
        degree: 'Diploma of Web Development',
        school: 'Evocca College',
        period: '2015 - 2017',
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

const professionalSummary = "I’m a self-taught programmer for the most part, coding in my free time to hone my skills ..for fun. After I landed my first job opportunely as a web developer, I realised I still had much to learn so I decided to study a degree to further enhance my knowledge and expertise.";

export default function Resume() {
    return (
        <div className="relative flex min-h-screen flex-col bg-[#111a22] dark group/design-root _overflow-x-hidden font-['Space Grotesk','Noto Sans',sans-serif']">
            <Header />
            <div className="layout-container flex h-full grow flex-col overflow-x-hidden">
                <div className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40 2xl:px-80 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between items-center gap-3 p-4">
                            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                                John Taylor
                            </p>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24"
                                style={{
                                    backgroundImage:
                                        'url("https://1.gravatar.com/avatar/6201b92f6ae52600d18d220e19238819d148544b7fdc51151c0bf6c8b20b7244")',
                                        // 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKwtzFtMeq4rhiwhPjJvUOxMjTOwpeIAMYbwx3kdXRnVtoAxMVAGSJYWc0zf1P92H7PhICyUHBytk4tP5kd_Mw_qM-7HXsCtecw9q5BGdvl4pR4rHlJQxEau6EG9Oq7-N4H18itmlZ8Lg0i428pggnQElgcIp0p860ogfLkq56v_vZthIZANyjUQvhnbFpafkg3hizkdBrIPzANpb0HbGZ0J5qUzHyKJ1mLZLP7erchIblvwVCwMnxoLsRanXowAhmdc2aPbjW33U")',
                                }}
                            ></div>
                        </div>

                        {/* Professional Summary */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Professional Summary
                        </h2>
                        <div
                            className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                        >
                            <div className="flex flex-1 flex-col justify-center">
                                <p className="text-[#a0adba] text-sm font-normal leading-normal">{professionalSummary}</p>
                            </div>
                        </div>

                        <hr className="my-8 border-t border-gray-700" />

                        {/* Skills */}
                        <Skills />

                        <hr className="my-8 border-t border-gray-700" />

                        {/* Experience */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Experience
                        </h2>
                        {experiences.map((exp) => (
                            <div
                                key={exp.title + exp.company}
                                className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal my-4">{exp.title}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.description}</p>
                                    <p className="text-[#a0adba] text-sm font-semibold leading-normal mt-2">{exp.company}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal mt-4">{exp.period}</p>
                                </div>
                            </div>
                        ))}

                        <hr className="my-8 border-t border-gray-700" />

                        {/* Education */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Education
                        </h2>
                        {education.map((edu) => (
                            <div
                                key={edu.degree + edu.school}
                                className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal my-4">{edu.degree}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{edu.major}</p>
                                    {edu.minor && (
                                        <p className="text-[#a0adba] text-sm font-normal leading-normal italic">{edu.minor}</p>
                                    )}
                                    {edu.gpa && (
                                        <p className="text-[#a0adba] text-xs font-normal leading-normal mt-1">{edu.gpa}</p>
                                    )}
                                    <p className="text-[#a0adba] text-sm font-semibold leading-normal mt-2">{edu.school}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal mt-4">{edu.period}</p>
                                </div>
                            </div>
                        ))}

                        <hr className="my-8 border-t border-gray-700" />

                        {/* Projects */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Projects
                        </h2>
                        {projects.map((proj) => (
                            <div
                                key={proj.name}
                                className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal my-4">{proj.name}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{proj.description}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{proj.details}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal my-4">{proj.period}</p>
                                </div>
                            </div>
                        ))}

                        <hr className="my-8 border-t border-gray-700" />

                        {/* Experience */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            Other Experience
                        </h2>
                        {otherExperiences.map((exp) => (
                            <div
                                key={exp.title + exp.company}
                                className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                            >
                                <div className="flex flex-1 flex-col justify-center">
                                    <p className="text-white text-base font-medium leading-normal my-4">{exp.title}</p>
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal">{exp.description}</p>
                                    <p className="text-[#a0adba] text-sm font-semibold leading-normal">{exp.company}</p>
                                </div>
                                <div className="shrink-0">
                                    <p className="text-[#a0adba] text-sm font-normal leading-normal mt-4">{exp.period}</p>
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
