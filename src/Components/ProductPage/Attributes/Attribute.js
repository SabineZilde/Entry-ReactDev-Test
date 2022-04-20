import React from 'react';
import MainContext from '../../../Context/MainContext';
import { AttributesDiv, Input, Label } from "./Attributes.style";

class Attribute extends React.Component {
  state = {
    color: '',
    border: '',
    bgColor: '',
    value: ''
  };

  componentDidMount() {
    const { attribute, item } = this.props;
    attribute.name === "Color" && this.setState({
      border: "3px solid #A6A6A6",
      bgColor: item.value
    });
    attribute.name !== "Color" && this.setState({
      color: "#1D1F22",
      value: item.value
    });
  };

  render() {
    const { attribute, item } = this.props;
    const { saveAttributes } = this.context;
    const { color, border, bgColor, value } = this.state;
    return (
      <AttributesDiv>
        <Input
          type="radio"
          id={`${attribute.name} ${item.id}`}
          name={attribute.name}
          value={item.value}
          checkedColor={color}
          checkedBorder={border}
          onClick={() => {
            saveAttributes(attribute.name, item.value);
          }}
        />
        <Label
          htmlFor={`${attribute.name} ${item.id}`}
          bgColor={bgColor}
        >
          {value}
        </Label>
      </AttributesDiv>
    );
  };
};

Attribute.contextType = MainContext;

export default Attribute;