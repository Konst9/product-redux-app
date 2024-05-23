import styled from 'styled-components';

export const Card = styled.div`
    height: 300px;
    padding: 0 48px;
    display: flex;
    gap: 16px;
`

export const CardImg = styled.img`
    max-width: 124px;
    height: auto;
    object-fit: contain;
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