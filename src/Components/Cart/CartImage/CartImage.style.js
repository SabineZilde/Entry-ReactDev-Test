import styled from 'styled-components';

export const ImgContainer = styled.div` 
    position: relative;
    display: flex;
    align-items: center;
    & button {
        display: block;
    }
`

export const ProductImage = styled.div`
    height: 185px;
    width: 141px;
    background-image: ${(props) =>
        `url(${props.backgroundImage})`
    };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`

export const ArrowButton = styled.button`
    display: none;
    color: #8D8F9A;
    font-size: 25px;
    position: absolute;
    background-color: transparent;
    margin-left: ${(props => props.left ? '15px' : '115px')};
`