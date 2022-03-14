import styled from "styled-components";

export const CartContainer = styled.div`
    margin: 80px 242px 54px 100px;
`

export const ProductContainer = styled.div`
    margin-top: 20px;
    border-top: 1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
`

export const ProductDescription = styled.div`
    min-height: 215px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
`

export const CountAndImg = styled.div`
    display: flex;
    margin: 21px 0;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 12px;
`

export const ProductImage = styled.div`
    height: 185px;
    width: 141px;
    background-image: ${(props) =>
        `url(${props.backgroundImage})`
    };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`

export const Close = styled.button`
    display: flex;
    color: red;
    font-weight: 700;
    margin: -10px 5px 0 0;
`

export const Total = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #E5E5E5;
`

export const Attributes = styled.div` 
    display: flex;
    align-items: center;
`