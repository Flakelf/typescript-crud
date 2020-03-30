import * as R from 'ramda';

import { PostsActionTypes, IPostsState, IPost } from './types';
import { FETCH_POSTS_SUCCESS, DELETE_POST_SUCCESS } from './constants';

const initialState: IPostsState = {
  byId: {},
  ids: [],
  isFetching: false,
  users: [],
};

const indexBy = (key: string, arr: IPost[]): any => {
  const emptyObj: any = {};

  arr.forEach((arrItem: IPost): void => {
    emptyObj[arrItem.id] = { ...arrItem };
  });

  return emptyObj;
};

const filterById = (arr: IPost[], id: number): IPost[] =>
  arr.filter((arrItem: IPost): boolean => arrItem.id !== id);

export default (state = initialState, action: PostsActionTypes): IPostsState => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        byId: indexBy('id', action.payload.posts),
        ids: action.payload.posts.map(R.prop('id')),
        users: action.payload.users,
      };

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.payload.id),
        byId: indexBy('id', filterById(Object.values(state.byId), action.payload.id)),
      };

    default:
      return state;
  }
};
