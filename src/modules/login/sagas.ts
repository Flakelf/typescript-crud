import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { apiCallLoginRequest } from 'core/requests';

import { authSuccess, authFailure } from './actions';
import { AuthRequestAction } from './types';
import { AUTH_REQUEST } from './constants';

export function* loginUser(action: AuthRequestAction): SagaIterator {
  try {
    const token = yield call(apiCallLoginRequest, action.payload);

    yield put(authSuccess(token, action.meta));
  } catch (e) {
    yield put(
      authFailure({
        error: true,
        meta: action.meta,
      }),
    );
  }
}

export function* watchAuthSaga(): SagaIterator {
  yield takeLatest(AUTH_REQUEST, loginUser);
}
