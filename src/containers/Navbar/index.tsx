import indianIcon from './indian-1-svgrepo-com.svg';
import { ButtonNavbar, ContainerButtons, Logo, NavBar } from './styles';


const Navbar = () => {
    return (
        <NavBar>
            <Logo
            src={indianIcon}/>
            <ContainerButtons>
                <ButtonNavbar>Tradultor</ButtonNavbar>
                <ButtonNavbar>Todas</ButtonNavbar>
                <ButtonNavbar>Sobre</ButtonNavbar>
                <ButtonNavbar>Projeto</ButtonNavbar>
            </ContainerButtons>
        </NavBar>
    );
}

export default Navbar;
