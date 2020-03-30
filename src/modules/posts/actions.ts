import {
  IPost,
  IUser,
  INewPost,
  PostRequestActionTypes,
  DeletePostRequestActionTypes,
  CreatePostRequestActionTypes,
} from './types';

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from './constants';

export const fetchPosts = (): PostRequestActionTypes => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: IPost[], users: IUser[]): PostRequestActionTypes => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    users,
    posts,
  },
});

export const fetchPostsFailure = (): PostRequestActionTypes => ({ type: FETCH_POSTS_FAILURE });

// Delete post action creators

export const deletePost = (id: number): DeletePostRequestActionTypes => ({
  type: DELETE_POST_REQUEST,
  payload: { id },
  meta: { thunk: true },
});

export const deletePostSuccess = (
  payload: { id: number },
  meta: any,
): DeletePostRequestActionTypes => ({
  type: DELETE_POST_SUCCESS,
  payload,
  meta,
});

export const deletePostFailure = (): DeletePostRequestActionTypes => ({
  type: DELETE_POST_FAILURE,
});

// Create post action creators

export const createPost = (newPost: INewPost): CreatePostRequestActionTypes => ({
  type: CREATE_POST_REQUEST,
  payload: newPost,
  meta: { thunk: true },
});

export const createPostSuccess = (payload: INewPost, meta: any): CreatePostRequestActionTypes => ({
  type: CREATE_POST_SUCCESS,
  payload,
  meta,
});

export const createPostFailure = (): CreatePostRequestActionTypes => ({
  type: CREATE_POST_FAILURE,
});
