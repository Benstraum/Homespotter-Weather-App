import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* initialDisplay() {
    try {
       const responsePayload = yield axios.get(`/api/weather`);
        yield put({ type: 'SEND_TEST_INFO' ,payload:responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* weatherSaga() {
    yield takeEvery('TEST_SAGA', initialDisplay);
}

export default weatherSaga;