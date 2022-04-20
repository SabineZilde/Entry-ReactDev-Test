import React from "react";
import { FontRoboto } from "../../CommonStyles/Fonts.style";
import Attribute from "./Attribute";

class Attributes extends React.Component {
  handleAttributes = () => {
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
          return <Attribute
            attribute={attribute}
            item={item}
            key={item.id}
          />
        })}
      </div>
    ));
  };

  render() {
    return this.handleAttributes();
  };
};

export default Attributes;
