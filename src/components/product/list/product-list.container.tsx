import React, { memo, FC } from 'react';
import ProductList from "./product-list.component";
import useProducts from "../../../hooks/products.hook";
import { ProductWrapper } from "./product-list.styles";
import ProductCreationContainer from '../create/ProductCreationContainer';

type ProductCardProps = {};

const ProductListContainer: FC<ProductCardProps> = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <ProductWrapper>
      <ProductCreationContainer />
      {error ? (
        <p>{error}</p>
      ) : (
        <ProductList products={products} />
      )}
      {isLoading ? <span>loading...</span> : null}
    </ProductWrapper>
  )
};

export default memo(ProductListContainer);