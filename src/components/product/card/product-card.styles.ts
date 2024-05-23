import styled from 'styled-components';

export const Card = styled.div`
    height: 300px;
    padding: 8px;
    display: flex;
    gap: 24px;
    border: 1px solid black;
`

export const CardImg = styled.img`
    width: 124px;
    height: 124px;
`

export const CardData = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
`

export const CardHeader = styled.h1`
    font-size: 16px;
    font-weight: 500;
`

export const CardContent = styled.div`
    display: flex;
    gap: 24px;
`

export const CardDescription = styled.p`
    font-size: 12px;
`

export const CardPrice = styled.p`
    font-size: 12px;
`