import styled from 'styled-components'

export const MyInput = styled.input`
    width: 100%;
    padding: 8px 0 8px 0;   
    background-color: darkgrey;
    border: 1px solid grey;
    border-radius: 4px;

    &:focus {
        border-color: blue;
        outline: none;
    }
`