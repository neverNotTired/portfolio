import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GitGraph from '../components/Gitgraph';

const content = "This is a collection of projects I've worked on — from fast, responsive web apps to complex backend integrations. Each one taught me something new (sometimes the hard way), and helped sharpen the way I build for the web.";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
    // const baseUrl = process.env.REACT_APP_API_URL;
    const baseUrl = import.meta.env.VITE_API_URL;

    fetch(`${baseUrl}/projects?populate=Image`)
        .then(res => res.json())
        .then(data => {
        console.log('Fetched projects:', data);
        const parsed = data.data.map((item) => item);
        setProjects(parsed.filter(project => !project.Dabbled));
        })
        .catch(err => {
        console.error('Error fetching projects:', err);
        });
    }, []);

    return (
        <div className="relative flex min-h-screen flex-col bg-[#111a22] dark group/design-root _overflow-x-hidden font-['Space Grotesk','Noto Sans',sans-serif']">
            <Header />
            <div className="layout-container flex h-full grow flex-col overflow-x-hidden">
                <div className="_px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40 2xl:px-80 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between items-center gap-3 p-4">
                            <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                                Built With Code (and coffee)
                            </p>
                            <div
                                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 opacity-0"
                                style={{
                                    backgroundImage:
                                        'url("https://1.gravatar.com/avatar/6201b92f6ae52600d18d220e19238819d148544b7fdc51151c0bf6c8b20b7244")',
                                        // 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKwtzFtMeq4rhiwhPjJvUOxMjTOwpeIAMYbwx3kdXRnVtoAxMVAGSJYWc0zf1P92H7PhICyUHBytk4tP5kd_Mw_qM-7HXsCtecw9q5BGdvl4pR4rHlJQxEau6EG9Oq7-N4H18itmlZ8Lg0i428pggnQElgcIp0p860ogfLkq56v_vZthIZANyjUQvhnbFpafkg3hizkdBrIPzANpb0HbGZ0J5qUzHyKJ1mLZLP7erchIblvwVCwMnxoLsRanXowAhmdc2aPbjW33U")',
                                }}
                            ></div>
                        </div>

                        {/* Professional Summary */}
                        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">
                            My Work
                        </h2>
                        <div
                            className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                        >
                            <div className="flex flex-1 flex-col justify-center">
                                <p className="text-[#a0adba] text-l font-normal leading-normal">{content}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,350px))] gap-3 py-6 px-8">

                            {projects.map(project => {
                                const base_url = import.meta.env.VITE_API_URL;
                                const attrs = project;
                                const documentId = attrs.documentId;

                                const thumbnail = attrs?.Thumbnail?.url;
                                const image = attrs?.Image?.url;

                                const imageUrl = thumbnail 
                                    ? `${thumbnail}` 
                                    : image 
                                    ? `${image}` 
                                    : 'https://via.placeholder.com/800x450?text=No+Image';

                                return (
                                    <div key={project.id} className="flex flex-col gap-3 pb-3">
                                    <a href={`/project/${documentId}`}>
                                    <div
                                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xs pb-4"
                                        style={{ backgroundImage: `url(${imageUrl})` }}
                                    ></div>
                                    </a>
                                    <div>
                                         <a href={`/project/${documentId}`}>
                                        <p className="text-white text-base font-medium leading-normal">{attrs.Title}</p>
                                         </a>
                                        <p className="text-[#93adc8] text-sm font-bold leading-normal py-2">
                                        {attrs.LaunchDate 
                                            ? new Date(attrs.LaunchDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
                                            : 'Launch date TBD'}
                                        </p>
                                        <p className="text-[#93adc8] text-sm font-normal leading-normal">{attrs.Intro}</p>
                                    </div>
                                    </div>
                                );
                            })}

                        </div>
                        <hr className="mt-8 mb-14 border-t border-gray-700" />
                        <GitGraph />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
