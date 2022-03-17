import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 80px 100px;
`

export const ThumbnailColumn = styled.div`
    display: flex;
    flex-direction: column;

    & img {
        width: 80px;
        margin: 0 30px 30px 0;
    }

    & button {
        display: flex;
        flex-direction: column;
    }
`

export const LargeImgColumn = styled.div`
    height: 510px;
    width: 610px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-image: ${(props) =>
        `url(${props.backgroundImg})`
        };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`

export const ProductDetailColumn = styled.div`
    margin-left: 100px;
    width: 410px;
    display: flex;
    flex-direction: column;
`

export const DescriptionRow = styled.div`
    width: 292px;
`

export const Attributes = styled.div`
    display: inline-flex;
    overflow: hidden;

    & label {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #1D1F22;
        color: #292929;
        height: 45px;
        width: 63px;
        margin: 0 10px 10px 0;
        cursor: pointer; 
    }

    & input {
        display: none;
    }
     
    & input:checked + label{
        background-color: #1D1F22;
        color: #FFFFFF;
        border: 3px solid #A6A6A6;
     }
`