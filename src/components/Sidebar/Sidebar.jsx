import React from 'react'
import "./Sidebar.scss"
import { Link, NavLink } from 'react-router-dom'
import Coloured from '../../assets/images/Coloured.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCableCar } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGithubAlt, faGithubSquare, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => {

    const linksicon = (iconname, link) => (
        <li>
            <a target='_blank' href={link}>
                <FontAwesomeIcon icon={iconname} color="#4d4d4e" />
            </a>
        </li>
    )

    const navlinks = (classname,to, iconname) => (
        <NavLink
            exact='true'
            activeclassname='active'
            className={classname}
            to={to}
        >
            <FontAwesomeIcon icon={iconname} color="#4d4d4e" />
        </NavLink>
    )

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Coloured} alt="" />
                <img className='sub-logo' src="#" alt="Kishan" />
            </Link>
            <nav>
                {navlinks('home-link','/', faHome)}
                {navlinks('about-link','/about',faUser)}
                {navlinks('project-link','/project', faCableCar)}
                {navlinks('contact-link','/contact', faUser)}
            </nav>
            <ul>
                {linksicon(faLinkedin, "https://www.linkedin.com/in/kishan-r-3015a9246/")}
                {linksicon(faGithub, "https://github.com/Kish-han")}
                {linksicon(faInstagram, "https://www.instagram.com/kish_han_/")}
            </ul>
        </div>
    )
}

export default Sidebar