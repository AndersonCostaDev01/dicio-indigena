import styled, { createGlobalStyle } from "styled-components";

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

export const Container = styled.div `
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`

export default EstiloGlobal