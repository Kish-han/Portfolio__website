import React from 'react'
import Coloured from '../../images/Coloured.png'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <motion.section
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            variants={{
                initial: {
                    opacity: 0,
                    clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',
                },
                animate: {
                    opacity: 1,
                    clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)',

                },
                exit: {
                    opacity: 0,
                    clipPath: 'polygon(45% 0, 45% 0, 45% 100%, 44% 100%)',
                }
            }}
            className='overflow-hidden h-[92vh] w-[100vw] md:w-[90vw] md:[100vh] '>
            <div className="wrapper bg-secondarycolor w-full h-full md:flex">
                <div className="leftwrap w-full h-full flex justify-center items-center md:w-[50%] md:h-full">
                    <div className="text-5xl md:text-7xl text-white z-50">
                        <h1 className='gap-y-2'>
                            <p>Hi,</p>
                            <p>I'm Kishan</p>
                            <p>web developer</p>
                            <p className='text-[15px] mt-4'>Frontend Developer</p>
                        </h1>
                        <button className="text-xl font-semibold border border-primarycolor text-primarycolor rounded-tl-lg rounded-br-lg px-4 py-2 mt-7 hover:bg-primarycolor hover:text-secondarycolor transition transform duration-200 hover:scale-105 active:scale-95">
                            Contact me
                        </button>
                    </div>
                </div>
                <div className="rightwrap absolute top-[20%] md:top-0 md:relative md:w-[50%] md:h-[100vh] md:flex md:justify-center md:items-center">
                    <div className=" w-[350px] md:w-[600px] opacity-50 md:opacity-100">
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                rotate: 360,
                                transition: { duration: 1.5, ease: "easeInOut" }
                            }}
                            src={Coloured} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
export default Home