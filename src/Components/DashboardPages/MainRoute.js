import React, {useState} from 'react';
// import {BrowserRouter, Route, Routes} from "react-router-dom"
import styled from 'styled-components';
import DashHome from "./DashHome.js"

const MainRoute = (props) => {
  
  const [page, setPage] = useState(false);

  const changePage = () =>{
    setPage(!page)
  };

  return (
    <Container>
      <Wrapper>
        {page? <DashHome page={page} changePage={changePage}/> : <div>Not the dashboard</div>}
      </Wrapper>
    </Container>
  )
};

export default MainRoute;

const Container = styled.div`
width: 85%;
background-color: green;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;

const Wrapper = styled.div`
width: 90%;
height: 90%;
background-color: tomato;
display: flex;
justify-content: center;
align-items: center;
margin-top: 50px;
padding: 20px 0 0 0;
`;