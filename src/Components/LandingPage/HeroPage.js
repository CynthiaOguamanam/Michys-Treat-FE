import React from "react";
import styled from "styled-components";
import bg from "../Assets/jollof.jpg"
// import bg from "../Assets/burger.jpg"

const HeroPage = () =>{
    return(
        <Container>
            <Div>
                Welcome to the home of <B>delicious delicacy 😋</B>
                <br/>
                Feed your <B>Dreams❗❗❗❗</B>
            </Div>
        </Container>
    )
};

export default HeroPage;

const Container = styled.div`
width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${bg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-top: 80px;
`;

const Div = styled.div`
color: white;
background-color: black;
opacity: 80%;
padding: 20px;
border-radius: 6px;
font-size: 30px;
text-align: center;
&:hover{
    background-color: white;
    color: black;
    transition: all 300ms ease;
    opacity: 70%;
}

@media Screen and (max-width: 768px){
font-size: 20px;
}
`;

const B = styled.b`
color: orangered;
`;