import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductModel } from '../../data/Product/product.data';

export interface ProductState {
  products: ProductModel[];
}

const initialState: ProductState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
    addProductToStart: (state, action: PayloadAction<ProductModel>) => {
      state.products = [action.payload, ...state.products];
    },
  },
})

export const { setProductsAction, addProductToStart } = productSlice.actions;
export default productSlice.reducer;