import styled from "styled-components";

export const NavBar = styled.div`
    background-color: ${props => props.theme.corNavbar};
    display: flex;
`

export const Logo = styled.img`
    width: 80px;
    height: auto;
    padding: 35px;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
`

export const ButtonNavbar = styled.button`
    color: ${props => props.theme.corFundo};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 32px;
    font-weight: bold;
`
