import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
    // const baseUrl = process.env.REACT_APP_API_URL;
    const baseUrl = import.meta.env.VITE_API_URL;
    console.log("API base:", import.meta.env.VITE_API_URL);


    fetch(`${baseUrl}/projects?populate=Image&sort=createdAt:desc&pagination[limit]=3`)
        .then(res => res.json())
        .then(data => {
        console.log('Fetched projects:', data);
        const parsed = data.data.map(item => item);
        setProjects(parsed);
        })
        .catch(err => {
        console.error('Error fetching projects:', err);
        });
    }, []);

    return (
        <div id="projects" className="bg-[#111a22]">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">Projects</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,350px))] gap-3 p-8">

                {projects.map(project => {
                    const attrs = project;
                    const documentId = attrs.documentId;
                    const base_url = import.meta.env.VITE_API_URL;

                    const thumbnail = attrs?.Thumbnail?.url;
                    const image = attrs?.Image?.url;

                    const imageUrl = thumbnail 
                        ? `/cms/${thumbnail}` 
                        : image 
                        ? `/cms/${image}`
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

                {/* <div className="flex flex-col gap-3 pb-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5bzqqQ_CrkGJ3cADQYfCrBQfh7LWwnkX_U0ZPIjYZWeHMXdm2fcPSF6ARGUBajbU3iMbElQ7eDyCxaNkr4mHgFs1eLjOzFTEY6nb6qn7W_yDkhaw3trh-voR8UYn7qnW_g8PRu7idI3k9EIkdFzqNnlLZ2asfoeIJtqNbUNvRNNirC3LK3q8IS56zjfp9u6id76tHmR-3l9ezZec1KQIvaVxSBnOEjSWM-E57E9HIWQFYkTEJrRDqQn57X_5z8tpchy1iMu006rs")'
                        }}
                    ></div>
                    <div>
                        <p className="text-white text-base font-medium leading-normal my-3">Portfolio Website</p>
                        <p className="text-[#93adc8] text-sm font-normal leading-normal mb-0">Designed and built this personal portfolio website from scratch using ReactJS to showcase my skills and projects.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFdvkOStvW36xG8XROrGdrSZO8m8iNFqMOEpnEC7-d8wPC5mR8C3T_bZPTOv43oI3ZgZ6T2cWLuHNvnUmPwoznz-6HIeyxTol4UIrJZ29uio0TDYa3KfK4nuWOQ7lF_weLiMOVMZOAUISmS4mf4BqLEPYOADvxmRJe-jw5qRAbK-fZWTpahjDJ-I6klh0jWqljqRhgrJorxDNBsndXJRYDag80rkPhgBYq6AUgtssDDwYO2BFBVtr34W_nvMYFXMyDqZZS4FZzKus")'
                        }}
                    ></div>
                    <div>
                        <p className="text-white text-base font-medium leading-normal my-3">Car Log App</p>
                        <p className="text-[#93adc8] text-sm font-normal leading-normal mb-0">Created a task management application with real-time updates and collaborative features.</p>
                    </div>
                </div> */}

            </div>
            <div className="flex justify-start px-8 py-3">
                <Link to="/projects" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-8 @[480px]:h-12 @[480px]:px-5 bg-[#1465b7] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">View Projects</span>
              </Link>
            </div>
        </div>
    )
}