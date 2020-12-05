import React,{useEffect} from 'react';
import { connect } from 'react-redux'

function CurrentDisplay(props) {
  useEffect(()=>{
      //I only want it to auto populate on initial upload
  props.state.weatherReducer === "" && props.dispatch({type:'TEST_SAGA'})
    console.log('hello from current display')
  },[])
  console.log(props.state)
  return (
    <div className="App">
      <header className="App-header">
        <p>
        {JSON.stringify(props.state)}
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  state
});
export default connect(mapStateToProps)(CurrentDisplay);