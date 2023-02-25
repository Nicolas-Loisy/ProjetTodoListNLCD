import React, { Component } from "react";
import { api } from "../lib/Api";
import { Navigate } from "react-router-dom";

class AddList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      redirect: false,
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    await api.addList(this.state.title);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <h2>Ajouter une liste</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Titre:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>
          <br />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default AddList;
