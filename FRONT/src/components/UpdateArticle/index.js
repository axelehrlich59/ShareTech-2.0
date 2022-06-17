import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import backgroundImg from "../../assets/educational-bg.jpg"
import { useNavigate, useLocation } from "react-router-dom"
import Button from "../Button/Index";

const MainContainerModificationArticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 92%;
  background: url(${backgroundImg});
`
const PublicationArticleTextArea = styled.textarea`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.2rem;
  font-weight: light;
  font-family: 'DM Sans';
  padding: 8px;
  @media screen and (max-width: 720px) {
    width: 250px;
    height: 450px;
  }
  @media (min-width: 720px) and (max-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  resize: none;
` 
const ContainerUpdateButton = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center;
`


const UpdateArticle = ({
  setShowAlertSuccess,
}) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [originalArticle, setOriginalArticle] = useState(location.state.text)
  const articleId = location.state.id
  
  const onChangeArticleValue = (e) => {
    setOriginalArticle(e.target.value)
  }

  const updateArticleSuccessPromise = async () => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Article modifié !"), 1000)
    });
  
    setShowAlertSuccess(true)
    setTimeout(() => setShowAlertSuccess(false), 17000)
  }

  const onUpdateArticle = (id) => {
    const dataToSend = {
      text: originalArticle
    }
    fetch(`http://localhost:8000/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true,
      },
    }).then(res => {
      navigate("/", {replace: true})
      updateArticleSuccessPromise()
      return res.json()
    })
    .then(data => {
      console.log(data)
    }).catch(err => {
      console.log("Error Reading data " + err);
    });
  }

  return (
    <>
      <MainContainerModificationArticle>
        <PublicationArticleTextArea 
          rows={20}
          cols={100}
          defaultValue={originalArticle}
          onChange={onChangeArticleValue}
        />
        <ContainerUpdateButton>
          <Button 
            text={"Modifier"}
            textColor={"#292D3E"}
            borderColor={"#292D3E"}
            boxShadowIsActive={true}
            height={"40px"}
            width={"140px"}
            hideBorder={true}
            onClick={() => {onUpdateArticle(articleId)}}
          />
        </ContainerUpdateButton>
      </MainContainerModificationArticle>
    </>
  )
}

export default UpdateArticle