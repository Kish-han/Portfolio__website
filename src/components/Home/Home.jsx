import React from 'react'
import Coloured from '../../images/Coloured.png'


const Home = () => {
    return (
        <section className='overflow-hidden'>
            <div className=" relative flex wrapper h-[92vh] w-full md:w-[95.5vw] md:h-[100vh] ">
                <div className="leftwrap text-white h-full flex flex-col items-center justify-center md:w-[50%] px-4 ">
                    <div className="text-6xl z-[100] space-y-3 ">
                        <h1>Hi,</h1>
                        <h1>I'm Kishan</h1>
                        <h1>Web developer</h1>
                        <p className='text-xl mt-5'>Frontend developer</p>
                    </div>
                    <div className="">
                    </div>
                </div>
                <div className="rightwrap absolute top-[20%] left-9 z-[1] md:relative md:top-[10%]  ">
                    <div className="imgholder opacity-60 rotate-[25deg] md:opacity-100 ">
                        <img src={Coloured} alt="" className='w-[400px] md:w-[600px] ' />
                    </div>
                </div>
            </div>
        </section>
    )
}
// absolute top-[20%] left-9 z-[1]
export default Home