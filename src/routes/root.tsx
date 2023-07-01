import {useState} from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/header"
import SideBar from "../components/sidebar"

export default function Root() {
    const [toggleMenu, setToggle] = useState(true)

    const handleToggleMenu = () => setToggle(prev => !prev)

    return (
        <div className="w-screen min-h-screen bg-blue-50 dark:bg-black">
            <Header handleToggle={handleToggleMenu}/>
            <main className='w-screen sm:flex sm:gap-4 md:gap-8 p-4 sm:px-8 md:px-16 md:py-10'>
            <SideBar toggled={toggleMenu} handleToggle={handleToggleMenu}/>
            <section className='min-h-screen px-2 py-2 transition-all ease-linear duration-300 sm:grow sm:h-auto sm:min-h-screen sm:p-4 rounded-md sm:rounded-xl bg-slate-200 dark:bg-slate-900'>
                <Outlet />
            </section>
            </main>
        </div>
    )
    }