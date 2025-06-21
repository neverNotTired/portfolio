import Header from '../components/Header';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import GitGraph from '../components/Gitgraph';

const content = "I am a results-driven web developer with a unique blend of self-taught programming skills and formal education. I have worked in the industry helping businesses create and maintain their websites, optimise for security, and deliver custom solutions tailored to their specific needs.";

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
                                <p className="text-[#a0adba] text-sm font-normal leading-normal">{content}</p>
                            </div>
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
