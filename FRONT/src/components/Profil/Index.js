import React from "react";
import styled from 'styled-components'
import AvatarImg from "../../assets/img_avatar3.png"
import ProfilElement from "./ItemProfile";
import Button from "../Button/Index";
import backgroundImg from "../../assets/educational-bg.jpg"
import { featureNotAvailableYet } from "../../utils/functions"

const  MainContainerProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92%;
  font-family: 'DM Sans';
  background: url(${backgroundImg});
`
const  ContainerProfil = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 60%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 720px) {
    width: 80%;
  }
  border-radius: 15px;
  background-color: white;
`
const ContainerProfilPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
`
const ProfilPicture = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  @media screen and (max-width: 720px) {
    width: 150px;
    height: 150px;
  }
`

const ContainerProfileName = styled.div`
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 30px;
  }
`

const ContainerProfileElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 22px;
  }
`

const ContainerSaveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
`



const Profil = () => {
  

  return (
    <MainContainerProfile>
      <ContainerProfil>
        <ContainerProfilPicture>
          <ProfilPicture src={AvatarImg}/>
        </ContainerProfilPicture>
        <ContainerProfileName>Admin</ContainerProfileName>
        <ContainerProfileElements>
          <ProfilElement 
            text={"Nombre de publications :"}
            data={0}
          />
          <ProfilElement 
            text={"Date de création :"}
            data={"24/04/2022"}
          />
        </ContainerProfileElements>
        <ContainerSaveButton>
          <Button 
            text={"Enregistrer"}
            backgroundColor={"#EFF1F0"}
            hideBorder={true}
            boxShadowIsActive={true}
            height={"40px"}
            width={"140px"}
            onClick={featureNotAvailableYet}
          />
        </ContainerSaveButton>
      </ContainerProfil>
    </MainContainerProfile>
  )
}

export default Profil