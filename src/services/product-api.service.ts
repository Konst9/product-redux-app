import axios from 'axios';
import { PRODUCT_URL } from '../constants/api.constance';
import { ProductModel } from '../data/Product/product.data';
import { AppDispatch } from '../store/store';
import { addProductToStart, setProductsAction } from '../store/products/product.slice';

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

export const createProductApi = async (product: Partial<ProductModel>, dispatch: AppDispatch): Promise<ProductModel> => {
  try {
    const response = await axios.post(PRODUCT_URL, product);
    if (response.status === 200) {
      const createdProduct: ProductModel = response.data;
      dispatch(addProductToStart(createdProduct));
      return createdProduct;
    } else {
      throw new Error('Failed to create product');
    }
  } catch (error) {
    console.error('Error to create new product: ', error);
    throw error;
  }
};