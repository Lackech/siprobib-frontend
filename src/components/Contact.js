import React from 'react';
import './styles/contact.scss';

const Contact = () => {
    return(
       
        <div className="wrapperContact">
            <div className="content">
                <h1>CONTÁCTENOS</h1>
                <p>  
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, sed. 
                    Quos iure voluptatibus earum consequuntur voluptate quisquam veritatis possimus 
                    illum aliquam ex, sequi temporibus explicabo quidem, quo maxime amet! Dolorum. 
                </p>
            </div>
            <br></br>
            <br></br>
            <div className="imgCnt">
            <a className="a1" href={"https://twitter.com/"}> <img className='img' src={'twitter.png'} alt="Twitter" ></img> </a>
            <a className="a2" href={"https://www.instagram.com/"}> <img className='img1' src={'instagram.png'} alt="Instagram" ></img> </a>
            <a className="a3" href={"https://www.google.co.cr/"}> <img className='img2' src={'gmail.png'} alt="Gmail" ></img> </a>
            </div> 

        </div>
       
    )
}

export default Contact;