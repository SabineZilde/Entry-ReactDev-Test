import React, { Component } from "react";

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCategory: 'all',
    contextCurrency: "$",
    productsInCart: [],
    total: 0,
    alertIsTriggered: false,
    alertContent: {},
  };

  getCategory = (category) => {
    this.setState({ contextCategory: category });
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
    const { productsInCart } = this.state;
    if (productsInCart.length > 0) {
      let totalArr = [];
      productsInCart.map((prod) => {
        return prod.prices.map((price) => {
          if (symbol === price.currency.symbol) {
            totalArr.push(price.amount * prod.count);
          }
          return "";
        });
      });
      const res = totalArr.reduce((prev, curr) => {
        return prev + curr;
      });
      this.setState({ total: res.toFixed(2) });
    }
  };

  updateCart = (id, brand, name, gallery, prices, attributes) => {
    const { productsInCart } = this.state;
    this.setState({
      productsInCart: [
        ...productsInCart,
        {
          id: id,
          brand: brand,
          name: name,
          gallery: gallery,
          count: 1,
          prices: prices,
          attributes: attributes,
        },
      ],
    });
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

  removeProduct = (id) => {
    const { productsInCart, contextCurrency } = this.state;
    const prodIndex = productsInCart.findIndex((product) => {
      return product.id === id;
    });
    const newState = [...productsInCart];
    newState.splice(prodIndex, 1);
    this.setState({
      productsInCart: newState,
    });
    let totalArr = [];
    newState.map((prod) => {
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

  getTotal = () => {
    const { productsInCart, contextCurrency } = this.state;
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

  showAlert = (id, icon, title, description, primaryButton, secondaryButton, primaryLink, secondaryLink) => {
    this.setState({
      alertIsTriggered: true,
    });
    this.setState({
      alertContent: {
        id: id,
        icon: icon,
        title: title,
        description: description,
        primaryButton: primaryButton,
        secondaryButton: secondaryButton,
        primaryLink: primaryLink,
        secondaryLink: secondaryLink
      }
    })
  };

  hideAlert = () => {
    this.setState({
      alertIsTriggered: false,
    });
  };

  render() {
    const { contextCategory, contextCurrency, productsInCart, total, alertIsTriggered, alertContent } = this.state;
    const {
      getCategory,
      updateCurrency,
      updateCart,
      updateProductCount,
      removeProduct,
      getTotal,
      showAlert,
      hideAlert,
    } = this;
    return (
      <MainContext.Provider
        value={{
          contextCategory,
          contextCurrency,
          productsInCart,
          total,
          alertIsTriggered,
          alertContent,
          getCategory,
          updateCurrency,
          updateCart,
          updateProductCount,
          removeProduct,
          getTotal,
          showAlert,
          hideAlert,
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export default MainContext;
