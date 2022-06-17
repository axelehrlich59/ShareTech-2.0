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


const CardSuccess = ({
  icon,
  text,
  onCloseAlert,
}) => {


  return (
    <ContainerAlerteUpdateSuccess>
      <AlerteUpdateSuccess>
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

export default CardSuccess