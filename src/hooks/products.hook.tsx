import { useEffect, useState } from 'react';
import { ProductModel } from '../data/Product/product.data';
import { fetchProductsApi } from '../services/product-api.service';


const useProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([])
  const [error, setError] = useState<string | null>(null);
  const [isLoading , setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const response = await fetchProductsApi();
        setProducts(response.data);
      } catch (error: any) {
        setError(`Something went wrong! Error: ${error}`)
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return { products, isLoading, error };
};

export default useProducts;