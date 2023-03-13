import React from "react";
import { Container } from "@mui/system";
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