import React from 'react';
import { ProductModel } from '../../../data/Product/product.data';
import {
  Card,
  CardImg,
  CardImgContainer,
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
          <CardImgContainer>
            <CardImg src={item.image} alt={item.title} />
          </CardImgContainer>
          <CardData>
            <CardHeader>{item.title}</CardHeader>
            <CardContent>
              <Description text={item.description} />
              <CardPrice>Price:<br/> {item.price}$</CardPrice>
            </CardContent>
          </CardData>
        </Card>
      ))}
    </>
  );
};

export default ProductListComponent;