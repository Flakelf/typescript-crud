import { AuthActionTypes, IAuthState } from './types';

import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './constants';

const initialState: IAuthState = {
  token: null,
  isFetching: false,
};

export default (state = initialState, action: AuthActionTypes): IAuthState => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isFetching: false,
      };

    case AUTH_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
