import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../data/Product/product.data';

export interface CounterState {
  products: ProductModel[];
}

const initialState: CounterState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
  },
})

export const { setProductsAction } = productSlice.actions;
export default productSlice.reducer