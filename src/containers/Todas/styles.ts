import styled from "styled-components";

export const ContainerTodas = styled.div `
    padding: 20px;
    width: calc(100% - 40px);
    border-radius: 10px;
    margin-top: 20px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) { 
        grid-template-columns: 1fr;
    }

    p {
        padding: 3px;
        color: ${props => props.theme.corNavbar};
        font-weight: bold;
        font-size: 20px;
    }
    
`

export const ItensGrid = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    background-color: ${props => props.theme.corPost};
    border: 2px solid ${props => props.theme.corNavbar};
    border-radius: 10px;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`