import React from "react";
import {
  DropdownContainer,
  DropdownContent,
} from "./CurrencyDropdown.style";
import { Query } from "@apollo/client/react/components";
import { LOAD_CURRENCIES } from "../../../GraphQL/Queries";
import MainContext from "../../../Context/MainContext";
import { Loader } from "../../Loader.style";

class CurrencyDropdown extends React.Component {

  

  render() {
    const { updateCurrency, productsInCart, getTotal } = this.context;
    return (
      <DropdownContainer>
        <DropdownContent>
          <Query query={LOAD_CURRENCIES}>
            {({ loading, data }) => {
              if (loading) return <Loader />;
              const { currencies } = data;
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
              ));
            }}
          </Query>
        </DropdownContent>
      </DropdownContainer>
    )
  }
}

CurrencyDropdown.contextType = MainContext;

export default CurrencyDropdown;