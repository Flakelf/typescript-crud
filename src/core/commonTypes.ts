export interface IRequestThunkMeta {
  thunk: boolean;
}

export interface IThunkFailure {
  error: boolean;
  meta: any;
}

export interface IThunkMeta {
  thunk: { key: string; name: string; type: string };
}
