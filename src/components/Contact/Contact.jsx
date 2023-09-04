import React, { useRef } from 'react'
import './Contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from '@emailjs/browser';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ye2ulgo', 'template_l8ehb86', form.current, 'C9TV_bp4P5rybmX-D')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };


    return (
        <section id='contact'>
            <h5>Get In touch</h5>
            <h2>Contact</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>bchindongo@icloud.com</h5>
                        <a href='mailto:bchindongo@icloud.com' target='_blank' rel="noreferrer">Send a message</a>
                    </article>


                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="10" placeholder='Message' required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact