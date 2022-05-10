import React, {} from "react";
import styled from 'styled-components'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LabelErrorContainer = styled.div`
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFEEEE;
  margin-top: 5px;
  padding: 6px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  @media screen and (max-width: 720px) {
    width: 70%;
    height: 10%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
  }
`

const LabelErrorMessage = styled.span`
  color: #CC3333;
`
const IconContainer = styled.i`
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
  font-style: normal;
  font-size: 16px;
`

const LabelError = ({
  text, 
  closeLabelError,
  icon,
}) => {

  return (
    <LabelErrorContainer>
      <LabelErrorMessage text={text}>{text}</LabelErrorMessage>
      <IconContainer
        onClick={closeLabelError}
        icon={icon} 
      >{icon}</IconContainer>
    </LabelErrorContainer>
  )
}

export default LabelError