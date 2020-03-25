import { createSelector } from 'reselect';

import { IAppState } from '../';
import { REDUCER_NAME as NAME } from './constants';
import { IPost } from './types';

export const getPosts = createSelector(
  (state: IAppState) => state[NAME],
  ({ byId, ids }: any): IPost[] => ids.map((id: number): IPost => byId[id]),
);
