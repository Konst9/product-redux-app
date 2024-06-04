import React, { ChangeEvent, useEffect, useState } from 'react';
import { MyInput } from './input.style';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  defaultValue?: string;
  innerClassName?: string;
}

const Input: React.FC<InputProps> =
  ({
     value,
     defaultValue,
     innerClassName,
     onChange,
     ...rest
  }) => {

  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '')
    useEffect(() => {
      if (value !== undefined) {
        setInnerValue(value)
      }
    }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <MyInput
      value={innerValue}
      onChange={handleChange}
      className={innerClassName}
      {...rest}
    />
  );
}

export default Input;