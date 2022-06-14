import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import TextArea from "./TextArea";
import Button from "../Button/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import backgroundImg from "../../assets/educational-bg.jpg"
import { useNavigate } from "react-router-dom"

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

  const navigate = useNavigate()

  const [showPublicationContainer, setShowPublicationContainer] = useState(true)
  const [articleText, setArticleText] = useState("")

  const hidePublicationContainer = () => {
    setShowPublicationContainer(false)
  }

  const articleContent = (e) => {
    const textAreaContent = e.target.value
    setArticleText(textAreaContent)
  }

  const onInsertArticleToDb = (dataToInsert) => {
    if(articleText === "") return;
    return fetch('http://localhost:8000/stored', {
      method: 'POST',
      body: JSON.stringify(dataToInsert),
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
      },
    }) 
    .then(res => {
      navigate("/", {replace: true})
      return res.json()
    })
    .then(data => {
      console.log(data)
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
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
        <PublicationArticleContainer role={"PublicationArticleContainer"}>
          <TextArea 
            placeholder={"Vous voulez plublier un article vous aussi ?"}
            rows={20}
            cols={100}
            articleContent={articleContent}
            name={"TextArticleContent"}
            articleText={articleText}
          />
          <PublicationButtonContainer role={"ContainerButton"}>
            <Button 
              text={"Publier"}
              textColor={"#292D3E"}
              borderColor={"#292D3E"}
              boxShadowIsActive={true}
              hideBorder={!articleText > 0 ? false : true}
              height={"40px"}
              width={"140px"}
              onClick={postArticle}
              disabled={!articleText > 0 ? true : false}
            />
          </PublicationButtonContainer>
        </PublicationArticleContainer>
      </MainContainerPublicationArticle>}
    </>
  )
}

export default PublishArticle