import { AUTH_REQUEST, AUTH_FAILURE, AUTH_SUCCESS } from './constants';

export interface IAuthState {
  token: string | null;
  isFetching: boolean;
}

export interface IUserCredentials {
  login: string;
  password: string;
}

export interface AuthRequestAction {
  type: typeof AUTH_REQUEST;
  payload: IUserCredentials;
  meta: any;
}

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  payload: string;
  meta: any;
}

export interface AuthFailureAction {
  type: typeof AUTH_FAILURE;
  error: boolean;
  meta: any;
}

export type AuthActionTypes = AuthRequestAction | AuthSuccessAction | AuthFailureAction;
