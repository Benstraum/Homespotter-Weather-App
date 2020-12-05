import React,{useEffect} from 'react';
import { connect } from 'react-redux'

function App(props) {
  useEffect(()=>{
    console.log('hello')
    props.dispatch({type:'TEST_SAGA'})
    
  })
  console.log(props.state)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's go
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(App);