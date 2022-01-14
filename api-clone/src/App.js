import React, {useState, useEffect} from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import Modal from './Modal';

const APIKEY = "0c9c875310343a6ff21f04e4fa3ab53d";

function App() {

  let [modalMovie, setModalMovie] = useState();

  useEffect(() => {
    console.log(modalMovie);
  }, [modalMovie]);

  const handleClick = () => {
    setModalMovie(null);
  }

  return (
    <div className="App">
      <Nav />
      <Banner />
      {modalMovie && <Modal movie={modalMovie} handleClick={handleClick}/>}
      <Row changeMovie={modal => setModalMovie(modal)} title="NETFLIX ORIGINALS" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_networks=213`} isLargeRow/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Trending Now" fetchUrl={`/trending/all/week?api_key=${APIKEY}&language=en-US`}/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Top Rated" fetchUrl={`/movie/top_rated?api_key=${APIKEY}&language=en-US`}/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Action" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=28`}/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Comedy" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=35`}/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Horror" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=27`}/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Romance" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=10749`}/>
      <Row changeMovie={modal => setModalMovie(modal)} title="Documentaries" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=99`}/>
    </div>
  );
}

export default App;
