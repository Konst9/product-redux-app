import React from 'react';
import {
  HeaderWrapper,
  LogoImg,
  LogoWrapper,
  LogoText,
  MenuWrapper
} from './header.styles';
import logoBird from "../assets/icons/logo_bird.svg";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';


function Header() {
  const primary = indigo[500];
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImg src={logoBird} alt='logo'/>
        <LogoText>smile shop</LogoText>
      </LogoWrapper>
      <MenuWrapper>
        <IconButton aria-label="notification" style={{ color: primary }}>
          <NotificationsNoneOutlinedIcon style={{ color: primary }} />
        </IconButton>
        <IconButton aria-label="cart" style={{ color: primary }}>
          <ShoppingCartOutlinedIcon style={{ color: primary }} />
        </IconButton>
        <IconButton aria-label="logIn" style={{ color: primary }}>
          <LoginOutlinedIcon style={{ color: primary }} />
        </IconButton>
      </MenuWrapper>
    </HeaderWrapper>
  );
}

export default Header;