import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCurrency: "$",
    productsInCart: [],
    attributes: [{ id: 1, name: 2, value: 3 }],
    total: 0,
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
    this.getTotal();
  };

  updateCart = (id, prices) => {
    const { productsInCart } = this.state;
    const check = productsInCart.every((product) => {
      return product.id !== id;
    });
    if (!check) {
      alert("This product is already in cart!");
    } else {
      this.setState({
        productsInCart: [
          ...productsInCart,
          { id: id, count: 1, prices: prices },
        ],
      });
      alert("Product is added to cart.");
    }
  };

  updateProductCount = (id, add) => {
    const { productsInCart } = this.state;
    const prodIndex = productsInCart.findIndex((product) => {
      return product.id === id;
    });
    const newState = [...productsInCart];
    if (add) {
      newState[prodIndex].count += 1;
    } else {
      newState[prodIndex].count -= 1;
    }
    this.setState({
      productsInCart: newState,
    });

    this.getTotal();
  };

  saveProductAttributes = (id, name, value) => {
    const { attributes } = this.state;
    const attrIndex = attributes.findIndex((attr) => {
      return attr.id === id;
    });
    attributes.map((attribute) => {
      if (attribute.id === id && attribute.name === name) {
        const newState = [...attributes];
        newState[attrIndex].value = value;
        return this.setState({
          attributes: newState,
        });
      } else {
        console.log('id and name is not equal')
        
        return this.setState({
          attributes: [...attributes, { id: id, name: name, value: value }],
        });
      }
    });
  };

  removeProduct = (id) => {
    if (window.confirm("Are you sure?")) {
      const { productsInCart } = this.state;
      const prodIndex = productsInCart.findIndex((product) => {
        return product.id === id;
      });
      const newState = [...productsInCart];
      newState.splice(prodIndex, 1);
      this.setState({
        productsInCart: newState,
      });
      console.log(productsInCart);
      this.getTotal();
    }
  };

  getTotal = () => {
    const { contextCurrency, productsInCart } = this.state;
    let totalArr = [];
    productsInCart.map((prod) => {
      return prod.prices.map((price) => {
        if (contextCurrency === price.currency.symbol) {
          totalArr.push(price.amount * prod.count);
        }
        return "";
      });
    });
    const res = totalArr.reduce((prev, curr) => {
      return prev + curr;
    });
    this.setState({ total: res.toFixed(2) });
  };

  render() {
    const { contextCurrency, productsInCart, total } = this.state;
    const {
      updateCurrency,
      updateCart,
      updateProductCount,
      removeProduct,
      saveProductAttributes,
      getTotal,
    } = this;
    console.log(this.state.attributes);

    return (
      <MainContext.Provider
        value={{
          contextCurrency,
          productsInCart,
          total,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          saveProductAttributes,
          getTotal,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
