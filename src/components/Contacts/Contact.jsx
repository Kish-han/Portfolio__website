import React, { useEffect, useRef, useState } from 'react'
import Animatedletters from '../Animated/Animatedletters'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import './Contact.scss'
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lt3i725', 'template_agfz6ll', refForm.current, 'te5OTmCDa_eNPatGp')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    };

    const contactArray = ['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']

    const linksicon = (iconname, link) => (
        <li>
            <a target='_blank' href={link}>
                <FontAwesomeIcon icon={iconname} color="#4d4d4e" />
            </a>
        </li>
    )

    return (
        <div>
            <>
                <div className="container contact-page">
                    <div className="text-zone">
                        <h1>
                            <Animatedletters letterClass={letterClass}
                                strArray={contactArray}
                                idx={15}
                            />
                        </h1>
                        <p>
                            I am interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact me using below from either.
                        </p>
                        <div className="contact-form">
                            <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li className="half">
                                        <input type="text" name='to_name' placeholder='Name' required />
                                    </li>
                                    <li className="half">
                                        <input type="email" name='from_name' placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input placeholder='Subject' type='text' name='subject' required />
                                    </li>
                                    <li>
                                        <textarea placeholder='Message' name="message" required></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button' value={'SEND'} />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    <div id="map" className="map-wrap">
                        <MapContainer center={[12.984245, 77.514202]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[12.984245, 77.514202]}>
                                <Popup>
                                    Kishan lives here, come over for a coffee
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                    <div className="contactme">
                        {linksicon(faLinkedin, "https://www.linkedin.com/in/kishan-r-3015a9246/")}
                        {linksicon(faGithub, "https://github.com/Kish-han")}
                        {linksicon(faInstagram, "https://www.instagram.com/kish_han_/")}
                    </div>
                </div>
                {/* <div className="info-map">
                    Kishan R
                    <br />
                    India
                    <br />
                    Banglore Karnataka
                    <br />
                    <span>Kishanprasad0901@gmail.com</span>
                </div> */}
                <Loader type='pacman' />
            </>
        </div>
    )
}

export default Contact