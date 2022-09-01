import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import backgroundImg from "../../assets/educational-bg.jpg"
import TokyoNight from "../../assets/tokyoByNight.jpg"
import ArticleDisplay from "../ArticleDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown, faSmile } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom"
import CardSuccess from "../CardSuccess";
import axios from "axios";

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
    height: 800px;
  } 
  @media (min-width: 768px) and (max-width: 1026px) {
    display: flex;
    justify-content: center;
    height: 1000px;
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
const SuccessIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
  width: 50px;
  height: 50px;
  color: #292D3E;
`

const HomePage = ({
  showAlertSuccessUpdate,
  setshowAlertSuccessUpdate,
  showAlertSuccessPost,
  setShowAlertSuccessPost,
}) => {

  const [articles, setArticles] = useState([])
  const navigate = useNavigate()

  const firstArticleText = "When React came out, virtual DOM got everyone talking. It was a breakthrough and, like any good piece of engineering, it was built with carefully considered tradeoffs.The concept was so simple and powerful at the same time that it became the way people introduce and differentiate React from other front-end frameworks and libraries. “React is a view layer that uses virtual DOM for performance.” Another motto you can often hear is “React can be used as the V in MVC.” At the time, downplaying React’s role in application architecture was intentional because React already had too many “seemingly bad” ideas to risk alienating people by adding some more.In fact, React is not at all about virtual DOM. It’s an implementation detail that made React famous, but it overshadowed other concepts that are less shiny but more important in the long run."
  const secondArticleText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere elit velit, in malesuada mauris pretium aliquam. Proin vestibulum elit metus, eu pellentesque justo pellentesque et. Curabitur elementum, sapien ac scelerisque bibendum, nulla odio faucibus nibh, eu suscipit nulla est vel enim. Curabitur viverra massa sit amet justo euismod, in placerat metus ultrices. Nullam metus dui, fringilla eu porta id, condimentum nec leo. Integer dolor ipsum, imperdiet quis ultricies quis, rhoncus ut lacus. Suspendisse sed lacus ut lorem fermentum mattis. Sed cursus eros et mauris maximus commodo. Fusce vel vestibulum nunc, sit amet ornare tellus. Curabitur sagittis, dui in eleifend volutpat, purus velit vestibulum leo, bibendum vulputate nunc elit vitae neque.Nullam fermentum metus sit amet risus malesuada bibendum. Integer et felis enim. Duis molestie, lorem sit amet fermentum suscipit, nisl dui hendrerit arcu, at gravida dolor lectus id ligula. Aliquam mi erat, commodo eu nulla id, bibendum condimentum justo. In felis mi, sollicitudin eu tortor non, pulvinar ullamcorper leo. Proin blandit vitae justo ut lacinia. Vestibulum in convallis neque, quis pulvinar augue. Vivamus a turpis nisl. Cras nec nibh fermentum, dignissim arcu et, ultrices nisi. Phasellus dapibus lorem vel erat ornare ultricies. Etiam ornare justo nisi, id luctus neque consequat nec. Pellentesque pulvinar quam sit amet lectus laoreet pharetra. Nullam lobortis sodales ex, vel volutpat purus porttitor nec. Nunc eget eros nec nunc dapibus laoreet sit amet et risus. In aliquet odio a nunc molestie, vitae aliquet mi hendrerit. Phasellus imperdiet tristique velit.Praesent at vestibulum risus. Sed vel porttitor lectus. Vestibulum molestie dolor enim, ut interdum neque euismod eu. Morbi consectetur vehicula est a imperdiet. Integer tristique urna mauris, a tristique libero dictum id. In dignissim vehicula orci. Sed finibus pharetra faucibus. Proin elementum ornare cursus. Cras magna justo, facilisis quis suscipit a, tempor accumsan nunc. Nulla commodo eget mauris ut ullamcorper. Nulla finibus elementum est vitae venenatis. Etiam gravida pulvinar tincidunt. Aliquam erat volutpat. Praesent tristique finibus finibus. Nunc blandit tincidunt blandit."

  useEffect(() => {
    try {
      axios.get("http://localhost:8000/articles")
      .then(res => {
        const articlesFromDb = res.data
        setArticles(articlesFromDb)
      })
    } catch(error) {
      console.log(error)
    }
  }, []);  

  const onDeleteArticle = (id) => {
    fetch(`http://localhost:8000/delete/${id}`, {
      method: 'DELETE',
    })
    .then((res) => 
      res.text(),
      setArticles(
        articles.filter(article => {
          return article._id !== id
        })
      )
    )
    .then(res => console.log(res))
  }

  const onModificationArticlePage = (id, text) => {
    navigate(`/ArticleUpdate/${id}`, {state:{ id: id, text: text}})
  }

  return (
    <>
      {showAlertSuccessUpdate && <CardSuccess 
        text={"La modification de l'article a bien été prise en compte"}
        icon={<SuccessIcon icon={faSmile}/>}
        onCloseAlert={() => setshowAlertSuccessUpdate(false)}
        isOpen={true}
      />}
      {showAlertSuccessPost && <CardSuccess 
        text={"La publication de votre article s'est déroulée avec succès"}
        icon={<SuccessIcon icon={faSmile}/>}
        onCloseAlert={() => setShowAlertSuccessPost(false)}
        isOpen={true}
      />}
      {articles.length === 0 ? <>
        <MainContainerArticlesPublished>
          <ArticleDisplay 
            text={firstArticleText}
            username={"Admin"}
            profilePicture={TokyoNight}
          />
        </MainContainerArticlesPublished> : 
        <MainContainerArticlesPublished>
          <ArticleDisplay 
            text={secondArticleText}
            username={"Admin"}
            profilePicture={TokyoNight}
          />
        </MainContainerArticlesPublished>
      </> : 
      articles.map((article, index) => (
        <MainContainerArticlesPublished key={index}>
          <ArticleDisplay 
            text={article.text}
            username={"Admin"}
            profilePicture={TokyoNight}
            id={article._id}
            onDeleteArticle={onDeleteArticle}
            onModificationArticlePage={onModificationArticlePage}
          />
        </MainContainerArticlesPublished>
      ))}
    </>
  )
}

export default HomePage