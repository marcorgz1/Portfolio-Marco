import 'leaflet/dist/leaflet.css'
import UseAnimations from 'react-useanimations'
import { github, linkedin } from './animatedIcons.js';
import { ContactIcon, MailIcon, MapIcon } from './Icons'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { useScrollFade } from '../hooks/useScrollFade.js';

export function Contact() {
    const { ref, isVisible } = useScrollFade();

    const madridPosition = [40.4168, -3.7038] // Madrid coordinates

    const SOCIAL_LINKS = [
        {
            id: 1,
            icon: <UseAnimations animation={linkedin} size={32} strokeColor='white' />,
            name: 'Marco Rodriguez-Rey',
            link: 'https://www.linkedin.com/in/marco-rodriguez-rey-b082361b9/'
        },
        {
            id: 2,
            icon: <UseAnimations animation={github} size={32} strokeColor='white' />,
            name: 'marcorgz1',
            link: 'https://github.com/marcorgz1'
        },
        {
            id: 3,
            icon: <MailIcon />,
            name: 'marco.rodriguezrey@gmail.com',
            link: 'mailto:marco.rodriguezrey@gmail.com'
        }
    ]

    return (
        <section 
            id="contact"
            ref={ref}
            className={`flex flex-col justify-center items-center gap-16 border-b-2 pb-24 border-b-white/15 transition-all duration-800 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
            <h2 className='flex gap-6 items-center text-4xl font-bold'>
                <ContactIcon />
                Contáctame
            </h2>
            <p className="text-center text-sm md:text-md px-6 md:px-0 font-semibold">
                ¿Estás buscando a alguien con quién colaborar en algún proyecto? 
                No dudes en ponerte en contacto conmigo.
            </p>
            <div className="flex flex-col justify-center items-center gap-12">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-4 mb-12">
                {
                    SOCIAL_LINKS.map((social_link) => {
                        return (
                            <a key={social_link.id} href={social_link.link} target="_blank" className='flex items-center gap-2 hover:text-purple-300 hover:cursor-pointer transition-colors'>
                                {social_link.icon}
                                <span>{social_link.name}</span>
                            </a>
                        )
                    })
                }
                </div>
                <div className="map_container">
                    <MapContainer
                        center={madridPosition}
                        zoom={5}
                        style={{ height: "300px", width: "400px", borderRadius: "8px" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={madridPosition} icon={MapIcon}>
                            <Popup>
                                Madrid, España
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </section>
    )
}
