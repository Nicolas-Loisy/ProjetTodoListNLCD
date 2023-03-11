import React from "react";
import withRouter from "../lib/withRouter";
import {api} from "../lib/Api";
import { Container, Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
// import Carte from "../components/Carte";
import AddCarte from "../components/AddCarte";
import SearchField from "../components/SearchField";
import SearchResults from "../components/SearchResults";

class ListePage extends React.Component {

	state = {
		liste:{
			id: "", 
			title: "", 
			cartes: [],
            results: [],
            search : ""
		}
	}; 
    
            
    render(){
        console.log(this.state.liste); 
        return (
            <div>
                <Container>
                    {this.state.liste.cartes.length === 0 ? (
                        <Typography variant="h5">Aucune carte créée</Typography>
                    ) : (
                        <Grid container spacing={2}>
                            <Box sx={{marginBottom: "5px"}}>
                                <SearchField value={this.state.liste.search} onChange={(e) => this.search(e)} />
                            </Box>

                            <SearchResults results={this.state.liste.results} search={this.state.liste.search}/>

                            {/* {this.state.liste.cartes.map(carte=>{
                                return (
                                    <Grid item xs={12} key={carte.id} sm={4}> 
                                        <Carte liste={this.state.liste} carte={carte} onUpdate={() => this.updateList()}/>
                                    </Grid>
                                )
                            })}         */}
                        </Grid>
                    )}
                    <div className="d-flex justify-content-end">   
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCarte">
                            + Ajouter une carte
                        </button>
                    </div>
                    <div className="modal fade" id="addCarte" tabIndex="-1" aria-labelledby="addCarte" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="addCarte">Ajouter une carte</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <AddCarte listId={this.props.params.id} onUpdate={() => this.updateList()}></AddCarte>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    async componentDidMount(){
        api.getList(this.props.params.id).then((liste) => {
            this.setState({
              liste: {
                ...liste,
                results: liste.cartes
              }
            });
        });
    }

    search(event) {
        const search = event.target.value;
        let results = this.state.liste.cartes;
        if (search.length > 0) {
          results = this.state.liste.cartes.filter(carte => {
            return (carte.content.includes(search) || carte.title.includes(search))
            //return carte.content.includes(search)
          })
        }
        this.setState({
          liste: {
            ...this.state.liste,
            results,
            search
          }
        });
    }

    async updateList() {
        const liste = await api.getList(this.props.params.id);
        this.setState({ liste });
    }
}
export default withRouter(ListePage);