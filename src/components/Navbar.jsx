export function Navbar () {
    const NAV_SECTIONS = [
        {
            id: 1,
            title: 'Inicio',
            url: '#presentation'
        },
        {
            id: 2,
            title: 'Estudios',
            url: '#studies'
        },
        {
            id: 3,
            title: 'Experiencia',
            url: '#experience'
        },
        {
            id: 5,
            title: 'Proyectos',
            url: '#projects'
        },
        {
            id: 6,
            title: 'Contacto',
            url: '#contact'
        }
    ]

    return (
        <nav>
            <ul className='flex justify-center items-center py-4 gap-8 font-semibold'>
            {
                NAV_SECTIONS.map((section) => (
                    <li 
                        key={section.id}
                    >
                        <a 
                            href={section.url}
                            className="transition-colors hover:text-violet-300 hover:cursor-pointer"
                        >
                            {section.title}
                        </a>
                    </li>
                ))
            }
            </ul>
        </nav>
    )
}
