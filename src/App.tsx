// import { Traducoes } from "./scripts/arey";

import { ThemeProvider } from "styled-components";
import EstiloGlobal from "./styles";
import tema from "./themes/main";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <EstiloGlobal />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
