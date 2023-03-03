import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    width: 19rem;
    height: auto;
    padding: 1rem .5rem;

    background-color: #464247;
    border-radius: 1.5rem;
`

export const ContentButtons = styled.div `
    padding: .5rem 1.2rem 1rem; 
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem
`