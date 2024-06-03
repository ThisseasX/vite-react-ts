import {
  catchError,
  map,
  mergeMap,
  pipe,
  startWith,
  type ObservableInput,
  type ObservedValueOf,
} from 'rxjs';
import type { EffectActionCreator } from 'store/types';

export const effect = <T, O extends ObservableInput<any>>(
  project: (value: T, index: number) => O,
  action: EffectActionCreator<ObservedValueOf<O>, T>,
) =>
  pipe(
    mergeMap(project),
    map((value) => action.succeeded(value)),
    catchError(({ message, stack }, caught) =>
      caught.pipe(startWith(action.failed({ message, stack }))),
    ),
  );
