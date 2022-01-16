import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const baseURL = 'https://image.tmdb.org/t/p/original';


function Row({ title, fetchUrl, isLargeRow, changeMovie }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        };
        fetchData();
    }, [fetchUrl]);


    const handleClick = (movie) => {
        changeMovie(movie);
    };

    return (
        <div className='container'>
            <div className='row'>
                <h2>{title}</h2>
                <div className='row-posters'>
                    {movies.map(movie => (
                        <img 
                            key={movie.id}
                            onClick={() => handleClick(movie)} 
                            className={`row-poster ${isLargeRow && "row-poster-large"}`} 
                            src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}/>
                            
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Row
