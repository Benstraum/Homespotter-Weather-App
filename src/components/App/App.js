import React, { useEffect } from 'react';
import './App.css'
import { connect } from 'react-redux'

//Child components
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'
import LocationQuery from '../LocationQuery/LocationQuery';

function App(props) {
  useEffect(() => {

  }, [])
  return (
    <div>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Potentially recreate Google weather display</h1>
        <p>
          You can search using: city name, US zip codes, UK postcodes, canada postal codes, metar code, digital airport code, or IP address
        </p>
        <LocationQuery/>
      </header>
      <main className="App">
        <CurrentDisplay />
      </main>
    </div>
  );
}


export default connect()(App);