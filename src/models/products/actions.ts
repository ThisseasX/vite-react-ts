import { createEffectAction } from 'core';
import { Product } from './types';
import { productSlice } from './slice';

const createAction = createEffectAction(productSlice.name);

const fetchProducts = createAction<Product[]>('fetchProducts');

const { setProducts } = productSlice.actions;

export { fetchProducts, setProducts };
