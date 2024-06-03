import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from './types';

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }: PayloadAction<Product[]>) => {
      state.products = payload;
    },
  },
});

export const { reducer } = productSlice;
