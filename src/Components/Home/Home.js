import React from 'react'
// import SideNav from "../Static/SideNav/sideNav.js";
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
        {/* <SideNav/> */}
    </Container>
  )
};

export default Home;

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: red;
display: flex;
justify-content: space-between;
align-items: center;
/* margin-top: 80px; */

@media Screen and (max-width: 768px){
  flex-direction: column-reverse;
  justify-content: space-between;
  height: 100vh;
}
`;