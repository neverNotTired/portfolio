import Header from '../components/Header';
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
                            Dev's Diary & Patch Notes
                        </h2>
                        <div
                            className="flex flex-col-reverse sm:flex-row gap-0 bg-[#15191e] px-8 pt-4 pb-8 justify-between mt-4 sm:mt-0 sm:gap-4"
                        >
                            <div className="flex flex-1 flex-col justify-center">
                                <p className="text-[#a0adba] text-l font-normal leading-normal">{content}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-4">
                            
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC37wp_N4MqCBvIOoaTf5Zugl7Tn6nEcQJDs1g_d2s-ecL1kojLHWEmy9ki4PDsnMCI1GjbROPeszSLB5Ix3IJ4TAVEMS3mUzeo4bDd_YQqmagjFuvWZ5rZsDS0EIa3wvRUUpPNR3RMmfKF3JY-LTjx8iNrvzCqqYzpMDU8Oimn3Z3uiAG3PcajLyMRXVB9Kwwwxn_QWFE2Z-VGaKV0kiScxc9BTnC3ahGMaaD3OXbHsvxsKwMdz2RCgpnZ0HF5vCRAmB2hhNX-FBA")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Mastering Responsive Design</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">June 22, 2024</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">
                                        Exploring the nuances of responsive design and how to create seamless user experiences across devices.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBowj7Aa8zrAxlbWgc1_8xsG2UYmHUty_d_N4_VXC8DwK8-Q-WiF8o7Yh9jutxKx5KrDXb8kZE43SvF1wpLnjI5YqbWUYc8ZEXscT_hWB5EmGKRQVJHw0bFSfuHPtyln8id-SW_YPTZ_9k2qam0co8kF3-kbwdSjGlm29nxjuNaMvHrlBwGbQjqJxhVIOZzZqeTlUF8O8XcOgZ7hMR1M68FqFp9T2gJa7drDNngLP8VItV0jZsShb9mczN3t9h7bDgYWzVKzS0LzA0")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Optimizing Website Performance</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">May 10, 2024</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">
                                        A guide to optimizing website performance, including techniques for speed, efficiency, and scalability.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7B2GKljPxc416CzXurUPTaMVvsVEJ6FwZwiliyGpY3A1nRB6M6mEL3Q_Z8TrYV7XrbwlzHMmvjToxQkQyt4pXb22C4vOiR37WjpAobTG4KpJS31Cnw6O0tMFD9UR2uwEs1wzwklRf7DUfl8SL7WKaOMnDR7XGzZN2sO3oarxpwR0mOubIu4fCrwmg33lNA_vCkd65zHdldS0c1QHmgGruDcc70FYoTGFgNztq_85CbKpGZ2OOGCF53Y4av-mCTbnBdU_sx3ZcJt8")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Web Application Security Essentials</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">April 5, 2024</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">
                                        An overview of essential security measures for web applications, focusing on protecting user data and preventing attacks.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBokdgFWsZdkmc9cNKbD88wG0TmxMJ1QKMyofpKRtSjWiKBoDsOzwtfuJaD3hUIROyQbd96441GOO5KDZcEJUjz0oE48P4EBv7erSl_NNIzt-H0iMtV2rPRperqtmIktDGLuSqnTHzs46KvNrI8QC-itj_IgTLqPCBOehk1H99oufKMbGI30h8uOVTHGwyuvlW2sZVwfvZtG_5JnbRFNmrJSXPTGQE5J7levG22J0n_8frQcTxDmt1cxTXuYqbMtpwJhzfekRsPAgI")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Debugging Web Applications</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">February 28, 2024</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">
                                        A comprehensive guide to debugging web applications, with tips and tricks for identifying and fixing issues.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBGPXNXF-EuMVItVhWonLG5ydh-EHoVnYIi-ilEWqs1sKWguLaZRf41j2XtvIBVy86LN2wP4Pmxoh3im7S_7kyhKPBZKLr8HJwps1jLiN7YZZ1QLubB2Y8mwXneNxmPg9l5jEq_YlhsYDWyklf_2TvR0qRrM0dEMmGA_FL22cqTTnY5S1xtXg-OEmnUoELmSNPaO7SwB6VKZdnex-r9du4ZA-oGlQnuqzPYR7y6hE-VRgkExPDqbwtDD442Cu2QH2XioWoNNeutZ6k")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Writing Clean Code</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">January 18, 2024</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">An introduction to the principles of clean code and how to write maintainable and readable code.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApI0h8ABV_5ZsFohE00hlFzIlTUKi_MJWj__J4a1c0Z5so8BLY5QSDpHvASdm5KPL0jtZ0EXd3h-OEwo3RkyjvVJWDVpuSkw0U7vWeLIbzhFieo8XL0ULu9u46U7vBRT4kISefMQNrDHzBkXtWGcXzxrtWpQgg7uwfPxW7Su-NaAKE9j0Ho1bgWRfbdRfVJT8voIXhnZXPoFaSifbG3u-e9XWsVhNXj9wq5fm24-uQ2ixqJPWzL7YfMmmt5VqzkVKAVj7_vZLzEt8")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Web Accessibility Best Practices</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">December 5, 2023</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">
                                        A discussion on the importance of accessibility in web design and how to create inclusive websites.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 pb-3">
                                <div
                                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCblTHKfyIbP3SPzytTjoPyXcPe6gi-9TCtJWHNGg5clLVn72svUDi7iK6Q7jYOcq0SK6HoWDSUfmWGzyYNpd4KJSsKisHHo__foGEqyU89UEEePPXqgeOIOxL9YmEoJmBWGe98hx2AWFNHKMxFqoOXny6BF897deMRU4spRxhbdGRCVX2NwpbXj2OW1UOCihnuCFTpONU6uFJt-Q-lZeukrj-xSQQixss9f5bk9hF7V6EBbatIA4lowDeL2aTpWxMy_KTMrOp7PWs")' }}
                                ></div>
                                <div>
                                    <p className="text-white text-base font-medium leading-normal">Trends in Front-End Development</p>
                                    <p className="text-[#93adc8] text-sm font-bold leading-normal py-1">November 20, 2023</p>
                                    <p className="text-[#93adc8] text-sm font-normal leading-normal">
                                        Exploring the latest trends in front-end development, including frameworks, libraries, and design patterns.
                                    </p>
                                </div>
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
