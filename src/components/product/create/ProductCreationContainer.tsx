import React, { useState } from 'react';
import { BtnFixed } from '../../../assets/styles/app.styles';
import CreateBtn from '../../../utils/button/createBtn';
import Modal from '../../../utils/modal/modal';
import ProductCreatingForm from './productCreatingForm';
import { createProductApi, fetchProductsApi } from '../../../services/product-api.service';
import { ProductModel } from '../../../data/Product/product.data';
import { setProductsAction } from '../../../store/products/product.slice';
import { useDispatch } from 'react-redux';

function ProductCreationContainer() {
  const dispatch = useDispatch();
  const [isModal, setIsModal] = useState(false);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const handleOpen = () => {
    setIsModal(true);
  }

  const handleClose = () => {
    setIsModal(false);
  }

  const handleSubmit = async (product: Partial<ProductModel>) => {

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