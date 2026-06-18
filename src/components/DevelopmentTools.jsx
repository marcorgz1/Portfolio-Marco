import { ToolsIcon } from '../components/Icons'
import { Code, Server, Database, Settings, GitBranchIcon } from 'lucide-react'

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
        title: 'Herramientas',
        icon: <Settings size={32} />,
        technologies: ['VS Code', 'pnpm', 'Postman', 'Figma', 'Linux']
    },
]

export function DevelopmentTools () {

    return (
        <section className="flex flex-col gap-12">
            <h1 className='flex justify-center items-center gap-6 text-4xl font-bold text-center'>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className='grid grid-cols-3 gap-16 py-8'>
            {
                DEVELOPMENT_TOOLS.map((development_tool, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col items-center gap-12 w-full border-purple-800/30 py-8 rounded-xl border-1 hover:border-[#cba6f7]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]'
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                        }}
                    >

                        {/* Agregar una capa de glow al pasar por encima de la card */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/5 to-fuchsia-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        
                        <div className='flex justify-center items-center gap-6 font-bold'>
                            <span>{development_tool.icon}</span>
                            <h3 className='text-2xl'>{development_tool.title}</h3>
                        </div>
                        {/* Technologies */}
                        {/* <div className='flex flex-wrap items-center gap-6 px-8'>
                        {
                            development_tool.technologies.map((technology, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-700/30">
                                        {technology}
                                </span>
                            ))
                        }
                        </div> */}

                        <div className="flex flex-wrap items-center gap-4">
                        {
                            development_tool.technologies.map((technology, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-purple-950/60 text-purple-200 rounded-full text-xs font-medium border border-purple-600/30 group-hover:border-purple-500/50 group-hover:text-purple-100 transition-all duration-200"
                                >
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
