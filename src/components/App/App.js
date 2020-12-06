import React from 'react';
import './App.css'
import { connect } from 'react-redux'

//Child components
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'
import LocationQuery from '../LocationQuery/LocationQuery';
import CondensedForecast from '../CondensedForecast/CondensedForecast';

function App() {
  //just using the expected 3 day forecast so I've created an arr to use to map through repeatable components
  let arr = [0, 1, 2]
  return (
    <div>
      <header className="App-header" style={{ textAlign: 'center' }}>
        <h1>Forecast App</h1>
        <h2>search for weather near you!</h2> 
      </header>
      <main id="App">
        {/* sourcing in search and Current day display */}
        <LocationQuery />
        <CurrentDisplay />
        <br />
        <div className="dividerH" />
        {/* repeated component mapped three times in a row for forecasted days at the bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {arr.map((x) => {
            return <CondensedForecast key={x} index={x} />
          })}
        </div>
      </main>
    </div>
  );
}


export default connect()(App);