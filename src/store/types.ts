import { PayloadActionCreator } from '@reduxjs/toolkit';

export type StreamError = {
  message: string;
  stack: string;
};

export type EffectActionCreator<
  PS = void,
  P = void,
  T extends string = string,
> = PayloadActionCreator<P, T> & {
  succeeded?: PayloadActionCreator<PS, T>;
  failed?: PayloadActionCreator<StreamError, T>;
};
