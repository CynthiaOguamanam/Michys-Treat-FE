import styled from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
width: 100%;
height: 80px;
background-color: purple;
background: linear-gradient(to left, black,#CA6905 );
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
/* backdrop-filter: blur(10px); */

z-index: 1;

@media Screen and (max-width: 768px){
    background: linear-gradient(to left, black,#CA6905 );
    /* background: linear-gradient(to left, black,#51046E ); */
}
`;
export const Wrapper = styled.div`
width: 90%;
height: 90%;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    width: 90%;
}
`;
export const Logo = styled.img`
width: 5%;
height: 90%;
object-fit: cover;
border-radius: 30%;

@media Screen and (max-width: 768px){
    width: 25%;
}
`;

export const NavHold = styled.div`
width: 35%;
/* background-color: white; */
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;

@media Screen and (max-width: 768px){
    display: none;
}
`;
// export const NavHold = styled.div`
// width: 40%;
// height: 100%;
// display: flex;
// justify-content: space-between;
// align-items: center;
// background-color: red;


// @media Screen and (max-width: 768px){
//     flex-direction: column;
//     width: 100%;
//     position: absolute;
//     /* background-color: rgba(0, 0, 0, 0.1); */
//     background: linear-gradient(to left, darkgrey,purple );
//     height: 40vh;
//     /* transition: all ease 1s; */
//     transition: left 3s ease;
//     justify-content: space-evenly;
//     left: ${({toggle}) => (toggle? 0 : "0%")};
//     margin-top: 80px;
//     backdrop-filter: blur(9px);
//     /* position: fixed; */
//     top:0;
//     z-index:1;
// }

// `;
export const Nav = styled(Link)`
color: whitesmoke;
font-weight: bold;
font-size: 18px;
font-family:san-serif;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items:center;
text-decoration: none;

`;
export const MobileNav = styled.div`
position: absolute;
width: 80%;
height: 250px;
background: linear-gradient(to left, grey,#CA6905 );
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
transition: left 3s ease;
color: whitesmoke;
/* z-index: 1; */

@media Screen and (max-width: 768px){
    width: 90%;
    top: 0;
    z-index: 1;
    left: ${({toggle}) => (toggle? 0 : "4%")};
    transition: left 3s ease;
    margin-top: 83px;
    backdrop-filter: blur(10px);


}
@media Screen and (max-width: 500px){
    left: ${({toggle}) => (toggle? 0 : "5%")};
    width: 90%;
    top: 0;
    z-index: 1;
    transition: left 3s ease;
    margin-top: 83px;
/* backdrop-filter: blur(90px); */
}

`;
export const BurgerWrap = styled.div`
display: none;
z-index: 2;
right: 30px;
font-size: 30px;
cursor: pointer;
color: white;

@media Screen and (max-width: 525px){
  display: block;
  position: absolute;

}
`;
export const AuthHold = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
height: 40%;
width: 24%;

@media Screen and (max-width: 768px){
    height: 20px;
    width: 50%;
}
`;
export const Line = styled.div`
width: 2px;
height: 90%;
background-color: whitesmoke;

`;
