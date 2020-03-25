import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { IUserCredentials } from 'modules/login/types';

export const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const apiCallLoginRequest = (userCredentials: IUserCredentials): Promise<string> =>
  new Promise((resolve, reject) => {
    if (userCredentials.login === 'test' && userCredentials.password === 'test228') {
      setTimeout(() => {
        resolve(uuidv4());
      }, 2000);
    } else {
      setTimeout(() => {
        reject();
      }, 1000);
    }
  });
