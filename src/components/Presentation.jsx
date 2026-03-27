import { useState } from 'react';
import UseAnimations from 'react-useanimations';
import { github, linkedin, download } from './animatedIcons';
import my_CV from '../assets/My-CV-Harvard.pdf';
import StatusBadge from './StatusBadge'

export function Presentation() {
    const [hovered, setHovered] = useState(false);

    return (
        <section id='presentation' className='flex justify-center items-center gap-12 w-full mt-32'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className='flex flex-col justify-center items-center gap-6 mb-8'>
                    <h2 className='text-4xl font-bold'>Marco Rodriguez 👋</h2>
                        <h1 className='text-purple-300 font-bold text-6xl'>Junior Full Stack Developer</h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-6 max-w-2xl mb-4">
                    <p className='text-md text-center text-wrap'>
                        Soy un <b>Desarrollador Web Full Stack</b> apasionado en crear webs innovadoras
                        y únicas. Enfocado en aplicaciones mantenibles, escalables y con gran 
                        experiencia de usuario.
                    </p>
                </div>
                <StatusBadge />
                <div className='flex items-center gap-16 mt-6'>
                    <a href={my_CV} download={'CV.pdf'} target='_blank' rel='noopener noreferrer' 
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-full border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 cursor-pointer transition-colors"
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
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-full border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 cursor-pointer transition-colors"
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                        }}>
                        <UseAnimations animation={github} size={32} strokeColor='white' />
                        <span>Github</span>
                    </a>
                    <a href='https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/' target='_blank' rel='noopener noreferrer' 
                        className="flex items-center gap-4 font-semibold py-2 px-4 rounded-full border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 transition-colors"
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
