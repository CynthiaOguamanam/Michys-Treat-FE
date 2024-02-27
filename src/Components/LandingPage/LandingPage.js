import React from 'react'
import styled from 'styled-components'
import HeroPage from './HeroPage'
import Whatyoulike from './Whatyoulike'
import Menu from "./Menu.js"
// import ImageSlider from "./Imageslider"
// import image1 from "../Assets/4.png"
// import image2 from "../Assets/bfast.jpg"
// import image3 from "../Assets/brunch.jpg"
// import image4 from "../Assets/cake.jpg"
// import image5 from "../Assets/cereal.jpg"
// import image6 from "../Assets/chocolate-cream.jpg"

const LandingPage = () => {
  return (
    <Container>
    <HeroPage/>
    <Whatyoulike/>
    <Menu/>
    {/* <ImageSlider images={[image1, image2,image3, image4, image5, image6]} /> */}
    </Container>
  )
}

export default LandingPage;

const Container = styled.div`
width: 100%;
height: auto;
background-color: goldenrod;
display :flex;
flex-direction: column;
justify-content: center;
color: #231E41;
`;