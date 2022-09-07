import React from "react";
import styled from "styled-components"

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 40px;
  margin: 5px;
  cursor: pointer;
  font-size: 17px;
  @media (min-width: 768px) and (max-width: 1024px) {
    color: black;
    width: 100px;
    height: 50px;
    font-size: 18px;  
  }
  color: ${({color}) => color};
`

const NavbarItem = ({
  text,
  color,
  onClick,
}) => {
  return (
    <NavItem 
      color={color}
      onClick={onClick}
    >{text}</NavItem>
  )
}

NavbarItem.defaultProps = {
  color: "black",
}

export default NavbarItem