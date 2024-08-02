import React from 'react'
import './NavBar.css'
import { AiFillHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { SlNotebook } from 'react-icons/sl'
import { AiFillMessage } from 'react-icons/ai'
import { useState } from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'

function NavBar() {
    const [activeNav, setActiveNav] = useState('#header')

    return (
        <nav>
            <a href="#header" onClick={() => setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiFillHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineLibraryBooks /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SlNotebook /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage /></a>


        </nav>
    )
}

export default NavBar