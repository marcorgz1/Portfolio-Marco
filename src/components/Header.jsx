import { Navbar } from './Navbar'

export function Header () {
    return (
        <main className='flex justify-between items-center bg-gray-950/75 fixed top-0 left-0 right-0 z-50'>
            <div></div>
            <Navbar />
            <div></div>       
        </main>
    )
}
