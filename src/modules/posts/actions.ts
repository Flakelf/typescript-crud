import { IThunkFailure, IThunkMeta, IRequestThunkMeta } from 'core/commonTypes';

import {
  IPost,
  IUser,
  INewPost,
  PostRequestActionTypes,
  DeletePostRequestActionTypes,
  CreatePostRequestActionTypes,
  EditPostRequestActionTypes,
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
  EDIT_POST_REQUEST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
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
  meta: IThunkMeta,
): DeletePostRequestActionTypes => ({
  type: DELETE_POST_SUCCESS,
  payload,
  meta,
});

export const deletePostFailure = ({
  error,
  meta,
}: IThunkFailure): DeletePostRequestActionTypes => ({
  type: DELETE_POST_FAILURE,
  error,
  meta,
});

// Create post action creators

export const createPost = (newPost: INewPost): CreatePostRequestActionTypes => ({
  type: CREATE_POST_REQUEST,
  payload: newPost,
  meta: { thunk: true },
});

export const createPostSuccess = (
  payload: INewPost,
  meta: IThunkMeta,
): CreatePostRequestActionTypes => ({
  type: CREATE_POST_SUCCESS,
  payload,
  meta,
});

export const createPostFailure = ({
  error,
  meta,
}: IThunkFailure): CreatePostRequestActionTypes => ({
  type: CREATE_POST_FAILURE,
  error,
  meta,
});

// Edit post action creators

export const editPost = (editedPost: INewPost): EditPostRequestActionTypes => ({
  type: EDIT_POST_REQUEST,
  payload: editedPost,
  meta: { thunk: true },
});

export const editPostSuccess = (
  payload: INewPost,
  meta: IRequestThunkMeta,
): EditPostRequestActionTypes => ({
  type: EDIT_POST_SUCCESS,
  payload,
  meta,
});

export const editPostFailure = ({ error, meta }: IThunkFailure): EditPostRequestActionTypes => ({
  type: EDIT_POST_FAILURE,
  error,
  meta,
});
