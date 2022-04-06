import styled, { keyframes } from "styled-components";

const rotate = keyframes` 
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const Loader = styled.div`
    margin: 20px auto;
    border: 4px solid #EAF0F6;
    border-radius: 50%;
    border-top: 4px solid #5ECE7B;
    width: 40px;
    height: 40px;
    animation: ${rotate} 4s linear infinite;
  
  /* @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  } */
`