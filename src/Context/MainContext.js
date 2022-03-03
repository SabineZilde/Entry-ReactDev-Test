import React, {Component} from 'react';

const MainContext = React.createContext();


export class MainProvider extends Component{
    state = {
        testState: "testState preview",
        contextCurrency: "$",
        productsInCart: [
            {
                "id": "1",
                "title": "Nike",
                "scr": "",
                "description": "testt",
                "price": 60,
                "attributes": ["red", "blue"],
                "count": 1
            }
        ]
    }

    updateCart = () => {
        this.setState();
    }

    updateCurrency = (symbol) => {
        this.setState({contextCurrency: symbol});
    }

    render(){
        const {testState, contextCurrency, productsInCart} = this.state;
        const {updateCart, updateCurrency} = this;
        return(
            <MainContext.Provider value={{
                testState,
                contextCurrency,
                productsInCart,
                updateCart,
                updateCurrency,
            }}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default MainContext;