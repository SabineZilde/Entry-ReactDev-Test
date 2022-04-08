import styled from "styled-components";

export const AttributesDiv = styled.div`
    display: inline-flex;
    overflow: hidden;
`

export const Label = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #1D1F22;
    color: #292929;
    height: 45px;
    width: 63px;
    margin: 0 10px 10px 0;
    cursor: pointer; 
    background-color: ${props => props.bgColor};
`

export const Input = styled.input`
    display: none;
     
    &:checked + ${Label} {
        background-color: ${props => props.checkedColor};
        color: #FFFFFF;
        border: ${props => props.checkedBorder};
     }
`