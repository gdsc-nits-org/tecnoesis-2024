import { useEffect } from "react";

interface GlitchProps {
    text: string;
}

const Glitch: React.FC<GlitchProps> = ({ text }) => {
    useEffect(() => {
        let count = 0;
        const element = document.querySelector<HTMLElement>('.glitch');
        
        if (!element) {
            console.error('Element with class "glitch" not found');
            return; // Exit if the element is not found
        }

        const intervalId = setInterval(() => {
            // Generate random values
            const skew = Math.random() * 20 - 10;
            const top1 = Math.random() * 100;
            const btm1 = Math.random() * 100;
            const top2 = Math.random() * 100;
            const btm2 = Math.random() * 100;

            // Set CSS properties
            element.style.setProperty('--skew', `${skew}deg`);
            element.style.setProperty('--t1', `${top1}%`);
            element.style.setProperty('--b1', `${btm1}%`);
            element.style.setProperty('--t2', `${top2}%`);
            element.style.setProperty('--b2', `${btm2}%`);
            element.style.setProperty('--scale', `1`);

            count++;

            if (count % 15 === 0) {
                const bigSkew = Math.random() * 180 - 90;
                element.style.setProperty('--skew', `${bigSkew}deg`);
            }

            if (count % 30 === 0) {
                const bigScale = 1 + Math.random() / 2;
                element.style.setProperty('--scale', `${bigScale}`);
            }
        }, 100);

        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);    

    return (
        <h1 className='font-rp1 text-4xl md:text-8xl text-white glitch'>{text}</h1>
    );
}

export default Glitch;
