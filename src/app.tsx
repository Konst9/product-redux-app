import React from 'react';
import { Wrapper } from "./assets/styles/app.styles";
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
