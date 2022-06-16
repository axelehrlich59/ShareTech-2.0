import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import backgroundImg from "../../assets/educational-bg.jpg"
import { useLocation } from "react-router-dom"

const MainContainerModificationArticle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 92%;
  background: url(${backgroundImg});
`


const UpdateArticle = () => {

  const location = useLocation()

  return (
    <>
      <MainContainerModificationArticle>
        <h1>Hello {location.state.id}</h1>
      </MainContainerModificationArticle>
    </>
  )
}

export default UpdateArticle