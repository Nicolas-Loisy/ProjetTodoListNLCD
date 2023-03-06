import React, { Component } from "react";
import { Box, Container } from "@mui/system";
import MyMap from "../components/MyMap";

export default class MyMapPage extends React.Component {
    render(){
        return ( 
            <Container maxWidth = "sm">
                <MyMap />
            </Container>
        )
    }
}