import {takeEvery} from 'redux-saga/effects';

function* workerSaga(action) {
  yield console.log('ss');
}

export function* watchSaga() {
  yield takeEvery('SUBMIT', workerSaga);
}

export default function* rootSaga() {
  yield watchSaga();
}
