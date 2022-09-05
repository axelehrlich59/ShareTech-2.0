import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerAlerteUpdateSuccess,
  AlerteUpdateSuccess,
  ContainerIcon,
  ContainerAlertMessage,
  ContainerCloseIcon,
  CloseAlertIcon,
} from "./index.style"


const AlertCard = ({
  icon,
  text,
  onCloseAlert,
  backgroundColor,
  textColor,
}) => {

  return (
    <ContainerAlerteUpdateSuccess>
      <AlerteUpdateSuccess 
        backgroundColor={backgroundColor}
        textColor={textColor}
      >
        <ContainerIcon icon={icon}>
          {icon}
        </ContainerIcon>
        <ContainerAlertMessage text={text}>
          {text}
        </ContainerAlertMessage>
        <ContainerCloseIcon>
          <CloseAlertIcon 
            icon={faXmark}
            onClick={onCloseAlert}  
          />
        </ContainerCloseIcon>
      </AlerteUpdateSuccess>
    </ContainerAlerteUpdateSuccess>
  )
}

AlertCard.defaultProps = {
  backgroundColor: "#FFFFFF",
}

export default AlertCard