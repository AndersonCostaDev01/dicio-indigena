import { Traducoes } from "../../scripts/arey"
import { ContainerTodas, ItensGrid } from "./styles"

const Todas = () => {

    return (
        <ContainerTodas>
            {Traducoes.map((tradu) => (
                <ItensGrid>
                    <p>Palavra: {tradu.palavra}</p>
                    <p>Tradução Tupi: {tradu.traducaoTupi}</p>
                    <p>Tradução Yanomami: {tradu.traducaoYanomami}</p> 
                    <p>Tradução Xavante: {tradu.traducaoXavante}</p>
                </ItensGrid>
            ))} 
        </ContainerTodas>
    )
}

export default Todas