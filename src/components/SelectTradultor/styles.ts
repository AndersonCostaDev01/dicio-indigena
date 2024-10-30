import styled from "styled-components";

export const Seletor = styled.select `
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.corNavbar};
    background-color: ${props => props.theme.corPost};
    color: ${props => props.theme.corNavbar};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
export const ContainerSeletor = styled.div `
    display: grid;
    grid-template-columns: auto 120px;
    gap: 10px;
`

export const ButtonSeletor = styled.button `
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 2px solid ${props => props.theme.corNavbar};
    background-color: ${props => props.theme.corPost};
    color: ${props => props.theme.corNavbar};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
`
