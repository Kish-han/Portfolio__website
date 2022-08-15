import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Animatedletters from '../Animated/Animatedletters'
import './About.scss'
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

    }, [])

    const aboutArray = ['A', 'B', 'O', 'U', 'T', ' ', 'M', 'E']
    return (
        <>
            <div className='container about-page' >
                <div className="text-zone">
                    <h1 className='text-animate'>
                        <Animatedletters letterClass={letterClass}
                            strArray={aboutArray}
                            idx={13}
                        />
                    </h1>
                    <p>
                        I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest techonologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quitely confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                    </p>
                    <p>
                        If I need to define myself in one sentence that would be a car enthusiast, travel obsessed, tech fanatic.
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9 " />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faGit} color="#ec4d28" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About