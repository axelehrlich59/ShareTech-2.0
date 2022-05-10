import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import Button from "../Button/Index";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/educational-bg.jpg"

const MainContainerConnection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92%;
  font-family: 'DM Sans';
  background: url(${backgroundImg});
`
const ContainerConnection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  height: 70%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 720px) {
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }
  border-radius: 15px;
  background-color: white;
`
const MainContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70%;
  background-color: white;
`
const Form = styled.form`
`
const ContainerItemConnection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80%;
`
const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
`
const ContainerInput = styled.input`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 15%;
  font-size: 16px;
  padding-left: 8px;
  border: 2px solid #292D3E;
  border-radius: 5px;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 16px;
  }
`
const ContainerConnectionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
`
const ContainerSmallText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const LinkToInscription = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: black;
`


const Connection = () => {

  return (
    <MainContainerConnection>
      <ContainerConnection type={"post"}>
        <MainContainerItems>
          <ContainerTitle>Bienvenue,</ContainerTitle>
          <ContainerItemConnection>
            <ContainerInput type={"email"} placeholder="Email"></ContainerInput>
            <ContainerInput type={"password"} placeholder="Mot de passe"></ContainerInput>
          </ContainerItemConnection>
          <ContainerSmallText>
            <small>Pas encore inscrit ? 
              <LinkToInscription to="/Inscription"> Cliquez ici</LinkToInscription>
            </small>
          </ContainerSmallText>
          <ContainerConnectionButton>
            <Button 
              text={"Connexion"}
              hideBorder={true}
              boxShadowIsActive={true}
              height={"40px"}
              width={"140px"}
            />
          </ContainerConnectionButton>
        </MainContainerItems>
      </ContainerConnection>
    </MainContainerConnection>
  )
}

export default Connection