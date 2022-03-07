import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonLarge,
  AttributeButton,
} from "../../Components/Buttons/Buttons.style";
import {
  Row,
  ThumbnailColumn,
  LargeImgColumn,
  ProductDetailColumn,
  DescriptionRow,
  Attributes,
} from "./ProductPage.style";
import { FontRaleway, FontRoboto } from "../../Components/Fonts/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import parse from "html-react-parser";
import MainContext from "../../Context/MainContext";

class ProductPage extends React.Component {
  state = {
    id: null,
    largeImg: null,
    // selectedAttributes: [{}],
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    this.setState({
      id: id,
    });
  }

  changeLargeImg = (img) => {
    this.setState({
      largeImg: img,
    });
  };

  // saveAttributes = (name, value) => {
  //   const { selectedAttributes } = this.state;
  //   if (selectedAttributes.length === 0) {
  //     this.setState({
  //       selectedAttributes: [
  //         ...selectedAttributes,
  //         {
  //           name: name,
  //           value: value,
  //         },
  //       ],
  //     });
  //   }
  // if (attribute.name !== name) {
  //   selectedAttributes.map((attribute) => {

  //     (attribute.name !== name) {
  //       const newState = [...selectedAttributes];
  //       console.log(newState);
  //     }
  //   });
  // }
  // };

  render() {
    const { contextCurrency, updateCart, chooseAttributes, getTotal } =
      this.context;
    return (
      <Query query={LOAD_PRODUCT} variables={{ id: this.state.id }}>
        {({ loading, data }) => {
          if (loading) return "Loading...";
          const { product } = data;
          return (
            <Row>
              <ThumbnailColumn>
                {product.gallery.map((image, id) => (
                  <button key={id} onClick={() => this.changeLargeImg(image)}>
                    <img src={image} alt="Product" />
                  </button>
                ))}
              </ThumbnailColumn>
              <LargeImgColumn>
                <img
                  src={
                    this.state.largeImg === null
                      ? product.gallery[0]
                      : this.state.largeImg
                  }
                  alt="Product large"
                />
              </LargeImgColumn>
              <ProductDetailColumn>
                <div>
                  <FontRaleway fontSize="30px" fontWeight="600">
                    {product.brand}
                  </FontRaleway>
                  <FontRaleway fontSize="30px" margin="5px 0 20px">
                    {product.name}
                  </FontRaleway>
                </div>
                <div>
                  {product.attributes.map((attribute, id) => (
                    <div key={id}>
                      <FontRoboto
                        condensed
                        fontSize="18px"
                        fontWeight="700"
                        margin="10px 0"
                      >
                        {attribute.name}
                      </FontRoboto>
                      {attribute.items.map((item, id) => {
                        return (
                          <Attributes key={item.id}>
                            <input
                              type="radio"
                              id={item.id}
                              name={attribute.name}
                              value={item.value}
                            />
                            <label
                              htmlFor={item.id}
                              style={{ backgroundColor: item.value }}
                              

                            >
                              {attribute.name !== "Color"
                                ? item.displayValue
                                : ""}
                            </label>
                          </Attributes>
                        );
                        // (
                        //   <AttributeButton
                        //     key={id}
                        //     margin="0 10px 10px 0"
                        //     color={
                        //       attribute.name === "Color"
                        //         ? item.displayValue
                        //         : ""
                        //     }
                        //     onClick={() => {
                        //       this.saveAttributes(
                        //         attribute.name,
                        //         item.displayValue
                        //       );
                        //     }}
                        //   >
                        //     {attribute.name !== "Color"
                        //       ? item.displayValue
                        //       : ""}
                        //   </AttributeButton>
                        // );
                      })}
                    </div>
                  ))}
                </div>
                <div>
                  <FontRoboto
                    condensed
                    fontSize="18px"
                    fontWeight="700"
                    margin="20px 0 0"
                  >
                    PRICE:
                  </FontRoboto>
                  {product.prices.map((price, id) => {
                    return price.currency.symbol === contextCurrency ? (
                      <FontRaleway fontSize="24px" fontWeight="700" key={id}>
                        {price.currency.symbol}
                        {price.amount.toFixed(2)}
                      </FontRaleway>
                    ) : (
                      ""
                    );
                  })}
                </div>
                {product.inStock ? (
                  <Link to="/cart">
                    <ButtonLarge
                      primary
                      onClick={() => {
                        updateCart(
                          product.id,
                          product.prices,
                          this.state.chooseAttributes
                        );
                        getTotal();
                      }}
                    >
                      ADD TO CART
                    </ButtonLarge>
                  </Link>
                ) : (
                  <FontRaleway fontColor="red" fontWeight="700" margin="30px 0">
                    OUT OF STOCK!
                  </FontRaleway>
                )}
                <DescriptionRow>
                  <FontRoboto>{parse(product.description)}</FontRoboto>
                </DescriptionRow>
              </ProductDetailColumn>
            </Row>
          );
        }}
      </Query>
    );
  }
}

ProductPage.contextType = MainContext;

export default ProductPage;
