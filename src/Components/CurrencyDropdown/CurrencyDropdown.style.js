import styled from 'styled-components';

export const DropdownContainer = styled.div`
position: absolute;
background-color: #ffffff;
min-width: 114px;
box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.1);
z-index: 1;
margin-top: 25px;
margin-left: -75px;
`

export const DropdownContent = styled.div`
text-decoration: none;
display: flex;
flex-direction: column;
min-height: 230px;
justify-content: space-evenly;

& button:hover {
    font-weight: 600;
}

& button:focus {
    font-weight: 800;
}
`