import React from 'react'
import './About.css'
import { BsAwardFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'
import { VscProject } from 'react-icons/vsc'
import bupe from '../../assets/Bupe2.JPG'

const About = () => {
    return (
        <section id='about'>
            <h5>Who I am</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me image">
                        <img src={bupe} alt="Bupe Chindongo" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BsAwardFill className='about__card_icon' />
                            <h5>Achievements</h5>
                            <small>74.8% degree average</small>
                        </article>

                        <article className='about__card'>
                            <FaGraduationCap className='about__card_icon' />
                            <h5>Education</h5>
                            <small>Bcom Informatics, University of Pretoria</small>
                        </article>

                        <article className='about__card'>
                            <VscProject className='about__card_icon' />
                            <h5>Projects</h5>
                            <small>3 Large-scale applications completed for clients</small>
                        </article>
                    </div>

                    <p>Bupe is a hardworking, driven self starter who has been
                        interested in technology from a young age. He has a reputation
                        for being detail oriented and solving problems in an efficient manner
                        according to client requirements. He is interested in all things data,
                        and software.
                        In his free time he enjoys creating art, playing guitar, and reading
                        books related to broaden his horizons on the world at large.</p>

                    <a href='#contact' className='btn btn-primary'>Contact Me</a>
                </div>
            </div>
        </section>
    )
}

export default About