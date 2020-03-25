import * as R from 'ramda';

import { PostRequestActionTypes, IPostsState, IPost } from './types';

import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from './constants';

const initialState: IPostsState = {
  byId: {},
  ids: [],
  isFetching: false,
};

const indexBy = (key: string, arr: IPost[]): any => {
  const emptyObj: any = {};

  arr.forEach((arrItem: IPost): void => {
    emptyObj[arrItem.id] = { ...arrItem };
  });

  return emptyObj;
};

export default (state = initialState, action: PostRequestActionTypes): IPostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        byId: indexBy('id', action.payload),
        ids: action.payload.map(R.prop('id')),
      };

    case FETCH_POSTS_FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
};
