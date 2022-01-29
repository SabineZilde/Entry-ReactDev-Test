import styled from "styled-components";


export const FontRaleway = styled.div`
    font-size: ${props => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '400'};
    margin: ${props => props.margin};
`

export const FontRoboto = styled(FontRaleway)`
    font-family: ${props => props.condensed ? 'Roboto Condensed' : 'Roboto'};
    line-height: 25.59px;
`