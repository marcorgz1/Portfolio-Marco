import { ToolsIcon } from './Icons.jsx';
import { ProjectCard } from './ProjectCard.jsx';

import firstProjectImage from '/projects/first_project.png';
import secondProjectImage from '/projects/second_project.png';
import thirdProjectImage from '/projects/third_project.png';

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
    },
    {
        title: 'Madera Encantada',
        description: 'Landing page sencilla para realizar publicidad sobre casas prefabricadas y casas construidas con troncos de madera.',
        image: thirdProjectImage,
        technologies: ['Astro', 'Tailwind CSS'],
        github: 'https://github.com/marcorgz1/pagina-web-madera-encantada',
        url: 'https://www.madera-encantada.com'
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
            <div className='grid grid-cols-2 md:grid-cols-1 gap-32 justify-center items-center max-w-6xl md:max-w-xl py-8'>
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
