import React from 'react';
import { Wrapper } from "./assets/styles/app.styles";
// import ProductListData from "./data/Product/productListData";
// import ProductCard from './components/product/card/product-card.component';
import ProductListContainer from './components/product/list/product-list.container';
import Header from './utils/header';

function App() {
  // const productListData = ProductListData();

  return (
    <Wrapper>
      <Header />
      {/*<ProductCard {...productListData[0]}/>*/}
      <ProductListContainer />
    </Wrapper>
  );
}

export default App;
