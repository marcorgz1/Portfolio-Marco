import { ToolsIcon } from '../components/Icons'
import { Code, Server, Database, Settings, GitBranchIcon } from 'lucide-react'

import { useScrollFade } from '../hooks/useScrollFade.js';

const DEVELOPMENT_TOOLS = [
    {
        title: 'Frontend',
        icon: <Code size={32} />,
        technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        icon: <Server size={32} />,
        technologies: ['Node.js', 'Express']
    },
    {
        title: 'Bases de datos',
        icon: <Database size={32} />,
        technologies: ['MySQL', 'MongoDB']
    },
    {
        title: 'Control de versiones',
        icon: <GitBranchIcon size={32} />,
        technologies: ['Git', 'Github']
    },
    {
        title: 'Otras herramientas',
        icon: <Settings size={32} />,
        technologies: ['VS Code', 'pnpm', 'Postman', 'Figma', 'Linux']
    },
]

export function DevelopmentTools () {
    const { ref, isVisible } = useScrollFade();

    return (
        <section
            ref={ref}
            className={`flex flex-col justify-center items-center gap-6 mb-32 transition-all duration-800 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <h1 className='flex justify-center items-center gap-6 text-4xl font-bold text-center mb-20'>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className='grid grid-cols-3 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 max-w-6xl lg:max-w-6xl md:max-w-2xl sm:max-w-lg mx-auto gap-24'>
            {
                DEVELOPMENT_TOOLS.map((development_tool, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col items-center gap-12 border-purple-800/30 py-8 rounded-xl border hover:border-violet-300/80 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]'
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                        }}
                    >

                        {/* Agregar una capa de glow al pasar por encima de la card */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        
                        <div className='flex justify-center items-center gap-8 font-bold'>
                            <span>{development_tool.icon}</span>
                            <h3 className='text-2xl'>{development_tool.title}</h3>
                        </div>
                        {/* Technologies */}
                        <div className='flex flex-wrap justify-center items-center gap-6 px-8'>
                        {
                            development_tool.technologies.map((technology, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-700/30">
                                        {technology}
                                </span>
                            ))
                        }
                        </div>
                    </div>
                ))
            }
            </div>
        </section>
    )
}
