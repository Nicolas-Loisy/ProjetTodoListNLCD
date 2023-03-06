import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function MyMap() {
  const position = [48.86, 2.34];
  return (
    <MapContainer className="map" center={position} zoom={11.5} style={{ height: 500, width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      
      {/* Pour ajouter un marker et cliquer dessus => TODO trouver une alternative sans avoir besoin de creer les marker */}
      <Marker position={[48.8566, 2.3522]}>
        <Popup>
          Place de la Concorde
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default MyMap;
