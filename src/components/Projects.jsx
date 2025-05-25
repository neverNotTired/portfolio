export default function Projects() {
    return (
        <div id="projects" className="bg-[#111a22]">
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-8 pb-3 pt-10">Projects</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-8">
                <div className="flex flex-col gap-3 pb-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg8dTHh8l8fTJsqCltPXmNoQNS3QO-H6xhIebW8bNLioS7uh0VCIjp7iwEjGjkKX0GPX8XWrSL7-gHbU3rzAQIsPt_WfY6MVcTP9_8xVlstxDOLFVDT5PI-A4uBNINt58Ccxx0J-3FI29niVlxhlaiRGkixmejqDMvdx8GecYw8blFDqiUwjpgWvVpaHxwh99ziQraBvF4tZwF8-oG_BNZYqiSo6hQbx_Pp6PEHPB5RGnEBVIXgvNlJlYFhtyMd_tu3_fzFR2h7t8")'
                        }}
                    ></div>
                    <div>
                        <p className="text-white text-base font-medium leading-normal mt-3">E-commerce Platform</p>
                        <p className="text-[#93adc8] text-sm font-normal leading-normal mb-0">
                            Developed a full-featured e-commerce platform with user authentication, product management, and payment gateway integration.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                    <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded"
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5bzqqQ_CrkGJ3cADQYfCrBQfh7LWwnkX_U0ZPIjYZWeHMXdm2fcPSF6ARGUBajbU3iMbElQ7eDyCxaNkr4mHgFs1eLjOzFTEY6nb6qn7W_yDkhaw3trh-voR8UYn7qnW_g8PRu7idI3k9EIkdFzqNnlLZ2asfoeIJtqNbUNvRNNirC3LK3q8IS56zjfp9u6id76tHmR-3l9ezZec1KQIvaVxSBnOEjSWM-E57E9HIWQFYkTEJrRDqQn57X_5z8tpchy1iMu006rs")'
                        }}
                    ></div>
                    <div>
                        <p className="text-white text-base font-medium leading-normal mt-3">Portfolio Website</p>
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
                        <p className="text-white text-base font-medium leading-normal mt-3">Car Log App</p>
                        <p className="text-[#93adc8] text-sm font-normal leading-normal mb-0">Created a task management application with real-time updates and collaborative features.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start px-8 py-3">
                <button className="flex min-w-[84px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded h-10 px-8 @[480px]:h-12 @[480px]:px-5 bg-[#1465b7] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">View All Projects</span>
                </button>
            </div>
        </div>
    )
}