import React, {useState} from 'react';
import styled from 'styled-components'
import Button from "../Button";
import { useForm } from "react-hook-form";
import LabelError from "../LabelErrorMessage";

const ContainerInscription = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40%;
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
  height: 100%;
`
const ContainerItemConnection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50%;
`
const ContainerTitle = styled.div`
  display: flex;
  width: 100%;
  height: 18%;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
  @media screen and (max-width: 720px) {
    font-size: 18px;
  }
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


const FormHooks = () => {

  const [showLabelError, setShowLabelError] = useState(true)

  const limitSizeCharacters = 30
  const limitEmailLength = 320
  const limitCharactersUsername = `Le nom d'utilisateur ne peut pas dépasser ${limitSizeCharacters} caractères !`
  const limitCharactersEmail = `L'email ne peut pas dépasser ${limitEmailLength} caractères !`
  

  const {register, handleSubmit, formState} = useForm()
  const {isSubmitting, errors} = formState

  const onSubmit = async(data) => {
    waitForResponse(2000)
  }

  

  const waitForResponse = (duration = 1000) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration)
    })
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

  console.log('errors ===== ', errors)

  return (
    <ContainerInscription type={"post"} onSubmit={handleSubmit(onSubmit)}>
      <MainContainerItems>
        <ContainerTitle>Pas encore inscrit ? C'est par ici :</ContainerTitle>
        <ContainerItemConnection>
          <ContainerInput 
            name="username"
            type="text"
            placeholder="Identifiant" 
            {...register("username", {
              required: "Le choix d'un identifiant est nécessaire",
              maxLength: limitSizeCharacters,
            })}
          />
          {errors.username && errors.username.type === "required" && showLabelError && <LabelError
            text={errors?.username?.message}
            closeLabelError={closeLabelError}
            icon={"x"}
          />}
          {(errors.username && errors.username.type === "maxLength") && <LabelError 
            text={limitCharactersUsername}
          />}
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
          {(errors.email && errors.email.type === "maxLength") && <LabelError 
            text={limitCharactersEmail}
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
        <ContainerConnectionButton>
          <Button 
            text={"Inscription"}
            hideBorder={true}
            boxShadowIsActive={true}
            height={"40px"}
            width={"140px"}
            disabled={isSubmitting}
          />
        </ContainerConnectionButton>
      </MainContainerItems>
    </ContainerInscription>
  )
}

export default FormHooks