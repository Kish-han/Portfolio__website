import React, { useState } from 'react'
import "./Sidebar.scss"
import Coloured from '../../images/Coloured.png'
import { MdHome, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaUserTie, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { ImBooks } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'
const Sidebar = () => {

    const [mobnav, setMobnav] = useState(false)

    return (
        <nav className='sticky top-0 left-0 bg-[#1e293b] shadow-xl'>
            <div className="navcontainer relative flex md:flex-col justify-between items-center px-5 w-[100vw] h-[8vh] md:w-[4.5vw] md:h-[100vh] md:py-3">
                <div className="logocontainer w-[50px] py-2">
                    <img src={Coloured} alt="" className="logo w-full h-full object-contain" />
                </div>
                <div className={`navlinks absolute -bottom-10 flex justify-evenly text-xl transition-all ease-in-out duration-700 ${mobnav?"right-0 left-0" :"right-[750px] -left-[350px]"}  md:relative md:flex-col md:bottom-[15px] md:right-0 md:left-0 md:space-y-8 text-[#ababab] bg-slate-800 py-3`}>
                    <MdHome className='text-2xl cursor-pointer  opacity-40 hover:opacity-100' />
                    <FaUserTie className='cursor-pointer  opacity-40 hover:opacity-100' />
                    <ImBooks className='cursor-pointer  opacity-40 hover:opacity-100' />
                    <FaEnvelope className='cursor-pointer  opacity-40 hover:opacity-100'/>
                </div>
                <div className="contactlinks hidden md:inline-flex flex-col space-y-5 text-[#ababab]">
                    <Link to='/'>
                        <FaGithub className='cursor-pointer opacity-60 hover:opacity-100' />
                    </Link>
                    <Link to='/'>
                        <FaLinkedin className='cursor-pointer opacity-60 hover:opacity-100' />
                    </Link>
                    <Link to='/'>
                        <FaInstagram className='cursor-pointer opacity-60 hover:opacity-100' />
                    </Link>
                </div>
                <div className="hamburger md:hidden cursor-pointer ">
                    {mobnav ? <MdClose onClick={() => setMobnav(false)} className='text-3xl text-primarycolor transition-transform hover:scale-110 ease-in-out duration-300' />
                        :
                        <GiHamburgerMenu onClick={() => setMobnav(true)} className='text-2xl text-primarycolor transition-transform hover:scale-110 ease-in-out duration-300' />}
                </div>
            </div>
        </nav>
    )
}

export default Sidebar