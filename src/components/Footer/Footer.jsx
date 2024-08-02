import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <h3>Bupe Chindongo Portfolio Website</h3>

            <ul className='permaLinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

            <div className="footer__socials">

            </div>
            <div className="footer__copyright">
                <p>&copy; Bupe Chindongo 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer