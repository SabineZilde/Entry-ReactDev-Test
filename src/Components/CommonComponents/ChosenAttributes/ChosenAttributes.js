import React from "react";
import ChAttribute from "./ChAttribute";

class ChosenAttributes extends React.Component {
  state = {
    size: '12px',
    weight: '500',
    margin: '0 0 0 2px',
    mini: true
  };

  componentDidMount() {
    this.props.page === 'cart' && this.setState({
      size: '16px',
      weight: '700',
      margin: '3px 0 0 5px',
      mini: false
    });
  };

  handleAttributes = () => {
    return this.props.attributes.map((atr) => {
      return <ChAttribute
        atr={atr}
        state={this.state}
        key={atr.value + atr.name}
      />
    });
  };

  render() {
    return this.handleAttributes();
  };
};

export default ChosenAttributes;