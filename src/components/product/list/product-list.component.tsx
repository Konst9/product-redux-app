import React from 'react';
import { ProductModel} from '../../../data/Product/product.data';
import {
  Card,
  CardImg,
  CardHeader,
  CardData,
  CardPrice,
  CardContent
} from "../card/product-card.styles";
import Description from '../../../utils/description';

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
              <Description text={item.description} />
              <CardPrice>Price: ${item.price}</CardPrice>
            </CardContent>
          </CardData>
        </Card>
      ))}
    </>
  );
};

export default ProductListComponent;