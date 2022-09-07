import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import styled from 'styled-components'
import backgroundImg from "../../assets/educational-bg.jpg"
import { useNavigate, useLocation } from "react-router-dom"
import Button from "../Button/Index";
import { promiseSuccessAlert } from "../../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import AlertCard from "../AlertCard";
import axios from "axios";

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
const ContainerButtons = styled.div`
  display: flex;
  width: 20%;
  height: 15%;
  justify-content: space-around;
  align-items: center;
`
const SuccessIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  color: #292D3E;
`


const UpdateArticle = ({
  setshowAlertSuccessUpdate,
  showAlertUnauthorizedUpdate,
  setShowAlertUnauthorizedUpdate,
}) => {

  const location = useLocation()
  const navigate = useNavigate()
  const [originalArticle, setOriginalArticle] = useState(location.state.text)
  const articleId = location.state.id
  
  const onChangeArticleValue = (e) => {
    setOriginalArticle(e.target.value)
  }

  const updateArticleSuccessPromise = async () => {
    promiseSuccessAlert()
    setshowAlertSuccessUpdate(true)
    setTimeout(() => setshowAlertSuccessUpdate(false), 10000)
  }

  const onUpdateArticle = (id) => {
    const dataToSend = {
      text: originalArticle
    }
    axios.request({
      url: `http://localhost:8000/update/${id}`,
      method: "PUT",
      withCredentials: true,
      data: dataToSend,
    }).then(res => {
      navigate("/", {replace: true})
      updateArticleSuccessPromise()
      return res.json()
    })
    .catch(err => {
      console.log("Error Reading data " + err);
      if([401].includes(err.response.status)) {
        setShowAlertUnauthorizedUpdate(true)
        setTimeout(() => setShowAlertUnauthorizedUpdate(false), 10000)
        return;
      }
    })
  }

  return (
    <>
      <MainContainerModificationArticle>
        {showAlertUnauthorizedUpdate && <AlertCard 
          text={"Vous n'êtes pas autorisé à modifier cet article."}
          icon={<SuccessIcon icon={faFrown}/>}
          onCloseAlert={() => setShowAlertUnauthorizedUpdate(false)}
          isOpen={true}
          backgroundColor={"#FDD5D5"}
          textColor={"#EE362F"}
        />}
        <PublicationArticleTextArea 
          rows={20}
          cols={100}
          defaultValue={originalArticle}
          onChange={onChangeArticleValue}
        />
        <ContainerButtons>
          <Button 
            text={"Annuler"}
            textColor={"#FFFFFF"}
            backgroundColor={"#F95668"}
            boxShadowIsActive={true}
            height={"40px"}
            width={"110px"}
            hideBorder={true}
            onClick={() => navigate("/", {replace: true})}
          />
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
        </ContainerButtons>
      </MainContainerModificationArticle>
    </>
  )
}

UpdateArticle.propTypes = {

}

UpdateArticle.defaultProps = {

}





export default UpdateArticle