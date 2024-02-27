import React from "react";
import {
    Container,Span, Maincontainer,

} from "./sidenavStyle.js"

const SideNav = () =>{

    return(
        <Maincontainer>
            <Container>
            <br/>
            <br/>
            <br/>
            <Span>Home</Span>
            <br/>
            <br/>
            <br/>
            <Span>Orders</Span>
            <br/>
            <br/>
            <br/>
            <Span>Menu</Span>
            <br/>
            <br/>
            <br/>
            <Span>Messages</Span>
            </Container>
        </Maincontainer>

    )
};

export default SideNav;