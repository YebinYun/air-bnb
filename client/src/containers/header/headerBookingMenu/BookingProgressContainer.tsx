import BookingProgressComponent from "@/components/header/headerBookingMenu/BookingProgressComponent";
import React from "react";

type props = {
  pageIndex: number;
  travelMap: number;
  travelDate: number;
  travelGuest: number;
};

const BookingProgressContainer = ({
  pageIndex,
  travelMap,
  travelDate,
  travelGuest,
}: props) => {
  return (
    <BookingProgressComponent
      pageIndex={pageIndex}
      travelMap={travelMap}
      travelDate={travelDate}
      travelGuest={travelGuest}
    />
  );
};

export default BookingProgressContainer;
