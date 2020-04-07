import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 12px;
    font-family: Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
