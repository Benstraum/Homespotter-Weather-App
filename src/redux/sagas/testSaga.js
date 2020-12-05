import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';

function* testOurSaga() {
    try {
       const responsePayload = yield axios.get(`/api/weather`);
        yield put({ type: 'SEND_TEST_INFO' ,payload:responsePayload});
    } catch (error) {
        console.log('List get request failed', error);
    }
}

function* testSaga() {
    yield takeEvery('TEST_SAGA', testOurSaga);
}

export default testSaga;