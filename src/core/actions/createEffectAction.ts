import { createAction } from '@reduxjs/toolkit';
import { StreamError, EffectActionCreator } from 'store/types';

export const createEffectAction =
  (namespace: string) =>
  <PS = void, P = void, T extends string = string>(type: T) => {
    const action = createAction<P, T>(
      `effect/${namespace}/${type}` as T,
    ) as EffectActionCreator<PS, P, T>;

    action.succeeded = createAction<PS, T>(
      `effect/${namespace}/${type}/succeeded` as T,
    );

    action.failed = createAction<StreamError, T>(
      `effect/${namespace}/${type}/failed` as T,
    );

    return action;
  };
