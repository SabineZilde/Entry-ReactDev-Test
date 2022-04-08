import React from "react";
import { AttributesDiv, Input, Label } from "./Attributes.style";
import { FontRoboto } from "../CommonStyles/Fonts.style";
import MainContext from "../../Context/MainContext";

class Attributes extends React.Component {
  handleAttributes = () => {
    const { saveAttributes } = this.context;
    return this.props.product.attributes.map((attribute, id) => (
      <div key={id}>
        <FontRoboto
          condensed
          fontSize="18px"
          fontWeight="700"
          margin="10px 0"
          capitalize
        >
          {attribute.name}:
        </FontRoboto>
        {attribute.items.map((item) => {
          return (
            <AttributesDiv key={item.id}>
              <Input
                type="radio"
                id={`${attribute.name} ${item.id}`}
                name={attribute.name}
                value={item.value}
                checkedColor={attribute.name !== "Color" && "#1D1F22"}
                checkedBorder={
                  attribute.name === "Color" && "3px solid #A6A6A6"
                }
                onClick={() => {
                  saveAttributes(attribute.name, item.value);
                }}
              />
              <Label
                htmlFor={`${attribute.name} ${item.id}`}
                bgColor={attribute.name === "Color" && item.value}
              >
                {attribute.name !== "Color" && item.value}
              </Label>
            </AttributesDiv>
          );
        })}
      </div>
    ))
  }
  render() {
    return this.handleAttributes();
  }
}

Attributes.contextType = MainContext;

export default Attributes;
