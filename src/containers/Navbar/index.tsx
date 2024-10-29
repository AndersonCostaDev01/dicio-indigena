// Navbar.tsx

import indianIcon from './indian-1-svgrepo-com.svg';
import { ButtonNavbar, ContainerButtons, Logo, NavBar } from './styles';

interface NavbarProps {
  setActiveComponent: (component: string) => void;
}

const Navbar = ({ setActiveComponent }: NavbarProps) => {
  return (
    <NavBar>
      <Logo src={indianIcon} />
      <ContainerButtons>
        <ButtonNavbar onClick={() => setActiveComponent("Tradultor")}>Tradultor</ButtonNavbar>
        <ButtonNavbar onClick={() => setActiveComponent("Todas")}>Todas</ButtonNavbar>
        <ButtonNavbar onClick={() => setActiveComponent("Sobre")}>Sobre</ButtonNavbar>
        <ButtonNavbar onClick={() => setActiveComponent("Projeto")}>Projeto</ButtonNavbar>
      </ContainerButtons>
    </NavBar>
  );
};

export default Navbar;
