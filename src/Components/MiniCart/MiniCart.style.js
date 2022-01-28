import styled from "styled-components";


export const MiniCartBackground = styled.div`
    position: absolute;
    background-size: cover;
    background-color: rgba(57, 55, 72, 0.22);
    height: 900px;
    width: 100%;
`

export const MiniCartContainer = styled.div`
    float: right;
    background: #FFFFFF;
    width: 325px;
    margin-right: 100px;
    padding: 8px 16px 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: 23px 0;
    padding-bottom: 18px;

    font-weight: ${props => props.total ? '700' : ''};
    justify-content: space-between;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: ${props => props.middle ? 'center' : ''};

    width: ${props => props.colWidth};
`

export const ProductDescription = styled.div`
    font-weight: 300;
    line-height: 25.6px;
`

export const ProductPrice = styled.div`
    font-weight: 500;
`

export const ProductImage = styled.div`
    height: 137px;
    width: 105px;
    background-image: ${(props) =>
        `url(${props.backgroundImage})`
        };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`