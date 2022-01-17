import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Banner.css';

const APIKEY = "0c9c875310343a6ff21f04e4fa3ab53d";

function Banner({ setList }) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(`/trending/all/week?api_key=${APIKEY}&language=en-US`);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    const onClick = () => {
        setList(movie);
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className='banner'
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: 'top'
                }}
        >
            <div className='banner-content'>
                <h1 className='banner-title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner-buttons'>
                    <button className='banner-button'>Play</button>
                    <button className='banner-button' onClick={onClick}>My List</button>
                </div>

                <h1 className='banner-description'>
                    {truncate(movie?.overview, 220)}
                </h1>
            </div>
            <div className='banner-fade'></div>
        </header>
    )
}

export default Banner
