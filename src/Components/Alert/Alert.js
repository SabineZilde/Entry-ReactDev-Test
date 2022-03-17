import React from "react";
import { Link } from "react-router-dom";
import { FontRaleway } from "../Fonts/Fonts.style";
import { Button, CloseButton } from "../Buttons/Buttons.style";
import { AlertContainer, AlertBckground, Icon } from "./Alert.style";
import MainContext from "../../Context/MainContext";

class Alert extends React.Component {
  render() {
    const { alertContent, hideAlert, removeProduct } = this.context;
    return (
      <AlertContainer>
        <AlertBckground>
          <CloseButton onClick={hideAlert}>X</CloseButton>

          <Icon backgroundImg={alertContent.icon}></Icon>
          <FontRaleway margin="20px" center>
            {alertContent.title}
          </FontRaleway>
          <FontRaleway margin="0 20px" center>
            {alertContent.description}
          </FontRaleway>
          <div>
            <Link to={alertContent.primaryLink}>
              <Button
                primary
                margin="50px 12px 0 0"
                onClick={() => {
                  hideAlert();
                  if (alertContent.primaryButton === "YES, DELETE PRODUCT") {
                    removeProduct(alertContent.id);
                  }
                }}
              >
                {alertContent.primaryButton}
              </Button>
            </Link>
            <Link to={alertContent.secondaryLink}>
              <Button onClick={hideAlert}>
                {alertContent.secondaryButton}
              </Button>
            </Link>
          </div>
        </AlertBckground>
      </AlertContainer>
    );
  }
}

Alert.contextType = MainContext;

export default Alert;
