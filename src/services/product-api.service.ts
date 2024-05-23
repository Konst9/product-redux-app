import axios, { AxiosResponse } from 'axios';
import { PRODUCT_URL } from '../constants/api.constance';
import { ProductModel } from '../data/Product/product.data';
import { AppDispatch } from '../store/store';
import { setProductsAction } from "../store/products/product.slice"

export const fetchProductsApi = async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get<ProductModel[]>(PRODUCT_URL);
    dispatch(setProductsAction(response.data));
    return response.data;
  } catch (error) {
    console.error("Failed to fetch products", error);
    throw error;
  }
}