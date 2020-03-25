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
}

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS;
  payload: string;
}

export interface AuthFailureAction {
  type: typeof AUTH_FAILURE;
}

export type AuthActionTypes = AuthRequestAction | AuthSuccessAction | AuthFailureAction;
