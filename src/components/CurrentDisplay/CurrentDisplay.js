import React, { useEffect, useState } from 'react';
import './CurrentDisplay.css'
import { connect } from 'react-redux'

function CurrentDisplay(props) {
    useEffect(() => {
        //I only want it to auto populate on initial upload
        props.state === "" && props.dispatch({ type: 'TEST_SAGA' })
        console.log('hello from current display')
    }, [])
    const [isCelcius, setIsCelsius] = useState(true)
    console.log(props.state)
    return (
        <div className="Current">
            {/* Header with place, time, and sky condition. Using conditional rendering while querying the weather API */}
            <header>
                {props.state ?
                    <h2>{props.state.data.location.name + ', ' + props.state.data.location.country}</h2>
                    :
                    <h2>Location</h2>}
                {props.state ?
                    <h3>{props.state.data.current.last_updated}</h3>
                    :
                    <h3>Time</h3>}
                {props.state ?
                    <div className="skies"><h3>{props.state.data.current.condition.text}</h3></div>
                    :
                    <h3>Skies Condition</h3>}
            </header>
            <main className="current-main" style={{ display: 'inline-flex' }}>
                <div className='firstHalf' style={{ display: 'inline-flex' }}>
                    {/* Icon */}
                    {props.state ?
                        <img src={props.state.data.current.condition.icon}></img>
                        :
                        <h3>Sky icon</h3>}
                    {/* Tempurature && Farenheight/Celcius Toggle */}
                    {props.state ?
                        isCelcius ? <h1>{props.state.data.current.temp_c} </h1> : <h1>{props.state.data.current.temp_f} </h1>
                        :
                        <h3>Temp F or C</h3>}
                    {
                        <h3>
                            <a onClick={() => setIsCelsius(false)} >°F</a> |<a onClick={() => setIsCelsius(true)}>°C</a>
                        </h3>
                    }
                </div>

                <div className="secondHalf">
                    {props.state ?
                            isCelcius ? 
                            <h3>Precipitation: {props.state.data.current.precip_mm}  mm</h3>
                            :
                            <h3>Precipitation: {props.state.data.current.precip_in}  in</h3>
                        :
                        <h3>Precipitation</h3>
                    }
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
    state: state.weatherReducer
});
export default connect(mapStateToProps)(CurrentDisplay);