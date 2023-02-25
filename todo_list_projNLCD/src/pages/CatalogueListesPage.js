import React, { Component } from "react";
import { Box, Container } from "@mui/system";
import {api} from "../lib/Api";
import { Link } from "react-router-dom";

export default class CatalogueListesPage extends React.Component {
    state = {
        "listes":[]
    };
        
    render(){
        return ( 
            <Container maxWidth = "sm">
                {
                    this.state.listes.map((v)=>{
                        return(
                            <dr>
                                <td>{v.title}</td>
                                <td><Link to={`/listes/${v.id}`}>GO</Link></td>
                                <br/>
                            </dr>
                        );
                    })
                }
            </Container>
        )
    }

    async componentDidMount(){
        const listes = await api.getLists();
        this.setState({listes: listes});
    }
}