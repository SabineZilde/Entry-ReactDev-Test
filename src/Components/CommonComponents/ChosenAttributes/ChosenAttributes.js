import React from "react";
import { FontRaleway } from '../../CommonStyles/Fonts.style';
import { AttributeRow, AttributeItem } from './ChosenAttributes.style';

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
      return (
        <AttributeRow
          key={atr.value + atr.name}
          fontSize={this.state.size}
        >
          {atr.name}:&nbsp;
          {atr.name === "Color" ? (
            <AttributeItem
              mini={this.state.mini}
              margin={this.state.margin}
              color={atr.value}
            ></AttributeItem>
          ) : (
            <FontRaleway
              fontSize={this.state.size}
              fontWeight={this.state.weight}
            >
              {atr.value}
            </FontRaleway>
          )}
        </AttributeRow>
      );
    });
  };

  render() {
    return this.handleAttributes();
  };
};

export default ChosenAttributes;