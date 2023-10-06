import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  button,
  a {
    all: unset;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none
  }

`;

export default GlobalStyle;
