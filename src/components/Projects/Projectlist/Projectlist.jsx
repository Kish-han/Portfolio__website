import React from 'react'

const Projectlist = () => {

    // const [isClick, setIsClick] = useState(true)

    return (
        <div className=' w-[90%] mx-auto space-y-8'>
            <div className="wrapper relative cursor-pointer px-6 flex md:h-[400px] bg-[rgba(255,255,255,0.25)] shadow-card backdrop-blur-[5.9px] rounded-[10px] flex-col md:flex-row py-9" >
                <div className="leftwrapper md:w-[50%]">
                    <div className="div relative h-full px-4 rounded-xl">
                        <img src="https://www.researchgate.net/publication/338901579/figure/fig7/AS:852769179181058@1580327424263/Netflix-home-page-after-scrolling-down.png" alt=""
                            className='h-full w-full object-contain rounded-xl' />
                    </div>
                </div>
                <div className="rightwrapper text-white w-full md:w-[50%] flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col items-center justify-center px-[50px] md:px-[140px]">
                        <div className="h1  text-[40px]">Netflix</div>
                        <div className="description bg-red-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae facere quasi! Minima, optio animi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. At praesentium officia rerum tempore nam repudiandae quas, aspernatur, explicabo neque tenetur blanditiis impedit, ea iste vero?
                        </div>
                    </div>
                </div>
            </div >
            <div className="wrapper relative px-6 flex md:h-[400px] bg-[rgba(255,255,255,0.25)] shadow-card backdrop-blur-[5.9px] rounded-[10px] flex-col md:flex-row py-9" >
                <div className="leftwrapper md:w-[50%]   ">
                    <div className="div relative h-full px-4 rounded-xl">
                        <img src="https://www.researchgate.net/publication/338901579/figure/fig7/AS:852769179181058@1580327424263/Netflix-home-page-after-scrolling-down.png" alt=""
                            className='h-full w-full object-contain rounded-xl' />
                    </div>
                </div>
                <div className="rightwrapper text-white w-full md:w-[50%] flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col items-center justify-center px-[50px] md:px-[140px]">
                        <div className="h1  text-[40px]">Netflix</div>
                        <div className="description bg-red-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vitae facere quasi! Minima, optio animi?
                        </div>
                    </div>
                </div>
            </div >
            {/* <div className="wrapper relative px-6 flex flex-col md:flex-row">
                <div className="leftwrapper  md:h-full ">
                    <img src="https://www.researchgate.net/publication/338901579/figure/fig7/AS:852769179181058@1580327424263/Netflix-home-page-after-scrolling-down.png" alt=""
                        className='h-full w-full' />
                </div>
                <div className="rightwrapper ">
                    <div className="h1">Netflix</div>
                </div>
            </div> */}

        </div>
    )
}

export default Projectlist


    // <div className = "pro1 flex" >
    //                 <div className="left w-1/2">
    //                     <div className="imageholder">
    //                         <img src="https://www.researchgate.net/publication/338901579/figure/fig7/AS:852769179181058@1580327424263/Netflix-home-page-after-scrolling-down.png" alt="" />
    //                     </div>
    //                     <div className="description">
    //                         <h1>description goes here</h1>
    //                     </div>
    //                 </div>
    //                 <div className="right w-1/2 ">
    //                     <h1 className='mt-20'>Texh stack used</h1>
    //                 </div>
    //             </div >



