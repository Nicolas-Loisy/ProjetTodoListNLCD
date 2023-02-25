import React, { Component } from "react";
import { api } from "../lib/Api";
import { Navigate } from "react-router-dom";

class AddCarte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      type: "",
      listId: "",
      lists: [],
      message: "" // message de confirmation
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Récupérer toutes les listes pour la liste déroulante
    api.getLists().then(lists => {
      this.setState({ lists });
    });
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
      // Mettre à jour l'état pour afficher le message
      this.setState({ message: "Carte ajoutée" });
      // Rediriger l'utilisateur vers la page de la liste parente
      const listUrl = `/lists/${this.state.listId}`;
      return <Navigate to={listUrl} />;
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Contenu:
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleInputChange}
          ></textarea>
        </label>
        <br />
        <label>
          Type:
          <select
            name="type"
            value={this.state.type}
            onChange={this.handleInputChange}
            defaultValue="text"
          >
            <option value="text">Texte</option>
            <option value="image">Image</option>
          </select>
        </label>
        <br/>
        <label>
          Liste:
          <select
            name="listId"
            value={this.state.listId}
            onChange={this.handleInputChange}
          >
            <option value="">-- Sélectionner une liste --</option>
            {this.state.lists.map(list => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </select>
        </label>
        <br/>
        <button type="submit">Ajouter</button>
        {this.state.message && <p>{this.state.message}</p>}
      </form>
    );
  }
}

export default AddCarte;
