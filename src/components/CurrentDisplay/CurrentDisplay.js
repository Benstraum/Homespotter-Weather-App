import React, { useEffect } from 'react';
import './CurrentDisplay.css'
import { connect } from 'react-redux'

function CurrentDisplay(props) {
    useEffect(() => {
        //I only want it to auto populate on initial upload then the user controls via the searchbar
        props.location === '' && props.dispatch({ type: 'TEST_SAGA' })
    }, [])
    //simple funtion to provide a true false statement to use either metric or imperial via redux
    const setIsCelcius = (bool) =>{
        props.dispatch({type:'SET_IS_CELCIUS',payload:bool})
    }
    return (
        //Through this component I make use of coditional rendering to swap 
        //between imperial and metric usits as well as to ensure no crashes trying to access objects that arent there

        <div className="Current">
            {/* Header with place, time, and sky condition. Using conditional rendering while querying the weather API */}
            <header className="current-header">
                {/* Location ,  country  */}
                {props.location ?
                    <h1>{props.location.name + ', ' + props.location.country}</h1>
                    :
                    <h1>Location</h1>}
                    {/* Time of updated weather at location */}
                {props.location ?
                    <h2>{props.current.last_updated}</h2>
                    :
                    <h2>Time</h2>}
                    {/* Sky condition text */}
                {props.location ?
                    <div className="skies"><h3>{props.current.condition.text}</h3></div>
                    :
                    <h3>Skies Condition</h3>}
                    {props.isCelcius?<h4>Metric</h4>
                    :
                    <h4>Imperial</h4>

                    }
            </header>
            <main className="current-main" >
                <div className='firstHalf' style={{ display: 'flex' }}>
                    {/* Icon */}
                    {props.location ?
                        <img src={props.current.condition.icon} alt="sky condition visual aid"></img>
                        :
                        <h3>Sky icon</h3>}
                    {/* Tempurature && Farenheight/Celcius Toggle */}
                    {props.location ?
                        props.isCelcius ? <h1 >{props.current.temp_c} </h1> : <h1>{props.current.temp_f} </h1>
                        :
                        <h3>Temp F or C</h3>}
                    {
                        <h2 >
                            <button onClick={() => setIsCelcius(false)} >°F</button> | <button onClick={() => setIsCelcius(true)}>°C</button>
                        </h2>
                    }
                </div>

                <div className="secondHalf">
                    {/* precipitation */}
                    {props.location ?
                            props.isCelcius ? 
                            <h3>Precipitation: {props.current.precip_mm}  mm</h3>
                            :
                            <h3>Precipitation: {props.current.precip_in}  in</h3>
                        :
                        <h3>Precipitation</h3>
                    }
                    {/* Humidity */}
                    {props.location ?
                        <h3>Humidity {props.current.humidity} %</h3>
                        :
                        <h3>Humidity</h3>
                    }
                    {/* wind */}
                    {props.location ?
                        props.isCelcius ? 
                        <h3>Wind {props.current.gust_kph} km/h</h3>
                        :
                        <h3>Wind {props.current.gust_mph} mph</h3>
                    :
                    <h3>Wind Speed</h3>
                    }
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
 
    location:state.weatherReducer.data.location,
    current:state.weatherReducer.data.current,
    isCelcius:state.metricReducer   
});
export default connect(mapStateToProps)(CurrentDisplay);