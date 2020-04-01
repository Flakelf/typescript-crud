import { IAppState } from '../';
import { REDUCER_NAME as NAME } from './constants';

export const getToken = (state: IAppState): string | null => state[NAME].token;
