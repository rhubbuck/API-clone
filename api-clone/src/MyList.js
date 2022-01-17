import React, {useState, useEffect, useMemo } from 'react';
import './MyList.css';

const baseURL = 'https://image.tmdb.org/t/p/original';

const MyList = ({myListArray, myList}) => {

    const [movies, setMovies] = useState();

    let movieArray = [];

    useEffect(() => {
        async function fetchData() {
            // setMovies(myList);
            // console.log(movies);
            // movieArray.push(movies);
            // console.log(movieArray)
        };
        fetchData();
    }, [myList, movies, movieArray]);


    return (
        <div className='container'>
            <div className='row'>
                <h2>My List</h2>
                <div className='row-posters'>
                    {movieArray.map(movie => (
                        <img 
                            key={movie.id}
                            // onClick={() => handleClick(movie)} 
                            className={"row-poster"} 
                            src={`${baseURL}${movie.poster_path}`}
                            alt={movie.name}/>
                            
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MyList
