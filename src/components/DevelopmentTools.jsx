import { ToolsIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon, MongodbIcon, MysqlIcon, GitIcon, GithubToolIcon, NodejsIcon, ExpressIcon } from '../components/Icons'

const DEVELOPMENT_TOOLS = [
    {
        title: 'Frontend',
        technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        technologies: ['Node.js', 'Express']
    },
    {
        title: 'Bases de datos',
        technologies: ['MySQL', 'MongoDB']
    },
    {
        title: 'Otras herramientas',
        technologies: ['Git', 'Github', 'Postman', 'Figma', 'Linux']
    },
]

export function DevelopmentTools () {

    return (
        <section className="flex flex-col gap-12">
            <h1 className='flex justify-center items-center gap-6 text-4xl font-bold text-center'>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className='grid grid-cols-2 gap-16'>
            {
                DEVELOPMENT_TOOLS.map((development_tool, index) => (
                    <div 
                        key={index} 
                        className='flex flex-col items-center gap-8 border-purple-800/30 px-12 py-8 rounded-xl border-1 hover:border-[#cba6f7]/40 transition-all duration-300 hover:transform hover:scale-105'
                        style={{
                            background: 'rgba(30, 30, 46, 0.6)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                        }}
                    >
                        <h3 className='text-2xl font-semibold'>{development_tool.title}</h3>
                        <div className='flex items-center gap-4'>
                        {
                            development_tool.technologies.map((technology, index) => (
                                    <span                                    
                                        key={index}
                                        className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-700/30">
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
