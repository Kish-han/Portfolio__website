import React, { useState } from 'react'
import "./Sidebar.scss"
import { Link, NavLink } from 'react-router-dom'
// import Coloured from '../../assets/images/Coloured.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCableCar, faX, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {

    const [mob, setMob] = useState(false)

    const linksicon = (iconname, link) => (
        <li>
            <a target='_blank' href={link}>
                <FontAwesomeIcon icon={iconname} color="#4d4d4e" />
            </a>
        </li>
    )

    const navlinks = (classname, to, iconname) => (
        <NavLink
            exact='true'
            activeclassname='active'
            className={classname}
            to={to}
        >
            <FontAwesomeIcon icon={iconname} color="#4d4d4e">
            </FontAwesomeIcon>
        </NavLink>
    )
    return (
        <div className='nav-bar'>
            <div className="mobheader">
                <Link className='logo' to='/'>
                    {/* <img src={Coloured} alt="" /> */}
                    <img className='sub-logo' src="#" alt="Kishan" />
                </Link>

                {
                    mob ? (
                        <FontAwesomeIcon className='navcontroler' icon={faX} onClick={() => setMob(false)} />
                        ) :
                        (
                            <FontAwesomeIcon className='navcontroler' icon={faBars} onClick={() => setMob(true) } />
                        )
                }
            </div>
            <div className="mobnav"
                style={{
                    transform: `${mob ? 'translateX(0%)' : 'translateX(100%)'}`,
                }}
            >
                <nav>
                    {navlinks('home-link', '/', faHome)}
                    {navlinks('about-link', '/about', faUser)}
                    {navlinks('project-link', '/project', faCableCar)}
                    {navlinks('contact-link', '/contact', faEnvelope)}
                </nav>
                <ul>
                    {linksicon(faLinkedin, "https://www.linkedin.com/in/kishan-r-3015a9246/")}
                    {linksicon(faGithub, "https://github.com/Kish-han")}
                    {linksicon(faInstagram, "https://www.instagram.com/kish_han_/")}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar