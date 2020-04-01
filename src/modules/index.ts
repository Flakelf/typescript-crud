import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';

import { REDUCER_NAME as AUTH } from './login/constants';
import { IAuthState } from './login/types';
import authReducer from './login/reducer';
import { watchAuthSaga } from './login/sagas';

import { REDUCER_NAME as POSTS } from './posts/constants';
import { IPostsState } from './posts/types';
import postReducer from './posts/reducer';
import { watchPostsSaga } from './posts/sagas';

export interface IAppState {
  [AUTH]: IAuthState;
  [POSTS]: IPostsState;
}

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware));

const reducers = {
  [AUTH]: authReducer,
  [POSTS]: postReducer,
};

const store = createStore(combineReducers(reducers), compose(middlewareEnhancer));

sagaMiddleware.run(function*() {
  yield all([watchAuthSaga(), watchPostsSaga()]);
});

export { store };
