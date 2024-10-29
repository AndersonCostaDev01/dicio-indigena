import { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

body {
    background-color: ${props => props.theme.corFundo};
}
`

export default EstiloGlobal