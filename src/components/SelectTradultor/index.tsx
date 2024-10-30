// SelectTradutor.tsx
import { ButtonSeletor, ContainerSeletor, Seletor } from "./styles";
import { Traducoes, Traducao } from "../../scripts/arey";
import { useState } from "react";

interface SelectTradutorProps {
    onAreysUpdate: (areysList: Traducao[][]) => void; // Atualizado para uma lista de listas de traduções
}

const SelectTradutor = ({ onAreysUpdate }: SelectTradutorProps) => {
    const [selecionado, setSelecionado] = useState<string>("");
    const [usados, setUsados] = useState<string[]>([]);
    const [areysList, setAreysList] = useState<Traducao[][]>([]); // Armazena múltiplos conjuntos de traduções

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelecionado(e.target.value);
    };

    const handleTraduzir = () => {
        if (selecionado) {
            if (!usados.includes(selecionado)) {
                setUsados((prev) => [...prev, selecionado]);
            }
            handleFilter();
        }
    };

    const handleFilter = () => {
        const areyFiltrado = Traducoes.filter((tradu) => tradu.palavra === selecionado);
        const updatedAreysList = [...areysList, areyFiltrado];
        setAreysList(updatedAreysList);
        onAreysUpdate(updatedAreysList); // Atualiza a lista de conjuntos de traduções
    };

    return (
        <ContainerSeletor>
            <Seletor value={selecionado} onChange={handleChange}>
                <option value=""> </option>
                {Traducoes.map((traducoes: Traducao) => (
                    <option key={traducoes.id} value={traducoes.palavra}>
                        {traducoes.palavra}
                    </option>
                ))}
            </Seletor>
            <ButtonSeletor onClick={handleTraduzir}>Traduzir</ButtonSeletor>
        </ContainerSeletor>
    );
};

export default SelectTradutor;
