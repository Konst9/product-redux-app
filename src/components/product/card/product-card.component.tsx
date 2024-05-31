import React, { memo, FC } from 'react';
import { ProductModel } from '../../../data/Product/product.data';
import Description from '../../../utils/description';
import {
  Card,
  CardImgContainer,
  CardImg,
  CardHeader,
  CardData,
  CardDescription,
  CardPrice,
  CardContent
} from "./product-card.styles";

type ProductProps = ProductModel;

const ProductCard: FC<ProductProps> = ({ title, image, price, description}) => {

  return (
    <Card>
      <CardImgContainer>
        <CardImg src={image} alt={title} />
      </CardImgContainer>
      <CardData>
        <CardHeader>{title}</CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          <CardPrice>Price: ${price}</CardPrice>
        </CardContent>
      </CardData>
    </Card>
  )
};
export default memo(ProductCard);