import React from "react";
import dynamic from "next/dynamic";
import countryCapital from "./countryCapital.json";
import { useCoordsHandler } from "@/store/getHotelListQuery";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const ReservationMapSearch = () => {
  const { coordsSetHandler, coords } = useCoordsHandler();

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
        onChange={coordsSetHandler}
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
