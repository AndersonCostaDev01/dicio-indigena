// Certifique-se de que o arquivo "../../scripts/arey" exporta um array com objetos do tipo Traducao
import { Traducoes, Traducao } from "../../scripts/arey";
import { Seletor } from "./styles";

const SelectTradutor = () => {
    return (
        <Seletor>
            {Traducoes.map((traducao: Traducao) => (
                <option key={traducao.palavra} value={traducao.traducaoTupi}>
                    {traducao.palavra}
                </option>
            ))}
        </Seletor>
    );
};

export default SelectTradutor;
