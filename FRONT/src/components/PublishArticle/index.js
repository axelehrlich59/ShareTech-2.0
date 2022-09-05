import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import TextArea from "./TextArea";
import Button from "../Button/Index";
import backgroundImg from "../../assets/educational-bg.jpg"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { promiseSuccessAlert } from "../../utils/functions";

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

const PublishArticle = ({
  setShowAlertSuccessPost,
}) => {

  const navigate = useNavigate()

  const [showPublicationContainer, setShowPublicationContainer] = useState(true)
  const [articleText, setArticleText] = useState("")

  const hidePublicationContainer = () => {
    setShowPublicationContainer(false)
  }

  const postArticleSuccessPromise = async () => {
    promiseSuccessAlert()
    setShowAlertSuccessPost(true)
    setTimeout(() => setShowAlertSuccessPost(false), 10000)
  }

  const articleContent = (e) => {
    const textAreaContent = e.target.value
    setArticleText(textAreaContent)
  }

  const onInsertArticleToDb = (dataToInsert) => {
    if(articleText === "") return;
    try {
      axios.post('http://localhost:8000/stored', dataToInsert, {
      withCredentials: true
      })
      .then(() => 
        postArticleSuccessPromise(),
        navigate("/", {replace: true}
      ))
    } catch(error) {
      console.log(error)
    }
  }

  const postArticle = () => {
    const dataToInsert = {
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
              text={"Annuler"}
              textColor={"#FFFFFF"}
              backgroundColor={"#FF0000"}
              boxShadowIsActive={true}
              height={"40px"}
              width={"110px"}
              hideBorder={true}
              onClick={() => navigate("/", {replace: true})}
            />
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