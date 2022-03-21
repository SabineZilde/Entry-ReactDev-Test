import styled from "styled-components";

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

export const ImgContainer = styled.div` 
    position: relative;
    display: flex;
    align-items: center;
    & button {
        display: block;
    }
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

export const ArrowButton = styled.button`
    display: none;
    color: #8D8F9A;
    font-size: 25px;
    position: absolute;
    background-color: transparent;
    margin-left: ${(props => props.left ? '15px' : '115px')};
`

export const Attributes = styled.div` 
    display: flex;
    align-items: center;
`