import styled from 'styled-components';

export const NavBarButton = styled.button`
    border: none;
    background-color: white;
    padding: 28px 16px 32px;
    margin-left: 100px;
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: ${(props) => props.fontWeight};

    &:hover {
        color: #5ECE7B;
    }

    &:focus {
        border-bottom: solid 2px #5ECE7B;
        color: #5ECE7B;
    }
`