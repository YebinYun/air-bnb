import React, { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Select } from "@mui/material";
import countries from "world-countries";
import { map } from "leaflet";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

console.log("@countries:", countries);

const ReservationMapSearch = () => {
  const [coords, setCoords] = useState({
    lat: 37.5761827,
    lng: 126.8998998,
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords({
        lat: latitude,
        lng: longitude,
      });
    });
  }, []);

  console.log("##coords:", coords);
  const onChangeHandler = (e) => {
    console.log("e", e);
    const lat = e.target.value.split(",")[0];
    const lng = e.target.value.split(",")[1];
    setCoords({
      lat: Number(lat),
      lng: Number(lng),
    });
  };

  return (
    <>
      <select
        onChange={(e) => {
          onChangeHandler(e);
        }}
      >
        {countries?.map((x) => (
          <option value={x?.latlng}>{x?.name?.common}</option>
        ))}
      </select>
      <Map lat={Number(coords.lat)} lng={Number(coords.lng)} />
    </>
  );
};

export default ReservationMapSearch;
