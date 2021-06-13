import './App.css';
import Banner from "./Banner";
import NavigationBar from "./NavigationBar"
import React from 'react';
import Row from './Row';
import request from './request';
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Banner/>
     {/* <h2>Adil Khan's Netflix Clone</h2> */}
     <Row title ="TRENDING NOW" fetchUrl={request.fetchTrending}
      isLargeRow={true}
      />
     <Row title ="Netflix Originals"fetchUrl={request.fetchNetflixOriginals} />
     <Row title ="Top Rated"fetchUrl={request.fetchTopRated}/>
     <Row title ="Action" fetchUrl={request.fetchAction}/>
     <Row title ="Comedy"fetchUrl={request.fetchComedy} />
     <Row title ="Documentary"fetchUrl={request.fetchDocumentaries} />
     <Row title ="Romance"fetchUrl={request.fetchRomance} />
    </div>
  );
}

export default App;
