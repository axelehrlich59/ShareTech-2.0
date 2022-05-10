import React, {useState} from "react";
import styled from 'styled-components'
import TextArea from "./TextArea";
import Button from "../Button/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import backgroundImg from "../../assets/educational-bg.jpg"
import { featureNotAvailableYet } from "../../utils/functions"

const MainContainerPublicationArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 92%;
  background: url(${backgroundImg});
`
const PublicationArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`
const PublicationButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
const HidePublicationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`



const PublishArticle = () => {

  const [showPublicationContainer, setShowPublicationContainer] = useState(true)

  const hidePublicationContainer = () => {
    setShowPublicationContainer(false)
  }
   

  return (
    <>
      {showPublicationContainer && <MainContainerPublicationArticle>
        <HidePublicationContainer>            
          </HidePublicationContainer>
        <PublicationArticleContainer>
          <TextArea 
            placeholder={"Vous voulez plublier un article vous aussi ?"}
            rows={20}
            cols={100}
          />
          <PublicationButtonContainer>
            <Button 
              text={"Publier"}
              textColor={"#292D3E"}
              borderColor={"#292D3E"}
              boxShadowIsActive={true}
              hideBorder={true}
              height={"40px"}
              width={"140px"}
              onClick={featureNotAvailableYet}
            />
          </PublicationButtonContainer>
        </PublicationArticleContainer>
      </MainContainerPublicationArticle>}
    </>
  )
}

export default PublishArticle