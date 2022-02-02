import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 100px;
`

export const HeaderButton = styled.button`
    padding: 28px 16px 32px;
    border-bottom: solid 2px #FFFFFF;
    text-transform: uppercase;

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
    padding: 0 25px 0 10px;
    font-size: 10px;
`

export const CartButton = styled.button`
    display: flex;
`

export const DropdownContainer = styled.div`
    position: absolute;
    background-color: #ffffff;
    min-width: 114px;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
    margin-top: 10px;
    margin-left: -25px;
`

export const DropdownContent = styled.div`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    min-height: 230px;
    justify-content: space-evenly;
    
    & button:hover {
        background-color: rgba(0,0,0,0.1);
        border-radius: 50px;
    }
`