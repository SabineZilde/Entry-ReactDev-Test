import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 100px;
    background-color: #FFFFFF;
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
    z-index: 2;
`

export const CurrencyButton = styled.div`
    display: flex;
    align-items: center;
    padding: 0 25px 0 0;
    cursor: pointer;
`

export const ArrowStyle = styled.div`
    margin-left: 5px;
    font-size: 10px;
`

export const CartButton = styled.button`
    display: flex;
    position: relative;

    & span {
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -9px;
        right: -12px;
        background-color: #1D1F22;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`

export const DropdownContainer = styled.div`
    position: absolute;
    background-color: #ffffff;
    min-width: 114px;
    box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
    z-index: 1;
    margin-top: 25px;
    margin-left: -45px;
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