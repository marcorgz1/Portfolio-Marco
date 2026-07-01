import '../css/Projects.css'
import { ToolsIcon } from './Icons'
import { ProjectCard } from './ProjectCard'
import firstProjectImage from '/projects/first_project.png'
import secondProjectImage from '/projects/second_project.png'

import { useScrollFade } from '../hooks/useScrollFade.js';

const PROJECTS = [
    {
        title: 'App Verificación Cuadros Istel',
        description: 'Aplicación para administrar los cuadros de luz de una empresa en base a los clientes y a los requisitos de los mismos.',
        image: firstProjectImage,
        technologies: ['React', 'NodeJS', 'MySQL'],
        github: 'https://github.com/marcorgz1/App-Verificacion-Cuadros-Istel'
    },

    {
        title: 'Tenfe',
        description: 'Aplicación para realizar viajes en tren alrededor de España de una forma intuitiva y sencilla.',
        image: secondProjectImage,
        technologies: ['React', 'NodeJS', 'MySQL'],
        github: 'https://github.com/marcorgz1/Aplicacion-Gestion-Trenes-Tenfe',
        url: 'https://tenfe.onrender.com'
    }
]

export function Projects() {
    const { ref, isVisible } = useScrollFade();

    return (
        <section 
            id="projects" 
            ref={ref}
            className={`flex flex-col justify-center items-center gap-6 mb-32 transition-all duration-800 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <div className="flex justify-center items-center gap-4 py-20">
                <ToolsIcon />
                <h1 className='text-4xl font-bold'>Proyectos</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center max-w-md md:max-w-6xl gap-32 py-8'>
            {
                PROJECTS.map((project, index) => (
                    <div key={index}>
                    {
                        project.github && (

                            <ProjectCard 
                                title={project.title} 
                                description={project.description} 
                                image={project.image} 
                                technologies={project.technologies} 
                                github={project.github}
                                url={project.url}
                            />
                        ) 
                    }
                    </div>
                ))
            }
            </div>
        </section>
    )
}
