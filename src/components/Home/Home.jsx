import React, { useEffect } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
// import Coloured from '../../assets/images/Coloured.png'
import { useState } from 'react'
import Animatedletters from '../Animated/Animatedletters'
import Loader from 'react-loaders'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['K', 'i', 's', 'h', 'a', 'n']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);

    }, [])



    return (
        <>
            <div className='container home-page'>
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        {/* <br />I'm <span>K</span> */}
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`} style={{
                            marginRight: "14px",
                        }}>'m </span>
                        <Animatedletters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <Animatedletters letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Frontend Developer</h2>
                    <Link to='/contact' className='flat-button'>Contact me</Link>
                </div>
                {/* <Logo /> */}
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home