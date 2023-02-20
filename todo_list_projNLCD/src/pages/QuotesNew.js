import React, { Component } from "react";
import AuthorsSelector from "../components/AuthorsSelector";

import {api} from "../lib/Api";
import {Navigate} from "react-router-dom";

export default class QuotesNew extends React.Component {
    state = {
        "authors":[],
        "content": '',
        "authorId": 1,
        "confirmation": false
    };
    
    async componentDidMount(){
        const authors = await api.getAuthors();
        this.setState({...this.state, authors});
    }

    render() {
        return (
          <div>
            {this.state.confirmation && <Navigate replace to="/quotes" />}
            <form onSubmit={e => this.submit(e)}>
              <textarea value={this.state.content} onChange={e => this.updateContent(e)}></textarea>
              <AuthorsSelector value={this.state.authorId} onChange={e => this.updateAuthor(e)} />
              <button type="submit">Créer</button>
            </form>
          </div>
        )
    }

    updateAuthor(event) {
        this.setState({
            ...this.state,
            authorId: event.target.value,
            confirmation: false,
        });
    }
    
    updateContent(event) {
        this.setState({
            ...this.state,
            content: event.target.value,
            confirmation: false,
        });
    }
    
    async submit(event) {
        console.log("Insert OK");
        event.preventDefault();
        await api.insertQuote(this.state.content, this.state.authorId);
        this.setState({...this.state, confirmation: true});
        console.log(this.state);
    }
}