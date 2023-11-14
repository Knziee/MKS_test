import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, h1, h2, h3, p, ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }
  body {
    font-family: 'Montserrat'
  }
`;

export default GlobalStyles;
