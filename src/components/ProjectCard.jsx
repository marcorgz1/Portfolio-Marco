import '../css/ProjectCard.css'

export function ProjectCard({ title, description, image, technologies, github, url }) {
    return (
        <section 
            className="flex flex-col justify-center items-center gap-8 max-w-2xl border-purple-800/30 px-12 py-8 rounded-xl border-1 hover:border-[#cba6f7]/40 transition-all duration-300 hover:transform hover:scale-105"
            style={{
                background: 'rgba(30, 30, 46, 0.6)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
        >
            <h2 className='text-2xl font-bold'>{title}</h2>
            <p className='text-lg'>{description}</p>
            <img src={image} alt="Project image" />
            <div className='flex items-center gap-4 py-6'>
            {
                technologies.map((technology, index) => (
                    <div key={index}>
                        <span className="px-3 py-1 bg-purple-900/40 text-purple-300 rounded-full text-sm border border-purple-700/30">{technology}</span>
                    </div>
                ))
            }
            </div>
            <div className='flex items-center gap-12 py-4'>
                {
                    github ? (
                        <button
                            className="flex items-center gap-4 font-semibold py-2 px-4 rounded-lg border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 transition-colors"
                            style={{
                                background: 'rgba(30, 30, 46, 0.6)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                            }}
                        >
                            <a href={github} target='_blank'>GitHub</a>
                        </button>
                    ) : (
                        <span disabled>❌ Código no disponible</span>
                    )
                }
                
                {
                    url ? (
                        <button
                            className="flex items-center gap-4 font-semibold py-2 px-4 rounded-lg border border-white/5 hover:border-purple-400/60 hover:bg-neutral-800 transition-colors"
                            style={{
                                background: 'rgba(30, 30, 46, 0.6)',
                                backdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                            }}
                        >
                            <a href={url} target='_blank'>Demo</a>
                        </button>
                    ) : (
                        <span disabled>❌ Demo no disponible</span>
                    )
                }
            </div>
        </section>
    );
}
