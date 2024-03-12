import React from 'react'
import styled from 'styled-components'
import HeroPage from './HeroPage'
import Whatyoulike from './Whatyoulike'
import Menu from "./Menu.js"


const LandingPage = () => {
  return (
    <Container>
    <HeroPage/>
    <Whatyoulike/>
    <Menu/>
    </Container>
  )
}

export default LandingPage;

const Container = styled.div`
width: 100%;
height: auto;
/* background-color: goldenrod; */
display :flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #231E41;
`;