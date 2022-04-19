import React from 'react';
import CurrencyDropdown from './CurrencyDropdown/CurrencyDropdown';
import MiniCart from './MiniCart/MiniCart';
import MainContext from "../../Context/MainContext";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  };

  handleClickOutside(event) {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.props.onClickOutside && this.props.onClickOutside();
    };
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
  };

  handleDropdown = () => {
    const { show, dropdown, toggleMiniCart } = this.props;
    if (!show)
      return null;
    return (
      <div ref={this.ref}>
        {dropdown === 'Currency' && <CurrencyDropdown />}
        {dropdown === 'MiniCart' && <MiniCart toggleMiniCart={toggleMiniCart} />}
      </div>
    );
  }

  render() {
    return this.handleDropdown();
  };
};

Dropdown.contextType = MainContext;

export default Dropdown;