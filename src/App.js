import './App.css';
import React from 'react';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
    <h1>Hello Pranay </h1>
    <Row title="NETLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
