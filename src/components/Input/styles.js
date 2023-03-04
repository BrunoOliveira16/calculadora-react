import styled from "styled-components";

export const InputContainer = styled.div `
    width: 100%
    height: 100;
    padding: 1.2rem;
    background-color: #464247;
    border-radius: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 1.5rem;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 3rem;
        padding: 1rem;

        background-color: #abe2e7;
        border: 5px solid #70b5bb;
        border-radius: .5rem;

        font-size: 2rem;
        font-family: 'Roboto';
        text-align: right;
    }
     input:focus-visible {
        outline: none;
    }

`