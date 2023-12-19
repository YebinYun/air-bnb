import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";

// world country 설치  그담에 react-select library 설치해서 select option 값으로 country 를 고를수 있게 하고, 고르면 해당 좌표로 이동!!

const Map = ({ lat, lng }) => {
  const ICON = divIcon();

  return (
    <>
      <MapContainer
        key={lat}
        style={{ width: "100%", height: "400px", margin: "2rem 0 " }}
        center={[lat, lng]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={ICON} position={[lat, lng]} />
      </MapContainer>
    </>
  );
};

export default Map;
