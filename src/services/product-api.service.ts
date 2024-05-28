import axios from 'axios';
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

export const createProductApi = async (product: Partial<ProductModel>) => {
  try {
    const response = await axios.post(PRODUCT_URL, product);
    console.log(response.data);
    return response.data;
  } catch(error) {
    console.log('Error to created new product: ', error);
    throw error;
  }
};