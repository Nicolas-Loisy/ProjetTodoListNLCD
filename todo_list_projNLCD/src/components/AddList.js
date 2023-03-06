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

    await api.addList(this.state.title).then(() => {
      this.props.onUpdate();
      // this.setState({ redirect: true });
    })
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    }

    return (
      <div>
        <h2>Ajouter une liste</h2>
        <form className="p-3" onSubmit={this.handleSubmit}>
          <div className="mb-3 g-3">
            <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="Titre liste" maxLength="25" required/>
          </div>

          <div className="d-flex justify-content-end">   
            <button className="btn btn-primary" type="submit">Ajouter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddList;
