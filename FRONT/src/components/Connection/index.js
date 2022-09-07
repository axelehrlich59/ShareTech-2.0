import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import Button from "../Button/Index";
import { Link } from "react-router-dom";
import backgroundImg from "../../assets/educational-bg.jpg";
import AlertCard from "../AlertCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { faFrown, faSmile } from "@fortawesome/free-solid-svg-icons";
import { promiseSuccessAlert } from "../../utils/functions";
import LabelError from "../LabelErrorMessage";

const MainContainerConnection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
const SuccessIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  color: ${({color}) => color};
`

const Connection = ({
  showAlertSuccessUserCreated,
  setShowAlertSuccessUserCreated,
  setShowAlertSuccessLogin,
  showAlertFailedLogin,
  setShowAlertFailedLogin,
}) => {

  const navigate = useNavigate()
  const [showLabelError, setShowLabelError] = useState(true)
  const {register, handleSubmit, formState} = useForm()
  const {isSubmitting, errors} = formState

  const limitEmailLength = 320


  const loginSuccessPromise = async () => {
    promiseSuccessAlert()
    setShowAlertSuccessLogin(true)
    setTimeout(() => setShowAlertSuccessLogin(false), 10000)
  }

  const onSubmit = async(dataToInsert) => {
    if(Object.keys(dataToInsert).length === "") return;
    try {
      axios.post('http://localhost:8000/login', dataToInsert, {
      withCredentials: true
    })
      .then((res) => {
        if(res.data.success === false) {
          setShowAlertFailedLogin(true)
          setTimeout(() => setShowAlertFailedLogin(false), 10000)
          return;
        }
        navigate("/", {replace: true})
        loginSuccessPromise()
        return res.data
      })
    } catch(error) {
      console.log(error)
    }
  }

  const closeLabelError = () => {
    setShowLabelError(false)
    clearState()
  }

  const clearState = () => {
    setTimeout(() => {
      setShowLabelError(true)
    }, 5000)
  }

  return (
    <MainContainerConnection>
      {showAlertSuccessUserCreated && <AlertCard 
        text={"Votre compte a été crée, vous pouvez a présent vous connecter."}
        icon={<SuccessIcon color="#292D3E" icon={faSmile}/>}
        onCloseAlert={() => setShowAlertSuccessUserCreated(false)}
        isOpen={true}
      />}
      {showAlertFailedLogin && <AlertCard 
        text={"L'email ou mot de passe est incorrect."}
        icon={<SuccessIcon color="#FF4858" icon={faFrown}/>}
        onCloseAlert={() => setShowAlertFailedLogin(false)}
        isOpen={true}
        backgroundColor={"#FDD5D5"}
        textColor={"#EE362F"}
      />}
      <ContainerConnection type={"post"} onSubmit={handleSubmit(onSubmit)}>
        <MainContainerItems>
          <ContainerTitle>Bienvenue,</ContainerTitle>
          <ContainerItemConnection>
            <ContainerInput 
               name="email"
               type="email"
               placeholder="Email"
               {...register("email", {
                 required: "Le choix d'un email est nécessaire",
                 maxLength: limitEmailLength,
               })}
            />
            {errors.email && showLabelError && <LabelError
              text={errors?.email?.message}
              closeLabelError={closeLabelError}
              icon={"x"}
            />}
            <ContainerInput 
              name="password"
              type="password"
              placeholder="Mot de passe"
              {...register("password", {
                required: "Le choix d'un mot de passe est nécessaire",
              })}
            />
            {errors.password && showLabelError && <LabelError
            text={errors?.password?.message}
            closeLabelError={closeLabelError}
            icon={"x"}
          />}
          </ContainerItemConnection>
          <ContainerSmallText>
            <small>Pas encore inscrit ? 
              <LinkToInscription to="/Inscription"> Cliquez ici</LinkToInscription>
            </small>
          </ContainerSmallText>
          <ContainerConnectionButton>
            <Button 
              type={"button"}
              text={"Connexion"}
              hideBorder={true}
              boxShadowIsActive={true}
              height={"40px"}
              width={"140px"}
              disabled={isSubmitting}
            />
          </ContainerConnectionButton>
        </MainContainerItems>
      </ContainerConnection>
    </MainContainerConnection>
  )
}

export default Connection