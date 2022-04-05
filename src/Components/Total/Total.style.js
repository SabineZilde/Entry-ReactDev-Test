import styled from "styled-components";

export const TotalDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: ${props => props.cart ? '20px 0 0' : '23px 0'};
    padding: ${props => props.cart ? '20px 0 0' : '0 0 18px'};
    border-top: ${props => props.cart && '1px solid #E5E5E5'};
    justify-content: ${props => props.cart ? 'flex-end' : 'space-between'};
    font-size: ${props => props.cart && '26px'};
    font-weight: 700;
`