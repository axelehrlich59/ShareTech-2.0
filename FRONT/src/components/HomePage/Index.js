import React, {useState} from "react";
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
  border-bottom: 2.5px solid black;
  overflow: auto;
  background: url(${backgroundImg});
`



const HomePage = () => {
   
  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta augue id sem bibendum, eu tempus elit pharetra. Proin et lobortis leo, eu ornare velit. Vestibulum malesuada auctor varius. Morbi varius neque nulla, vitae euismod leo placerat in. Nam nec mi convallis, commodo est congue, dignissim urna. Donec tempus cursus est in elementum. Nulla aliquam efficitur est quis faucibus. Pellentesque rutrum quis arcu at tincidunt. Curabitur ut nisl dapibus, dignissim lorem a, sagittis ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ac  viverra enim, at accumsan elit. Ut vitae bibendum purus. Suspendisse in sapien luctus, lacinia magna eu, ornare leo.Donec eu auctor leo. Cras lobortis sapien et enim semper aliquet. Praesent sollicitudin quam id eros semper accumsan.  Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tellus ex, vehicula in tincidunt eu, pharetra in mauris. Proin erat metus, feugiat placerat sapien in, rutrum fringilla libero. Mauris elit dui, efficitur ac interdum quis, pretium sit amet risus. Quisque felis libero, blandit in consequat non, suscipit id ipsum.Nam nec imperdiet purus. Quisque pretium ex vel mattis vehicula. Maecenas vitae ullamcorper quam.Mauris iaculis libero vitae dui semper, id hendrerit ante sodales. Curabitur semper mi ipsum, id dignissim dolor scelerisque vel. Praesent cursus arcu eget ultrices congue. Quisque a maximus ex. Nam dignissim, quam at bibendum porttitor, tellus orci congue odio, quis tempor nulla elit tristique sem. Proin et neque ultricies, sollicitudin lectus sit amet, egestas ante. Integer in sodales metus. Vivamus mattis, sapien non pulvinar venenatis, nibh purus tristique est, vitae luctus ligula lorem sed nibh. Proin tincidunt, sapien in mattis gravida, arcu lectus iaculis tortor, at ultrices orci lectus vitae mauris. Ut et lobortis ligula, vel suscipit justo."

  return (
    <>
    <MainContainerArticlesPublished>
      <ArticleDisplay 
        text={loremIpsum}
        username={"Axel"}
        profilePicture={AvatarImg}
      />
    </MainContainerArticlesPublished>
    <MainContainerArticlesPublished>
      <ArticleDisplay />
    </MainContainerArticlesPublished>
    </>
  )
}

export default HomePage