import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from "./Components/LandingPage/LandingPage.js";
import Header from "./Components/Static/Header/Header.js";
import DashHome from "./Components/DashboardPages/DashHome.js";
import MainRoute from "./Components/DashboardPages/MainRoute.js";

const App = () =>{

  return(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/dashboard/home" element={<DashHome/>}/>
        <Route path="/dashboard/mainroute" element={<MainRoute/>}/>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;