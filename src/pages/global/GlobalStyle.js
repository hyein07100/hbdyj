import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'UhBeeSe_hyun';
    src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_five@.2.0/UhBeeSe_hyun.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Cafe24Nyangi-W-v1.0';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/Cafe24Nyangi-W-v1.0.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  /* body {
    font-family: 'UhBeeSe_hyun', sans-serif; 
  }

  .cafe24-font {
    font-family: 'Cafe24Nyangi-W-v1.0', sans-serif;
  } */
`;

export default GlobalStyle;
