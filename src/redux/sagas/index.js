import { all } from 'redux-saga/effects';
import testSaga from './testSaga.js'
//base saga
export default function* rootSaga() {
    yield all([
        testSaga()
        //insert sagas here
    ]);
  }
  