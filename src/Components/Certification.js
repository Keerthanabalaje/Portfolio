import React from 'react';
import "../Styles/Certification.css";


function Certification() {
    return (
        <div className='Project' id='Certification'>
            <h1 className='Project__Title'>Certification</h1>
            <div className='Project__Cards__Div'>
                <div className='Project__Card'>
                    <p className='Card__Content'><b>Front End Web Developer</b></p>
                    <p className='Card__Content'>Certificate by <b>Infosys Lex</b> </p>
                    <p className='Card__Content'>The Certification focussing on Web Technology Landscape, HTML5, CSS3, JavaScript, and Responsive Web Design concepts.</p>
                </div>
                <div className='Project__Card'>
                    <p className='Card__Content'><b>React Professional</b></p>
                    <p className='Card__Content'>Certificate by <b>Infosys Lex</b> </p>
                    <p className='Card__Content'>Validated my skills in developing the user interface of an application using ReactJS. This certification evaluated my knowledge of React basics, React DOM, React Routing, and server communication concepts</p>
                </div>
                <div className='Project__Card'>
                    <p className='Card__Content'><b>Database and SQL Professional</b></p>
                    <p className='Card__Content'>Certificate by <b>Infosys Lex</b> </p>
                    <p className='Card__Content'>This Certificate focussing on writing data retrieval queries <i>select</i> and generate required output using SQL - how to join tables data using join queries and help in data analysis - writing sub queries for data processing and data retrieval</p>
                </div>
            </div>                
        </div>
    );
}

export default Certification;