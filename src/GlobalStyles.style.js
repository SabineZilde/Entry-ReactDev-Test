import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   * {
        font-family: 'Raleway', sans-serif;
        font-size: 100%;
        color: #1D1F22;
        text-decoration: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        vertical-align: baseline;
        background: transparent;
  }

  button {
        border: none;
        background-color: white;
        cursor: pointer;
  }
`