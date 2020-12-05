import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'
import metricReducer from './metricReducer'
//base reducer
const rootReducer = combineReducers({
  weatherReducer,
  metricReducer
  });
  
  export default rootReducer;
  