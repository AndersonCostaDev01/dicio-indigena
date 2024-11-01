import styled from "styled-components";

export const ContainerSobre = styled.div`
    padding: 20px;
    background-color: ${props => props.theme.corPost};
    border: 2px solid ${props => props.theme.corNavbar};
    border-radius: 15px;
    margin: 20px;
`
export const TituloSobre = styled.h2 `
    color: ${props => props.theme.corNavbar};
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
`

export const TextoSobre = styled.p `
    color: ${props => props.theme.corNavbar};
    text-align: center; 
    font-size: 25px;
    justify-content: center;
`
export const ContainerSobre2 = styled.div `
    padding: 20px;
    background-color: ${props => props.theme.corPost};
    border: 2px solid ${props => props.theme.corNavbar};
    border-radius: 15px;
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    justify-content: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

