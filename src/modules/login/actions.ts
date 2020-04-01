import { IThunkFailure, IThunkMeta } from 'core/commonTypes';

import { IUserCredentials, AuthActionTypes } from './types';

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './constants';

export const authRequest = (userCredentials: IUserCredentials): AuthActionTypes => ({
  type: AUTH_REQUEST,
  payload: userCredentials,
  meta: { thunk: true },
});

export const authSuccess = (token: string, meta: IThunkMeta): AuthActionTypes => ({
  type: AUTH_SUCCESS,
  payload: token,
  meta,
});

export const authFailure = ({ error, meta }: IThunkFailure): AuthActionTypes => ({
  type: AUTH_FAILURE,
  error,
  meta,
});
