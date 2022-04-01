import React from "react";
import { ButtonLarge } from "../../Components/Buttons/Buttons.style";
import {
  Row,
  ThumbnailColumn,
  LargeImgColumn,
  ProductDetailColumn,
  DescriptionRow,
  Attributes,
  Input,
  Label
} from "./ProductPage.style";
import { FontRaleway, FontRoboto } from "../../Components/Fonts/Fonts.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import parse from "html-react-parser";
import MainContext from "../../Context/MainContext";

class ProductPage extends React.Component {
  state = {
    id: 'apple-imac-2021',
    largeImg: null,
    chosenAttributes: [],
    extendedId: '',
    checked: false
  };

  componentDidMount() {
    this.context.setScrollHeight(document.documentElement.scrollHeight);
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

  clearAttributes = () => {
    this.setState({
      chosenAttributes: []
    })
  };

  handleChecked = (name, id) => {
    this.setState({ checked: `${name} ${id}` })
    // this.setState({ checked: true })
  };

  handleUncheched = () => {
    this.setState({ checked: false })
    // console.log(document.getElementByName('input'))
    // document.getElementByName('input').checked = false;
  };

  render() {
    console.log(this.state.checked)
    const { contextCurrency, alertIsTriggered, updateCart, showAlert } = this.context;
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
              <LargeImgColumn backgroundImg={this.state.largeImg === null
                ? product.gallery[0]
                : this.state.largeImg}>
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
                              <Input
                                // checked={item.id && this.state.checked}
                                // checked
                                type="radio"
                                id={`${attribute.name} ${item.id}`}
                                name={attribute.name}
                                value={item.value}
                                checkedColor={attribute.name !== 'Color' && '#1D1F22'}
                                checkedBorder={attribute.name === 'Color' && '3px solid #A6A6A6'}

                                // onChange={() => this.handleChecked(attribute.name, item.id)}
                                onClick={() => {
                                  // this.handleChecked()
                                  this.saveAttributes(attribute.name, item.value)
                                }}
                              />
                              <Label
                                // checked={this.state.checked === `${attribute.name} ${item.id}`}
                                // checkedColor={attribute.name !== 'Color' && '#1D1F22'}
                                // checkedBorder={attribute.name === 'Color' ? '3px solid #A6A6A6' : ''}
                                htmlFor={`${attribute.name} ${item.id}`}
                                bgColor={attribute.name === 'Color' && item.value}
                              >
                                {attribute.name !== "Color" && item.value}
                              </Label>
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
                    return price.currency.symbol === contextCurrency && (
                      <FontRaleway fontSize="24px" fontWeight="700" key={id}>
                        {price.currency.symbol}
                        {price.amount.toFixed(2)}
                      </FontRaleway>
                    );
                  })}
                </div>
                {product.inStock ? (
                    <ButtonLarge
                      primary
                      onClick={() => {
                        if (this.state.chosenAttributes.length < product.attributes.length) {
                          showAlert('attributes', product.id)
                        } else {
                          updateCart(
                            product.id,
                            product.brand,
                            product.name,
                            product.gallery,
                            product.prices,
                            this.state.chosenAttributes
                          );
                          this.clearAttributes();
                          this.handleUncheched();
                          return !alertIsTriggered &&
                            showAlert('success', product.id, product.brand, product.name)
                        }
                      }}
                    >
                      ADD TO CART
                    </ButtonLarge>
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
