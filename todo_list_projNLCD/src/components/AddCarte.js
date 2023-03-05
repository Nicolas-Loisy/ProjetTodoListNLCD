import React, { Component } from "react";
import { api } from "../lib/Api";

class AddCarte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      type: "",
      listId: props.listId,
      lists: [],
      message: "" // message de confirmation
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Ajouter une nouvelle carte
    api.addCarte(
      this.state.listId,
      this.state.title,
      this.state.type,
      this.state.content,
    ).then(() => {
      this.props.onUpdate();
      this.setState({ message: "Carte ajoutée" });
    });
  }

  render() {
    return (
      <form className="p-3" onSubmit={this.handleSubmit}>
        <div className="mb-3 g-3">
          <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Titre carte" maxLength="25" required/>
        </div>

        <div className="mb-3 g-3">
          <textarea type="text" className="form-control" name="content" value={this.state.content} onChange={this.handleInputChange} placeholder="Contenu de la carte" required></textarea>
        </div>

        <div className="mb-3 g-3">
          <select className="form-select" name="type" onChange={this.handleInputChange} defaultValue="" required>
            <option value="">-- Séléctionner un type --</option>
            <option value="Texte">Texte</option>
            <option value="Image">Image</option>
          </select>
        </div>

        {/* <div className="mb-3 g-3">
          <select className="form-select" name="listId" value={this.state.listId} onChange={this.handleInputChange} required>
            <option value="" selected>-- Sélectionner une liste --</option>
            {this.state.lists.map(list => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </div> */}

        <div className="d-flex justify-content-end">   
          <button className="btn btn-primary" type="submit">Ajouter</button>
        </div>
        {this.state.message && <p>{this.state.message}</p>}
      </form>
    );
  }
}

export default AddCarte;
