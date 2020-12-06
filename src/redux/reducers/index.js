import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer'
import metricReducer from './metricReducer'
import errorReducer from './errorReducer'
//base reducer
const rootReducer = combineReducers({
  weatherReducer,
  metricReducer,
  errorReducer
  });
  
  export default rootReducer;
  