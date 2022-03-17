import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.primary ? "#5ECE7B" : "#FFFFFF"};
  color: ${props => props.primary ? "#FFFFFF" : "#1D1F22"};
  border: ${props => props.primary ? "1px solid #5ECE7B" : "1px solid #1D1F22"};

  margin: ${props => props.margin};

  font-size: 14px;
  font-weight: 600;
  height: 43px;
  width: 140px;

  &:hover {
      background: ${props => props.primary ? '#38b859' : '#A6A6A6'}
  }

  &:focus {
    outline: 3px solid rgba(225,225,225,0.5);
  }
`;

export const ButtonLarge = styled(Button)`
    font-size: 16px;
    height: 52px;
    width: 292px;
    margin: 30px 0;
`

export const QuantityButton = styled.button`
    height: ${props => props.mini ? '24px' : '45px'};
    width: ${props => props.mini ? '24px' : '45px'};
    font-size: ${props => props.mini ? '14px' : '24px'};
    
    border: 1px solid #1D1F22;
    
    &:hover {
        background: #A6A6A6;
    }

    &:active {
        background: #77787A;
  }
`

export const AttributeButton = styled.button`
    border: 1px solid #1D1F22;
    color: #292929;
    background: ${props => props.color ? props.color : 'none'};
    
    height: ${props => props.mini ? '24px' : '45px'};
    width: ${props => props.mini ? '24px' : '63px'};
    font-size: ${props => props.mini ? '14px' : '16px'};

    margin: ${props => props.margin};

    &:hover {
        background: ${props => props.color ? '' : '#A6A6A6'};
    }

    &:focus {
        background: ${props => props.color ? '' : '#1D1F22'};
        outline: ${props => props.color ? '3px solid #A6A6A6' : ''};
        color: #FFFFFF;
    }
`

export const CloseButton = styled.button`
    display: flex;
    color: red;
    font-weight: 700;
    float: right;
    margin: ${props => props.margin};
`