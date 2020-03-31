import { createSelector } from 'reselect';

import { IAppState } from '../';
import { REDUCER_NAME as NAME } from './constants';
import { IPost, IUser, IPostsState } from './types';

export const getPosts = createSelector(
  (state: IAppState) => state[NAME],
  ({ byId, ids }: IPostsState): IPost[] => ids.map((id: number): IPost => byId[id]),
);

export const getPostById = (id: number) => (state: IAppState): IPost => state[NAME].byId[id];

export const getAuthors = (state: IAppState): IUser[] => state[NAME].users;
