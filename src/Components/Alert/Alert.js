import React from "react";
import { FontRaleway } from "../Fonts/Fonts.style";
import { Button, CloseButton } from "../Buttons/Buttons.style";
import { AlertContainer, AlertBckground, Icon } from "./Alert.style";
import alert from "../../Assets/Alert.svg";

class Alert extends React.Component {
  render() {
    return (
      <AlertContainer>
        <AlertBckground>
          <CloseButton>X</CloseButton>
          <Icon backgroundImg={alert}></Icon>
          <FontRaleway margin="20px" center>
            This product has attributes.
          </FontRaleway>
          <FontRaleway margin="0 20px" center>
            Please choose attributes before adding this item to cart!
          </FontRaleway>
          <div>
            <Button primary margin="50px 12px 0 0">
              CHOOSE ATTRIBUTES
            </Button>
            <Button>CONTINUE BROWSING</Button>
          </div>
        </AlertBckground>
      </AlertContainer>
    );
  }
}

export default Alert;
