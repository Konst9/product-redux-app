import React from 'react';
import { MyButton } from "./button.styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <MyButton>{title}</MyButton>
  );
}

export default Button;