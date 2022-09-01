import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col w-screen h-screen md:flex-row'>
            <div className="sticky top-0 left-0 z-[100]">
                <Sidebar />
            </div>
            <div className="layout w-full h-full z-[80]">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout