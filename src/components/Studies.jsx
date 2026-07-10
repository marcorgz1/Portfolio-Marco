import { SchoolIcon } from './Icons.jsx';
import { StudyCard } from './StudyCard.jsx';

import { useScrollFade } from '../hooks/useScrollFade.js';

export function Studies () {
    const { ref, isVisible } = useScrollFade();

    const STUDIES = [
        {
            title: 'Máster en Desarrollo Web Full Stack',
            year: 2025,
            description: 'Repaso de tecnologías básicas en el desarrollo de aplicaciones web como HTML, CSS y Javascript y comienzo de aprendizaje de tecnologías tanto de frontend como de backend como son React y MongoDB.'
        },
        {
            title: 'Grado Superior de Desarrollo de Aplicaciones Web',
            year: '2022 - 2024',
            description: 'Aprendizaje básico de lenguajes de programación bastante utilizados en la actualidad como Python y Java, además de los HTML, CSS y Javascript vitales para comenzar en el desarrollo de aplicaciones web.'
        },
        {
            title: 'Grado Medio Sistemas Microinformáticos y Redes',
            year: '2020 - 2022',
            description: 'Aprendizaje de conocimientos básicos sobre diferentes áreas de la informática, como el montaje y mantenimiento de equipos, la configuración de redes, la instalación y administración de sistemas operativos, así como tareas de soporte técnico y resolución de incidencias.'
        }
    ]
    return (
        <section 
            id='studies'
            ref={ref}
            className={`flex flex-col justify-center items-center gap-6 mb-32 transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
            <div className='flex justify-center items-center gap-6 text-4xl font-bold mb-12'>
                <span className='text-[#cba6f7]'>
                    <SchoolIcon />
                </span>
                <h1>Estudios</h1>
            </div>
            <ul className='flex flex-col justify-center items-center gap-16 lg:max-w-4xl md:max-w-2xl'>
            {
                STUDIES.map((study, index) => (
                    <StudyCard key={index} title={study.title} year={study.year} description={study.description} />
                ))
            }
            </ul>
        </section>
    )
}
