import React, { useEffect, useState } from 'react';
import './Nav.css';



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
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
            alt='Netflix Logo'/>
            <p className='home' onClick={homeClick}>Home</p>
            <p className='tv' onClick={tvClick}>TV Shows</p>
            <p className='movies' onClick={moviesClick}>Movies</p>
            <p className='my-list'>My List</p>
            <img 
            className='nav-avatar' 
            src='/netflix-smiley.png'
            alt='Avatar'
            />
        </div>
    )
}

export default Nav
