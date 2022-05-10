import React from "react";
import styled from 'styled-components'

const PublicationArticleTextArea = styled.textarea`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  font-weight: light;
  font-family: 'DM Sans';
  padding: 8px;
  @media screen and (max-width: 720px) {
    width: 250px;
    height: 450px;
  }
  @media (min-width: 720px) and (max-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  resize: none;
`



const TextArea = ({
  placeholder,
  rows,
  cols,
}) => {
  

  return (
    <PublicationArticleTextArea 
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    />
  )
}

export default TextArea