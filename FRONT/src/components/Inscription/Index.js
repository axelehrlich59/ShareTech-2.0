import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import backgroundImg from "../assets/educational-bg.jpg"
import { useForm } from "react-hook-form";
import LabelError from "./LabelErrorMessage";
import FormHooks from "./FormHooks";
//import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MainContainerInscription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 92%;
  font-family: 'DM Sans';
  background: url(${backgroundImg});
`
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


const Inscription = () => {

  return (
    <MainContainerInscription>
      <FormHooks/>
    </MainContainerInscription>
  )
}

export default Inscription