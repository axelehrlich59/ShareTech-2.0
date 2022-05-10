import React, {useState} from "react";
import styled from 'styled-components'
import PublishArticle from "../PublishArticle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faE, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { featureNotAvailableYet } from "../../utils/functions"

const ContainerArticle = styled.div`
  display: flex;
  height: 650px;
  width: 1000px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  background-color: white;
  @media screen and (max-width: 720px) {
    width: 280px;
    justify-content: center;
  }
  @media (min-width: 720px) and (max-width: 1024px) {
    width: 500px;
  }
`
const ContainerPictureArticle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 650px;
  width: 200px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  @media screen and (max-width: 720px) {
    width: 280px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
  }
`
const ContainerProfilElements = styled.div`
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const ContainerUserName = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
`
const ContainerTextArticle = styled.div`
  display: flex;
  height: 630px;
  width: 700px;
  padding: 10px;
  font-size: 18px;
  font-weight: lighter;
`
const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`
const ContainerCrud = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 80px;
  height: 70px;
  margin-top: 20px;
`
const ContainerIconTrash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 10px, rgba(0, 0, 0, 0.13) 0px 2px 2px;
    transition: 0.6s;
  }
  cursor: pointer;
`
const ContainerIconEdit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
  :hover {
    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.12) 0px 10px 10px, rgba(0, 0, 0, 0.13) 0px 2px 2px;
    transition: 0.6s;
  }
  cursor: pointer;
`
const IconTrash = styled(FontAwesomeIcon)`
  color: #F16C63;
`
const IconEdit = styled(FontAwesomeIcon)`
  color: #5c95ff;
`



const ArticleDisplay = ({
  username,
  profilePicture,
  text,
}) => {

  return (
    <>
      <ContainerArticle>
        <ContainerPictureArticle>
          <ContainerProfilElements>
            <Img profilePicture={profilePicture} src={profilePicture}/>
            <ContainerUserName username={username}>{username}</ContainerUserName>
          </ContainerProfilElements>
        </ContainerPictureArticle>
        <ContainerTextArticle text={text}>
          {text}
        </ContainerTextArticle>
        <ContainerCrud>
          <ContainerIconTrash onClick={featureNotAvailableYet}>
            <IconTrash icon={faTrash}/>
          </ContainerIconTrash>
          <ContainerIconEdit onClick={featureNotAvailableYet}>
            <IconEdit icon={faEdit}/>
          </ContainerIconEdit>
        </ContainerCrud>
      </ContainerArticle>
    </>
  )
}

export default ArticleDisplay