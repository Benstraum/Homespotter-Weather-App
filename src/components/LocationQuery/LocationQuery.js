import React, { useState, useEffect } from 'react';
import './LocationQuery.css'
import { connect } from 'react-redux'

function LocationQuery(props) {
  //handles our user input onchange event, and the function below sends that information bundled to the server to ping the api
  const [location, setLocation] = useState('')
  const sendLocationInfo =(userInput)=>{
    props.dispatch({type:"USER_REQUEST",payload:userInput})

  }
  return (
      <div className="locationQuery" style={{display:'inline-flex', alignSelf:'center'}}>
        <input value={location} onChange={e=>setLocation(e.target.value)} />
        <label htmlFor="input">Location</label>
        {/* Seeing that google had SVGS created for clear and search I 
        thought to use those values instead of using an icon library 
        both buttons handle simple functionality: sending the request and clearing the input */}
        <button className="clear-button" 
        onClick={()=>setLocation('')}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
         </button>
        <span className="divider"/>
        <button className="search" 
        onClick={()=>sendLocationInfo(location)}>
        <svg xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
        </button>
      </div>
  );
}
const mapStateToProps = state => ({
 error:state.errorReducer   
});
export default connect(mapStateToProps)(LocationQuery);