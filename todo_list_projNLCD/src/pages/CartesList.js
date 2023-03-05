import React from "react";
import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {api} from "../lib/Api";
import SearchField from "../components/SearchField";

export default class CartesList extends React.Component {
    state = {
        "cartes":[],
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
                                            {v.content}
                                        </Typography>
                                        <Typography>
                                            Liste : {v.lists.title}
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
        let results = this.state.cartes;
        if(search.length > 1){
            results = this.state.cartes.filter(q=>{
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
        const cartes = await api.getCartes();
        this.setState({
            ...this.state,
            cartes: cartes,
            results: cartes
        });
    }
}