import React, { memo, FC } from 'react';
import ProductList from "./product-list.component";
import useProducts from "../../../hooks/products.hook";

type ProductCardProps = {};

const ProductListContainer: FC<ProductCardProps> = () => {
  const { products, isLoading, error } = useProducts();

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <ProductList products={products} />
      )}
      {isLoading ? <span>loading...</span> : null}
    </>
  )
};

export default memo(ProductListContainer);