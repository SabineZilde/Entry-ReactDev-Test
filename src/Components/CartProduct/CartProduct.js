import React from "react";
import {
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
  ImgContainer,
  ProductImage,
  ArrowButton,
  Attributes,
} from "./CartProduct.style";
import { FontRaleway } from "../Fonts/Fonts.style";
import {
  AttributeButton,
  QuantityButton,
  CloseButton,
} from "../Buttons/Buttons.style";
import MainContext from "../../Context/MainContext";

class Cart extends React.Component {
  state = {
    itemId: "",
    imgNumber: 0,
  };

  setBgImg = (id, gallery) => {
    if (this.state.itemId === id) {
      return gallery[this.state.imgNumber];
    } else {
      return gallery[0];
    }
  };

  handleLeftArrow = (id, length) => {
    const { imgNumber } = this.state;
    this.setState({
      itemId: id,
    });
    if (length === 1) {
      this.setState({
        imgNumber: 0,
      });
    } else if (imgNumber === 0) {
      this.setState({
        imgNumber: length - 1,
      });
    } else {
      this.setState({
        imgNumber: imgNumber - 1,
      });
    }
  };

  handleRightArrow = (id, length) => {
    const { imgNumber } = this.state;
    this.setState({
      itemId: id,
    });
    if (imgNumber < length - 1) {
      this.setState({
        imgNumber: imgNumber + 1,
      });
    } else {
      this.setState({
        imgNumber: 0,
      });
    }
  };

  render() {
    const { productsInCart, contextCurrency, updateProductCount, showAlert } =
      this.context;
    return (
      <>
        {productsInCart.map((item) => {
          return (
            <ProductContainer key={item.id}>
              <ProductDescription>
                <FontRaleway fontSize="30px" fontWeight="600">
                  {item.brand}
                </FontRaleway>
                <FontRaleway fontSize="30px">{item.name}</FontRaleway>
                {item.prices.map((price) => {
                  return (
                    price.currency.symbol === contextCurrency && (
                      <FontRaleway
                        fontSize="24px"
                        fontWeight="700"
                        key={price.amount}
                      >
                        {price.currency.symbol}
                        {price.amount}
                      </FontRaleway>
                    )
                  );
                })}
                {item.attributes.map((atr) => {
                  return (
                    <Attributes key={atr.value + atr.name}>
                      {atr.name}:&nbsp;
                      {atr.name === "Color" ? (
                        <AttributeButton
                          margin="5px 0 0 5px"
                          color={atr.value}
                        ></AttributeButton>
                      ) : (
                        <b>{atr.value}</b>
                      )}
                    </Attributes>
                  );
                })}
              </ProductDescription>
              <CountAndImg>
                <Column>
                  <QuantityButton
                    onClick={() => updateProductCount(item.id, item.id)}
                  >
                    +
                  </QuantityButton>
                  <FontRaleway fontSize="24px" fontWeight="500">
                    {item.count}
                  </FontRaleway>
                  <QuantityButton
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
                <ImgContainer>
                  <ArrowButton
                    left
                    onClick={() =>
                      this.handleLeftArrow(item.id, item.gallery.length)
                    }
                  >
                    &lt;
                  </ArrowButton>
                  <ProductImage
                    key={item.id + item.gallery[this.state.imgNumber]}
                    backgroundImage={this.setBgImg(item.id, item.gallery)}
                  />
                  <ArrowButton
                    onClick={() =>
                      this.handleRightArrow(item.id, item.gallery.length)
                    }
                  >
                    &gt;
                  </ArrowButton>
                </ImgContainer>
                <CloseButton
                  margin="-10px 5px 0 0"
                  onClick={() => {
                    showAlert('delete', item.id)
                  }}
                >
                  X
                </CloseButton>
              </CountAndImg>
            </ProductContainer>
          );
        })}
      </>
    );
  }
}

Cart.contextType = MainContext;

export default Cart;
