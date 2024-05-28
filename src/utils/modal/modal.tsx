import React from 'react';
import {
  FixedOverlay,
  Wrapper,
  Header,
  CloseWrapper,
  StyledCloseIcon,
  Title,
  Main,
} from './modal.styles';
import Button from '../button/button';

interface ModalProps {
  title: string;
  description?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, description, onClose, children }) => {

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  }

  return (
    <>
      <FixedOverlay onClick={handleClose}></FixedOverlay>
      <Wrapper>
        <Header>
          <Title>{title}</Title>
          <CloseWrapper>
            <StyledCloseIcon onClick={handleClose}/>
          </CloseWrapper>
        </Header>
        <Main>
          {description && <p>{description}</p>}
          {children}
        </Main>
      </Wrapper>
    </>
  );
}

export default Modal;