import { useState } from 'react';
import { ToolsIcon, HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon, MongodbIcon, MysqlIcon, GitIcon, GithubToolIcon, NodejsIcon, ExpressIcon } from '../components/Icons'

const DEVELOPMENT_TOOLS = [
    {
        title: 'Frontend',
        technologies: [HtmlIcon, CssIcon, JavascriptIcon, ReactIcon, TailwindcssIcon]
    },
    {
        title: 'Backend',
        technologies: [NodejsIcon, ExpressIcon]
    },
    {
        title: 'Bases de datos',
        technologies: [MongodbIcon, MysqlIcon]
    },
    {
        title: 'Otras herramientas',
        technologies: [GitIcon, GithubToolIcon]
    },
]

export function DevelopmentTools () {
    // Estado para guardar la ventana en la que nos encontramos
    // 0 = Frontend (se muestra por defecto)
    // 1 = Backend
    // 2 = Bases de datos
    // 3 = Otras
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="flex flex-col gap-12">
            <h1 className='flex justify-center items-center gap-6 text-4xl font-bold text-center'>
                <ToolsIcon />
                Herramientas
            </h1>
            <div className="development_tools__technologies">
            {
                // Mostrar tecnologías de la categoría correspondiente
                // DEVELOPMENT_TOOLS[0] -> tecnologías frontend
                // DEVELOPMENT_TOOLS[1] -> tecnologías backend
                // ...
                DEVELOPMENT_TOOLS[activeTab].technologies.map((Technology, index) => (
                    <span className='development_tool__technology' key={index}>
                        <Technology />
                    </span>
                ))
            }
            </div>
        </section>
    )
}
