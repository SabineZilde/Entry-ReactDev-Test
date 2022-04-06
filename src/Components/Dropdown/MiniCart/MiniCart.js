import React from "react";
import { Link } from "react-router-dom";
import Total from "../../Total/Total.js";
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
  CloseButton
} from "../../Buttons.style";
import { FontRaleway } from "../../Fonts.style";
import MainContext from "../../../Context/MainContext";
import Price from "../../Price.js";

class MiniCart extends React.Component {
  componentDidMount() {
    this.context.setScrollHeight(document.documentElement.scrollHeight);
  };

  render() {
    const { productsInCart, updateProductCount, showAlert } =
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
                <Price item={item} />
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
              <CloseButton
                margin="-6px 0 0 -10px"
                zIndex='1'
                onClick={() => {
                  showAlert("delete", item.id);
                }}
              >
                x
              </CloseButton>
            </Row>
          );
        })}
        <Total for='miniCart' />
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
