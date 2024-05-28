import styled from 'styled-components'
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';

export const FixedOverlay = styled.div`
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: #212121;
    border-radius: 8px;
    width: 500px;
    height: auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
`

export const CloseWrapper = styled.div`
    width: 28px;
    height: 28px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  &:hover {
    fill: darkgrey;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`

export const Main = styled.div`
    padding: 24px;
    font-size: 16px;
`

