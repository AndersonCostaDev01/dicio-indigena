// App.tsx

import { useState } from "react";
import { ThemeProvider } from "styled-components";
import EstiloGlobal, { Container } from "./styles";
import tema from "./themes/main";
import Navbar from "./containers/Navbar";
import Projeto from "./containers/Projeto";
import Sobre from "./containers/Sobre";
import Todas from "./containers/Todas";
import Tradultor from "./containers/Tradultor";

function App() {
  const [activeComponent, setActiveComponent] = useState<string>("Sobre");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Tradultor":
        return <Tradultor />;
      case "Todas":
        return <Todas />;
      case "Sobre":
        return <Sobre />;
      case "Projeto":
        return <Projeto />;
      default:
        return null;
    }
  };

  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <Navbar setActiveComponent={setActiveComponent} />
      <Container>
        {renderComponent()}
      </Container>
    </ThemeProvider>
  );
}

export default App;
