import React, { useEffect } from 'react';
import './App.css'
import { connect } from 'react-redux'

//Child components
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'

function App(props) {
  useEffect(() => {

  }, [])
  return (
    <div>
      <header className="App-header">
        <h1>Potentially recreate Google weather display</h1>
      </header>
      <div className="App">
        <CurrentDisplay />
      </div>
    </div>
  );
}


export default connect()(App);