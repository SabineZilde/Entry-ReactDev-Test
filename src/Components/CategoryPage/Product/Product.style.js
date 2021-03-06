import styled from 'styled-components';

export const ActiveProductContainer = styled.div`
    height: 444px;
    width: 386px;
    padding: 16px;

    & button {
        display: none;
    }

    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
        button {
            position: absolute;
            margin: -100px 0 0 300px;
            background-color: transparent;
            display: block;
        }
    }
`

export const ImageContainer = styled.div`
    position: relative;
    height: 338px;
    width: 354px;
    margin-bottom: 24px;

`

export const ProductImage = styled.div`
    height: 338px;
    width: 354px;
    background-image: ${(props) =>
        `url(${props.backgroundImage})`
    };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;

`

export const OutOfStockLayer = styled.div`
    position: absolute;
    height: 338px;
    width: 354px;
    padding-top: 169px;
    background-color: #FFFFFF;
    color: #8D8F9A;
    opacity: 0.5;
    text-align: center;
    font-size: 24px;
`