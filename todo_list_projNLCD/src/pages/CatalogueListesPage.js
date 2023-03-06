import React from "react";
import { Container } from "@mui/system";
import {api} from "../lib/Api";
import { Link } from "react-router-dom";
import AddList from "../components/AddList";

export default class CatalogueListesPage extends React.Component {
    state = {
        "listes":[]
    };
        
    render(){
        return ( 
            <Container maxWidth = "sm">
                <AddList onUpdate={() => this.updateCatalogue()}/>
                
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th colSpan="1">Catalogue de vos To-do list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listes.map((v)=>{
                                return(
                                    <tr key={v.id}>
                                        <td>{v.title}</td>
                                        <td className="d-flex justify-content-end">
                                            <Link to={`/listes/${v.id}`}>
                                                <button type="button" className="btn btn-secondary me-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                                    </svg>
                                                </button>
                                            </Link>
                                            <button type="button" className="btn btn-outline-danger" onClick={() => this.handleSubmit(v.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                                                </svg>
                                            </button>
                                        </td>
                                        {/* <td className="d-flex justify-content-end">
                                        </td> */}
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </Container>
        )
    }

    async componentDidMount(){
        const listes = await api.getLists();
        this.setState({listes: listes});
    }

    handleSubmit(listId) {
        this.componentDidMount();
        api.deleteList(listId).then(() => {
          this.componentDidMount();
        });
    }

    async updateCatalogue() {
        const listes = await api.getLists();
        this.setState({ listes: listes });
    }
}