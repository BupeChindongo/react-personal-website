import React from 'react'
import './experience.css'


const Experience = () => {
    return (
        <section id='experience'>
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience-container'>
                <div className='experience-frontend'>
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">

                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">

                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__details">

                            <h4>Javascript</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">

                            <h4>Next.Js</h4>
                            <small className='text-light'>Beginner</small>
                        </article>
                        <article className="experience__details">

                            <h4>React.Js</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__details">

                            <h4>Angular</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">

                            <h4>Express.Js</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        <article className="experience__details">

                            <h4>SQL</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">

                            <h4>Solidity</h4>
                            <small className='text-light'>Beginner</small>
                        </article>
                        <article className="experience__details">

                            <h4>.Net Core</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article className="experience__details">

                            <h4>Python</h4>
                            <small className='text-light'>Intermediate</small>
                        </article>
                        {/* <article className="experience__details">

                            <h4>R</h4>
                            <small className='text-light'>Intermediate</small>
                        </article> */}
                        <article className="experience__details">

                            <h4>Java</h4>
                            <small className='text-light'>Experienced</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience