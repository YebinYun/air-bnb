import React from "react";
import dynamic from "next/dynamic";
import countryCapital from "./countryCapital.json";
import { useBookingInfoChangeHandler } from "@/store/getHotelListQuery";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const ReservationMapSearch = () => {
  const { handleOnBookingInfoChange, bookingInfo } =
    useBookingInfoChangeHandler();

  return (
    <>
      <select
        name="coords"
        style={{ margin: "1rem 0", padding: "1rem" }}
        onChange={handleOnBookingInfoChange}
      >
        {countryCapital?.map((x, index) => (
          <option key={index} value={`${x?.lat + "/" + x?.lng}`}>
            {x?.Country}
          </option>
        ))}
      </select>
      <Map lat={bookingInfo?.lat} lng={bookingInfo?.lng} />
    </>
  );
};

export default ReservationMapSearch;
