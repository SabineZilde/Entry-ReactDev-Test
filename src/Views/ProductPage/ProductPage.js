import React from "react";
import { Link } from "react-router-dom";
import { ButtonLarge } from "../../Components/Buttons/Buttons.style";
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
    chosenAttributes: [],
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

  saveAttributes = (name, value) => {
    const { chosenAttributes } = this.state;

    if (chosenAttributes.length === 0) {
      this.setState({
        chosenAttributes: [{ name: name, value: value }],
      });
    } else {
      const existingAtr = chosenAttributes.find(findAtr);
      function findAtr(chosenAtr) {
        return chosenAtr.name === name;
      }
      const attrIndex = chosenAttributes.findIndex((attr) => {
        return attr.name === name;
      });
      if (existingAtr) {
        const newState = [...chosenAttributes];
        newState[attrIndex].value = value;
        return this.setState({
          chosenAttributes: newState,
        });
      } else {
        this.setState({
          chosenAttributes: [...chosenAttributes, { name: name, value: value }],
        });
      }
    }
  };

  render() {
    const { contextCurrency, updateCart, getTotal } = this.context;
    console.log(this.state.chosenAttributes);
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
                        capitalize
                      >
                        {attribute.name}:
                      </FontRoboto>
                      {attribute.items.map((item) => {
                        return (
                          <Attributes key={item.id}>
                            <input
                              type="radio"
                              id={`${attribute.name} ${item.id}`}
                              name={attribute.name}
                              value={item.value}
                              onClick={() =>
                                this.saveAttributes(attribute.name, item.value)
                              }
                            />
                            <label
                              htmlFor={`${attribute.name} ${item.id}`}
                              style={{ backgroundColor: item.value }}
                            >
                              {attribute.name !== "Color" ? item.value : ""}
                            </label>
                          </Attributes>
                        );
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
                          product.brand,
                          product.name,
                          product.gallery,
                          product.prices,
                          this.state.chosenAttributes
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
