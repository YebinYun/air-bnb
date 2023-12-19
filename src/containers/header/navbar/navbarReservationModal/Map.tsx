import React from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// world country 설치  그담에 react-select library 설치해서 select option 값으로 country 를 고를수 있게 하고, 고르면 해당 좌표로 이동!!

const Map = ({ lat, lng }) => {
  return (
    <MapContainer
      style={{ width: "100%", height: "450px" }}
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
};

export default Map;
