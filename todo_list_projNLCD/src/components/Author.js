import React, { Component } from "react";
import withRouter from "../lib/withRouter";
import {api} from "../lib/Api";
import { Container } from "@mui/system";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Quote from "./Quote";


class Author extends React.Component {

	state = {
		author:{
			id: "", 
			name: "", 
			quotes: []
		}
	}; 
            
    render(){
        return (
            <Container>
                <Grid container spacing={2}>
                    {
                        this.state.author.quotes.map(quote=>{
                            return (
                                <Grid item xs={12} key={quote.id} sm={4}> 
                                    <Quote author={this.state.author} quote={quote}/>
                                </Grid>
                            )
                        })        
                    }
                </Grid>
            </Container>
        );
    }

    async componentDidMount(){
        api.getAuthor(this.props.params.id).then(author =>{
            this.setState({author});
        });
    }
}
export default withRouter(Author);