import React from "react";
import styled from "styled-components";
import starter from "../Assets/starter.jpg"
import set from "../Assets/jollof2.jpg"
import maindish from "../Assets/breakfast.jpg"
import dessert from "../Assets/chocolate-cream.jpg"
// import maindish from "../Assets/jollof3.jpg"

const Whatyoulike = () =>{
    return(
        <Container>
            <B>What would you like today? 🌝🍳</B>
            <Wrapper>
                <Div>
                    <Img src={starter} alt="starter"/>
                    <Text>
                        <Title>Starter</Title>
                        <Desc>A refreshing mixed greens salad with balsamic vinaigrette, cherry tomatoes, and crumbled feta cheese, offering a delightful blend of flavors and textures to kickstart your meal.</Desc>
                    </Text>
                </Div>
                <Div>
                    <Img src={maindish} alt="main dish"/>
                    <Text>
                        <Title>Brunch</Title>
                        <Desc>Brunch is a late morning or early afternoon meal that combines elements of breakfast and lunch, typically featuring a variety of both sweet and savory dishes.</Desc>
                    </Text>
                </Div>
                <Div>
                    <Img src={set} alt="starter"/>
                    <Text>
                        <Title>Main Dish</Title>
                        <Desc>Grilled lemon-herb chicken breast served with garlic-infused quinoa and roasted vegetables, creating a savory and wholesome main dish.</Desc>
                    </Text>
                </Div>
                <Div>
                    <Img src={dessert} alt="starter"/>
                    <Text>
                        <Title>Dessert</Title>
                        <Desc>Decadent chocolate lava cake drizzled with raspberry coulis, accompanied by a scoop of velvety vanilla ice cream for a heavenly and indulgent dessert experience.</Desc>
                    </Text>
                </Div>
            </Wrapper>
        </Container>
    )
};
export default Whatyoulike;

const Container = styled.div`
width: 100%;
height: 70vh;
background-color: whitesmoke;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding: 20px 0;

@media Screen and (max-width: 768px){
    height: max-content;
}
`;

const B = styled.b`
/* color: #303030; */
font-size: 25px;
text-align: center;
`;

const Wrapper = styled.div`
width: 90%;
height: 85%;
/* background-color: red; */
display: flex;
justify-content: space-between;
flex-wrap: wrap;
@media Screen and (max-width: 768px){
    height: max-content;
}
`; 
const Div = styled.div`
width: 45%;
/* background-color: purple; */
height: 40%;
margin: 10px;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    width: 90%;
    height: 250px;
    flex-direction:column;
    margin: 20px 10px;

}

`; 

const Img = styled.img`
width: 40%;
height: 100%;
object-fit: cover;
border-radius: 5px;

@media Screen and (max-width: 768px){
    width: 100%;
    height: 40%;
}

`;
const Text = styled.div`
width: 55%;
height: 100%;
display: flex;
flex-direction :column;
/* color: #303030; */
justify-content: center;
@media Screen and (max-width: 768px){
    width: 100%;
    /* height: 30%; */
}
`;
const Title = styled.span`
font-size: 18px;
font-weight: bold;
margin: 5px 0;
`;
const Desc = styled.span`

`;

