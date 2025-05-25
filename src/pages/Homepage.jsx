import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Homepage() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                const yOffset = -65;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className="relative flex min-h-screen flex-col bg-[#111a22] dark group/design-root _overflow-x-hidden font-['Space Grotesk','Noto Sans',sans-serif']">
            <Header />
            <div className="layout-container flex h-full grow flex-col overflow-x-hidden">
                <div className="px-80 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <Hero />
                        <About />
                        <Skills />
                        <Projects />
                        <Contact />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
