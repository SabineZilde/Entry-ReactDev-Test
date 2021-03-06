import styled from "styled-components";

export const MiniCartContainer = styled.div`
    float: right;
    background: #FFF;
    width: 325px;
    margin-right: 100px;
    padding: 8px 16px 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 23px 0;
    padding-bottom: 18px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: ${props => props.middle ? 'center' : ''};

    width: ${props => props.colWidth};
`

export const ProductImage = styled.div`
    height: 137px;
    width: 105px;
    background-image: ${(props) =>
        `url(${props.backgroundImage})`
        };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`