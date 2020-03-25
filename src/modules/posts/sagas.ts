import { takeEvery, call, put, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { API } from 'core/requests';

import {
  fetchPostsSuccess,
  fetchPostsFailure,
  deletePostSuccess,
  deletePostFailure,
} from './actions';
import { FETCH_POSTS_REQUEST, DELETE_POST_REQUEST } from './constants';
import { IPost, IUser, DeletePostRequestAction } from './types';

export function* fetchPosts(): SagaIterator {
  try {
    const [{ data: postsData }, { data: usersData }] = yield all([
      call(API, 'posts'),
      call(API, 'users'),
    ]);

    const data = postsData.map((post: IPost) => ({
      ...post,
      author: usersData.find((user: IUser) => user.id === post.userId).name,
    }));

    yield put(fetchPostsSuccess(data));
  } catch (e) {
    yield put(fetchPostsFailure());

    console.log(e);
  }
}

export function* deletePost(action: DeletePostRequestAction): SagaIterator {
  try {
    console.log(action);

    yield call(API.delete, `posts/${action.payload.id}`);
    yield put(deletePostSuccess(action.meta));
  } catch (e) {
    yield put(deletePostFailure());
  }
}

export function* watchPostsSaga(): SagaIterator {
  yield all([
    takeEvery(FETCH_POSTS_REQUEST, fetchPosts),
    takeEvery(DELETE_POST_REQUEST, deletePost),
  ]);
}
