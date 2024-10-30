import styled from 'styled-components';

export const NavBar = styled.div`
    background-color: ${props => props.theme.corNavbar};
    display: flex;

    @media (max-width: 768px) {
        display: block;
    }
`;

export const Logo = styled.img`
    width: 80px;
    height: auto;
    padding: 35px;
`;

export const ContainerButtons = styled.div<{ isOpen: boolean }>`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        display: ${props => (props.isOpen ? 'flex' : 'none')};
    }
`;

export const ButtonNavbar = styled.button`
    color: ${props => props.theme.corFundo};
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 32px;
    font-weight: bold;

    @media (max-width: 768px) {
        padding-bottom: 15px;
        font-size: 20px;
    }
`;

export const Divimg = styled.div`
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;

export const Menu = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        transition: .5s;
    }
`;

export const MenuHamburger = styled.img`
    width: 30px;
    height: auto;
    padding-bottom: 30px;
`;