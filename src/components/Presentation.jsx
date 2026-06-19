import { useState, useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import { MailIcon } from './Icons.jsx'
import cv from '../assets/cv_2.pdf';
import photo from '../assets/avatar2.png'
import StatusBadge from './StatusBadge';

export function Presentation() {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    
    // const titles = [
        
    //     "Frontend Developer",
    //     "Backend Developer"
    // ]

    // Efecto de máquina de escribir
    useEffect(() => {
        const title = "Junior Full Stack Developer";
        const typingSpeed = isDeleting ? 50 : 120;
        const pauseTime = isDeleting ? 500 : 2000;

        if (!isDeleting && displayedText === title) {
        const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        return () => clearTimeout(timeout);
        }

        if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        // setTitleIndex((prev) => (prev + 1) % titles.length);
        return;
        }

        const timeout = setTimeout(() => {
        setDisplayedText(prev => {
            if (isDeleting) {
            return title.substring(0, prev.length - 1);
            } else {
            return title.substring(0, prev.length + 1);
            }
        });
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting]);

    return (
        <section id='presentation' className='flex justify-between items-center w-full mt-32 scroll-mt-32'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-4 mb-8'>
                    <h2 className='text-4xl font-bold leading-relaxed'>Marco Rodriguez 👋</h2>
                    <h1 id='typewriter' className='text-purple-300 text-6xl font-bold'>{displayedText}</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-6 max-w-2xl mb-12">
                    <p className='text-md text-center text-wrap'>
                        Soy un <b>Desarrollador Web Full Stack</b> apasionado en crear webs innovadoras
                        y únicas. Enfocado en aplicaciones mantenibles, escalables y con gran 
                        experiencia de usuario.
                    </p>
                </div>
                <StatusBadge />
                <div className='flex items-center gap-16 py-16'>
                        <div className='bg-violet-300/80 py-2 px-4 rounded-lg cursor-pointer hover:bg-violet-300 hover:scale-105 hover:-translate-y-1.5 transition-all duration-300'>
                            <a 
                                href='#projects' 
                                className="text-black font-semibold"
                            >
                                <span>Ver proyectos</span>
                            </a>
                        </div>
                    <a 
                        href='#contact'
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-lg border border-white/5 hover:border-violet-300/80 hover:scale-105 cursor-pointer transition-all duration-300"
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                        }}>
                        <MailIcon />                        
                        <span>Contáctame</span>
                    </a>
                </div>
            </div>
            <div>
                <img src={photo} alt="photo portfolio" width={400} />
            </div>
        </section>
    )
}
