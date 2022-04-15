import React from "react";
import { CloseButton } from '../CommonStyles/Buttons.style';
import MainContext from "../../Context/MainContext";

class Close extends React.Component {
  state = {
    margin: '',
    zIndex: '',
    x: 'X',
    onClick: () => {
      this.context.showAlert("delete", this.props.id);
    }
  };

  componentDidMount() {
    this.props.page === 'miniCart' && this.setState({
      margin: '-6px 0 0 -10px',
      zIndex: '1',
      x: 'x'
    });
    this.props.page === 'cart' && this.setState({
      margin: '-10px 5px 0 0',
    });
    this.props.page === 'alert' && this.setState({
      onClick: this.context.hideAlert
    });
  };

  render() {
    const { margin, zIndex, x, onClick } = this.state;
    return (
      <CloseButton
        margin={margin}
        zIndex={zIndex}
        onClick={onClick}
      >
        {x}
      </CloseButton>
    );
  };
};

Close.contextType = MainContext;

export default Close;