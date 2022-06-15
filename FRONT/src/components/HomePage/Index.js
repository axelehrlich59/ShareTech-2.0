import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import backgroundImg from "../../assets/educational-bg.jpg"
import TokyoNight from "../../assets/tokyoByNight.jpg"
import ArticleDisplay from "../ArticleDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

const MainContainerArticlesPublished = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: url(${backgroundImg});
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: center;
    height: 500px;
  } 
  @media (min-width: 768px) and (max-width: 900px) {
    display: flex;
    justify-content: center;
    height: 800px;
    font-size: 20px;
  }
`
const FontAwesomeIconContainer = styled(FontAwesomeIcon)`
  display: flex;
  margin-right: 20px;
  width: 40px;
  height: 40px;
  color: #292D3E;
`
const NoArticlesContainer = styled.div`
  text-align: center;
  width: 850px;
  height: 300px;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 600px;
  } 
  @media (min-width: 768px) and (max-width: 1024px) {
  }
`
const AvertissementNoContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 300px;
  } 
`



const HomePage = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/articles')
    .then(res => {
      return res.json()
    })
    .then(articlesFromDb => {
      setArticles(articlesFromDb)
    })
  }, []);  

  return (
    <>
      {articles.length === 0 ? <MainContainerArticlesPublished>
        <NoArticlesContainer>
          <AvertissementNoContent>
            <h1>Il n'y a actuellement aucun article de disponible... </h1>
            <FontAwesomeIconContainer icon={faFrown} />
          </AvertissementNoContent>
          <h1>Mais vous pouvez en ajouter un dans la section publier !</h1>
        </NoArticlesContainer>
      </MainContainerArticlesPublished> : 
      articles.map((article, index) => (
        <MainContainerArticlesPublished key={index}>
          <ArticleDisplay 
            text={article.text}
            username={"Admin"}
            profilePicture={TokyoNight}
          />
        </MainContainerArticlesPublished>
      ))}
    </>
  )
}

export default HomePage