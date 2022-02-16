import styled from 'styled-components';

export const ActiveProductContainer = styled.div`
    height: 444px;
    width: 386px;
    padding: 16px;

    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`

export const ProductImage = styled.div`
    height: 338px;
    width: 354px;
    margin-bottom: 24px;
    background-image: ${(props) =>
        `url(${props.backgroundImage})`
        };
    background-position: center center;
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-size: 90% auto;
    /* box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.1); */
`

export const CartButton = styled.button`
    position: absolute;
    margin: -100px 0 0 300px;
    background-color: transparent;
`