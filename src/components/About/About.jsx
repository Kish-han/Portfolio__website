import React from 'react'
import "./About.scss"
import { motion } from 'framer-motion'
import { FaHtml5, FaReact, FaCss3Alt, FaJsSquare } from 'react-icons/fa'
import {TbBrandGit} from 'react-icons/tb'
import { SiTailwindcss } from 'react-icons/si'

const About = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full overflow-hidden"
    >
      <div className="wrapper w-full h-full flex flex-col md:flex-row">
        <div className="left  w-full h-1/2 md:w-1/2 md:h-full px-5 flex flex-col items-center md:items-start justify-center md:px-[150px]">
          <h1 className="title font-headingtext text-4xl md:text-6xl text-primarycolor">
            ABOUT ME
          </h1>
          <div className="description text-sm mt-4 md:mt-16 space-y-4 md:space-y-8 text-white font-Raleway">
            <p className='md:leading-[1.8]'>I'm very ambitious front-end developer looking for a role in established IT company with the opportunity to work with the latest techonologies on challenging and diverse projects.</p>
            <p className='md:leading-[1.8]'>I'm quitely confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
            <p className='md:leading-[1.8]'>
              If I need to define myself in one sentence that would be a car enthusiast, travel obsessed, tech fanatic.
            </p>
          </div>
        </div>
        <div className="right relative w-full h-1/2 md:w-1/2 md:h-full pt-9 md:pt-[20%]">
          <div className="cubespinner bg-green-500 ">
            <div className="face1">
              <FaHtml5 className="icon text-[#f06529]" />
              {/* <FontAwesomeIcon icon={faHtml5} color="#f06529" /> */}
            </div>
            <div className="face2 text-[#5ed4f4]">
              <FaReact />
              {/* <FontAwesomeIcon icon={faReact} color="#5ed4f4" /> */}
            </div>
            <div className="face3 text-[#28a4d9]">
              <FaCss3Alt />
              {/* <FontAwesomeIcon icon={faCss3} color="#28a4d9 " /> */}
            </div>
            <div className="face4 text-[#efd814]">
              <FaJsSquare />
              {/* <FontAwesomeIcon icon={faGit} color="#ec4d28" /> */}
            </div>
            <div className="face5 text-[#ec4d28] ">
              <TbBrandGit />
              {/* <FontAwesomeIcon icon={faBootstrap} color="#efd81d" /> */}
            </div>
            <div className="face6 text-[#38bdf8]">
              <SiTailwindcss />
              {/* <FontAwesomeIcon icon={faJsSquare} color="#efd81d" /> */}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default About