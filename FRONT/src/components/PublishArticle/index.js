import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import TextArea from "./TextArea";
import Button from "../Button/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import backgroundImg from "../../assets/educational-bg.jpg"
import { onInsertArticleToDb } from "../../utils/functions"

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
  const [articleText, setArticleText] = useState("")

  const hidePublicationContainer = () => {
    setShowPublicationContainer(false)
  }

  const articleContent = (e) => {
    const textAreaContent = e.target.value
    setArticleText(textAreaContent)
  }

  const postArticle = () => {
    const dataToInsert = {
      id: uuidv4(),
      text: articleText,
    }
    onInsertArticleToDb(dataToInsert)
    setArticleText("")
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
            articleContent={articleContent}
            name={"TextArticleContent"}
            value={articleText}
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
              onClick={postArticle}
            />
          </PublicationButtonContainer>
        </PublicationArticleContainer>
      </MainContainerPublicationArticle>}
    </>
  )
}

export default PublishArticle