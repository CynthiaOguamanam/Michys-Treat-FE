import React from "react";
import styled from "styled-components";
// import {} from "react-icons/"

const Menu = () => {
    return(
        <Container>
            <Wrapper>
                <H1>P</H1>
                    <P>Consectetur numquam poro nemo veniam <br/>
                    eligendi rem adipisci quo modi.</P>
                    <Button> Full Menu</Button>
            </Wrapper>
        </Container>
    )
};

export default Menu;

const Container = styled.div`
width: 100%;
height: 70vh;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
`;
const Wrapper = styled.div`
width: 90%;
height: 90%;
/* background-color: purple; */
padding: 1rem;
display: flex;
flex-direction: column;
`;
const H1 = styled.h1`
color: #231E41;
font-size: 40px;
`;
const Div = styled.div`
width: 100%;
/* background-color:  green; */
display: flex;
justify-content:space-between;
align-items: center;
height: max-content;
padding: 0.55rem 0;
`;
const P = styled.span``;
const Button = styled.button`

`;
// const CarouselHold = styled.div`
// width: 100%;
// /* height: 40vh; */
// object-fit: cover;
// border-radius: 8px;
// `;