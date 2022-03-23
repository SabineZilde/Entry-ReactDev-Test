import React from "react";
import { Link } from "react-router-dom";
import {
  MiniCartContainer,
  Column,
  Row,
  AttributeRow,
  ProductImage,
} from "./MiniCart.style.js";
import {
  Button,
  AttributeButton,
  QuantityButton,
} from "../Buttons/Buttons.style";
import { FontRaleway } from "../../Components/Fonts/Fonts.style";
import MainContext from "../../Context/MainContext";

class MiniCart extends React.Component {
  componentDidMount = () => {
    if (this.context.productsInCart.length > 0) {
      this.context.getTotal(this.context.contextCurrency);
    }
  };
  render() {
    const { productsInCart, contextCurrency, updateProductCount, total } =
      this.context;
    return (
      <MiniCartContainer>
        <div>
          <b>My Bag</b>, {productsInCart.length} items
        </div>
        {productsInCart.map((item) => {
          return (
            <Row key={item.id}>
              <Column colWidth="146px">
                <FontRaleway fontWeight="300">
                  {item.brand}
                  {item.name}
                </FontRaleway>
                {item.prices.map((price) => {
                  if (price.currency.symbol === contextCurrency) {
                    return (
                      <FontRaleway fontWeight="500" key={price.amount}>
                        {price.currency.symbol}
                        {price.amount}
                      </FontRaleway>
                    );
                  }
                  return "";
                })}
                {item.attributes.map((atr) => {
                  return (
                    <AttributeRow
                      key={atr.value + atr.name}
                    >
                      {atr.name}:&nbsp;
                      {atr.name === "Color" ? (
                        <AttributeButton
                          mini
                          margin="0 0 0 2px"
                          color={atr.value}
                        ></AttributeButton>
                      ) : (
                        <FontRaleway fontSize="12px" fontWeight="500">
                          {atr.value}
                        </FontRaleway>
                      )}
                    </AttributeRow>
                  );
                })}
              </Column>
              <Column middle>
                <QuantityButton
                  mini
                  onClick={() => updateProductCount(item.id, item.id)}
                >
                  +
                </QuantityButton>
                <FontRaleway fontWeight="500">{item.count}</FontRaleway>
                <QuantityButton
                  mini
                  onClick={() => {
                    if (item.count <= 1) {
                      return;
                    } else {
                      updateProductCount(item.id);
                    }
                  }}
                >
                  -
                </QuantityButton>
              </Column>
              <Column colWidth="105px">
                <ProductImage backgroundImage={item.gallery[0]} />
              </Column>
            </Row>
          );
        })}
        <Row total>
          <div>Total</div>
          <div>
            {contextCurrency}
            {total}
          </div>
        </Row>
        <Link to="/cart">
          <Button margin="0 12px 0 0" onClick={this.props.toggleMiniCart}>
            VIEW BAG
          </Button>
        </Link>
        <Button primary>CHECK OUT</Button>
      </MiniCartContainer>
    );
  }
}

MiniCart.contextType = MainContext;

export default MiniCart;
