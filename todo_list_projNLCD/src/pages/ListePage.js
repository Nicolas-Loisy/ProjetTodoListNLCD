import React from "react";
import withRouter from "../lib/withRouter";
import {api} from "../lib/Api";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Carte from "../components/Carte";
import AddCarte from "../components/AddCarte";

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
            <div>
                <Container>
                    {this.state.liste.cartes.length === 0 ? (
                        <Typography variant="h5">Aucune To-do list créée</Typography>
                    ) : (
                        <Grid container spacing={2}>
                            {this.state.liste.cartes.map(carte=>{
                                return (
                                    <Grid item xs={12} key={carte.id} sm={4}> 
                                        <Carte liste={this.state.liste} carte={carte} onUpdate={() => this.updateList()}/>
                                    </Grid>
                                )
                            })}        
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
        api.getList(this.props.params.id).then(liste =>{
            this.setState({liste});
        });
    }

    async updateList() {
        const liste = await api.getList(this.props.params.id);
        this.setState({ liste });
    }
}
export default withRouter(ListePage);