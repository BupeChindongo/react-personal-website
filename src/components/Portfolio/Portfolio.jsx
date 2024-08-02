import React, { useState } from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faChartLine, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const projects = [
        {
            title: "Spaceship Titanic Competition Solution",
            icon: faRocket,
            github: "https://github.com/BupeChindongo/Store-Sales-Time-Series/blob/main/STS.ipynb",
            description: "This project is a solution to the Kaggle Spaceship Titanic competition. It uses machine learning techniques, particularly a neural network (unnecessary, but fun) to predict which passengers were transported to an alternate dimension. It takes a statistical approach to data science"
        },
        {
            title: "Store Time Series Sales Forecasting",
            icon: faChartLine,
            github: "https://github.com/BupeChindongo/Store-Sales-Time-Series/blob/main/STS.ipynb",
            description: "This project is a work in progress, and I ended up transferring to a kaggle notebook due to hardware limitations. In its complete form, this project uses time series forecasting to predict the sales of a retail store, using a gradient descent model. Likely XGBoost."
        },
        {
            title: "Delivery App Frontend",
            icon: faMobileAlt,
            github: "https://github.com/BupeChindongo/u21566641_HW02",
            description: "This was a project I did during my third year of university. This is an ionic frontend without a backend which is meant to showcase basic delivery app capabilities, similar to that of Uber Eats."
        },
    ];

    const openModal = (project) => {
        setCurrentProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <section id='portfolio'>
            <h5>Some Of My Public Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {projects.map((project, index) => (
                    <article className="portfolio__item" key={index}>
                        <div className="portfolio__item-icon">
                            <FontAwesomeIcon icon={project.icon} size="3x" />
                        </div>
                        <h3>{project.title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={project.github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                            <button className='btn btn-primary' onClick={() => openModal(project)}>Description</button>
                        </div>
                    </article>
                ))}
            </div>

            {modalOpen && currentProject && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{currentProject.title}</h2>
                        <p>{currentProject.description}</p>
                        <button className="btn btn-primary" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Portfolio