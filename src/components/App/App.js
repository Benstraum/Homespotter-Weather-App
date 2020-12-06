import React, { useEffect } from 'react';
import './App.css'
import { connect } from 'react-redux'

//Child components
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'
import LocationQuery from '../LocationQuery/LocationQuery';
import CondensedForecast from '../CondensedForecast/CondensedForecast';

function App(props) {
  useEffect(() => {

  }, [])
  let arr = [0,1,2]
  return (
    <div>
      <header className="App-header" style={{textAlign:'center'}}>
        <h1>Benjamins's Weather App</h1>
        <p>
          You can search using: city name, US zip codes, UK postcodes, canada postal codes, metar code, digital airport code, or IP address
        </p>
        
      </header>
      <main id="App">
      <LocationQuery/>
        <CurrentDisplay />
        <div className="dividerH"/>
        <div style={{display:'flex', justifyContent:'space-around'}}>
        {arr.map((x)=>{
          return <CondensedForecast index={x} />
        })}
        </div>
      </main>
    </div>
  );
}


export default connect()(App);