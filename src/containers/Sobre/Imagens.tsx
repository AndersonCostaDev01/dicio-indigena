import styled from 'styled-components'
import ImagePrimarySrc from './Lingua indigena.jpg'
import ImageYanomamiSrc from './Yanomami.jpg'
import ImageTupiSrc from './Tupi.jpg'
import ImageXavanteSrc from './Xavante.jpg'

export const ImagePrimary = () => (
  <StyledImage src={ImagePrimarySrc} alt="Imagem da língua indígena" />
)
export const ImageYanomami = () => (
  <StyledImage src={ImageYanomamiSrc} alt="Imagem de um xamã Yanomami" />
)
export const ImageTupi = () => (
    <StyledImage src={ImageTupiSrc} alt='Imagem do deus do sol Tupi' />
)
export const ImageXavante = () => (
    <StyledImage src={ImageXavanteSrc} alt='Imagem de uma mulhor com o sol e a lua de fundo' />
) 

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 15px 0;
  border-radius: 15px;
  text-align: center;
`;
