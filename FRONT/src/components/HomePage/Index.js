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
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget mi vehicula, pretium lacus nec, luctus elit. In non bibendum orci. Pellentesque venenatis elementum ex, vitae sodales eros tempus ac. Aliquam erat volutpat. Mauris dignissim vitae mauris vitae pulvinar. Praesent a imperdiet felis, in pellentesque urna. Fusce non elit id enim efficitur faucibus sed at magna. Integer nec nunc eu erat congue ultricies in ut leo. Suspendisse at vestibulum ipsum, in dapibus nisi. Etiam fermentum augue ipsum, sed hendrerit ante posuere ut. Morbi tortor diam, malesuada non tempor at, sodales ac velit. Curabitur a vulputate libero. Nam lacinia leo vel tempor interdum. Nam tempor consequat posuere. Donec vestibulum elementum congue. Nulla efficitur maximus bibendum. Maecenas tincidunt orci sem, ut imperdiet eros bibendum vel. Donec egestas nibh et sodales varius. Ut mi enim, consequat vel consequat sit amet, fringilla at lectus. Praesent suscipit risus odio, id vestibulum est mattis et. Nam lacinia non nulla in consectetur. Donec est odio, tempus nec interdum quis, lacinia quis velit. Maecenas malesuada nibh turpis, lobortis tristique orci aliquet a. In viverra nibh eu massa ornare consectetur. Donec leo felis, cursus nec lacinia at, luctus eu libero. Etiam feugiat sit amet magna quis tincidunt. Sed bibendum urna enim, id condimentum dui pulvinar vel. Ut tristique nisl non velit cursus auctor. Aenean commodo erat iaculis mauris rhoncus dictum. Donec sodales eros ut velit commodo vestibulum. Vivamus et purus purus. Nunc nec leo ut mauris tincidunt volutpat id quis lectus. Duis feugiat tortor ac velit volutpat, in posuere felis iaculis. Cras in urna sed metus varius sagittis id ac risus. Fusce in ligula eu magna elementum ullamcorper. Aliquam at nulla dolor. Etiam at nunc auctor, interdum leo at, ullamcorper augue. Aliquam non mi turpis. Etiam ut lectus eros. Cras arcu odio, accumsan in urna quis, vulputate molestie risus. Nulla vitae ornare massa. Pellentesque elit lorem, vehicula eget odio eget, interdum fringilla felis. Mauris vitae vulputate nunc, at vestibulum arcu. Morbi semper, est eu imperdiet semper, diam ex volutpat leo, ac tempus justo orci vitae sapien. Morbi lorem turpis, pretium id massa quis, dignissim faucibus arcu. Vestibulum ut odio a orci lobortis vestibulum eu vitae sem. Pellentesque at dictum metus, eget commodo leo. Etiam aliquam nisl elit, a accumsan lorem molestie in. Vestibulum nec turpis nisl. Sed fringilla et nisi a posuere. Proin aliquam augue non quam imperdiet, at tempus nulla finibus. Donec cursus accumsan diam, eget ullamcorper orci hendrerit ac. Vestibulum sagittis, sapien sed gravida hendrerit, mauris enim maximus quam, vitae ullamcorper orci justo eget dolor. Nullam fermentum neque velit, eu porttitor metus porttitor in. Sed enim ipsum, ultricies vitae odio ac, venenatis mattis sem."

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