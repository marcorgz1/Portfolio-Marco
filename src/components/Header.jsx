import { Navbar } from './Navbar.jsx'

export function Header () {
    return (
        <header className='bg-gray-950/75 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 px-4'>            
            <Navbar />                  
        </header>
    )
}
