// Tradutor.tsx
import { useState } from "react";
import Post from "../../components/Post";
import { Traducao } from "../../scripts/arey";
import SelectTradutor from "../../components/SelectTradultor";
import { ContainerTradultor } from "./styles";
import { ClearButton } from "../../components/Post/styles";
import Lixeira from "../../components/Lixeira";

const Tradutor = () => {
    const [areysList, setAreysList] = useState<Traducao[][]>([]);

    const handleAreysUpdate = (updatedAreysList: Traducao[][]) => {
        setAreysList(updatedAreysList);
    };

    const handleClearAreys = () => {
        setAreysList([]); // Limpa todos os conjuntos de traduções
    };

    return (
        <ContainerTradultor>
            <SelectTradutor onAreysUpdate={handleAreysUpdate} />
            {areysList.length > 0 && (
                <ClearButton onClick={handleClearAreys}>
                    <Lixeira />
                </ClearButton>
            )}
            {areysList.map((areys, index) => (
                <Post key={index} areys={areys} />
            ))}
        </ContainerTradultor>
    );
};

export default Tradutor;
