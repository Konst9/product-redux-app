import styled from 'styled-components';

export const Card = styled.div`
    box-sizing: border-box;
    width: 30%;
    min-height: 200px;
    display: flex;
    gap: 16px;
`

export const CardImgContainer = styled.div`
    width: 30%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const CardImg = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

export const CardData = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 350px;
`

export const CardHeader = styled.h1`
    font-size: 16px;
    font-weight: 500;
    margin: 0;
`

export const CardContent = styled.div`
    display: flex;
    gap: 24px;
    flex: 1;
`

export const CardDescription = styled.p`
    font-size: 10px;
    margin: 0;
`

export const CardPrice = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin: 0;
`