import React, { useState } from 'react';
import Input from '../../../utils/input/input';
import Button from '../../../utils/button/button';
import { Wrapper, Error } from './productCreatingForm.styles';

function ProductCreatingForm( {onSubmit}: any ) {
  const [titleValue, setTitleValue] = useState('title');
  const [descriptionValue, setDescriptionValue] = useState('description');
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      title: titleValue,
      description: descriptionValue,
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
        <Button type="submit" title="Create"></Button>
      </Wrapper>
    </form>

  );
}

export default ProductCreatingForm;