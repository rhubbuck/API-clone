import React from 'react';
import './Modal.css'

function Modal({movie, handleClick}) {


    var str1 = movie.vote_average;
    let str2 = str1.toString();
    let str3 = str2.slice(0, 1) + str2.slice(2);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    

    return (
        <div className='background' onClick={handleClick}>
            <div className='modal-container'>
                <header className='modal-banner'
                        style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    // backgroundPosition: 'top'
                }}>
                    <img 
                        onClick={handleClick}
                        className='close' 
                        src='/icons8-xbox-x-50.png'
                        alt='close'
            />
                    <p className='title'>{movie?.name || movie?.original_title}</p>
                </header>
                <div className='modal-content'>
                    <div className='rating-and-date'>
                        <p className='rating'>{str3}% Match</p>
                        <p className='date'>{ movie.first_air_date ?   movie.first_air_date.substring(0, 4) : movie.release_date.substring(0, 4)}</p>    
                    </div>
                    <div>
                        <p className='overview'>{truncate(movie.overview, 380)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal

