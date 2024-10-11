import React from 'react';
import "../Styles/Project.css";
import Job_Listing from "../Images/Projects/Job_Listing.png";
import Sales_Overview from "../Images/Projects/Sales_Overview.png";
import Social_Links from "../Images/Projects/Social_Links.png";
import { AiFillGithub } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

function Project() {
    return (
        <div className='Project' id='Project'>
            <h1 className='Project__Title'>Personal Projects</h1>
            <div className='Project__Content'>
                <div className='Project1'>
                    <img className='Project__Img' src={Job_Listing} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Job_Listing_ReactJS</h2>
                        <p className='Project__Caption'>Job listings website with filtering</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>HTML</div>
                            <div className='Techs'>CSS</div>
                            <div className='Techs'>JS</div>
                            <div className='Techs'>React JS</div>
                            <div className='Techs'>REACT-ICONS</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://joblistingreactjs.netlify.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Keerthanabalaje/JobListing_ReactJs") }}>
                                <AiFillGithub className='git' /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={Social_Links} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Responsive-Social-Links-Profile</h2>
                        <p className='Project__Caption'>A Profile Links</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>HTML5</div>
                            <div className='Techs'>CSS3</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://sociallnksprofile.netlify.app/") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Keerthanabalaje/Responsive-Social-Links-Profile") }}>
                                <AiFillGithub className='git' /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Project1'>
                    <img className='Project__Img' src={Sales_Overview} alt='' />
                    <span className='blue-overlay'></span>
                    <div className='Project__Info'>
                        <h2 className='Project__Info__Title'>Power BI</h2>
                        <p className='Project__Caption'>Data Analyst, sales report Power BI Project</p>
                        <div className='Project__Techs'>
                            <div className='Techs'>My SQL</div>
                            <div className='Techs'>Power BI</div>
                        </div>
                        <div className='Project__Buttons'>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Keerthanabalaje/SalesOverview_PowerBi/blob/main/SalesOverview.pdf") }}>
                                <FaArrowRight className='git' /> VISIT
                            </button>
                            <button className='Project__Btn'
                                onClick={() => { window.location.assign("https://github.com/Keerthanabalaje/SalesOverview_PowerBi/tree/main") }}>
                                <AiFillGithub className='git' /> GitHub
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Project;