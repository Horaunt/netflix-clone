import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <h1>Hello Pranay</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow = {true} />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
