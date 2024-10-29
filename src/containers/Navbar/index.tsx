import { useState } from 'react';
import menu from './menu-svgrepo-com.svg';
import indianIcon from './indian-1-svgrepo-com.svg';
import { ButtonNavbar, ContainerButtons, Divimg, Logo, Menu, MenuHamburger, NavBar } from './styles';

interface NavbarProps {
  setActiveComponent: (component: string) => void;
}

const Navbar = ({ setActiveComponent }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <NavBar>
      <Divimg>
        <Logo src={indianIcon} />
      </Divimg>
      <Divimg>
        <Menu onClick={toggleMenu}>
          <MenuHamburger src={menu} />
        </Menu>
      </Divimg>
      <ContainerButtons isOpen={isMenuOpen}>
        <ButtonNavbar onClick={() => setActiveComponent("Tradultor")}>Tradultor</ButtonNavbar>
        <ButtonNavbar onClick={() => setActiveComponent("Todas")}>Todas</ButtonNavbar>
        <ButtonNavbar onClick={() => setActiveComponent("Sobre")}>Sobre</ButtonNavbar>
        <ButtonNavbar onClick={() => setActiveComponent("Projeto")}>Projeto</ButtonNavbar>
      </ContainerButtons>
    </NavBar>
  );
};

export default Navbar;
