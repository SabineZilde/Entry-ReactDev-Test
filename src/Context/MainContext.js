import React, {Component} from 'react';

const MainContext = React.createContext();

export class MainProvider extends Component{
    state = {
        testState : "testState preview",
        contextCurrency : "$"
    }

    updateCart = () => {
        this.setState({testState : "updated testState preview"});
    }

    updateCurrency = () => {
        this.setState({contextCurrency : "¥"});
    }

    render(){
        const {testState, contextCurrency} = this.state;
        const {updateCart, updateCurrency} = this;
        return(
            <MainContext.Provider value={{
                testState,
                contextCurrency,
                updateCart,
                updateCurrency,
            }}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default MainContext;