import { IUserCredentials, AuthActionTypes } from './types';

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './constants';

export const authRequest = (userCredentials: IUserCredentials): AuthActionTypes => ({
  type: AUTH_REQUEST,
  payload: userCredentials,
});

export const authSuccess = (token: string): AuthActionTypes => ({
  type: AUTH_SUCCESS,
  payload: token,
});

export const authFailure = (): AuthActionTypes => ({ type: AUTH_FAILURE });
