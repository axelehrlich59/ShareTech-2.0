import { icon } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import styled, {css} from "styled-components";


const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({width}) => width};
  height: ${({height}) => height};
  padding: ${({padding}) => padding};
  margin: 5px;
  background-color: ${({backgroundColor}) => backgroundColor};
  color: ${({textColor}) => textColor};
  ${({isHoverActive}) => isHoverActive && css`
      &:hover {
        background: ${({IsHoverBackgroundWhite}) => IsHoverBackgroundWhite ? "white" : ""};
        color: ${({hoverColorText}) => hoverColorText};
        transition: 0.4s;
      }
  `}
  border-radius: 5px;
  border-color: ${({borderColor}) => borderColor};
  border: ${({hideBorder}) => hideBorder ? "none" : "solid 1.5px"};
  cursor: pointer;
  font-size: 17px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 110px;
    height: 35px;
    font-size: 18px;
  }
  transition: all ease 0.2s;
  box-shadow: ${({boxShadowIsActive}) => boxShadowIsActive ? `
    rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    :hover {
      transform: translateY(-5px);
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  `
  : ""};
`

const Icon = styled.div`
  margin-left: 5px;
`

const Button = ({
  text,
  icon,
  backgroundColor,
  padding,
  textColor,
  isHoverActive,
  IsHoverBackgroundWhite,
  hoverColorText,
  borderColor,
  hideBorder,
  boxShadowIsActive,
  width,
  height,
  onClick,
}) => {


  return (
    <ButtonStyle
      backgroundColor={backgroundColor}
      padding={padding}
      textColor={textColor}
      borderColor={borderColor}
      isHoverActive={isHoverActive}
      IsHoverBackgroundWhite={IsHoverBackgroundWhite}
      hoverColorText={hoverColorText}
      hideBorder={hideBorder}
      boxShadowIsActive={boxShadowIsActive}
      width={width}
      height={height}
      onClick={onClick}
    >
      {text}

      <Icon>{icon}</Icon>
    </ButtonStyle>
  )
}

export default Button