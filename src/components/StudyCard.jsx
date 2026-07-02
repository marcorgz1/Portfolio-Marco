import Timeline from './Timeline.jsx';

export function StudyCard ({ title, year, description }) {
    return (
        <div className='relative group'>
            <Timeline />
            <div className="flex flex-col justify-center gap-8 ml-16 mb-10 max-w-md md:max-w-6xl rounded-2xl py-4 px-6 border border-white/5 transition-all duration-300 group-hover:border-violet-300/80 group-hover:-translate-y-0.5 group-hover:scale-105"
                style={{
                        background: 'rgba(30, 30, 46, 0.6)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}>

                {/* Año */}
                <span className="text-sm text-neutral-300/60">{year}</span>

                {/* Título */}
                <h2 className='text-lg md:text-xl font-semibold text-white'>
                    {title}
                </h2>

                {/* Descripción */}
                <p className='text-neutral-300 text-sm md:text-md leading-relaxed'>
                    {description}
                </p>
            </div>
        </div>
    )
}
