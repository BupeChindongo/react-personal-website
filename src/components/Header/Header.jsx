import React from 'react'
import './Header.css'
import CTA from './CTA'
import Socials from './Socials'
import forest from '../../assets/forest.jpg'

function Header() {
    return (
        <header id='header'>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h2>Bupe Chindongo</h2>

                <CTA />
                <Socials />
                <div className='header__image'>
                    <img src={forest} alt="forest" />
                </div>

                {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
            </div>
        </header>
    )
}

export default Header