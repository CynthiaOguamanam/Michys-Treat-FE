import React from "react";
import styled from "styled-components";

const Service = () =>{
    return(
        <Container>
            <Wrapper>
                <H4>Professional Services</H4>
                <H1>Michy bjbhj jabuf jbuoqbh iboaae suoaebi</H1>
                <P>buujbd ufhebfu bvjhief uheiejhisfbf ksnwuwiwhf bdcjw ifwibdwjj wifhwfbvijbwmndwief uifbwjfwhfwfbwj uwfjkfboo saobhibuiebui ubhfeufeeiofjbohf</P>
                <Button>Get Started</Button>
            </Wrapper>
        </Container>
    )
};

export default Service;

const Container = styled.div`
width: 100%;
height: 50vh;
background-image: radial-gradient(#000000, #CA6905);
display :flex;
justify-content: center;
align-items: center
`;
const Wrapper = styled.div`
width: 90%;
height: 90%;
// background-color: whitesmoke;
display : flex;
flex-direction: column;
align-items: center;
`;
const H4 = styled.h4``;
const H1 = styled.h1``;
const P = styled.p``;
const Button = styled.button`
padding: 10px 20px;
background: linear-gradient(90deg, #000000, #CA6905);
`;

