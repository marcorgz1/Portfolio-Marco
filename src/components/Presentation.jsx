import { useState, useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import { github, linkedin, download } from './animatedIcons';
import my_CV from '../assets/My-CV-Harvard.pdf';
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
        <section id='presentation' className='flex justify-center items-center gap-12 w-full mt-32 sm:mt-24 md:mt-32 px-4 sm:px-8'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-4 mb-8'>
                    <h2 className='text-3xl sm:text-4xl font-bold leading-relaxed'>Marco Rodriguez 👋</h2>
                    <h1 id='typewriter' className='text-purple-300 text-4xl sm:text-6xl font-bold'>{displayedText}</h1>
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
                    <a href={my_CV} download={'CV.pdf'} target='_blank' rel='noopener noreferrer' 
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-full border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 hover:scale-110 cursor-pointer transition-all duration-300"
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                        }}
                    >
                        <UseAnimations animation={download} size={32} strokeColor='white' />
                        <span>Descargar CV</span>
                    </a>
                    <a href='https://github.com/marcorgz1?tab=repositories' target='_blank' rel='noopener noreferrer' 
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-full border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 hover:scale-110 cursor-pointer transition-all duration-300"
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                        }}>
                        <UseAnimations animation={github} size={32} strokeColor='white' />
                        <span>Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/' target='_blank' rel='noopener noreferrer' 
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-full border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 hover:scale-110 cursor-pointer transition-all duration-300"
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                        }}>
                        <UseAnimations animation={linkedin} size={32} strokeColor='white' />
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
