import { useState } from 'react'
// import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';
import UseAnimations from 'react-useanimations';
import github from 'react-useanimations/lib/github';
import linkedin from 'react-useanimations/lib/linkedin';

import '../css/Presentation.css'

export function Presentation() {
    const [hovered, setHovered] = useState(false);

    return (
        <section id='presentation' className='flex justify-center items-center gap-12 w-full mt-16'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex justify-center items-center gap-6 mb-8'>
                    <h1 className='welcome_text'>Hola! Soy Marco</h1>
                    <span className='text-5xl'>👋</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-6 max-w-2xl mb-4">
                    <h3 className='font-bold text-2xl'>Junior Full Stack Developer</h3>
                    <p className='text-md text-center text-wrap'>
                        Soy un <b>Desarrollador Web Full Stack</b> apasionado en crear webs innovadoras
                        y únicas. Enfocado en aplicaciones mantenibles, escalables y con gran 
                        experiencia de usuario.
                    </p>
                </div>
                <div>
                    <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}                        
                    >
                        <span className='w-2 h-2' />
                        Disponible
                    </button>
                </div>
                <div className='flex items-center gap-10'>
                    <a href='https://github.com/marcorgz1?tab=repositories' target='_blank' rel='noopener noreferrer' className="social_button">
                        <UseAnimations animation={github} size={32} strokeColor='white' />
                        <span>Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/' target='_blank' rel='noopener noreferrer' className="social_button">
                        <UseAnimations animation={linkedin} size={32} strokeColor='white' />
                        <span>Linkedin</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
