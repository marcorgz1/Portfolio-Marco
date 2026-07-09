import { useState } from 'react';
import { MenuIcon, CloseIcon } from './Icons.jsx';

export function Navbar () {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const NAV_SECTIONS = [
        { id: 1, title: 'Inicio', url: '#presentation' },
        { id: 2, title: 'Estudios', url: '#studies' },
        { id: 3, title: 'Experiencia', url: '#experience' },
        { id: 5, title: 'Proyectos', url: '#projects' },
        { id: 6, title: 'Contacto', url: '#contact' }
    ]

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    
    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    return (
        <nav>
            <div className='flex justify-end items-center px-16 py-2'>
                <button onClick={toggleMenu} className='text-white md:hidden'>
                {/* Si el menú de navegación está abierto, mostrar icono de cerrado
                Si está cerrado, mostrar icono del menú
                */}
                {
                    menuIsOpen ? <CloseIcon /> : <MenuIcon />
                }
                </button>
            </div>
            <ul className={`${menuIsOpen ? 'flex': 'hidden'} md:flex justify-center items-center py-4 gap-6 sm:gap-12 font-semibold`}>
            {
                NAV_SECTIONS.map((section) => (
                    <li 
                        key={section.id}
                    >
                        <a 
                            href={section.url}
                            // Cerrar menú de navegación al navegar a alguna sección
                            onClick={closeMenu}
                            className="text-[12px] sm:text-md transition-colors hover:text-violet-300 hover:cursor-pointer"
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
