import React, { Component } from "react";

import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import {api} from "../lib/Api";
import SearchField from "./SearchField";

export default class QuotesList extends React.Component {
    state = {
        "quotes":[],
        "search":"",
        "results":[]
    };
        
    render(){
        return ( 
            <Container maxWidth = "sm">

                <SearchField value={this.state.search} onChange={e=>this.search(e)} />

                <Button>Valider</Button>
                {
                    this.state.results.map((v)=>{
                        return(
                            <Box mt={3}>
                                <Card>
                                    <CardContent>
                                        <Typography color="text.secondary">
                                            {v.actor}    
                                        </Typography>
                                        <Typography>
                                            {v.content}
                                        </Typography>
                                        <Typography>
                                            Author : {v.author.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        );
                    })
                }
            </Container>
        )
    }

    search(event){
        const search = event.target.value;
        let results = this.state.quotes;
        if(search.length > 1){
            results = this.state.quotes.filter(q=>{
                return q.content.includes(search);
            });
        }
        this.setState({
            ...this.state,
            search,
            results
        });
    }

    async componentDidMount(){
        const quotes = await api.getQuotes();
        this.setState({
            ...this.state,
            quotes: quotes,
            results: quotes
        });
    }
}