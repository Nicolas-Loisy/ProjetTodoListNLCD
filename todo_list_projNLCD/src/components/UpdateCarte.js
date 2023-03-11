import React, { Component } from "react";
import { api } from "../lib/Api";


class UpdateCarte extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.carte.title,
      content: props.carte.content,
      type: props.carte.type,
      listId: props.carte.listId,
      //lists: [],
      message: "", // message de confirmation
      checkboxContent: props.carte.type === "checkbox" ? props.carte.content : [], // Tableau pour stocker les contenus de checkbox

    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { carte } = this.props;
    this.setState({
      title: carte.title,
      content: carte.content,
      type: carte.type,
      checkboxContent: carte.type === "checkbox" ? carte.content : [],
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

  // Ajout de la fonction pour ajouter une checkbox
  handleAddCheckbox = (event) => {
    event.preventDefault();
    const checkboxContent = this.state.checkboxContent.concat({ content: "", checked: "false" }); // Ajout d'un objet avec une clé "content" et une clé "checked" initialisée à false
    this.setState({ checkboxContent });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Modifier une carte existante
    api.updateCarte(
      this.props.carte.id,
      this.state.listId,
      this.state.title,
      this.state.type,
      this.state.content
    ).then(() => {
      this.props.onUpdate();
      this.setState({ message: "Carte modifiée" });
    });
  }

  render() {
    const { type, content, checkboxContent } = this.state;

    return (
      <form className="p-3" onSubmit={this.handleSubmit}>
        <div className="mb-3 g-3">
          <h5>Titre de votre carte</h5>
          <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.handleInputChange} placeholder="Titre carte" maxLength="25" required />
        </div>

        <div className="mb-3 g-3">
          {type === "Checkbox" ? ( // Condition pour afficher soit le textarea soit les checkboxes
            <div>
              <h5>Vos checkbox</h5>
              {content.map((checkbox, index) => (
                <div key={index}>
                  <div className="row">
                  <input
                    type="text"
                    className="col m-2 form-control "
                    value={checkbox.label}
                    onChange={(e) => {
                      const { value } = e.target;
                      const updatedContent = content.map((c, i) =>
                      i === index ? {"label":value, "checked":checkbox.checked} : c
                      );
                      this.setState({ content: updatedContent });
                    }}
                    placeholder="Contenu de la checkbox"
                    required
                  />
                  <button
                    className="btn btn-danger m-2 col-auto d-inline-block btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      const updatedContent = content.filter(
                        (_, i) => i !== index
                      );
                      this.setState({ content: updatedContent });
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

        {/* <div className="mb-3 g-3">
          <select className="form-select" name="type" onChange={this.handleInputChange} defaultValue="" required >
            <option value="" disabled>
              Sélectionnez le type de carte
            </option>
            <option value="Texte">Texte</option>
            <option value="Checkbox">Checkbox</option>
          </select>
        </div> */}

        <div className="d-flex justify-content-end">   
          <button className="btn btn-primary" type="submit">Modifier</button>
        </div>
        {this.state.message && <p>{this.state.message}</p>}
      </form>
    );
  }
}

export default UpdateCarte;
