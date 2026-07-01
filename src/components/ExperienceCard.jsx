import '../css/Experience.css';
import { CalendarIcon } from './Icons.jsx';
import Timeline from './Timeline.jsx';

export function ExperienceCard ({ title, company, year, description, technologies }) {
    return (
        // Perrmitir a las cards ocupar todo el ancho disponible omitiendo el ancho establecido por el posicionamiento flex contenedor padre
        <div className="relative group">
            {/* Timeline */}
            <Timeline />

            {/* Card */}
            <div 
                className="flex flex-col gap-2 max-w-md md:max-w-2xl ml-16 mb-10 rounded-2xl px-8 py-6 border border-white/5 transition-all duration-300 group-hover:border-violet-300/80 group-hover:scale-105"
                style={{
                    background: 'rgba(30, 30, 46, 0.6)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                }}
            >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-[#cdd6f4] text-md md:text-lg font-semibold leading-snug">
                        {title}
                    </h3>

                    {/* Year badge */}
                    <span className="flex items-center gap-1.5 text-xs text-[#cba6f7] bg-[#cba6f7]/10 border border-[#cba6f7]/20 px-2.5 py-1 rounded-full whitespace-nowrap" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                        <CalendarIcon className="w-3 h-3" />
                        {year}
                    </span>
                </div>

                {/* Company */}
                <p className="text-sm font-medium text-[#b4befe] mb-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {company}
                </p>

                {/* Description */}
                <p className="text-sm text-[#a6adc8] line-clamp-3 mb-4" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                    {description}
                </p>

                {/* Tech pills */}
                {technologies && (
                    <ul className="flex flex-wrap gap-2">
                        {technologies.map((tech, i) => (
                            <li
                                key={i}
                                className="text-xs px-3 py-1 rounded-full text-[#cba6f7] border border-[#cba6f7]/25 bg-[#cba6f7]/5 hover:bg-[#cba6f7]/15 hover:border-[#cba6f7]/50 transition-colors duration-200 cursor-default"
                                style={{ fontFamily: '"DM Sans", sans-serif' }}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
