import styled from 'styled-components';

export const Container = styled.div`
    margin: 80px 100px 190px;
    position: relative;
`

export const ProductContainer = styled.div`
    margin-top: 103px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    &:after {
        content: '';
        flex: 0 0 32%;
        max-width: 386px;
    }
`

export const ActiveProductContainer = styled.div`
    height: 444px;
    width: 386px;
    
    &:hover {
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
`

export const Image = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 18px 0 24px;

`