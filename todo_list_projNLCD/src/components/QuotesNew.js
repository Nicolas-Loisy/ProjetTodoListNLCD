import React, { Component } from "react";

import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import {api} from "../lib/Api";
import SearchField from "./SearchField";

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
        const list = (
          <select value={this.state.authorId} onChange={e => this.updateAuthor(e)}>
            {
              this.state.authors.map(author => {
                return (
                  <option value={author.id}>{author.name}</option>
                )
              })
            }
          </select>
        );
        return (
          <div>
            {
              this.state.confirmation ? <div>Création confirmée <a href="/quotes">Retour à la liste</a></div> : ""
            }
            <form onSubmit={e => this.submit(e)}>
              <textarea value={this.state.content} onChange={e => this.updateContent(e)}></textarea>
              {list}
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