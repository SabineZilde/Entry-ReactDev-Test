import React from "react";
import { AttributeRow, AttributeItem } from './ChosenAttributes.style';
import { FontRaleway } from '../../CommonStyles/Fonts.style';

class ChAttribute extends React.Component {
  handleValue = () => {
    const { atr, state } = this.props;
    if (atr.name === 'Color') {
      return (
        <AttributeItem
          mini={state.mini}
          margin={state.margin}
          color={atr.value}
        ></AttributeItem>
      );
    } else {
      return (
        <FontRaleway
          fontSize={state.size}
          fontWeight={state.weight}
        >
          {atr.value}
        </FontRaleway>
      );
    };
  };

  render() {
    const { atr, state } = this.props;
    return (
      <AttributeRow fontSize={state.size}>
        {atr.name}:&nbsp;
        {this.handleValue()}
      </AttributeRow>
    );
  };
};

export default ChAttribute;