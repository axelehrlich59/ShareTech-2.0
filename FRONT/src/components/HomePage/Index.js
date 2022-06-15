import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import backgroundImg from "../../assets/educational-bg.jpg"
import AvatarImg from "../../assets/img_avatar3.png"
import ArticleDisplay from "../ArticleDisplay";


const MainContainerArticlesPublished = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: url(${backgroundImg});
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
    {articles.map((article, index) => (<MainContainerArticlesPublished key={index}>
      <ArticleDisplay 
        text={article.text}
        username={"Admin"}
        profilePicture={AvatarImg}
      />
    </MainContainerArticlesPublished>))}
    </>
  )
}

export default HomePage