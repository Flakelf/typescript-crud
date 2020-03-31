import { takeEvery, call, put, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import { API } from 'core/requests';

import * as R from 'ramda';

import {
  fetchPostsSuccess,
  fetchPostsFailure,
  deletePostSuccess,
  deletePostFailure,
  createPostSuccess,
  createPostFailure,
  editPostSuccess,
  editPostFailure,
} from './actions';

import {
  FETCH_POSTS_REQUEST,
  DELETE_POST_REQUEST,
  CREATE_POST_REQUEST,
  EDIT_POST_REQUEST,
} from './constants';

import {
  IPost,
  IUser,
  DeletePostRequestAction,
  CreatePostRequestAction,
  EditPostRequestAction,
} from './types';

export function* fetchPosts(): SagaIterator {
  try {
    const [{ data: postsData }, { data: usersData }] = yield all([
      call(API, 'posts'),
      call(API, 'users'),
    ]);

    const users = usersData.map((user: IUser) => ({
      id: user.id,
      name: user.name,
    }));

    const posts = postsData.map((post: IPost) => ({
      ...post,
      author: usersData.find((user: IUser) => user.id === post.userId).name,
    }));

    yield put(fetchPostsSuccess(posts, users));
  } catch (e) {
    yield put(fetchPostsFailure());

    console.log(e);
  }
}

export function* deletePost(action: DeletePostRequestAction): SagaIterator {
  try {
    yield call(API.delete, `posts/${action.payload.id}`);
    yield put(deletePostSuccess({ id: action.payload.id }, action.meta));
  } catch (e) {
    yield put(deletePostFailure());
  }
}

export function* createPost(action: CreatePostRequestAction): SagaIterator {
  try {
    yield call(API.post, 'posts', {
      body: action.payload,
    });
    yield put(createPostSuccess(action.payload, action.meta));
  } catch (e) {
    yield put(createPostFailure());
  }
}

export function* editPost(action: EditPostRequestAction): SagaIterator {
  try {
    yield call(API.patch, `posts/${action.payload.id}`, {
      body: R.omit(['id'], action.payload),
    });

    yield put(editPostSuccess(action.payload, action.meta));
  } catch (e) {
    yield put(editPostFailure());
  }
}

export function* watchPostsSaga(): SagaIterator {
  yield all([
    takeEvery(FETCH_POSTS_REQUEST, fetchPosts),
    takeEvery(DELETE_POST_REQUEST, deletePost),
    takeEvery(CREATE_POST_REQUEST, createPost),
    takeEvery(EDIT_POST_REQUEST, editPost),
  ]);
}
