import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { push } from 'connected-react-router';

import { apiCallLoginRequest } from 'core/requests';

import { authSuccess, authFailure } from './actions';
import { AuthRequestAction } from './types';
import { AUTH_REQUEST } from './constants';

export function* loginUser(action: AuthRequestAction): SagaIterator {
  try {
    const token = yield call(apiCallLoginRequest, action.payload);

    yield put(authSuccess(token));
    yield put(push('/posts'));
  } catch (e) {
    yield put(authFailure());

    console.log(e);
  }
}

export function* watchAuthSaga(): SagaIterator {
  yield takeLatest(AUTH_REQUEST, loginUser);
}
