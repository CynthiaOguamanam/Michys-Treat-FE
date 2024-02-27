import React, {useState} from 'react';
import logo from "../../Assets/logo.jpg";
import {FaTimes, FaBars,FaGlassCheers,FaHome, FaCoffee} from "react-icons/fa"
// FaHotdog,
import {
    Container, Wrapper, Logo, NavHold, Nav, MobileNav, Line, AuthHold, BurgerWrap
} from "./HeaderStyle"

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const HandleToggle = () =>{
        setToggle(!toggle)
    };

  return (
    <Container>
        <Wrapper>
            <Logo src={logo} alt="logo"/>
            <NavHold>
                <Nav to="/"><FaHome/>Home</Nav>
                <Nav to="/"><FaGlassCheers/>About</Nav>
                <Nav to="/"><FaCoffee/>Menu</Nav>
                <AuthHold>
                <Nav to="/">Signin</Nav>
                <Line></Line>
                <Nav to="/">Register</Nav>
                </AuthHold>
            </NavHold>
            <BurgerWrap onClick={HandleToggle}  >
              {toggle? (<FaTimes/>) : (<FaBars/>)}
            </BurgerWrap>

            {toggle? <MobileNav>
                <Nav to="/"><FaHome/>Home</Nav>
                <Nav to="/"><FaGlassCheers/>About</Nav>
               <Nav to="/"><FaCoffee/> Menu</Nav>
                <AuthHold>
                <Nav to="/">Signin</Nav>
                <Line></Line>
                <Nav to="/">Register</Nav>
                </AuthHold>
            </MobileNav> : null} 

        </Wrapper>
    </Container>
  )
};

export default Header;