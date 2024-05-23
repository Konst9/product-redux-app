import React from 'react';
import { ProductModel} from '../../../data/Product/product.data';
import {
  Card,
  CardImg,
  CardHeader,
  CardData,
  CardDescription,
  CardPrice,
  CardContent
} from "../card/product-card.styles";

interface ProductsListComponentProps {
  products: ProductModel[];
}
function ProductListComponent({ products }: ProductsListComponentProps) {
  return (
    <>
      {products.map((item) => (
        <Card key={item.id}>
          <CardImg src={item.image} alt={item.title} />
          <CardData>
            <CardHeader>{item.title}</CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
              <CardPrice>Price: ${item.price}</CardPrice>
            </CardContent>
          </CardData>
        </Card>
      ))}
    </>
  );
};

export default ProductListComponent;