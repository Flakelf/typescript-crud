import { PostRequestActionTypes, IPost, DeletePostRequestActionTypes } from './types';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from './constants';

export const fetchPosts = (): PostRequestActionTypes => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: IPost[]): PostRequestActionTypes => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (): PostRequestActionTypes => ({ type: FETCH_POSTS_FAILURE });

export const deletePost = (id: number): DeletePostRequestActionTypes => ({
  type: DELETE_POST_REQUEST,
  payload: { id },
  meta: { thunk: true },
});

export const deletePostSuccess = (meta: any): DeletePostRequestActionTypes => ({
  type: DELETE_POST_SUCCESS,
  meta,
});

export const deletePostFailure = (): DeletePostRequestActionTypes => ({
  type: DELETE_POST_FAILURE,
});
