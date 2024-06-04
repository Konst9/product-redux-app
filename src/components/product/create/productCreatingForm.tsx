import React, { useState } from 'react';
import Input from '../../../utils/input/input';
import Button from '../../../utils/button/button';
import { Wrapper, Error } from './productCreatingForm.styles';
import { ProductModel } from '../../../data/Product/product.data';

interface ProductCreatingFormProps {
  onSubmit: (product: Partial<ProductModel>) => void;
}

function ProductCreatingForm( {onSubmit}: ProductCreatingFormProps ) {
  const [titleValue, setTitleValue] = useState('title');
  const [descriptionValue, setDescriptionValue] = useState('description');
  const [priceValue, setPriceValue] = useState(0);
  const [imageSrc, setImageSrc] = useState('https://i.pinimg.com/236x/93/ed/3a/93ed3af6411e1e8b997038c74c287a8a.jpg')
  const [validationTitle, setValidationTitle] = useState(false);

  const handleTitleChange = (e: any) => {
    const value = e.target.value;
    setTitleValue(value);

    if(value.length === 0) {
      setValidationTitle(true)
    } else {
      setValidationTitle(false);
    }
  }

  const handleDescriptionChange = (e: any) => {
    const value = e.target.value;
    setDescriptionValue(value);
  }
  const handleImageChange = (e: any) => {
    const value = e.target.value;
    setImageSrc(value);
  }

  const handlePriceChange = (e: any) => {
    const value = e.target.value;
    setPriceValue(value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      title: titleValue,
      description: descriptionValue,
      image: imageSrc,
      price: priceValue
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <Input
          value={titleValue}
          onChange={handleTitleChange}
        />
        {validationTitle && <Error>Введите название</Error>}
        <Input
          value={descriptionValue}
          onChange={handleDescriptionChange}
        />
        <Input
          value={imageSrc}
          onChange={handleImageChange}
        />
        <Input
          value={priceValue}
          onChange={handlePriceChange}
        />
        <Button type="submit" title="Create"></Button>
      </Wrapper>
    </form>

  );
}

export default ProductCreatingForm;