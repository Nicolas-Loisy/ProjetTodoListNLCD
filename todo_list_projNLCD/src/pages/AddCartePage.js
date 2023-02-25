import React, { Component } from "react";
import AddCarte from "../components/AddCarte";

class AddCartePage extends Component {
  render() {
    return (
      <div>
        <h1>Ajouter une carte</h1>
        <AddCarte match={this.props.match} />
      </div>
    );
  }
}

export default AddCartePage;
