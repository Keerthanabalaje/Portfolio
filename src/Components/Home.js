import React from 'react';
import "../Styles/Home.css";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import logo from '../Images/logo.svg';

function Home() {
    return (
        <div className='Home' id='Home'>
            <div className='Home__Intro'>
                <img src={logo} className="App-logo" alt="logo" />
                <div className='Home__Text'>
                    <p>Welcome to my corner of the digital realm!</p>
                    <h1 className='Home__Name'>Hi, I'm Keerthana.</h1>
                    <h1 className='Home__Role'>Front-End Web Developer.</h1>
                </div>
                <div className='Home__Icons'>
                    <BsGithub className='Home__Icon' onClick={() => { window.location.assign("https://github.com/Keerthanabalaje") }} />
                    <ImLinkedin className='Home__Icon' onClick={() => { window.location.assign("https://www.linkedin.com/in/keerthana-vijayabalaje-6bb7a4258/") }} />
                </div>
                <button className='Resume'
                    onClick={() => { window.location.assign("https://www.canva.com/design/DAGLkBWxjvU/p4QyAYYK3uNikVWSP68HmQ/view?utm_content=DAGLkBWxjvU&utm_campaign=designshare&utm_medium=link&utm_source=editor") }}>
                    View Resume
                </button>
            </div>
        </div>
    );
}

export default Home;
