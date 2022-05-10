import React from "react";
import styled from 'styled-components'

const ContainerProfileItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 20%;
  border-radius: 5px;
  margin-bottom: 9px;
  background-color #EFF1F0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }
  @media screen and (max-width: 720px) {
    width: 90%;
    font-size: 13px;
  }
`

const ProfileElement = styled.div`
  margin-right: 10px;
`
const DataElement = styled.div`
  font-weight: bold;
`



const ProfilElement = ({
  text,
  data,
}) => {
  

  return (
    <ContainerProfileItems>
      <ProfileElement>
        {text}
      </ProfileElement>
      <DataElement>
        {data}
      </DataElement> 
    </ContainerProfileItems>
  )
}

export default ProfilElement