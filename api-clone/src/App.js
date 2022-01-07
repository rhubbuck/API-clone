import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';

const APIKEY = "0c9c875310343a6ff21f04e4fa3ab53d";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={`/discover/tv?api_key=${APIKEY}&with_networks=213`} isLargeRow/>
      <Row title="Trending Now" fetchUrl={`/trending/all/week?api_key=${APIKEY}&language=en-US`}/>
      <Row title="Top Rated" fetchUrl={`/movie/top_rated?api_key=${APIKEY}&language=en-US`}/>
      <Row title="Action" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=28`}/>
      <Row title="Comedy" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=35`}/>
      <Row title="Horror" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=27`}/>
      <Row title="Romance" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=10749`}/>
      <Row title="Documentaries" fetchUrl={`/discover/movie?api_key=${APIKEY}&with_genres=99`}/>
    </div>
  );
}

export default App;
