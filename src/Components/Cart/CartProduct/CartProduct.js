import React from "react";
import {
  ProductContainer,
  ProductDescription,
  CountAndImg,
  Column,
  ImgContainer,
  ProductImage,
  ArrowButton,
} from "./CartProduct.style";
import {
  CloseButton,
} from "../../CommonStyles/Buttons.style";
import MainContext from "../../../Context/MainContext";
import Price from "../../CommonComponents/Price";
import ProductName from "../../CommonComponents/ProductName";
import ChosenAttributes from "../../CommonComponents/ChosenAttributes/ChosenAttributes";
import QuantityButtons from '../../CommonComponents/QuantityButtons';

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
    const { productsInCart, showAlert } = this.context;
    return (
      <>
        {productsInCart.map((item) => {
          return (
            <ProductContainer key={item.id}>
              <ProductDescription>
                <ProductName product={item} />
                <Price item={item} size='large' />
                <ChosenAttributes attributes={item.attributes} page='cart' />
              </ProductDescription>
              <CountAndImg>
                <Column>
                <QuantityButtons item={item} />
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
                    showAlert("delete", item.id);
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
