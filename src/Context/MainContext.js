import React, {Component} from 'react';

const MainContext = React.createContext();

export class MainProvider extends Component{
    state = {
        testState : "testState preview"
    }

    updateCart = () => {
        this.setState({testState : "updated testState preview"});
    }

    clearCart = () => {
        this.setState({testState : ""});
    }

    render(){
        const {testState} = this.state;
        const {updateCart, clearCart} = this;
        return(
            <MainContext.Provider value={{
                testState,
                updateCart,
                clearCart,
            }}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export default MainContext;