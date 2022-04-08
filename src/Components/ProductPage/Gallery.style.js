import styled from "styled-components";

export const ThumbnailColumn = styled.div`
    display: flex;
    flex-direction: column;

    & img {
        width: 80px;
        margin: 0 30px 30px 0;
    }

    & button {
        display: flex;
        flex-direction: column;
    }
`

export const LargeImgColumn = styled.div`
    height: 510px;
    width: 610px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-image: ${(props) =>
        `url(${props.backgroundImg})`
        };
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
`