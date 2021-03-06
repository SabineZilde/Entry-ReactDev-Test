import React, { Component } from "react";
import alertIcon from '../Assets/Alert.svg';
import successIcon from '../Assets/Success.svg';

const MainContext = React.createContext();

export class MainProvider extends Component {
  state = {
    contextCategory: 'all',
    contextCurrency: "$",
    chosenAttributes: [],
    productsInCart: [],
    totalQuantity: 0,
    total: 0,
    alertIsTriggered: false,
    alertContent: {},
    scrollHeight: ''
  };

  getCategory = (category) => {
    this.setState({ contextCategory: category });
  };

  updateCurrency = (symbol) => {
    this.setState({ contextCurrency: symbol });
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

  updateCart = (id, brand, name, gallery, prices, attributes) => {
    const { productsInCart, totalQuantity } = this.state;
    const attributeString = attributes.map(atr => {
      return atr['value'].toString();
    })
    const extendedId = id + attributeString;

    const checkId = productsInCart.every((prod) => {
      return prod.id !== extendedId;
    });

    if (!checkId) {
      const prodIndex = productsInCart.findIndex((product) => {
        return product.id === extendedId;
      });
      const newState = [...productsInCart];
      newState[prodIndex].count += 1;

      this.setState({
        productsInCart: newState,
      });
    } else {
      this.setState({
        productsInCart: [
          ...productsInCart,
          {
            id: extendedId,
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
    this.setState({
      totalQuantity: totalQuantity + 1,
    })
  };

  updateProductCount = (id, add) => {
    const { productsInCart, contextCurrency } = this.state;
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
    this.getTotal(contextCurrency);
    this.getTotalQuantity();
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

    if (productsInCart.length > 1) {
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

      let totalQuantityArr = [];
      newState.map((prod) => {
        return totalQuantityArr.push(prod.count)
      });
      const result = totalQuantityArr.reduce((prev, curr) => {
        return prev + curr;
      });
      this.setState({ totalQuantity: result });

    } else {
      this.setState({ total: 0 });
      this.setState({ totalQuantity: 0 });
    }
  };

  getTotalQuantity = () => {
    const { productsInCart } = this.state;
    let totalQuantityArr = [];
    productsInCart.map((prod) => {
      return totalQuantityArr.push(prod.count)
    });
    const result = totalQuantityArr.reduce((prev, curr) => {
      return prev + curr;
    });
    this.setState({ totalQuantity: result })
  };

  getTotal = (currency) => {
    const { productsInCart } = this.state;
    let totalArr = [];
    productsInCart.map((prod) => {
      return prod.prices.map((price) => {
        if (currency === price.currency.symbol) {
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

  showAlert = (alertType, id, brand, name) => {
    this.setState({
      alertIsTriggered: true,
    });
    if (alertType === 'success') {
      this.setState({
        alertContent: {
          id: id,
          icon: successIcon,
          title: 'Success!',
          description: `The ${brand} ${name} is successfully added to your cart.`,
          primaryButton: 'CONTINUE BROWSING',
          secondaryButton: 'VIEW BAG',
          secondaryLink: '/cart'
        }
      })
    }
    if (alertType === 'attributes') {
      this.setState({
        alertContent: {
          id: id,
          icon: alertIcon,
          title: 'This product has attributes.',
          description: 'Please choose attributes before adding this item to cart!',
          primaryButton: '',
          secondaryButton: 'CHOOSE ATTRIBUTES',
          secondaryLink: `/product/${id}`
        }
      })
    }
    if (alertType === 'delete') {
      this.setState({
        alertContent: {
          id: id,
          icon: alertIcon,
          title: "Are you sure?",
          description: "This action will remove the product from your cart.",
          primaryButton: "",
          secondaryButton: "YES, DELETE PRODUCT",
          secondaryLink: ''
        }
      })
    }
  };

  hideAlert = () => {
    this.setState({
      alertIsTriggered: false,
    });
  };

  setScrollHeight = (height) => {
    this.setState({ scrollHeight: `${height}px` })
  }

  componentDidUpdate() {
    localStorage.setItem('dataProductsInCart', JSON.stringify(this.state.productsInCart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    localStorage.setItem('dataTotalQ', JSON.stringify(this.state.totalQuantity))
  };

  componentDidMount() {
    const dataProductsInCart = JSON.parse(localStorage.getItem('dataProductsInCart'));
    if (dataProductsInCart !== null) {
      this.setState({productsInCart: dataProductsInCart})
    };
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
    if (dataTotal !== null) {
      this.setState({total: dataTotal})
    };
    const dataTotalQ = JSON.parse(localStorage.getItem('dataTotalQ'));
    if (dataTotalQ !== null) {
      this.setState({totalQuantity: dataTotalQ})
    };
  };

  render() {
    const { contextCategory, contextCurrency, chosenAttributes, productsInCart, totalQuantity, total, alertIsTriggered, alertContent, scrollHeight } = this.state;
    const {
      getCategory,
      updateCurrency,
      saveAttributes,
      updateCart,
      updateProductCount,
      removeProduct,
      getTotalQuantity,
      getTotal,
      showAlert,
      hideAlert,
      setScrollHeight,
    } = this;
    return (
      <MainContext.Provider
        value={{
          contextCategory,
          contextCurrency,
          chosenAttributes,
          productsInCart,
          totalQuantity,
          total,
          alertIsTriggered,
          alertContent,
          scrollHeight,
          getCategory,
          updateCurrency,
          saveAttributes,
          updateCart,
          updateProductCount,
          removeProduct,
          getTotalQuantity,
          getTotal,
          showAlert,
          hideAlert,
          setScrollHeight
        }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  };
};

export default MainContext;
