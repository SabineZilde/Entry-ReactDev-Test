import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
        font-family: 'Raleway', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
  }

  button {
        border: none;
        background-color: white;
        cursor: pointer;
  }

  h2 {
      font-size: 42px;
      font-weight: 400;
  }
`