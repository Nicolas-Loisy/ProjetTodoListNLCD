import React, { Component } from "react";
import withRouter from "../lib/withRouter";
import {api} from "../lib/Api";
import { Container } from "@mui/system";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Carte from "../components/Carte";

class ListePage extends React.Component {

	state = {
		liste:{
			id: "", 
			title: "", 
			cartes: []
		}
	}; 
            
    render(){
        return (
            <Container>
                <Grid container spacing={2}>
                    {
                        this.state.liste.cartes.map(carte=>{
                            return (
                                <Grid item xs={12} key={carte.id} sm={4}> 
                                    <Carte liste={this.state.liste} carte={carte}/>
                                </Grid>
                            )
                        })        
                    }
                </Grid>
            </Container>
        );
    }

    async componentDidMount(){
        api.getList(this.props.params.id).then(liste =>{
            this.setState({liste});
        });
    }
}
export default withRouter(ListePage);