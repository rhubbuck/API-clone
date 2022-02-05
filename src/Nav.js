import React, { useEffect, useState } from 'react';
import './Nav.css';
import netflix from '../src/Images/Netflix-logo.svg';
import smiley from '../src/Images/smiley.jpg';


function Nav( {homeClick, tvClick, moviesClick } ) {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img
            className='nav-logo' 
            src={netflix} 
            alt='Netflix Logo'/>
            <p className='home' onClick={homeClick}>Home</p>
            <p className='tv' onClick={tvClick}>TV Shows</p>
            <p className='movies' onClick={moviesClick}>Movies</p>
            <img 
            className='nav-avatar' 
            src={smiley}
            alt='Avatar'
            />
        </div>
    )
}

export default Nav
