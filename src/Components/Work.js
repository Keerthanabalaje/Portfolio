import React from 'react';
import "../Styles/Work.css";
import AU from "../Images/Work/AU.png";
import Infy from "../Images/Work/Infy.png";

function Work() {
    return (
        <div className='Work' id='Work'>
            <div className='Work__Col1'>
                <h1 className='Edu__Title'>Education</h1>
                <h2 className='Edu__Clg'>
                    <img className='Edu__Logo' src={AU} alt='' /> College of Engineering, Guindy, Anna University
                </h2>
                <p>B.E. Materials Science & Engineering</p>
                <p className='Year'>AUG 2017 - JUNE 2021</p>
                <p>Completed with First Class - 81.3%</p>
            </div>
            <div className='Work__Col2'>
                <h1 className='Work__Title'>Experience</h1>
                
                <div className='Exp__div'>
                    <h2 className='Work__Clg'>
                        <img className='Work__Logo' src={Infy} alt='' /> Infosys Limited
                    </h2>
                    <p className='Work__Role'>Senior Systems Engineer</p>
                    <p className='Year2'>Oct 2021 - Present</p>
                </div>
            </div>
        </div>
    );
}

export default Work;