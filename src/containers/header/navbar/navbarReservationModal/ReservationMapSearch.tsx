import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const ReservationMapSearch = () => {
  const [coords, setCoords] = useState({
    lat: "",
    lng: "",
  });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      // Show a map centered at latitude / longitude.

      setCoords({
        lat: latitude,
        lng: longitude,
      });
      console.log("latitude", position.coords);
    });
  }, []);

  return (
    <div>
      <div>adslkjfdjlkasafdsjl;kasdfjkl;</div>
      <Map lat={coords.lat} lng={coords.lng} />
    </div>
  );
};

export default ReservationMapSearch;
