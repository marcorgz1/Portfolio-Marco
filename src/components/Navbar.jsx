export function Navbar() {
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

    const scrollToSection = (e, url) => {
        e.preventDefault();
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className='flex items-center'>
            <ul className='flex items-center gap-24 font-semibold'>
                {
                    NAV_SECTIONS.map((section) => (
                        <li key={section.id}>
                            <a 
                                href={section.url}
                                onClick={(e) => scrollToSection(e, section.url)}
                                className="decoration-0 hover:text-purple-300 transition-colors"
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
