import React from 'react';
import "../Styles/Contact.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import Mail from './Mail';
import { IoMdMail, IoMdCall } from "react-icons/io";

function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <div className='Contact__Intro'>
                <div className='Contact__Text'>
                    <p>Reach out to me!</p>
                    <h1 className='Contact__Name'>Contact</h1>
                    <div className='Contact__Log'>
                        <Mail email="keerthushivaya@gmail.com" subject="Front-End Job - regarding">
                            <button className='Contact__Btn__Log'>
                                <IoMdMail className='Conact__Icon' /> keerthushivaya@gmail.com
                            </button>
                        </Mail>
                        <a href="tel:+919489266998">
                            <button className='Contact__Btn__Log'>
                                <IoMdCall className='Conact__Icon' /> +91 9489266998
                            </button>
                        </a>
                    </div>
                </div>
                <div className='Contact__Icons'>
                    <BsGithub className='Contact__Icon' onClick={() => { window.location.assign("https://github.com/Keerthanabalaje") }} />
                    <ImLinkedin target="_blank"className='Contact__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/keerthana-vijayabalaje-6bb7a4258/") }} />
                </div>
            </div>
        </div>
    );
}

export default Contact;