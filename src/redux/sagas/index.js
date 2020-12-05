import { all } from 'redux-saga/effects';
import weatherSaga from './weatherSaga.js'
//base saga
export default function* rootSaga() {
    yield all([
        weatherSaga()
        //insert sagas here
    ]);
  }
  