import { useEffect, useState } from 'react';
import { ProductModel } from "./product.data";

function ProductListData() {
  const [productListData, setProductListData] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then((json: ProductModel[]) => {
        setProductListData(json);
      })
      .catch(error => console.error("Данные не получены по причине: " + error.message));
  }
  return productListData;
}

export default ProductListData;
