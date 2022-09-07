import React, {useState} from "react";
import Navbar from "./Navbar/index.js"
import About from "../components/About/index.js";
import Profil from "./Profil/Index.js";
import Connection from "../components/Connection/index.js";
import HomePage from "./HomePage/Index.js";
import PublishArticle from "./PublishArticle/index.js";
import styled from 'styled-components'
import backgroundImg from "../assets/educational-bg.jpg"
import '../index.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Inscription from "./Inscription/Index.js";
import UpdateArticle from "./UpdateArticle/index.js";


const MainContainer = styled.div`
  margin: 0;
  font-family: 'DM Sans';
  height: 100vh;
  overflow: auto;
  @media screen and (max-width: 720px) {
    width: 100%;
  }
  background: url(${backgroundImg});
`

function App() {

  // SUCCESS STATES
  const [showAlertSuccessUpdate, setshowAlertSuccessUpdate] = useState(false)
  const [showAlertSuccessPost, setShowAlertSuccessPost] = useState(false)
  const [showAlertSuccessDelete, setShowAlertSuccessDelete] = useState(false)
  const [showAlertSuccessUserCreated, setShowAlertSuccessUserCreated] = useState(false)
  const [showAlertSuccessLogin, setShowAlertSuccessLogin] = useState(false)
  const [showAlertUnauthorizedDelete, setShowAlertUnauthorizedDelete] = useState(false)
  const [showAlertUnauthorizedUpdate, setShowAlertUnauthorizedUpdate] = useState(false)

  // FAILED STATES 
  const [showAlertFailedLogin, setShowAlertFailedLogin] = useState(false)

  return (
    <>
      <MainContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage 
              showAlertSuccessUpdate={showAlertSuccessUpdate} 
              setshowAlertSuccessUpdate={setshowAlertSuccessUpdate}
              showAlertSuccessPost={showAlertSuccessPost}
              setShowAlertSuccessPost={setShowAlertSuccessPost}
              showAlertSuccessDelete={showAlertSuccessDelete}
              setShowAlertSuccessDelete={setShowAlertSuccessDelete}
              showAlertSuccessLogin={showAlertSuccessLogin}
              setShowAlertSuccessLogin={setShowAlertSuccessLogin}
              showAlertUnauthorizedDelete={showAlertUnauthorizedDelete}
              setShowAlertUnauthorizedDelete={setShowAlertUnauthorizedDelete}
            />} exact
            />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Post" element={<PublishArticle 
              setShowAlertSuccessPost={setShowAlertSuccessPost}
            />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Connexion" element={<Connection 
              showAlertSuccessUserCreated={showAlertSuccessUserCreated}
              setShowAlertSuccessUserCreated={setShowAlertSuccessUserCreated}
              showAlertSuccessLogin={showAlertSuccessLogin}
              setShowAlertSuccessLogin={setShowAlertSuccessLogin}
              showAlertFailedLogin={showAlertFailedLogin}
              setShowAlertFailedLogin={setShowAlertFailedLogin}
            />} />
            <Route path="/Inscription" element={<Inscription 
              setShowAlertSuccessUserCreated={setShowAlertSuccessUserCreated}
            />} />
            <Route path="/ArticleUpdate/:id" element={<UpdateArticle
              showAlertSuccessDelete={showAlertSuccessDelete}
              setshowAlertSuccessUpdate={setshowAlertSuccessUpdate}
              showAlertUnauthorizedUpdate={showAlertUnauthorizedUpdate}
              setShowAlertUnauthorizedUpdate={setShowAlertUnauthorizedUpdate}
            />}/> 
          </Routes>
        </Router>
      </MainContainer>
    </>
  );
}

export default App;
