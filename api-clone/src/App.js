import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Modal from './Modal';

const APIKEY = "0c9c875310343a6ff21f04e4fa3ab53d";

function App() {

  let [modalMovie, setModalMovie] = useState();
  let [home, setHome] = useState(true);
  let [tv, setTv] = useState(false);
  let [movies, setMovies] = useState(false);

  useEffect(() => {
    console.log(modalMovie);
  }, [modalMovie]);

  const handleClick = () => {
    setModalMovie(null);
  }

  const homeClick = () => {
    setHome(true);
    setTv(false);
    setMovies(false);
  }

  const tvClick = () => {
    setTv(true);
    setMovies(false);
    setHome(false);
  }

  const moviesClick = () => {
    setMovies(true);
    setTv(false);
    setHome(false);
  }

  return (
    <div className="App">
      <Nav homeClick={homeClick} tvClick={tvClick} moviesClick={moviesClick}/>
      { home && <Banner /> }
      {modalMovie && <Modal movie={modalMovie} handleClick={handleClick}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="NETFLIX ORIGINALS" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_networks=213`} isLargeRow/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Trending Now" fetchUrl={`/trending/all/week?api_key=${APIKEY}&language=en-US`}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Top Rated" fetchUrl={`/movie/top_rated?api_key=${APIKEY}&language=en-US`}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Action" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=28`}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Comedy" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=35`}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Horror" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=27`}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Romance" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=10749`}/>}
      {home && <Row changeMovie={modal => setModalMovie(modal)} title="Documentaries" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=99`}/>}

      { tv && <h2 className='tv-header'>TV Shows</h2> }
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Animation" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=16`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Comedy" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=35`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Crime" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=80`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Documentary" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=99`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Kids" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=10762`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Reality" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=10764`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="Sci-fi" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=10765`}/>}
      {tv && <Row changeMovie={modal => setModalMovie(modal)} title="War" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_genres=10768`}/>}

      {movies && <h2 className='movies-header'>Movies</h2>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Action" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=28`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Animation" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=16`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Comedy" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=35`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Documentaries" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=99`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Horror" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=27`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Mystery" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=9648`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Romance" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=10749`}/>}
      {movies && <Row changeMovie={modal => setModalMovie(modal)} title="Thriller" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=53`}/>}
    </div>
  );
}

export default App;
