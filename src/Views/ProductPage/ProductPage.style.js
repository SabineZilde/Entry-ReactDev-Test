import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 80px 100px;
`

export const ThumbnailColumn = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;

    & img {
        width: 80px;
        margin: 0 30px 30px 0;
    }
`

export const LargeImgColumn = styled.div`
    border: 1px solid red;
    height: 510px;
    width: 610px;
    display: flex;
    justify-content: center;
    
    & img {
        height: 510px;
    }
`

export const ProductDetailColumn = styled.div`
    border: 1px solid red;

    margin-left: 100px;
    width: 410px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const DescriptionRow = styled.div`
    width: 292px;
`
