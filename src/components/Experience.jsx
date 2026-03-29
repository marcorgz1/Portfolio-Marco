import { ExperienceCard } from "./ExperienceCard"
import { ExperienceIcon } from "./Icons"

export function Experience () {
    const EXPERIENCES = [
        {
            title: 'Prácticas como técnico de reparación de dispositivos Apple',
            company: 'Rosellimac',
            year: '2022',
            description: 'Reparación y mantenimiento de dispositivos Apple (iphones, macbooks, Imacs etc.)'
        },
        {
            title: 'Desarrollador Web Frontend',
            company: 'Autorepuestos Valdemoro',
            year: '2023',
            description: 'Realización de aplicaciones web sencillas y funcionales a diferentes clientes.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            title: 'Prácticas como desarrollador web',
            company: 'Istel',
            year: '2024',
            description: 'Desarrollo de una aplicación web full stack para la gestión de los cuadros de luz de la empresa haciendo uso de tecnologías modernas tanto en front-end como back-end.',
            technologies: ['React', 'Node.js', 'MySQL']
        }
    ]

    return (
        <>
            <div id="experience" className="flex flex-col justify-center items-center py-24">
                <div className="flex justify-center items-center gap-6 text-4xl font-bold mb-20">
                    <span className="text-[#cba6f7]">
                        <ExperienceIcon />
                    </span>
                    <h2>
                        Experiencia
                    </h2>                
                </div>
                <div className="flex flex-col justify-center items-center gap-12">
                {
                    EXPERIENCES.map((experience, index) => (
                        <ExperienceCard 
                            key={index} 
                            title={experience.title} 
                            company={experience.company} 
                            year={experience.year}
                            description={experience.description} 
                            technologies={experience?.technologies}
                        />
                    ))
                }
                </div>
            </div>
        </>
    )
}
