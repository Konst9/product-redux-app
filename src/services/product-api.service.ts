import axios, { AxiosResponse } from 'axios';
import { PRODUCT_URL } from '../constants/api.constance';
import { ProductModel } from '../data/Product/product.data';

export const fetchProductsApi = (): Promise<AxiosResponse<ProductModel[]>> => {
  return axios.get(PRODUCT_URL);
}