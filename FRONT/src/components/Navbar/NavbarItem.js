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
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100px;
    height: 50px;
    font-size: 18px;  
  }
`

const NavbarItem = ({
  text,
}) => {
  return (
    <NavItem>{text}</NavItem>
  )
}

export default NavbarItem