import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* initialDisplay() {
    try {
       const responsePayload = yield axios.get(`/api/weather`);
        yield put({ type: 'SEND_CURRENT_INFO' ,payload:responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}
function* currentDayRequest(action){
    try{
    const responsePayload = yield axios.get(`/api/weather/current/${action.payload}`)
    yield put({ type: 'SEND_CURRENT_INFO' ,payload:responsePayload});
    }catch (error) {
        console.log('List get request failed', error);
    }
}
function* requestedForecastDisplay(action){
    try{
    const responsePayload = yield axios.get(`/api/weather/forecast/${action.payload}`)
    yield put({ type: 'SEND_CURRENT_INFO' ,payload:responsePayload});
    }catch (error) {
        console.log('List get request failed', error);
    }
}

function* weatherSaga() {
    yield takeEvery('TEST_SAGA', initialDisplay);
    yield takeEvery('CURRENT_SAGA', currentDayRequest)
    yield takeEvery('USER_REQUEST', requestedForecastDisplay)
}

export default weatherSaga;