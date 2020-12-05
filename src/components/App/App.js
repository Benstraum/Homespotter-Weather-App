import React,{useEffect} from 'react';
import { connect } from 'react-redux'

//Child components
import CurrentDisplay from '../CurrentDisplay/CurrentDisplay'

function App(props) {
  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Potentially recreate Google weather display</h1>
      </header>
      <CurrentDisplay/>
    </div>
  );
}


export default connect()(App);