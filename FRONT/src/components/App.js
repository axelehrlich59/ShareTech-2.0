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
  const [showAlertSuccess, setShowAlertSuccess] = useState(false)
  return (
    <>
      <MainContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage 
              showAlertSuccess={showAlertSuccess} 
              setShowAlertSuccess={setShowAlertSuccess}
            />} exact
            />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/Post" element={<PublishArticle />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Connexion" element={<Connection />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/ArticleUpdate/:id" element={<UpdateArticle setShowAlertSuccess={setShowAlertSuccess} />}/> 
          </Routes>
        </Router>
      </MainContainer>
    </>
  );
}

export default App;
