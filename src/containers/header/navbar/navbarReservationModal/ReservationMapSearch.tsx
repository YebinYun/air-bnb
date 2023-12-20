import React from "react";
import dynamic from "next/dynamic";
import countryCapital from "./countryCapital.json";
import { useNavigatePage } from "@/store/useNavigatePage ";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const ReservationMapSearch = () => {
  const { coords, countyHandler } = useNavigatePage();

  console.log(coords);

  // useEffect(() => {
  //   const watchId = navigator.geolocation.watchPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     setCoords({
  //       // lat: latitude,
  //       // lng: longitude,
  //     });
  //   });
  // }, []);

  return (
    <>
      <select
        style={{ margin: "1rem 0", padding: "1rem" }}
        onChange={(e) => {
          countyHandler(e);
        }}
      >
        {countryCapital?.map((x, index) => (
          <option key={index} value={`${x?.lat + "/" + x?.lng}`}>
            {x?.Country}
          </option>
        ))}
      </select>
      <Map lat={coords?.lat} lng={coords?.lng} />
    </>
  );
};

export default ReservationMapSearch;
