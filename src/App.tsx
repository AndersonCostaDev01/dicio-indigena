import { Traducoes } from "./scripts/arey";

function App() {
  return (
    <>
      <h1>Traduções:</h1>
      <ul>
        {Traducoes.map((traducao, index) => (
          <li key={index}>
            {traducao.palavra} - {traducao.traducaoTupi}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
