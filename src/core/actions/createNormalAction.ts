import { createAction } from '@reduxjs/toolkit';

export const createNormalAction =
  (namespace: string) =>
  <P = void, T extends string = string>(type: T) =>
    createAction<P, T>(`${namespace}/${type}` as T);
