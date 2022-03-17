import React from "react";
import { Link } from "react-router-dom";
import { FontRaleway } from "../Fonts/Fonts.style";
import { Button, CloseButton } from "../Buttons/Buttons.style";
import { AlertContainer, AlertBckground, Icon } from "./Alert.style";
import MainContext from "../../Context/MainContext";
import alert from "../../Assets/Alert.svg";

class Alert extends React.Component {
  render() {
    const { productId, hideAlert } = this.context;
    return (
      <AlertContainer>
        <AlertBckground>
          <CloseButton onClick={hideAlert}>X</CloseButton>
          <Icon backgroundImg={alert}></Icon>
          <FontRaleway margin="20px" center>
            This product has attributes.
          </FontRaleway>
          <FontRaleway margin="0 20px" center>
            Please choose attributes before adding this item to cart!
          </FontRaleway>
          <div>
            <Link to={"/product/" + productId}>
              <Button primary margin="50px 12px 0 0" onClick={hideAlert}>
                CHOOSE ATTRIBUTES
              </Button>
            </Link>
            <Button onClick={hideAlert}>CONTINUE BROWSING</Button>
          </div>
        </AlertBckground>
      </AlertContainer>
    );
  }
}

Alert.contextType = MainContext;

export default Alert;
