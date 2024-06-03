import { combineEpics, type Epic } from 'redux-observable';
import { filter, ignoreElements, map, mergeMap, tap } from 'rxjs';
import { effect } from 'core';
import { fetchProductsRequest } from 'api/products';
import { fetchProducts, setProducts } from '../actions';

const fetchProductsEpic: Epic = (action$) =>
  action$.pipe(
    filter(fetchProducts.match),
    mergeMap(() => fetchProductsRequest()),
    effect(() => fetchProductsRequest(), fetchProducts),
  );

const fetchProductsSucceededEpic: Epic = (action$) =>
  action$.pipe(
    filter(fetchProducts.succeeded.match),
    map(({ payload }) => setProducts(payload)),
  );

const fetchProductsFailedEpic: Epic = (action$) =>
  action$.pipe(
    filter(fetchProducts.failed.match),
    tap((err) => {
      // eslint-disable-next-line no-console
      console.log('Failed to fetch products', err);
    }),
    ignoreElements(),
  );

export default combineEpics(
  fetchProductsEpic,
  fetchProductsSucceededEpic,
  fetchProductsFailedEpic,
);
