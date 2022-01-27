import styled from 'styled-components';

export const ActiveProductContainer = styled.div`
    height: 444px;
    width: 386px;

    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`

export const ProductImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 0 24px;

`

export const ProductName = styled.div`
    padding: 0 16px 5px;
    font-size: 18px;
    font-weight: 300;
`

export const ProductPrice = styled.div`
    padding: 0 16px;
    font-size: 18px;
    font-weight: 500;
`

export const CartButton = styled.button`
    position: absolute;
    margin: -100px 0 0 300px;
    background-color: transparent;
`