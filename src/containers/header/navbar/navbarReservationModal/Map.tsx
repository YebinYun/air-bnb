import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";

type props = {
  lat: number;
  lng: number;
};

const Map = ({ lat, lng }: props) => {
  const Icon = icon({
    iconUrl: "images/map-marker.svg",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
  });

  return (
    <>
      <MapContainer
        key={lat}
        style={{ width: "100%", height: "400px" }}
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[lat, lng]} icon={Icon}></Marker>
      </MapContainer>
    </>
  );
};

export default Map;
