import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Logo from "../../assets/network.png"
import Button from "../Button/Index";
import NavbarItem from "./NavbarItem";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from 'js-cookie';
import { checkTokenExist } from "../../utils/functions";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({linkcolor}) => linkcolor};
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    transition: 0.3s;
    opacity: 0.7;
  }
`
const StyledLinkButton = styled(Link)`
  text-decoration: none;
`
const NavbarTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8%;
  font-family: 'DM Sans';
  @media screen and (max-width: 720px) {
    width: 100%;
    height: 10%;
  }
`
const SectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  color: black;
  font-size: 19px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;  
    margin-right: 15px;
    font-size: 18px;
  }
  @media screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    width: 20%;
  }
`
const NavItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`
const BurgerIcon = styled.div`
  display: none;
  @media screen and (max-width: 720px) {
    display: flex;
    align-items: center;
    color: black;
    font-size: 25px;
    width: 10%;
  }
`
const BurgerMenuContainer = styled.div`
  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    top: 0;
    height: 25%;
    width: 100%;
    transition: 0.5s;
  }
`
const BurgerMenuItems = styled.div`
  @media screen and (max-width: 720px) {  
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35%;
    font-size: 15px;
    font-weight: bold;
    font-family: 'DM Sans';
  }
`
const StyledLinkLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  width: 12%;
  margin-left: 5px;
`
const Img = styled.img`
  width: 53px;
  border-radius: 15%;
  @media (min-width: 720px) and (max-width: 1024px) {
    width: 60px;
    height: 50px;
    margin-right: 10px;
  }
`
const TextLogo = styled.div`
  color: black;
  font-size: 1.6rem;
  font-weight: bold;
  margin-left: 10px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.6rem; 
  }
`



const Navbar = ({
  linkcolor,
}) => {
  const tokenFromCookies = Cookies.get('access_token')
  const isUserConnected = checkTokenExist(tokenFromCookies)
  
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const onClickBurgerIcon = () => {
    setShowBurgerMenu(previousState => !previousState)
  }

  const logout = () => {
    axios.request({
      url: `http://localhost:8000/logout`,
      method: "get",
      withCredentials: true,
    }).then(() => {
        navigate("/", {replace: true})
    })
  }

  return (
    <>
      <NavbarTop>
        <SectionContent>
          <StyledLinkLogo to="">
            <Img src={Logo}/>
            <TextLogo>ShareTech</TextLogo>
          </StyledLinkLogo>
          <NavItemsContainer>
            <StyledLink className="styledLink" to="/AboutUs">
              <NavbarItem text={"A propos"}/>
            </StyledLink>
            {isUserConnected && <StyledLink className="styledLink" to="/Post">
              <NavbarItem text={"Publier"}/>
            </StyledLink>}
            {isUserConnected && <StyledLink className="styledLink" to="/Profil">
              <NavbarItem text={"Profil"} />
            </StyledLink>}
            {isUserConnected && <NavbarItem color={"red"} text={"Déconnexion"} 
              onClick={logout}
            />}
            {!isUserConnected && <StyledLinkButton to="/Connexion">
              {location.pathname !== "/Connexion" && <Button
                text={"Connexion"}
                backgroundColor={"#FFFFFF"}
                textColor={"black"}
                height={"35px"}
                width={"120px"}
                hideBorder={true}
              />}
            </StyledLinkButton>}
            {!isUserConnected && <StyledLinkButton to="/Inscription">
              <Button
                text={"Inscription"}
                backgroundColor={"#292D3E"}
                textColor={"#FFFFFF"}
                hideBorder={true}
  
                height={"35px"}
                width={"120px"}
              />
            </StyledLinkButton>}
          </NavItemsContainer>
        </SectionContent>
        <BurgerIcon>
          <FontAwesomeIcon icon={faBars} onClick={onClickBurgerIcon}/>
        </BurgerIcon>
      </NavbarTop>
      {showBurgerMenu && <BurgerMenuContainer>
        <BurgerMenuItems>
          <StyledLink linkcolor={"black"} to="/AboutUs">A propos</StyledLink>
        </BurgerMenuItems>
        {isUserConnected && <BurgerMenuItems>
          <StyledLink linkcolor={"black"} to="/Post">Publier</StyledLink>
        </BurgerMenuItems>}
        {isUserConnected && <BurgerMenuItems>
          <StyledLink linkcolor={"black"} to="/Profil">Profil</StyledLink>
        </BurgerMenuItems>}
        <BurgerMenuItems>
          <StyledLink linkcolor={"black"} to="/Connexion">Connexion</StyledLink>
        </BurgerMenuItems>
        <BurgerMenuItems>
          <StyledLink linkcolor={"black"} to="/Inscription">Inscription</StyledLink>
        </BurgerMenuItems>
        {isUserConnected && <BurgerMenuItems>
          <StyledLink 
            to="/"
            onClick={logout}
            linkcolor={"red"}
          >Deconnexion</StyledLink>
        </BurgerMenuItems>}
      </BurgerMenuContainer>}
    </>
  )
}

Navbar.defaultProps = {
  linkcolor: "#000000",
}

export default Navbar