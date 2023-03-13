import React, { Component } from "react";
import { Box, Container } from "@mui/system";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import iconMap from "../img/epingle-rouge.png"; // Image de l'icône

class AddMarkerToClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: null,
      title: "",
    };
  }

  render() {
    return (
      <>
        {this.state.position && (
          <Marker position={this.state.position} icon={this.props.iconMarker}>
            <Popup>
              <form>
                <label>
                  Title:
                  <input type="text" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                </label>
                <br />
                <label>
                  Latitude:
                  <input type="text" value={this.state.position[0]} readOnly />
                </label>
                <br />
                <label>
                  Longitude:
                  <input type="text" value={this.state.position[1]} readOnly />
                </label>
                <br />
                <button type="submit" onClick={() => this.props.onAddMarker(this.state.position, this.state.title)}>Add Marker</button>
              </form>
            </Popup>
          </Marker>
        )}
      </>
    );
  }
}

function MyMap() {
  const position = [48.86, 2.34];

  // Définir l'icône
  const iconMarker = L.icon({
    iconUrl: iconMap,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const handleAddMarker = (position, title) => {
    console.log("New marker added at:", position, "with title:", title);
    // TODO: Save the marker to the database
  };

  const AddMarkerOnClick = () => {
    const map = useMapEvents({
      click(e) {
        console.log("Map clicked at:", e.latlng);
        map.flyTo(e.latlng);
        // Set the state of the AddMarkerToClick component to update the marker popup
        this.setState({ position: [e.latlng.lat, e.latlng.lng] });
      },
    });

    return <AddMarkerToClick onAddMarker={handleAddMarker} iconMarker={iconMarker} />;
  };

  return (
    <MapContainer className="map" center={position} zoom={11.5} style={{ height: 500, width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Pour ajouter un marker et cliquer dessus => TODO trouver une alternative sans avoir besoin de creer les marker */}
      <AddMarkerOnClick />
    </MapContainer>
  );
}
