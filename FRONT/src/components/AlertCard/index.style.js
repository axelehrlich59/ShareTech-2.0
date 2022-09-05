import styled from "styled-components";
import { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const breatheAnimation = keyframes`
  0% { height: 60%; width: 0%;}
  50% { height: 60%; width: 30%; opacity: 0.5}
  100% { height: 60%; width: 30%; opacity: 1 }
`

export const textAppear = keyframes`
  0% { opacity: 0;}
  50% { opacity: 0.5;}
  100% { opacity: 1;}
`

export const ContainerAlerteUpdateSuccess = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`
export const AlerteUpdateSuccess = styled.div`
  display: flex;
  width: 30%;
  height: 80%;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #292D3E;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({textColor}) => textColor};
  animation-name: ${breatheAnimation};
  animation-fill-mode: both;
  animation-duration: 2s;
  animation-iteration-count: 1;
`
export const ContainerIcon = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  justify-content: right;
  align-items: center;
`
export const ContainerAlertMessage = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation-name: ${textAppear};
  animation-duration: 3s;
  animation-delay: 0s;
`
export const ContainerCloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10%;
  height: 100%;
`
export const CloseAlertIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-top: 3px;
  margin-right: 6px;
  cursor: pointer;
`
