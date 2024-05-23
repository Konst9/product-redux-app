import { useEffect, useState } from 'react';
import { ProductModel } from '../data/Product/product.data';
import { fetchProductsApi } from '../services/product-api.service';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { selectProducts } from '../store/products/product.selector';

interface useProductResult {
  products: ProductModel[];
  isLoading: boolean;
  error: string | null;
}


const useProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => selectProducts(state))
  const [error, setError] = useState<string | null>(null);
  const [isLoading , setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        await fetchProductsApi(dispatch);
      } catch (error: any) {
        setError(`Something went wrong! Error: ${error}`)
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [dispatch]);

  return { products, isLoading, error };
};

export default useProducts;