import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex flex-col w-screen h-screen md:flex-row'>
            <div className="">
                <Sidebar />
            </div>
            <div className="layout w-full h-full">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout