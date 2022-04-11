import styled from 'styled-components';

export const AttributeRow = styled.div`
    display: flex;
    align-items: center;
    font-size: ${props => props.fontSize};
`

export const AttributeItem = styled.div`
    border: 1px solid #1D1F22;
    color: #292929;
    background: ${props => props.color ? props.color : 'none'};
    
    height: ${props => props.mini ? '24px' : '45px'};
    width: ${props => props.mini ? '24px' : '63px'};

    margin: ${props => props.margin};
`