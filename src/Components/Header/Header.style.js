import styled from 'styled-components';

export const HeaderContainer = styled.div`
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const HeaderButton = styled.button`
    border: none;
    background-color: white;
    padding: 28px 16px 32px;
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
        color: #5ECE7B;
        font-weight: 600;
    }

    &:focus {
        border-bottom: solid 2px #5ECE7B;
        color: #5ECE7B;
        font-weight: 600;
    }
`

export const CurrencyStyle = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
`

export const CurrencyButton = styled.button`
    background-color: white;
    border: none;
    padding: 0 25px 0 10px;
    cursor: pointer;
`

export const CartButton = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
`

export const DropdownContainer = styled.div`
    // display: none;
    position: absolute;
    background-color: #ffffff;
    min-width: 114px;
    /* overflow: auto; */
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
    margin-top: 10px;
    margin-left: -25px;
`

export const DropdownContent = styled.div`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    min-height: 169px;
    padding-left: 20px;
    justify-content: space-evenly;
`