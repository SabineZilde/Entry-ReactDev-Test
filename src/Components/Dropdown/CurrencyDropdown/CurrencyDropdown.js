import React from "react";
import {
  DropdownContainer,
  DropdownContent,
} from "./CurrencyDropdown.style";
import { LOAD_CURRENCIES } from "../../../GraphQL/Queries";
import MainContext from "../../../Context/MainContext";
import { Loader } from "../../CommonStyles/Loader.style";
import { client } from "../../..";

class CurrencyDropdown extends React.Component {
  state = {
    loading: true,
    currencies: []
  }

  componentDidMount = async () => {
    const response = await client.query({
      query: LOAD_CURRENCIES
    })
    this.setState({
      loading: response.loading,
      currencies: response.data.currencies
    })
  };

  handleLoadedCurrency = () => {
    const { loading, currencies } = this.state;
    const { updateCurrency, productsInCart, getTotal } = this.context;
    if (loading) return <Loader />;
    return currencies.map((currency, id) => (
      <button
        key={id}
        onClick={() => {
          updateCurrency(currency.symbol);
          if (productsInCart.length > 0) {
            getTotal(currency.symbol)
          }
        }}
      >
        {currency.symbol}
        {currency.label}
      </button>
    ))
  };

  render() {
    return (
      <DropdownContainer>
        <DropdownContent>
          {this.handleLoadedCurrency()}
        </DropdownContent>
      </DropdownContainer>
    )
  }
}

CurrencyDropdown.contextType = MainContext;

export default CurrencyDropdown;