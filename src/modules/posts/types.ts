import { IRequestThunkMeta, IThunkMeta, IThunkFailure } from 'core/commonTypes';

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

export interface IPost {
  id: number;
  author?: string;
  title: string;
  body: string;
  userId: number;
}

export interface INewPost {
  title: string;
  body: string;
  userId: number;
  id?: string | number;
}

export interface IPostsState {
  byId: {
    [id: number]: IPost;
  };
  ids: number[];
  isFetching: boolean;
  users: IUser[];
}

export interface IUser {
  id: number;
  name: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface PostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

export interface PostRequestSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: {
    posts: IPost[];
    users: IUser[];
  };
}

export interface PostRequestFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
}

// Delete post action types

export interface DeletePostRequestAction {
  type: typeof DELETE_POST_REQUEST;
  payload: {
    id: number;
  };
  meta: any;
}

export interface DeletePostSuccessAction {
  type: typeof DELETE_POST_SUCCESS;
  payload: {
    id: number;
  };
  meta: any;
}

export interface DeletePostFailureAction {
  type: typeof DELETE_POST_FAILURE;
  error: boolean;
  meta: any;
}

// Create post action types

export interface CreatePostRequestAction {
  type: typeof CREATE_POST_REQUEST;
  payload: INewPost;
  meta: any;
}

export interface CreatePostSuccessAction {
  type: typeof CREATE_POST_SUCCESS;
  payload: INewPost;
  meta: any;
}

export interface CreatePostFailureAction {
  type: typeof CREATE_POST_FAILURE;
  error: boolean;
  meta: any;
}

// Edit post action types

export interface EditPostRequestAction {
  type: typeof EDIT_POST_REQUEST;
  payload: INewPost;
  meta: any;
}

export interface EditPostSuccessAction {
  type: typeof EDIT_POST_SUCCESS;
  payload: INewPost;
  meta: any;
}

export interface EditPostFailureAction {
  type: typeof EDIT_POST_FAILURE;
  error: boolean;
  meta: any;
}

export type DeletePostRequestActionTypes =
  | DeletePostRequestAction
  | DeletePostSuccessAction
  | DeletePostFailureAction;

export type PostRequestActionTypes =
  | PostsRequestAction
  | PostRequestSuccessAction
  | PostRequestFailureAction;

export type CreatePostRequestActionTypes =
  | CreatePostRequestAction
  | CreatePostSuccessAction
  | CreatePostFailureAction;

export type EditPostRequestActionTypes =
  | EditPostRequestAction
  | EditPostSuccessAction
  | EditPostFailureAction;

export type PostsActionTypes =
  | DeletePostRequestActionTypes
  | PostRequestActionTypes
  | CreatePostRequestActionTypes
  | EditPostRequestActionTypes;
