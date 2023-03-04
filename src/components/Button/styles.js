import styled from 'styled-components';

export const ButtonContainer = styled.button `
    width: 100%;
    height: 100%;
    padding: 5px;

    display: flex;
    justify-content: center;
    background-color: #828182;
    border: none;
    border-radius: 5px;

    font-size: 2rem;
    font-family: 'Roboto';
    color: #FFFFFF;

    &:hover {
        opacity: .6;
    }

    &:nth-child(4) {
        background-color: #f1240a;
    }
`