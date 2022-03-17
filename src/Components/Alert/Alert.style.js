import styled from "styled-components";

export const AlertContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-color: rgba(57, 55, 72, 0.22); 
    height: 100vh;
    width: 100vw;
    z-index: 3;
`
export const AlertBckground = styled.div`
    background-color: #FFF;
    padding: 20px;
    width: 332px;
`

export const Icon = styled.div`
    height: 50px;
    margin: 20px 0 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${(props) =>
        `url(${props.backgroundImg})`
    };
`