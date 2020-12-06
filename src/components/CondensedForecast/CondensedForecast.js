import React, { useEffect } from 'react';
import './CondensedForecast.css'
import { connect } from 'react-redux'

function CondensedForecast(props) {
 let index = props.index
 console.log(props.forecastday[index])
  return (
      <>
        {props.forecastday ?
        <div className="condensedForecast">
        <h3>{props.forecastday[`${index}`].date}</h3>
        <br/>
          <img src={props.forecastday[`${index}`].day.condition.icon} alt="sky condition visual aid"/>
          <br/>
          <div className="highLow">
            {props.isCelcius ? 
                  <h3>{props.forecastday[`${index}`].day.maxtemp_c}° </h3>
                  : 
                  <h3>{props.forecastday[`${index}`].day.maxtemp_f}°</h3>
                  }
          {
            props.isCelcius ? 
                  <h3 >{props.forecastday[`${index}`].day.mintemp_c}°</h3>
                  : 
                  <h3>{props.forecastday[`${index}`].day.mintemp_f}°</h3>
            
          }
          </div>
          
        </div>
        :
        <div></div>
}
      </>
  );
}


const mapStateToProps = state => ({
  forecastday:state.weatherReducer.data.forecast.forecastday,
  isCelcius:state.metricReducer   
});
export default connect(mapStateToProps)(CondensedForecast);