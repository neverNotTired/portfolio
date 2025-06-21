// ScrollToHashHandler.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroller = () => {
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

    return null; // This component doesn't render anything
};

export default Scroller;
