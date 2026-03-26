import { useState, useEffect } from 'react';

export function Navbar() {
    const [active, setActive] = useState('presentation');

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

    useEffect(() => {
        const observers = NAV_SECTIONS.map(({ url }) => {
        const id = url.replace('#', '')
        const el = document.getElementById(id)
        if (!el) return null

        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setActive(id) },
            { rootMargin: '-40% 0px -55% 0px' }
        )
        obs.observe(el)
        return obs
        }).filter(Boolean)

        return () => observers.forEach(obs => obs.disconnect())
    }, [])

    const scrollToSection = (e, url) => {
        e.preventDefault();
        const element = document.querySelector(url);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav className='flex items-center p-4'>
            <ul className='flex items-center gap-24 font-semibold'>
            {
                NAV_SECTIONS.map((section) => {
                    const id = section.url.replace('#', '');
                    const isActive = active === id;

                    return (
                        <li 
                            key={section.id} 
                            onClick={(e) => scrollToSection(e, section.url)}
                            className={`relative block px-4 py-1.5 text-sm rounded-md transition-colors
                                ${isActive 
                                    ? 'text-white after:absolute after:bottom-0 after:left-4 after:right-4 after:h-0.5 after:bg-violet-400 after:rounded-full'
                                    : 'text-white/50 hover:text-white hover:bg-white/[0.06] hover:cursor-pointer'
                        }`}>
                            {section.title}
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
}
