import { Link } from "react-router-dom";
import styled from "styled-components";

export const Maincontainer = styled.div`
width: 100%;
height: 89.2%;
background-color: red;
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width:768px){
    flex-direction: column;

}
`;
export const Container = styled.div`
width: 15%;
height:100%;
background-color: #51046E;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: flex-start; */
margin-top: 80px;

color: white;

@media Screen and (max-width: 768px){
    width: 100%;
    height: 17%;
    background: linear-gradient(to left, #51046E ,black,);
    margin-top: 500px;
    flex-direction: row;
    justify-content: space-around;
}

`;

export const Span = styled(Link)`
text-align: center;
text-decoration: none;
color: white;
        /* background-color: black; */

&:hover{
        background: linear-gradient(to right, black, #51046E);
        padding: 10px;
        border-radius: 10px;
        width: 85%;
        height: auto;
        cursor: pointer;
        transition: all 300ms ease;

        @media Screen and (max-width: 768px){
            width: auto;
            padding: 2px 5px;
        }
        // text-align: center;
    }
`;

export const DashContainer = styled.div`
width: 85%;
background-color: green;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 40px;
`;
