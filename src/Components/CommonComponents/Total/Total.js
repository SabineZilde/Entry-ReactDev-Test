import React from "react";
import { TotalDiv } from "./Total.style";
import MainContext from "../../../Context/MainContext";

class Total extends React.Component {
    componentDidMount() {
        const { productsInCart, contextCurrency, getTotal } = this.context;
        if (productsInCart.length > 0) {
            return getTotal(contextCurrency);
        }
    };

    toggleCart = () => {
        if (this.props.for === 'cart') {
            return true;
        }
    };

    handleMiniTotal = () => {
        if (this.props.for === 'miniCart') {
            return <div>Total</div>;
        }
    };

    handleCartTotal = () => {
        if (this.props.for === 'cart') {
            return 'TOTAL: '
        }
    };

    render() {
        const { contextCurrency, total } = this.context;
        return (
            <TotalDiv cart={this.toggleCart()}>
                {this.handleMiniTotal()}
                <div>
                    {this.handleCartTotal()}
                    {contextCurrency}
                    {total}
                </div>
            </TotalDiv>
        )
    }
};

Total.contextType = MainContext;

export default Total;