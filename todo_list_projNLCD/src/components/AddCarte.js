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
      message: "",
      checkboxContent: [] // Ajout du tableau pour stocker les contenus de checkbox
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

  // Ajout de la fonction pour ajouter une checkbox
  handleAddCheckbox = (event) => {
    event.preventDefault();
    const checkboxContent = this.state.checkboxContent.concat({ content: "", checked: "false" }); // Ajout d'un objet avec une clé "content" et une clé "checked" initialisée à false
    this.setState({ checkboxContent });
  }
  
  
  handleSubmit(event) {
    event.preventDefault();
    const { listId, title, type, content, checkboxContent } = this.state;
    const carteContent = type === "Checkbox" ? checkboxContent.map((c) => ({ label: c, checked: false })) : content;
    // const carteContent = type === "Checkbox" ? checkboxContent : content; // Utilisation du tableau de contenus de checkbox si type est checkbox

    api.addCarte(
      listId,
      title,
      type,
      carteContent // Utilisation de carteContent au lieu de content
    ).then(() => {
      this.props.onUpdate();
      this.setState({ message: "Carte ajoutée" });
    });
  }

  render() {
    const { type, content, checkboxContent } = this.state;

    return (
      <form className="p-3" onSubmit={this.handleSubmit}>
        <div className="mb-3 g-3">
          <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Titre carte" maxLength="25" required />
        </div>

        <div className="mb-3 g-3">
          <select className="form-select" name="type" onChange={this.handleInputChange} defaultValue="" required >
            <option value="" disabled>
              Sélectionnez le type de carte
            </option>
            <option value="Texte">Texte</option>
            <option value="Checkbox">Checkbox</option>
          </select>
        </div>

        <div className="mb-3">
          {type === "Checkbox" ? ( // Condition pour afficher soit le textarea soit les checkboxes
            <div>
              {checkboxContent.map((checkbox, index) => (
                <div key={index}>
                  <div class="row">
                  <input
                    type="text"
                    className="col m-2 form-control "
                    value={checkbox.label}
                    onChange={(e) => {
                      const { value } = e.target;
                      const updatedContent = checkboxContent.map((c, i) =>
                        i === index ? value : c
                      );
                      this.setState({ checkboxContent: updatedContent });
                    }}
                    placeholder="Contenu de la checkbox"
                    required
                  />
                  <button
                    className="btn btn-danger m-2 col-auto d-inline-block btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const updatedContent = checkboxContent.filter(
                        (_, i) => i !== index
                      );
                      this.setState({ checkboxContent: updatedContent });
                    }}
                  >
                    X
                  </button>
                  </div>
                </div>
              ))}
              <button className="btn btn-primary mt-2" onClick={this.handleAddCheckbox}>
                + Ajouter une checkbox
              </button>
            </div>
          ) : (
            <textarea type="text" className="form-control" name="content" value={content} onChange={this.handleInputChange} placeholder="Contenu de la carte" required />
          )}
        </div>

        

    <div className="mb-3 g-3">
      <button type="submit" className="btn btn-primary">
        Ajouter une carte
      </button>
    </div>
  </form>
);
}
}

export default AddCarte;
