import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Socials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com' target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href='https://github.com/U21566641' target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            {/* <a href='https://linkedin.com' target="_blank"></a> */}
        </div>
    )
}

export default Socials 