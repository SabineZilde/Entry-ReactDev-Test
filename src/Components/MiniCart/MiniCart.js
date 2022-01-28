import React from "react";
import { MiniCartContainer, MiniCartBackground } from "./MiniCart.style.js";

class MiniCart extends React.Component {
  render() {
    return (
      <MiniCartBackground>
        <MiniCartContainer>This is mini cart</MiniCartContainer>
      </MiniCartBackground>
    );
  }
}

export default MiniCart;
