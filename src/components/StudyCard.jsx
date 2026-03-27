import '../css/Studies.css'

export function StudyCard ({ title, year, description }) {
    return (
        <div className='relative group'>
            {/* Time line */}
            {/* Connector line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#cba6f7] via-[#cba6f7]/30 to-transparent" />
    
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-6 w-[11px] h-[11px] rounded-full bg-[#cba6f7] shadow-[0_0_12px_2px_rgba(203,166,247,0.5)] group-hover:shadow-[0_0_18px_4px_rgba(203,166,247,0.7)] transition-shadow duration-300" />

            <div className="flex flex-col gap-6 ml-16 mb-10 rounded-2xl p-6 border border-white/5 transition-all duration-300 group-hover:border-[#cba6f7]/20 group-hover:-translate-y-0.5 group-hover:scale-105"
                style={{
                        background: 'rgba(30, 30, 46, 0.6)',
                        backdropFilter: 'blur(12px)',
                        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}>

                {/* Año */}
                <span className="text-sm text-neutral-300">{year}</span>

                {/* Título */}
                <h2 className='text-lg md:text-xl font-semibold text-white'>
                    {title}
                </h2>

                {/* Descripción */}
                <p className='text-neutral-300 leading-relaxed'>
                    {description}
                </p>
            </div>
        </div>
    )

}
