import React, { useState } from 'react';
import { BtnFixed } from '../../../assets/styles/app.styles';
import CreateBtn from '../../../utils/button/createBtn';
import Modal from '../../../utils/modal/modal';
import ProductCreatingForm from './productCreatingForm';
import { createProductApi } from '../../../services/product-api.service';
import { ProductModel } from '../../../data/Product/product.data';
import { setProductsAction } from '../../../store/products/product.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function ProductCreationContainer() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
  const [isModal, setIsModal] = useState(false);

  const handleOpen = () => {
    setIsModal(true);
  }

  const handleClose = () => {
    setIsModal(false);
  }

  const handleSubmit = async (product: Partial<ProductModel>) => {
    try {
      const newProduct = await createProductApi(product, dispatch);
      if (newProduct) {
        const updatedProducts = [newProduct, ...products];
        dispatch(setProductsAction(updatedProducts));
        setIsModal(false);
      }
    } catch (error) {
      console.error('Failed to create product', error);
    }
  }

  return (
    <>
      {isModal && (
        <Modal title='Создать продукт' onClose={handleClose}>
          <ProductCreatingForm onSubmit={handleSubmit} />
        </Modal>
      )}
      <BtnFixed onClick={handleOpen}>
        <CreateBtn />
      </BtnFixed>
    </>
  );
}

export default ProductCreationContainer;