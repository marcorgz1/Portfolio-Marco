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
        <section id='presentation' className='flex justify-center items-center gap-12 mt-16'>
            <img src={avatar2} alt="Avatar" />
            <div className='flex flex-col gap-6 mt-4'>
                <h1 className='welcome_text'>
                    Hola, soy Marco
                </h1>
                <div className="flex flex-col gap-6">
                    <h3 className='font-bold text-xl'>Junior Frontend Developer</h3>
                    <p className='text-sm text-balance'>
                        Desarrollador Web Full Stack apasionado en crear webs innovadoras
                        y únicas haciendo uso de diversas tecnologías. Siempre con ganas de aprender
                        nuevas tecnologías. Siempre intentando desarrollar aplicaciones web mantenibles y escalables,
                        haciendo un gran esfuerzo en el desarrollo y la experiencia del usuario en las mismas.
                    </p>
                </div>
                <div className='gradient_button'>
                    <button
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}                        
                    >
                        <span className='status_dot' />
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
