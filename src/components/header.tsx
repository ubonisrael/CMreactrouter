import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "../context/themeContext"
import { themeInterface } from "../@types/app"
import { MdDarkMode, MdSunny } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

interface handleToggle {
  handleToggle: () => void
}

const Header = ({handleToggle}: handleToggle) => {
    const {theme, handleTheme} = useContext(ThemeContext) as themeInterface

  return (
    <header className='dark:text-white w-screen p-4 flex items-center justify-between bg-white dark:bg-slate-900 shadow-sm md:shadow-md'>
      <button onClick={handleToggle} className='sm:hidden'><GiHamburgerMenu /></button>
        <h1 className='uppercase dark:text-white font-bold md:text-2xl lg:text-4xl' aria-label='Contact Manager'>contact manager</h1>
        <button className='md:text-2xl lg:text-4xl' onClick={handleTheme} aria-label='Toggle theme' role='switch theme'>{theme === 'dark' ? <MdDarkMode /> : <MdSunny />}</button>
    </header>
  )
}

export default Header