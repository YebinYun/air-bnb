"use client";

import React from "react";
import dynamic from "next/dynamic";
import countryCapital from "@/utils/countryCapital.json";
import { useBookingInfoChangeHandler } from "@/store/userPage/bookingHotelListData";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

const BookingMapSearch = () => {
  const { handleOnBookingInfoChange, bookingInfo } =
    useBookingInfoChangeHandler();

  return (
    <>
      <select
        name="coords"
        style={{ margin: "1rem 0", padding: "1rem", width: "100%" }}
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

export default BookingMapSearch;
