import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
} from './constants';

export interface IPost {
  id: number;
  author: string;
  title: string;
  body: string;
  userId: number;
}

export interface IPostsState {
  byId: {};
  ids: number[];
  isFetching: boolean;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
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
  payload: IPost[];
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
  meta: {
    thunk: boolean;
  };
}

export interface DeletePostSuccessAction {
  type: typeof DELETE_POST_SUCCESS;
  meta: any;
}

export interface DeletePostFailureAction {
  type: typeof DELETE_POST_FAILURE;
}

export type DeletePostRequestActionTypes =
  | DeletePostRequestAction
  | DeletePostSuccessAction
  | DeletePostFailureAction;

export type PostRequestActionTypes =
  | PostsRequestAction
  | PostRequestSuccessAction
  | PostRequestFailureAction;
