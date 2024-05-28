import styled from 'styled-components'

export const MyButton = styled.button`
    padding: 4px 16px;
    background-color: grey;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: darkgrey;
    }

    &:active {
        background-color: darkslategray;
        transform: scale(0.98);
`;