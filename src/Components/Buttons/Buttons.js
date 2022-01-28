import React from "react";
import {
  Button,
  ButtonLarge,
  QuantityButton,
  AttributeButton,
} from "./Buttons.style";

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <h2>Button parade</h2>
        <div>
          <Button primary>CHECK OUT</Button>
          <Button>VIEW BAG</Button>
          <ButtonLarge primary>ADD TO CART</ButtonLarge>
        </div>
        <div>
          <QuantityButton>+</QuantityButton>
          <QuantityButton>-</QuantityButton>
          <QuantityButton mini>+</QuantityButton>
          <QuantityButton mini>-</QuantityButton>
        </div>
        <div>
          <AttributeButton>S</AttributeButton>
          <AttributeButton>M</AttributeButton>
          <AttributeButton mini>L</AttributeButton>
        </div>
        <div>
          <AttributeButton color='red'></AttributeButton>
          <AttributeButton color='green'></AttributeButton>
          <AttributeButton color='blue' mini></AttributeButton>
          <AttributeButton color='grey' mini></AttributeButton>
          <AttributeButton color='pink' mini></AttributeButton>
        </div>
      </div>
    );
  }
}

export default Buttons;
