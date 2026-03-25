import '../css/Studies.css'

export function StudyCard ({ title, year, description }) {
    return (
        <li className="group relative flex flex-col gap-4 rounded-2xl bg-neutral-700 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="absolute left-0 top-0 h-full w-1 bg-purple-500 rounded-l-2xl group-hover:bg-purple-400 transition-colors"></div>

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
        </li>
    )

}
