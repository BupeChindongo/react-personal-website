import React from 'react'
import cv from '../../assets/Bupe_Chindongo_CV.pdf'

function CTA() {
    return (
        <div className="CTA">
            <a href={cv} className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA