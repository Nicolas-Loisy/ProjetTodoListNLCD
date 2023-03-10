import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import iconMap from "../img/epingle-rouge.png";

function MyMap() {
  const position = [48.86, 2.34];
  const [markers, setMarkers] = useState([]);

  const iconMarker = L.icon({
    iconUrl: iconMap,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

  const addMarker = (e) => {
    console.log(e);
    const newMarker = {
      // position: [e.latlng.lat, e.latlng.lng],
      position: [e.x, e.y],
      title: "Nouvelle épingle"
    };
    setMarkers([...markers, newMarker]);
  };

  useEffect(() => {
    const map = document.querySelector(".leaflet-container");
    map.addEventListener("click", addMarker);
    return () => {
      map.removeEventListener("click", addMarker);
    };
  });

  return (
    <MapContainer
      className="map"
      center={position}
      zoom={11.5}
      style={{ height: 500, width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={iconMarker}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MyMap;
